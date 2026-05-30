# Master Architecture — Unlocking Bulgaria / Hidden Bulgaria Quests

> **Public brand:** Unlocking Bulgaria  
> **Internal / project name:** Hidden Bulgaria Quests  
> **Website repo:** `hidden-bulgaria-quests-web`  
> Last updated: 2026-05-30

---

## 1. Project Purpose

This repository contains the official **marketing and product website** for the Unlocking Bulgaria mobile application. The website serves as:

- Public product landing page at `unlockingbulgaria.com`
- Download funnel for iOS and Android
- Partnership inquiry channel for municipalities, museums, and tourism businesses
- SEO-optimised multilingual entry point for international travelers
- Brand and concept introduction before app launch

The site does **not** contain the mobile app itself. It is a static Astro site deployed on Cloudflare Pages.

---

## 2. App Concept (Mobile Product — documented here for reference)

Unlocking Bulgaria is a premium mobile application for cultural exploration of Bulgaria through:

- **Real-world GPS quests** — visit real locations to activate checkpoints
- **Cinematic storytelling** — narrative moments rooted in history, mythology, and local memory
- **Optional AR (Guardian Sight / Погледът на Пазителя)** — augmented reality camera mode that reveals symbolic hidden layers over real-world locations
- **Historical timeline** — interactive 1345-year narrative linked to routes walked
- **Relics and artifacts** — permanent digital collectibles earned at route completion
- **Domains and Seals** — regional progression system toward the title of Keeper

### Player Role
- **Keeper / Пазител** — the title earned by completing all six regional domains

### Content Hierarchy
```
Checkpoint (1 real GPS location)
  └─ Route (5 checkpoints → 1 Relic)
       └─ Domain (3 Routes → 1 Seal)
            └─ Full Bulgaria (6 Domains → Keeper title)
```

### The Six Domains
| Domain | Region | Epoch |
|--------|--------|-------|
| Domain of Stone and River | Danube & Northwest | Before the Name |
| Domain of the Name | Old Capitals (Pliska, Preslav, Tarnovo) | After the Name |
| Domain of the Sea Gate | Black Sea Coast | Before the Name |
| Domain of Kings | Thracian Valley | Before the Name |
| Domain of Voice and Stone | Rhodope Mountains | After the Name |
| Domain of Crossroads | Sofia & Western Bulgaria | After the Name |

---

## 3. Website Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 5.0 (static output mode) |
| Language | TypeScript + Vanilla JavaScript |
| Styling | CSS (no preprocessor) |
| Hosting | Cloudflare Pages |
| Edge config | `_headers`, `_redirects` (Cloudflare) |
| Build | `npm run build` → `dist/` |
| Deployment | Wrangler CLI (`npm run deploy`) |
| Domain | `unlockingbulgaria.com` |

---

## 4. Frontend Modules (Website)

### 4.1 Page Structure
```
src/pages/
  index.astro          — Root redirect to /en
  [lang]/index.astro   — Dynamic language-based routing (13 languages)
```

### 4.2 Component Inventory
All components live in `src/components/` as `.astro` files.

| Component | Section |
|-----------|---------|
| `Header.astro` | Site header with language switcher and navigation |
| `HeroSection.astro` | Opening cinematic hero section |
| `PositioningBand.astro` | Brand positioning statement band |
| `HowItWorksSection.astro` | Quest progression explainer (4 steps) |
| `DomainsSection.astro` | Six regional domain cards |
| `GuardianSightSection.astro` | AR feature introduction |
| `TimelineSection.astro` | 1345-year historical timeline |
| `FeaturesSection.astro` | App feature grid |
| `DownloadCTA.astro` | App download call-to-action |
| `MemorySection.astro` | Memory/mystery narrative section |
| `PartnersSection.astro` | Partner and municipality inquiry |
| `FAQSection.astro` | Frequently asked questions |
| `ContactSection.astro` | Support, media, and business contact |
| `Footer.astro` | Footer with navigation groups and legal links |

### 4.3 Layout
```
src/layouts/Base.astro   — Base HTML shell, meta tags, font loading, global CSS
```

### 4.4 Styles
```
src/styles/global.css    — Global CSS (design tokens, typography, resets, animations)
```

---

## 5. Localization System

### Supported Languages (13)
`en`, `bg`, `de`, `fr`, `es`, `it`, `ro`, `tr`, `el`, `pl`, `ru`, `ja`, `sr`

### Architecture
- One JSON file per language in `src/i18n/`
- English (`en.json`) is the **base/source language** — all other languages are partial overrides
- `getDict(lang)` performs a deep merge: English fills any missing keys
- Language is determined by URL prefix: `unlockingbulgaria.com/en`, `/bg`, `/de`, etc.
- Root `/` redirects to `/en` via meta-refresh and canonical

### Key Exports (`src/i18n/index.ts`)
- `SUPPORTED_LANGS` — typed const array
- `Lang` — union type of all supported language codes
- `DEFAULT_LANG` — `"en"`
- `getDict(lang)` — returns fully merged translation dict
- `isValidLang(lang)` — type guard

---

## 6. Backend / Future Backend Modules

The current site is fully static. No server-side logic exists today.

### Planned / Ready to Add (Cloudflare Workers/Functions)
| Module | Purpose |
|--------|---------|
| Lead form handler | Partnership and contact form submission (email delivery) |
| Preview gate | Gated content access by email signup or payment |
| Signed media URLs | Secure delivery of premium audio/video/AR assets |
| Launch list capture | Email collection before app release |

---

## 7. Content System

### Website Content
- All copy lives inside JSON translation files (`src/i18n/*.json`)
- Structured as nested keys: `hero`, `domains`, `howItWorks`, etc.
- Domain data (names, regions, epochs, emblems) is embedded in `en.json` under `domains.cards`
- **No hardcoded copy in components** — all visible text must come from the translation dict

### Mobile App Content (future, separate repo)
- Checkpoints, routes, domains, relics, and story content will be stored in a structured content system (CMS or structured JSON/database)
- Content IDs follow the naming convention defined in `/docs/governance/NAMING_CONVENTIONS.md`

---

## 8. AR System (Guardian Sight / Погледът на Пазителя)

### Concept
- Optional augmented reality camera mode in the mobile app
- Reveals symbolic traces, glyphs, and hidden layers over real-world locations
- Nearby checkpoints pulse with energy relative to distance
- Hero checkpoints and domain finales feature deeper AR sequences

### Accessibility Principle
- Every AR moment has a **full non-AR alternative** with readable content, captions, and clear completion logic
- AR is never required to complete a quest

### Website Representation
- `GuardianSightSection.astro` introduces Guardian Sight with animated visual and feature bullets
- No actual AR runs on the website

---

## 9. Authentication / Payment / Entitlement System (Mobile App)

> This system is planned for the mobile app, not the marketing website.

### Access Model
| Access Level | Requires |
|-------------|---------|
| Guest | Nothing — intro, map preview, region previews, AR demo |
| Explorer | Account (free registration) |
| Route access | One-time in-app purchase per route |
| Domain bundle | One-time in-app purchase per domain |
| Full unlock | One-time purchase of all domains |
| Subscription | Future — not active at launch |

### Rules
- Login is required **before** any purchase
- Guest mode never expires but never unlocks paid content
- Subscription architecture is future-ready but not active at launch

---

## 10. Media Pipeline

### Current (Website)
- Static assets in `public/` (SVG favicon, robots.txt, headers, redirects)
- CSS animations and canvas-based star field in `src/styles/global.css` and `script.js`
- No video or audio assets currently on the website

### Future (Mobile App + Website)
- Audio narration per checkpoint (professional voice recording)
- Cinematic video sequences per domain finale
- AR effect assets per checkpoint (to be defined in `/docs/design/assets-guidelines/`)
- Signed URL delivery via Cloudflare Workers to prevent hotlinking
- Subtitles required for all spoken content (accessibility)

---

## 11. QA and Release Pipeline

### Website Release Flow
```
1. Local dev:    npm run dev   (Wrangler local server)
2. Build check:  npm run build (Astro → dist/)
3. JS check:     npm run check
4. Deploy:       npm run deploy (Wrangler → Cloudflare Pages)
```

### Build Output
- `npm run build` compiles Astro to `dist/`
- `build.js` copies additional static files to `dist/`
- Cloudflare Pages also accepts direct deploy from repo root (without build step)

### Multilingual Build
- Astro generates one page per language: `dist/en/index.html`, `dist/bg/index.html`, etc.
- 13 language directories in `dist/`

---

## 12. Future Scalability Notes

| Area | Future Consideration |
|------|---------------------|
| Content system | Structured CMS (Contentful, Sanity, or custom) for checkpoint/route/domain data |
| Mobile app repo | Separate repository — React Native or similar |
| Auth service | Cloudflare Workers + external auth (Auth0, Clerk, or custom) |
| Payment | Stripe or RevenueCat for in-app purchase integration |
| AR engine | Native AR (ARKit/ARCore) with custom asset pipeline |
| Offline support | Asset caching strategy for mountain and rural routes |
| Partner portal | Dedicated dashboard for municipality/museum route submission |
| Analytics | Privacy-first analytics (Plausible or Cloudflare Analytics) |
| API layer | Public API for map data, domain info, and partner routes |
| Subscription | RevenueCat or custom entitlement layer — architecture ready, not active |

---

## 13. Repository Structure Summary

```
hidden-bulgaria-quests-web/
├── src/
│   ├── components/     — 14 Astro page section components
│   ├── layouts/        — Base HTML layout
│   ├── pages/          — Route files ([lang]/index.astro)
│   ├── styles/         — Global CSS
│   └── i18n/           — 13 language JSON files + TypeScript helpers
├── public/             — Static assets (favicon, SEO files)
├── dist/               — Build output (generated, not edited)
├── docs/               — Governance, architecture, QA documentation
├── prompts/            — AI agent prompt templates
├── design/             — UI, brand, and asset guidelines
├── content/            — Structured content planning and IDs
├── astro.config.mjs    — Astro configuration
├── wrangler.jsonc      — Cloudflare deployment config
├── package.json        — Dependencies and scripts
└── README.md           — Developer quickstart
```
