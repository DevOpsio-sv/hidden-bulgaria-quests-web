/**
 * Partner enquiry validation tests.
 *
 * Uses node:test, which ships with Node — no new dependency is added.
 *   npm run test:partner-form
 */
import test from "node:test";
import assert from "node:assert/strict";

import {
  ACCEPTED_FIELDS,
  FIELDS,
  MAX_BODY_BYTES,
  MIN_FILL_MS,
  TYPE_VALUES,
  buildSubject,
  buildText,
  isAcceptedSendResult,
  isValidEmail,
  normaliseField,
  normaliseLang,
  validateEnquiry,
} from "../functions/api/_validation.mjs";

/** A submission that must always be accepted. */
function valid(overrides = {}) {
  return {
    org: "Община Луковит",
    email: "partner@example.org",
    region: "Lovech",
    type: "municipality",
    message: "We would like to discuss a route around Prohodna.",
    ...overrides,
  };
}

// ── acceptance ───────────────────────────────────────────────────────────

test("accepts a valid payload", () => {
  const result = validateEnquiry(valid());
  assert.equal(result.ok, true);
  assert.equal(result.data.org, "Община Луковит");
  assert.equal(result.data.type, "municipality");
});

test("accepts a payload with only the required fields", () => {
  const result = validateEnquiry({
    org: "Museum",
    email: "a@b.co",
    message: "Hello",
  });
  assert.equal(result.ok, true);
  assert.equal(result.data.region, "");
  assert.equal(result.data.type, "");
});

test("accepts the longest valid values", () => {
  const result = validateEnquiry(valid({
    org: "o".repeat(FIELDS.org.max),
    message: "m".repeat(FIELDS.message.max),
  }));
  assert.equal(result.ok, true);
});

test("accepts Cyrillic, accents, apostrophes and multiline text", () => {
  const result = validateEnquiry(valid({
    org: "Musée d'Orsay — Ćirilica Ђорђе",
    message: "Line one.\n\nLine two — with “quotes” and an apostrophe's tail.",
  }));
  assert.equal(result.ok, true);
  assert.ok(result.data.message.includes("\n\n"));
});

// ── rejection ────────────────────────────────────────────────────────────

test("rejects each missing required field individually", () => {
  for (const field of ["org", "email", "message"]) {
    const payload = valid();
    delete payload[field];
    const result = validateEnquiry(payload);
    assert.equal(result.ok, false, `${field} should be required`);
    assert.equal(result.errors[field], "required");
  }
});

test("rejects whitespace-only required fields", () => {
  const result = validateEnquiry(valid({ org: "   \t  ", message: "\n\n  " }));
  assert.equal(result.ok, false);
  assert.equal(result.errors.org, "required");
  assert.equal(result.errors.message, "required");
});

test("rejects malformed email addresses", () => {
  const bad = [
    "not-an-email", "no@domain", "@example.com", "a@@b.com",
    "a b@example.com", "a@example .com", "a@.com", "a@b.",
  ];
  for (const email of bad) {
    const result = validateEnquiry(valid({ email }));
    assert.equal(result.ok, false, `${email} should be rejected`);
    assert.equal(result.errors.email, "email");
  }
});

test("rejects overlong fields", () => {
  const result = validateEnquiry(valid({ message: "m".repeat(FIELDS.message.max + 1) }));
  assert.equal(result.ok, false);
  assert.equal(result.errors.message, "tooLong");
});

test("rejects an unrecognised partnership type", () => {
  const result = validateEnquiry(valid({ type: "Municipality / Local government" }));
  assert.equal(result.ok, false);
  assert.equal(result.errors.type, "invalid");
});

test("rejects unexpected extra fields", () => {
  const result = validateEnquiry(valid({ bcc: "attacker@example.com" }));
  assert.equal(result.ok, false);
  assert.equal(result.reason, "unexpected-field");
});

// ── abuse controls ───────────────────────────────────────────────────────

test("rejects a populated honeypot without reporting field errors", () => {
  const result = validateEnquiry(valid({ website: "http://spam.example" }));
  assert.equal(result.ok, false);
  assert.equal(result.reason, "honeypot");
  assert.equal(result.errors, undefined);
});

test("ignores an empty honeypot", () => {
  assert.equal(validateEnquiry(valid({ website: "" })).ok, true);
});

test("rejects a submission completed faster than a human could", () => {
  const now = 1_000_000;
  const result = validateEnquiry(valid({ ts: String(now - 500) }), { now });
  assert.equal(result.ok, false);
  assert.equal(result.reason, "too-fast");
});

test("accepts a submission once the minimum fill time has passed", () => {
  const now = 1_000_000;
  const result = validateEnquiry(valid({ ts: String(now - MIN_FILL_MS - 1) }), { now });
  assert.equal(result.ok, true);
});

test("skips the timing check when no timestamp is sent (no-JavaScript path)", () => {
  assert.equal(validateEnquiry(valid({ ts: "" })).ok, true);
});

// ── injection ────────────────────────────────────────────────────────────

test("strips CR and LF from single-line fields, defeating header injection", () => {
  const result = validateEnquiry(valid({
    org: "Acme\r\nBcc: attacker@example.com",
  }));
  assert.equal(result.ok, true);
  assert.ok(!result.data.org.includes("\r"));
  assert.ok(!result.data.org.includes("\n"));
  assert.ok(!buildSubject(result.data).includes("\n"));
  assert.ok(!buildSubject(result.data).includes("\r"));
});

test("rejects an email address carrying a second recipient or a newline", () => {
  for (const email of [
    "a@b.co, attacker@example.com",
    "a@b.co\nBcc: attacker@example.com",
    "a@b.co>, <attacker@example.com",
    "a@b.co;attacker@example.com",
  ]) {
    const result = validateEnquiry(valid({ email }));
    assert.equal(result.ok, false, `${JSON.stringify(email)} should be rejected`);
  }
});

test("carries HTML and script input through as inert plain text", () => {
  const payload = valid({
    org: "<script>alert(1)</script>",
    message: "<img src=x onerror=alert(1)> & <b>bold</b>",
  });
  const result = validateEnquiry(payload);
  assert.equal(result.ok, true);

  // The message is only ever sent as text/plain, so the markup is never
  // interpreted. It must also survive unmangled for the recipient to read.
  const text = buildText(result.data);
  assert.ok(text.includes("<script>alert(1)</script>"));
  assert.ok(text.includes("<b>bold</b>"));
});

test("strips control characters everywhere and keeps newlines in the message", () => {
  const result = validateEnquiry(valid({
    org: "Acme\u0000\u0007Ltd",
    message: "one\u0000\ntwo",
  }));
  assert.equal(result.ok, true);
  assert.equal(result.data.org, "AcmeLtd");
  assert.equal(result.data.message, "one\ntwo");
});

test("caps the subject line", () => {
  const subject = buildSubject({ org: "o".repeat(FIELDS.org.max) });
  assert.ok(subject.length <= 160);
});

// ── delivery acceptance ──────────────────────────────────────────────────
// Success must follow genuine acceptance, never a merely well-formed reply.

test("treats a delivered envelope as accepted", () => {
  assert.equal(isAcceptedSendResult({
    success: true,
    result: { delivered: ["partners@example.com"], permanent_bounces: [], queued: [] },
  }), true);
});

test("treats a queued envelope as accepted", () => {
  assert.equal(isAcceptedSendResult({
    success: true,
    result: { delivered: [], permanent_bounces: [], queued: ["partners@example.com"] },
  }), true);
});

test("refuses a permanently bounced envelope even when success is true", () => {
  assert.equal(isAcceptedSendResult({
    success: true,
    result: { delivered: [], permanent_bounces: ["partners@example.com"], queued: [] },
  }), false);
});

test("refuses an envelope that delivered and queued nothing", () => {
  assert.equal(isAcceptedSendResult({
    success: true,
    result: { delivered: [], permanent_bounces: [], queued: [] },
  }), false);
});

test("refuses success:false, and any non-object reply", () => {
  assert.equal(isAcceptedSendResult({ success: false, errors: [{ code: 10001 }] }), false);
  assert.equal(isAcceptedSendResult(null), false);
  assert.equal(isAcceptedSendResult(undefined), false);
  assert.equal(isAcceptedSendResult("OK"), false);
  assert.equal(isAcceptedSendResult({}), false);
});

// ── contract ─────────────────────────────────────────────────────────────

test("bounds the redirect language to a published locale", () => {
  assert.equal(normaliseLang("bg"), "bg");
  assert.equal(normaliseLang("//evil.example.com"), "en");
  assert.equal(normaliseLang("../../admin"), "en");
  assert.equal(normaliseLang(undefined), "en");
});

test("the accepted-field list matches the form contract", () => {
  assert.deepEqual(
    [...ACCEPTED_FIELDS].sort(),
    ["email", "lang", "message", "org", "region", "ts", "type", "website"],
  );
});

test("every partnership type slug is lowercase and stable", () => {
  assert.equal(TYPE_VALUES.length, 8);
  for (const value of TYPE_VALUES) assert.match(value, /^[a-z]+$/);
});

test("the body ceiling is smaller than a maximal valid submission plus slack", () => {
  assert.ok(MAX_BODY_BYTES > FIELDS.message.max);
});

test("normalisation collapses whitespace in single-line fields only", () => {
  assert.equal(normaliseField("  a   b  ", false), "a b");
  assert.equal(normaliseField("a\n\n\n\nb", true), "a\n\nb");
});

test("isValidEmail agrees with the client-side pattern on ordinary addresses", () => {
  assert.equal(isValidEmail("first.last+tag@sub.example.co.uk"), true);
  assert.equal(isValidEmail(`${"a".repeat(250)}@b.co`), false);
});
