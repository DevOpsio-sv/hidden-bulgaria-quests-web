# PRODUCT RECONSTRUCTION SPECIFICATION

*Implementation blueprint for the next product generation. Governed by — and subordinate to — THE_HEART_OF_THE_PROJECT, PRODUCT_MANIFESTO, EXPERIENCE_BIBLE, EXPERIENCE_RULEBOOK.*

*This document does not re-argue philosophy. It translates it. Nothing here proposes a new application: every recommendation preserves existing work and changes **when** a person encounters it.*

**The governing question throughout is not "what should exist" but "when should the user meet it."**

---

# PART 1 — CURRENT PRODUCT DIAGNOSIS

*Observed from the repository as it stands, not from intent.*

## 1.1 What a first-time user currently believes this is

**In the app:** a cinematic title sequence for a mystery game about Bulgaria. Fourteen seconds of animated reveals precede any actionable choice. No real place is named. The word most likely to form in a new user's mind is *"trailer."*

**On the website:** a well-made marketing site for an unreleased premium app with an ambitious lore system. The first interaction offered is a portal-seal mini-game.

Neither surface causes the sentence the product exists to cause — *"wait, where is that?"* [Bible §4].

## 1.2 The first five minutes, as they actually are

Evidence from `app/index.tsx`, the `TIMELINE` constant:

| Element | Appears at |
|---|---|
| Navigation | 1.5 s |
| Kicker | 3.0 s |
| Title | 4.5 s |
| Subtitle | 5.7 s |
| Body copy | 9.0 s |
| Primary CTA | **13.0 s** |
| Secondary CTA | 13.6 s |
| Skip | **14.8 s** |

A first-time user cannot act for thirteen seconds and cannot escape for fifteen. Rulebook **H-1** requires a named, located, reachable place in zero taps; **H-4** requires an involuntary reaction to a fact about the world within ten seconds. Both fail at the first frame.

The path to the first real place is: `index` → `intro` (scroll narrative) → `map` → `predel/[id]` → `route/[id]` → `checkpoint/[id]`. **Five navigations and a fourteen-second wait before the product does the one thing it exists to do.**

## 1.3 Screens that overload

**`app/index.tsx` (747 lines).** Carries a video layer, star field, audio controller, eight-stage animation sequence, language switcher, global menu and three CTAs. It is the most engineered surface in the product and the least productive.

**`app/map.tsx` (281 lines).** Presents all Предели simultaneously as cards, with progress state, field-status banner, connectivity state, geofence watchers and gated navigation. A newcomer meets the entire national structure before meeting one place [violates **M-1**, **H-3**].

**Website landing (`[lang]/index.astro`).** Fourteen sections in sequence: Hero → Band → Memory → HowItWorks → Domains → GuardianSight → Timeline → Journey → Features → Download → Partners → FAQ → Contact. The full mythology, the full progression system, the full 1345-year timeline and the complete feature grid are delivered to a stranger in one scroll [violates **H-3**, Manifesto §13].

**`PortalCard.astro` (671 lines).** The largest component on the website is an interactive seal-awakening mechanic on the hero. It rewards before wonder [Anti-pattern 1], and it is a game played indoors [Manifesto §7].

## 1.4 Concepts that appear too early

| Concept | Currently appears | Should appear |
|---|---|---|
| Domains / Предели | App map, first visit · Website section 5 | After journey 2–3 |
| Four Master Keys | Website sections 3, 5, 8 · app intro | After 2+ seals, by discovery |
| The Living Covenant | Website Journey section, publicly | Never publicly; end-state only |
| Progression hierarchy (checkpoint→route→domain→key) | Website HowItWorks, section 4 | Month 1, on request |
| The 1345-year timeline | Website section 7, six events | Contextually, at a place |
| Guardian Sight as headline capability | Website section 6, app-wide | After first unmediated visit |
| Zero-progress state (`progress: 0` on five cards in `en.json`) | Website Domains section | Never [**H-3**, **PR-2**] |
| Full catalogue scale ("4 Domains · 16 Routes · 64 Checkpoints") | Website, repeatedly | After investment [Manifesto §13] |

## 1.5 Concepts that appear too late — or not at all

| Concept | Status |
|---|---|
| A specific, named, reachable place with a reason to go | Reachable only after 5 navigations in-app |
| Distance from the user | Absent from both surfaces |
| Cost of going — duration, difficulty, season, hours, child viability | Partially present on website place pages; absent in app proposals [**D-3**] |
| "Nearby" — anything at all | **Does not exist.** No `nearby`, `discover`, `collection`, `archive` or `search` surface exists anywhere in `app/` or `components/` |
| Personal archive / journey history | Does not exist. `app/profile.tsx` is a 3-line stub |
| The retellable sentence per place | Not modelled in content [**C-1**] |
| Registered arrival threshold per place | Not modelled [**A-3**] |

## 1.6 Where curiosity is lost

**Second 0–14, app launch.** Curiosity has no object. The user is watching a sequence, not learning a fact. This is the largest single loss in the product.

**The map.** Presenting five Предели at once converts curiosity into evaluation. A person choosing between five abstractions is no longer curious; they are shopping.

**Website Domains section.** Five cards, each with a lure and `progress: 0`. The zero renders absence, which produces debt rather than appetite [**PR-3**, Manifesto §10].

## 1.7 Where momentum is lost

**Stage 6 of the emotional arc — logistics** [Bible §2]. Nothing in either surface currently answers *how far, how long, what time, is it open, will the children manage.* This is where journeys die and the product is silent there.

**Arrival.** `app/map.tsx` contains `GeofenceWatcher`, which "monitors the region's primary checkpoint and **auto-navigates on arrival**." The moment a person arrives at a real place, the product pulls their attention *into the phone*. This inverts the entire arrival chapter [**A-1** through **A-8**, four of them inviolable]. It is the single most consequential defect in the codebase.

**Post-visit.** No return experience exists. The drive home is unclaimed [Bible §10].

## 1.8 Unnecessary cognitive load

- Two parallel vocabularies in flight — `Предел/Domain`, and legacy IDs that disagree with narrative numbering (`region-1-cave-domain` holding Domain 5, Sea Gate content generated as `route-3-1`). Documented in `FOUNDATION_REVIEW.md` Issue 01 and still open.
- Website `domains.cards` presents five cards where the canon distinguishes four main + one pre-sequel — a structural distinction a newcomer has no reason to hold.
- Progression vocabulary (Artifact / Relic / Seal / Master Key / Covenant) introduced before a single artifact has been earned.

---

# PART 2 — TARGET EXPERIENCE

**The shape of the change in one line:** the product currently opens with *the world* and arrives at *a place*. It must open with *a place* and arrive at *the world*.

**Emotional sequence, first session.** Curiosity about a fact → disbelief about its proximity → the cost being answered before it is asked → a date forming → the impulse to tell someone in the room. Nothing about domains, keys, progression, or us.

**Pacing.** Fast to astonish, slow to reveal [Bible L23]. The first fact arrives before any animation completes. Everything on site slows down. Everything before the trip is brisk and practical.

**Transitions.** Each of the four transitions is currently missing or reversed and must be built as a designed handoff:
1. *Curiosity → decision* — answered by cost, not by more story.
2. *Decision → departure* — the logistics stage, currently unclaimed.
3. *Departure → arrival* — the product goes quieter as the road narrows [Bible §6].
4. *Arrival → memory* — silence, then the moment, then absence [Bible §7, §9, §10].

**Rhythm.** Breathing, not constant: expansion during discovery and travel, contraction at arrival and the moment, silence on the return.

**What the person should never notice:** that a structure exists. Structure is a reward for return visits, not an introduction.

---

# PART 3 — SCREEN-BY-SCREEN RECONSTRUCTION

*Status key: **EXISTS** · **STUB** · **NEW** (surface does not exist today) · **RETIRE**.*
*Priority: **P0** release-blocking · **P1** first reconstruction wave · **P2** second wave · **P3** later.*

---

## 3.1 — WEBSITE LANDING PAGE · `src/pages/[lang]/index.astro` — EXISTS

| Field | Content |
|---|---|
| **Current purpose** | Explain the product, the lore, the progression system and the feature set; drive app downloads and partner inquiries. |
| **Current problems** | 14 sections deliver the whole mythology and full catalogue scale to a stranger. Zero-progress states on five domain cards. Portal mini-game as first interaction. No real place is proposed with a distance and a cost. |
| **Heart principles affected** | §II (ignition, not information) · §III (what we actually make) · §VII (the loop) |
| **Manifesto principles** | §1 Product Promise · §2 First Five Minutes · §13 Progressive Disclosure |
| **Experience Bible** | §1 being let in on something · §4 first ten seconds · §5 first five minutes |
| **Rulebook violated** | **H-1** (place before product) · **H-3** (zero-states, catalogue scale, pricing) · **D-3** (uncosted proposals) · Anti-patterns 1, 4, 17 |
| **Desired purpose** | Cause one involuntary *"where is that?"* and hand over one costed, reachable proposal. |
| **Desired emotional state** | Disbelief about a fact; surprise at its proximity. |
| **Visible** | One place, named and located · its single astonishment · distance from the visitor · what it costs to go · one way to say yes. |
| **Hidden** | Domains, Master Keys, the Covenant, progression hierarchy, catalogue counts, pricing, the timeline. |
| **Removed** | `progress: 0` from all five domain cards. Portal seal mini-game as the hero interaction. |
| **Moved** | HowItWorks → a linked page. Timeline → contextual placement on place pages. Journey/progression → a linked page. Features grid → below the fold or a linked page. Domains → renamed and demoted (see 3.2). |
| **Progressive disclosure** | Section 1: one place. Sections 2–3: two more, different in character. Structure only for a visitor who scrolls past three places or navigates deliberately. |
| **Primary action** | Open the place. |
| **Secondary action** | Show me another one. |
| **What disappears** | Evaluation of us. |
| **What becomes visible** | A specific piece of ground and its distance. |
| **Exit condition** | Visitor opens a place page, or leaves able to complete *"there's a place near ___ where ___."* |
| **Success criteria** | Scroll-depth-to-first-place = 0. Place-page entry rate from landing ≥ ⚠ RFV. Time-to-first-fact ≤ 10 s [**H-4**]. |
| **Risks** | Loss of SEO surface area from moved sections — mitigated by moving, never deleting (each becomes an indexable page). Partner/investor audiences lose the scale story — mitigated by a dedicated partners page. |
| **Migration complexity** | **Low.** Reordering and moving existing components; no new content required. |
| **Priority** | **P0** |

---

## 3.2 — WEBSITE "HOME" — *conflated with Landing today*

| Field | Content |
|---|---|
| **Current purpose** | None separate. Landing and home are the same surface. |
| **Current problems** | A returning visitor gets the same first-time pitch. No state, no continuity. |
| **Rulebook** | **H-5** (home is not a destination) · Manifesto §13 |
| **Desired purpose** | For returning visitors: the next proposal, not the pitch again. |
| **Desired emotional state** | Recognition. *"They have another one."* |
| **Visible** | One new place, different in character from the last one viewed. |
| **Hidden** | Everything already shown once. |
| **Progressive disclosure** | Second visit: a second place. Third: the first hint that selection has a logic. Fourth+: structure becomes reachable. |
| **Success criteria** | Returning-visitor place-page rate exceeds first-visit rate. |
| **Migration complexity** | **Low** — client-side state only, no backend. |
| **Priority** | **P2** |

---

## 3.3 — WEBSITE PLACE PAGE · `[lang]/places/[slug].astro` — EXISTS

| Field | Content |
|---|---|
| **Current purpose** | SEO-optimised destination page. Sections: Hero, QuickFacts, TourismInfo, StoryTeaser, Media, Audio, Map, NearbyPlaces, RoutePreview, AppCTA, FAQ, JSON-LD. |
| **Current problems** | Structurally the strongest surface in the whole product — it already has QuickFacts (duration, difficulty, child-friendly, season, coordinates) and it is buried three clicks from the landing page. The story teaser risks spending the astonishment before arrival [**N-3** analogue]. |
| **Heart / Manifesto** | Heart §II · Manifesto §1 (specific, reachable, costed) — this page already fulfils the Product Promise better than any other surface. |
| **Rulebook** | Currently compliant on **D-3**. Must not violate **C-1** (retellable sentence) or spend the moment in advance. |
| **Desired purpose** | The primary conversion surface of the entire website. Promote it from leaf to hub. |
| **Desired emotional state** | *"We could actually do this on Saturday."* |
| **Visible** | Astonishment · distance · QuickFacts · one image that under-sells rather than over-sells · the retellable sentence · what the app adds on site. |
| **Hidden** | The moment. The resolution. Anything that would make being there unnecessary. |
| **Removed** | Nothing. This page loses no components. |
| **Moved** | Promoted: linked directly from landing section 1. |
| **Progressive disclosure** | Route/domain context appears **below** the practical block, not above it. |
| **Primary action** | Plan this. |
| **Secondary action** | Show me a different one. |
| **Exit condition** | A date forms, or the page is sent to another person. |
| **Success criteria** | Share-to-one-person rate ⚠ RFV. Return-visit rate to the same place page (a planning signal). |
| **Risks** | Over-telling. Editorial gate required: does the page make going less necessary? |
| **Migration complexity** | **Low** — promotion and linking, minor content policy. |
| **Priority** | **P0** |

---

## 3.4 — WEBSITE MAP · `[lang]/map.astro` + `LivingMap.astro` — EXISTS

| Field | Content |
|---|---|
| **Current problems** | Presents national structure — four Domains plus Cave Portal — to people who have not yet wanted one place. Inventory display, not a wayfinding answer [**M-1**]. |
| **Rulebook** | **M-1** purpose · **M-3** may never render completion or coverage |
| **Desired purpose** | Answer *where is that, and can I reach it* — for a place already desired. |
| **Desired emotional state** | Proximity. Ideally mild alarm at how close it is. |
| **Visible** | The place in question and its relationship to the visitor's location. |
| **Hidden** | Domain boundaries, seals, keys, coverage, completion. |
| **Removed** | Any depiction of national completeness as an enticement. |
| **Progressive disclosure** | Domain structure appears on the map only for visitors who have opened ≥3 places. |
| **Success criteria** | Map→place-page rate up; map-as-entry-point rate down. |
| **Migration complexity** | **Medium** — `LivingMap.astro` is 245 lines and structurally domain-first. |
| **Priority** | **P2** |

---

## 3.5 — WEBSITE DOMAIN PAGE · `[lang]/sea-domain.astro` — EXISTS

| Field | Content |
|---|---|
| **Current purpose** | Domain-level SEO and product page. |
| **Current problems** | Correct page, wrong audience. Currently reachable by first-time visitors. |
| **Desired purpose** | Depth for people already interested in a place inside it — and the natural home for the evicted structure content. |
| **Progressive disclosure** | Reachable from place pages; not linked from landing section 1. |
| **Migration complexity** | **Low** — linking only. |
| **Priority** | **P2** |

---

## 3.6 — WEBSITE DOWNLOAD FLOW · `DownloadCTA.astro` — EXISTS (as a section)

| Field | Content |
|---|---|
| **Current problems** | A generic download section: "app is coming, join the launch list." It sells the product, not a place. Nothing in the app awaits the person who installs. |
| **Rulebook** | **H-1** — the app they arrive into must open on a place, not a title sequence. |
| **Desired purpose** | Hand a specific intent across the boundary: *the person is downloading in order to go to a named place.* |
| **Visible** | The place they were reading about, carried into install. |
| **Hidden** | Feature lists, catalogue scale, tier structure. |
| **Success criteria** | Install→first-place-view under 30 s [depends on 3.7]. |
| **Dependencies** | 3.7 App Splash must be reconstructed first, or the handoff lands on a 14-second title sequence. |
| **Migration complexity** | **Low** on web; **blocked** by app work. |
| **Priority** | **P1** |

---

## 3.7 — APP SPLASH / OPENING · `app/index.tsx` — EXISTS · **the critical path**

| Field | Content |
|---|---|
| **Current purpose** | Cinematic brand opening — video background, star field, audio, 8-stage reveal, 3 CTAs. |
| **Current problems** | 13 s to first action, 14.8 s to skip. No place named. No fact delivered. Highest engineering investment in the product, lowest yield. |
| **Heart** | §I (a proposal, not a performance) · §II (ignition) |
| **Manifesto** | §2 First Five Minutes — *"in the first five minutes we ask for nothing"* |
| **Bible** | §4 — target state at second ten is disbelief about a fact, not admiration of a product |
| **Rulebook violated** | **H-1** INVIOLABLE · **H-3** · **H-4** · Anti-pattern 4 |
| **Desired purpose** | Deliver one fact about one reachable place, immediately. |
| **Desired emotional state** | *"Huh. Where is that?"* by second ten. |
| **Visible** | One place · one astonishment · distance · one way to say yes. |
| **Hidden** | Everything else. |
| **Removed** | The timed reveal sequence as a gate. Nothing is deleted — the cinematic becomes an *asset*, not a *toll*. |
| **Moved** | The full cinematic opening moves to `intro.tsx`, reachable on request and offered once — never on cold start. |
| **Progressive disclosure** | Day 1: one place. The cinematic is offered as *"how this began"* after the first real visit. |
| **Primary action** | Open the place. |
| **Secondary action** | Another one. |
| **What disappears** | Waiting. Watching. Evaluating. |
| **Exit condition** | The person is looking at a place, or has asked for a different one. |
| **Success criteria** | Time-to-first-named-place ≤ 3 s. Time-to-first-actionable-choice ≤ 3 s. Observed involuntary reaction ≤ 10 s, n≥20 [**H-4**]. |
| **Risks** | Perceived loss of premium feel; the cinematic represents real production investment. **Mitigation: it is preserved and re-sited, not discarded** — and it will be seen by more people after a visit than it currently is before one. |
| **Migration complexity** | **Medium.** 747 lines, but the change is deletion of a gate plus a new proposal surface. No backend. |
| **Priority** | **P0 — highest single-change leverage in the product.** |

---

## 3.8 — APP INTRO · `app/intro.tsx` — EXISTS

| Field | Content |
|---|---|
| **Current purpose** | Scroll-driven mythological narrative — hero question, living Europe map, continuity steps. |
| **Current problems** | Excellent work, wrong position. It is mythology delivered before desire [Manifesto §13]. |
| **Desired purpose** | The reward for a person who has already stood somewhere. |
| **Desired emotional state** | *"So that's what I was standing in."* |
| **Moved** | From mandatory second step → optional, offered after journey 1. |
| **Removed** | Nothing. Zero content loss. |
| **Exit condition** | Person returns to a place proposal. |
| **Success criteria** | Completion rate post-visit exceeds current pre-visit completion rate. |
| **Migration complexity** | **Low** — routing and trigger change only. |
| **Priority** | **P1** |

---

## 3.9 — NEARBY — **NEW**

| Field | Content |
|---|---|
| **Current status** | Does not exist. No `nearby` surface in `app/` or `components/`. |
| **Desired purpose** | The app's default state: what is astonishing within reach of where you are standing right now. |
| **Desired emotional state** | *"That is twenty minutes away and I have never heard of it."* |
| **Visible** | ≤3 places [**D-5**], each with astonishment, distance, cost. |
| **Hidden** | Everything structural. |
| **Progressive disclosure** | This is the Day-1 surface. It never gains complexity as the catalogue grows [**D-5**]. |
| **Primary action** | Open a place. |
| **Exit condition** | A place is opened or a date forms. |
| **Success criteria** | Proposal→place-open rate. Place-open→visit rate within 30 days. |
| **Risks** | Sparse coverage outside content-complete regions. **Mitigation:** honest empty state that proposes the nearest reachable place with its true distance — never a filler place [**D-6**]. |
| **Dependencies** | Existing geofence service and checkpoint coordinates already provide the data. |
| **Migration complexity** | **Medium** — new surface, existing data. |
| **Priority** | **P1** |

---

## 3.10 — DISCOVER — **NEW / merge**

| Field | Content |
|---|---|
| **Recommendation** | **Do not build a separate Discover surface.** Nearby (3.9) *is* discovery. A second browsing surface duplicates it and creates the catalogue feeling **H-5** forbids. |
| **What it becomes** | A single "show me another" action inside Nearby. |
| **Priority** | **N/A — deliberately not built.** Logged as Decision D-6 in Part 9. |

---

## 3.11 — APP MAP · `app/map.tsx` — EXISTS

| Field | Content |
|---|---|
| **Current purpose** | National hub. All Предели as cards, progress, geofence watchers, field/connectivity status. |
| **Current problems** | Structure-first. It is the app's implicit home and presents the whole country before one place. Contains the arrival auto-navigation defect (see 3.14). |
| **Rulebook** | **M-1** · **M-3** · **M-4** navigation ends at arrival |
| **Desired purpose** | Wayfinding for a chosen place; national structure as a later reward. |
| **Desired emotional state** | Orientation, not evaluation. |
| **Visible** | The chosen place and the route to it. |
| **Hidden** | Predel cards for a first-time user; completion state at all times. |
| **Moved** | `GeofenceWatcher` auto-navigation → the new Arrival surface, with the silences enforced. |
| **Progressive disclosure** | Predel structure appears after 2–3 completed places. |
| **Migration complexity** | **Medium–High** — 281 lines, structurally domain-first, and it owns the geofence. |
| **Priority** | **P1** (arrival extraction is **P0**) |

---

## 3.12 — PREDEL / DOMAIN · `app/predel/[id].tsx`, `app/domain/[id].tsx` — EXISTS

| Field | Content |
|---|---|
| **Current problems** | Reachable on day 1. Presents the four-key structure before any key means anything. |
| **Desired purpose** | The month-1 reveal: the shape behind the choices, discovered rather than announced. |
| **Desired emotional state** | *"These weren't random."* |
| **Removed** | Nothing. |
| **Moved** | Behind a threshold of ≥2 completed places, or deliberate navigation. |
| **Progressive disclosure** | Never surfaced automatically before the threshold. |
| **Migration complexity** | **Low** — gating only. |
| **Priority** | **P2** |

---

## 3.13 — ROUTE · `app/route/[id].tsx` — EXISTS

| Field | Content |
|---|---|
| **Current problems** | The route is the purchasable unit and therefore leads. For a first-time user it is a commitment shown before a single place has proven itself. |
| **Desired purpose** | The natural second question: *"there are more like that one?"* |
| **Desired emotional state** | Appetite, not obligation. |
| **Hidden** | Relic/seal framing until the first artifact is held. |
| **Progressive disclosure** | Route offered after one place is completed, never before. |
| **Success criteria** | Route open rate *after* first completion vs before. |
| **Migration complexity** | **Low** — sequencing. |
| **Priority** | **P1** |

---

## 3.14 — ARRIVAL — **NEW as a designed surface** · currently implicit in `GeofenceWatcher`

| Field | Content |
|---|---|
| **Current behaviour** | Geofence detects arrival and **auto-navigates into the checkpoint**. The person's attention is pulled to the phone at the exact second it should be released. |
| **Heart** | §III — the instant knowledge lands in a body standing in the right place |
| **Bible** | §7 in full — the most important chapter in the experience canon |
| **Rulebook violated** | **A-1** · **A-2** INVIOLABLE · **A-4** INVIOLABLE · **A-5** INVIOLABLE · **A-7** INVIOLABLE · **A-8** INVIOLABLE · **AT-1** · Anti-patterns 1, 3, 7 |
| **Desired purpose** | Get out of the way, correctly, on a schedule. |
| **Desired emotional state** | 0–30 s orientation → 30–90 s anticipation → first look unaccompanied → the question forms on its own. |
| **Visible** | 0–30 s: one sentence — you are here, walk that way. Then nothing until the gap ends. |
| **Hidden** | Story, rewards, counters, AR, notifications, sound, haptics. |
| **Removed** | Auto-navigation on geofence trigger. |
| **Moved** | Checkpoint content now begins **after** the gap, on the person's initiative. |
| **Progressive disclosure** | Content is offered, never launched. |
| **Primary action** | None for the first 30–90 seconds. This is the design. |
| **Exit condition** | The person asks for the story after the gap. |
| **Success criteria** | Zero product-originated output events in the protected windows [**A-2**, **A-4**, **A-5**]. Screen-active time under 25% of dwell [**AT-1**]. |
| **Risks** | Users interpreting silence as breakage [**S-3** — the hardest craft problem in the product; must not be solved by adding content]. |
| **Dependencies** | **A-3** — every place needs a registered threshold position and bearing. This is field work, not engineering, and it gates the whole surface. |
| **Migration complexity** | **Medium** engineering, **High** field-data. |
| **Priority** | **P0** |

---

## 3.15 — PLACE / CHECKPOINT · `app/checkpoint/[id].tsx` — EXISTS

| Field | Content |
|---|---|
| **Current purpose** | Story delivery, quiz, artifact reward, AR entry. |
| **Current problems** | Entered automatically on arrival. Delivers structure (route progress, artifact, key alignment) alongside story. |
| **Rulebook** | **P-1** one idea per stop · **P-2** 3–5 stops · **P-3** exactly one moment · **P-4** unanswered question · **P-7** interruptible · **AT-1** |
| **Desired purpose** | Deliver one idea per stop, then withdraw. |
| **Visible** | The current idea and the thing it points at. |
| **Hidden** | Progress, artifact, route context, key alignment — until departure. |
| **Removed** | Nothing. |
| **Moved** | All reward and progress framing → post-departure. |
| **Success criteria** | ≤2 required interactions per stop [**AT-2**]. Exit interviews confirm the unanswered question [**P-4**]. |
| **Migration complexity** | **Medium.** |
| **Priority** | **P1** |

---

## 3.16 — QUEST / QUIZ · `app/quiz/[id].tsx` — EXISTS

| Field | Content |
|---|---|
| **Current problems** | Quiz sits between story and reward as a gate. Structurally it risks becoming the reason people are there [**Q-5**]. |
| **Rulebook** | **Q-1** one active objective · **Q-3** silent abandonment · **Q-5** subordination INVIOLABLE |
| **Desired purpose** | A reason and a permission to be there — never a test. |
| **Desired emotional state** | An errand with a secret. Never homework. |
| **Visible** | One objective at a time. |
| **Removed** | Any framing that can be failed [**P-8**]. |
| **Success criteria** | Removal test [**Q-5**]: strip the quest and measure whether desire to go survives. |
| **Migration complexity** | **Low–Medium** — mostly copy and framing. |
| **Priority** | **P2** |

---

## 3.17 — STORY / NARRATION · `components/guru/`, `GuruNarration.tsx` — EXISTS

| Field | Content |
|---|---|
| **Rulebook** | **N-1** ≤90 s segments · **N-2** trailing silence INVIOLABLE · **N-3** meeting-room test · **N-4** pointing requirement · **N-7** interpretation labelling INVIOLABLE · **N-8** no music INVIOLABLE · **N-9** adjective ban |
| **Desired purpose** | Make the ground readable, then stop. |
| **Visible** | One segment, pointing at one visible thing. |
| **Removed** | Any on-site music. Banned adjectives across all 14 languages. |
| **Success criteria** | Automated lint pass on adjectives. Asset audit: no segment >90 s, no zero trailing silence. |
| **Risks** | The Prohodna Guru monologue brief specifies 8 beats totalling ~450 words — likely to exceed **N-1** as a single segment. **Resolution: segment it across stops, do not shorten it.** |
| **Migration complexity** | **Medium** — content restructuring, no rewriting. |
| **Priority** | **P1** |

---

## 3.18 — GUARDIAN SIGHT · `app/ar/[id].tsx`, `app/ar-demo.tsx`, `GuardianCamera.tsx` — EXISTS

| Field | Content |
|---|---|
| **Current problems** | Positioned as the headline capability on the website and offered early in-app. `ar-demo.tsx` is a guest hook. Prohodna's conception has the AR "Eyes awakening" as the emotional peak. |
| **Rulebook** | **AR-1** never first INVIOLABLE · **AR-2** AR is never the moment INVIOLABLE · **AR-4** non-AR parity INVIOLABLE · **AR-5** silent degradation · **AR-6** camera down ends AR |
| **Desired purpose** | Deepen a relationship that already exists with a place. |
| **Desired emotional state** | *"So that's what I was looking at."* — after, never instead. |
| **Visible** | Offered after the gap, on request only. |
| **Hidden** | Absent entirely from arrival and from the moment. |
| **Moved** | From peak → afterword. |
| **Success criteria** | Zero AR activations before gap end. Every place completes end-to-end with the camera disabled [**AR-4**]. |
| **Risks** | **Direct conflict with the Prohodna design** — flagged as Decision D-4 in Part 9. This is the most consequential unresolved question in the specification. |
| **Migration complexity** | **Medium** engineering; **High** narrative, because Prohodna's peak must be re-sited to the unmediated ceiling. |
| **Priority** | **P0 for the timing rule; P1 for Prohodna re-siting.** |

---

## 3.19 — REWARD · `app/reward/[id].tsx`, `RewardMemory.tsx` — EXISTS

| Field | Content |
|---|---|
| **Current problems** | Reward sits at the checkpoint, adjacent to the moment. |
| **Rulebook** | **A-7** arrival unrewarded INVIOLABLE · **MEM-1** the moment is never captured by us INVIOLABLE · Anti-patterns 1, 3 |
| **Desired purpose** | Evidence that a day happened — collected quietly, seen later. |
| **Moved** | Reward reveal → after departure from the site, not at the moment. |
| **Removed** | Celebratory sound and haptic on site [**A-7**, **S-2**]. |
| **Migration complexity** | **Low–Medium** — timing change. |
| **Priority** | **P1** |

---

## 3.20 — COLLECTION / ARCHIVE — **NEW**

| Field | Content |
|---|---|
| **Current status** | Does not exist. |
| **Rulebook** | **PR-6** eligibility INVIOLABLE · **PR-7** organised by memory · **PR-2** no zero states · **MEM-2** evidence not content · **MEM-3** no selling INVIOLABLE |
| **Desired purpose** | The look back, years later. |
| **Desired emotional state** | *"That was the day the wind was awful."* |
| **Visible** | Only after the first item exists [**PR-2**]. Organised by when, who with, conditions, what happened. |
| **Hidden** | Anything missing. No empty slots, no silhouettes [**PR-3**]. |
| **Migration complexity** | **Medium** — new surface; existing artifact data model suffices. |
| **Priority** | **P2** |

---

## 3.21 — PROFILE · `app/profile.tsx` — **STUB (3 lines)**

| Field | Content |
|---|---|
| **Current status** | Effectively does not exist. |
| **Recommendation** | Do not build a profile. Build the archive (3.20). A profile displays a person to themselves as a set of statistics; an archive displays their days. |
| **Rulebook** | **PR-1** no global completion INVIOLABLE · **PR-3** absence never rendered INVIOLABLE · **MEM-5** never surfaced INVIOLABLE |
| **What it becomes** | Account and entitlements move to Settings. Identity is expressed by the archive. |
| **Priority** | **P3 — deliberately minimal.** |

---

## 3.22 — JOURNEY HISTORY — **NEW · merge with 3.20**

| Recommendation | Not a separate surface. Journey history *is* the archive's organising principle [**PR-7**]. Building both produces two competing records of the same days. |
|---|---|
| **Priority** | **N/A — folded into Collection.** |

---

## 3.23 — SEARCH — **NEW**

| Field | Content |
|---|---|
| **Recommendation** | **Do not build search before journey 5.** Search answers the question the person already thought to ask [Manifesto §2] — it is definitionally downstream of demand and cannot serve a person who does not know what exists. |
| **When it earns existence** | After ~5 places, when a person has enough of a mental map to look something up. Then it is a convenience, not a discovery surface. |
| **Priority** | **P3.** Logged as Decision D-7. |

---

## 3.24 — SETTINGS · `app/settings.tsx` — EXISTS

| Field | Content |
|---|---|
| **Rulebook** | **AR-4** non-AR parity must be trivially reachable · Manifesto §12 no setting a default could decide |
| **Desired purpose** | Language, accessibility, offline preparation, entitlement restore. Nothing decorative. |
| **Removed** | Any setting a well-chosen default could decide. |
| **Priority** | **P2** |

---

## 3.25 — AUTH GATE · `app/auth/gate.tsx`, `login`, `register` — EXISTS

| Field | Content |
|---|---|
| **Rulebook** | **H-1** — no account request may precede a named place. Manifesto §2 — in the first five minutes we ask for nothing. |
| **Desired purpose** | Appears at the moment of protecting investment — before purchase, before saving a first artifact. Never before. |
| **Success criteria** | Zero auth prompts in the first session before a place has been opened. |
| **Migration complexity** | **Low** — trigger placement. |
| **Priority** | **P1** |

---

## 3.26 — SUBSCRIPTION / PURCHASE · `app/subscription.tsx` — EXISTS

| Field | Content |
|---|---|
| **Rulebook** | **MEM-3** no selling in memory surfaces INVIOLABLE · **S-4** contact blackout · Anti-patterns 22, 23 · Manifesto §7 story first, price after |
| **Desired purpose** | A calm, single-screen decision reached after desire exists. |
| **Removed** | Any commercial element between arrival and departure [Anti-pattern 22]. Any next-place proposal on the day of a completed visit [**S-4**]. |
| **Priority** | **P1** |

---

# PART 4 — THE NEW INFORMATION ARCHITECTURE

*Everything must earn its visibility. Nothing is deleted; everything is scheduled.*

| Horizon | Visible | Reachable on request | Not yet |
|---|---|---|---|
| **Day 1** | One place · astonishment · distance · cost · one yes. ≤3 proposals total. | Practical detail, accessibility, offline | Domains, routes, keys, progression, collection, account, price, catalogue scale, the cinematic |
| **Week 1** *(places 1–3)* | A second and third place, different in character. The first artifact, after departure. | Route — *"there are more like that"* · the cinematic intro as afterword | Domain structure, seals, Master Keys, the Covenant |
| **Month 1** *(places 4–10)* | Route completion and its relic. The archive, once it holds something. | Domain structure — discovered, never announced · the timeline, contextually | Master Keys as a system, the Covenant, national completion |
| **Journey 10** | Domain seal. The sense that domains cohere. | Master Keys as a forming pattern · search, as convenience | The Covenant formula |
| **Journey 50** | Master Keys as an explicit system. Cross-domain arcs. | Seasonal returns, second visits under different conditions | The Covenant until all four keys |
| **Journey 100** | The Living Covenant. Role rather than consumption: bringing others, deep season work. | Everything | — |

**Structural rule governing the whole table:** the number of decisions on the primary surface is constant across all six horizons [**D-5**, **H-2**, Manifesto §12]. Only the *reachable* column grows.

---

# PART 5 — FEATURE RECLASSIFICATION

**FOUNDATION** — load-bearing, present from the start, mostly invisible.
**VISIBLE** — on the primary surface from day 1.
**CONTEXTUAL** — appears when circumstances make it meaningful.
**OPTIONAL** — always available, never required, never the reason.
**ADVANCED** — earned by depth.
**HIDDEN** — exists and functions; not surfaced until a threshold.
**LEGACY** — preserved, re-sited, no longer load-bearing where it currently sits.

| Feature | Class | Why |
|---|---|---|
| **Places / checkpoints** | **VISIBLE** | The product. Everything else is scheduling around this. |
| **Astonishment per place** | **FOUNDATION** | The engine [Manifesto §4]. Content property, never a UI element. |
| **Distance & cost** | **VISIBLE** | Without them a proposal is a poster [**D-3**]. |
| **Nearby** | **VISIBLE** | The day-1 surface. |
| **Map** | **CONTEXTUAL** | Answers *where is that* for a place already wanted [**M-1**]. |
| **Routes** | **CONTEXTUAL** | Appears after one place proves itself. Remains the purchase unit. |
| **Domains / Предели** | **HIDDEN → ADVANCED** | Full content preserved; surfaced from ~journey 3. |
| **Master Keys** | **ADVANCED** | Meaningless before 2+ seals; a discovery, not an announcement. |
| **Living Covenant** | **HIDDEN** | Endgame only. Must not appear in public marketing [Bible §9 — never announce a moment in advance]. |
| **Keeper identity** | **HIDDEN — never announced** | Self-diagnosed, never conferred [Bible §14]. No badge, ever. |
| **Quests / quizzes** | **CONTEXTUAL** | A reason and a permission [Manifesto §7]. Subordinate to place [**Q-5**]. |
| **Artifacts** | **CONTEXTUAL** | Revealed after departure, not at the moment. |
| **Relics / Seals** | **ADVANCED** | Route and domain scale. |
| **Guardian Sight** | **OPTIONAL** | Never first, never the moment, full non-AR parity [**AR-1**, **AR-2**, **AR-4**]. |
| **AR demo** | **LEGACY** | Valuable as a guest hook on web; must not be the app's first impression. |
| **Cinematic intro** | **LEGACY** | Preserved in full; re-sited to post-visit. |
| **Progression display** | **HIDDEN** | No global completion, ever [**PR-1**]. |
| **Collection / archive** | **CONTEXTUAL** | Appears when it holds something [**PR-2**]. |
| **Journey history** | **FOUNDATION** | The archive's organising principle, not a separate feature. |
| **Recommendations** | **FOUNDATION** | Must be defensible by a human sentence; popularity is not a reason [**D-7**]. |
| **AI** | **FOUNDATION (invisible)** | Permitted only for matching place to person/place/time. Never a visible persona, never a chat surface, never a narrator. It may reduce decisions; it may never add one. |
| **Search** | **ADVANCED** | Downstream of demand; earns existence around journey 5 [3.23]. |
| **Audio / narration** | **CONTEXTUAL** | Governed by §7 of the Rulebook. No music on site, ever [**N-8**]. |
| **Profile** | **LEGACY** | Replaced by the archive; account functions move to Settings. |
| **Friends / social** | **NOT INTRODUCED** | Any surface where journeys can be compared is forbidden [**M-3**, **MEM-5**]. Sharing is one-to-one only [Bible §11]. |
| **Notifications** | **CONTEXTUAL, severely bounded** | Zero on site [**A-8** INVIOLABLE]. None triggered by non-completion [**Q-3**]. |
| **Offline** | **FOUNDATION** | Assume no signal [**AT-6**]. |
| **Accessibility** | **FOUNDATION** | Gate **G-6**; never a setting to discover. |
| **Partnerships** | **FOUNDATION (external)** | Gate **G-11**; community consent is inviolable [**C-4**]. |

---

# PART 6 — FIRST-TIME USER RECONSTRUCTION

*What the person believes. Not what they see.*

**Minute 0.** *"Something is already happening."* No welcome, no explanation. A fact about a piece of ground.

**Minute 1.** *"That cannot be forty minutes away."* Disbelief has moved from the fact to the distance. They have not thought about the product once.

**Minute 2.** *"So we'd leave around nine."* The cost has been answered before they thought to ask. A shape of a day exists.

**Minute 5.** *"There's a place near Lovech where the ceiling has two holes in it shaped like eyes."* They can say the sentence. Ideally they have said it out loud to someone in the room. They still do not know what this product is, and it has not mattered.

**Minute 10.** *"There's more than one of these."* A second place, different in character. The suspicion begins: someone chose these.

**Hour 1.** *"We're going Saturday."* Declared to another person. Past the point of no return, and it happened away from the screen.

**Weekend 1 — the drive out.** *"How much further?"* Rising, ordinary. The product is quiet and becomes quieter as the road narrows. In the last kilometre it says only: yes, this road.

**Journey 1 — arrival.** For thirty seconds: where to walk. Then nothing. They walk in. They look up. Nobody tells them what they are looking at. Ninety seconds later a question forms on its own — *what is this?* — and only then do they reach for the answer.

**Journey 1 — the drive home.** Silence for fifteen minutes. Then the car will not stop talking. The product is absent and is the cause.

**Days later.** *"Where's the next one?"* The appetite returns after they have told someone [Bible §10, **S-4**].

**Journey 5.** *"I'm someone who does this now."* Identity. They notice the choices are not random. They begin recommending unprompted.

**Journey 20.** *"I know this country differently."* Fluency. A smooth rise in a field reads as *not a hill*. Structure has become visible — because they went looking for it, not because it was announced.

**Journey 50.** *"I'm responsible for this."* Protectiveness. Correcting strangers. Taking someone. The first time that person has the moment, they become something they will never be told they are.

**Journey 100.** *"I want to bring people here."* Consumption has become custodianship. The role, not more content, is what we owe them [Bible §13].

---

# PART 7 — WEBSITE vs APP

**One rule: the website makes the case for a place. The app is only useful when you are moving toward one.** No surface may do both.

| | Website | App |
|---|---|---|
| **Owns** | Inspiration · planning · the argument for going · SEO discovery · partnerships · press | Being nearby · going · arriving · being there · returning · remembering |
| **Best moment** | Sofa, Tuesday evening, someone else in the room | In the car; standing in a field |
| **Inspiration** | **Primary** — place pages are the strongest conversion asset in the product | Secondary — Nearby, for people already out |
| **Planning** | **Primary** — QuickFacts already do this better than anything in the app | Supporting — offline preparation, departure timing |
| **Action** | Hands over one intent, then stops | **Sole owner** |
| **Memory** | Nothing | **Sole owner** — the archive never appears on the web |
| **Never does** | Simulate the visit. Answer the question that only presence can answer. | Sell the concept. Explain the product. Be enjoyable to browse at home [**H-5**]. |

**The handoff.** A person installs *in order to go to a named place.* That intent must survive the boundary. Today it is lost — the website hands over a general enthusiasm and the app opens on a title sequence.

**The reverse handoff.** After a visit, the website is where the story deepens — timeline, domain context, the mythology. The app stays quiet [Bible §10].

---

# PART 8 — IMPLEMENTATION ROADMAP

*BV = business value · UV = user value · R = risk · C = complexity · Ind. = ships independently*

## Phase 0 — Documentation only, no development

| # | Task | BV | UV | R | C | Dependencies | Effort | Ind. |
|---|---|---|---|---|---|---|---|---|
| 0.1 | Ratify Part 9 decisions with the project owner | Critical | — | Low | Low | — | 1 session | ✓ |
| 0.2 | Resolve open ID/canon mismatch (`FOUNDATION_REVIEW` Issue 01) | High | Med | Low | Low | — | 1–2 d | ✓ |
| 0.3 | Author the astonishment + retellable sentence + unanswered question for every published place [**D-1**, **C-1**, **P-4**] | Critical | Critical | Low | Med | — | 1–2 d per place | ✓ |
| 0.4 | Field-survey and register arrival thresholds [**A-3**] | Critical | Critical | Med | Med | Site access | 0.5 d per place | ✓ |
| 0.5 | Set owners and dates for the 20 ⚠ RFV items | Med | Med | Low | Low | — | 1 session | ✓ |
| 0.6 | Split remaining lore from `THE_HEART_OF_THE_PROJECT.md` v1 into `WORLD_BIBLE.md` | Med | — | Low | Low | — | 0.5 d | ✓ |

## Phase 1 — Copy, hierarchy, visibility, disclosure. No backend.

| # | Task | BV | UV | R | C | Dependencies | Effort | Ind. |
|---|---|---|---|---|---|---|---|---|
| 1.1 | **Remove the 14.8 s gate in `app/index.tsx`; open on one place** [3.7] | Critical | Critical | Med | Med | 0.3 | 3–5 d | ✓ |
| 1.2 | Re-site the cinematic to post-visit `intro.tsx` [3.8] | Med | High | Low | Low | 1.1 | 1–2 d | ✓ |
| 1.3 | Reorder website landing; move HowItWorks / Timeline / Journey / Features to linked pages [3.1] | High | High | Med (SEO) | Low | — | 2–3 d | ✓ |
| 1.4 | Remove `progress: 0` from all domain cards [**H-3**, **PR-2**] | Med | Med | Low | Trivial | — | 1 h | ✓ |
| 1.5 | Promote place pages to landing section 1 [3.3] | Critical | High | Low | Low | 1.3 | 1 d | ✓ |
| 1.6 | Adjective lint across 14 languages [**N-9**] | Med | Med | Low | Low | — | 1–2 d | ✓ |
| 1.7 | Gate Predel/Domain surfaces behind ≥2 completions [3.12] | Med | High | Low | Low | — | 1–2 d | ✓ |
| 1.8 | Move auth prompts behind first place-open [3.25] | Med | High | Low | Low | — | 1 d | ✓ |

## Phase 2 — UX restructuring

| # | Task | BV | UV | R | C | Dependencies | Effort | Ind. |
|---|---|---|---|---|---|---|---|---|
| 2.1 | Build **Nearby** as the default app surface [3.9] | Critical | Critical | Med | Med | 1.1, 0.3 | 2–3 wk | ✗ (needs 1.1) |
| 2.2 | Restructure `app/map.tsx` to wayfinding [3.11] | High | High | Med | High | 2.1 | 2–3 wk | ✗ |
| 2.3 | Route offered post-first-completion [3.13] | Med | Med | Low | Low | 2.1 | 3–5 d | ✓ |
| 2.4 | Enforce **D-5** proposal ceiling across all surfaces | Med | High | Low | Low | 2.1 | 2–3 d | ✓ |
| 2.5 | Website returning-visitor state [3.2] | Med | Med | Low | Low | 1.3 | 3–5 d | ✓ |

## Phase 3 — Interaction redesign

| # | Task | BV | UV | R | C | Dependencies | Effort | Ind. |
|---|---|---|---|---|---|---|---|---|
| 3.1 | **Extract Arrival from `GeofenceWatcher`; remove auto-navigation; enforce the silences** [3.14] | Critical | Critical | **High** | High | 0.4 | 3–4 wk | ✗ |
| 3.2 | Solve **S-3** — intentional silence must not read as breakage, without adding content | High | Critical | **High** | High | 3.1 | 2 wk + field | ✗ |
| 3.3 | Re-site Guardian Sight to post-gap, request-only [3.18] | High | High | **High** | Med | 3.1 | 2 wk | ✗ |
| 3.4 | Re-site Prohodna's peak from AR to the unmediated ceiling [**AR-2**] | High | Critical | **High** | Med | 3.3, D-4 | 1–2 wk | ✗ |
| 3.5 | Move reward reveal to post-departure [3.19] | Med | High | Low | Med | 3.1 | 1 wk | ✓ |
| 3.6 | Segment narration to ≤90 s with enforced trailing silence [3.17] | Med | High | Low | Med | — | 1–2 wk | ✓ |
| 3.7 | Full non-AR parity audit — every place completes camera-disabled [**AR-4**] | High | Critical | Med | Med | 3.3 | 1 wk | ✓ |
| 3.8 | Return experience — silence window, then nothing [**S-4**] | High | High | Low | Med | 3.1 | 1 wk | ✓ |

## Phase 4 — Polish

| # | Task | BV | UV | R | C | Dependencies | Effort | Ind. |
|---|---|---|---|---|---|---|---|---|
| 4.1 | Remove all on-site music [**N-8**] | Med | High | Low | Low | — | 2–3 d | ✓ |
| 4.2 | Remove arrival sound/haptic/celebration [**A-7**] | Med | High | Low | Low | 3.1 | 2 d | ✓ |
| 4.3 | Field-conditions test protocol [**AT-6**] | High | High | Low | Med | 3.1 | 1 wk/cycle | ✓ |
| 4.4 | Build the archive [3.20] | Med | High | Low | Med | 3.5 | 2–3 wk | ✓ |
| 4.5 | Instrument **AT-1** screen-active ratio per place | High | Med | Low | Med | 3.1 | 1 wk | ✓ |

## Phase 5 — Future

| # | Task | Notes |
|---|---|---|
| 5.1 | Search, if journey-5 evidence supports it [3.23] | Deliberately deferred |
| 5.2 | Seasonal returns and second-visit propositions [**G-12**] | Serves journey 20+ |
| 5.3 | The custodial role for journey 50+ [Bible §13] | Not more content — a role |
| 5.4 | Replace ⚠ RFV numbers with observed data | Continuous |

**Highest leverage per unit of work: 1.1, 1.3, 1.5, and 3.1.** The first three are days of effort against the two surfaces every user meets. The fourth is the largest single defect in the product.

---

# PART 9 — DECISION LOG

*Owner approval required. Nothing below has been silently decided.*

**D-1 · Should the app's first screen be a place or the cinematic?**
*For cinematic:* premium signal, real production investment, differentiates from utility apps, sets the mythic register the brand rests on.
*For place:* the Rulebook makes it inviolable [**H-1**]; 13 seconds to first action is the largest measured defect; the cinematic is preserved, not lost.
**Recommend: place.** The cinematic is re-sited, not deleted, and will reach more people after a visit than it currently does before one — because more people will have visited.

**D-2 · Should Domains exist on day 1?**
*For:* they are the canonical structure, the purchase unit above route, and months of content are organised by them.
*Against:* structure before desire produces evaluation, not curiosity.
**Recommend: hidden until ≥2 completions.** No content changes; a gating change only.

**D-3 · Should Home exist as a browsable surface?**
*For:* conventional, supports campaigns, gives returning users a hub.
*Against:* **H-5** — a Home enjoyable to browse competes with going.
**Recommend: Nearby replaces Home in the app. Website keeps a landing surface that proposes rather than explains.**

**D-4 · Should Guardian Sight remain the peak of Prohodna? — the most consequential decision here**
*For keeping:* it is the designed emotional climax, the paid demo's differentiator, and the visual identity of the whole product.
*Against:* **AR-2** forbids AR being the moment, and **AR-1** forbids anything mediating a first look. Prohodna's true moment is a person standing under two holes in a limestone ceiling looking up — which needs no technology and cannot be improved by any.
**Recommend: the moment is the unmediated ceiling; Guardian Sight becomes the afterword.** This *strengthens* the product — the astonishment is free, unbreakable by device or weather, and works for every visitor including those who never open the camera. If the owner disagrees, this requires a written waiver against an inviolable rule.

**D-5 · Should the Map be primary in the app?**
*For:* it is the current hub and holds the geofence.
*Against:* **M-1** — the map answers *where is that*, and that question requires a place first.
**Recommend: demote to wayfinding.** Extract the geofence to Arrival regardless of this decision.

**D-6 · Should a separate Discover surface be built?**
*For:* conventional; supports browsing.
*Against:* duplicates Nearby and creates the catalogue feeling.
**Recommend: no. One surface, one "another one" action.**

**D-7 · Should Search exist before journey 5?**
*For:* users expect it; supports people with a specific destination in mind.
*Against:* search is downstream of demand and cannot serve someone who does not know what exists [Manifesto §2].
**Recommend: defer to Phase 5.**

**D-8 · Should users freely browse the full catalogue?**
*For:* respects autonomy; helps planners.
*Against:* **D-5** ceiling; browsing converts curiosity into shopping.
**Recommend: ≤3 proposals on primary surfaces; full browsing available one level down, deliberately reached — never the default.**

**D-9 · When does someone become a Keeper?**
*For a threshold (e.g. a seal):* legible, celebratable, marketable.
*Against:* [Bible §14] — announcing it makes it a title, and titles are worn, not carried.
**Recommend: never conferred by the product.** The vocabulary stays in the world and the lore; the product never tells a person they are one.

**D-10 · Should the website keep the portal-seal interaction?**
*For:* engaging, distinctive, 671 lines of existing work, measurable interaction.
*Against:* reward before wonder [Anti-pattern 1]; a game played indoors.
**Recommend: retain the visual, remove the reward loop.** Keep it as an image of Prohodna that draws the eye; remove "awaken the seal" as an achievement.

**D-11 · Should the Living Covenant appear in public marketing?**
*For:* it is the most distinctive asset the project owns.
*Against:* [Bible §9] never announce a moment in advance. It currently appears on the public site.
**Recommend: remove from public marketing.** Keep the central *question* public; keep the answer earned.

**D-12 · Does the Cave Domain remain the MVP slice?**
*For:* Prohodna is content-complete-ish, high-astonishment, and commercially proven as an entry price point.
*Against:* nothing — it satisfies **D-2**'s four-part test better than any other content in the repository.
**Recommend: yes, unchanged.** This spec does not disturb the commercial plan.

---

# PART 10 — THE FINAL PRODUCT WALKTHROUGH

**Friday, 21:40.** Nikolay is on the sofa. He is not looking for anything. He opens the app the way people open things — without intent.

Something is already there. Not a welcome. A sentence about a cave ceiling with two openings in it, side by side, that people have been standing underneath and looking up at for longer than anyone has records for. Underneath: *1 h 40 from you.*

He reads it twice. The second time he says it out loud, which is how his wife finds out about it. She asks where. He does not fully know. It says the road is fine, the walk is short, that children manage it, that the light is best in the morning.

They agree to leave at eight. It takes about ninety seconds and neither of them thinks about an app again.

**Saturday, 08:10.** The car is loud. The phone is quiet. Around Botevgrad his daughter reads something aloud from the back seat — a question with no clean answer, about what it would mean for a place to have been watching. They argue about it for eleven kilometres and get nowhere, which is the point.

**09:35.** The road narrows and the signs stop. Nikolay begins to doubt. The phone, which has said nothing for forty minutes, says one thing: *yes — this road.*

**09:48. Arrival.** Doors, bags, the lock, the toilet question. One sentence tells him he is here and points along the path. Then nothing.

They walk. It takes about a minute. The sound changes before the light does — the air gets cooler and something above them opens up. Nobody says anything, because the phone is in his pocket and there is nothing to look at on it.

His daughter sees it first and stops walking.

They stand there. Two openings in a hundred feet of rock, in the exact shape of what everyone who has ever stood here has thought they were. Nobody narrates it. For a minute and a half the four of them are alone with a ceiling.

And then, because that is what happens when you have finished looking, a question arrives on its own: *what is this?*

Now he takes out the phone. A short passage, quietly, pointing at the stone above the left opening. One idea. Then it stops, and the silence afterwards is longer than feels comfortable, and in that silence he looks up again — differently this time.

There are three more stops. None takes long. Somewhere in the middle his son wanders off and sits on a rock for twenty minutes and nobody makes him come back, and nothing anywhere records that he missed anything, because he did not.

They leave with one thing unresolved, which he notices in the car and cannot let go of.

**11:20. The drive home.** Nothing from the phone. Not for fifteen minutes.

By the time they reach the main road the car is talking over itself. His daughter has decided the openings are eyes and will not be argued out of it. His wife wants to know what else is out there like this and he says he does not know yet, and means it.

Nothing sells him anything. Nothing proposes anything. The rest of the day belongs to them.

**Tuesday.** He tells three people at work. Two of them are polite. One of them writes it down.

**Wednesday evening.** He opens it again, and there is another one. Different in character. Two hours the other way. And this is the moment the thing actually happens — because he catches himself thinking not *what else does this app have*, but:

*What else is out there that nobody told me about?*

That thought does not go away. He will have it on motorways for the rest of his life.

Eighteen months later he is the one in the car explaining a cave ceiling to someone who has never been, watching their face as they walk in, saying nothing at exactly the right moment — because he has learned that part.

Nobody ever told him what he had become. He would not have believed it if they had.

---

*This specification preserves every mechanic, every route, every artifact, every line of lore, and every asset in the repository. It changes almost nothing about what exists. It changes when a person meets it.*
