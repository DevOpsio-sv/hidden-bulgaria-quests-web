import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://unlockingbulgaria.com",
  trailingSlash: "never",
  build: {
    assets: "_assets",
  },
});
