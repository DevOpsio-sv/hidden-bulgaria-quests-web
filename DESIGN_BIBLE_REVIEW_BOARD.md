# DESIGN REVIEW BOARD
# Constitutional Review of UNLOCKING BULGARIA DESIGN BIBLE v1.0

**Convened 2026-07-26 · Independent review · Not an implementation document**
**Mandate:** determine whether this document can serve as the governing instrument of Unlocking Bulgaria for 5+ years, across dozens of engineers, multiple designers, hundreds of places, and AI-generated implementation — without losing its identity.

**Scope limit accepted by the Board:** philosophy, emotional journey, identity, storytelling, visual language and product vision are **out of scope and are not challenged**. Every finding below concerns governance, architecture and longevity only.

---

# 1. EXECUTIVE SUMMARY

## The verdict in one paragraph

**As a vision document, this is the strongest thing this Board has reviewed in the tourism category — better on creative direction than Apple HIG, Material, Polaris or Carbon, none of which contain a Photography Bible or a world model.** As a *constitution*, it fails. Not because it is wrong, but because it is **structurally undifferentiated**: a 15-principle philosophy, a 200-item prohibition list, a frozen component inventory, a set of 2026 bug-fixes, and a 40-week project plan are all given identical constitutional weight and identical amendment cost. That is not a constitution. That is a manifesto with a backlog stapled to it. Constitutions survive by being *small and hard to change*, sitting above a large body of law that is *easy to change*. This document has no such separation, and within eighteen months it will be routed around rather than amended — which is how constitutions actually die.

## The three findings that matter

**Finding A — The document cannot survive its own success.**
The Bible bans indexes, search, archives, filters and "browse all" (Rules 17, 18; P11), and designates the Memory Map as the sole navigation. But the Memory Map is defined as a *record of where the visitor has been* (P13, §10.3) — it lights only what you have visited. At MVP scale (1 place) these two facts coincide. **At 200 places they are in direct opposition: the only navigation surface is structurally incapable of showing the visitor anything they have not already seen.** A visitor who arrives from Google on the Belogradchik witness has no route to Rila other than a linear Thread they must walk in order. The document has conflated **Memory** (progress) with **Atlas** (what exists). This is the single largest architectural defect and it is invisible today.

**Finding B — The document has banned the business.**
The roadmap explicitly excludes user accounts, booking, commerce, community, events, a partner portal and reviews. The product's own published FAQ states *"Full routes and Domain bundles are premium one-time purchases."* **The Bible has therefore prohibited the surfaces its own product requires to make money.** When commerce arrives — and it will, before v2 — it will be built *outside* the constitution, because the constitution has no vocabulary for it. An extra-constitutional territory that grows every quarter is fatal to a governing document. It does not need to be amended; it just becomes irrelevant to an increasing fraction of the product.

**Finding C — The register of absolute prohibition is spent.**
The Board counted **190+ absolute prohibitions** ("never", "always", "only", "exactly", "ever", "under no circumstances") across §1.4, §4.5, Ch.7, Ch.8, Ch.11.4, Ch.12.11 and Ch.16. Roughly **50 of them are stated twice**, in Chapter 8 and again in Chapter 16, in different words. When everything is a "never," nothing is. The first time a team ships a justified exception — and the Board has identified several the document *itself* requires — every remaining "never" degrades from law to preference. **The prohibition register should be spent on 12–15 things. It has been spent on 190.**

## What the Board is not saying

The Board is **not** recommending that the document be softened, hedged, or made more "flexible" in tone. Every recommendation below either *preserves the prohibition exactly and moves it to a layer where it can be enforced*, or *converts an unenforceable absolute into a testable one*. Vagueness is not longevity. **Structure is longevity.**

---

# 2. CRITICAL FINDINGS

## 2.1 Internal contradictions — the document already breaks its own law

A constitution containing contradictions is resolved at the keyboard by whoever is implementing. That means the constitution is being silently rewritten, daily, by junior engineers and AI agents. These must be fixed before ratification is meaningful.

| # | Contradiction | Where |
|---|---|---|
| **C1** | **Rule 18** — "Never present more than one forward path from any surface" — vs **§10.4 Domain page**, which contains the domain's witnesses (plural, as Thresholds) *and* the Thread onward. That is N+1 forward paths. | Rule 18 vs §10.4 |
| **C2** | Same rule vs **§10.3 The Memory Map**, whose entire purpose is presenting many forward paths simultaneously. | Rule 18 vs §10.3 |
| **C3** | **Rule 71** — "one action form in the emotional sequence; if two actions are offered, one is wrong" — vs **§10.2 Witness**, beats 4 and 5: *Stand here* (action) and *The Thread* (action). Two actions, both required. | Rule 71 vs §10.2 |
| **C4** | **§6.1 Movement I** is HELD with "nothing to click" — and then at 0:03 offers a sound control, which is a thing to click. | §6.1 internal |
| **C5** | **P4** — "No timers. Ever." — vs **§11.2**, which specifies 180 ms, 240 ms, 600 ms and 1.2 s durations. Those are timers. The *intent* is "no time-gated content reveal"; the *wording* is absolute and false. | P4 vs §11.2 |
| **C6** | **Token GOLD** — "exactly one appearance in the entire product… the Master Key" — vs the product's own canon, which has **four** Master Keys (Earth, Soul, Spirit, Body). The rule is unenforceable against the mythology it serves. | Ch.7 vs product canon |
| **C7** | **§1.4 #1** — "A visitor must never see a page with no photograph" — immediately followed by an exception. An exception inside a constitutional prohibition. | §1.4 |
| **C8** | **Rule 63 / §13.4** — "the human voice enters exactly twice in the whole product" — scope undefined. Per session? Per page? Across 1000 witnesses? An absolute with an undefined denominator is uninterpretable. | Rule 63 |
| **C9** | **§5.3** cites "no visible breadcrumb, **per §1 of the Direction**" — a normative cross-reference to a document this Bible explicitly supersedes. | §5.3 |
| **C10** | **§9** declares fourteen components are "the entire system," yet the roadmap requires at least six more (the inscription artefact, the map embed inside the Practical Panel, the caption, the 404 surface, the Domain threshold as distinct from the Witness threshold, the video element). The inventory is already incomplete at ratification. | §9 vs Ch.17 |

**Board position:** ten contradictions at v1.0 is not alarming for a document of this ambition. **Ten contradictions in a document whose Rule 100 is "never ship anything that contradicts this document" is a governance emergency**, because it makes the supreme rule immediately unsatisfiable, and a rule that cannot be satisfied is ignored.

## 2.2 The scaling failure, in detail

Model the product at **1,000 witnesses, 20 regions, 8 languages, 5 years**.

**The Thread breaks.** §5.3 defines it as strictly linear, human-authored, one-next-witness, per language. At 1,000 witnesses × 8 languages that is **8,000 authored transitions**, each a written sentence of reasoning. Inserting one witness in the middle requires rewriting two transitions in eight languages. Reordering a region cascades. There is no mechanism for a witness to belong to two arguments. **The Thread is a single Hamiltonian path through the entire content estate, maintained by hand.** It is beautiful at 8 witnesses and unmaintainable at 80.

**Navigation breaks.** Covered in Finding A. The Memory Map cannot show unvisited content by definition, and every other discovery surface is banned.

**Entry breaks.** At scale, most visitors arrive from search, deep into the estate, having never seen the Descent. §6 assumes arrival at Movement I. §6.8 handles the *returning* visitor but not the **side-entering** visitor, who will be the majority within a year of content scaling. That visitor has never been given Sight (§6.3), so per §9 component 7 Guardian Sight "does not exist… before it has been given" — **the majority of visitors will be unable to use the product's central verb.** This is a severe, near-term failure, not a five-year one.

**The HELD moment breaks.** "At most once per page, at the emotional peak." At 1,000 witnesses this produces 1,000 emotional peaks. Rationing within a page does not ration across a product. The scarcity that makes HELD valuable is destroyed by repetition, and the document has no cross-surface rationing concept.

**The photography standard breaks — or the product does.** Ch.12 requires a minimum of three commissioned frames per witness, shot in two 40-minute light windows, with permissions, releases and a named person. At 1,000 witnesses that is **3,000 commissioned frames**. At even €150/frame delivered that is €450,000 in photography, before travel, permissions and grading. **The standard is correct and the economics are unstated.** A standard with no economic model attached will be quietly abandoned at witness #40, and the abandonment will be undocumented.

**The languages rule breaks.** P14 requires 100 % completeness including place content. At 1,000 witnesses, adding a ninth language means translating 1,000 witnesses before launching it. **P14 makes new-market entry monotonically more expensive over time, until it becomes impossible.** The principle is right; it needs a scoping mechanism (see §8.4).

## 2.3 The AI-readability failure

The document is explicitly intended to govern AI-generated implementation (Ch.16). It is not machine-actionable in its current form.

- **The layer boundary is undefined.** Roughly fifteen rules turn on whether a surface is in "the emotional sequence" or "the Utility layer" (Rules 69, 71, 77; Cursor 19, 25). **The document never defines the boundary.** An agent cannot determine which layer the Practical Panel's *heading* is in, or the Covenant, or a caption. This is the single most-referenced distinction in the Bible and it is nowhere specified.
- **"Never invent a colour"** (Cursor 13) is unsatisfiable: the palette has seven poetic names and **zero values**. An agent cannot comply with a rule whose permitted set is empty.
- **"16 px equivalent"** — equivalent to what? Root size? Device-independent pixels? At what zoom?
- **HELD** — "one thing on screen and nothing else" — is not machine-checkable and is enforced by a rule that rejects PRs on sight.
- **The Room Test** (§15.8) is a single subjective judgement, by one unspecified person, blocking Epic completion. No rubric, no panel, no appeal.
- **No machine-readable artifact exists.** A five-year, AI-implemented project needs the enforceable subset of its rules to exist as *data* — a lint configuration, a schema, a CI manifest — not only as prose. Prose rules that are not mechanically checked are, empirically, obeyed about 60 % of the time by human teams and less by agents.

**Board estimate:** of the 200 rules, roughly **35 are mechanically enforceable today**, ~60 are human-checkable with a rubric, and ~105 are judgement calls stated in the grammar of law. That last category is the dangerous one: it teaches readers that the imperative mood is decorative.

## 2.4 The governance single point of failure

Amendment requires "explicit written decision of the project owner." One named person. No succession clause. No quorum. No delegation. No tiering.

Five-year consequences: if the owner leaves, becomes unavailable, or simply becomes a bottleneck, the document **freezes permanently while the product keeps moving**. The team will not stop shipping; they will stop consulting the document. The Board has seen this failure mode in four organisations and it is always terminal for the document, never for the product.

Equally: routing *every* change — including "we need a caption component" — through owner-level ceremony guarantees the ceremony gets skipped. **Amendment cost must be proportional to constitutional weight.** It currently is not, because there is only one weight.

## 2.5 The missing risk: historical and political governance

The Board flags this as the **most serious unaddressed liability in the document**, and it is not a design issue.

This is a heritage product whose central thesis is *"one name survived 1,345 years."* It makes claims about a nation's past, spanning the Ottoman period, the Second Bulgarian Empire, Christianisation, and the origin of an alphabet whose authorship is contested between Bulgaria, North Macedonia and Greece. The word "Thracian," the framing of the 1396–1878 period, the treatment of Ottoman-era heritage, the position of Turkish, Roma, Jewish and Armenian communities in the national story, and any statement about Macedonia are all **live political questions in the region today**.

**The Design Bible contains no editorial governance whatsoever on any of this.** There is no historical review process, no source standard, no consultant requirement, no policy on contested claims, no escalation path, and no stated position on the boundary between national pride and nationalism. Ch.12 governs the aperture of a lens in more detail than the entire document governs a claim about the past.

A single ill-judged sentence, in one language, on one witness page, is a reputational and diplomatic risk to a project that is courting municipalities and cultural institutions. **This requires a Book, not a rule.** See §4.3.

## 2.6 The measurement prohibition

Rule 99 bans analytics requiring a consent banner; §13 of the Direction and §1.4 extend this to a no-tracking promise. The Board fully supports the *promise* — it is a genuine brand asset and it is honestly written.

But the document then specifies success in terms it forbids itself from observing: "hold-rate on the Prohodna surface; target > 60 %" (S-10.1), "inscriptions per 100 completed Descents" (S-04.1), "artefact download rate" (S-04.2). **Three acceptance criteria in the worked examples require measurement the constitution prohibits.** Additionally, Gate 2 ("does a stranger reach the Covenant without being told to") requires user research, and the 40-week roadmap contains **zero research activities**.

A constitution that forbids learning will be broken by the first person who needs to learn something. **The prohibition needs to become a governed permission** — consent-free, aggregate, server-side, no cross-site identity, published openly — which preserves the promise *and* the feedback loop. Otherwise the promise will be broken quietly, which is worse than amending it loudly.

---

# 3. RECOMMENDED CONSTITUTIONAL CHANGES

The Board recommends **six structural changes**. None alters philosophy, identity, storytelling, visual language or product vision. All six increase the probability the document is still governing in 2031.

## CC-1 · Adopt a three-tier structure

The single change that determines whether this document survives.

```
TIER 0 — THE CHARTER                              ~3 pages · changes ~never
  The 15 Principles · The emotional hierarchy · The 12 prohibitions that
  actually matter · The amendment process itself
  Amendment: owner + 2 named stewards, recorded, with dissent noted.

TIER 1 — THE STANDARDS                            versioned · reviewed 2×/year
  World model · Design language · Tokens (meanings) · Component governance ·
  Page patterns · Motion · Photography · Sound · Editorial · IA
  Amendment: design lead, recorded as an ADR. Deprecation lifecycle applies.

TIER 2 — THE SPECS                                versioned · changes freely
  Token values · budgets · breakpoints · lint rules · checklists · CI manifest ·
  the Cursor rule set · shot lists · QA gates
  Amendment: any lead, PR review, no ceremony. Machine-readable where possible.
```

**Rules move downward as they age and stabilise. Nothing moves upward without Tier-0 ceremony.** A rule proven by three years of practice can be demoted to a lint check; a lint check that turns out to encode a principle can be promoted with a vote.

**What this fixes:** the amendment bottleneck, the routing-around failure, the AI-readability gap (Tier 2 becomes data), the rot of numeric values in a permanent document, and the collapse of the prohibition register.

**What it preserves:** everything. Not one word of philosophy changes tier or wording. The 15 Principles become *more* powerful because they are no longer sitting in a list with "never centre-crop a hero."

## CC-2 · Give every rule metadata

Every rule in Tiers 1 and 2 carries a fixed header. This is the second-highest-value change in this review and it is cheap.

```
R-046 · Motion is weather or consequence.
  TIER        1
  PRINCIPLE   P4
  RATIONALE   Ambient decoration reads as cheap and competes with the land.
  EVIDENCE    Audit 2026-07: 5 concurrent ambient systems, none diegetic.
  ENFORCEMENT judgement            (machine | rubric | judgement)
  STATUS      active               (active | deprecated | superseded | temporary)
  REVIEW      2028-01
  SUPERSEDES  —
```

**Why this matters more than it looks.** In 2031 an engineer will encounter *"never render a link to the page the visitor is on"* and have no idea it exists because of one broken component in 2026. Without rationale, rules become superstition; superstitions get cargo-culted or contemptuously ignored, and both outcomes destroy the document. With `EVIDENCE` and `REVIEW`, a rule can *retire honourably* instead of accumulating.

**Immediate application:** approximately **30 rules in Chapter 8 and 16 are remediation of specific 2026 defects, not eternal law** — Rules 8, 9, 37, 40, 74, 75, 76, and most of the accessibility block. They should be marked `STATUS: temporary`, `REVIEW: 2027-01`, and migrated to CI checks. They are correct. They are not constitutional.

## CC-3 · Merge Chapters 8 and 16 into one rule set with two views

Chapter 8 (100 Rules) and Chapter 16 (100 Cursor Rules) overlap by roughly **60 %**, stated in different words. Rules 46–58 ≈ Cursor 53–64. Rules 81–92 ≈ Cursor 65–78. Rules 31–45 ≈ Cursor 41–52.

**Two hand-maintained copies of the same law will drift within one year, and when they drift, nobody will know which is authoritative.**

Recommendation: **one canonical rule register**, with `AUDIENCE` metadata (`human` | `agent` | `both`) and two generated views. The Cursor view is *rendered from* the register, never authored separately. This is a ~40 % reduction in document length with **zero loss of meaning** — the largest available win under the "reduce" mandate.

## CC-4 · Define the two layers formally

Add to Tier 1, as a definition, not a rule:

> **The Told Layer** — surfaces whose purpose is to make the visitor feel something. Governed by the Voice and Inscription, HELD/WIDE/CLOSE air, the motion law, and the photography law.
>
> **The Useful Layer** — surfaces whose purpose is to let the visitor accomplish something. Governed by the Utility face, SET air, conventional controls, and clarity over atmosphere.
>
> **Every surface, component and string declares its layer.** Where a component crosses the boundary, the boundary is a visible, deliberate threshold — the visitor should feel the register change. Nothing is ambiguous; if you cannot say which layer a thing is in, it is not designed yet.

**This single definition makes ~15 currently-unenforceable rules enforceable, by humans and agents alike.** It also gives commerce, accounts, education and partner surfaces a *constitutional home* (§9) without contaminating the emotional sequence — which is the mechanism by which the Bible survives the business.

## CC-5 · Split Memory from Atlas

Preserves P13 exactly. Fixes Finding A.

> **The Memory** — what *you* have seen. Lights. Personal, earned, never a directory. Exactly as specified in §10.3.
>
> **The Atlas** — what *exists*. The world's own knowledge of itself. Dark regions become legible as the estate grows: named, located, and enterable, without pretending the visitor has been there.

They are **the same object in two states**, and moving between them is a deliberate act by the visitor — which is more interesting than either alone, and entirely consistent with the world's two-state law (Law 2, P3). The world you have walked, and the world as it is. **The product's central metaphor already contains the solution.**

Once the Atlas exists, "search" stops being a banned directory feature and becomes *asking the world where something is* — which is what a map is for. The prohibition on **indexes, archives, tag pages and browse-all remains fully intact.**

## CC-6 · Convert the Thread from a chain to a graph with an authored default

Preserves the felt experience exactly. Fixes the maintenance bomb.

- **Presentation is unchanged:** every witness presents **exactly one** next witness, argued for in a sentence. P11 survives verbatim. The visitor never sees a fork.
- **Architecture changes:** the underlying structure is a directed graph. A witness may be reachable from several arguments and may carry more than one authored transition, of which **one is the default** for that entry path.
- **Maintenance changes:** inserting a witness rewrites two transitions in its own argument, not the whole chain.
- **Scale changes:** the estate can grow to thousands of witnesses without an 8,000-sentence hand-maintained sequence.

**The visitor's experience is identical. The editorial team's survival is not.**

---

# 4. NEW BOOKS TO ADD

The Bible has four Books. The Board finds **six more are required** for a five-year instrument. Each is specified here as a mandate, not written.

## 4.1 BOOK V — EVOLUTION & GOVERNANCE *(highest priority)*

The meta-book. Without it, none of the others can be maintained.

**Must contain:**
- **The tier model** (CC-1) and which authority amends which tier.
- **Succession and quorum.** Named stewards. What happens if the owner is unavailable for 90 days. A tie-break. This is not bureaucracy; it is the difference between a document that outlives a person and one that doesn't.
- **The deprecation lifecycle.** `active → under review → deprecated (with sunset date and replacement) → retired (archived, never deleted)`. Modelled on Polaris and Carbon, both of which survive precisely because they can retire things.
- **Architecture Decision Records.** Every non-trivial decision gets a numbered, dated ADR with context, options considered, decision, and consequences. **The AMENDMENTS table as specified is a change log, not a decision record — it captures *what* changed and not *why the alternatives lost*.** In three years the "why not" is the only part anyone needs.
- **The exception protocol.** How a team requests a time-boxed, documented, reviewed exception. **A constitution with no legal way to deviate guarantees illegal deviation.** Exceptions expire by default.
- **Conflict resolution.** When two rules collide (and ten pairs already do), the resolution order: Charter > Standards > Specs; and within a tier, the more specific governs.
- **The annual constitutional review.** Once a year: which rules were violated and why; which were never once invoked; which are now enforced mechanically and can be demoted. **A rule never invoked in two years is a candidate for deletion, not a badge of honour.**

## 4.2 BOOK VI — EDITORIAL

The Bible defines the Voice *typographically* and *tonally* and never *editorially*. A design system without a content standard produces beautiful surfaces containing sentences nobody governs.

**Must contain:** the voice spectrum (where the register sits between reverent and plain, with examples of each failure mode); naming conventions for new witnesses and domains; sentence-level style (the document already implies but never states a preference for the concrete over the abstract); how a date is chosen for a witness; the caption standard promoted out of Ch.12; how the Thread transition sentence is constructed; how the same narrative survives translation into a language whose speakers were on the other side of the story; **and the banned-word list, maintained as data.**

## 4.3 BOOK VII — HISTORICAL INTEGRITY *(highest risk)*

See §2.5. The Board considers this the most serious omission in the document.

**Must contain:**
- **The source standard.** What may be asserted, on what evidence, and how it is cited on the witness page. A tourism claim and a historical claim are different objects.
- **The consultant requirement.** A named historian, per domain, who signs off. Credited publicly on The Project — which is also a trust asset.
- **The contested-claims register.** An explicit, maintained list of subjects the product will and will not make claims about, with the reasoning. Non-exhaustive candidates: the authorship of the Glagolitic and Cyrillic alphabets; the framing of 1396–1878; Ottoman-era heritage; Macedonia; minority communities; the Thracian–Slav–Bulgar synthesis; the communist period.
- **The nationalism boundary — stated explicitly.** The product's thesis is national continuity. That is a legitimate and moving story and it sits one careless sentence away from ethnonationalism. **The document must state where the line is, in writing, so that a junior writer, a contractor, or an AI generating copy in 2029 cannot cross it by accident.** Suggested framing for the owner to adopt or reject: *the Name survived because people carried it, and the people who carried it were not all the same people.* Pride in persistence, never in purity.
- **The correction protocol.** How an error is fixed, acknowledged, and recorded. Heritage products that quietly edit history lose the trust the whole project runs on.

## 4.4 BOOK VIII — CONTENT OPERATIONS

The lifecycle of a witness: proposed → researched → historically reviewed → written → photographed → sound-recorded → translated → QA'd → published → reviewed → retired. Who signs each gate. What the minimum viable witness is. **What happens when a place closes, changes, becomes unsafe, or is damaged** — the Bible has no concept of content that must be corrected or withdrawn, which at 1,000 places will happen monthly.

**Must also contain the economics** (§2.2): cost per witness at the Ch.12 standard, and the review trigger if it is unaffordable. **A standard without a budget is a standard that will be abandoned silently.** Better to state the number and have the argument.

## 4.5 BOOK IX — PARTNERSHIP, COMMERCE & MEMBERSHIP

The constitutional home for everything Finding B identified as banned-but-required. **Governs, does not design.**

Must establish: which layer commerce lives in (the Useful Layer, per CC-4); that a price is never shown inside the emotional sequence; the co-branding standard for municipalities (a partner's logo must never appear in the Told Layer); the rule that a sponsored witness is disclosed and is held to the identical editorial and photographic standard as an unsponsored one, **with no exceptions ever** — this one genuinely is a "never"; the boundary between the free web experience and paid app content; and the principle that **the horizon is never sold** — a Seal opens when its content is ready, never when a payment clears.

## 4.6 BOOK X — AI COLLABORATION

Chapter 16 governs AI *implementing the design*. It does not govern AI *making the product*, which is where the real five-year risk sits.

Must establish: AI may not generate photography, ever (already implied — must be explicit and permanent, and it is one of the ~12 genuine Tier-0 prohibitions); AI may not author historical claims; AI may draft copy but a named human owns every published sentence; AI may not be the sole translator for a shipped locale; **and the disclosure position** — whether the product states publicly where AI is used, which given its stated stance on AI training is a coherence question the brand will be asked about.

---

# 5. RULES TO RELAX

The mandate: never weaken the philosophy; only increase adaptability. Every recommendation below **preserves the intent exactly** and changes only the mechanism.

| # | Current | Problem | Recommended |
|---|---|---|---|
| **R1** | **P4 · "No timers. Ever."** | False as written (§11.2 specifies eight durations). Absolute language that the document itself violates teaches readers to discount absolutes. | *"No content is revealed on a timer. Duration governs transitions, never disclosure."* Same law. Now true. |
| **R2** | **§9 · "Fourteen components. That is the entire system. Adding one requires an amendment."** | Freezing an inventory is the classic way design systems die (see §7). Already incomplete at ratification (C10). | Freeze the **admission criteria**, not the inventory: *a component exists only if it is required by a page pattern, has no existing component that could serve, declares its layer, and carries anatomy, states, variants and an accessibility contract.* Adding a conforming component is a **Tier-1** decision. The **26 deleted components remain permanently banned by name** — that list is the real protection and it survives untouched. |
| **R3** | **Token GOLD · "exactly one appearance in the entire product"** | Contradicts the four-Master-Key canon (C6). Unenforceable at scale. | *"Gold is reserved for the Master Keys and appears nowhere else. It is never a system colour, never an accent, never decorative."* The scarcity that gives it meaning is fully preserved; the arithmetic error is removed. |
| **R4** | **Rule 17 · "Never build an index, archive, search, tag page, or browse-all."** | Correct at 10 places; user-hostile at 200 (§2.2). | Keep the ban on **indexes, archives, tag pages and browse-all — verbatim.** Permit **asking the Atlas where something is** (CC-5), which is a map affordance, not a directory. The distinction is real and defensible: a directory lists everything by default; a map answers a question. |
| **R5** | **Rule 18 · "Never more than one forward path from any surface."** | Contradicted by the Domain page and the Map (C1, C2). | *"Every narrative surface offers exactly one argued next step. Map and Domain surfaces are spatial, not narrative, and present the world as it is."* Preserves the Thread's discipline; removes the contradiction. |
| **R6** | **Rule 71 · "If two actions are offered, one is wrong."** | Contradicted by the Witness's required beats 4 and 5 (C3). | *"A surface offers at most one action per layer: one useful action, one narrative action. Never two of the same kind."* This is what the document actually means and it is now checkable. |
| **R7** | **Rule 88 / Cursor 28 · "16 px equivalent, anywhere, for any reason."** | Device-bound. Breaks on watch, TV, headset, in-car, print. | *"Body text is never below the platform's comfortable reading minimum; on web that is 16 px."* Same floor today, survives a new form factor. |
| **R8** | **Rule 95 · KB budgets in the constitution** | Numbers rot. This one will be wrong within three years. | Move verbatim to **Tier 2**, reviewed quarterly. Keep in Tier 1 the principle: *the first paintable frame of any page is its photograph, and nothing precedes it.* |
| **R9** | **P14 · "100 % complete or we do not offer it."** | Makes market entry monotonically more expensive until impossible (§2.2). | Scope the completeness contract: *a language is offered only where every surface a visitor can reach in it is complete. A language may launch on a defined subset of the estate, provided that subset is closed — no link ever leaves it into untranslated content.* **This preserves the principle absolutely** and makes an eighth language possible in year four. |
| **R10** | **Rule 99 · "Never ship analytics."** | Forbids learning; three of the document's own acceptance criteria require it (§2.6). | *"Never ship anything that requires consent, identifies a person, or is shared with a third party. Aggregate, server-side, consent-free measurement is permitted and its existence is published."* The promise is kept and is arguably strengthened by being specific rather than absolute. |
| **R11** | **Law 1 · "Down is descent and forward is time. There is no horizontal narrative."** | A statement about a scrolling web page, in a document that must eventually govern the app and whatever comes after. | *"Movement forward in the experience is movement forward in time and inward into the land. On the web this is downward."* Identity preserved; medium-independent. |
| **R12** | **Rule 63 · "The human voice enters exactly twice in the whole product."** | Undefined denominator (C8). | *"The human voice enters at most twice in any single visit."* Now interpretable, and preserves the rationing that makes it work. |
| **R13** | **§15.8 The Room Test** | A single unspecified judge blocking Epic completion, with no rubric. | Keep the question — it is excellent. Make it a **three-person panel with a written verdict**, one of whom has not worked on the surface. Judgement is fine; unaccountable judgement is not. |
| **R14** | **Cursor 82, 90, 91, 79** *(npm deps, CI, commits, refactor scope)* | Engineering policy in a design constitution. | Move to `CONTRIBUTING.md`. **They are correct and they do not belong here.** Every non-design rule in this document dilutes the authority of the design rules. |
| **R15** | **§1.4 #1 · "Never a page with no photograph (legal pages excepted)"** | An exception inside a constitutional prohibition (C7). | Move the exception to the Standards tier as a scoped pattern: *the Told Layer is never without the land. The Useful Layer is governed by clarity.* Charter stays absolute; the exception lives where exceptions belong. |

---

# 6. RULES TO STRENGTHEN

Longevity is not only relaxation. Several things are stated too weakly for how much they matter, and several are missing.

| # | Item | Why it must be stronger |
|---|---|---|
| **S1** | **The 26 deleted components** | Currently a prose sentence in §9. This is the **most valuable list in the entire document** — it is the accumulated judgement that prevents the site regressing to what it was. Promote to a named, numbered, permanent **Tier-0 register** with the reason each was removed. Restoring any of them requires Charter-level amendment. |
| **S2** | **No AI-generated imagery** | Currently one clause inside Rule 33. In five years this will be the single most-pressured rule in the document, and the pressure will be economic. It deserves its own Tier-0 article with an explicit rationale, because it will need to be defended in a meeting where someone has a budget spreadsheet. |
| **S3** | **Sponsored content parity** | Not addressed at all. Must be Tier-0: *a sponsored witness meets the identical editorial, historical and photographic standard as any other, is disclosed, and no partner has approval over content.* This is the rule that prevents the product being hollowed out by its own revenue model — the most common way heritage media dies. |
| **S4** | **The horizon is never sold** | Implied by P10 and HORIZON, never stated. A Seal opens when the content is ready. Not when a municipality pays. Not for a launch date. Tier-0. |
| **S5** | **Historical accuracy** | Currently nowhere (§2.5). The highest-severity gap in the document. Tier-0 principle, Book VII implementation. |
| **S6** | **The accessibility conformance level** | Referenced constantly, never specified. State it: **WCAG 2.2 AA as the floor, with named AAA commitments where the world benefits.** P15 is philosophically excellent and legally unenforceable without a named standard. |
| **S7** | **The side-entering visitor** | §6.8 handles the returning visitor; nothing handles the visitor who arrives mid-estate from search — who will be the majority (§2.2). **Guardian Sight must be givable at any entry point**, or the product's central verb is unavailable to most of its audience. This is a near-term correctness issue, not a five-year one. |
| **S8** | **Rule 100** | *"Never ship anything that contradicts this document"* is currently unsatisfiable because the document contradicts itself ten times. Either fix the contradictions before ratifying, or add the conflict-resolution order (Book V) so the rule can be obeyed. A supreme rule that cannot be obeyed delegitimises every rule beneath it. |
| **S9** | **User research** | Zero research activities in a 40-week plan with three gates, two of which require knowing what strangers do. Add a research obligation to Book V: **no Gate passes on internal opinion alone.** |
| **S10** | **The Descent gate (Rule 55)** | Excellent and currently buried mid-list. This is the document's own self-check against its most seductive idea, written by an author suspicious of their own best work. Promote it — that instinct is exactly what a constitution is for. |

---

# 7. GOVERNANCE IMPROVEMENTS

## 7.1 Authority model

| Tier | Amends | Requires | Recorded as |
|---|---|---|---|
| **0 · Charter** | Principles, the 12 prohibitions, the deleted-component register, the amendment process | Owner **+ 2 stewards**, unanimous, with dissent published | Amendment, dated, with reasoning and rejected alternatives |
| **1 · Standards** | World model, language, tokens, components, patterns, motion, photography, sound, editorial | Design lead + 1 reviewer | **ADR** |
| **2 · Specs** | Values, budgets, breakpoints, lint rules, checklists, shot lists, agent rules | Any lead, normal PR review | Changelog |

**Succession:** two named stewards. If the owner is unreachable for 90 days, stewards may act at Tier 0 by unanimity, and every such act is reviewed on the owner's return.

## 7.2 The exception protocol

Currently absent, and its absence is the most likely proximate cause of the document being abandoned.

> An exception is requested in writing, names the rule, states the reason and the cost of compliance, proposes a sunset date **no more than 6 months out**, and is approved at the tier of the rule. **All live exceptions are listed in one public register.** An exception that is renewed twice becomes an amendment proposal — because a rule that keeps needing exceptions is a wrong rule, and the register is how you discover that.

## 7.3 The annual constitutional review

Once a year, in writing:
- Which rules were violated, how often, and why. **High-violation rules are examined, not re-enforced.**
- Which rules were never invoked. Candidates for retirement.
- Which are now enforced mechanically and can be demoted to Tier 2.
- Which exceptions became permanent.
- Whether the Charter still describes the product.

## 7.4 Make the enforceable subset machine-readable

Extract the ~35 mechanically-checkable rules into a CI manifest — banned words, asset existence, budget ceilings, locale completeness, canonical/URL parity, `<h1>` count, duplicate-`<h2>` detection, opacity-derived text colour, `outline: none`, `tabindex > 0`, `aria-hidden` on content, `TODO`/`FIXME` presence, sealed-domain sitemap exclusion. **Failing CI must cite the rule ID.** A rule that fails a build teaches faster than a rule that fails a review.

## 7.5 Agent-specific governance

- The Cursor view is **generated** from the canonical register (CC-3), never hand-maintained.
- Every agent task states its Epic, Story, layer, and the rule IDs in scope. **An agent that cannot name its layer must stop** (CC-4).
- Publish a short **`AGENTS.md`** at the repository root: the tier model, the layer definition, the deleted-component register, the ten "if in doubt, stop" conditions. Agents reliably read root-level short files; they do not reliably read a 20,000-word Bible.

---

# 8. FUTURE-PROOFING IMPROVEMENTS

## 8.1 Medium independence
Roughly a dozen rules encode "scrolling web page" as though it were the world's physics (Law 1, the 16 px floor, the press-and-hold gesture, the KB budgets). **Add a Standards-tier statement: the Charter is medium-independent; each medium — web, app, spatial, print, installation — carries its own Standards volume that must satisfy the Charter.** Without this, the first serious app or exhibition work will fork the philosophy, and a forked philosophy is a dead one.

## 8.2 Scale independence
Three mechanisms, all specified above: **Memory/Atlas** (CC-5), **Thread-as-graph** (CC-6), and **cross-surface rationing** — HELD, the vocal moments, and the Inscription are rationed *per page* but not *per estate*. Add: *scarcity is defined per visit, not per surface.* Otherwise the rarest things in the world become the most common.

## 8.3 Economic independence
State the cost of the standards (Book VIII). A photography law with no budget attached will be abandoned at witness #40 and the abandonment will be undocumented — **which is exactly the failure mode this entire document exists to prevent.**

## 8.4 Language and cultural scaling
R9 scopes the completeness contract. Book VI must additionally address the harder problem: **the narrative is not culturally neutral.** "Where the alphabet was kept alive when speaking it was forbidden" reads differently to a Turkish visitor than to a German one. Localisation is not translation, and the Bible currently assumes it is.

## 8.5 Technology independence
"Press and hold" (§3.9, §9.7) is a 2020s touch idiom. **Define the verb, not the gesture:** *Look through* — the visitor deliberately and reversibly asks a surface to show its memory, and stops asking. On web that is press-and-hold. On a headset it is not.

## 8.6 The horizon at scale
Law 7 requires the map to always show more darkness than light. **At 1,000 places with a devoted visitor, this becomes either false or artificial.** Restate as a design commitment rather than a geometric one: *the world is always larger than what any one visitor has seen.* True forever, and no longer requires manufacturing darkness.

---

# 9. BUSINESS EVOLUTION IMPROVEMENTS

The Bible currently forbids, by omission or by name, every surface the business needs. Six governance additions — **none of which is UI** — give the business a constitutional home.

**B1 · Layer assignment.** Commerce, accounts, membership, booking, education and community all live in the **Useful Layer** (CC-4), governed by clarity. **A price never appears in the Told Layer.** This one sentence resolves the entire conflict without touching philosophy.

**B2 · The commerce boundary.** *The web tells; the app does.* The free/paid boundary is stated once, at the Covenant, as a promise (§5.4). **Payment is never a gate on a story.** A visitor may always read what a place saw.

**B3 · Sponsored parity** (S3). The rule that keeps the product honest when the money arrives.

**B4 · The horizon is never sold** (S4).

**B5 · Co-branding standard.** Municipal and institutional partners appear in the Useful Layer and on The Project, never in the Told Layer, never on a witness photograph, never in the Mark's lockup. Their credibility is borrowed by the *project*, never lent to a *frame*.

**B6 · Community without a forum.** Community will be requested — by municipalities, by schools, by Keepers. The Bible bans reviews and social embeds, correctly. Establish the governed alternative: **contribution, not commentary.** A Keeper may add to the record — a photograph submitted to the archive, a correction, a memory of a place — under editorial review, in the Useful Layer, never displayed as user-generated content inside the Told Layer. **This preserves the authored voice absolutely while giving the community a real role**, and it is the only form of community this world's physics can support.

---

# 10. FINAL VERDICT

## Scores

| Dimension | Score | Reasoning |
|---|---|---|
| **Vision** | **10 / 10** | Best-in-class. Nothing in this category comes close. Not challenged, not improvable by this Board. |
| **Creative Direction** | **9 / 10** | The Threshold Rule, the alphabet-as-brand, the Memory Map and the 681 axis are genuinely ownable. −1: the Photography Bible is closer to a NatGeo house style than to something only this project could have written (see below). |
| **World Building** | **8 / 10** | The eight Laws are excellent and internally coherent. −2: the world is specified for the size it is today. Laws 6 and 7 break at scale. |
| **Engineering Governance** | **6 / 10** | Cursor Mode is unusually good and rare. −4: two hand-maintained rule sets, ~35 % mechanically enforceable, non-design policy mixed in. |
| **Design System** | **5 / 10** | Philosophy without mechanics. No token values, no component anatomy/states/variants, no contribution model, no versioning, no deprecation. |
| **AI-readability** | **5 / 10** | Explicitly targets AI implementation, then leaves its most-referenced distinction undefined and its palette valueless. No machine-readable artifact. |
| **Maintainability** | **4 / 10** | 190+ absolutes, ~50 duplicated, one amendment tier, one amending person, no rationale metadata, no retirement path. |
| **Longevity** | **4 / 10** | Ten internal contradictions at v1.0 and a navigation model that inverts at ~200 places. Survives 18 months as written. |
| **Future-proofing** | **3 / 10** | Medium-bound, device-bound, scale-bound, budget-free. No evolution framework at all. |
| **Business Flexibility** | **3 / 10** | Has prohibited the surfaces its own monetization requires. Highest-risk score on the board. |

**Composite: 5.7 / 10 as a constitution. 9.5 / 10 as a vision.**

The gap between those two numbers is the entire finding of this review, and it is closable. **Every one of the low scores is a structural problem with a known remedy, and not one remedy requires changing a word of the philosophy.**

## Does the identity survive? Two honest challenges

**"Does it accidentally become National Geographic?"**
Partially, yes — Chapter 12. The three photographic laws are superb, and Laws 2 and 3 (dawn/dusk only; a small unposed human) are **the NatGeo house style**, practised for sixty years. Law 1, the Threshold Rule, is the genuinely original one, and it is the only one derived from the product's own mythology. **Recommendation: state that explicitly.** Make the Threshold Rule the primary and non-negotiable law, and demote the other two to strong defaults with named exceptions. Otherwise the library will be beautiful and generically excellent — which is a worse outcome than beautiful and strange.

The truly original assets — the alphabet as display voice, the 681 crossing as a temperature shift, the Memory Map that lights as you learn, memory as a medium rather than a feature — **are all original and none of them is imitative.** The identity survives. It is thickest where the document is least like a style guide.

**"Where does it imitate?"**
The token-with-a-poetic-name pattern is Airbnb DLS. The Books structure is Apple HIG. The rule-set-with-citations is Carbon. These are fine borrowings of *form*. The Board found **no borrowing of substance**, which is unusual and worth stating plainly.

## Maturity level

Against the standard five-level scale:

- **Level 1** — Style guide. *Passed.*
- **Level 2** — Documented system with principles. **← This document is here.**
- **Level 3** — Governed system: versioning, deprecation, contribution model, component specs. *Not reached. Missing: CC-1, CC-2, R2, component anatomy.*
- **Level 4** — Adopted system: measured, tooled, enforced, researched. *Not reached. Missing: §7.4, S9, R10.*
- **Level 5** — Self-sustaining: evolves without its authors. *Not reached. Missing: Book V entirely.*

Material, Polaris and Carbon sit at 4–5. Apple HIG sits at 4 with a uniquely strong Level-2 layer. **This document has the best Level-2 layer the Board has seen and nothing above it.** The good news is that Levels 3–5 are process work, not creative work, and the creative work is the part that cannot be bought.

## The question

### *"If Apple adopted this document internally for a flagship experience, what would they change before approving it?"*

**Seven things. In this order.**

**1. They would split it in two, on day one.** Apple maintains a public HIG — principles and patterns, evolving, non-absolute — and an internal spec containing values, budgets and enforcement. **They would never ship one document containing both "the land is the interface" and "hero ≤ 400 KB."** Mixing the eternal with the numeric is, to Apple, a category error, and it is the first thing they would fix.

**2. They would delete roughly 170 of the 190 "nevers."** Read the actual HIG: it says *avoid*, *prefer*, *consider*, and reserves the imperative for a handful of things. **Apple's authority comes from restraint in the use of authority.** They would keep perhaps twelve absolutes — no AI imagery, no stock, no autoplay sound, no dark patterns, the deleted-component register, sponsored parity, the horizon is never sold — and rewrite the rest as principles with rationale. **The philosophy would get stronger, not weaker**, because the twelve would finally be audible.

**3. They would refuse to approve a document that contradicts itself.** Ten pairs. At Apple this is a returned draft, not a note.

**4. They would demand component specifications.** Fourteen components with philosophy and no anatomy, no states, no variants, no accessibility contract, no content guidance, no platform behaviour. Apple's HIG gives a single control more specification than this document gives its entire system. **Philosophy without anatomy is not a design system; it is an essay about one.** And they would never freeze an inventory.

**5. They would insist on research.** Forty weeks, three gates, zero studies. Apple would not approve a flagship experience whose success criteria are internal opinion — particularly one whose central interaction (press-and-hold to reveal memory) is genuinely novel and therefore genuinely unvalidated.

**6. They would fix the entry model before anything else.** The side-entering visitor (S7) means most people never receive the product's central capability. Apple would treat this as a correctness bug of the highest order, and they would find it in the first review.

**7. They would give it an owner who is not one person.** Apple's guidelines outlive individuals by design. A constitution with a single amending authority and no succession would not be approved as a governing document, however good it is.

**And what they would not change:** the philosophy, the emotional arc, the Threshold Rule, the alphabet as the brand, the Memory Map, the world's physics, the deleted-component register, the Room Test's question, and the closing paragraph. **They would recognise, correctly, that the hard part is already done** — and that everything this Board has raised is process work that any competent organisation can add to a vision, whereas no amount of process produces a vision.

---

## The Board's position, stated plainly

**Do not ratify v1.0 as the constitution.** Ratify the **Charter** — the 15 Principles, the emotional hierarchy, the twelve real prohibitions, the deleted-component register, and the amendment process — as **Constitution v1.0, effective immediately and permanently.**

Publish everything else, unchanged in substance, as **Standards v1.0 and Specs v1.0**, versioned and amendable at their own tiers.

Then do four things before writing another line of code:

1. **Resolve the ten contradictions** (§2.1).
2. **Define the two layers** (CC-4) — one paragraph that makes fifteen rules enforceable and gives the business a home.
3. **Write Book V — Evolution & Governance** (§4.1). Nothing else survives without it.
4. **Write Book VII — Historical Integrity** (§4.3). This is the risk that is not a design risk, and it is the one that could end the project rather than degrade it.

Everything else on this list can wait for the annual review.

> **A constitution's job is not to be right about everything. It is to still be consulted in year five.**
> This document is more right than any comparable document the Board has seen — and, as structured, it will not be consulted in year three.
> **Fix the structure. Change nothing else.**

---

**DESIGN REVIEW BOARD · 2026-07-26**
*Findings advisory. Adoption is the project owner's decision, and every recommendation above is refusable with reasoning recorded.*
