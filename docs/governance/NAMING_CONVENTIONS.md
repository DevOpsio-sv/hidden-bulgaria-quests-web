# Naming Conventions — Unlocking Bulgaria / Hidden Bulgaria Quests

> All agents must follow these conventions. Deviations require a decision log entry.

Last updated: 2026-05-30

---

## 1. Folders

Use **lowercase kebab-case** for all folders.

```
src/components/
src/i18n/
src/styles/
docs/architecture/
docs/governance/
docs/qa/
docs/implementation/
docs/decisions/
prompts/chatgpt/
prompts/claude/
design/ui/
design/brand/
content/domains/
content/checkpoints/
```

Do not use PascalCase, snake_case, or camelCase for folder names.

---

## 2. Files

### Source files
- **Astro components:** `PascalCase.astro` — e.g., `HeroSection.astro`, `GuardianSightSection.astro`
- **TypeScript modules:** `camelCase.ts` — e.g., `index.ts`
- **CSS:** `kebab-case.css` — e.g., `global.css`
- **JavaScript:** `camelCase.js` — e.g., `script.js`, `build.js`
- **JSON data / translations:** `{languageCode}.json` — e.g., `en.json`, `bg.json`

### Documentation files
- **Markdown docs:** `SCREAMING_SNAKE_CASE.md` for governance/architecture — e.g., `MASTER_ARCHITECTURE.md`
- **README files:** `README.md` (always uppercase)
- **Decision entries:** `YYYY-MM-DD_short-description.md` inside `/docs/decisions/`

### Config files
- Follow the tool convention: `astro.config.mjs`, `wrangler.jsonc`, `tsconfig.json`, `package.json`
- Do not rename config files

---

## 3. React Native Components (Mobile App)

Use **PascalCase** with descriptive suffix.

| Type | Convention | Example |
|------|-----------|---------|
| Screen | `{Name}Screen` | `CheckpointScreen`, `DomainMapScreen` |
| Component | `{Name}` | `CheckpointCard`, `RelicBadge`, `DomainSeal` |
| Modal | `{Name}Modal` | `PurchaseModal`, `ARPromptModal` |
| Overlay | `{Name}Overlay` | `GuardianSightOverlay` |

---

## 4. Screens (Mobile App)

```
HomeScreen
DomainMapScreen
DomainDetailScreen
RouteDetailScreen
CheckpointScreen
CheckpointCompleteScreen
RelicScreen
KeeperScreen
GuardianSightScreen
TimelineScreen
ProfileScreen
PurchaseScreen
LoginScreen
RegisterScreen
GuestScreen
```

---

## 5. Hooks (Mobile App)

Use `use` prefix + descriptive name in camelCase.

```typescript
useCheckpointProximity()
useDomainProgress()
useRelicCollection()
useGuardianSight()
useEntitlement()
useAuthStatus()
useLocalization()
```

---

## 6. Services (Mobile App / Future Backend)

Use **camelCase** with `Service` suffix.

```typescript
checkpointService
routeService
domainService
relicService
authService
paymentService
entitlementService
arService
mediaService
```

---

## 7. Types and Interfaces (TypeScript)

Use **PascalCase**. Interfaces use `I` prefix only when disambiguation is needed.

```typescript
type Lang = "en" | "bg" | ...
type Dict = typeof en

interface Checkpoint { ... }
interface Route { ... }
interface Domain { ... }
interface Relic { ... }
interface Seal { ... }
interface UserProgress { ... }
interface Entitlement { ... }
```

Avoid generic names like `Data`, `Item`, `Object`, `Config` without a qualifying prefix.

---

## 8. Translation Keys (i18n)

Keys are **dot-separated camelCase paths** matching the JSON structure.

```
hero.line1
hero.ctaPrimary
domains.cards[0].name
howItWorks.steps[0].title
guardianSight.features[0].title
timeline.events[0].year
nav.download
footer.tagline
```

### Rules
- Never use snake_case in translation keys
- Never use SCREAMING_CASE in translation keys
- Group keys by section (matching the component name)
- New keys must be added to `en.json` first, then all other languages
- Missing translations fall back to English automatically (via `deepMerge`)

---

## 9. Content IDs

Content IDs are used to identify domains, routes, checkpoints, relics, seals, and artifacts in the data system.

### Convention: `{type}_{descriptor_in_english}` using **lowercase snake_case**

### Domain IDs
```
domain_danube_northwest
domain_old_capitals
domain_black_sea
domain_thracian_valley
domain_rhodope
domain_sofia_west
```

### Route IDs
```
route_northern_black_sea
route_danube_fortresses
route_old_capitals_core
route_thracian_tombs
route_rhodope_voices
route_sofia_layers
```

### Checkpoint IDs
```
checkpoint_kaliakra_001
checkpoint_nessebar_001
checkpoint_pliska_001
checkpoint_tarnovo_001
checkpoint_belogradchik_001
checkpoint_orpheus_cave_001
```

Numbering (`_001`) allows multiple checkpoints per location in future expansions.

---

## 10. Artifact / Relic IDs

```
artifact_guardian_stone
artifact_sea_serpent_map
artifact_golden_mask
artifact_orpheus_lyre_shard
artifact_capital_seal_brass
artifact_asparuh_banner
```

Pattern: `artifact_{descriptive_name}`

---

## 11. Relic IDs

Relics are earned at route completion (one per route).

```
relic_sea_memory
relic_danube_crossing
relic_name_bearer
relic_thracian_king
relic_voice_of_stone
relic_city_beneath
```

Pattern: `relic_{descriptive_name}`

---

## 12. Seal IDs

Seals are earned at domain completion (one per domain).

```
seal_black_sea
seal_danube_northwest
seal_old_capitals
seal_thracian_valley
seal_rhodope
seal_sofia_west
```

Pattern: `seal_{domain_descriptor}`

---

## 13. Media Asset Filenames

### Images
```
{type}-{descriptor}-{size}.{ext}

hero-bg-1920.jpg
domain-black-sea-cover-800.jpg
checkpoint-kaliakra-thumb-400.jpg
relic-sea-memory-400.png
ar-overlay-guardian-sight.svg
```

### Audio
```
checkpoint-kaliakra-narration-en.mp3
checkpoint-kaliakra-narration-bg.mp3
route-black-sea-ambient.mp3
```

### Video
```
domain-black-sea-cinematic-1080.mp4
checkpoint-tarnovo-reveal-720.mp4
```

### AR Effects
```
ar-effect-{checkpoint_id}.{ext}
ar-overlay-{type}.svg
```

---

## 14. AR Effect IDs

```
ar_effect_kaliakra_001
ar_effect_pliska_foundation
ar_effect_orpheus_cave_voice
ar_effect_domain_black_sea_finale
```

Pattern: `ar_effect_{location_or_type}`

---

## 15. Prompt Files

AI agent prompt files live in `/prompts/{agent}/`.

```
prompts/chatgpt/README.md
prompts/chatgpt/product-planning.md
prompts/chatgpt/wbs-template.md
prompts/claude/README.md
prompts/claude/code-audit.md
prompts/claude/architecture-review.md
prompts/cursor/README.md
prompts/cursor/component-implementation.md
prompts/codex/README.md
prompts/gemini/README.md
```

Prompt file names: `kebab-case.md`

---

## Quick Reference

| Entity | Convention | Example |
|--------|-----------|---------|
| Folder | lowercase-kebab | `src/i18n/` |
| Astro component | PascalCase.astro | `HeroSection.astro` |
| TypeScript type | PascalCase | `Checkpoint` |
| Translation key | camelCase dotpath | `hero.ctaPrimary` |
| Domain ID | `domain_snake` | `domain_black_sea` |
| Route ID | `route_snake` | `route_northern_black_sea` |
| Checkpoint ID | `checkpoint_snake_NNN` | `checkpoint_kaliakra_001` |
| Artifact ID | `artifact_snake` | `artifact_guardian_stone` |
| Relic ID | `relic_snake` | `relic_sea_memory` |
| Seal ID | `seal_snake` | `seal_black_sea` |
| AR effect ID | `ar_effect_snake` | `ar_effect_kaliakra_001` |
| Media asset | `type-descriptor-size.ext` | `domain-black-sea-cover-800.jpg` |
| Prompt file | `kebab-case.md` | `code-audit.md` |
| Gov doc | SCREAMING_SNAKE.md | `DO_NOT_TOUCH_RULES.md` |
