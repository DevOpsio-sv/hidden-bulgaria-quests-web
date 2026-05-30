# AI Agent Ownership — Unlocking Bulgaria / Hidden Bulgaria Quests

> Defines which AI agent owns which responsibilities to prevent conflicts, duplication, and silent overwrites when multiple agents work on the same project.

Last updated: 2026-05-30

---

## Overview

Five AI tools are authorized to work on this project. Each has a defined domain. **No agent should exceed its domain without explicit approval from the project owner.**

| Agent | Primary Role | Can Touch Code? | Can Propose Refactor? | Can Execute Refactor? |
|-------|-------------|-----------------|----------------------|-----------------------|
| ChatGPT | Product strategy & planning | No | Yes (proposals only) | No |
| Claude | Deep reasoning & audits | No (read-only) | Yes (proposals only) | No |
| Cursor Pro Agent | Implementation | Yes | No | Only when explicitly requested |
| Codex | Isolated code fixes | Yes (scoped) | No | Only scoped, assigned tasks |
| Gemini | Secondary review | No | No | No |

---

## Agent Responsibilities

### ChatGPT

**Owns:**
- Product logic and feature definition
- Architecture planning and WBS (Work Breakdown Structure)
- Story systems and narrative structure
- Prompt design and agent orchestration
- Strategic product decisions (monetization, access model, user journey)
- Content hierarchy planning (domains, routes, checkpoints)
- Partner and business model decisions

**Must not:**
- Write code directly into the repository
- Change file structure without producing a proposal document first
- Rename content IDs, route IDs, or navigation anchors
- Make implementation decisions that affect build configuration

**Output format:**
- Architecture proposals (`.md` documents)
- WBS breakdowns
- Feature specifications
- Content plans
- Prompt templates for other agents

---

### Claude

**Owns:**
- Deep code audits and risk analysis
- Architecture validation against existing code
- Large-scale refactoring plans (proposals only — no execution)
- Cross-file consistency reviews
- Security and accessibility audits
- Documentation authoring (governance, architecture, QA)
- Identifying technical debt and naming conflicts

**Must not:**
- Execute code changes to production files without explicit instruction
- Make unilateral decisions about architecture changes
- Rewrite working components unless the task is explicitly scoped

**Output format:**
- Audit reports
- Risk assessments
- Refactoring proposals with before/after examples
- Governance and architecture documents
- Proposals submitted to `/docs/decisions/DECISION_LOG.md`

---

### Cursor Pro Agent

**Owns:**
- Implementation of approved tasks inside the repository
- UI component coding (`.astro` components, CSS)
- i18n key additions and translation file updates
- Integration tasks (wiring new components into pages)
- Small, safe, scoped refactors — **only when explicitly requested by the project owner**

**Must not:**
- Propose or execute global refactors unsolicited
- Rename core routes, navigation anchors, or content IDs
- Change payment or authentication logic
- Add new npm dependencies without explaining why
- Delete files without backup confirmation
- Silently change design patterns or component structure

**Output format:**
- Code changes with a brief summary of what was changed and why
- List of all files modified
- Confirmation of TypeScript build passing

---

### Codex

**Owns:**
- Focused, isolated code generation for specific assigned tasks
- Debugging specific errors (TypeScript, build, lint)
- Test writing for specific modules
- Build error and type error resolution
- Generating utility functions or isolated helpers

**Must not:**
- Modify navigation, routing, or layout structure
- Touch auth, payment, or entitlement logic
- Make cross-file changes outside the assigned scope
- Add global styles or modify design tokens

**Output format:**
- Targeted code blocks for the specific issue
- Build/test output confirmation
- List of changed files (must be minimal)

---

### Gemini

**Owns:**
- Secondary review of completed work
- UX and copy comparison against competitor products
- SEO audit (meta tags, schema, language tags, canonical)
- Market and competitor perspective
- Language consistency review across all 13 translation files
- Accessibility review (alt text, ARIA, contrast)

**Must not:**
- Write or edit code
- Propose architectural changes
- Execute any change in the repository

**Output format:**
- Review reports
- Prioritized findings list
- Language discrepancy reports
- SEO recommendations submitted as proposals

---

## Decision Authority

| Decision Type | Who Decides |
|--------------|-------------|
| Product features | ChatGPT (proposal) → Project owner (approval) |
| Architecture changes | Claude (proposal) → Project owner (approval) |
| Implementation approach | Cursor Pro Agent (proposal) → Project owner (approval) |
| Naming conventions | Project owner (with Claude input) |
| Refactoring execution | Cursor Pro Agent only, after written approval |
| New dependencies | Any agent can propose, project owner approves |
| Content structure | ChatGPT (proposal) → Project owner (approval) |
| Design language changes | Project owner only |

---

## Conflict Resolution

If two agents produce contradictory outputs on the same issue:

1. Neither agent executes the change
2. Both outputs are documented in `/docs/decisions/DECISION_LOG.md`
3. The project owner makes the final decision
4. The approved approach is noted with a decision record

---

## Agent Communication Protocol

When any agent completes a task, it must produce:

1. **Summary** — what was done in 2–5 sentences
2. **Files changed** — full list of modified files
3. **Risk level** — LOW / MEDIUM / HIGH / CRITICAL (see `/docs/implementation/AI_IMPLEMENTATION_WORKFLOW.md`)
4. **Possible risks** — what could go wrong
5. **Next step** — recommended follow-up action

This ensures the project owner and other agents can pick up context cleanly.
