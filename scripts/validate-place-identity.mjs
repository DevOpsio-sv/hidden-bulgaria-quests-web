/**
 * Build-time place identity validation for the website.
 * Fails the build on duplicate ids/slugs, missing GPS, invalid deep links,
 * or a place missing its application id mapping.
 *
 * Imports only the pure placeIdentity module (no i18n / Astro graph).
 * Cross-checks seoPages.ts source so every published place stays wired.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();

function fail(message) {
  console.error(`[place-identity] ${message}`);
  process.exitCode = 1;
}

const identity = await import(
  pathToFileURL(path.join(root, "src/data/placeIdentity.ts")).href
);

const {
  PLACE_APP_IDS,
  placeDeepLink,
  placeCanonicalPath,
  toCanonicalPlaceIdentity,
  DEEP_LINK_SCHEME,
  isValidPlaceDeepLink,
} = identity;

const seoSource = fs.readFileSync(path.join(root, "src/data/seoPages.ts"), "utf8");

// ── Mapping table integrity ──────────────────────────────────────────────────
const mappedSlugs = Object.keys(PLACE_APP_IDS);
const mappedAppIds = Object.values(PLACE_APP_IDS);

if (mappedSlugs.length === 0) fail("PLACE_APP_IDS is empty.");
if (new Set(mappedSlugs).size !== mappedSlugs.length) {
  fail("PLACE_APP_IDS contains duplicate slugs.");
}
if (new Set(mappedAppIds).size !== mappedAppIds.length) {
  fail("PLACE_APP_IDS contains duplicate application ids.");
}

for (const slug of mappedSlugs) {
  const appPlaceId = PLACE_APP_IDS[slug];
  const deepLink = placeDeepLink(slug);

  if (!appPlaceId) fail(`Slug ${slug} has empty appPlaceId.`);
  if (!isValidPlaceDeepLink(deepLink, slug)) {
    fail(`Invalid deep link for ${slug}: ${deepLink}`);
  }
  if (!deepLink.startsWith(`${DEEP_LINK_SCHEME}://places/`)) {
    fail(`Deep link for ${slug} uses wrong scheme: ${deepLink}`);
  }
  if (placeCanonicalPath(slug) !== `/places/${slug}`) {
    fail(`Canonical path drift for ${slug}.`);
  }

  // Every mapped slug must appear as a place id/slug in seoPages.
  if (!seoSource.includes(`"${slug}"`) && !seoSource.includes(`'${slug}'`)) {
    fail(`PLACE_APP_IDS slug "${slug}" is not referenced in seoPages.ts.`);
  }

  // seoPages must derive deep links from the helper (no ad-hoc URI strings for places).
  // Sea places use placeDeepLink(id); Prohodna uses placeDeepLink("prohodna-cave").
}

if (!seoSource.includes("from \"./placeIdentity\"") && !seoSource.includes("from './placeIdentity'")) {
  fail("seoPages.ts must import the placeIdentity contract.");
}
if (!seoSource.includes("getAppPlaceId") || !seoSource.includes("placeDeepLink")) {
  fail("seoPages.ts must use getAppPlaceId and placeDeepLink.");
}
if (!seoSource.includes("appPlaceId")) {
  fail("seoPages.ts must set appPlaceId on places.");
}

// Reject ad-hoc place deep-link literals that bypass the contract
// (domain deep links remain out of scope for this PR).
const adHocPlaceDeepLinks = seoSource.match(
  /appDeepLink:\s*`unlockingbulgaria:\/\/places\/\$\{[^}]+\}`/g
);
if (adHocPlaceDeepLinks) {
  fail(
    "seoPages.ts still builds place appDeepLink with an ad-hoc template — use placeDeepLink()."
  );
}
if (/appDeepLink:\s*"unlockingbulgaria:\/\/places\//.test(seoSource)) {
  fail(
    "seoPages.ts still hardcodes place appDeepLink string literals — use placeDeepLink()."
  );
}

// Sea place rows carry authored coordinates as the 4th/5th tuple members.
const seaPlacesMatch = seoSource.match(
  /const seaPlaces = \[([\s\S]*?)\] as const;/
);
if (!seaPlacesMatch) fail("Could not locate seaPlaces table in seoPages.ts.");
else {
  const rows = [...seaPlacesMatch[1].matchAll(
    /\["([^"]+)",\s*"[^"]+",\s*"[^"]+",\s*([0-9.]+),\s*([0-9.]+)/g
  )];
  if (rows.length === 0) fail("seaPlaces has no coordinate rows.");
  const seaSlugs = new Set();
  for (const [, slug, lat, lng] of rows) {
    if (seaSlugs.has(slug)) fail(`Duplicate sea place slug: ${slug}`);
    seaSlugs.add(slug);
    if (!PLACE_APP_IDS[slug]) fail(`Sea place ${slug} missing from PLACE_APP_IDS.`);
    if (!lat || !lng) fail(`Sea place ${slug} missing GPS in seoPages.ts.`);
  }
}

// Prohodna pin
if (PLACE_APP_IDS["prohodna-cave"] !== "place-2-1-4") {
  fail("prohodna-cave must map to place-2-1-4.");
}
if (!seoSource.includes("43.173") || !seoSource.includes("24.071")) {
  fail("Prohodna GPS 43.173, 24.071 must remain authored in seoPages.ts.");
}
if (!seoSource.includes('placeDeepLink("prohodna-cave")') && !seoSource.includes("placeDeepLink('prohodna-cave')")) {
  fail("Prohodna must derive appDeepLink via placeDeepLink('prohodna-cave').");
}

// Canonical object completeness for every mapped place (synthetic check)
for (const slug of mappedSlugs) {
  const canonical = toCanonicalPlaceIdentity({
    slug,
    domainId: "test-domain",
    routeId: "test-route",
    coordinates: { lat: 1, lng: 2 },
    images: ["/og-image.png"],
  });
  if (
    !canonical.appPlaceId ||
    !canonical.deepLink ||
    !canonical.canonicalPath ||
    !canonical.heroImage ||
    canonical.slug !== slug
  ) {
    fail(`Canonical identity incomplete for ${slug}.`);
  }
}

// appLinks must resolve the first place through the canonical path helper
const appLinks = fs.readFileSync(path.join(root, "src/config/appLinks.ts"), "utf8");
if (!appLinks.includes("placeCanonicalPath") || !appLinks.includes("prohodna-cave")) {
  fail("appLinks.ts must derive the first-place path from placeIdentity.");
}

if (process.exitCode) {
  console.error(`[place-identity] Validation failed (${mappedSlugs.length} mapped places).`);
  process.exit(process.exitCode);
} else {
  console.log(
    `[place-identity] OK — ${mappedSlugs.length} places mapped, unique ids/slugs, authored GPS, valid deep links.`
  );
}
