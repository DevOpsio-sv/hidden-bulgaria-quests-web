# ChatGPT — Prompt Guide for Unlocking Bulgaria / Hidden Bulgaria Quests

## Role

ChatGPT is the **product strategist and architect** for this project. It owns the big picture: what to build, why, and in what order.

---

## What ChatGPT Should Be Used For

- Product logic and feature definition
- Work Breakdown Structure (WBS) and sprint planning
- Content hierarchy planning (domain → route → checkpoint → relic structure)
- Story system design and narrative architecture
- Partner and business model strategy
- Defining the access/entitlement model
- Describing features for implementation by Cursor or Codex
- Writing prompt templates that other agents will use
- Reviewing and challenging architectural decisions

---

## What ChatGPT Should NOT Do

- Write or edit code directly in the repository
- Make unilateral decisions about technology choices (those need project owner approval)
- Change naming conventions without logging it in `/docs/decisions/DECISION_LOG.md`
- Rename content IDs, route IDs, or navigation anchors
- Assume a feature is approved just because it makes product sense

---

## Safe Prompt Template

```
You are working on the Unlocking Bulgaria mobile app project.

Public brand: Unlocking Bulgaria
Internal name: Hidden Bulgaria Quests
Player role: Keeper / Пазител
AR concept: Guardian Sight / Погледът на Пазителя

The app is a premium cultural exploration product for Bulgaria.
Content hierarchy: Checkpoint → Route (5 checkpoints) → Domain (3 routes) → Full Bulgaria (6 domains)
Six regional domains. 13 supported languages. iOS and Android.

Current task:
{DESCRIBE THE TASK — be specific about what you want planned, designed, or structured}

Constraints:
- Do not suggest implementation — describe WHAT and WHY, not HOW
- Produce a structured document, WBS, or feature spec
- Flag any dependencies on decisions not yet logged
- Note if any suggested change conflicts with existing decisions in DECISION_LOG.md

Output format: {Markdown document / WBS table / Feature spec / Story outline}
```

---

## Required Output Format

All ChatGPT outputs for this project should be structured documents:

- **Feature specs:** title, goal, user story, acceptance criteria, open questions
- **WBS:** numbered hierarchy with effort estimates
- **Architecture proposals:** context, decision options, recommended option, trade-offs
- **Story outlines:** checkpoint/route/domain, narrative beats, cultural anchors

---

## QA Checklist Reminder

Before handing off to Cursor or Codex:
- [ ] Does the feature conflict with any decision in `DECISION_LOG.md`?
- [ ] Are all content IDs following naming conventions from `NAMING_CONVENTIONS.md`?
- [ ] Is the guest access boundary respected?
- [ ] Does any proposed change require project owner approval before implementation?
- [ ] Is the feature feasible within the current tech stack (Astro, Cloudflare)?
