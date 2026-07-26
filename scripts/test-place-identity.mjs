/**
 * Identity bridge unit checks (Node test runner — no new dependencies).
 */
import test from "node:test";
import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = process.cwd();
const identity = await import(
  pathToFileURL(path.join(root, "src/data/placeIdentity.ts")).href
);

const {
  PLACE_APP_IDS,
  placeDeepLink,
  placeCanonicalPath,
  placeCanonicalUrl,
  getAppPlaceId,
  toCanonicalPlaceIdentity,
  isValidPlaceDeepLink,
} = identity;

test("every place has exactly one app id", () => {
  const ids = Object.values(PLACE_APP_IDS);
  assert.equal(new Set(ids).size, ids.length);
});

test("every place has exactly one slug", () => {
  const slugs = Object.keys(PLACE_APP_IDS);
  assert.equal(new Set(slugs).size, slugs.length);
});

test("website → app mapping for Prohodna", () => {
  assert.equal(getAppPlaceId("prohodna-cave"), "place-2-1-4");
});

test("deep link derives from slug", () => {
  assert.equal(
    placeDeepLink("prohodna-cave"),
    "unlockingbulgaria://places/prohodna-cave"
  );
  assert.ok(isValidPlaceDeepLink(placeDeepLink("durankulak"), "durankulak"));
});

test("HTTPS canonical path is unchanged", () => {
  assert.equal(placeCanonicalPath("prohodna-cave"), "/places/prohodna-cave");
  assert.equal(
    placeCanonicalUrl("en", "prohodna-cave"),
    "https://unlockingbulgaria.com/en/places/prohodna-cave"
  );
});

test("duplicate ids are rejected by the mapping set", () => {
  const ids = Object.values(PLACE_APP_IDS);
  assert.equal(ids.length, new Set(ids).size);
});

test("canonical object is complete", () => {
  const place = toCanonicalPlaceIdentity({
    slug: "prohodna-cave",
    domainId: "region-5-cave-domain",
    routeId: "route-cave-prohodna-gateway",
    coordinates: { lat: 43.173, lng: 24.071 },
    images: ["https://unlockingbulgaria.com/og-image.png"],
  });
  assert.equal(place.appPlaceId, "place-2-1-4");
  assert.equal(place.deepLink, "unlockingbulgaria://places/prohodna-cave");
  assert.equal(place.canonicalPath, "/places/prohodna-cave");
  assert.ok(place.heroImage);
  assert.equal(place.coordinates.lat, 43.173);
});

test("unknown slug has no app id", () => {
  assert.throws(() => getAppPlaceId("not-a-real-place"));
});
