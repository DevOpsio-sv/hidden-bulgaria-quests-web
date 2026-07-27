# Unlocking Bulgaria — Critical Design & UX Audit
**Target:** https://unlockingbulgaria.com/bg/ (and every other route)
**Date:** 2026-07-26
**Benchmark:** Awwwards SOTD / Apple / Stripe / Linear / Airbnb / Arc / National Geographic
**Method:** Live site fetched and parsed (bg, en), full source audit of `hidden-bulgaria-quests-web`, asset probing over HTTP, CSS cascade tracing, contrast math, i18n key diffing.

---

## 0. THE VERDICT, IN ONE PARAGRAPH

This is not a tourism website. It is a **well-written brand manifesto wrapped around an empty asset pipeline**. The copywriting is genuinely good — better than most award-winning sites. The engineering discipline is real (23 KB gzipped HTML, progressive-enhancement forms, reduced-motion handling, a security-headers file most agencies never write). And none of that matters, because:

**The site contains zero photographs of Bulgaria. Not one. Anywhere. On any page.**

The only `<img>` elements on the entire homepage are the logo, twice. All three `<video>` sources on the homepage point at files that do not exist (`/video/hero-bg.mp4` → 404, `/video/hero-poster.jpg` → 404, `/video/prohodna-portal.mp4` → 404). The flagship place page ships a vector *placeholder* with a visible credit line that reads *"Photo: placeholder · A licensed photo of Prohodna Cave is required · See README"*, plus a second image that 404s. The "Living Map of Bulgaria" is a hand-drawn polygon (the source comments say `TODO: replace with precise GIS-derived path`) with **one** dot on it. The hero eyebrow on the flagship page says *"Place · Preview route order"* — an internal draft badge, in production.

A visitor arrives at a black screen, waits **3.5 seconds** for a button to fade in, reads beautiful sentences about a land that remembers — and never sees the land. You are asking people to feel wonder about a country you have refused to show them.

Everything else in this document is secondary to that.

---

## 1. SCORES (1–10). Anything under 9.5 needs work. Almost everything here does.

| # | Category | Score | One-line reason |
|---|---|---|---|
| 1 | First Impression | **3.0** | Black void + wireframe globe; primary CTA appears at 3.5 s |
| 2 | Visual Hierarchy | **5.0** | Sound type scale, but 6 identical `<h2>`s on one page |
| 3 | Layout | **6.0** | Competent grids; hero is 60 % empty on desktop |
| 4 | Spacing | **6.5** | Consistent `clamp()` rhythm — the strongest visual system here |
| 5 | Typography | **5.5** | Great families, broken mobile scale (H1 *shrinks* as screen grows) |
| 6 | Color System | **6.0** | One gold on near-black. Coherent, monotone, no semantic layer |
| 7 | Contrast | **4.0** | Multiple hard WCAG failures caused by `opacity` on text |
| 8 | Readability | **5.0** | 14.4 px body copy at 600 px; `white-space:pre-line` breaks lines badly |
| 9 | Information Architecture | **3.0** | Map page is orphaned; no place index; nav is anchors only |
| 10 | Navigation | **3.5** | 6 anchors + a CTA. No way to reach 2 of 4 page types |
| 11 | Discoverability | **2.5** | Language switch hidden on mobile; map unreachable from home |
| 12 | Storytelling | **6.5** | The best thing about this project, undermined by having no images |
| 13 | Emotion | **4.0** | Words reach for awe; the screen delivers a wireframe |
| 14 | Engagement | **3.0** | One real interaction exists, on a page nobody can find |
| 15 | Conversion | **2.0** | "Join the launch list" — there is no launch list. Buttons are disabled |
| 16 | Accessibility | **5.0** | Real effort, then modals don't move focus and map targets are 5 px |
| 17 | Mobile UX | **3.5** | Typography scale inverted; map unusable; scroll hint deleted |
| 18 | Desktop UX | **5.0** | Best-case surface, still 4 of 5 cards are fake links |
| 19 | Animations | **4.5** | Correct easing, catastrophic choreography timing |
| 20 | Motion | **4.0** | 4 permanent infinite loops running behind static content |
| 21 | Performance Perception | **4.0** | Objectively fast (23 KB), subjectively slow (staged 4.4 s reveal) |
| 22 | Microinteractions | **4.0** | A cursor "lens" that never reacts to anything |
| 23 | Cards | **3.0** | 4 of 5 domain cards say "EXPLORE" on hover and do nothing |
| 24 | Buttons | **6.0** | Consistent, but 3 parallel button systems and a disabled primary |
| 25 | Forms | **7.0** | Genuinely well built — the only production-grade component |
| 26 | Modals | **3.5** | No focus move, no focus trap, no scroll lock, no background inert |
| 27 | Maps | **1.5** | Wrong country outline, 1 pin, and the place "map" is a text string |
| 28 | Images | **1.0** | There are none |
| 29 | Icons | **3.0** | Two contradictory icon languages on the *same* cards |
| 30 | Consistency | **4.5** | Card classes desynced from card content by index drift |
| 31 | Branding | **5.5** | Strong verbal identity, no visual identity beyond gold-on-black |
| 32 | Trust | **2.5** | "Draft", "placeholder", "coming soon", "See README" — in production |
| 33 | Premium Feel | **3.5** | Premium *intent*, prototype *execution* |

---

## 2. P0 — SHOWSTOPPERS (fix before anything else)

### P0-1 · There is no photography. Anywhere.
Full image inventory of the live site:

| Page | Images |
|---|---|
| `/bg/` (homepage) | `ub_logo_svg.png` ×2 (header + footer). **That is all.** |
| `/bg/places/prohodna-cave/` | logo ×2, `prohodna-placeholder.svg`, `prohodna-overlay.png` (**404**) |
| `/bg/map/` | logo ×2 |
| `/bg/sea-domain/` | logo ×2 |

Video inventory:

| Source | Status |
|---|---|
| `/video/hero-bg.mp4` (hero background) | **404** |
| `/video/hero-poster.jpg` (hero poster + CSS background) | **404** |
| `/video/prohodna-portal.mp4` (hero portal card) | **404** |
| `/ub_intro_video.mp4` (lightbox) | 200 — **24.0 MB, 11.6 s to download** |

The hero is therefore: `#030610` flat black, a 0.72-opacity SVG globe grid, and a 90-second rotation. Then text fades in over 4.4 seconds. **That is your first impression and your Awwwards submission screenshot.**

**Impact:** decisive. **Difficulty:** content sourcing, not engineering. **Expected gain:** +25 points on Overall Design alone. Nothing else on this list moves the needle comparably.

### P0-2 · Production pages are labelled as unfinished
- Place hero eyebrow renders `Място · Преглед на маршрут` — the internal draft badge (`seoPages.common.draft`, EN: *"Preview route order"*) concatenated onto every page whose `status: "draft"`. **All 9 content entries in `seoPages.ts` are `status: "draft"`.**
- Visible photo credit on the flagship page: *"Снимка: заместител · Необходима е лицензирана снимка на Пещера Проходна · Виж README"*.
- `AppCTASection` h2: *"Приложението още се изгражда"* ("The app is still being built").
- Both store buttons: `disabled` + "Очаквайте скоро".
- `MediaSection` renders a section titled with the place name whose entire body is the word *"Coming soon"*.

You are telling every visitor, in four separate places, that they are looking at a construction site.

### P0-3 · The primary conversion goal is impossible to complete
`download.lede` says *"Join the launch list and be ready…"*. **There is no launch list.** No email capture exists anywhere on the site. The only CTA in the download band is two `disabled` buttons. `APP_STORE_URL` and `GOOGLE_PLAY_URL` are both `null` in `src/config/appLinks.ts`.

Result: a visitor who is fully converted — who wants the app, right now — has **no action available**. They leave and never return, and you have no idea they were ever there (see P0-7).

### P0-4 · Four of five Domain cards are decorative liars
`DomainsSection.astro` renders `<article>` for every card except index 1. But `.dc-veil` — a full-card hover overlay containing a circled glyph and the label **"EXPLORE"** — is applied via `.domain-cin:hover .dc-veil{opacity:1}`, which matches **all five cards**. So four cards fade up an explicit "EXPLORE" affordance on hover and do nothing when clicked. The `cursor:default` fallback is not a fix; a full-bleed reveal saying "EXPLORE" is a promise.

### P0-5 · Card styling is desynced from card content
`atmoClasses = ["dc-stone","dc-name","dc-sea","dc-kings","dc-voice","dc-cross"]` is index-mapped onto `domains.cards`, which is now 5 entries in a different order:

| Card | Content | CSS class applied | Atmosphere shown |
|---|---|---|---|
| 0 | The Kings Domain | `dc-stone` | cold blue |
| 1 | The Sea Gate | `dc-name` | amber/gold |
| 2 | The Sacred Traces (monasteries) | `dc-sea` | **deep sea blue** |
| 3 | The Golden Gate | `dc-kings` | purple |
| 4 | The Cave Domain | `dc-voice` | green |

Every atmospheric background is on the wrong card. `dc-cross` is dead. The `veils` glyph array (`◉ ⌘ ◈ ✦ ♪ ◎`) is likewise index-mapped and contradicts each card's own `emblem` field (`🏛 🌊 ✦ ⚔ ◎`), which is never rendered at all. **Two different icon vocabularies, both wrong, on the same five cards.** The `♪` (music note) glyph appears on the Cave Domain.

### P0-6 · The map is not a map
- `LivingMap.astro:49` — the Bulgaria silhouette is a 13-point hand-drawn polygon with an in-source `TODO: replace with precise GIS-derived path`. It does not read as Bulgaria. For a *national* tourism product this is a credibility failure before it is a design failure.
- `mapPlaces = seoPlaces.filter(p => p.map != null)` → **one node**, Prohodna. The "Живата карта на България" has a single dot.
- The page has **no `<h1>`** (LivingMap opens at `<h2>`).
- Nodes are `<circle role="button" tabindex="0">` with `r` = 5–8 px. Click handler is `window.location.href = …`. Consequences: **not links** (no middle-click, no open-in-new-tab, no status-bar preview, invisible to crawlers), **Space key does nothing** (ARIA `button` requires Enter *and* Space), **no touch handling at all** (only `mouseenter`/`mouseleave`), and a **10–16 px touch target** — a 2.5× miss on WCAG 2.5.8 (24 px) and a 4× miss on the 44 px platform guideline.
- The tooltip contains a CTA reading "View place →" and is `pointer-events:none`. It is not clickable. It has no edge-collision logic (`translate(-50%,-110%)`), so nodes near the top clip off-canvas.
- `.lmap-domain-card` is `pointer-events:none` too: hovering a region opens an info card you cannot interact with and that contains no link.

### P0-7 · On the place page, the section titled "Map" is a string of numbers
`MapSection.astro` renders a bordered card with a `◎` glyph and the text `43.1730, 24.0710`. No embedded map. No "Open in Google Maps". No directions, no address, no parking, no transit, no nearest town. This is a page whose entire purpose is to make someone physically travel to a cave.

### P0-8 · 12 of 14 languages are ~46 % English
`en.json` = 506 strings. `bg.json` = 503. **Every other language: 335–372.** Diffing key paths against English:

| Lang | Missing keys | of |
|---|---|---|
| de, fr, es, it, ro, tr, el, hu, ru, ja, sr | **107** | 233 |
| zh | 70 | 233 |

Missing keys include `nav.firstPlace` and `hero.ctaFirstPlace` — **the primary CTA label is in English on 12 of 14 locales** — plus `domains.cards`, `domains.lures` (the entire emotional core of the Domains section) and the whole `seoPages.*` block, meaning `/de/places/prohodna-cave/` serves an **English `<title>`, English meta description, English `<h1>`, English body** under `<html lang="de">` with a self-referential `hreflang="de"`. Google will treat this as duplicate content across 12 locales × 4 page types. A German visitor sees a half-German page.

---

## 3. P1 — MAJOR UX FAILURES

### 3.1 The hero withholds itself for 4.4 seconds
```
eyebrow      0.60s
line 1       0.90s
line 2       1.60s
question     2.40s
lede         3.10s
CTAs         3.50s   ← the primary action
trust chips  3.90s
scroll hint  4.40s
arrow bob    5.00s
```
All initial states are `opacity:0`. This is not cinematic; it is a hostage negotiation. Stripe and Linear complete their hero reveal in under 900 ms. Apple's staged reveals are scroll-driven, not timer-driven, so they never block a returning visitor. Yours replays in full on **every** navigation back to home, and since `astro:page-load` re-runs, on every view transition.

**Fix:** compress the whole sequence to ≤900 ms (0 / 80 / 160 / 240 / 320 / 400 ms), or drop the fade entirely on `sessionStorage`-detected repeat visits.

### 3.2 Mobile typography scale is inverted
Trace the cascade for `.hero-line`:

| Viewport | Computed size |
|---|---|
| 901–1079 px | `clamp(3rem, 7.5vw, 7.5rem)` |
| 601–900 px | **1.875 rem (30 px)** |
| 481–600 px | **1.5 rem (24 px)** ← smallest |
| 361–480 px | `clamp(2.4rem,10vw,4rem)` → **≥38.4 px** |
| ≤360 px | `clamp(2rem,9vw,3.2rem)` → **≥32 px** |

**The headline is 24 px on a 560 px screen and 38 px on a 400 px screen.** Same for `.hero-question` (21.6 px at 600 px, 32 px at 480 px) and `.eyebrow`, which at ≤480 px jumps to `.95rem` — **larger than the `h3`s it sits above**. And `.hero-lede` is **0.9 rem = 14.4 px at ≤600 px** with `line-height:1.42`, against a site body base of 17 px. Sub-16 px body copy on mobile is a 2010 mistake.

### 3.3 Every internal link costs a redirect
`astro.config.mjs` sets `trailingSlash: "never"`, so all links are emitted as `/bg/places/prohodna-cave`. Cloudflare Pages serves `/bg/places/prohodna-cave/`. Result: **every navigation is a 307**.

Worse, `Base.astro` emits `<link rel="canonical" href="https://unlockingbulgaria.com/bg">` — canonical, all 14 `hreflang` alternates, and the entire `sitemap.xml` all point at URLs that redirect. Every crawl budget spend is doubled and the canonical signal is muddied site-wide.

### 3.4 Modals do not behave like modals
Three overlays, three different (broken) patterns:

| Overlay | `role` | Focus moved in | Focus trapped | Scroll locked | Background inert | Esc |
|---|---|---|---|---|---|---|
| Video lightbox | `dialog` + `aria-modal` | **No** — `lightbox.focus()` on a `<div>` with no `tabindex` is a no-op | No | No | No | Yes |
| Language overlay | `dialog`, no `aria-modal` | Yes (close button) | No | No | No | Yes |
| Mobile nav | *none* | No | No | No | No | Yes |

So opening the video lightbox leaves focus on the trigger *behind* the overlay; the next Tab walks into the page underneath. The mobile nav is a `<nav>` that visually covers the page and is not announced as a dialog at all. All three let the body scroll behind them.

### 3.5 The intro video is a 24 MB cold start with a desync risk
`preload="none"`, so the click starts a 24 MB download with **no spinner, no skeleton, no progress**. On a Bulgarian 4G connection that is 8–15 seconds of a black rectangle after a deliberate click. The audio is a **separate** `<audio>` element started in the same tick; any buffering difference desyncs narration from picture permanently (there is no re-sync logic, only `pause`/`play` mirroring). No captions, no transcript, no poster frame.

### 3.6 The place page is a cul-de-sac with a hall of mirrors
Outbound links from `/bg/places/prohodna-cave/`, excluding header and footer: **`#practical-heading`, `#route`, itself, itself, `/bg/map`.** That is the entire graph.

- `NearbyPlacesSection` renders one card: **a link to the page you are already on**, badged "Current".
- `RoutePreviewSection` renders one item: **the same self-link again**.
- Two consecutive sections, identical content, both self-referential.
- No visible breadcrumb (breadcrumbs exist only in JSON-LD).
- No link to the parent Cave Domain, no link back to Domains, no "next place".

### 3.7 Heading structure is broken on every content page
`/bg/places/prohodna-cave/` `<h2>` inventory:
```
Само в приложението        ← "Only in the app"
Пещера Проходна            ← page title, again
Само в приложението        ← again
Пещера Проходна            ← again
Практична информация
Пещера Проходна            ← again
Пещера Проходна            ← again
Преглед на маршрута
Пещерен портал
Приложението още се изгражда
Пещера Проходна            ← again
Очите на Бога
```
**Six `<h2>`s are the page title repeated.** Two more are the same "Only in the app" string. `/bg/sea-domain/` has the identical pathology (5× "Морски Предел"). For a screen-reader user navigating by heading, the document has no structure. For Google, it has no topical differentiation.

Root cause: `MapSection`, `MediaSection`, `TourismInfoSection` and `FAQSection` all take `title={copy.title}` as their heading instead of a section label.

### 3.8 Anchor navigation lands in the wrong place
`content-visibility: auto; contain-intrinsic-size: auto 600px` is applied to `#features`, `.dl-band`, `#partners`, `#faq`, `#contact` and `.site-footer`. Before those sections have rendered once, each occupies a 600 px placeholder. Clicking **Partners** or **FAQ** in the nav from the top of the page therefore computes a scroll target against fake heights, jumps, and then re-lays-out under the user as the real content resolves. Combined with `scroll-behavior:smooth`, the page visibly overshoots and settles.

### 3.9 The language system fails its own audience
- `/` → 302 → `/en` for **everyone**, with no `Accept-Language` negotiation. A Bulgarian visitor typing the domain gets English.
- No persistence — no cookie, no `localStorage`. Return visits reset to English.
- `.btn-lang{display:none}` below 600 px: on mobile, the **only** way to change language on a 14-language site is to open the hamburger, then open a second overlay. Two taps to discover something that should be one.
- Switching does `window.location.pathname = …` — a full reload that discards scroll position and replays the 4.4 s hero animation.
- The click handler mutates the DOM (`active` class, label swap, `document.documentElement.lang`) *before* navigating — a visible flash of a half-switched state.
- Pill labels are duplicated in JS (`{en:"EN",bg:"БГ",…}`) and in `LANG_LABELS` — two sources of truth.

### 3.10 The `<h1>` and landmark structure is inconsistent
- `/bg/map/` has **no `<h1>`**.
- `DownloadCTA` is a `<div id="download">`, not a `<section>` — the download band is not a landmark and its `<h2>` has no `id`/`aria-labelledby`.
- `MemorySection`'s giant `<h2>България.` is a display graphic, not a heading — it outranks real section headings in the outline.
- `PortalCard` puts an `<h2>` inside an `<a>`, then `aria-hidden`s the whole copy block, so that `<h2>` vanishes from the accessibility tree while remaining in the DOM outline.

---

## 4. ACCESSIBILITY — WCAG 2.2 REVIEW

Credit where earned: skip link, `prefers-reduced-motion` handled in five places, live regions on the form, an `sr-only` description for the Guardian Sight overlay, 44 px minimum on most controls, `focusable="false"` on decorative SVG, honeypot positioned off-screen rather than `display:none`. This is more care than 90 % of agency work. It is then undone by a short list of hard failures.

### Contrast failures (1.4.3 / 1.4.11) — all caused by `opacity` on text
| Element | Computed | Ratio | Required | Verdict |
|---|---|---|---|---|
| `.tli-year` (timeline years, the primary scannable element) | gold @ 42 % | **2.58 : 1** | 3.0 (large) | **FAIL** |
| `.ss-tag-reality` ("Reality" label) | `--text-3` @ 50 % | **≈2.0 : 1** | 4.5 | **FAIL** |
| `.footer-credit` (10.4 px) | `--text-3` @ 55 % | **2.76 : 1** | 4.5 | **FAIL** |
| `.store-btn-soon` labels | `--text-3` @ 70 % | **3.98 : 1** | 4.5 | **FAIL** |
| `.hiw-step-num` | gold @ 50 % | ≈2.9 : 1 | 4.5 | **FAIL** |
| `.gsp-credit` | `rgba(160,146,114,.6)` @ 10.9 px | ≈2.5 : 1 | 4.5 | **FAIL** |
| `.dc-epoch`, `.ji-sym`, `.feat-icon` | 70–80 % | 4.5–5.8 : 1 | 4.5 | borderline |

Base tokens are fine (`--text-3` on `--bg-0` = 7.2 : 1). **Every failure is a decorative `opacity` applied on top of a compliant colour.** Replace all of them with pre-blended hex values.

### 2.4.7 / 2.4.11 Focus
`.mobile-lang-btn:hover, .mobile-lang-btn:focus-visible { …; outline:none }` — the focus indicator is removed and replaced by `--gold-faint` (`rgba(216,181,106,0.10)`), a 10 % wash nowhere near the 3 : 1 required. **Straight failure.**

### 2.5.8 Target Size
Map nodes: 10–16 px. Required: 24 px. The map is the only "explore" surface and is unusable by touch or by anyone with a motor impairment.

### 2.1.1 Keyboard
- Map nodes and regions: `role="button"` handling **Enter only**. Space is required.
- Video lightbox: focus never enters, so keyboard users tab through the page *behind* the modal.
- SVG `focusable="true"` on `#lmap-svg` adds a phantom tab stop with no purpose.

### 4.1.2 / 1.3.1 Name, Role, Value
- `<ul class="hero-trust" aria-label="Interactive map of Bulgaria's hidden memory">` — the trust-chip list is labelled with `hero.mapLabel`, left over from a deleted map component. Screen readers announce *"Interactive map of Bulgaria's hidden memory, list, 4 items: AR live adventure…"*.
- `<nav class="footer-legal" aria-label={dict.ariaLangNav}>` — the legal links are announced as **language navigation**. Copy-paste bug.
- `HowItWorksSection`'s entire right column (`.hiw-flow`, four concept nodes: Checkpoint / Route+Relic / Domain+Seal / Keeper) is `aria-hidden="true"`. Four core product concepts are invisible to assistive tech.
- `role="slider"` on a native `<input type="range">` is redundant and forces manual `aria-valuenow` synchronisation.
- `.gsp-credit` is `aria-hidden="true"` — hiding a photo attribution from screen readers is both an a11y and an attribution problem.

### 1.4.4 Text Resize
`clamp()` with `vw` upper bounds means several strings stop responding to browser text-size settings at large viewports. Mixing `rem` minimums with `vw` maximums is correct; using `vw` as the *only* driver in `.memory-name` (`clamp(5rem,17vw,13rem)`) is not.

### Good, keep it
`prefers-reduced-motion` disables view transitions, shooting stars, the book-flip particle canvas, hero video, reveal animations, map pulses and Guardian Sight particles. That is thorough. The one gap: the `--bg-scroll-boost` scroll listener in `LivingBackground` is skipped under reduced motion — correct — but the 36 CSS motes and 5 pathway animations in `living-bg.css` need verifying against the same query.

---

## 5. SECTION-BY-SECTION DESIGN REVIEW

### Hero — **what feels amateur**
Empty. The `.hero-inner` is a flex row with `.hero-content` (max 640 px) and a 320 px card, on a `--max-w:1160px` canvas — at 1440 px+ there is 400 px of pure black doing nothing, and the composition drifts left with no counterweight. The globe is a wireframe from a 2016 SaaS template. `.hero-number` overrides the display face with `"Georgia", "Times New Roman"` for the "1345" — a **fourth** typeface, visibly different in weight and colour temperature from Cormorant Garamond beside it. The trust chips (`AR live adventure · Cinematic narrative · Family-friendly · 14 languages`) are 12.5 px grey pills that read as tags, not trust — and "14 languages" is a claim the site itself contradicts.

**What works:** the copy. *"1345 години. Едно Име оцеля. Как?"* is a genuinely excellent hook. It deserves a photograph behind it.

### Portal Card — **what feels template**
A 320 px card with a broken video behind it, a scanline, and a masked radial. `.portal-panel-bg` uses a `mask-image` that punches a transparent ellipse in the middle of the panel — which was designed to let the cave video show through. With the video 404ing, the mask reveals **nothing**, so the card has an unexplained soft void in its centre. `.portal-copy` is entirely `aria-hidden`. The whole card is one link with a nested `<h2>`.

### Band / Memory — **what works**
`България.` at `clamp(5rem,17vw,13rem)` is the single most confident moment on the site. Keep it. It is also the only place the design allows itself scale. Everything else is timid by comparison — which is why the page reads flat.

### How It Works — **what feels average**
A vertical spine with 3 steps and a sticky 4-node column. The code was written for 4 steps (`reveal-d3` branch is dead), the copy says "three simple steps". The sticky column duplicates the Journey section's five concepts almost exactly, two screens later. The step numbers are `01/02/03` at `0.7rem` with `opacity:.5` — the numbering, the most useful scanning aid, is the least visible element.

### Domains — **the biggest missed opportunity on the site**
Five full-bleed cards, `min-height: clamp(340px,38vw,500px)`, each with a coloured radial gradient standing in for a photograph. This should be the emotional centrepiece — five regions of Bulgaria, five cinematic images, five doors. Instead: five coloured fogs, wrong colours on wrong cards (P0-5), one working link, four fake "EXPLORE" overlays (P0-4), and on 12 of 14 languages **the copy is in English** (P0-8). `domains.lede` is authored in the i18n file and never rendered.

### Guardian Sight (homepage) — **what feels inconsistent**
Four "Reality → Revealed" cards, then four capability cards, then a CTA button labelled **"Guardian Sight →"** (`centerLabel.replace("\n"," ")`) — a noun where a verb belongs. This section's section-CTA is the weakest CTA copy on the page and it points to the one place page you have. Meanwhile `guardianSight.lede`, `.toggle`, `.floatTag1/2`, `.ariaVisual` sit unused in the i18n file — evidence a richer interactive component was removed and its shell left behind.

### Guardian Sight — Prohodna (place page) — **what feels premium, and is wasted**
This is the one genuinely award-grade component: a drag-to-reveal before/after stage with `clip-path`, celestial light gradients, drifting particles, an Earth↔Spirit glyph axis, a keyboard toggle with `aria-pressed`, a live region, and an `sr-only` layer description. It is well built.

It reveals **a placeholder line drawing** with a **404ing overlay PNG** on top, under a caption that admits it. And it lives on a page reachable only via a CTA labelled "See the first place". Nothing on the homepage tells you this interaction exists.

Also: the `<input type=range>` is `position:absolute; inset:0` over the whole stage, so a single click anywhere on the image teleports the reveal — there is no drag-only mode and no click-to-step.

### Timeline — **what feels outdated**
Six static rows: year, label, headline, paragraph. No interaction, no scroll-linked motion, no imagery, no map linkage, no "visit this" hook. The years — the reason a timeline exists — are rendered at `opacity:.42` (2.58 : 1, a contrast failure) and right-aligned into a narrow gutter. On mobile they drop to `clamp(1.1rem,2.5vw,1.5rem)` and lose all presence. This is a Wikipedia table with a gold dot.

### Journey — **redundant**
Five concepts in a 5-column bordered grid. At 1160 px each cell is ~200 px wide holding a 1.5 rem serif name and 3 lines of 15 px text — cramped. It repeats the How It Works flow column. One of the two should be deleted.

### Features — **what feels template**
Eight cards, `repeat(auto-fill, minmax(210px,1fr))`, glyph + title + 2 lines. Indistinguishable from any SaaS feature grid. `auto-fill` (not `auto-fit`) leaves phantom empty tracks at some widths.

### Download band — see P0-3.
Also: `<p class="eyebrow" style="text-align:center">` — the only inline style in the codebase.

### Partners — **what works**
Three benefit cards + the best-engineered thing here: a form with a `method`/`action` no-JS fallback, honeypot, timestamp, server-side validation shared between client and Worker, `aria-invalid`, per-field `aria-describedby`, non-colour error glyphs, focus management to the first error, and dedicated `/partners/sent` + `/partners/not-sent` pages for the no-JS path. Genuinely good.

**But:** validation fires only on submit (no `blur` validation), there is **no consent checkbox or privacy-policy link next to a form collecting name/email/message in the EU**, `type` and `region` are optional but visually identical to required fields, and "We respond within 2 business days" is a promise with no proof.

### FAQ — **what feels average**
Ten well-written items in an accordion that toggles `display:none`/`block` — **no height transition, no motion**, on a site that animates shooting stars continuously. Single-open behaviour with no "expand all". And the homepage ships **no `FAQPage` JSON-LD** (place pages do), forfeiting a rich result on your highest-intent queries.

### Contact — **what feels amateur**
Four cards, four `mailto:` links. `mailto:` on mobile is a conversion cliff — it opens a mail client the user may not have configured. No form, no response-time expectation, no human name or face.

### Footer — **what feels inconsistent**
- `Built with ♥ in Bulgaria · Platform Engineering by DevOpsio` is **hardcoded English in the component**, violating the project's own rule #3 ("no hardcoded strings"), and appears untranslated on all 14 locales — including the Japanese and Chinese pages.
- `aria-label={dict.ariaLangNav}` on the legal nav (wrong label).
- No link to `/map`, no link to any place page, no language links, no social, no newsletter.
- Footer logo `<img>` has **no `width`/`height`** (the header one does) → layout shift on load, from a 580 KB PNG.

---

## 6. THE VISITOR WALKTHROUGH — every hesitation, in order

**0:00** Black screen. Is it loading? *(no skeleton, no poster, no progress)*
**0:00–3:50** Words fade in one at a time. I have read the headline; I am now waiting for permission to act.
**0:04** *"1345 Years. One Name Survived. How?"* — good. I want to know. **Where do I click?** There is one gold button and one ghost button and a card, and none of them answer "how".
**0:05** "See the first place." *The* first place? So there's one? Or is this the first of many?
**0:06** I hover the portal card. It's a card with a hole in the middle. **Is something broken?**
**0:08** I click "Watch intro". Black rectangle. Nothing happens for 9 seconds. **Did I break it?** No spinner.
**0:20** Video plays. Nice. I press Escape. It closes. I'm back where I was — good.
**0:25** Scroll. "More than a guide. More than a game." Good line.
**0:30** **България.** — the only moment I feel something.
**0:40** How it works. Three steps. Clear. Then a sticky column with four *different* concepts. **Is that the same thing or a different thing?**
**1:00** Domains. Five big cards. This looks like the main event. I hover — "EXPLORE" appears with a glyph. **I click. Nothing.** I click again, harder. Nothing. I try a third card. Nothing. **I now believe the site is broken.**
**1:20** (Card 2 does work, but I stopped trying by then.)
**1:30** Guardian Sight. Reality → Revealed. Interesting idea, entirely told in text. **Show me.** A button says "Guardian Sight →". That's not a verb. I click anyway.
**1:35** A new page. Eyebrow: **"Place · Preview route order."** What does that mean? Is this internal?
**1:40** Big title, "Only in the app", "Only in the app" again, quick facts, coordinates.
**1:50** A section called **Map** containing `43.1730, 24.0710`. **Where is this? How do I get there?**
**1:55** A section called **Gallery** that says **"Coming soon."**
**2:00** "Nearby places" → one card, which is this page. **Am I lost?** I click it. Same page. **I am definitely lost.**
**2:05** Guardian Sight slider. I drag it. Something glows. Underneath: *"Photo: placeholder · A licensed photo of Prohodna Cave is required · See README."* **This site is unfinished. I should come back later.**
**2:10** "Open the Living Map" — the only way forward. Click.
**2:15** A map of a country that isn't Bulgaria, with one dot. No heading. **Nothing to do.** No back link. No breadcrumb.
**2:20** Back button. Back button. Back to home. **The hero animation replays from zero.**
**2:30** Scroll to the bottom. Download → both buttons greyed out, "Coming soon". "Join the launch list." **There is no list.**
**2:40** Leave. Nothing captured me, nothing captured my email, and nothing recorded that I was here.

---

## 7. INFORMATION ARCHITECTURE

**Can users understand the structure?** No. Six on-page anchors plus one CTA is the whole navigation. Two of the four page types (`/map`, `/sea-domain`) appear in **no** navigation surface — `/map` is linked only from `AppCTASection`, which renders only on place and domain pages. `/sea-domain` is reachable only by clicking the correct one of five visually identical cards. Both are effectively orphaned.

**Where am I?** No breadcrumbs (JSON-LD only). No active-state on nav links. No section indicator during scroll (the scroll spine shows progress, not position).

**What can I do?** Read, or go to Prohodna. That is the complete verb list.

**Where next?** Every content page terminates. The place page's only forward link is a map with one pin. The map has no forward link at all.

**Recommended structure:**
```
/{lang}/                      Home — narrative, one clear conversion
/{lang}/places/               Place index          ← MISSING, blocks everything
/{lang}/places/{slug}/        Place detail
/{lang}/domains/              Domain index         ← MISSING
/{lang}/domains/{slug}/       Domain detail (currently /sea-domain, off-pattern)
/{lang}/map/                  Map — as a *filter view over the place index*
/{lang}/journal/              Stories/history      ← MISSING; you have the writing already
/{lang}/partners/             Partner landing page ← currently an anchor only
```
Three additions — a place index, a domain index, and promoting the map into the header — convert this from a brochure into something you can explore. Then: every place links to its domain, every domain lists its places, every map pin links to a place, every place shows 2–3 real "nearby" alternatives. **Exploration should never terminate.** Today it terminates on every path.

---

## 8. VISUAL DESIGN CRITIQUE

**Grid & alignment.** `--max-w:1160px` is narrow for a cinematic site in 2026; at 1920 px you get `min(1360px,88vw)`, but everything between 1160 and 1920 is letterboxed. Domain cards are full-bleed while every other section is contained — an inconsistency that reads as accidental rather than deliberate, because nothing else breaks the container.

**Depth.** One elevation model: `1px` gold-alpha border + `bg-card` + occasional glow. Radii: `10 / 16 / 24 / 999` — but `PortalCard` uses `30px` and `24px`, `.seo-device-card` uses `32px`, `.hero-phone` (dead) uses `28px`. **Four off-token radii.** Shadows are all glow-based (`0 0 Npx gold`); there is no directional light anywhere, so nothing sits *above* anything else. The page is flat by construction.

**Gradients.** Every section has an ambient radial `rgba(216,181,106,.03–.08)` glow. Nine sections, nine near-identical glows. Individually subtle, cumulatively a uniform gold haze that erases section boundaries — the opposite of the intended effect.

**Glassmorphism.** `backdrop-filter: blur(28px)` on the scrolled header and `blur(32px)` on the language overlay. Over a near-black background with no imagery behind it, blur has nothing to blur. It costs GPU and buys nothing.

**Image cropping / aspect ratios.** N/A — there are no images. The `8:5` intrinsic ratio on `.gsp-stage` is correct practice and should be the template once real photography lands.

**Empty / loading / skeleton states.** None exist. Not for the 24 MB video, not for the map, not for the form. `MediaSection` is a permanent empty state with no design treatment.

**Hover states.** Consistent vocabulary (`translateY(-2/-3px)` + border brighten). Applied to non-interactive `<article>` elements as often as to links — which is precisely why users click things that don't respond.

---

## 9. MICRO UX

| Interaction | Verdict |
|---|---|
| Custom cursor lens | A 38 px gold ring that lags at `0.18` lerp and **never changes state** — it doesn't grow on links, doesn't snap to targets, doesn't reveal anything. A "scanning lens" that scans nothing. Either make it a real tool (magnify/reveal on hover over cards) or delete it. |
| Page transitions | `scaleX(0→1)` book-flip + an 850 ms, 72-particle canvas burst on **every** navigation. Charming once. On the third navigation it is a tax. 850 ms is ~2.4× the perceptual budget for a route change. |
| Shooting stars | 5 elements, `position:fixed`, infinite, on every page forever. `contain:strict` is correct, but permanent ambient motion behind static text is a legibility and battery cost, not atmosphere. |
| Scroll spine | Good idea, `0.08s linear` height transition on every scroll event = per-frame layout thrash. Use `transform: scaleY()` instead of animating `height`. |
| Reveal-on-scroll | `0.82s` duration + up to `0.54s` stagger = content still arriving 1.36 s after entering the viewport. Halve both. |
| Accordion | No transition at all. |
| Sticky elements | `.hiw-flow` sticky at `top:100px`; header is 60–80 px. It works, but the column is `aria-hidden` so it sticks for sighted users only. |
| Scroll restoration | Astro's ClientRouter handles it, but the hero's 4.4 s timed animation replays regardless of restored scroll — so you land mid-page while the hero animates behind you. |
| Tooltips | Map only. `pointer-events:none`, no collision detection, no touch equivalent. |
| Image zoom | None. |
| Anchor navigation | Broken by `content-visibility` (§3.8). |

---

## 10. MOBILE AUDIT (separate pass)

1. **Typography scale inverts between 480 and 600 px** (§3.2). Fix first — it is the most visible defect on the most common device class.
2. **14.4 px lede copy** at ≤600 px. Minimum 16 px.
3. **`.hero-scroll-hint{display:none}` below 600 px** — on a `100svh` hero, mobile users lose the only "there is more" affordance. Keep it (or replace with a subtle bounce).
4. **Language switch requires 2 taps and is hidden** (§3.9).
5. **Map is unusable by touch** — 10–16 px targets, no tap-to-preview, tap navigates immediately (§P0-6).
6. **Hero is ~1100 px tall on a 640 px viewport** — `min-height:100svh` plus a 260 px portal card plus all copy. The "full-viewport cinematic hero" is 1.7 screens of scrolling.
7. **Touch targets:** good discipline elsewhere — 44 px minimum on nav, lang pills, close buttons; 48–54 px in the mobile nav; 56 px on the mobile CTA. Credit where due. The exceptions are the map nodes and the `.gsp-divider-handle` (44 px, acceptable) with a `touch-action:none` stage that blocks vertical scrolling over the whole image — **on mobile, the Guardian Sight stage traps the scroll.** A user swiping up through the page inside that 8:5 region will drag the reveal instead of scrolling.
8. **Safe areas:** handled (`env(safe-area-inset-bottom)` on footer and mobile nav). Good. Missing on the fixed header for landscape notch (`padding-left/right: env(safe-area-inset-left/right)`).
9. **Landscape:** handled at `max-height:500px` — trust chips hidden, hero un-clamped. Good.
10. **Mobile nav** is an absolutely-positioned panel, not a sheet; it doesn't lock body scroll, so the page scrolls behind the open menu.
11. **Perceived performance on mobile is worst-case:** 4.4 s of staged animation on a device that is already slower to paint, over a hero with no image to look at while waiting.

---

## 11. EMOTIONAL & GAME DESIGN

### Does it create wonder, curiosity, adventure, mystery, discovery, pride, desire to visit?

**Curiosity: yes** — from the writing alone. *"1345 years. One name survived. How?"* / *"Not a country. Bulgaria. A mystery that survived 1345 years."* / *"The sea does not remember names. It remembers movement, courage, and the spark that endures."* This is real writing.

**Everything else: no.** Wonder requires something to wonder *at*. Adventure requires stakes and a destination you can see. Desire to visit requires seeing the place. You have written the score for a film and shipped the screenplay.

### As a game-adjacent product, does the visitor feel they are entering an adventure?

No. They feel they are reading *about* one. The site describes progression systems — Checkpoints, Routes, Relics, Domain Seals, four Master Keys, the Living Covenant — with total fidelity and **zero demonstration**. Every mechanic is a noun in a card. Nothing on this website can be *played*, not even for ten seconds.

The one exception — the Guardian Sight reveal slider — is the correct instinct and proves the team can build this. It is buried two clicks deep and reveals a placeholder.

### What would make it unforgettable

- **One playable moment on the homepage, above the fold.** Not a video — an *interaction*. The Guardian Sight slider, over a real photograph of Prohodna, embedded in the hero. Drag left: a cave. Drag right: the Eyes of God, glyphs, memory. Thirty seconds after landing, the visitor has *used* the product's central verb. This alone is worth more than every other item in this document except the photography.
- **Make the map the spine, not a dead end.** *Google Earth* / *Atlas Obscura*: pins that open, cluster, filter by domain and epoch, and route between each other. The "before the Name / after the Name" epoch split is a brilliant, ownable filter axis you have already authored and never used as an interface.
- **Earn the "before/after 681 CE" idea visually.** A single scroll-driven transition where the land changes state — *Assassin's Creed Discovery Tour*'s trick of letting the same frame hold two eras. You already have the epoch data on every domain and every place.
- **Stakes and scarcity.** *"Four Master Keys. Nobody has all four yet."* A live counter of Keepers. A named first Keeper. Right now the progression has no tension because nothing is contested.
- **Restraint, learned from Monument Valley and Journey:** silence, negative space, one moving thing at a time. Currently five shooting stars, 36 motes, three auroras, a rotating globe, a lagging cursor ring, pulsing map rings and a particle burst all compete — **and none of them is the content.** Ambient motion everywhere reads as cheap; motion in exactly one place reads as expensive.

---

## 12. SEO & CONTENT

**Structural**
- Canonical, hreflang and sitemap all emit redirecting URLs (§3.3). Fix `trailingSlash` handling site-wide.
- Six duplicate `<h2>`s per content page (§3.7).
- `/bg/map/` has no `<h1>`.
- No `FAQPage` schema on the homepage despite 10 excellent Q&As.
- No `BreadcrumbList` rendered visually (schema-only).
- No `ImageObject`, no `TouristAttraction` imagery — because there are no images.
- `og:image` is the same generic `og-image.png` (332 KB) for every page in every language. Every share of every page looks identical.
- 12 locales serve English content under non-English `lang`/`hreflang` (§P0-8) — a duplicate-content and hreflang-consistency problem at scale.

**Discovery strategy**
`robots.txt` (Cloudflare-managed) sets `Content-Signal: ai-train=no` and `Disallow: /` for GPTBot, ClaudeBot, Google-Extended, CCBot, Applebot-Extended, Bytespider, meta-externalagent. For an unlaunched destination-marketing brand whose entire growth depends on discovery, **blocking every AI answer engine removes you from the fastest-growing travel-research channel.** `use=reference` permits attributed reference — but the per-agent `Disallow` blocks outrank it. This is a deliberate rights position and defensible; it should be a *decision*, not a Cloudflare default nobody reviewed.

**Content quality**
The prose is the asset. It is also over-dense: `.lede` uses `white-space:pre-line` with authored `\n` breaks that produce awkward orphans at intermediate widths (a break authored for a 1200 px line renders mid-phrase at 800 px). Progressive disclosure is absent — every section dumps its full argument at once. The FAQ is the only place with real disclosure, and it's the last thing on the page.

**Missing content that costs you traffic**
No "best time to visit", no itineraries, no "how to get there", no regional guides, no journal/blog, no press kit. You have ten authored FAQ answers and a five-domain mythology and you are publishing **one** place page.

---

## 13. CONVERSION

| Goal | Supported? |
|---|---|
| Install the app | **Impossible.** No listing, disabled buttons, no launch list, no email capture. |
| Explore places | **One** place page exists. |
| Stay longer | Every page dead-ends. No related content, no next step. |
| Visit Bulgaria | No map, no directions, no photos, no itineraries, no seasons, no logistics. |
| Share the website | No share affordance anywhere. One generic OG image for all pages and languages. |

**And you cannot measure any of it.** There is no analytics of any kind — confirmed in source and in the privacy policy, which states it proudly and honestly. That honesty is a genuine trust asset and I would keep the *stance*. But zero measurement means every recommendation in this document, including mine, is unfalsifiable. A cookieless, self-hosted, EU-compliant counter (server-side page counts, or a privacy-preserving tool that requires no consent banner) would preserve the promise and give you a feedback loop. Update the policy honestly if you do.

**The single highest-ROI change on this entire list:** replace the two disabled store buttons with **one email field** — *"Be the first Keeper. We'll write once, when it opens."* You have a working Cloudflare Function, shared validation, and a proven no-JS form pattern already in the repo. This is a half-day of work and it is the difference between a site that converts and a site that does not.

---

## 14. PERFORMANCE PERCEPTION

Objectively this site is **fast**: 23 KB gzipped HTML, 16.5 KB CSS, 5.4 KB JS, static, on Cloudflare's edge, TTFB ~50 ms. Better than nearly every award site.

It **feels slow**, for four avoidable reasons:

1. **4.4 s of staged hero animation** over an empty background. Perceived load ends when content is *usable*, not when it is *painted*.
2. **The hero has nothing to look at while waiting** — the poster 404s, so there is no progressive impression of arrival.
3. **580 KB PNG logo**, rendered at 46 px tall from an 877×340 intrinsic, in the header *and* footer, on every page. There is an unused `ub_logo_svg.webp` sitting in `/public`. This is very likely your LCP element.
4. **24 MB intro video with `preload="none"` and no loading state** — the worst-feeling moment on the site, because it follows a deliberate click.

**Fixes, in order:** compress the hero choreography to ≤900 ms → ship an actual hero poster (a real photograph, `fetchpriority="high"`) → serve the logo as SVG or a ≤20 KB WebP with explicit dimensions in both places → add a skeleton/spinner and a poster frame to the lightbox, and transcode the intro to ~4 MB at 1080p with HLS or a `preload="metadata"` first segment.

---

## 15. CONSISTENCY DEFECT LIST

**Buttons** — three systems: `.btn/.btn-gold/.btn-ghost` (52 px, pill, uppercase Cinzel), `.btn-dl` (44 px, pill, uppercase, different size/tracking), `.store-btn` (16 px radius, two-line, left-aligned). Plus `.portal-cta` inside the card, a fourth. `.btn-gold` is `0.92rem/700`; `.btn-ghost` is `0.96rem/700` in a different family. `.btn-dl` at ≤360 px drops to `0.8rem` with `padding:8px 12px` — falling under 44 px height.

**Radii** — tokens are `10/16/24/999`. Used off-token: `30px` (portal panel & video), `24px` (portal ≤520 px), `32px` (seo-device-card), `28px` (hero-phone, dead), `44px`+ pill handles.

**Icons** — `emblem` field (🏛 🌊 ✦ ⚔ ◎, never rendered), `veils` array (◉ ⌘ ◈ ✦ ♪ ◎, rendered), `flow` icons (◉ ⌘ ◈ ✦), `journey` symbols (◉ ⌘ ◈ ✦ ◎), `features` icons, `benefits` icons (◉ ◈ ✦), `contact` icons, plus stroked SVGs in the header and hero. **Emoji, geometric glyphs, a musical note, and line-art SVG all coexist.** The `♪` on the Cave Domain is the clearest single symptom.

**Typography** — four families in play: Cormorant Garamond (display), Cinzel (titles), Inter (body), **Georgia/Times** (the hero number). `h3` is globally uppercase `+.07em` Cinzel, but `.dc-title`, `.tli-headline`, `.ji-name`, `.feat-title`, `.hiw-step-title`, `.lmap-dc-name` and `.legal-heading` each override to `text-transform:none` with a different family and tracking — **seven local overrides of one global rule** means the global rule is wrong.

**Eyebrows** — `.eyebrow` is `.82rem/.22em`, but `.hero-eyebrow` is `.78rem/.28em`, `.portal-kicker` is `.68rem/.22em`, `.dc-epoch` is `.76rem/.24em`, `.ss-name` is `.72rem/.2em`, `.lmap-legend-title` is `.72rem/.2em`, `.tli-label` is `.76rem/.22em`. **Seven variants of the same element.** At ≤480 px `.eyebrow` becomes `.95rem` — larger than several `h3`s.

**Spacing** — `--sec-v` is honoured by `.section`, `.s-hiw`, `.s-domains`, `.s-journey`; but `.s-timeline`, `.s-sight`, `.gsp-section` use `clamp(88px,10–11vw,128–144px)` and `.dl-band` uses `clamp(88px,12vw,144px)`. Four competing vertical rhythms.

**Card padding** — `.feat-card` `clamp(20,2.5vw,32)`, `.benefit-card` `30px 26px`, `.contact-card` `30px 24px`, `.ss-card` `clamp(20,2.5vw,28)`, `.sight-feat` `18px 16px`, `.seo-fact` `22px 20px`, `.seo-nearby-card` `22px`. Seven values.

**Reveal delays** — `.reveal-d1/d2/d3/d4` = `.12/.26/.40/.54s`, but sections assign them by hand-written index ternaries (`i===1 ? "reveal-d1" : i===2 ? …`) that differ per component and produce dead branches when data length changes (`HowItWorks` handles 4 steps for 3 items; `Domains` handles 6 for 5).

**Dead code shipping to users** — `.arrival-section`, `.arrival-title`, `.al-1/2/3`, `.arrival-cta`, `.globe-container`, `.hero-phone*` (~120 lines) are all styled for components that no longer exist. `dc-cross` is unused. `domains.lede`, `domains.continue`, `domains.locked`, `domains.routesOf`, `guardianSight.lede`, `.toggle`* (homepage), `.floatTag1/2`, `.ariaVisual`, `.flowLabel2` are authored i18n strings that render nowhere.

---

## 16. REDESIGN ROADMAP

### P0 — Critical (nothing else matters until these ship)
| # | Action | Impact | Difficulty | Expected gain |
|---|---|---|---|---|
| 1 | Licence/commission real photography — hero, 5 domains, Prohodna base + overlay | **Extreme** | Med (content) | First Impression 3→8, Premium 3.5→7 |
| 2 | Ship the missing videos or delete the `<video>` elements | Extreme | Low | Removes the broken-site signal |
| 3 | Remove `draft` badges, the placeholder credit, and "Coming soon" empty sections from production | Extreme | Low | Trust 2.5→6 |
| 4 | Replace disabled store buttons with a working launch-list email capture | **Extreme** | Low | Conversion 2→7 |
| 5 | Make all 5 domain cards real links, or remove the "EXPLORE" veil from the 4 that aren't | High | Low | Removes the "site is broken" moment |
| 6 | Fix `atmoClasses`/`veils` index drift — key styling off `card.id`, not array position | High | Low | Consistency 4.5→7 |
| 7 | Fix the mobile type scale inversion (480–600 px) | High | Low | Mobile 3.5→6 |
| 8 | Fix `trailingSlash` so canonical/hreflang/sitemap/links match served URLs | High | Low | SEO UX 38→60 |
| 9 | Translate the missing 107 keys into 12 languages (or restrict `SUPPORTED_LANGS` to en+bg until they exist) | High | Med | Removes 12 broken locales |
| 10 | Compress hero choreography to ≤900 ms total | High | Low | Perf Perception 4→7 |

### P1 — Major UX
11. Build a place index (`/places/`) and a domain index (`/domains/`); add both to the header.
12. Put a real map on the place page: embedded, with directions, address, transit, parking.
13. Rebuild the map: correct GIS silhouette, `<a>` elements not `role="button"`, ≥24 px targets, touch preview, Space-key support, edge-aware tooltips.
14. Fix the heading hierarchy — section labels, not the page title, as `<h2>`s.
15. Focus management for all three overlays: move focus in, trap, lock scroll, `inert` the background.
16. Fix all opacity-derived contrast failures with pre-blended hex.
17. Restore focus outline on `.mobile-lang-btn`.
18. Delete `content-visibility` on anchor targets, or set explicit `contain-intrinsic-size`.
19. Visible breadcrumbs on place and domain pages.
20. Real "nearby places" — never a self-link.
21. `Accept-Language` negotiation on `/`, plus language persistence.
22. Surface the language switcher on mobile without the hamburger.
23. Loading state + poster + a ~4 MB transcode for the intro video.
24. Consent checkbox and privacy link on the partner form; validate on blur.
25. Replace `mailto:` contact cards with a form (reuse the partner pattern).

### P2 — Polish
26. Consolidate to one button system, one eyebrow, one card padding scale, one radius set.
27. One icon language. Pick geometric glyphs *or* line-art SVG. Delete the emoji and the `♪`.
28. Delete ~120 lines of dead CSS and the 10 unused i18n keys.
29. Animate the accordion (`grid-template-rows: 0fr→1fr`, 240 ms).
30. Replace the `height`-animated scroll spine with `transform: scaleY()`.
31. Logo as SVG/WebP with explicit dimensions in both header and footer.
32. Per-page `og:image` (place name over the place photo), localised.
33. `FAQPage` JSON-LD on the homepage.
34. Halve reveal durations (`.82s`→`.45s`) and stagger (`.54s`→`.24s`).
35. Reduce ambient motion to one system; delete the shooting stars or the motes, not both.
36. Active-state on nav links via `IntersectionObserver`.
37. Fix `aria-label` on the hero trust list and the footer legal nav.
38. Un-hide `.hiw-flow` from assistive tech, or delete it (it duplicates Journey).
39. Localise the hardcoded footer credit.
40. Add `width`/`height` to the footer logo.

### P3 — Delight
41. Embed the Guardian Sight reveal in the hero, over a real photograph.
42. Scroll-driven "before / after the Name" transition on one full-bleed section.
43. Map: cluster, filter by domain and epoch, animate routes between pins.
44. Keeper counter / first-Keeper name for social proof and stakes.
45. Timeline: scroll-linked, with a photograph and a "visit this place" link per event.
46. Ambient audio toggle (one control, off by default, remembered).
47. A share affordance with a per-place generated OG card.
48. `/journal/` — publish the writing you already have.
49. Make the cursor lens functional: reveal the hidden layer of whatever it passes over.
50. A 30-second guest "demo quest" playable in the browser, no install.

---

## 17. IMPLEMENTATION NOTES

**Hero choreography** — replace the eight cascading `animation-delay`s with a single CSS custom-property ladder and cut the scale by 5×:
`--d: 0ms / 80ms / 160ms / 240ms / 320ms / 400ms`, duration `320ms`, `cubic-bezier(.22,1,.36,1)` (your existing `--ease` is correct — only the timing is wrong). Gate the whole sequence on a `sessionStorage` flag so returning visitors get content immediately.

**Contrast** — a single find-and-replace pass. Every failure is `opacity` on text. Pre-blend against `--bg-0` and commit the hex. `.tli-year` should be `#8a7442` minimum (3.1 : 1 at that size); `.ss-tag-reality` should drop the opacity entirely and use `--text-3`; `.footer-credit` needs both a colour and a size increase (0.65 rem → 0.78 rem).

**Domain cards** — replace `atmoClasses[i]` / `veils[i]` with a field on each card object (`card.atmo`, `card.glyph`, `card.href`). Index-keyed styling against editorial data will drift again the next time someone reorders the array. Render the veil only when `card.href` exists.

**Accordion motion** —
```css
.faq-a { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .24s var(--ease); }
.faq-item.open .faq-a { grid-template-rows: 1fr; }
.faq-a > * { overflow: hidden; }
```
No JS height measurement, respects reduced motion via your global override.

**Modal focus** — one shared helper for all three overlays: store `document.activeElement`, `inert` the main content, move focus to the first focusable child, trap Tab within, `overflow:hidden` on `<body>` with scrollbar-width compensation, restore on close. ~40 lines, replaces three divergent implementations.

**Map** — render nodes as `<a href>` wrapping the circle, with a transparent `<circle r="14">` hit area behind the visible dot. That fixes target size, keyboard, Space, crawlability, middle-click and view transitions in one change. Add `pointerdown` for touch preview with a second tap to navigate.

**Guardian Sight scroll trap** — `touch-action:none` on `.gsp-stage` blocks vertical scrolling across the whole image on mobile. Use `touch-action: pan-y` and handle horizontal drag only, or restrict the drag surface to the handle.

**Trailing slash** — set `trailingSlash: "always"` in `astro.config.mjs` and update `canonicalPath`/sitemap generation, or configure Cloudflare Pages to serve without the slash. Either is fine; the current mismatch is not.

**Logo** — `ub_logo_svg.png` is 580 KB for a 46 px-tall mark. Ship the actual SVG (it exists — the filename says so), or the already-present `.webp`. Add `fetchpriority="high"` to the header instance and `loading="lazy"` + dimensions to the footer instance.

**Launch list** — reuse `functions/api/partner-enquiry.js` and `_validation.mjs` verbatim with a two-field schema. The progressive-enhancement pattern, the `/sent` + `/not-sent` pages, the honeypot and the error surface all already exist. This is a copy, not a build.

---

## 18. FINAL SCORES

| Metric | Score |
|---|---|
| **1. Overall Design** | **42 / 100** |
| **2. UX** | **34 / 100** |
| **3. Premium Feel** | **33 / 100** |
| **4. Adventure Feel** | **28 / 100** |
| **5. Trust** | **27 / 100** |
| **6. Accessibility** | **52 / 100** |
| **7. Mobile** | **33 / 100** |
| **8. Desktop** | **46 / 100** |
| **9. SEO UX** | **38 / 100** |
| **10. Awwwards Honorable Mention** | **~1 %** |
| **11. Awwwards Site of the Day** | **< 0.5 %** |

**Why the probabilities are near zero and not merely low:** Awwwards juries score Design, Usability, Creativity and Content. A submission whose hero background returns 404, whose flagship page displays the words *"placeholder"* and *"See README"*, and which contains no photography of its subject would not clear the first-pass screen. This is not a scoring judgement — it is a completeness judgement. Ship the photography, the launch list, the working cards and the mobile type fix, and this becomes a **60–65** site with a plausible Honorable Mention path. The writing and the Guardian Sight interaction are award-grade raw material. Nothing else currently is.

---

## 19. TOP 50 IMPROVEMENTS BY ROI

*(Rank = impact ÷ effort. 1 is the best trade you can make.)*

| # | Improvement | Impact | Effort |
|---|---|---|---|
| 1 | Launch-list email capture replacing the two disabled store buttons | Extreme | 0.5 d |
| 2 | Delete the `draft` badge, the "placeholder · See README" credit, and the empty "Gallery" section | Extreme | 1 h |
| 3 | Remove or ship the three 404ing `<video>` sources | Extreme | 1 h |
| 4 | Hero photograph + poster (`fetchpriority="high"`) | Extreme | 1 d + licensing |
| 5 | Compress hero animation 4.4 s → 0.9 s | High | 1 h |
| 6 | Make 4 dead domain cards real links (or strip their "EXPLORE" veil) | High | 2 h |
| 7 | Fix mobile type-scale inversion at 480–600 px | High | 2 h |
| 8 | Fix `atmoClasses`/`veils` index drift | High | 1 h |
| 9 | Fix `trailingSlash` — canonical, hreflang, sitemap, links | High | 2 h |
| 10 | Five domain photographs | Extreme | 2 d + licensing |
| 11 | Fix all opacity-derived contrast failures | High | 2 h |
| 12 | Restore focus outline on `.mobile-lang-btn` | Med | 5 min |
| 13 | Fix the two wrong `aria-label`s (hero trust list, footer legal nav) | Med | 10 min |
| 14 | Real Prohodna photograph + working Guardian Sight overlay | Extreme | 1 d |
| 15 | Place-page map with directions and address | Extreme | 1 d |
| 16 | Fix duplicate `<h2>`s on place and domain pages | High | 3 h |
| 17 | Header nav: add Map and Places | High | 2 h |
| 18 | Logo as SVG/WebP + dimensions in both instances | Med | 30 min |
| 19 | Modal focus management (shared helper ×3) | High | 4 h |
| 20 | Remove `content-visibility` from anchor targets | Med | 15 min |
| 21 | Loading state + poster on the intro lightbox | Med | 2 h |
| 22 | Transcode intro video 24 MB → ~4 MB | Med | 2 h |
| 23 | Place index page | High | 1 d |
| 24 | Visible breadcrumbs | Med | 3 h |
| 25 | Kill the self-referential "Nearby places" section | Med | 1 h |
| 26 | Translate the 107 missing keys ×12 languages | High | 3 d |
| 27 | `Accept-Language` negotiation + language persistence | High | 4 h |
| 28 | Surface language switcher on mobile | Med | 1 h |
| 29 | `FAQPage` JSON-LD on the homepage | Med | 30 min |
| 30 | Per-page localised `og:image` | Med | 1 d |
| 31 | Consent checkbox + privacy link on the partner form | Med (legal) | 1 h |
| 32 | Contact form replacing `mailto:` cards | Med | 4 h |
| 33 | Privacy-preserving analytics (no consent banner needed) | High | 3 h |
| 34 | Animate the accordion | Low | 30 min |
| 35 | Halve reveal durations and stagger | Med | 30 min |
| 36 | Reduce ambient motion to one system | Med | 2 h |
| 37 | Fix the Guardian Sight mobile scroll trap (`touch-action`) | Med | 30 min |
| 38 | Map: `<a>` nodes with 24 px hit areas + Space key | High | 4 h |
| 39 | Correct GIS Bulgaria silhouette | High | 3 h |
| 40 | Put real place pins on the map (needs #23's content) | High | 1 d |
| 41 | Nav active-state via IntersectionObserver | Low | 2 h |
| 42 | Consolidate buttons / eyebrows / radii / paddings to tokens | Med | 1 d |
| 43 | One icon language | Med | 4 h |
| 44 | Delete dead CSS and unused i18n keys | Low | 2 h |
| 45 | Localise the hardcoded footer credit | Low | 15 min |
| 46 | Guardian Sight reveal embedded in the hero | Extreme | 2 d |
| 47 | Timeline: scroll-linked, with photos and place links | High | 2 d |
| 48 | Scroll-driven "before / after the Name" era transition | High | 3 d |
| 49 | `/journal/` publishing the existing writing | High | 3 d |
| 50 | Browser-playable 30-second demo quest | Extreme | 2 w |

---

## 20. WHAT TO DO MONDAY MORNING

Items **1, 2, 3, 5, 6, 8, 12, 13** total roughly **one working day** and move Trust from 27 to ~45 and Conversion from 2 to ~6.

Then commission the photography. Everything else on this list is optimisation of a site that currently has nothing to look at.

The writing here is good enough to win awards. Go and photograph the country it is about.
