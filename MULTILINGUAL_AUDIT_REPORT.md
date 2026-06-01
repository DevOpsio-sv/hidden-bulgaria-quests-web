# Multilingual Audit Report

Date: 2026-06-02

## Languages checked

Bulgarian (`bg`) was treated as the master source of truth. The audit covered `en`, `de`, `fr`, `es`, `it`, `el`, `ro`, `tr`, `sr`, `ru`, `ja`, `zh`, and `hu`.

## Missing translations found

- `de`, `fr`, `es`, `it`, `el`, `ro`, `tr`, `sr`, `ru`, `ja`: missing `hero.portalAwakenCta`, `hero.portalUnlockedCta`, and `hero.portalFinalCta`, which causes the Portal Card CTA/final state to fall back to English.
- `de`, `fr`, `es`, `it`, `el`, `ro`, `tr`, `sr`, `ru`, `ja`: missing `guardianSight.toggle`, `guardianSight.toggleActive`, and the complete `guardianSight.prohodna` block.
- `de`, `fr`, `es`, `it`, `el`, `ro`, `tr`, `sr`, `ru`, `ja`: missing `domains.heading`, `domains.lede`, `domains.lures`, and `domains.cards`.
- `de`, `fr`, `es`, `it`, `el`, `ro`, `tr`, `sr`, `ru`, `ja`: missing the `map` block used by `/[lang]/map`.
- `de`, `fr`, `es`, `it`, `el`, `ro`, `tr`, `sr`, `ru`, `ja`: missing the `seoPages.common` block used by SEO place/domain pages.
- `bg`: missing the runtime `map` block present in `en`, which can make Bulgarian map page metadata/content fall back to English.
- `bg`: missing `hero.videoTitle` and `hero.videoClose`; these appear in the runtime schema but are not currently referenced by `HeroSection.astro`.

## Incorrect translations found

- Most non-English files still describe the older progression model: `5 checkpoints / 3 routes / 6 domains`. Bulgarian now defines `3 steps`, `4 routes`, `4 Master Keys`, and the Living Covenant.
- Several non-English `hero.phoneDomain`, `hero.phoneTitle`, `hero.phoneDesc`, and `hero.phoneProgress` values still describe the older "Domain of the Name / old capitals / 4 of 7 seals" concept instead of the Bulgarian Cave Portal / Prohodna / Portal Seal concept.
- Several non-English `band` sections still say "Not a guide. Not a map. Not a game." while Bulgarian now says "More than a guide. More than a game." and "Interactive adventure that turns Bulgaria into your next mission."
- Multiple FAQ pricing answers still describe checkpoint previews and in-app purchases, while Bulgarian says guests can preview the map, domains, routes, checkpoint teasers, and Guardian Sight demo, and that full routes/domain bundles are premium one-time purchases.
- `fr`, `el`, `ro`, `tr`, `ru`, `ja`, and `sr` FAQ language lists mention `13 languages` and/or `Polish`, while Bulgarian lists 14 languages including Hungarian and Chinese.

## Hardcoded text found

- Components primarily use the translation system (`dict.*`) for user-facing labels.
- No component-level hardcoded Bulgarian UI text was found in the audited Astro components.
- Runtime hardcoded product constants and URLs were not changed because they are not translation copy.
- English leakage exists inside non-English JSON files, especially `de.json` step descriptions and `Guardian Sight` labels in several locales.

## Terminology inconsistencies found

- Keeper / Пазител is inconsistent across locales and sometimes appears as untranslated `Keeper` or Bulgarian `Пазител` inside non-English text.
- Domain / Предел is inconsistently rendered as Domain, Domäne, domaine, dominio, περιοχή, domeniu, bölge, домен, область, 領域, 领域, tartomány.
- Guardian Sight / Погледът на Пазителя appears as localized forms in some strings and as raw English `Guardian Sight` in others.
- Seal / Печат, Route / Маршрут, Relic / Реликва, Place / Място, and Checkpoint / Контролна точка are mostly localized but older progression copy uses obsolete counts and terms.
- Unlocking Bulgaria / Отключи България remains intentionally branded as `Unlocking Bulgaria` in most non-Bulgarian locales.

## Files requiring changes

- `src/i18n/bg.json`
- `src/i18n/en.json`
- `src/i18n/de.json`
- `src/i18n/fr.json`
- `src/i18n/es.json`
- `src/i18n/it.json`
- `src/i18n/el.json`
- `src/i18n/ro.json`
- `src/i18n/tr.json`
- `src/i18n/sr.json`
- `src/i18n/ru.json`
- `src/i18n/ja.json`
- `src/i18n/zh.json`
- `src/i18n/hu.json`

## Risk assessment

Risk level: LOW to MEDIUM.

The requested changes are translation-only, but the blast radius is broad because missing keys currently trigger English fallback through `getDict()`. Fixes must avoid layout, routing, business logic, animation, or component changes. The safest implementation is to update only confirmed stale strings and missing translation keys.
