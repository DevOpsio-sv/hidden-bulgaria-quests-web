# CLAUDE.md — Unlocking Bulgaria / Hidden Bulgaria Quests

Quick-start context for Claude and any agent opening this repository.

---

## Project Identity

| Key | Value |
|-----|-------|
| Public brand | **Unlocking Bulgaria** |
| Internal name | **Hidden Bulgaria Quests** |
| Website | unlockingbulgaria.com |
| Repo | hidden-bulgaria-quests-web |
| Stack | Astro 5.0 · TypeScript · CSS · Cloudflare Pages |
| Languages | 14 (en, bg, de, fr, es, it, ro, tr, el, hu, zh, ru, ja, sr) |

## What This Repo Is

**Marketing website only** — not the mobile app. A static Astro site that introduces the product, supports 14 languages, and drives app downloads and partnership inquiries.

---

## Key Source Locations

| Path | Contents |
|------|---------|
| `src/components/` | 14 Astro section components |
| `src/i18n/` | Translation files (en.json is base; others deep-merge on top) |
| `src/layouts/Base.astro` | HTML shell, meta tags, hreflang, all inline scripts |
| `src/pages/[lang]/index.astro` | Language-routed landing page |
| `src/styles/global.css` | All CSS — design tokens, typography, layout, animations |

## Build Commands

```bash
npm run dev      # Local dev server (Wrangler)
npm run build    # Build to dist/
npm run check    # JS syntax check
npm run deploy   # Deploy to Cloudflare Pages
```

---

## Governance — Read Before Changing Anything

| Document | What It Covers |
|----------|---------------|
| [docs/governance/DO_NOT_TOUCH_RULES.md](docs/governance/DO_NOT_TOUCH_RULES.md) | 11 rules — read first |
| [docs/governance/AI_AGENT_OWNERSHIP.md](docs/governance/AI_AGENT_OWNERSHIP.md) | Which agent owns what |
| [docs/governance/NAMING_CONVENTIONS.md](docs/governance/NAMING_CONVENTIONS.md) | All naming rules with examples |
| [docs/implementation/AI_IMPLEMENTATION_WORKFLOW.md](docs/implementation/AI_IMPLEMENTATION_WORKFLOW.md) | 9-step process + risk levels |
| [docs/qa/AI_CHANGE_QA_CHECKLIST.md](docs/qa/AI_CHANGE_QA_CHECKLIST.md) | QA checklist for every change |
| [docs/decisions/DECISION_LOG.md](docs/decisions/DECISION_LOG.md) | 12+ canonical product decisions |
| [docs/architecture/MASTER_ARCHITECTURE.md](docs/architecture/MASTER_ARCHITECTURE.md) | Full project architecture |

---

## Non-Negotiable Rules (abbreviated — full list in DO_NOT_TOUCH_RULES.md)

1. **No global rewrites** without written approval
2. **No renaming routes or section IDs** (`#how-it-works`, `/en`, `/bg`, etc.)
3. **No hardcoded strings in components** — all copy comes from `src/i18n/*.json`
4. **No new npm dependencies** without explanation and approval
5. **No silent changes** — every change must be summarized
6. **Run `npm run build` before marking anything done**

---

## i18n System

- `en.json` is the source of truth. Add all new keys here first.
- Other language files are partial overrides — `getDict()` deep-merges with English
- Never add Bulgarian or any other language text directly into `.astro` templates
- Translation key paths use `camelCase.dotNotation`

---

## Risk Levels for Changes

| Level | Examples |
|-------|---------|
| LOW | Translation keys, CSS variables, docs |
| MEDIUM | Component logic, new sections, i18n structure |
| HIGH | Routing, `astro.config.mjs`, `wrangler.jsonc` |
| CRITICAL | Data model, architecture changes |

HIGH and CRITICAL require project owner approval before implementation.

---

## Agent Roles (brief — full in AI_AGENT_OWNERSHIP.md)

| Agent | Role |
|-------|------|
| Claude | Audits, docs, architecture review — no unilateral code changes |
| ChatGPT | Product strategy, WBS, content planning — no code |
| Cursor Pro Agent | Implementation of approved tasks |
| Codex | Isolated fixes, test writing, build errors |
| Gemini | Review only — SEO, UX, language consistency |

---

## Private Planning Documents

Product foundation documents (user journey, progression rules, monetization, access model, etc.) are stored in `_planning/` — this folder is listed in `.gitignore` and is not committed to git.
