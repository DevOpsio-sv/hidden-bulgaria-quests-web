# CONSTITUTIONAL REVISION BOARD
# Resolution Register · Migration Guide · Final Critique
### Unlocking Bulgaria Design Bible · v1.0 → v1.1

**Convened 2026-07-26 · Binding on the amendment recorded in DESIGN_BIBLE.md**

---

## THE STANDING ORDER OF THIS BOARD

The Review Board's findings are **advisory**. Every recommendation below had to earn its place against a fixed hierarchy. Where two considerations conflicted, the higher one won, without exception:

```
1. Philosophy
2. Emotional journey
3. Identity
4. Storytelling
5. World model
6. Longevity
7. Maintainability
8. Engineering convenience
```

**Engineering never won against identity.** Four recommendations were rejected outright on that ground, and eleven were accepted only after being redesigned so that they no longer cost anything above line 5.

The test applied to every proposal was not *"is this true?"* — most of the Board's findings are true — but:

> **"Ten years from now, with every original author gone, does this change make it more or less likely that the soul of Unlocking Bulgaria survives?"**

A finding can be correct and still fail that test. Several did.

---

# 1. RESOLUTION REGISTER

**Fifty-six recommendations. Every one classified. None skipped.**

## 1.1 Constitutional Changes (CC)

| ID | Recommendation | Status | Reason |
|---|---|---|---|
| **CC-1** | Three-tier structure — Charter / Standards / Specs | **ACCEPT** | The single change that determines survival. A document with one amendment cost for everything gets routed around, not amended. Philosophy is untouched: not one word changes tier or wording. The 15 Principles become *more* authoritative once they are no longer filed beside "never centre-crop a hero." |
| **CC-2** | Rule metadata — principle, rationale, evidence, enforcement, status, review, supersedes | **ACCEPT** | Without `RATIONALE` a rule becomes superstition within one staff generation, and superstition is either cargo-culted or contemptuously ignored. Both destroy the document. `EVIDENCE` is what lets a rule retire honourably instead of accumulating forever. |
| **CC-3** | One canonical rule register; the agent view is generated from it | **ACCEPT** | Two hand-maintained copies of one law drift inside a year, and then nobody can say which governs. Ch. 8 is canonical; Ch. 16 is a rendered view. No meaning is lost. |
| **CC-4** | Formal definition of the two layers | **ACCEPT** | ~15 rules turned on a distinction the document never defined. It also gives commerce, membership and education a constitutional home *without* contaminating the emotional sequence — which is the mechanism by which the philosophy survives the business, not a concession to it. |
| **CC-5** | Split Memory from Atlas | **ACCEPT WITH MODIFICATION — redesigned** | See §2.1. The *problem* is real and fatal at scale. The *solution* was wrong: "Atlas" is the vocabulary of a catalogue, and a map of everything destroys the mystery that is the product's reason to exist. **Replaced with a three-state map — Walked / Heard of / Dark — which solves navigation while making the world *more* mysterious, not less.** |
| **CC-6** | The Thread stored as a graph, presented as a chain | **ACCEPT WITH MODIFICATION** | Accepted as a *storage* decision, with an added constitutional guarantee the Board did not propose: **the visitor's perception may never become a graph.** One story, one next step, one emotional path — enforced as a Tier-0 clause, not left as an implementation nicety. |

## 1.2 New Books proposed by the Board

| ID | Recommendation | Status | Reason |
|---|---|---|---|
| **4.1** | **Book V — Evolution & Governance** | **ACCEPT** | Without it nothing else in this revision can be maintained. It is the meta-book: tiers, ADRs, deprecation, succession, exceptions, review. |
| **4.2** | **Book VI — Editorial** | **ACCEPT** | The Voice was defined typographically and tonally and never editorially. A design system without a content standard produces beautiful surfaces containing sentences nobody governs — and this product *is* its sentences. |
| **4.3** | **Book VII — Historical Integrity** | **ACCEPT** | The Board's highest-severity finding and the Board is right. A heritage product making claims about a contested national past, with no source standard, no historian, no contested-claims register and no stated line between pride and nationalism, is carrying a risk that could end the project rather than degrade it. |
| **4.4** | **Book VIII — Content Operations** | **ACCEPT** | Includes the economics. A standard with no budget attached is abandoned silently at witness #40, and silent abandonment of standards is the exact failure this whole document exists to prevent. |
| **4.5** | **Book IX — Partnership, Commerce & Membership** | **ACCEPT** | Not a concession. It is the fence. Commerce arrives whether or not the constitution has vocabulary for it; the only question is whether it arrives governed. |
| **4.6** | **Book X — AI Collaboration** | **ACCEPT WITH MODIFICATION** | Accepted and widened. The Board scoped it to AI *implementing*. The real ten-year risk is AI *generating* and AI *deciding*. Four modes are now governed separately, with the boundary drawn at judgement, not at output. |

## 1.3 Rules to Relax (R)

| ID | Recommendation | Status | Reason |
|---|---|---|---|
| **R1** | P4 "No timers. Ever." → no *content* on a timer | **ACCEPT** | The wording was false as written — §11.2 specifies eight durations. An absolute the document itself violates teaches readers that absolutes are decorative. The law is unchanged; the sentence is now true. |
| **R2** | Freeze the component admission criteria, not the inventory | **ACCEPT** | Frozen inventories produce shadow systems. What must be permanent is the *door*, and the deleted register — which is promoted to Tier 0 and is the part that was actually protecting anything. |
| **R3** | GOLD: "exactly one appearance" → reserved for the Master Keys | **ACCEPT** | Corrects an arithmetic contradiction with the product's own canon (four keys). Scarcity is fully preserved; gold remains banned as a system colour, an accent, a border and a hover. |
| **R4** | Permit "asking the Atlas where something is" | **ACCEPT WITH MODIFICATION** | Permitted only as **asking for a name you already know, answered with one place or with silence.** Never a list, never a ranked result, never a partial-match dropdown, never a zero-state suggesting alternatives. See §2.1. |
| **R5** | Rule 18: narrative surfaces vs spatial surfaces | **ACCEPT** | Resolves a genuine contradiction (Domain and Map both present many paths). The Thread's discipline is untouched — it applies to narrative surfaces, which is where it always meant to apply. |
| **R6** | Rule 71: one action *per layer* | **ACCEPT** | The Witness requires both *Stand here* and the Thread. The rule now says what it always meant and is checkable. |
| **R7** | 16 px floor → platform's comfortable reading minimum | **ACCEPT** | Technology-specific absolute. On web the floor is unchanged at 16 px. Survives a watch, a headset, a wall. |
| **R8** | KB budgets → Tier 2, quarterly | **ACCEPT** | Numbers rot. The *principle* stays in Tier 1: the first paintable frame of any page is its photograph. |
| **R9** | P14: scope the completeness contract to a closed subset | **ACCEPT** | The principle is preserved absolutely — a visitor never crosses from complete content into untranslated content. Without scoping, P14 makes market entry monotonically more expensive until a ninth language becomes impossible, which would kill the principle by making it unaffordable. |
| **R10** | Analytics: prohibition → governed permission | **ACCEPT WITH MODIFICATION** | Accepted because a constitution that forbids learning is broken by the first person who needs to learn something, and it is broken *quietly*, which is worse. **Modified to be stricter than the Board proposed:** no third parties at all, no per-person identity, no cross-visit joining, no cross-site anything, aggregate only, and the counters we keep are **published on The Project**. The privacy promise is not weakened — it is made specific and auditable. |
| **R11** | Law 1: medium-independent wording | **ACCEPT** | Technology-specific. "Down is descent" is a fact about a scrolling page, not about the world. The world's law — forward is time and inward is the land — is preserved and now survives the app and whatever follows it. |
| **R12** | Rule 63: "exactly twice" → at most twice per visit | **ACCEPT** | An absolute with an undefined denominator is uninterpretable. The rationing that makes it work is preserved exactly. |
| **R13** | Room Test → three-person panel with a written verdict | **ACCEPT WITH MODIFICATION** | The question is kept verbatim because it is excellent. The panel is added, **and one member must not have worked on the surface.** Rejected the implication that judgement is a weakness: judgement is correct here. *Unaccountable* judgement is not. |
| **R14** | Move engineering policy to CONTRIBUTING.md | **ACCEPT** | Every non-design rule in the constitution dilutes the authority of the design rules. The rules are correct and they belong elsewhere. |
| **R15** | Move the legal-page photography exception out of §1.4 | **ACCEPT** | An exception inside a constitutional prohibition weakens the register. The Charter now states the law absolutely for the Told Layer; the Useful Layer is governed by clarity, in Tier 1, where exceptions belong. |

## 1.4 Rules to Strengthen (S)

| ID | Recommendation | Status | Reason |
|---|---|---|---|
| **S1** | Deleted-component register → Tier 0, numbered, with reasons | **ACCEPT** | The most valuable list in the document. It is the accumulated judgement of the entire audit and redesign, and it is the cheapest protection available. |
| **S2** | No AI-generated imagery → its own Tier-0 article | **ACCEPT** | In five years this will be the most economically pressured rule in the document. It needs to be defensible in a meeting where someone has a spreadsheet, which means it needs a stated rationale, not a clause inside a list. |
| **S3** | Sponsored-content parity | **ACCEPT** | Tier 0. This is the rule that prevents the product being hollowed out by its own revenue model — the most common way heritage media dies. |
| **S4** | The horizon is never sold | **ACCEPT** | Tier 0. A Seal opens when its content is ready. Never when a payment clears, never for a launch date, never for a campaign. |
| **S5** | Historical accuracy as a principle | **ACCEPT** | Implemented as Book VII and referenced from the Charter. |
| **S6** | Name the accessibility conformance level | **ACCEPT** | WCAG 2.2 AA as the floor, with named AAA commitments. P15 is philosophically excellent and operationally unenforceable without a named standard. |
| **S7** | The side-entering visitor | **ACCEPT** | A near-term correctness failure, not a five-year one. At any scale beyond a handful of witnesses, most arrivals are lateral — and under v1.0 those visitors could never receive Guardian Sight, the product's central verb. |
| **S8** | Make Rule 100 satisfiable | **ACCEPT** | A supreme rule that cannot be obeyed delegitimises every rule beneath it. Resolved by the conflict-resolution order and by repairing the ten contradictions. |
| **S9** | A research obligation | **ACCEPT** | Three gates, two of which require knowing what strangers do, and zero studies. Added to Book V: **no Gate passes on internal opinion alone.** |
| **S10** | Promote the Descent gate | **ACCEPT** | The document's own self-check against its most seductive idea, written by an author suspicious of their best work. That instinct is precisely what a constitution is for. |

## 1.5 Governance (7.x)

| ID | Recommendation | Status | Reason |
|---|---|---|---|
| **7.1** | Tiered authority model with succession | **ACCEPT** | A single amending authority with no succession freezes the document permanently the day that person is unavailable — and the team does not stop shipping, it stops consulting. |
| **7.2** | Exception protocol | **ACCEPT** | A constitution with no legal way to deviate guarantees illegal deviation. Exceptions expire by default; one renewed twice becomes an amendment proposal, because a rule that keeps needing exceptions is a wrong rule. |
| **7.3** | Annual constitutional review | **ACCEPT** | Extended: the review must also run the **Drift Dashboard** (Book XII), so the document examines the product and not only itself. |
| **7.4** | Machine-readable enforceable subset | **ACCEPT** | Delivered as `design-rules.json`. A rule that fails a build teaches faster than a rule that fails a review. |
| **7.5** | Agent-specific governance + root `AGENTS.md` | **ACCEPT** | Agents reliably read short root-level files and do not reliably read a 30,000-word Bible. Delivered. |

## 1.6 Future-proofing (8.x)

| ID | Recommendation | Status | Reason |
|---|---|---|---|
| **8.1** | Medium independence — a Standards volume per medium | **ACCEPT** | Without it, the first serious app or exhibition work forks the philosophy, and a forked philosophy is a dead one. |
| **8.2** | Scarcity defined per visit, not per surface | **ACCEPT** | Correct and important. Rationing within a page does not ration across a product; at 1,000 witnesses the rarest things become the most common. |
| **8.3** | State the economics of the standards | **ACCEPT** | Into Book VIII. Better to state the number and have the argument than to abandon the standard silently. |
| **8.4** | Localisation is not translation | **ACCEPT** | Into Book VI. The narrative is not culturally neutral, and pretending otherwise is both an editorial failure and a diplomatic one. |
| **8.5** | Define the verb, not the gesture | **ACCEPT** | *Look through* is the constitutional act. Press-and-hold is a 2020s touch idiom and will not survive the decade. |
| **8.6** | Restate Law 7 as a design commitment | **ACCEPT WITH MODIFICATION** | Accepted, but resolved by the three-state map rather than by rewording. Under Walked / Heard of / Dark, **the Dark is permanently and truthfully larger than everything else** — no manufacturing required. |

## 1.7 Business evolution (B)

| ID | Recommendation | Status | Reason |
|---|---|---|---|
| **B1** | Commerce lives in the Useful Layer | **ACCEPT** | One sentence resolves the entire conflict without touching philosophy. |
| **B2** | The web tells; the app does. Payment never gates a story | **ACCEPT** | Tier 0. A visitor may always read what a place saw. |
| **B3** | Sponsored parity | **ACCEPT** | See S3. |
| **B4** | The horizon is never sold | **ACCEPT** | See S4. |
| **B5** | Co-branding standard | **ACCEPT** | A partner's credibility is borrowed by the project and never lent to a frame. |
| **B6** | Contribution, not commentary | **ACCEPT WITH MODIFICATION** | Accepted as the only form of community this world's physics can support. **Modified: a contribution is never displayed as attributed user content anywhere.** It enters the record, edited, in the project's voice, or it does not enter. The moment a visitor's words appear beside ours in their own voice, the world has two narrators and Law 8 is dead. |

## 1.8 The Board's own critiques and closing actions

| ID | Recommendation | Status | Reason |
|---|---|---|---|
| **X-1** | Demote Photography Laws 2 & 3 to "strong defaults" because they are the NatGeo house style | **REJECT** | See §2.2. The photography philosophy is constitutional and is not amendable by this Board. The Board's reasoning also fails on its own terms: distinctiveness is produced by the *combination* of three laws, not by each being individually unprecedented. Relaxing two of the three would produce a library that is 33 % distinctive and 67 % generic. |
| **X-2** | "Apple would delete roughly 170 of the 190 nevers" | **REJECT AS STATED · ACCEPT IN PART** | Absolutes that defend the world's physics are the point of this document and are kept in full. Reduced only where an absolute was: an implementation detail, a temporary engineering workaround, an obsolete bug fix, or technology-specific. **Net reduction: 31 absolutes relaxed, 7 added.** Apple's restraint is a virtue for a company documenting a platform for third parties. This document governs one world, and a world with negotiable physics is not a world. |
| **X-3** | "Split the document in two on day one" | **REJECT AS STATED · ACHIEVED OTHERWISE** | Splitting into separate files fragments the voice, and the voice is load-bearing here in a way it is not at Apple. **Tiering achieves the same governance outcome inside one document.** Anyone who needs only the Charter can read three pages; anyone who needs the Specs can read Book IV. |
| **X-4** | "Demand component anatomy, states, variants, accessibility contract" | **ACCEPT** | Folded into the admission criteria (R2). Philosophy without anatomy is an essay about a design system. |
| **X-5** | "Fix the entry model before anything else" | **ACCEPT** | See S7. Reclassified as a P0 correctness defect and added to the roadmap ahead of everything in Stage Three. |
| **X-6** | "Give it an owner who is not one person" | **ACCEPT** | Two stewards, named, with a 90-day succession clause. |
| **X-7** | Resolve the ten contradictions before ratification | **ACCEPT** | All ten resolved. Recorded individually in the Amendment Log. |
| **X-8** | Composite maturity target: reach Level 3 | **ACCEPT** | v1.1 reaches Level 3 (governed: versioning, deprecation, contribution model, component admission). Level 4 requires research and tooling and is scheduled, not claimed. |

## 1.9 Mandates from the project owner, beyond the Board

| ID | Mandate | Status | Reason |
|---|---|---|---|
| **M-1** | New principle: **The Forbidden Future** | **ACCEPT** | Added as **P16**. Requires amending "Fifteen. No more will ever be added," which is done openly rather than quietly — see §2.3. This is the principle most likely to save the product in year seven, because feature creep never arrives as a bad idea; it arrives as a reasonable one. |
| **M-2** | **Book XI — Canon** | **ACCEPT** | Prevents world drift. The mythology is currently held in six documents and several people's heads, which is how a world becomes inconsistent without anyone deciding to make it so. |
| **M-3** | **Book XII — Design Drift** | **ACCEPT** | The most original governance instrument in this revision. Drift is the actual ten-year threat, and it is invisible per-decision and obvious in aggregate. Made **countable**, with ceilings. |
| **M-4** | Drift must be detectable before users notice | **ACCEPT** | Implemented as the Drift Dashboard: twelve counted indicators, each with a ceiling, measured quarterly and reviewed annually. |
| **M-5** | Atlas must preserve mystery; the visitor should still feel lost | **ACCEPT — and it drove the CC-5 redesign** | The strongest single instruction received. It rejected a solution that was structurally correct and philosophically wrong, and forced a better one. See §2.1. |

---

# 2. THE CONTESTED RESOLUTIONS, IN FULL

Three decisions carry enough weight to require their reasoning in the open.

## 2.1 CC-5 · Why the Atlas was rejected and what replaced it

**The Board's problem statement is correct and fatal.** At scale, a map that lights only what you have visited cannot show you anything you have not visited, and every other discovery surface is banned. A visitor arriving from search on one witness has no route to any other except a linear Thread walked in order. This inverts at roughly 100–200 witnesses and it is invisible today.

**The Board's solution was wrong, and wrong in a way that would have cost the product its reason to exist.** An "Atlas" — the world's complete knowledge of itself, named and located and enterable — is a catalogue with a beautiful name. Once a visitor can see everything that exists, the horizon closes, and the horizon is the product (P10, token HORIZON, Law 7). The word itself is the tell: an atlas is a book of everything.

**What replaced it: the map has three states, not two.**

| State | Meaning | How a place gets here |
|---|---|---|
| **WALKED** | You have been. Lit. | Completing a witness. |
| **HEARD OF** | The world has told you it exists. Named, faint, enterable — and visibly not yet walked. | A witness's testimony names it · the Thread points at it · a Seal opens · you asked for it by name and the world answered. |
| **DARK** | You do not know it is there. | Everything else. Always the majority. |

**Why this is better than a two-state map, on every axis that matters:**

- **It preserves mystery absolutely.** You cannot see what you have no reason to know about. The world is always larger than your knowledge of it, and now that is *structurally* true rather than a promise we have to keep manufacturing.
- **It is more in-world, not less.** This is how travellers actually knew a country for two thousand years: places you had been, places you had heard of, and the rest. It is also how every great open world is navigated. It required no invention — only refusing the librarian's answer.
- **It solves the side-entering visitor completely.** Arrive on Belogradchik from search, and you have heard of whatever Belogradchik's testimony names. You are not lost in a void and you are not handed an index. **You are given exactly what a traveller is given: rumour.**
- **It makes the Thread stronger, not weaker.** Hearsay is *earned by reading*. The more testimony you take in, the more of the country you know exists. Reading becomes cartography.
- **It preserves Law 7 without artifice.** The Dark is permanently larger than Walked plus Heard-of, by construction, forever.

**Asking for a place by name is permitted, and is bounded by four hard rules:**
1. It answers with **one place, or with silence.** Never a list.
2. It answers only for a name the visitor already knows from outside the product. **The world never suggests what to ask.**
3. **No partial matching, no autocomplete, no did-you-mean, no ranked results, no zero-state offering alternatives.**
4. A place found this way becomes **Heard of** — not Walked. You know it is there. You have not been.

This is not search. It is asking a guide a question, and being answered plainly or not at all. **Rules 17 and 18 survive verbatim: no index, no archive, no tag page, no browse-all, no catalogue, no map of everything.**

## 2.2 X-1 · Why the photography laws were not relaxed

The Board observed that Photography Laws 2 (two light windows) and 3 (a small unposed human) are the National Geographic house style, practised for sixty years, and recommended demoting them to strong defaults so that only Law 1 — the Threshold Rule — carries the identity.

**Rejected on two grounds.**

**Constitutionally:** the photography philosophy is on the owner's protected list. It is not amendable by a review board, and a board that amends a protected clause because it found a clever argument has demonstrated exactly why the protection exists.

**On the merits, which matter more:** the Board's own reasoning defeats it. Distinctiveness is not produced by each law being unprecedented. It is produced by **three laws holding simultaneously, without exception, across an entire library.** NatGeo shoots at dawn and puts a person in frame — and also shoots at noon, in cities, in studios, in daylight, posed, with flash, across a hundred subjects. What no other body of work does is apply *all three* laws to *every frame* of *one country*. Relax two of the three and the result is a library that is one-third distinctive and two-thirds competent, which is a worse outcome than either extreme.

**The Board's underlying anxiety is legitimate and is addressed differently.** The risk it identified — that the library becomes beautiful and generically excellent — is real. It is mitigated in Book XII as a named drift indicator (*Frame Signature Drift*), measured by the thumbnail test at every quarterly review, rather than by loosening the laws that produce the signature in the first place.

## 2.3 M-1 · Amending "Fifteen. No more will ever be added."

Chapter 2 stated that fifteen principles was final. Adding P16 contradicts that sentence, and the contradiction is resolved in the open rather than quietly, because how a constitution handles its own first amendment sets the precedent for every amendment after it.

**The clause is amended to: "Sixteen. Adding a seventeenth requires a Tier-0 amendment and has never yet been justified."**

The original intent — that principles must not accumulate — is preserved and is now *enforceable*, because it names the cost instead of claiming an impossibility. A rule that says "never" about its own future is a rule that will be broken silently the first time it needs to be broken. This one was broken loudly, once, and the record shows why.

**P16 earned its place** because it is the only principle in the document that constrains the *future* rather than the present. Every other principle governs what we build. P16 governs what we will be asked to build — and feature creep never arrives as a bad idea. It arrives as a reasonable one, from someone who means well, with a business case.

---

# 3. MIGRATION GUIDE · v1.0 → v1.1

**Nothing was rewritten. Everything below is either a surgical edit to existing text, or new material appended.** No philosophy, emotional sequence, identity, storytelling, world physics, photography philosophy, memory philosophy or scarcity of meaning was changed.

## 3.1 Structural changes

| # | Change | Location | Kind |
|---|---|---|---|
| 1 | Three-tier model, succession, conflict order, exception protocol, annual review, rule-metadata schema | *Status of this document* | **added** |
| 2 | Tier labels on every chapter | Table of Contents | **added** |
| 3 | **P16 · The Forbidden Future** | Ch. 2 | **added** |
| 4 | "Fifteen. No more will ever be added." → "Sixteen…" | Ch. 2 header | edited |
| 5 | **§3.0 · The Told Layer and the Useful Layer** | Ch. 3 | **added** |
| 6 | The map has three states — Walked / Heard of / Dark | §3.12, §10.3 | edited |
| 7 | The Thread: presented as a chain, stored as a graph, with a Tier-0 perception guarantee | §5.3 | edited |
| 8 | The side-entering visitor; Sight givable at any entry | §6.10 | **added** |
| 9 | Component admission criteria replace the frozen inventory | Ch. 9 | edited |
| 10 | The Deleted Register promoted to Tier 0 | Ch. 9 | edited |
| 11 | Ch. 8 declared the canonical register; Ch. 16 a generated view | Ch. 8, Ch. 16 | edited |
| 12 | **Books V–XII** — Evolution, Editorial, Historical Integrity, Content Operations, Partnership & Commerce, AI Collaboration, Canon, Design Drift | Ch. 18–25 | **added** |
| 13 | Amendment Log | AMENDMENTS | **added** |

## 3.2 Rule changes

| Rule | v1.0 | v1.1 |
|---|---|---|
| **P4** | "No timers. Ever." | "No content is ever revealed on a timer. Duration governs transitions; it never governs disclosure." |
| **Law 1** | "Down is descent… no horizontal narrative." | "Forward is time and inward is the land. On the web this is downward." |
| **GOLD** | "exactly one appearance in the entire product" | "reserved for the Master Keys and nothing else, ever" |
| **17** | bans index, archive, **search**, tag page, browse-all | bans index, archive, tag page, browse-all; **asking for a known name is permitted, answered with one place or silence** |
| **18** | "never more than one forward path from any surface" | "every **narrative** surface offers exactly one argued next step; **spatial** surfaces present the world as it is" |
| **63** | "exactly twice in the whole product" | "at most twice in any single visit" |
| **71** | "if two actions are offered, one is wrong" | "at most one action **per layer**; never two of the same kind" |
| **88** | "16 px equivalent, anywhere, for any reason" | "never below the platform's comfortable reading minimum; on web, 16 px" |
| **95** | budgets stated as constitutional | budgets moved to Tier 2, reviewed quarterly; the principle stays in Tier 1 |
| **99** | "never ship analytics" | "never ship anything requiring consent, identifying a person, joining visits, or involving a third party; aggregate counts are permitted **and published**" |
| **P14** | "100 % complete or we do not offer it" | unchanged in force; **scoped** — a language may launch on a closed subset from which no link escapes |
| **new** | — | **101–107**: sponsored parity · the horizon is never sold · payment never gates a story · no AI-generated imagery · historical sourcing · WCAG 2.2 AA floor · contribution never displayed as attributed user content |

## 3.3 What moved out of the Bible

- Engineering policy (npm dependencies, CI, commit hygiene, refactor scope) → `CONTRIBUTING.md`
- The mechanically enforceable subset → `design-rules.json`
- The agent digest → `AGENTS.md`

## 3.4 What did not change, and is not amendable by any board

The emotional sequence · the Threshold Rule · the alphabet philosophy · the photography philosophy · the memory philosophy · the concept of discovery · the world physics · the scarcity of meaning · the reverence toward the land · all fifteen original Principles · the Deleted Register.

---

# 4. WOULD APPLE APPROVE THIS NOW?

*Asked again, of v1.1, with the same hostility as the first time. This Board's own work is the subject.*

## What is fixed

**They would now approve the governance.** The tiering, the succession, the exception protocol, the deprecation lifecycle and the ADR requirement are what Apple's guidelines actually run on, and v1.0 had none of them. The single-point-of-failure objection is answered. The "split it in two" objection is answered differently but adequately — the *governance* separation is what they wanted, not the file count.

**They would approve the contradiction repair.** Ten pairs resolved, each recorded with the alternative that lost.

**They would be impressed by two things they do not themselves have.** Book XII — Design Drift, with counted indicators and ceilings, is a genuinely novel instrument; Apple polices drift through taste and seniority, which does not survive staff turnover. And **P16 · The Forbidden Future** is something almost no design organisation writes down: an explicit register of what the product will never become. Apple has this culturally and has never had to codify it, because Apple has never lost the people who held it.

**They would approve the Hearsay redesign** and would probably note, correctly, that it is better than what their own reviewer proposed.

## What they would still send back

**1. The component specifications are still promises, not specifications.**
v1.1 fixed the *governance* of components — the door is frozen, the criteria are named, the deleted register is Tier 0. It did not deliver a single component's **anatomy, states, variants, content guidance, platform behaviour or accessibility contract.** Apple's HIG gives one control more specification than this entire document gives its fourteen. This is the largest remaining gap and it is *work*, not thinking. **Until it exists, this is a design philosophy with a governance layer, not a design system.**

**2. The palette still has no values.**
Seven poetically named colours, zero traceable values, and a rule that says *never invent a colour*. That rule remains unsatisfiable by a human or an agent until Tier 2 carries the numbers. It is blocked on photography — which is honest, and is still a hole.

**3. There is still no research practice, only a research obligation.**
v1.1 requires that no Gate passes on internal opinion alone. It does not say what a study is, how many people, recruited how, judged against what. **An obligation without a method is a wish**, and Apple would recognise it as one immediately. The most novel interaction in the product — *look through* — remains entirely unvalidated with a real human being.

**4. It is now very long, and length is a failure mode.**
Twenty-five chapters and twelve books. The Board argued in v1.0's review that constitutions survive by being small; v1.1 answered that by tiering rather than by cutting, which is defensible — and it has still roughly doubled. **The Charter is three pages and almost nobody will read only the Charter.** Apple would ask for a one-page card: sixteen principles, the layer definition, the deleted register, the twelve real absolutes. Not a summary — a *supersedes-nothing* card that a new photographer or a municipality's designer can hold. That does not exist yet.

**5. The drift ceilings are guesses.**
Book XII counts twelve indicators and sets a ceiling on each. Those ceilings were set by judgement, not by evidence, because there is no evidence yet. They will be wrong. The instrument is sound; the calibration is invented, and v1.1 should say so more plainly than it does.

**6. Book VII cannot be finished by designers.**
Historical Integrity is the highest-severity finding and v1.1 gives it a structure, a source standard, a contested-claims register and a nationalism boundary. **Every one of those needs a historian's signature to become real**, and no historian has been engaged. The Book is currently a well-designed empty vessel, and an empty vessel on the highest-risk topic in the project is not the same as a solved problem.

## The honest score

| | v1.0 | v1.1 |
|---|---|---|
| Vision | 10 | 10 |
| Creative Direction | 9 | 9 |
| World Building | 8 | **9** |
| Engineering Governance | 6 | **8** |
| Design System | 5 | **6** |
| AI-readability | 5 | **8** |
| Maintainability | 4 | **8** |
| Longevity | 4 | **8** |
| Future-proofing | 3 | **8** |
| Business Flexibility | 3 | **8** |
| **Composite as a constitution** | **5.7** | **8.2** |

**Maturity: Level 2 → Level 3 (governed).** Level 4 requires research and tooling and is scheduled, not claimed. Level 5 — self-sustaining, evolving without its authors — is precisely what this document is trying to become and cannot be declared, only survived into.

## Verdict

**Yes, with two conditions.**

Apple would approve v1.1 as the governing document **conditional on** (a) component specifications following within one quarter, and (b) a named historian engaged before any witness beyond Prohodna is published.

They would say the hard part is done and was always done — the vision was best-in-class in v1.0 and is untouched in v1.1 — and that what remains is craft and process, which any competent organisation can supply and no amount of which produces a vision.

**And the one thing this Board will say about its own work, without flinching:** v1.1 is a better *constitution* and it is not yet a better *product*. Not one line of it has moved a photograph, a sentence, or a visitor. Governance is the scaffolding that lets the work survive; it is not the work. **The next document produced by this project should not be a document.**

---

**CONSTITUTIONAL REVISION BOARD · 2026-07-26**
*Resolutions binding. Every rejection is refusable by the project owner with reasoning recorded in AMENDMENTS.*
