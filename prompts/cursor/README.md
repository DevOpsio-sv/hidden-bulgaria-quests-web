# Cursor Pro Agent — Prompt Guide for Unlocking Bulgaria / Hidden Bulgaria Quests

## Role

Cursor Pro Agent is the **primary implementation agent** for this project. It executes approved tasks inside the repository: writing components, updating translations, integrating features, and resolving build issues.

---

## What Cursor Should Be Used For

- Implementing approved UI component changes (`.astro` files, CSS)
- Adding or updating translation keys across language files
- Integrating new sections into pages
- Fixing TypeScript and build errors
- Small, safe, scoped refactors — **only when explicitly requested**
- Updating Cloudflare config (`_headers`, `_redirects`) when routing changes are approved
- Running `npm run build` and `npm run check` to verify changes

---

## What Cursor Should NOT Do

- Propose or execute global refactors without assignment
- Rename core routes, section IDs, or navigation anchors
- Change `astro.config.mjs` or `wrangler.jsonc` without approval
- Add new npm dependencies without explaining why (and project owner approval)
- Delete files without confirmation
- Make silent changes — every change must be summarized

---

## Safe Prompt Template

```
You are implementing a task in the Unlocking Bulgaria website repository.

Stack: Astro 5.0, TypeScript, CSS, Cloudflare Pages
Key files:
- Components: src/components/*.astro
- Translations: src/i18n/*.json (13 language files)
- Layout: src/layouts/Base.astro
- Page: src/pages/[lang]/index.astro
- Styles: src/styles/global.css

Governance:
- All visible text must use the i18n dict — no hardcoded strings
- Naming conventions: /docs/governance/NAMING_CONVENTIONS.md
- Do not touch DO_NOT_TOUCH areas: /docs/governance/DO_NOT_TOUCH_RULES.md
- Risk levels: /docs/implementation/AI_IMPLEMENTATION_WORKFLOW.md

Task (APPROVED):
{DESCRIBE THE EXACT CHANGE — be specific about component name, section, and expected behavior}

Risk level: {LOW / MEDIUM / HIGH}

Constraints:
- Change only the files listed in this task
- Do not refactor adjacent code
- After making changes, run: npm run build && npm run check
- Report all changed files

Output format: code changes + change summary using the template in AI_IMPLEMENTATION_WORKFLOW.md
```

---

## Required Output Format

After every implementation task:

```markdown
## Change Summary

**Task:** {One-sentence description}
**Risk level:** {LOW / MEDIUM / HIGH / CRITICAL}
**Agent:** Cursor Pro Agent
**Date:** {YYYY-MM-DD}

### What was done
{2–4 sentences}

### Files changed
- MODIFIED: {path}
- CREATED: {path}
- DELETED: {path}

### Build status
- `npm run build`: PASS / FAIL
- `npm run check`: PASS / FAIL

### Possible risks
{List risks, or "None identified"}

### Next step
{Recommended follow-up}
```

---

## QA Checklist Reminder

Before marking a task complete:
- [ ] `npm run build` passes
- [ ] `npm run check` passes
- [ ] No hardcoded strings in components
- [ ] Translation keys added to `en.json` and all other language files
- [ ] No unused imports in modified files
- [ ] No new dependencies added without explanation
- [ ] Layout renders correctly at 320px, 768px, 1280px
- [ ] See full checklist: `/docs/qa/AI_CHANGE_QA_CHECKLIST.md`
