# Do Not Touch Rules — Unlocking Bulgaria / Hidden Bulgaria Quests

> These rules apply to ALL agents at ALL times unless the project owner explicitly overrides them in writing for a specific task.

Last updated: 2026-05-30

---

## Rule 1 — No global rewrites without approval

Do not rewrite entire files, entire modules, or the whole component tree. Rewrites must be proposed as documents first and approved before any code is touched.

**What counts as a global rewrite:**
- Replacing the CSS architecture (e.g., switching from flat CSS to CSS modules, Tailwind, etc.)
- Replacing the component structure (e.g., moving to React, migrating away from Astro)
- Replacing the i18n system
- Replacing the build pipeline

---

## Rule 2 — No renaming core routes without approval

The URL structure of the site is indexed, shared, and linked. Renaming routes causes broken links, SEO damage, and redirect drift.

**Protected routes:**
- `/en`, `/bg`, `/de`, `/fr`, `/es`, `/it`, `/ro`, `/tr`, `/el`, `/pl`, `/ru`, `/ja`, `/sr`
- All hash anchors: `#how-it-works`, `#domains`, `#guardian-sight`, `#timeline`, `#features`, `#download`, `#faq`, `#contact`, `#partners`

**Process:** Any route rename requires a proposal document and an updated `_redirects` file submitted together.

---

## Rule 3 — No changing navigation flow without approval

The navigation structure connects the header links to section anchors. Changes affect user flow, accessibility, and screen reader behavior.

**Do not change:**
- The order of navigation items in `Header.astro`
- The section IDs used as navigation targets
- The mobile menu behavior
- The language switcher logic

---

## Rule 4 — No changing monetization logic without approval

The access model (guest / explorer / route purchase / domain bundle / full unlock / subscription) is a product decision that affects legal, business, and user expectations.

**Do not change:**
- The tier definitions
- The guest access scope
- The entitlement logic
- The pricing model or purchase flow

Any change requires a written product decision logged in `/docs/decisions/DECISION_LOG.md`.

---

## Rule 5 — No changing auth / payment logic without approval

Authentication and payment logic is HIGH CRITICAL territory. Mistakes cause security vulnerabilities, payment failures, and user data loss.

**Do not touch** (even to "clean up"):
- Any auth token handling
- Any payment processing code
- Any entitlement checks
- Any signed URL generation logic

These modules do not exist on the website yet. When they are added, they are immediately protected by this rule.

---

## Rule 6 — No deleting existing content without backup confirmation

Do not delete translation keys, domain data, or any user-visible copy without:
1. Confirming the content is not referenced anywhere
2. Confirming the project owner has approved the deletion
3. Noting the deletion in the commit message

This applies to `src/i18n/*.json` files, all 13 languages.

---

## Rule 7 — No radical changes to the design language

The visual identity (typography, spacing, color palette, animation style, icon system) is intentional and set. Do not introduce:

- New font families
- New color tokens that contradict the existing palette
- New animation libraries
- New icon sets that mix with existing symbols
- New layout paradigms (grid, flexbox changes that alter visual rhythm)

Minor additions (new utility classes, additional CSS variables) are allowed if they extend rather than replace.

---

## Rule 8 — No replacing the AR strategy without an architecture decision

Guardian Sight / Погледът на Пазителя is a core product differentiator. The decision to use native AR (ARKit/ARCore) vs. WebAR vs. other approaches is a major architectural decision.

**Do not:**
- Prototype an alternative AR approach in the repo without a decision document
- Add AR dependencies without approval
- Change the Guardian Sight concept, naming, or accessibility model

---

## Rule 9 — No hardcoding story content into components

All user-visible text must come through the i18n system. Story content, domain descriptions, checkpoint narratives, and UI labels must never be hardcoded as JSX/Astro template strings.

**Wrong:**
```astro
<p>Domain of the Name — Pliska, Preslav, Tarnovo.</p>
```

**Correct:**
```astro
<p>{t.domains.cards[1].key}</p>
```

This applies to all languages. Bulgarian text hardcoded directly in templates is equally wrong.

---

## Rule 10 — No adding new dependencies without explanation

Every new npm dependency adds surface area for security vulnerabilities, version conflicts, and bundle bloat.

**Required before adding any dependency:**
1. Name of the package
2. What problem it solves
3. Why no existing solution works
4. Package size and maintenance status
5. Project owner approval

Dev dependencies (linters, formatters) have lower risk but still require a note.

---

## Rule 11 — No silent changes

Every change made by any agent must be communicated. No silent:
- File renames
- Dependency upgrades
- Config changes (astro.config, wrangler.jsonc, tsconfig.json)
- Environment variable additions
- Build script modifications
- CSS custom property (variable) renames

**Silence = risk.** Document everything.

---

## Summary Table

| Rule | Scope | Override Process |
|------|-------|-----------------|
| No global rewrites | Entire codebase | Written proposal + project owner approval |
| No route renaming | URL structure | Proposal + redirects update + approval |
| No navigation changes | Header, anchors | Written approval |
| No monetization changes | Access model | Decision log entry + approval |
| No auth/payment changes | Future auth modules | Written approval |
| No content deletion | i18n files, all 13 langs | Confirmed + noted in commit |
| No design language changes | CSS, fonts, animations | Written approval |
| No AR strategy changes | Guardian Sight concept | Architecture decision document |
| No hardcoded content | All visible copy | Always use i18n — no exceptions |
| No silent dependency adds | package.json | Explanation required |
| No silent changes | All config files | Document everything |
