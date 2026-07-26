// No store listing exists yet — `com.hiddenbulgariaquests.app` returns HTTP 404.
// Until a listing is published, no control on the site may present a download:
// store buttons render disabled with `download.comingSoon`, and every former
// download CTA points at the one place a visitor can act on today.
// Set either constant to a real listing URL to re-enable its store button.
export const GOOGLE_PLAY_URL: string | null = null;
export const APP_STORE_URL: string | null = null;

export const FIRST_PLACE_SLUG = "prohodna-cave";

export const firstPlacePath = (lang: string) =>
  `/${lang}/places/${FIRST_PLACE_SLUG}`;
