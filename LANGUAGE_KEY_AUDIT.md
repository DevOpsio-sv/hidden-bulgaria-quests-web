# Language Key Audit

Date: 2026-06-02

Master content source: `src/i18n/bg.json`

Runtime schema note: `src/i18n/index.ts` currently derives `Dict` from `en.json` and deep-merges non-English locales over English. For this reason, the audit records both Bulgarian-master differences and English-runtime fallback risks.

## Summary

- `bg.json` is the most up-to-date product source for the landing page progression, Cave Portal, Guardian Sight, domains, FAQ, and terminology.
- `en.json` contains additional runtime keys not present in `bg.json`: `hero.videoTitle`, `hero.videoClose`, and the `map` block.
- `zh.json` and `hu.json` include `seoPages.common`; most other non-English files do not.
- Most non-English files are structurally partial and rely on English fallback for `domains.cards`, `guardianSight.prohodna`, `map`, and `seoPages.common`.

## Missing keys by language

### `en`

- Missing against Bulgarian master: none for the main landing-page structure.
- Extra runtime keys compared with Bulgarian: `hero.videoTitle`, `hero.videoClose`, `map.*`.

### `de`

- Missing: `hero.portalAwakenCta`, `hero.portalUnlockedCta`, `hero.portalFinalCta`.
- Missing: `domains.heading`, `domains.lede`, `domains.lures`, `domains.cards`.
- Missing: `guardianSight.toggle`, `guardianSight.toggleActive`, `guardianSight.prohodna`.
- Missing: `map`.
- Missing: `seoPages.common`.

### `fr`

- Missing: `hero.portalAwakenCta`, `hero.portalUnlockedCta`, `hero.portalFinalCta`.
- Missing: `domains.heading`, `domains.lede`, `domains.lures`, `domains.cards`.
- Missing: `guardianSight.toggle`, `guardianSight.toggleActive`, `guardianSight.prohodna`.
- Missing: `map`.
- Missing: `seoPages.common`.

### `es`

- Missing: `hero.portalAwakenCta`, `hero.portalUnlockedCta`, `hero.portalFinalCta`.
- Missing: `domains.heading`, `domains.lede`, `domains.lures`, `domains.cards`.
- Missing: `guardianSight.toggle`, `guardianSight.toggleActive`, `guardianSight.prohodna`.
- Missing: `map`.
- Missing: `seoPages.common`.

### `it`

- Missing: `hero.portalAwakenCta`, `hero.portalUnlockedCta`, `hero.portalFinalCta`.
- Missing: `domains.heading`, `domains.lede`, `domains.lures`, `domains.cards`.
- Missing: `guardianSight.toggle`, `guardianSight.toggleActive`, `guardianSight.prohodna`.
- Missing: `map`.
- Missing: `seoPages.common`.

### `el`

- Missing: `hero.portalAwakenCta`, `hero.portalUnlockedCta`, `hero.portalFinalCta`.
- Missing: `domains.heading`, `domains.lede`, `domains.lures`, `domains.cards`.
- Missing: `guardianSight.toggle`, `guardianSight.toggleActive`, `guardianSight.prohodna`.
- Missing: `map`.
- Missing: `seoPages.common`.

### `ro`

- Missing: `hero.portalAwakenCta`, `hero.portalUnlockedCta`, `hero.portalFinalCta`.
- Missing: `domains.heading`, `domains.lede`, `domains.lures`, `domains.cards`.
- Missing: `guardianSight.toggle`, `guardianSight.toggleActive`, `guardianSight.prohodna`.
- Missing: `map`.
- Missing: `seoPages.common`.

### `tr`

- Missing: `hero.portalAwakenCta`, `hero.portalUnlockedCta`, `hero.portalFinalCta`.
- Missing: `domains.heading`, `domains.lede`, `domains.lures`, `domains.cards`.
- Missing: `guardianSight.toggle`, `guardianSight.toggleActive`, `guardianSight.prohodna`.
- Missing: `map`.
- Missing: `seoPages.common`.

### `sr`

- Missing: `hero.portalAwakenCta`, `hero.portalUnlockedCta`, `hero.portalFinalCta`.
- Missing: `domains.heading`, `domains.lede`, `domains.lures`, `domains.cards`.
- Missing: `guardianSight.toggle`, `guardianSight.toggleActive`, `guardianSight.prohodna`.
- Missing: `map`.
- Missing: `seoPages.common`.

### `ru`

- Missing: `hero.portalAwakenCta`, `hero.portalUnlockedCta`, `hero.portalFinalCta`.
- Missing: `domains.heading`, `domains.lede`, `domains.lures`, `domains.cards`.
- Missing: `guardianSight.toggle`, `guardianSight.toggleActive`, `guardianSight.prohodna`.
- Missing: `map`.
- Missing: `seoPages.common`.

### `ja`

- Missing: `hero.portalAwakenCta`, `hero.portalUnlockedCta`, `hero.portalFinalCta`.
- Missing: `domains.heading`, `domains.lede`, `domains.lures`, `domains.cards`.
- Missing: `guardianSight.toggle`, `guardianSight.toggleActive`, `guardianSight.prohodna`.
- Missing: `map`.
- Missing: `seoPages.common`.

### `zh`

- Missing: `hero.portalAwakenCta`, `hero.portalUnlockedCta`, `hero.portalFinalCta`.
- Missing: `domains.heading`, `domains.lede`, `domains.lures`, `domains.cards`.
- Missing: `guardianSight.toggle`, `guardianSight.toggleActive`, `guardianSight.prohodna`.
- Has `seoPages.common`.

### `hu`

- Missing: `hero.portalAwakenCta`, `hero.portalUnlockedCta`, `hero.portalFinalCta`.
- Missing: `domains.heading`, `domains.lede`, `domains.lures`, `domains.cards`.
- Missing: `guardianSight.toggle`, `guardianSight.toggleActive`, `guardianSight.prohodna`.
- Has `seoPages.common`.

## Extra keys by language

- `en`: `hero.videoTitle`, `hero.videoClose`, `map.*`.
- `zh`: `seoPages.common` exists while most other non-English files lack it.
- `hu`: `seoPages.common` exists while most other non-English files lack it.

These are not necessarily invalid, but they are schema mismatches relative to `bg.json`.

## Broken keys

- No invalid JSON files were found by file reads.
- No duplicated JSON keys were observed in the inspected files.
- No broken interpolation variables were found; the current translation files do not use interpolation tokens.

## Orphaned keys

- `hero.videoTitle` and `hero.videoClose` appear in `en.json` but are not referenced by the audited component code.
- `map.*` is referenced by `src/pages/[lang]/map.astro` and `src/components/LivingMap.astro`, so it is not orphaned even though it is missing from `bg.json`.
