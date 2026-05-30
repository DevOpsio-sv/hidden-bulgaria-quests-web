# Unlocking Bulgaria Website

Official product website for **Unlocking Bulgaria**.

Unlocking Bulgaria is a premium mobile application that helps travelers explore Bulgaria through real-world quests, historical routes, mythology, culture, nature, optional AR experiences, and cinematic storytelling.

## Stack

- Static HTML, CSS, and JavaScript
- Cloudflare Pages for hosting
- Cloudflare `_headers` and `_redirects`
- Optional Cloudflare Workers/Pages Functions can be added later for lead forms, preview gates, or signed media URLs

## Local Development

Install dependencies:

```bash
npm install
```

Run through Cloudflare Pages locally:

```bash
npm run dev
```

Check JavaScript syntax:

```bash
npm run check
```

## Deploy

```bash
npm run deploy
```

The project is configured as a static Cloudflare Pages site. No build step is required for the current version.
