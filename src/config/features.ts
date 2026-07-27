/**
 * PR-005 · Feature flags for the website.
 *
 *   import { FEATURES } from "../config/features";
 *   {FEATURES.FEATURE_PLACE_FIRST_HOME && <PlaceFirstHero ... />}
 *
 * These resolve at build time, not at runtime. The site is a static Astro
 * build, so a flag change is a rebuild and a redeploy — which on Cloudflare
 * Pages is a minute, not a store review. The app repository has the same flag
 * names in its own `src/config/features.ts` and resolves them at runtime; the
 * names are the contract between the two, nothing is shared as code.
 *
 * To run an arm without editing source:
 *   PUBLIC_FEATURE_PLACE_FIRST_HOME=true npm run build
 *   PUBLIC_SILENCE_MS=45000 npm run build
 *
 * This file has no framework import so the Node test runner can execute the
 * resolver directly.
 */

export type FeatureFlags = {
  /** The Prohodna vertical slice, end to end. False must disable all of it. */
  FEATURE_PROHODNA_SLICE: boolean;
  /** The landing surface opens on one proposed place rather than a list. */
  FEATURE_PLACE_FIRST_HOME: boolean;
  /** Guardian Sight presented as an afterword, after the place is earned. */
  FEATURE_GS_AFTERWORD: boolean;
  /** Something arrives after departure rather than at the moment of arrival. */
  FEATURE_DELAYED_MEMORY: boolean;
  /** Story delivered in stops rather than one block. */
  FEATURE_SEGMENTED_STORY: boolean;
  /** Story plays only when asked for, never automatically. */
  FEATURE_STORY_ON_REQUEST: boolean;
  /** Sharing addressed to one person rather than broadcast. */
  FEATURE_SHARE_ONE_TO_ONE: boolean;
  /**
   * Held silence before the first word, in milliseconds.
   *
   * A value, not a boolean: H-SIL-2 runs 20 000 / 30 000 / 45 000 arms and all
   * three must be reachable without a source change. 30 000 is provisional
   * until the field session answers.
   */
  SILENCE_MS: number;
};

/**
 * Every flag is false and stays false until its package ships. A flag that
 * defaults to true is not a flag — it is the behaviour, with extra steps.
 */
export const FEATURE_DEFAULTS: Readonly<FeatureFlags> = Object.freeze({
  FEATURE_PROHODNA_SLICE: false,
  FEATURE_PLACE_FIRST_HOME: false,
  FEATURE_GS_AFTERWORD: false,
  FEATURE_DELAYED_MEMORY: false,
  FEATURE_SEGMENTED_STORY: false,
  FEATURE_STORY_ON_REQUEST: false,
  FEATURE_SHARE_ONE_TO_ONE: false,
  SILENCE_MS: 30_000,
});

/** The boolean flag names, derived from the defaults so the two cannot drift. */
export const BOOLEAN_FLAG_KEYS = Object.freeze(
  Object.keys(FEATURE_DEFAULTS).filter(
    (key) => typeof FEATURE_DEFAULTS[key as keyof FeatureFlags] === "boolean",
  ) as (keyof FeatureFlags)[],
);

/** Accepts real booleans and the strings an environment round-trip produces. */
function readBoolean(value: unknown): boolean | undefined {
  if (typeof value === "boolean") return value;
  if (value === "true") return true;
  if (value === "false") return false;
  return undefined;
}

/** Accepts a finite, non-negative duration. Rejects everything else. */
function readDuration(value: unknown): number | undefined {
  const parsed = typeof value === "string" ? Number(value) : value;
  if (typeof parsed !== "number") return undefined;
  if (!Number.isFinite(parsed) || parsed < 0) return undefined;
  return parsed;
}

/**
 * Applies overrides on top of the defaults.
 *
 * A value of the wrong type, or a key that is not a flag, is dropped and the
 * default stands. The result is frozen.
 */
export function resolveFeatures(overrides: unknown): Readonly<FeatureFlags> {
  if (typeof overrides !== "object" || overrides === null) {
    return FEATURE_DEFAULTS;
  }

  const source = overrides as Record<string, unknown>;
  const resolved: FeatureFlags = { ...FEATURE_DEFAULTS };

  for (const key of BOOLEAN_FLAG_KEYS) {
    const value = readBoolean(source[key]);
    if (value !== undefined) {
      (resolved[key] as boolean) = value;
    }
  }

  const silence = readDuration(source.SILENCE_MS);
  if (silence !== undefined) {
    resolved.SILENCE_MS = silence;
  }

  return Object.freeze(resolved);
}

/**
 * Reads `PUBLIC_`-prefixed overrides out of the build environment. An unset
 * variable is omitted rather than written as false, so FEATURE_DEFAULTS stays
 * the single place a flag's off-state is defined.
 */
export function readEnvOverrides(env: Record<string, unknown>): Record<string, unknown> {
  const overrides: Record<string, unknown> = {};

  for (const key of BOOLEAN_FLAG_KEYS) {
    const raw = env[`PUBLIC_${key}`];
    if (raw === undefined || raw === "") continue;
    overrides[key] = raw;
  }

  const silence = env.PUBLIC_SILENCE_MS;
  if (silence !== undefined && silence !== "") {
    overrides.SILENCE_MS = silence;
  }

  return overrides;
}

const buildEnv: Record<string, unknown> =
  typeof import.meta.env === "object" && import.meta.env !== null
    ? (import.meta.env as unknown as Record<string, unknown>)
    : {};

export const FEATURES: Readonly<FeatureFlags> = resolveFeatures(
  readEnvOverrides(buildEnv),
);
