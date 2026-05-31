# Unlocking Bulgaria Website

Premium tourism and product website for **Unlocking Bulgaria** — a cinematic AR-powered exploration platform that reveals Bulgaria through real-world quests, heritage locations, interactive storytelling, optional augmented reality experiences, and collectible rewards.

Built and maintained by DevOpsIO.

---

## Overview

Unlocking Bulgaria is a multi-language tourism and product platform designed to:

* Present the Unlocking Bulgaria mobile application.
* Showcase destinations, routes, checkpoints, and cultural heritage locations.
* Provide SEO-optimized travel content.
* Support international visitors through multilingual content.
* Drive users toward app downloads and future purchases.
* Deliver a premium, cinematic, mobile-first experience.

The website serves as the public gateway to the Unlocking Bulgaria ecosystem.

---

## Technology Stack

### Frontend

* React
* TypeScript
* Vite
* Responsive Mobile-First Design

### Internationalization

Supported languages:

* Bulgarian (bg)
* English (en)
* German (de)
* French (fr)
* Spanish (es)
* Italian (it)
* Greek (el)
* Romanian (ro)
* Turkish (tr)
* Serbian (sr)
* Russian (ru)
* Japanese (ja)
* Chinese (zh)
* Hungarian (hu)

All content originates from Bulgarian source content and is synchronized across supported languages.

### SEO

The platform includes:

* Localized URLs
* Canonical URLs
* Structured Data (Schema.org)
* Open Graph metadata
* Social media previews
* Sitemap generation
* Search-engine optimized destination pages

---

## Local Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build production assets:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Project Structure

```text
src/
├── components/
├── pages/
├── sections/
├── locales/
├── assets/
├── hooks/
├── utils/
├── styles/
└── data/

public/
docs/
```

---

## Deployment

### Cloudflare Pages (Recommended)

Build Command:

```bash
npm run build
```

Output Directory:

```bash
dist
```

Deployment can be performed through:

* Cloudflare Pages
* Wrangler CLI
* CI/CD Pipelines

Example:

```bash
npx wrangler login
npm run deploy:cloudflare
```

---

## Content Management

Content is organized through structured data files and localization resources.

The platform is designed so that:

* New destinations can be added without redesigning pages.
* New languages can be added without changing layouts.
* SEO content can scale independently from application development.
* Future integration with CMS platforms remains possible.

---

## Performance Goals

Target metrics:

* Lighthouse Performance ≥ 90
* Lighthouse Accessibility ≥ 95
* Lighthouse Best Practices ≥ 95
* Lighthouse SEO ≥ 95

The website is optimized for:

* Mobile devices
* Tablet devices
* Desktop devices
* Slow network conditions
* International visitors

---

## Accessibility

The platform follows modern accessibility standards:

* Keyboard navigation support
* High-contrast typography
* Mobile-friendly touch targets
* Responsive layouts
* Screen reader compatibility
* Accessible multimedia content

---

## Related Products

### Unlocking Bulgaria Mobile App

The companion mobile application provides:

* Real-world quests
* GPS-based progression
* Cinematic storytelling
* Optional AR experiences
* Route relics and regional seals
* Cultural discovery journeys throughout Bulgaria

---

## Guardian Sight Prohodna — Image Assets

The `GuardianSightProhodna` component (`src/components/GuardianSightProhodna.astro`) requires two images in `public/media/prohodna/`.

### Base Photo (required — licensed)

| Property | Requirement |
|----------|-------------|
| File | `public/media/prohodna/prohodna-cave-base.jpg` |
| Subject | Interior of Prohodna Cave, Bulgaria — both twin sky openings ("Eyes of God") visible, looking up from the cave floor |
| Dimensions | At least **1200 × 750 px** (8:5 ratio); 1600 × 1000 recommended for retina |
| Format | JPEG, optimised for web (≤ 400 KB at 1200 px wide) |
| Credit | Photographer name, year, and licence must be displayed |
| Acceptable licences | CC BY 4.0 · CC BY-SA 4.0 · Commercial licence · Own work |
| **Action required** | Update `baseImage` path in the component + credit string in `guardianSight.prohodna.credit` in all i18n files |

Until a licensed image is supplied the component renders `prohodna-placeholder.svg` — an artistic SVG that depicts the twin eye openings.

### Overlay Art (optional)

| Property | Requirement |
|----------|-------------|
| File | `public/media/prohodna/prohodna-overlay.png` |
| Purpose | Screen-blended atmosphere layer painted over the base photo (Guardian Sight ON state) |
| Dimensions | **1200 × 750 px** exactly (must match base photo ratio) |
| Format | PNG with transparency |
| Style | Restrained sacred atmosphere — no sparkle or neon. Soft celestial palette: ivory, pale gold, deep indigo. The CSS gradient + SVG glyphs already provide the layer; this PNG is additive. |
| Blend mode | Applied as `mix-blend-mode: screen` at 68% opacity |

The overlay PNG path is set in `seoPages.ts` on the prohodna-cave entry:
```ts
guardianSight: { overlayImage: "/media/prohodna/prohodna-overlay.png" }
```
Remove or null this field to skip the PNG and rely on CSS-only atmosphere.

---

## Documentation

Project documentation is available in:

```text
docs/
```

Including:

* Architecture
* Design System
* SEO Strategy
* Content Structure
* Localization Rules
* Deployment Procedures

---

## Maintained By

**DevOpsio**

Website: [https://devopsio.co](https://devopsio.co)

Cloud Architecture • DevOps • Platform Engineering • Digital Experience Delivery

---

© Unlocking Bulgaria. All rights reserved.
