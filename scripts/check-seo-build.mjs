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
  `/${lang}/sea-domain`,
  ...places.map((slug) => `/${lang}/places/${slug}`),
]);

for (const route of expectedRoutes) {
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
for (const route of expectedRoutes) {
  const html = readRoute(route);
  for (const match of html.matchAll(localHrefPattern)) {
    const href = match[1];
    if (href.startsWith("//")) continue;
    if (!existsRoute(href) && href !== "/") {
      fail(`Broken local link from ${route} to ${href}`);
    }
  }
}

if (!process.exitCode) {
  console.log(`SEO build checks passed for ${expectedRoutes.length} localized routes.`);
}
