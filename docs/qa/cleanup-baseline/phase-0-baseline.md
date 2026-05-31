# Phase 0 Cleanup Baseline

- Date: 2026-05-31 19:40 UTC+3
- Branch: cleanup/performance-pass
- Baseline scope: Astro static build output from dist/
- Rendered HTML snapshot: docs/qa/cleanup-baseline/rendered-html/
- Route list: docs/qa/cleanup-baseline/routes.txt
- Asset summaries: sset-sizes-by-extension.txt, sset-files.tsv

## Command Baseline

### npm run check

Result: completed with 0 errors and 4 TypeScript hints.

Hints recorded by stro check:

- uild.js: CommonJS module hint.
- src/components/GuardianSightProhodna.astro: lang prop declared but unused.
- src/components/LivingMap.astro: Lang type import declared but unused.
- src/components/TimelineSection.astro: i callback parameter declared but unused.

### npm run build

Result: passed.

Build warning:

- /video/hero-poster.jpg referenced by CSS/markup did not resolve at build time and remains a runtime URL.

Build output summary:

- Pages built: 267
- Rendered HTML snapshots copied: 267
- Route entries recorded: 267

## Asset Size Summary

``text
.css: 1 files, 66004 bytes
.html: 267 files, 10848295 bytes
.svg: 2 files, 6545 bytes
.txt: 1 files, 75 bytes
.xml: 1 files, 37179 bytes
[no extension]: 2 files, 934 bytes

``

## Route Sample

Full route list is in outes.txt.

``text
/
/bg
/bg/map
/bg/places/balchik
/bg/places/begliktash
/bg/places/byala
/bg/places/cape-emine
/bg/places/durankulak
/bg/places/kaliakra
/bg/places/nessebar
/bg/places/pobiti-kamani
/bg/places/pomorie
/bg/places/prohodna-cave
/bg/places/ropotamo
/bg/places/rusokastro
/bg/places/shabla
/bg/places/sozopol
/bg/places/tyulenovo
/bg/places/varna
/bg/sea-domain
/de
/de/map
/de/places/balchik
/de/places/begliktash
/de/places/byala
/de/places/cape-emine
/de/places/durankulak
/de/places/kaliakra
/de/places/nessebar
/de/places/pobiti-kamani
/de/places/pomorie
/de/places/prohodna-cave
/de/places/ropotamo
/de/places/rusokastro
/de/places/shabla
/de/places/sozopol
/de/places/tyulenovo
/de/places/varna
/de/sea-domain
/el
``

## Visual Baseline Notes

A browser screenshot pass has not changed code and is intentionally described here as baseline observation criteria. For the key languages en, g, and el, the expected visual state is the current Astro-rendered design: dark cinematic background, fixed header, language selector, hero video/poster/globe layer, scroll-reveal sections, domain cards, Guardian Sight section, timeline, partner form, FAQ accordion, footer, map pages, sea-domain pages, and place pages including the Prohodna Guardian Sight demo.

The final verification pass must compare rebuilt HTML against endered-html/ and spot-check desktop/mobile plus reduced-motion states before accepting cleanup changes.
