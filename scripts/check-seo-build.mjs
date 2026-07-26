import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const langs = ["en", "bg", "de", "fr", "es", "it", "ro", "tr", "el", "hu", "zh", "ru", "ja", "sr"];
const places = [
  "durankulak",
  "shabla",
  "tyulenovo",
  "kaliakra",
  "balchik",
  "varna",
  "pobiti-kamani",
  "byala",
  "cape-emine",
  "nessebar",
  "pomorie",
  "sozopol",
  "begliktash",
  "ropotamo",
  "rusokastro",
  "prohodna-cave",
];

function candidates(urlPath) {
  const clean = urlPath.replace(/^\/+/, "");
  return [
    path.join(dist, clean, "index.html"),
    path.join(dist, `${clean}.html`),
    path.join(dist, clean),
  ];
}

function existsRoute(urlPath) {
  return candidates(urlPath).some((candidate) => fs.existsSync(candidate));
}

function readRoute(urlPath) {
  const file = candidates(urlPath).find((candidate) => fs.existsSync(candidate));
  if (!file) throw new Error(`Missing route ${urlPath}`);
  return fs.readFileSync(file, "utf8");
}

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

if (!fs.existsSync(dist)) {
  fail("dist/ does not exist. Run npm run build first.");
}

const expectedRoutes = langs.flatMap((lang) => [
  `/${lang}`,
  `/${lang}/map`,
  `/${lang}/sea-domain`,
  ...places.map((slug) => `/${lang}/places/${slug}`),
]);

// Legal routes must exist in every language — both app stores require a
// reachable privacy policy. Not asserted against the sitemap.
const legalRoutes = langs.flatMap((lang) =>
  ["privacy", "terms", "cookies"].map((doc) => `/${lang}/${doc}`)
);

for (const route of [...expectedRoutes, ...legalRoutes]) {
  if (!existsRoute(route)) fail(`Missing built route: ${route}`);
}

for (const lang of langs) {
  const html = readRoute(`/${lang}/sea-domain`);
  if (!html.includes(`<html lang="${lang}"`)) fail(`Language check failed for /${lang}/sea-domain`);
  if (!html.includes(`hreflang="${lang}"`)) fail(`hreflang check failed for /${lang}/sea-domain`);
}

const sitemapFile = path.join(dist, "sitemap.xml");
if (!fs.existsSync(sitemapFile)) {
  fail("Missing dist/sitemap.xml");
} else {
  const sitemap = fs.readFileSync(sitemapFile, "utf8");
  for (const route of expectedRoutes) {
    if (!sitemap.includes(`https://unlockingbulgaria.com${route}`)) {
      fail(`Sitemap missing ${route}`);
    }
  }
}

const localHrefPattern = /href="(\/[^"#?]*)/g;
for (const route of [...expectedRoutes, ...legalRoutes]) {
  const html = readRoute(route);
  for (const match of html.matchAll(localHrefPattern)) {
    const href = match[1];
    if (href.startsWith("//")) continue;
    if (!existsRoute(href) && href !== "/") {
      fail(`Broken local link from ${route} to ${href}`);
    }
  }
}

// No control may promise a download that does not exist, and no control may
// use a custom scheme as a browser href — inert on desktop, inert on mobile
// without the app installed.
const deadCtaPatterns = [
  { pattern: 'href="#"', label: 'href="#"' },
  { pattern: "apple.com/app-store", label: "apple.com/app-store" },
  { pattern: 'href="unlockingbulgaria://', label: 'href="unlockingbulgaria://' },
];
for (const route of [...expectedRoutes, ...legalRoutes]) {
  const html = readRoute(route);
  for (const { pattern, label } of deadCtaPatterns) {
    if (html.includes(pattern)) fail(`Dead CTA ${label} found in ${route}`);
  }
}

// Every in-page anchor a built route links to must exist in that document.
// A hero CTA pointing at a missing id scrolls to the top and reads as a no-op.
for (const route of [...expectedRoutes, ...legalRoutes]) {
  const html = readRoute(route);
  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    const id = match[1];
    if (!html.includes(`id="${id}"`)) {
      fail(`Broken in-page anchor on ${route}: #${id}`);
    }
  }
}

// No redirect rule may point at a homepage anchor that does not exist.
// `public/_redirects` is the file Astro ships; the repository root holds a
// pre-Astro duplicate. Both are checked so the two cannot drift apart again.
const home = readRoute("/en");
for (const redirectsFile of [path.join(root, "public/_redirects"), path.join(root, "_redirects")]) {
  if (!fs.existsSync(redirectsFile)) continue;
  for (const line of fs.readFileSync(redirectsFile, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const target = trimmed.split(/\s+/)[1];
    const anchor = target?.match(/^\/(?:[a-z]{2})?#(.+)$/);
    if (!anchor) continue;
    if (!home.includes(`id="${anchor[1]}"`)) {
      fail(`${path.relative(root, redirectsFile)} targets nonexistent homepage anchor: #${anchor[1]}`);
    }
  }
}

// `appDeepLink` is correct data the identity bridge consumes. Only its use
// as an href was removed — the field itself must survive, derived from
// placeIdentity.placeDeepLink(slug).
const seoPagesSource = fs.readFileSync(path.join(root, "src/data/seoPages.ts"), "utf8");
const placeIdentitySource = fs.readFileSync(path.join(root, "src/data/placeIdentity.ts"), "utf8");
if (!seoPagesSource.includes("appDeepLink")) {
  fail("appDeepLink has been removed from src/data/seoPages.ts — it is required data.");
}
if (!seoPagesSource.includes('placeDeepLink("prohodna-cave")') && !seoPagesSource.includes("placeDeepLink('prohodna-cave')")) {
  fail("Prohodna's appDeepLink is no longer derived from placeDeepLink('prohodna-cave').");
}
if (!placeIdentitySource.includes('"prohodna-cave": "place-2-1-4"') && !placeIdentitySource.includes("'prohodna-cave': 'place-2-1-4'")) {
  fail("placeIdentity.ts must bridge prohodna-cave → place-2-1-4.");
}
if (!seoPagesSource.includes("appPlaceId")) {
  fail("seoPages.ts must carry appPlaceId on every place.");
}
for (const route of [`/en/places/prohodna-cave`, `/bg/places/prohodna-cave`]) {
  const html = readRoute(route);
  if (!html.includes('data-app-deep-link="unlockingbulgaria://places/prohodna-cave"')) {
    fail(`Deep-link data is no longer emitted on ${route}`);
  }
}

// PR-004: portal card must not load three.js from a CDN (or ship its string).
const bannedRuntimeDeps = ["cdnjs.cloudflare.com", "three.min.js"];
for (const route of langs.map((lang) => `/${lang}`)) {
  const html = readRoute(route);
  for (const banned of bannedRuntimeDeps) {
    if (html.includes(banned)) fail(`Banned runtime dependency ${banned} found in ${route}`);
  }
}
const assetDir = path.join(dist, "_assets");
if (fs.existsSync(assetDir)) {
  for (const file of fs.readdirSync(assetDir)) {
    const full = path.join(assetDir, file);
    if (!fs.statSync(full).isFile()) continue;
    if (!/\.(js|css|html|mjs)$/i.test(file)) continue;
    const contents = fs.readFileSync(full, "utf8");
    for (const banned of bannedRuntimeDeps) {
      if (contents.includes(banned)) {
        fail(`Banned runtime dependency ${banned} found in _assets/${file}`);
      }
    }
  }
}

// Portal card must be a real same-origin place link in every locale.
for (const lang of langs) {
  const html = readRoute(`/${lang}`);
  const expected = `href="/${lang}/places/prohodna-cave"`;
  if (!html.includes(expected)) {
    fail(`Homepage portal link missing for ${lang}: expected ${expected}`);
  }
}

if (!process.exitCode) {
  console.log(
    `SEO build checks passed for ${expectedRoutes.length + legalRoutes.length} localized routes.`
  );
}
