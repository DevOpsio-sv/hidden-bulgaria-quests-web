# Decision Log — Unlocking Bulgaria / Hidden Bulgaria Quests

> A permanent record of key product, architecture, and design decisions.
> New decisions are appended at the bottom. Decisions are never deleted — only superseded.

---

## How to Add a Decision

```markdown
---

### DEC-NNN — {Short title}
**Date:** YYYY-MM-DD  
**Status:** DECIDED / PROPOSED / SUPERSEDED  
**Decided by:** {Project owner / Agent name + "proposed, project owner approved"}  
**Supersedes:** DEC-XXX (if applicable)

**Decision:**
{One clear sentence stating what was decided.}

**Context:**
{Why this decision was needed. What was the problem or question?}

**Rationale:**
{Why this option was chosen over alternatives.}

**Implications:**
{What this means for agents, development, content, or users.}
```

---

### DEC-001 — Public brand name
**Date:** 2026-05-30  
**Status:** DECIDED  
**Decided by:** Project owner

**Decision:**
The public-facing brand name is **Unlocking Bulgaria**.

**Context:**
The app needed a consumer brand name that communicates the core value proposition to international audiences.

**Rationale:**
"Unlocking Bulgaria" communicates discovery, access, and journey. It works across 13 target languages without significant localization issues.

**Implications:**
- All marketing materials, the website domain, and app store listings use "Unlocking Bulgaria"
- The domain is `unlockingbulgaria.com`
- Social handles and press references use this name

---

### DEC-002 — Internal / project name
**Date:** 2026-05-30  
**Status:** DECIDED  
**Decided by:** Project owner

**Decision:**
The internal project and repository name is **Hidden Bulgaria Quests**.

**Context:**
The development team needed an internal name that is distinct from the public brand and reflects the product's quest/discovery mechanic.

**Rationale:**
Allows the public brand to evolve without renaming internal systems. "Hidden Bulgaria Quests" emphasizes the hidden/discovery angle that motivates the product concept.

**Implications:**
- Repository name: `hidden-bulgaria-quests-web`
- Internal documents, governance files, and team communications use this name
- Do not use this name in public-facing copy

---

### DEC-003 — Player role title
**Date:** 2026-05-30  
**Status:** DECIDED  
**Decided by:** Project owner

**Decision:**
The player role earned upon completing all six domains is **Keeper** (English) / **Пазител** (Bulgarian).

**Context:**
The app needed a meaningful title that players earn at the end of the full journey. It needed to work in both Bulgarian and English and convey guardianship of cultural memory.

**Rationale:**
"Keeper" connotes preservation, guardianship, and responsibility. "Пазител" carries the same meaning in Bulgarian with strong cultural resonance. The dual-language title is intentional and appears in-app.

**Implications:**
- The word "Keeper" and "Пазител" appear across all 13 language translations
- Content creators must use these exact terms — no synonyms without a new decision
- The final achievement state is called "Keeper" in all product copy

---

### DEC-004 — AR concept name
**Date:** 2026-05-30  
**Status:** DECIDED  
**Decided by:** Project owner

**Decision:**
The augmented reality camera mode is named **Guardian Sight** (English) / **Погледът на Пазителя** (Bulgarian).

**Context:**
The AR feature needed a product name that connects to the Keeper/Пазител concept and communicates what it does — seeing what others cannot.

**Rationale:**
"Guardian Sight" links to the Keeper identity. "Погледът на Пазителя" is the Bulgarian form (literally: "The Gaze of the Keeper"). The name reinforces that AR is an extension of the keeper role, not a standalone feature.

**Implications:**
- The website section is `GuardianSightSection.astro` with anchor `#guardian-sight`
- All copy refers to the AR mode as "Guardian Sight" — never "AR mode" or "camera feature"
- The accessibility principle (always optional, always has non-AR alternative) is part of the product definition of Guardian Sight

---

### DEC-005 — Launch payment model
**Date:** 2026-05-30  
**Status:** DECIDED  
**Decided by:** Project owner

**Decision:**
At launch, the app uses **one-time in-app purchases** at checkpoint, route, and domain levels.

**Context:**
The monetization model needed to be defined before development begins to avoid entitlement architecture rework.

**Rationale:**
One-time purchases are simpler to implement, easier to communicate to users ("pay once, keep forever"), and align with the premium cultural experience positioning. Subscription adds complexity without clear launch benefit.

**Implications:**
- Three purchase tiers: checkpoint preview, full route, domain bundle
- No subscription at launch
- Subscription architecture must be designed to be addable later without breaking existing purchases
- No free trial or trial-to-paid flow at launch

---

### DEC-006 — Subscription strategy
**Date:** 2026-05-30  
**Status:** DECIDED  
**Decided by:** Project owner

**Decision:**
Subscription is **future-ready but not active at launch**.

**Context:**
Subscription models require entitlement complexity, renewal logic, and churn management. These are not priorities for the initial launch.

**Rationale:**
Launching without subscription reduces initial engineering scope while ensuring the architecture can support it later. One-time purchases generate immediate revenue without the subscriber relationship burden.

**Implications:**
- No subscription UI at launch
- Entitlement system must be designed to accommodate future subscription tiers
- Do not build subscription-specific logic that would need to be undone

---

### DEC-007 — Guest access scope
**Date:** 2026-05-30  
**Status:** DECIDED  
**Decided by:** Project owner

**Decision:**
Guest access (no account required) covers: intro experience, map preview, region previews, and AR demo only.

**Context:**
The app needed a clear boundary between what guests can see versus what requires an account or purchase.

**Rationale:**
Guest access creates a funnel for conversion without giving away the core product. The AR demo specifically is included to demonstrate the technology without enabling full quest completion.

**Implications:**
- Route completion, relic collection, domain progress, and cross-device sync require an account
- Login is required before any purchase
- Guest mode content is stable and must not change without a new decision

---

### DEC-008 — Login required before purchase
**Date:** 2026-05-30  
**Status:** DECIDED  
**Decided by:** Project owner

**Decision:**
Users must be logged in before completing any in-app purchase.

**Context:**
Purchases need to be tied to an account for receipt delivery, entitlement restoration, and cross-device sync.

**Rationale:**
Purchaseless accounts are a consumer expectation. Anonymous purchases create support problems and prevent entitlement restoration.

**Implications:**
- Purchase flow always triggers login gate if user is not authenticated
- Guest users are shown login prompt when attempting to purchase
- All purchase receipts are tied to user account ID

---

### DEC-009 — Content must be structured, not hardcoded
**Date:** 2026-05-30  
**Status:** DECIDED  
**Decided by:** Project owner

**Decision:**
All domain, route, checkpoint, and story content must be stored in a structured content system — never hardcoded into components.

**Context:**
Early prototypes risk having content embedded directly in JSX/Astro templates, which prevents localization, CMS integration, and content updates without code deploys.

**Rationale:**
Structured content enables: multilingual support, CMS editing, content versioning, and dynamic loading. Hardcoded content creates a maintenance debt that compounds quickly.

**Implications:**
- Website: all copy comes from `src/i18n/*.json` (no exceptions)
- Mobile app: all checkpoint/route/domain data will come from a structured content source (CMS or JSON data layer)
- No agent may hardcode Bulgarian or English strings into component templates

---

### DEC-010 — Subtitles required for spoken content
**Date:** 2026-05-30  
**Status:** DECIDED  
**Decided by:** Project owner

**Decision:**
All narrated, spoken, or audio storytelling content must include subtitles.

**Context:**
The app serves international audiences across 13 languages. Many users will not speak Bulgarian. Deaf and hard-of-hearing users must be supported.

**Rationale:**
Subtitles serve accessibility, language learning, and international usability simultaneously. They are not optional.

**Implications:**
- Every audio narration asset requires a corresponding subtitle file
- Subtitle timing must be accurate — auto-generated subtitles require human review
- Subtitle files must be translated as part of the localization pipeline

---

### DEC-011 — Accessibility required for AR / video / story scenes
**Date:** 2026-05-30  
**Status:** DECIDED  
**Decided by:** Project owner

**Decision:**
All AR moments, cinematic video scenes, and interactive story content must have fully accessible non-AR / non-video alternatives.

**Context:**
AR requires a capable device and physical environment. Video requires audio. Both create barriers for some users.

**Rationale:**
The product mission is to make Bulgarian cultural heritage accessible to everyone. Accessibility is not a feature — it is a product requirement.

**Implications:**
- Every AR trigger has a readable alternative (text + image)
- Every video sequence has captions and a text summary alternative
- Interactive story scenes have keyboard/switch-accessible navigation
- Guardian Sight's product definition explicitly includes "always optional, always has a non-AR path"

---

### DEC-012 — Astro as the website framework
**Date:** 2026-05-30  
**Status:** DECIDED  
**Decided by:** Project owner

**Decision:**
The marketing website uses **Astro 5.0** with static output, deployed on Cloudflare Pages.

**Context:**
The marketing site needs fast load times, good SEO, multilingual support, and low operational complexity.

**Rationale:**
Astro generates fully static HTML with zero JavaScript by default. Cloudflare Pages provides a global CDN with minimal configuration. Together they deliver excellent performance without server costs.

**Implications:**
- No React or Vue component libraries on the website
- All interactivity is either Astro islands (if needed) or Vanilla JS
- Any future dynamic features (forms, preview gates) use Cloudflare Workers/Functions — not a full backend server

---

*Add new decisions below this line.*
