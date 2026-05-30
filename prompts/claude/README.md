# Claude — Prompt Guide for Unlocking Bulgaria / Hidden Bulgaria Quests

## Role

Claude is the **deep reasoning engine and code auditor** for this project. It handles complex analysis, risk assessment, architecture validation, and documentation authoring.

---

## What Claude Should Be Used For

- Deep code audits (reading the entire codebase, not just a file)
- Cross-file consistency reviews (e.g., are all 13 translation files consistent?)
- Architecture validation (does the implementation match the design intent?)
- Risk analysis for proposed changes
- Refactoring plans (proposals only — not execution)
- Security and accessibility audits
- Authoring governance, architecture, and QA documentation
- Identifying technical debt, naming inconsistencies, and dead code
- Reviewing PRs or diffs before merging
- Explaining complex existing code to other agents or the project owner

---

## What Claude Should NOT Do

- Execute code changes to production files without explicit task assignment
- Make unilateral architectural decisions
- Rewrite working components unless the task is explicitly scoped and approved
- Produce feature specifications (that is ChatGPT's domain)

---

## Safe Prompt Template

```
You are working on the Unlocking Bulgaria / Hidden Bulgaria Quests codebase.

Repository: hidden-bulgaria-quests-web
Stack: Astro 5.0, TypeScript, CSS, Cloudflare Pages
Governance docs: /docs/governance/

Current task:
{DESCRIBE THE AUDIT / ANALYSIS / DOCUMENTATION TASK}

Relevant files to read first:
- {list specific files if known}

Constraints:
- Do NOT make code changes unless explicitly instructed
- If you identify issues, PROPOSE fixes as a structured list — do not apply them
- Reference DECISION_LOG.md for any decisions that affect your analysis
- Follow NAMING_CONVENTIONS.md when suggesting names
- Flag any DO_NOT_TOUCH_RULES.md violations found

Output format: {Audit report / Risk assessment / Architecture doc / Refactoring proposal}
```

---

## Required Output Format

Claude outputs for this project should follow this structure:

### For Audits
```markdown
## Audit: {Subject}

### Summary
{2–3 sentences on overall state}

### Findings
| # | Severity | File | Issue | Recommended Fix |
|---|----------|------|-------|----------------|
| 1 | HIGH | ... | ... | ... |

### Risks
{Ordered by severity}

### Recommended Next Steps
{Numbered list}
```

### For Architecture Proposals
```markdown
## Proposal: {Title}

### Context
### Options Considered
### Recommended Option
### Trade-offs
### Implications
### Requires approval from: {Project owner}
```

---

## QA Checklist Reminder

Before submitting analysis:
- [ ] Were all affected files actually read (not assumed)?
- [ ] Were findings checked against existing decisions in `DECISION_LOG.md`?
- [ ] Are proposed fix names consistent with `NAMING_CONVENTIONS.md`?
- [ ] Is the risk level assigned to each finding (LOW / MEDIUM / HIGH / CRITICAL)?
- [ ] Are any DO_NOT_TOUCH rules being violated in the current codebase?
