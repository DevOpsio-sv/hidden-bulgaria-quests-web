# DESIGN REVIEW BOARD REPORT

**Subject:** Unlocking Bulgaria — complete product specification
**Documents under review:** THE_HEART_OF_THE_PROJECT · PRODUCT_MANIFESTO · EXPERIENCE_BIBLE · EXPERIENCE_RULEBOOK · PRODUCT_RECONSTRUCTION_SPECIFICATION
**Recommendation:** **Approve the philosophy. Reject the scope. Rebuild the plan around six places and three app capabilities.**

---

## 0. THE FINDING THAT PRECEDES ALL OTHERS

This proposal contains approximately **24,000 words of governing documentation and 260 discrete compliance obligations** — 50 Product Laws, 50 Experience Laws, ~75 Rulebook rules, 28 anti-patterns, 12 quality gates, 44 checklist items.

It has shipped **zero checkpoints**.

There is no team size at which 260 obligations per release is executable, and this is not a large team. Within one sprint the rulebook will be ignored, and an ignored rulebook is worse than no rulebook — it teaches everyone that written standards here are decorative.

**The documentation set is itself the first thing to cut.** Five governing documents with substantially overlapping law sets is not rigour; it is a team writing instead of shipping. Four of the five overlap on the same eight or nine ideas: the product speaks less as the place speaks more, never sell inside a moment, movement over interaction, if they remember the interface we failed, absence is never rendered, technology is never the destination.

This report is the last document anyone should write before authoring a place.

---

## 1. THE STRUCTURAL FAILURE

The proposal's emotional climax — the Living Covenant — unlocks after four Domains: **64 checkpoints, 16 routes, four Master Keys.**

Cost, by the proposal's own Phase 0 estimates: 1–2 days to author each place's astonishment, plus 0.5 days field survey per threshold, plus Bulgarian master content, plus 13 translations, plus narration, plus subtitles, plus ~50 AR moments per domain.

**Nobody will ever see the ending.** Not one user. The completion arc is unreachable by any realistic measure — geographically, temporally, and financially. A product whose payoff cannot be reached does not have a payoff; it has an alibi.

And follow the dependency chain honestly:

> The Covenant requires four Master Keys → which require four Domain Seals → which require sixteen Route Relics → which require sixty-four Artifacts → which require sixty-four authored places.

**Every structural layer in this product exists to deliver four lines of Bulgarian that someone loves.** They are genuinely beautiful lines. They are also the single most expensive sentence-set in the plan, and they are load-bearing for an architecture nobody asked for. The user need at the bottom of that chain is: *I went somewhere extraordinary and I want another one.* That need is satisfied at layer one.

**Cut layers two through five from the product.** Keep them in the world bible. If the product succeeds for three years, build them then, for the people who earned them.

---

## 2. THE RULEBOOK ARGUED ITSELF OUT OF ITS OWN HEADLINE FEATURE

Read these three rules together:

- **AR-1** — AR may never activate before the first unmediated look. *Inviolable.*
- **AR-2** — AR may never be the moment. *Inviolable.*
- **AR-4** — Every place must complete end-to-end with the camera disabled. *Inviolable.*

Now state the consequence out loud: **the product must work completely without Guardian Sight, and Guardian Sight may never be the peak of anything.**

Guardian Sight is simultaneously the largest engineering line item in the plan (~200 AR scenes across four domains, a custom camera layer, per-site asset pipelines, outdoor-light tolerance), the headline of the website, the guest-acquisition hook, and — by the proposal's own inviolable rules — **strictly optional garnish on an experience that is complete without it.**

Nobody noticed. The rules were written to protect the moment and they accidentally deleted the business case for the most expensive thing in the build.

**Verdict: remove AR from v1 entirely.** Not deferred within the app — absent. Remove the AR demo, remove Guardian Sight from the website hero, remove it from the app. Revisit in year two when there are places worth deepening and revenue to fund it.

This single decision removes more engineering cost than every other recommendation in this report combined.

---

## 3. THE 12 QUALITY GATES CANNOT BE PASSED

The Rulebook requires twelve gates before any place ships, each with named evidence and a named signatory across eight distinct roles: Content lead, Historian, Field lead, Experience lead, QA, Accessibility lead, Writer, Editor, Partnerships.

**This project does not have eight roles.** The gates are a governance fantasy that will be waived on the first deadline, and the first waiver kills the whole instrument.

**Reduce to four gates that one or two people can actually apply:**

| Gate | Question | Evidence |
|---|---|---|
| **Wonder** | Is there one true fact out of scale with this place? | One sentence. A stranger reacts. |
| **Truth** | Is every claim sourced, and is interpretation marked as interpretation? | Source list. |
| **Ground** | Do we know the exact spot, direction, hours, season, walk, and hazards? | One field visit. |
| **Reachable** | Can a family with two children do this in a day, and do we say so honestly? | Distance, duration, difficulty, child viability. |

Eight gates deleted. Nothing important lost — accessibility folds into Reachable, safety and seasonality fold into Ground, story and silence fold into Wonder, community consent stays inside Truth.

---

## 4. FEATURE CLASSIFICATION

| Concept | Class | Human need | If removed | Verdict |
|---|---|---|---|---|
| **Places** | **CORE** | The entire product | Nothing remains | Keep |
| **The astonishment** | **CORE** | Ignition — curiosity that can't resolve remotely | No reason to go | Keep |
| **Distance + honest cost** | **CORE** | Turns a poster into a plan | Journeys die at logistics | Keep |
| **Arrival choreography** | **CORE** | The transformation happens here | The product becomes a guidebook | Keep — **this *is* the product** |
| **On-site narration** | **CORE** | Makes ground readable | A field stays a field | Keep |
| **Silence** | **CORE** | Where meaning lands | Nothing lands | Keep — costs nothing to build |
| **Offline** | **CORE** | No signal at the sites that matter | Product fails in the field | Keep |
| **Evidence of having been** | **CORE** | Memory needs an index | Nothing persists | Keep — **one** object, not four tiers |
| **Website place pages** | **CORE** | Already the strongest asset in the repo | Discovery collapses | Keep and promote |
| **One-time payment** | **CORE** | Revenue | No business | Keep, radically simplified |
| **Nearby** | **SUPPORTING** | *What's near me* | Website can propose | Build small, later |
| **Recommendations** | **SUPPORTING** | Which place, for whom | A human editor picking three beats any algorithm at this scale | Keep — as editorial, not as system |
| **Map (in-app)** | **REMOVE (v1)** | Navigation | Nothing — hand off to the maps app people already trust and use daily | **Delete. Deep-link out.** |
| **Routes** | **HIDE** | *There are more like that* | Nothing in v1 | v2 |
| **Domains / Предели** | **HIDE** | Structure | Nothing — nobody completes 16 checkpoints | v3, if ever |
| **Master Keys** | **HIDE** | Meaning at scale | Nothing — unreachable | v4, if ever |
| **Living Covenant** | **HIDE** | The ending | Nothing — nobody reaches it | World bible only |
| **Artifacts / Relics / Seals** | **MERGE** | Four reward tiers for someone who has been to one cave | Nothing | **Collapse to one: evidence you were there** |
| **Keeper (user-facing)** | **REMOVE** | Identity | Nothing — Bible §14 forbids announcing it, yet the website hero says "Become a Keeper." **A canonical identity that may never be shown is an internal term.** | Delete from all user copy |
| **Guardian Sight / AR** | **DISTRACTION (v1)** | Wonder | Nothing — rules already make it optional | **Remove from v1** |
| **AR demo** | **REMOVE** | Acquisition hook | It advertises the thing we are deferring | Delete |
| **Quizzes** | **REMOVE** | Engagement | Nothing. A multiple-choice test at a sacred site, with a *correct answer* to "what makes a land sacred" — this insults the visitor and contradicts the Product Bible's own "trust the player's intelligence" | Delete |
| **Timeline (website section)** | **HIDE** | Context | Nothing — six medieval events mean nothing to someone who hasn't been anywhere | Contextual, on place pages |
| **Portal seal interaction** | **REMOVE** | Engagement | 671 lines of reward-before-wonder on a marketing page | Keep the image, delete the mechanic |
| **Cinematic intro** | **HIDE** | Brand | Nothing on day one | Post-visit |
| **Collection UI** | **HIDE** | The look back | Nothing until it holds something | After first item |
| **Journey history** | **MERGE** | Same need as collection | — | One surface |
| **Profile** | **REMOVE** | None identified | Nothing. It is a 3-line stub because nobody needed it | Delete; account → settings |
| **Search** | **REMOVE (v1)** | Lookup | Nothing — with six places, search is absurd | v3 |
| **AI** | **REMOVE (v1)** | Matching | Nothing at six places. An editor does it better | Revisit at 100+ places |
| **Notifications** | **REMOVE (v1)** | — | Nothing. Zero permitted on site anyway | Delete the permission request |
| **Sharing features** | **REMOVE** | Telling someone | Nothing — the retellable sentence does this, and people already have messaging apps | Write the sentence, build nothing |
| **Social / friends** | **REMOVE permanently** | — | Ranking destroys journeys | Never build |
| **Subscription architecture** | **REMOVE from planning** | — | Specified in detail with zero customers | Delete from docs |
| **Gift / corporate / school / partner portal** | **REMOVE from planning** | — | Same | Delete from docs |
| **14 languages** | **HIDE** | International reach | Nothing in v1 — 14 × 64 narrations + subtitles is a multi-year cost paid before one user exists | **bg + en only** |
| **Onboarding** | **REMOVE** | — | Nothing. There is nothing to onboard | Delete |
| **Website's other 9 sections** | **REMOVE from landing** | — | Move to linked pages | Keep 5 |
| **Two 50-law rulebooks** | **MERGE** | Governance | Duplication guarantees drift | One law set |
| **26-screen reconstruction spec** | **REMOVE 18** | — | 26 surfaces for "hear about a place, go, stand there" | 5 surfaces |

---

## 5. SIMPLICITY REVIEW

**Complexity before curiosity**
`app/index.tsx` — 13 s to first action, 14.8 s to escape, no place named · `app/map.tsx` — five Предели presented simultaneously · website landing — 14 sections · `domains.cards` — five zero-progress states · meta description advertising "four Master Key Domains, a Cave gateway, permanent relics, and the Living Covenant" to a stranger.

**Explanation before wonder**
Website HowItWorks (section 4) explains the mechanic before one place has been named · the FAQ explains the progression system · `intro.tsx` delivers the mythology before desire exists · the Features grid explains eight capabilities to someone with no reason to want any.

**Structure before emotion**
The Domains section precedes any place · the Journey section teaches a five-stage hierarchy · "4 Domains · 16 Routes · 64 Checkpoints" appears in acquisition copy · the app's implicit home is the national map.

**Progression before memory**
Reward delivered at the checkpoint, adjacent to the moment · five nested reward tiers before the first artifact exists · progress indicators on domains at zero.

**Technology competing with reality**
Guardian Sight as website headline · AR demo as first hands-on experience · the portal mini-game as the hero interaction · `GeofenceWatcher` **auto-navigating into the phone at the exact second of arrival** — the single worst line of behaviour in the codebase.

**User managing the product instead of experiencing a place**
Choosing between checkpoint / route / domain purchase tiers · the auth gate · language selection before anything is wanted · field-status and connectivity banners · a quiz standing between the story and the reward · deciding which of five Предели to enter with no basis for choosing.

---

## 6. IMPLEMENTATION REVIEW — BRUTAL PRIORITY ORDER

**The 80%.** Five items. Everything else in the reconstruction spec is rounding error.

| Rank | Action | Impact | Effort | Risk | Why it dominates |
|---|---|---|---|---|---|
| **1** | **Author 6 places to the Wonder gate** — astonishment, retellable sentence, unanswered question, honest cost | Decisive | 6–12 days | Low | **Content is the critical path and no document in this proposal says so.** Every engineering roadmap here is fiction until six places exist. If you can author one place a week, the 64-checkpoint canon is a 15-month content project — plan accordingly or cut it. |
| **2** | **Delete the 14.8 s gate; app opens on a place** | Decisive | 3–5 days | Med | Largest measured defect. Converts the first impression from a trailer into a proposal. |
| **3** | **Delete geofence auto-navigation; enforce arrival silence** | Decisive | 2–3 weeks | High | The transformation happens in this minute or it does not happen. Currently the product interrupts it. |
| **4** | **Promote place pages to landing position one; cut 9 sections** | High | 2–3 days | Low | The best asset in the repository is three clicks deep behind the weakest content. |
| **5** | **Field-survey thresholds for those 6 places** | High | 3 days | Low | Gates item 3. Field work, not engineering. |

**Total: roughly six weeks of work and six authored places for ~80% of the achievable value.**

**The 5%.** Do not fund these until the above ships and produces evidence: collection UI, archive organisation, returning-visitor state, adjective linting across 14 languages, in-app map restructuring, domain gating, search, profile, reward re-siting animations, microinteractions, the Prohodna AR re-siting, subscription plumbing.

Three of those — adjective linting in 14 languages, domain gating, AR re-siting — are pure cost under this report's recommendations, because their subjects are being cut.

---

## 7. THE APPLE TEST — FIRST PRINCIPLES

**Remove the vocabulary.** A user must currently learn ten proper nouns: Keeper, Предел/Domain, Route, Checkpoint/Място, Artifact, Relic, Seal, Master Key, Living Covenant, Guardian Sight. A person driving to a cave needs **zero**. Every noun is a tax collected before any value is delivered. Keep two words in the product: **places**, and whatever you call the thing you get for going. The rest live in the world bible where writers use them and users never see them.

**Collapse the app to one screen.** Not a navigation architecture — one surface that changes state by context. At home it proposes. In the car it is silent and then reassures. At the place it disappears. Afterwards it holds the evidence. No tabs, no menu, no map, no hierarchy, no back button that matters. The proposal's 26 surfaces are a symptom of designing an information architecture for a product whose entire job is to point at the ground and then shut up.

**Delete the in-app map.** People already have a maps application they trust with their lives on unfamiliar roads. Competing with it is arrogant and expensive. Hand off. This deletes a 281-line screen, the routing problem, offline map tiles, and an entire category of failure.

**Cut AR.** See §2. The rules already prove it is optional.

**Cut to two languages.** Bulgarian master, English translation. Twelve languages are a success problem being paid for during a failure risk.

**Merge five documents into one.** Roughly 3,000 words: why we exist, how the product behaves, twenty rules that matter, and the arrival choreography in full. The arrival chapter is the only genuinely irreplaceable craft asset in the entire set — everything else is compression.

**Redesign the reward.** Four nested tiers become one: proof you stood somewhere. It does not need rarity, assembly animations, or a hierarchy. It needs a date, a place, and the weather.

---

## 8. THE USER TEST — FAMILY, TWO CHILDREN, ONE PHONE, SATURDAY

**Where they get excited** ✅
The sentence about a ceiling with two openings shaped like eyes · the number "1 h 40 from you" · "the children manage it" · the child finding the marker first · the drive home, arguing.

**Where they hesitate** ⚠️
*"Which domain?"* — no basis for choosing between five abstractions · three purchase tiers before knowing whether they like one place · account creation before value · *"what's a Предел?"* · will the AR work on a three-year-old Android · is it open · how long does it actually take.

**Where they stop reading** ⛔
The HowItWorks four-step diagram · the six-event medieval timeline · the eight-item feature grid · the FAQ · anything containing the word "Covenant."

**Where they postpone the trip** ❌
When duration and difficulty are not answered in the same breath as the invitation · when the price decision requires understanding a structure · when the product implies this is the first of sixty-four things — **scale is a reason to start later** · when nothing tells them what time to leave.

**The single fix that resolves most of the ⚠️ and ❌ column:** answer *how far, how long, how hard, what time, can the kids do it* in the same sentence as the astonishment. That is a content change, not a feature.

---

## 9. THE SMALLEST POSSIBLE UNLOCKING BULGARIA

**Six places. Two languages. One website. Three app capabilities.**

**The website** — five sections, not fourteen. One place, proposed. Two more below it. Place pages promoted to position one. The download exists to carry one intent across the boundary: *this person is going to that place.*

**The app** does exactly three things:
1. **Knows when you have arrived.**
2. **Says the right words at the right time — and is silent the rest of the time.**
3. **Works with no signal.**

Everything else it currently does belongs to the website or to nobody.

**The reward:** one object per place. Proof you stood there. A date, a place, the weather.

**The payment:** one price for one place, or a small discount for all six. No tiers, no bundles, no subscription, no entitlement hierarchy.

**What survives from the proposal, unchanged and unimprovable:** the disproportion engine, the one-astonishment rule, the arrival choreography second by second, the six silences, no music on site, no selling inside a moment, absence never rendered, the honest-cost promise. That is perhaps 3,000 words of the 24,000, and it is the good part.

**What is deleted from v1:** Domains, Routes, Master Keys, the Living Covenant, Guardian Sight and all AR, quizzes, the in-app map, profile, search, collection UI, the timeline section, the portal mechanic, onboarding, notifications, sharing features, subscription plumbing, twelve languages, and eighteen of twenty-six specified screens.

**That is well beyond 40%. It is closer to 70% — and the product is stronger, because every deleted item was competing with a person standing in a cave looking up.**

---

## 10. BOARD RECOMMENDATION

**Approved:** the philosophy, the arrival craft, the disproportion engine, the honesty about content quality.

**Rejected:** the scope, the completion arc, the AR investment, the governance volume, the 14-language commitment, and the 26-surface architecture.

**Condition of approval:** ship six places to real families and report what happened, before authoring one more document or one more rule.

**The one thing this proposal is missing, which no amount of philosophy substitutes for:**

> **Nobody has yet driven to Проходна with a stranger's family and watched their faces.**

Every number in the Rulebook marked *Requires Field Validation* — twenty of them — is a confession that this product has been designed entirely indoors. That is the actual risk. Not complexity. **Unfalsifiability.**

Go stand in the cave with someone who has never been. Then delete this report and write down what actually happened.
