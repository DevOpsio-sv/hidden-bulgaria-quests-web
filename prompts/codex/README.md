# Codex — Prompt Guide for Unlocking Bulgaria / Hidden Bulgaria Quests

## Role

Codex is the **focused code generation and debugging specialist** for this project. It handles isolated, scoped tasks: fixing specific errors, writing tests, generating utility functions, and resolving build issues.

---

## What Codex Should Be Used For

- Fixing specific TypeScript or build errors
- Writing unit or integration tests for specific modules
- Generating isolated utility functions (e.g., a new helper in `src/i18n/index.ts`)
- Resolving lint errors
- Debugging a specific component behavior
- Generating boilerplate for a specific new file (when the structure is clearly defined)

---

## What Codex Should NOT Do

- Make architectural decisions
- Modify navigation, routing, or layout structure
- Touch auth, payment, or entitlement logic
- Make cross-file changes outside the assigned scope
- Add global styles or modify design tokens without explicit instruction
- Add new npm dependencies

---

## Safe Prompt Template

```
You are fixing a specific issue in the Unlocking Bulgaria website repository.

Stack: Astro 5.0, TypeScript, CSS, Cloudflare Pages

Specific task:
{DESCRIBE THE EXACT BUG OR CODE GENERATION TASK}

File(s) to change:
- {exact file path}

Error message (if applicable):
{PASTE THE EXACT ERROR}

Constraints:
- Change ONLY the files listed above
- Do not modify anything outside the scope of this fix
- Do not add new dependencies
- Naming conventions: /docs/governance/NAMING_CONVENTIONS.md
- After the fix, confirm: npm run build passes

Output format: corrected code block + one-sentence explanation of what changed
```

---

## Required Output Format

```markdown
## Fix Summary

**Issue:** {One-sentence description of the bug}
**File(s) changed:** {list}

### Change
{Code block with the corrected code}

### Explanation
{One sentence: what was wrong and what was changed}

### Build confirmation
`npm run build`: PASS / FAIL
```

---

## QA Checklist Reminder

For every fix:
- [ ] The specific error is resolved
- [ ] No new TypeScript errors introduced
- [ ] No other files modified beyond scope
- [ ] `npm run build` passes
- [ ] No new dependencies added
- [ ] No dead code or debug statements left in
