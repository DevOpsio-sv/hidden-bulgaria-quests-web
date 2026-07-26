import fs from "node:fs";

const html = fs.readFileSync("dist/en/index.html", "utf8");
const scriptSrc = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map((m) => m[1]);
const linkCss = [...html.matchAll(/<link[^>]+href="([^"]+\.css)"/g)].map((m) => m[1]);

console.log("script srcs:", scriptSrc);
console.log("css hrefs:", linkCss);
console.log("inline reduced-motion portal script:", /pausePortalVideosForReducedMotion|prefers-reduced-motion/.test(html));
console.log("portal-card present:", html.includes("portal-card"));
console.log("awaken remnants:", html.includes("AWAKEN") || html.includes("portal-awaken"));
console.log("three/cdnjs:", /cdnjs|three\.min\.js/.test(html));
console.log("portal href:", [...html.matchAll(/class="portal-card"[^>]*href="([^"]+)"/g)].map((m) => m[1]));
console.log("alt portal href:", [...html.matchAll(/href="([^"]+)"[^>]*class="portal-card"/g)].map((m) => m[1]));
