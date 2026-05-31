# Cleanup Report - Safe Cleanup + Performance Pass

Date: 2026-05-31
Branch: `cleanup/performance-pass`

## Scope

This pass only removed provably unused code and files that do not affect the active Astro-rendered output. No UI, layout, text, design tokens, routes, i18n strings, or visible behavior were changed.

## Removed - Safe

### Legacy root static bundle

Removed:

- `index.html`
- `styles.css`
- `script.js`
- `build.js`
- `_headers`
- `_redirects`
- `robots.txt`
- `sitemap.xml`

Category: legacy static site files outside the active Astro build.

Proof of non-use:

- `package.json` uses `astro dev`, `astro build`, and `astro check`; it does not call `node build.js`.
- Active pages are generated from `src/pages/`.
- Active global CSS is imported from `src/layouts/Base.astro`.
- Active deploy metadata is under `public/_headers`, `public/_redirects`, and `public/robots.txt`, which Astro copies to `dist/`.
- `npm run build` after removal still generated the same 267 pages.
- Rendered HTML diff against the Phase 0 baseline showed 0 changed files.

Repository bytes removed: 96,405 bytes.

### Unused TypeScript-only symbols

Removed:

- `src/components/GuardianSightProhodna.astro`: unused `lang` destructuring from `Astro.props`.
- `src/components/LivingMap.astro`: unused `Lang` type import.
- `src/components/TimelineSection.astro`: unused `i` callback parameter in `d.events.map`.

Category: unused imports/variables/parameters reported by `astro check`.

Proof of non-use:

- Each item was reported by the Phase 0 `astro check` baseline as unused.
- The edited symbols were not rendered into markup.
- `npm run check` after cleanup returned 0 errors, 0 warnings, 0 hints.
- Rendered HTML diff against the Phase 0 baseline showed 0 changed files.

## Kept

- `src/i18n/*.json`: used through `getDict`, `SUPPORTED_LANGS`, language UI, and route generation.
- `src/data/seoPages.ts`: drives static paths, sitemap generation, SEO pages, localized fallback copy, map nodes, and app links.
- `src/components/LivingBackground.astro`, `src/styles/living-bg.css`, `src/utils/living-map.ts`, and `src/utils/guardian-sight.ts`: all actively imported.
- `public/favicon.svg` and `public/media/prohodna/prohodna-placeholder.svg`: actively referenced.
- `public/_headers`, `public/_redirects`, and `public/robots.txt`: active deploy files.

## Needs Review

- `src/data/seoPages.ts`: `guardianSight.overlayImage` points to `/media/prohodna/prohodna-overlay.png`, but that file is not present under `public/`. Removing or nulling it would change rendered markup, so it was not changed.
- `src/components/HeroSection.astro` and `src/styles/global.css`: `/video/hero-bg.mp4` and `/video/hero-poster.jpg` are referenced, but `public/video/` is not present. The build warning for `/video/hero-poster.jpg` existed in the baseline and remains unchanged.
- `src/utils/seoPageValidation.ts`: no active references were found, but it appears to be intended QA infrastructure. It was kept for owner review rather than deleted.

## Before / After

### `npm run check`

Before:

- 0 errors
- 0 warnings
- 4 TypeScript hints

After:

- 0 errors
- 0 warnings
- 0 hints

### Build output

Before:

- Pages: 267
- `.css`: 1 file, 66,004 bytes
- `.html`: 267 files, 10,848,295 bytes
- `.svg`: 2 files, 6,545 bytes
- `.txt`: 1 file, 75 bytes
- `.xml`: 1 file, 37,179 bytes
- `[no extension]`: 2 files, 934 bytes

After:

- Pages: 267
- `.css`: 1 file, 66,004 bytes
- `.html`: 267 files, 10,848,295 bytes
- `.svg`: 2 files, 6,545 bytes
- `.txt`: 1 file, 75 bytes
- `.xml`: 1 file, 37,179 bytes
- `[no extension]`: 2 files, 934 bytes

Shipped Astro output size is unchanged by design; the removed files were not part of the active Astro output. The practical win is removing legacy repo payload and making `astro check` clean.

## HTML Diff Summary

Compared rebuilt `dist/**/*.html` against `docs/qa/cleanup-baseline/rendered-html/**/*.html`.

- Missing files: 0
- Changed files: 0
- Extra files: 0

Result: rendered HTML is byte-identical for all 267 generated HTML pages.

## Visual / Behavior Spot Check

Checked with the local preview server:

- `/en`, `/bg`, `/el`: page titles, rendered text, and hero visual state loaded.
- FAQ accordion: first FAQ expands and updates `aria-expanded`.
- Language overlay: opens and reports active overlay state.
- `/en/places/prohodna-cave`: Prohodna page loads.
- Mobile width plus `prefers-reduced-motion: reduce`: Prohodna Guardian Sight toggle sets slider to 100, overlay opacity to 1, and `aria-pressed` to true.

Screenshots captured:

- `cleanup-en-desktop.png`
- `cleanup-bg-desktop.png`
- `cleanup-el-desktop.png`
- `cleanup-prohodna-mobile-reduced-motion.png`

## Core Web Vitals

No standalone Lighthouse/WebPageTest lab run was performed in this pass. Because the generated HTML and shipped asset sizes are byte-identical, no CWV regression is expected from the applied changes. Any future asset fixes for missing video/poster files should include a separate CWV measurement.

## Final Gate

- `npm run check`: passed, clean.
- `npm run build`: passed, 267 pages.
- `npm run check:seo-build`: passed for 252 localized routes.
- Rendered HTML diff: 0 changed files.
- New dependencies: none.
- Visual/text/design change: none detected; rendered HTML is identical.
