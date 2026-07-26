/**
 * Partner enquiry — pure validation, normalisation and message building.
 *
 * No I/O, no platform APIs, no secrets. Imported by:
 *   - functions/api/partner-enquiry.js  (the Cloudflare Pages Function)
 *   - scripts/test-partner-enquiry.mjs  (node:test suite)
 *
 * Files under functions/ whose name begins with "_" are not routed by
 * Cloudflare Pages, so this module is importable but never reachable.
 */

/** Hard ceiling on the raw request body. Anything larger is refused unread. */
export const MAX_BODY_BYTES = 16 * 1024;

/** Minimum time between form render and submit, when the client reports one. */
export const MIN_FILL_MS = 3000;

/** Languages the site publishes. Used to bound the no-JS redirect target. */
export const SUPPORTED_LANGS = [
  "en", "bg", "de", "fr", "es", "it",
  "ro", "tr", "el", "hu", "zh", "ru", "ja", "sr",
];

/**
 * Stable, language-independent values for the "partnership type" select.
 * The visible labels are localised; these slugs are what crosses the wire.
 * Index-aligned with partners.fields.typeOptions in src/i18n/en.json.
 */
export const TYPE_VALUES = [
  "municipality",
  "museum",
  "tourism",
  "school",
  "hotel",
  "guide",
  "media",
  "other",
];

/** English labels for the recipient, so the email reads the same every time. */
const TYPE_LABELS_EN = {
  municipality: "Municipality / Local government",
  museum: "Museum or cultural institution",
  tourism: "Tourism business",
  school: "School or educational organization",
  hotel: "Hotel or accommodation",
  guide: "Guide or tour operator",
  media: "Media or press",
  other: "Other",
};

/**
 * The canonical field contract. Every consumer reads limits from here so the
 * client, the server and the tests cannot drift apart.
 *
 *   multiline: true  keeps \n and \t, strips every other control character
 *   multiline: false strips ALL control characters, which is what prevents
 *                    CR/LF from reaching an email header
 */
export const FIELDS = {
  org:     { required: true,  max: 120,  multiline: false },
  email:   { required: true,  max: 254,  multiline: false },
  region:  { required: false, max: 120,  multiline: false },
  type:    { required: false, max: 40,   multiline: false },
  message: { required: true,  max: 4000, multiline: true },
};

/** Name of the honeypot input. Must arrive empty. */
export const HONEYPOT_FIELD = "website";

/** Every field name the endpoint will accept. Anything else is unexpected. */
export const ACCEPTED_FIELDS = [
  ...Object.keys(FIELDS),
  HONEYPOT_FIELD,
  "lang",
  "ts",
];

// ── normalisation ────────────────────────────────────────────────────────

/** Strip control characters. Keeps \n and \t only when multiline. */
function stripControls(value, multiline) {
  const pattern = multiline
    ? /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g
    : /[\u0000-\u001F\u007F]/g;
  return value.replace(pattern, "");
}

/**
 * Normalise one submitted value.
 * Single-line: collapse all whitespace runs to one space, then trim.
 * Multiline:   normalise line endings, trim each line's trailing space,
 *              collapse 3+ consecutive newlines to 2, then trim.
 */
export function normaliseField(raw, multiline) {
  let value = typeof raw === "string" ? raw : "";
  value = value.normalize("NFC");
  value = stripControls(value, multiline);

  if (!multiline) {
    return value.replace(/\s+/g, " ").trim();
  }

  return value
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => line.replace(/[ \t]+$/g, ""))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Deliberately conservative address check. Rejects anything containing
 * whitespace, control characters, angle brackets, commas or semicolons, so a
 * validated address can never carry a second recipient or an injected header.
 */
export function isValidEmail(value) {
  if (typeof value !== "string") return false;
  if (value.length < 3 || value.length > FIELDS.email.max) return false;
  if (/[\s<>,;:"\\()[\]]/.test(value)) return false;
  return /^[^@]+@[^@.]+(\.[^@.]+)+$/.test(value);
}

/** Bound the language to something we publish, so redirects stay on-site. */
export function normaliseLang(raw) {
  const value = typeof raw === "string" ? raw.trim().toLowerCase() : "";
  return SUPPORTED_LANGS.includes(value) ? value : "en";
}

// ── validation ───────────────────────────────────────────────────────────

/**
 * Validate a submitted enquiry.
 *
 * @param {Record<string, string>} input  already-decoded form values
 * @param {{ now?: number }} [options]
 * @returns {{ ok: boolean, reason?: string, errors?: Record<string,string>,
 *             data?: object, lang: string }}
 *
 * `reason` is for the server only. `errors` maps a field name to an error
 * key ("required" | "email" | "tooLong") that the client renders in the
 * visitor's language; no user-facing text is produced here.
 */
export function validateEnquiry(input, options = {}) {
  const lang = normaliseLang(input.lang);

  // Honeypot. Silently accepted upstream, never delivered.
  const honeypot = typeof input[HONEYPOT_FIELD] === "string"
    ? input[HONEYPOT_FIELD].trim()
    : "";
  if (honeypot !== "") {
    return { ok: false, reason: "honeypot", lang };
  }

  // Timing. Only enforced when the client reported a render time, so the
  // no-JavaScript path is never penalised for not having one.
  const ts = Number.parseInt(String(input.ts ?? ""), 10);
  if (Number.isFinite(ts) && ts > 0) {
    const now = options.now ?? Date.now();
    const elapsed = now - ts;
    if (elapsed >= 0 && elapsed < MIN_FILL_MS) {
      return { ok: false, reason: "too-fast", lang };
    }
  }

  // Unexpected fields are refused rather than ignored, so the contract
  // cannot quietly widen.
  const unexpected = Object.keys(input).filter(
    (key) => !ACCEPTED_FIELDS.includes(key),
  );
  if (unexpected.length > 0) {
    return { ok: false, reason: "unexpected-field", lang };
  }

  /** @type {Record<string,string>} */
  const errors = {};
  /** @type {Record<string,string>} */
  const data = {};

  for (const [name, rule] of Object.entries(FIELDS)) {
    const value = normaliseField(input[name], rule.multiline);

    if (value === "") {
      if (rule.required) errors[name] = "required";
      data[name] = "";
      continue;
    }

    if (value.length > rule.max) {
      errors[name] = "tooLong";
      continue;
    }

    if (name === "email" && !isValidEmail(value)) {
      errors[name] = "email";
      continue;
    }

    if (name === "type" && !TYPE_VALUES.includes(value)) {
      errors[name] = "invalid";
      continue;
    }

    data[name] = value;
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, reason: "invalid", errors, lang };
  }

  return { ok: true, data: { ...data, lang }, lang };
}

// ── message building ─────────────────────────────────────────────────────

/**
 * Subject line. Built from a fixed prefix plus the organisation name with
 * every control character already stripped by normalisation, then hard-capped.
 * Plain text only — the message is never sent as HTML, so no untrusted value
 * is ever interpolated into markup.
 */
export function buildSubject(data) {
  const org = data.org || "Unlocking Bulgaria website";
  const subject = `Partnership enquiry — ${org}`;
  return subject.length > 160 ? `${subject.slice(0, 157)}…` : subject;
}

/**
 * Decide whether a delivery provider response counts as genuine acceptance.
 *
 * A 200 is not on its own an acceptance: the envelope carries the verdict, and
 * a permanently bounced address must never surface to the visitor as "sent".
 *
 * @param {unknown} payload  parsed JSON body from the provider
 * @returns {boolean}
 */
export function isAcceptedSendResult(payload) {
  if (!payload || typeof payload !== "object") return false;
  if (payload.success !== true) return false;

  const result = payload.result;
  if (result && typeof result === "object") {
    if (Array.isArray(result.permanent_bounces) && result.permanent_bounces.length > 0) {
      return false;
    }
    // If the provider enumerated outcomes at all, at least one must have
    // been delivered or queued — an empty envelope is not an acceptance.
    const delivered = Array.isArray(result.delivered) ? result.delivered.length : 0;
    const queued = Array.isArray(result.queued) ? result.queued.length : 0;
    const enumerated =
      Array.isArray(result.delivered) ||
      Array.isArray(result.queued) ||
      Array.isArray(result.permanent_bounces);
    if (enumerated && delivered + queued === 0) return false;
  }

  return true;
}

/** Plain-text body for the recipient. */
export function buildText(data) {
  const typeLabel = data.type ? TYPE_LABELS_EN[data.type] : "";
  const lines = [
    "New partnership enquiry from unlockingbulgaria.com",
    "",
    `Organisation: ${data.org}`,
    `Email:        ${data.email}`,
    `Region:       ${data.region || "—"}`,
    `Type:         ${typeLabel || "—"}`,
    `Site language: ${data.lang}`,
    "",
    "Message:",
    data.message,
    "",
    "—",
    "Reply directly to this email to reach the sender.",
  ];
  return lines.join("\n");
}
