# AI Change QA Checklist — Unlocking Bulgaria / Hidden Bulgaria Quests

> Every AI-generated change must pass all applicable items before it is considered complete.
> The agent performing the change is responsible for running through this checklist.

Last updated: 2026-05-30

---

## How to Use

1. Run through the checklist after making changes
2. Mark each item PASS / FAIL / N/A
3. Include the completed checklist in your change summary
4. Do not mark a task done if any item is FAIL

---

## 1. Build Integrity

- [ ] `npm run build` completes without errors
- [ ] `npm run check` passes with no JavaScript syntax errors
- [ ] TypeScript compilation produces no type errors
- [ ] No new `@ts-ignore` or `@ts-expect-error` comments added without explanation
- [ ] No unexpected new files generated in `dist/` (beyond the expected 13 language directories)

---

## 2. Navigation and Routing

- [ ] All existing navigation links still resolve correctly
- [ ] Hash anchors (`#how-it-works`, `#domains`, `#guardian-sight`, etc.) still point to correct sections
- [ ] Language prefix routing (`/en`, `/bg`, `/de`, etc.) still works for all 13 languages
- [ ] Root `/` still redirects to `/en` correctly
- [ ] No section IDs were renamed or removed

---

## 3. Language and Translation Consistency

- [ ] All user-visible text comes from the translation dict — no hardcoded strings in components
- [ ] New translation keys were added to `en.json` first
- [ ] New translation keys were added to all 13 language files (or at minimum a note explains which are pending)
- [ ] No translation keys were deleted without confirming they are unused
- [ ] Key naming follows camelCase dot-path convention (see `/docs/governance/NAMING_CONVENTIONS.md`)
- [ ] Bulgarian text is never hardcoded directly in Astro/HTML templates
- [ ] `getDict()` still resolves correctly for all supported languages

---

## 4. Responsive and Mobile Layout

- [ ] Layout renders correctly at mobile widths (320px minimum)
- [ ] Layout renders correctly at tablet widths (768px)
- [ ] Layout renders correctly at desktop widths (1280px+)
- [ ] No horizontal scroll introduced at any breakpoint
- [ ] Text remains readable at all sizes (no overflow or clipping)
- [ ] Touch targets are at least 44×44px on mobile

---

## 5. Accessibility and Readability

- [ ] All images have meaningful `alt` attributes (or `alt=""` for decorative images)
- [ ] All interactive elements have accessible labels or ARIA attributes
- [ ] Keyboard navigation still works (tab order is logical)
- [ ] Color contrast meets WCAG AA minimum (4.5:1 for normal text, 3:1 for large text)
- [ ] Skip link (`skipLink` i18n key) still present and functional
- [ ] ARIA landmark roles (`nav`, `main`, `footer`) are intact
- [ ] Screen reader–only content (sr-only classes) is not accidentally removed

---

## 6. No Broken Assets

- [ ] All images referenced in CSS or HTML are present in `public/` or `_assets/`
- [ ] `favicon.svg` is still present in `public/`
- [ ] No 404s for any asset referenced on the page
- [ ] CSS custom properties (variables) referenced in stylesheets are still defined

---

## 7. Code Quality

- [ ] No unused imports in modified files
- [ ] No dead code introduced (unreachable branches, unused variables)
- [ ] No duplicate component logic introduced (check for existing components before creating new ones)
- [ ] No console.log, console.warn, or debug statements left in production code
- [ ] No commented-out code blocks left without explanation

---

## 8. Dependencies

- [ ] `package.json` was not modified unexpectedly
- [ ] No new packages were added without project owner approval and a note in the change summary
- [ ] No packages were upgraded without noting the version change
- [ ] `package-lock.json` is consistent with `package.json`

---

## 9. Payment / Auth Regression (when applicable)

> Mark N/A if the change does not touch auth or payment code.

- [ ] Guest access scope is unchanged
- [ ] Login-required gates are unchanged
- [ ] Purchase flow entry points are unchanged
- [ ] Entitlement checks are unchanged

---

## 10. Entitlement Regression (when applicable)

> Mark N/A if the change does not touch access control logic.

- [ ] Route-level access control is unchanged
- [ ] Domain-level access control is unchanged
- [ ] Free/guest content boundaries are unchanged

---

## 11. AR Fallback Regression (when applicable)

> Mark N/A if the change does not touch AR-related code.

- [ ] Every AR moment still has a non-AR alternative path
- [ ] AR feature descriptions still include the "optional" framing
- [ ] Guardian Sight section accessibility text is intact

---

## 12. Design Pattern Integrity

- [ ] No new font families introduced
- [ ] No new color tokens that contradict the existing palette
- [ ] No icon set mixing (existing symbol set is preserved)
- [ ] No animation library added
- [ ] Spacing and rhythm remain consistent with existing sections

---

## 13. Cloudflare / Deployment Config

- [ ] `_headers` file is intact and unmodified (unless headers were the explicit task)
- [ ] `_redirects` file is intact (or updated with proper redirect for any route change)
- [ ] `wrangler.jsonc` is intact
- [ ] `astro.config.mjs` is intact (unless config was the explicit task)
- [ ] `sitemap.xml` and `robots.txt` are still valid

---

## Quick Sign-Off Template

Copy this into your change summary:

```
## QA Checklist Sign-Off

- Build integrity: PASS / FAIL
- Navigation and routing: PASS / FAIL / N/A
- Translation consistency: PASS / FAIL / N/A
- Responsive layout: PASS / FAIL / N/A
- Accessibility: PASS / FAIL / N/A
- Asset integrity: PASS / FAIL
- Code quality: PASS / FAIL
- Dependencies: PASS / FAIL
- Payment/auth regression: PASS / FAIL / N/A
- Entitlement regression: PASS / FAIL / N/A
- AR fallback regression: PASS / FAIL / N/A
- Design pattern integrity: PASS / FAIL / N/A
- Deployment config: PASS / FAIL / N/A

Signed off by: {Agent Name}
Date: {YYYY-MM-DD}
```
