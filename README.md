# Unlocking Bulgaria Website

Official product website for **Unlocking Bulgaria**.

Unlocking Bulgaria is a premium mobile application that helps travelers explore Bulgaria through real-world quests, historical routes, mythology, culture, nature, optional AR experiences, and cinematic storytelling.

## Stack

- Static HTML, CSS, and JavaScript
- Cloudflare Pages for hosting
- Cloudflare `_headers` and `_redirects`
- `dist/` build output for Cloudflare Pages
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

Build static output:

```bash
npm run build
```

Check JavaScript syntax:

```bash
npm run check
```

## Deploy

```bash
npm run deploy
```

For the Cloudflare Pages dashboard, use:

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave empty

The project is configured as a static Cloudflare Pages site.
