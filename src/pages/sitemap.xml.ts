import { SUPPORTED_LANGS } from "../i18n";
import { SITE_ORIGIN, getSeoPagePaths } from "../data/seoPages";

const homePaths = SUPPORTED_LANGS.map((lang) => `/${lang}`);
const seoPaths = SUPPORTED_LANGS.flatMap((lang) =>
  getSeoPagePaths().map((page) => `/${lang}${page.path}`),
);

const urls = ["/", ...homePaths, ...seoPaths];

export function GET() {
  const today = new Date().toISOString().split("T")[0];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${SITE_ORIGIN}${path === "/" ? "" : path}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
