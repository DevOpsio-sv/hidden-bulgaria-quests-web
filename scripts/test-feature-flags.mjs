/**
 * PR-005 · Feature flag module (web).
 *
 * The one invariant that matters before any package ships: no flag is on.
 * src/config/features.ts carries no framework import, so the resolver is
 * executed here rather than pattern-matched.
 *
 * The flag names must stay identical to the app repository's
 * src/config/featureDefaults.ts — the names are the contract between the two
 * surfaces. Nothing enforces that across repositories, so the list below is
 * written out literally rather than derived.
 */
import test from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();

const { FEATURE_DEFAULTS, BOOLEAN_FLAG_KEYS, resolveFeatures, readEnvOverrides, FEATURES } =
  await import(pathToFileURL(path.join(root, "src/config/features.ts")).href);

/** The flags PR-005 must define, from its acceptance criteria. */
const REQUIRED_BOOLEAN_FLAGS = [
  "FEATURE_PROHODNA_SLICE",
  "FEATURE_PLACE_FIRST_HOME",
  "FEATURE_GS_AFTERWORD",
  "FEATURE_DELAYED_MEMORY",
  "FEATURE_SEGMENTED_STORY",
  "FEATURE_STORY_ON_REQUEST",
  "FEATURE_SHARE_ONE_TO_ONE",
];

test("every flag is enumerated in one module", () => {
  assert.deepEqual(
    Object.keys(FEATURE_DEFAULTS).sort(),
    [...REQUIRED_BOOLEAN_FLAGS, "SILENCE_MS"].sort(),
    "features.ts defines flags PR-005 did not specify, or is missing some",
  );
});

test("no flag defaults to true", () => {
  for (const flag of BOOLEAN_FLAG_KEYS) {
    assert.equal(
      FEATURE_DEFAULTS[flag],
      false,
      `${flag} defaults to true; a flag that ships on is not a flag`,
    );
  }
});

test("SILENCE_MS is a numeric value, not a boolean", () => {
  assert.equal(typeof FEATURE_DEFAULTS.SILENCE_MS, "number");
  assert.equal(FEATURE_DEFAULTS.SILENCE_MS, 30_000);
});

test("the resolved build-time flags are the defaults in a clean build", () => {
  assert.deepEqual(FEATURES, FEATURE_DEFAULTS);
});

test("resolveFeatures returns the defaults when nothing overrides them", () => {
  assert.deepEqual(resolveFeatures(undefined), FEATURE_DEFAULTS);
  assert.deepEqual(resolveFeatures(null), FEATURE_DEFAULTS);
  assert.deepEqual(resolveFeatures({}), FEATURE_DEFAULTS);
  assert.deepEqual(resolveFeatures("nonsense"), FEATURE_DEFAULTS);
});

test("resolveFeatures applies valid overrides, in both boolean and string form", () => {
  const resolved = resolveFeatures({
    FEATURE_PLACE_FIRST_HOME: true,
    FEATURE_GS_AFTERWORD: "true",
    FEATURE_DELAYED_MEMORY: "false",
    SILENCE_MS: "45000",
  });

  assert.equal(resolved.FEATURE_PLACE_FIRST_HOME, true);
  assert.equal(resolved.FEATURE_GS_AFTERWORD, true);
  assert.equal(resolved.FEATURE_DELAYED_MEMORY, false);
  assert.equal(resolved.SILENCE_MS, 45_000);
  assert.equal(resolved.FEATURE_PROHODNA_SLICE, false, "untouched flag moved");
});

test("resolveFeatures rejects untrusted junk rather than coercing it", () => {
  const resolved = resolveFeatures({
    FEATURE_PROHODNA_SLICE: "yes",
    FEATURE_PLACE_FIRST_HOME: 1,
    FEATURE_GS_AFTERWORD: {},
    SILENCE_MS: "soon",
    NOT_A_FLAG: true,
  });

  assert.equal(resolved.FEATURE_PROHODNA_SLICE, false, "'yes' enabled a flag");
  assert.equal(resolved.FEATURE_PLACE_FIRST_HOME, false, "1 enabled a flag");
  assert.equal(resolved.FEATURE_GS_AFTERWORD, false, "{} enabled a flag");
  assert.equal(resolved.SILENCE_MS, 30_000);
  assert.equal("NOT_A_FLAG" in resolved, false, "an unknown key became a flag");
});

test("resolveFeatures rejects a negative or non-finite silence", () => {
  assert.equal(resolveFeatures({ SILENCE_MS: -1 }).SILENCE_MS, 30_000);
  assert.equal(resolveFeatures({ SILENCE_MS: Infinity }).SILENCE_MS, 30_000);
  assert.equal(resolveFeatures({ SILENCE_MS: NaN }).SILENCE_MS, 30_000);
});

test("resolved flags cannot be flipped after the build", () => {
  assert.equal(Object.isFrozen(FEATURES), true);
  assert.equal(Object.isFrozen(FEATURE_DEFAULTS), true);
});

test("an arm can be selected from the environment without a source edit", () => {
  const overrides = readEnvOverrides({
    PUBLIC_FEATURE_PLACE_FIRST_HOME: "true",
    PUBLIC_SILENCE_MS: "20000",
  });
  const resolved = resolveFeatures(overrides);

  assert.equal(resolved.FEATURE_PLACE_FIRST_HOME, true);
  assert.equal(resolved.SILENCE_MS, 20_000);
});

test("readEnvOverrides omits unset and empty variables", () => {
  assert.deepEqual(readEnvOverrides({}), {});
  assert.deepEqual(
    readEnvOverrides({ PUBLIC_FEATURE_PROHODNA_SLICE: "", PUBLIC_SILENCE_MS: "" }),
    {},
    "an unset variable was written as an override; defaults must stay the only off-switch",
  );
  assert.deepEqual(
    readEnvOverrides({ FEATURE_PROHODNA_SLICE: "true" }),
    {},
    "an unprefixed variable reached the flags",
  );
});
