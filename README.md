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

DevOpsio

Infrastructure, Architecture, Product Engineering, Cloud Operations, Security, Performance Optimization, and Technical Delivery.

Website: https://devopsio.co

---

© Unlocking Bulgaria. All rights reserved.
