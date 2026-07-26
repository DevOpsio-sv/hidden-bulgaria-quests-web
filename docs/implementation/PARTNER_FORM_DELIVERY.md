# Partner enquiry form — delivery path

*PR-003 · package P0-5. Owner-facing operational notes for the partner enquiry
form on `#partners`.*

---

## What this replaced

Before this change there was **no handler of any kind**. The form carried no
`method` and no `action`; an inline script in `src/layouts/Base.astro` cancelled
the submit, assembled a `mailto:partners@unlockingbulgaria.com?subject=…&body=…`
string, assigned it to `window.location.href`, and then set the note text to
*"Opening your email client with the inquiry."* — unconditionally, in hardcoded
English, whether or not anything opened.

No HTTP request was ever made. Delivery depended entirely on the visitor having
a configured mail client **and** pressing Send themselves. With JavaScript
disabled the form performed a `GET` to the current page, which discarded the
enquiry and copied its contents into the URL, browser history and referrer.

---

## What it is now

```
browser  ──POST /api/partner-enquiry──▶  Cloudflare Pages Function
                                          │  validate (server-side)
                                          ▼
                                        Cloudflare Email Service REST API
                                          │
                                          ▼
                                        PARTNER_ENQUIRY_TO
```

One endpoint serves both submission paths. The parsing and the validation are
identical; only the reply differs.

| Path | Request | Reply on success | Reply on failure |
|---|---|---|---|
| JavaScript enabled | `fetch` with `Accept: application/json` | `200 {"ok":true}` | `4xx`/`5xx` JSON, form values preserved |
| JavaScript disabled | native form POST | `303` → `/{lang}/partners/sent` | `303` → `/{lang}/partners/not-sent` |

The success state is shown **only** for an explicit `{"ok":true}`. A network
timeout, an ambiguous reply, a missing environment variable or a permanently
bounced address all produce the recoverable failure state.

No new client-side origin is introduced. The browser only ever talks to
`unlockingbulgaria.com`, so the existing `connect-src 'self'` and
`form-action 'self'` directives in `public/_headers` need no change.

---

## Environment variables

Set these in **Cloudflare → Pages → Settings → Environment variables**, for
**both** Preview and Production. None of them is committed.

| Name | Type | Purpose |
|---|---|---|
| `CF_ACCOUNT_ID` | plaintext | Account that owns Email Sending |
| `CF_EMAIL_API_TOKEN` | **secret** | API token with the email sending permission |
| `PARTNER_ENQUIRY_TO` | plaintext | Verified destination address for enquiries |
| `PARTNER_ENQUIRY_FROM` | plaintext | Sender address on a domain in the same account |

If any one of them is missing the Function logs which *name* is absent, never
its value, and returns the recoverable failure. It never reports success.

> **Preview must not reach the production inbox.** Point the Preview
> environment's `PARTNER_ENQUIRY_TO` at a separate address, or leave the
> Preview variables unset so preview submissions fail honestly instead of
> arriving unannounced.

### Local development

`wrangler pages dev` reads `.dev.vars` from the repository root. That file is
already listed in `.gitignore`. With no `.dev.vars` present, every well-formed
submission correctly ends in the failure state — which is the useful default
for testing the failure path.

---

## Field contract

The contract lives in one place, `functions/api/_validation.mjs`, and is
imported by the Function, by `PartnersSection.astro` (for `maxlength`) and by
the tests, so the three cannot drift apart.

| Field | Required | Max | Notes |
|---|---|---|---|
| `org` | yes | 120 | whitespace collapsed, all control characters stripped |
| `email` | yes | 254 | strict format; no whitespace, commas, semicolons or angle brackets |
| `region` | no | 120 | whitespace collapsed |
| `type` | no | 40 | must be one of eight stable slugs, not a localised label |
| `message` | yes | 4000 | newlines and tabs kept, other control characters stripped |
| `website` | — | — | honeypot; must arrive empty |
| `lang` | — | — | bounded to a published locale, so the redirect stays on-site |
| `ts` | — | — | form render time; enforced only when present |

Total body ceiling: **16 KB**. Unexpected fields are refused, not ignored.

**Partnership type slugs.** The `<option value>` attributes are language
independent (`municipality`, `museum`, `tourism`, `school`, `hotel`, `guide`,
`media`, `other`) and are index-aligned with `partners.fields.typeOptions` in
the locale files. Previously the value *was* the localised label, which the
server had no way to validate. If a locale's `typeOptions` array is ever
reordered or resized, the labels and slugs will disassociate — keep all
fourteen arrays in the same order and at eight entries.

---

## Security controls

- Credentials and the destination address live only in the environment.
- The email is sent as **`text/plain` only** — untrusted input is never
  interpolated into markup, so there is no HTML-escaping surface.
- Control characters are stripped from every single-line field, and the address
  format check rejects anything that could carry a second recipient. Header
  injection is therefore blocked before the value reaches the provider.
- Only `POST` with `application/x-www-form-urlencoded` is accepted.
- Bodies over 16 KB are refused, by declared length and again after decoding.
- Public errors are generic. Provider names, error text and configuration
  state are never returned to the browser.
- Logs record field *names*, outcome classes and the CF-Ray only. No
  organisation, address or message content is ever logged.
- The redirect target is assembled from a fixed path plus a whitelisted
  language, so no submitted value can cause an open redirect.

### Rate limiting — recommended owner action

The Function applies a honeypot, a minimum fill time, a body ceiling and
per-field caps. It deliberately adds **no** KV, D1 or Durable Object, so it
holds no cross-request state and cannot rate limit by itself.

If abuse appears, add a **Cloudflare WAF Rate Limiting Rule** in the dashboard —
no code change, no new infrastructure:

```
Field:  URI Path  equals  /api/partner-enquiry
Rate:   5 requests per 1 minute per IP
Action: Block (or Managed Challenge)
```

CAPTCHA is deliberately **not** used. There is no abuse evidence yet, and it
would add a third-party client-side origin to a site that currently has none
beyond the font host.

---

## Rollback

The change is independently reversible. In increasing order of severity:

1. **Disable delivery, keep honest failure.**
   Remove `CF_EMAIL_API_TOKEN` in Cloudflare and redeploy. Every submission
   then shows the recoverable failure state with the direct email address as
   the alternative. The form never claims success while the handler is
   disabled — this is the safe holding position.

2. **Remove the endpoint.**
   Delete `functions/api/` and redeploy. The Function returns 404; the enhanced
   path shows the failure state, and the no-JavaScript path shows the browser's
   404. Prefer step 1 over this.

3. **Restore the previous deployment.**
   Cloudflare Pages → Deployments → *Rollback to this deployment*. This restores
   the previous form behaviour, including the mailto hand-off, in one click.

4. **Revert the commit.**
   `git revert <sha>` restores `PartnersSection.astro`, the `Base.astro` inline
   script, the locale keys and the styles together.

**In-flight submissions.** A submission already accepted by the Email Service
is delivered regardless of rollback. A submission in flight when the deployment
switches fails closed: the visitor sees the failure state and their values are
still in the form, so nothing is silently lost.

**Verifying rollback.** Submit a marked enquiry after the rollback and confirm
the visitor-visible state matches what the running code can actually do — the
one outcome that must never occur is a success message with no delivery.

**Rotating the token.** Cloudflare → My Profile → API Tokens → *Roll*. Update
`CF_EMAIL_API_TOKEN` in both Pages environments and redeploy. Nothing in the
repository references the token value.

---

## Verification checklist for the owner

This PR cannot be closed until a real submission is confirmed received, and
that step needs credentials and inbox access that only the owner has.

1. Set the four variables in Preview and Production.
2. Submit through the public form with a unique marker,
   e.g. `PR003-PROD-<UTC timestamp>`, in the message field.
3. Record the timestamp, the browser-visible state, and the time of receipt.
4. Confirm the enquiry arrived at `PARTNER_ENQUIRY_TO` and that Reply-To is the
   submitter's address.
5. Check the Function logs and confirm no address or message content appears.
6. Force one failure (temporarily clear `CF_EMAIL_API_TOKEN`), confirm the
   visitor sees the failure state and their values survive, then restore the
   token and confirm the retry succeeds.
