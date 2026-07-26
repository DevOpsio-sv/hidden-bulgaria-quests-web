import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const dist = path.join(root, "dist");
const langs = ["en","bg","de","fr","es","it","ro","tr","el","hu","zh","ru","ja","sr"];
const banned = ["cdnjs.cloudflare.com","three.min.js","loadThree","firePortalRunes","unlockPortal","renderDownloadState","phoneProgress","portalAwakenCta","portalUnlockedCta","portalFinalCta","is-charging","portal-awaken"];

function walk(dir, out=[]) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(html|js|css|mjs|json)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

let hits = 0;
for (const file of walk(dist)) {
  const text = fs.readFileSync(file, "utf8");
  for (const b of banned) {
    if (text.includes(b)) {
      console.log("HIT", b, path.relative(root, file));
      hits++;
    }
  }
}
console.log(hits === 0 ? "DIST SEARCH: ZERO banned matches" : `DIST SEARCH: ${hits} hits`);

for (const lang of langs) {
  const html = fs.readFileSync(path.join(dist, lang, "index.html"), "utf8");
  const expected = `href="/${lang}/places/prohodna-cave"`;
  console.log(html.includes(expected) ? `${lang}: link OK` : `${lang}: MISSING ${expected}`);
}

const assets = fs.readdirSync(path.join(dist, "_assets")).map((n) => {
  const full = path.join(dist, "_assets", n);
  return { n, bytes: fs.statSync(full).size };
});
const js = assets.filter((a) => a.n.endsWith(".js"));
const css = assets.filter((a) => a.n.endsWith(".css"));
console.log("JS bytes", js.reduce((s,a)=>s+a.bytes,0), js.map(a=>a.n));
console.log("CSS bytes", css.reduce((s,a)=>s+a.bytes,0), css.map(a=>a.n));
console.log("PortalCard lines", fs.readFileSync(path.join(root,"src/components/PortalCard.astro"),"utf8").split(/\r?\n/).length);
console.log("en html bytes", fs.statSync(path.join(dist,"en/index.html")).size);
