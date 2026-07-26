/**
 * Canonical Website ↔ Application place identity contract.
 *
 * One published place → one language-independent slug → one app checkpoint id
 * → one HTTPS canonical path → one app deep-link URI.
 *
 * Public browser URLs stay HTTPS. Custom-scheme URIs exist only for app handoff
 * and must never be used as a browser `href`.
 */

/** Approved app deep-link scheme (Owner Decision / audit C3). */
export const DEEP_LINK_SCHEME = "unlockingbulgaria" as const;

const DEFAULT_ORIGIN = "https://unlockingbulgaria.com";

/**
 * Language-independent website slug → application checkpoint id.
 * This is the only place↔app id mapping on the website.
 */
export const PLACE_APP_IDS: Readonly<Record<string, string>> = {
  "prohodna-cave": "place-2-1-4",
  durankulak: "place-3-1-1",
  shabla: "place-3-1-2",
  tyulenovo: "place-3-1-3",
  kaliakra: "place-3-1-4",
  balchik: "place-3-2-1",
  varna: "place-3-2-2",
  "pobiti-kamani": "place-3-2-3",
  byala: "place-3-2-4",
  "cape-emine": "place-3-3-1",
  nessebar: "place-3-3-2",
  pomorie: "place-3-3-3",
  sozopol: "place-3-3-4",
  begliktash: "place-3-4-1",
  ropotamo: "place-3-4-2",
  // App place-3-4-3 (Cape Maslen) has no website page yet.
  rusokastro: "place-3-4-4",
};

export interface CanonicalPlaceIdentity {
  /** Language-independent public identity (website slug). */
  slug: string;
  /** Application checkpoint id. */
  appPlaceId: string;
  domainId: string;
  routeId: string;
  coordinates: { lat: number; lng: number };
  /** App handoff only — never a browser href. */
  deepLink: string;
  /** Path after `/{lang}` — HTTPS canonical URLs derive from this. */
  canonicalPath: string;
  heroImage: string;
}

export function placeDeepLink(slug: string): string {
  return `${DEEP_LINK_SCHEME}://places/${slug}`;
}

export function placeCanonicalPath(slug: string): string {
  return `/places/${slug}`;
}

export function placeCanonicalUrl(lang: string, slug: string, origin = DEFAULT_ORIGIN): string {
  return `${origin}/${lang}${placeCanonicalPath(slug)}`;
}

export function getAppPlaceId(slug: string): string {
  const id = PLACE_APP_IDS[slug];
  if (!id) {
    throw new Error(`No application place id mapped for website slug "${slug}".`);
  }
  return id;
}

export function toCanonicalPlaceIdentity(place: {
  slug: string;
  domainId: string;
  routeId: string;
  coordinates: { lat: number; lng: number };
  images: string[];
}): CanonicalPlaceIdentity {
  return {
    slug: place.slug,
    appPlaceId: getAppPlaceId(place.slug),
    domainId: place.domainId,
    routeId: place.routeId,
    coordinates: place.coordinates,
    deepLink: placeDeepLink(place.slug),
    canonicalPath: placeCanonicalPath(place.slug),
    heroImage: place.images[0] ?? "",
  };
}

export function isValidPlaceDeepLink(uri: string, slug: string): boolean {
  return uri === placeDeepLink(slug);
}
