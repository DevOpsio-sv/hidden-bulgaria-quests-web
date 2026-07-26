/**
 * POST /api/partner-enquiry
 *
 * Cloudflare Pages Function. Accepts the partner enquiry form, validates it
 * server-side, and delivers it through the Cloudflare Email Service REST API.
 * Nothing is stored. There is no database, no queue and no third-party vendor.
 *
 * One submission contract serves both paths:
 *   - the enhanced path fetches this endpoint and asks for JSON
 *   - the no-JavaScript path posts natively and is redirected to a result page
 * Identical parsing and identical validation; only the reply differs.
 *
 * Required environment (configured in Cloudflare, never committed):
 *   CF_ACCOUNT_ID          Cloudflare account id that owns Email Sending
 *   CF_EMAIL_API_TOKEN     API token with the email sending permission (secret)
 *   PARTNER_ENQUIRY_TO     verified destination address for enquiries
 *   PARTNER_ENQUIRY_FROM   sender address on a domain in the same account
 */

import {
  MAX_BODY_BYTES,
  buildSubject,
  buildText,
  isAcceptedSendResult,
  normaliseLang,
  validateEnquiry,
} from "./_validation.mjs";

const SEND_ENDPOINT = (accountId) =>
  `https://api.cloudflare.com/client/v4/accounts/${accountId}/email/sending/send`;

const SEND_TIMEOUT_MS = 10_000;

/**
 * Diagnostics only. Field *names* and outcome classes are recorded; no
 * organisation, address or message content ever reaches the log.
 */
function log(context, fields) {
  const ray = context.request.headers.get("cf-ray") || "-";
  console.log(JSON.stringify({ at: "partner-enquiry", ray, ...fields }));
}

function wantsJson(request) {
  const accept = request.headers.get("accept") || "";
  return accept.includes("application/json");
}

function jsonResponse(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "referrer-policy": "no-referrer",
      "x-content-type-options": "nosniff",
    },
  });
}

/**
 * Same-origin result page. The path is fixed and the language comes from a
 * whitelist, so no submitted value can influence the destination.
 */
function redirectResponse(request, lang, status) {
  const target = new URL(
    `/${normaliseLang(lang)}/partners/${status}`,
    new URL(request.url).origin,
  );
  return new Response(null, {
    status: 303,
    headers: {
      location: target.toString(),
      "cache-control": "no-store",
      "referrer-policy": "no-referrer",
    },
  });
}

/** Generic recoverable failure. Never names the provider or the cause. */
function failure(request, lang, status = 502, code = "delivery") {
  return wantsJson(request)
    ? jsonResponse({ ok: false, error: code }, status)
    : redirectResponse(request, lang, "not-sent");
}

function success(request, lang) {
  return wantsJson(request)
    ? jsonResponse({ ok: true }, 200)
    : redirectResponse(request, lang, "sent");
}

/** Deliver through Cloudflare Email Service. Returns true only on acceptance. */
async function deliver(context, data) {
  const { env } = context;
  const accountId = env.CF_ACCOUNT_ID;
  const token = env.CF_EMAIL_API_TOKEN;
  const to = env.PARTNER_ENQUIRY_TO;
  const from = env.PARTNER_ENQUIRY_FROM;

  if (!accountId || !token || !to || !from) {
    // Report which knob is missing, never its value.
    log(context, {
      outcome: "misconfigured",
      missing: [
        !accountId && "CF_ACCOUNT_ID",
        !token && "CF_EMAIL_API_TOKEN",
        !to && "PARTNER_ENQUIRY_TO",
        !from && "PARTNER_ENQUIRY_FROM",
      ].filter(Boolean),
    });
    return false;
  }

  let response;
  try {
    response = await fetch(SEND_ENDPOINT(accountId), {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        to,
        from,
        reply_to: data.email,
        subject: buildSubject(data),
        text: buildText(data),
      }),
      signal: AbortSignal.timeout(SEND_TIMEOUT_MS),
    });
  } catch (error) {
    // Network failure or timeout. The name is safe; the message is not logged.
    log(context, { outcome: "send-error", kind: error?.name || "unknown" });
    return false;
  }

  if (!response.ok) {
    log(context, { outcome: "send-rejected", status: response.status });
    return false;
  }

  // A 200 from the API is not on its own an acceptance — the envelope
  // carries the verdict, and a permanent bounce must not read as delivered.
  let payload;
  try {
    payload = await response.json();
  } catch {
    log(context, { outcome: "send-unparseable", status: response.status });
    return false;
  }

  if (!isAcceptedSendResult(payload)) {
    log(context, {
      outcome: "send-not-accepted",
      status: response.status,
      // Provider error codes are numeric identifiers, not user content.
      codes: Array.isArray(payload?.errors)
        ? payload.errors.map((e) => e?.code).filter(Boolean)
        : [],
    });
    return false;
  }

  log(context, { outcome: "delivered" });
  return true;
}

export async function onRequest(context) {
  const { request } = context;

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: { allow: "POST" } });
  }

  if (request.method !== "POST") {
    log(context, { outcome: "method-not-allowed", method: request.method });
    return wantsJson(request)
      ? jsonResponse({ ok: false, error: "method" }, 405)
      : new Response(null, { status: 405, headers: { allow: "POST" } });
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/x-www-form-urlencoded")) {
    log(context, { outcome: "unsupported-media-type" });
    return wantsJson(request)
      ? jsonResponse({ ok: false, error: "unsupported" }, 415)
      : redirectResponse(request, "en", "not-sent");
  }

  // Refuse an oversized body before reading it. Content-Length is advisory,
  // so the decoded text is measured again below.
  const declared = Number.parseInt(
    request.headers.get("content-length") || "0",
    10,
  );
  if (Number.isFinite(declared) && declared > MAX_BODY_BYTES) {
    log(context, { outcome: "too-large", declared });
    return wantsJson(request)
      ? jsonResponse({ ok: false, error: "tooLarge" }, 413)
      : redirectResponse(request, "en", "not-sent");
  }

  let raw;
  try {
    raw = await request.text();
  } catch {
    return failure(request, "en", 400, "malformed");
  }

  if (new TextEncoder().encode(raw).length > MAX_BODY_BYTES) {
    log(context, { outcome: "too-large" });
    return wantsJson(request)
      ? jsonResponse({ ok: false, error: "tooLarge" }, 413)
      : redirectResponse(request, "en", "not-sent");
  }

  /** @type {Record<string,string>} */
  const input = {};
  try {
    for (const [key, value] of new URLSearchParams(raw)) {
      input[key] = value;
    }
  } catch {
    return failure(request, "en", 400, "malformed");
  }

  const result = validateEnquiry(input);

  if (!result.ok) {
    if (result.reason === "honeypot") {
      // Answer exactly as a real submission would, and deliver nothing.
      log(context, { outcome: "honeypot" });
      return success(request, result.lang);
    }

    log(context, {
      outcome: "rejected",
      reason: result.reason,
      fields: result.errors ? Object.keys(result.errors) : [],
    });

    return wantsJson(request)
      ? jsonResponse(
          { ok: false, error: "invalid", errors: result.errors || {} },
          400,
        )
      : redirectResponse(request, result.lang, "not-sent");
  }

  const delivered = await deliver(context, result.data);
  return delivered
    ? success(request, result.lang)
    : failure(request, result.lang);
}
