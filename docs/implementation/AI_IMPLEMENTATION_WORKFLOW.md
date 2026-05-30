# AI Implementation Workflow — Unlocking Bulgaria / Hidden Bulgaria Quests

> Every implementation task performed by an AI agent must follow this workflow.
> No exceptions. No shortcuts on HIGH and CRITICAL tasks.

Last updated: 2026-05-30

---

## The Nine-Step Process

### Step 1 — Describe the Task

State clearly what needs to be done. One paragraph. Include:
- What is the goal?
- What behavior should change (or not change)?
- Who requested this and in what context?

**Example:**
> Add the Bulgarian translation for the new `memory.mystery` key that was added to `en.json`. The key should appear in the MemorySection component. No structural changes — copy update only.

---

### Step 2 — Identify Files Likely Affected

List every file that will probably be read or changed. Before writing a single line of code.

**Example:**
```
src/i18n/bg.json         — add translation key
src/i18n/en.json         — verify key exists and read value
src/components/MemorySection.astro  — verify key is being used
```

If you discover during implementation that additional files are affected, update the list.

---

### Step 3 — Confirm Risk Level

Assign a risk level from the table below. If in doubt, assign the higher level.

| Level | Description | Examples |
|-------|-------------|---------|
| **LOW** | Docs, copy, isolated styling, translation keys | Add a translation key, fix a typo, update a CSS color variable, add a governance doc |
| **MEDIUM** | Component logic, navigation, content loading, new components | Add a new section component, change component props, modify i18n key structure |
| **HIGH** | Auth, payments, entitlement, AR engine, build config, routing | Modify `astro.config.mjs`, change URL routing, touch any future auth or payment module |
| **CRITICAL** | Data model migration, global architecture, release config, breaking changes | Rename core content IDs, restructure the i18n system, change the build output directory |

**For HIGH and CRITICAL tasks:** Stop. Document the plan in `/docs/decisions/DECISION_LOG.md` and get project owner approval before proceeding.

---

### Step 4 — Make Minimal Changes

Change only what is necessary to accomplish the task. Do not:
- Clean up adjacent code that wasn't part of the task
- Rename variables that "look better"
- Refactor patterns you disagree with
- Add comments explaining your changes (the commit message does that)

**One task = one focused change.**

---

### Step 5 — Run Checks

After making changes, verify:

1. `npm run build` — must pass without errors
2. `npm run check` — must pass
3. Visual review of affected sections (if UI was changed)
4. Run through the applicable items in `/docs/qa/AI_CHANGE_QA_CHECKLIST.md`

---

### Step 6 — Summarize Changes

Write a plain-language summary:
- What was done
- Why (if not obvious from the task description)
- What was intentionally NOT changed

Keep it to 3–6 sentences.

---

### Step 7 — List Files Changed

Provide an exact list of every file that was modified, created, or deleted.

```
MODIFIED: src/i18n/bg.json
MODIFIED: src/i18n/de.json
CREATED:  docs/governance/NAMING_CONVENTIONS.md
DELETED:  (none)
```

---

### Step 8 — List Possible Risks

Even for LOW risk tasks, note anything that could go wrong or that a reviewer should double-check.

**Example:**
> Risk: The `memory.mystery` key was added to bg.json but not yet to the other 11 language files. Those will fall back to English, which is acceptable but noted.

For HIGH/CRITICAL tasks, risks must be documented in detail.

---

### Step 9 — Suggest Next Step

Recommend what should happen next. Examples:
- "Deploy to staging and test on mobile"
- "Add the translation key to the remaining 11 language files"
- "The design team should review the new spacing before merge"
- "This change is complete — no follow-up needed"

---

## Risk Level Reference Card

```
LOW     ── docs, copy, isolated styling, translation key additions
MEDIUM  ── component logic, navigation, content loading, new sections
HIGH    ── auth, payments, entitlement, AR, build config, routing changes
CRITICAL── data model, global architecture, release config, breaking changes
```

### Who Can Execute Each Level

| Risk Level | Who Can Execute |
|-----------|----------------|
| LOW | Any authorized agent |
| MEDIUM | Cursor Pro Agent (after task is assigned) |
| HIGH | Cursor Pro Agent only, after written project owner approval |
| CRITICAL | Project owner only, or with explicit written delegation |

---

## Template for Change Summary

Use this template when reporting a completed implementation task:

```markdown
## Change Summary

**Task:** {One-sentence description}
**Risk level:** LOW / MEDIUM / HIGH / CRITICAL
**Agent:** {Agent name}
**Date:** {YYYY-MM-DD}

### What was done
{2–4 sentences}

### Files changed
- MODIFIED: {path}
- CREATED: {path}
- DELETED: {path}

### What was NOT changed
{Note any related things that were intentionally left alone}

### Possible risks
{List risks, or write "None identified" for LOW tasks}

### Next step
{Recommended follow-up}

### QA checklist
{Include sign-off from AI_CHANGE_QA_CHECKLIST.md}
```

---

## Examples by Risk Level

### LOW Example
**Task:** Fix a typo in `en.json`  
**Process:** Read `en.json`, make the edit, run `npm run build`, done.  
**No approval needed.**

### MEDIUM Example
**Task:** Add a new `MemorySection` component  
**Process:** Plan the component, identify affected files, build it, integrate it into `[lang]/index.astro`, test all 13 language routes, run QA checklist.  
**No pre-approval needed, but must pass full QA.**

### HIGH Example
**Task:** Modify `astro.config.mjs` to add a new integration  
**Process:** Write a proposal document. Describe the integration, its purpose, its risks. Log it in `/docs/decisions/DECISION_LOG.md`. Wait for project owner approval. Then implement.

### CRITICAL Example
**Task:** Rename all domain IDs across the content system  
**Process:** This is a data model change. Write a full migration plan. List every file affected. List every external system that references these IDs. Get written approval. Schedule a migration window. Execute with a full backup.
