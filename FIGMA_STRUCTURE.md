# FIGMA FILE STRUCTURE
## Prohodna Vertical Slice — build specification

*Translates UX_SPECIFICATION.md into a buildable Figma file. The UX spec is behavioural and deliberately carries no colours or dimensions; **this document is where the visual layer is introduced**, drawing tokens from the existing app identity (`app/_layout.tsx`, `constants/design.ts`). Every frame, component and connection below maps to a numbered UX surface or component contract.*

**One file. Seven pages. Build order is Foundations → Components → Surfaces → Prototype → States → Handoff.**

---

## CANONICAL DEVICE & GRID

| Property | Value | Source |
|---|---|---|
| Primary frame | **393 × 852** (iPhone 15/16 logical) | Phone portrait is the sole design target (UX §M) |
| Safe area top / bottom | 59 / 34 | iOS |
| Layout grid | 4 col, 16 margin, 16 gutter | Single-column surfaces; grid is guidance only |
| Baseline unit | **8 pt** spacing scale: 4·8·16·24·32·48·64 | — |
| Thumb zone | Bottom 34% of frame — all `PrimaryAction` lives here | UX §A, §C level 3 |
| Landscape | **Not designed.** Locked. | UX §M |

**Never build:** tablet grids of proposals, landscape variants, web app-journey frames. Web gets Proposal + Place only (separate section).

---

## NAMING CONVENTION

```
Pages          🎬 00 Cover · 🎨 01 Foundations · 🧩 02 Components ·
               📱 03 Surfaces · 🔗 04 Prototype · ⚠️ 05 States · 📐 06 Handoff
Surface frame  S{n} · {Name} · {state}          e.g.  S07 · Arrival · default
Component      ⬡ {Name}                          e.g.  ⬡ PlaceProposal
Variant        {prop}={value}, {prop}={value}    e.g.  distance=known, image=present
Token style    {category}/{name}                 e.g.  text/fact · motion/withdraw
Annotation     📌 {rule-id} — {note}             e.g.  📌 A-2 — zero output this window
Silence frame  S{n} · {Name} · ⊘ SILENCE         reserved dark frame, no content layer
```

Order surface frames left-to-right in journey sequence so the page reads as the timeline (UX §T).

---

# 🎨 PAGE 01 — FOUNDATIONS

## 1.1 Type scale — **four levels only** (UX §C)

| Style token | Role | Family | Weight | Size / line | Notes |
|---|---|---|---|---|---|
| `text/fact` | Level 1 — the one thing per surface | Cinzel | 400 | 34 / 40 | Highest contrast. One instance per surface. |
| `text/cost` | Level 2 — cost fields, evenly weighted | EB Garamond | 400 | 18 / 26 | No field outranks another. |
| `text/action` | Level 3 — actions | Cormorant Infant | 600 | 20 / 24 | Never larger than `text/fact`. |
| `text/quiet` | Level 4 — silence layer, attributions | EB Garamond | 400 italic | 15 / 22 | Low contrast, ignorable, never invisible. |

Emotional contrast between L1 and L4 must be extreme. Build a **Dynamic Type proof frame**: each style at largest system size, reflowing, no clip (UX §F.1).

## 1.2 Colour tokens *(from existing app identity — this is the appearance the UX spec deferred)*

| Token | Hex | Use |
|---|---|---|
| `bg/ground` | `#050302` | Every surface base |
| `bg/deep` | `#0A0C1A` | Cards, place detail |
| `ink/gold` | `#D8B96A` | `text/action`, primary emphasis |
| `ink/ivory` | `#E8D5A0` | `text/fact`, `text/cost` |
| `ink/quiet` | `#8A7F6A` (ivory @ ~45%) | `text/quiet`, silence layer |
| `line/hairline` | ivory @ 12% | Dividers only |

**No `state/*` colour tokens carry meaning alone** (UX §F.1). No red anywhere — failure is never coloured (UX §P.17). Build a light/dark note: the app is dark-only (`userInterfaceStyle: dark`), so no light theme.

## 1.3 Motion tokens — **five named behaviours, nothing else** (UX §B)

| Token | Curve | Duration | Applied to |
|---|---|---|---|
| `motion/immediate` | none — appears present | 0 ms | Proposal, ArrivalSentence entry |
| `motion/settle` | ease-out, +8y→0 | 400 ms | Place, Memory, Prepare entry |
| `motion/carry` | shared-element, ease-in-out | 320 ms | Proposal→Place, Place→Prepare |
| `motion/withdraw` | ease-in, opacity→0 | 600 ms (slower than entry) | Arrival→silence, end of stop |
| `motion/none` | — | — | **All on-site silent states** |

**Forbidden-motion frames must be tagged** `📌 motion/none` in dev annotations: Arrival (after entry), Walk-in, First Look, inter-stop gap, Departure. No Smart Animate on these.

## 1.4 Behavioural design tokens (UX §E) — as a reference table frame

Paste the §E token table as a locked text frame. Every component's dev annotation references a token (`action.primary`, `state.silence`, `info.cost`, `state.unknown`, …). This is the semantic bridge; designers resolve appearance through it.

## 1.5 Iconography

Minimal. The existing symbol set (◉ ◈ ✦ ⌘ ◎) is **retired from on-site surfaces** (they read as game chrome). Permitted only on Place cost fields as quiet list markers, never as the sole carrier of meaning (`ChildSuitability`, `DifficultyIndicator` must have words).

---

# 🧩 PAGE 02 — COMPONENTS

*Twenty components from UX §K. Each is a Figma Component Set with Auto Layout. Listed with variants → Auto Layout → states → dev note. Reuse rule: a component may not be placed on a surface whose governing rule doesn't apply (UX §K).*

### ⬡ PlaceProposal
- **Variants:** `distance={known,unknown}` × `image={present,absent}` (4)
- **Auto Layout:** Vertical, fill W, hug H, gap 24, padding 32. Children top→bottom: `text/fact` (astonishment) · `text/fact`-secondary (name) · `text/cost` (distance) · Image (subordinate, max 40% H, absent variant removes with no gap collapse artifact) · slot `⬡ PrimaryAction` · `⬡ SecondaryAction` (quiet).
- **States:** default · pressed (whole card tappable).
- **📌** `H-1, D-5` — exactly one instance; no counter/total layer exists. `image=absent` must not shift hierarchy.

### ⬡ HonestCostBlock
- **Variants:** `completeness={full,partial,unknown}`
- **Auto Layout:** Vertical list, gap 12; each row = Horizontal, space-between: label (`text/quiet`) + value (`text/cost`). Rows arrive as one block — **no stagger** (`motion/settle` on container only).
- **Rows (always all six present):** Duration · Difficulty (`⬡ DifficultyIndicator`) · Child (`⬡ ChildSuitability`) · Hours · Season (`⬡ SeasonBadge`) · Road+Parking (`⬡ ParkingCard`) + Weather (`⬡ WeatherNotice`, present variant only).
- **📌** `D-3` — unknown renders as the literal value "not known", never an empty row.

### ⬡ JourneyHeader
- **Variants:** `mode={normal,silent,offline}`
- **Auto Layout:** Horizontal, space-between: `⬡ BackButton` + place name (`text/quiet` in silent mode) + distance (normal only).
- **📌** Not a live region — `silent` variant present in every protected window, produces zero screen-reader announcements.

### ⬡ ArrivalSentence
- **Variants:** `phase={visible,withdrawing}`
- **Auto Layout:** single centred text (`text/fact`), vertical-centre align in frame.
- **Motion:** `motion/immediate` in, `motion/withdraw` out.
- **📌** `A-1` — one sentence only; **no sound/haptic/animation layer may be attached**; multi-sentence content is a build error.

### ⬡ SilenceAffordance
- **Variants:** `idle` only (it has no other state — this is intentional)
- **Auto Layout:** Hug, bottom-anchored, `text/quiet`. Static.
- **📌** `S-3` — **animation forbidden.** Never labelled "fallback"/"skip". Present in every silent state. This is the aliveness proof; do not add spinner/dot.

### ⬡ StoryStop
- **Variants:** `phase={reading,narrating,paused,silence}` × `interpretation={true,false}`
- **Auto Layout:** Vertical, fixed (never scrollable). Top: referent line (`text/cost`) · Middle: one idea (`text/fact`) · optional interpretation marker (inline chip, `interpretation=true`) · Bottom thumb zone: `⬡ PrimaryAction`=Next + `⬡ SecondaryAction`=Pause/Leave.
- **Motion:** between stops `motion/withdraw` → gap (`motion/none`) → `motion/settle`.
- **📌** `P-1,N-1,N-2` — one idea; if content overflows frame it is TWO stops; trailing-silence value >0 attached as prop, not a spinner.

### ⬡ StoryProgress
- **Variants:** `position={more,last}`
- **📌** `PR` — renders **no number, fraction, percentage or dot count.** A single quiet glyph or word only.

### ⬡ GuardianEntry
- **Variants:** `state={offered,unavailable}` (unavailable renders nothing)
- **Auto Layout:** small calm row after final stop — **not full-screen, not a modal.** Offer text + `⬡ PrimaryAction`=Open + `⬡ SecondaryAction`=No thanks (equal legitimacy).
- **📌** `AR-1,AR-2` — cannot appear before final stop; unavailable variant is truly empty (no explanation layer).

### ⬡ MemoryCard
- **Variants:** `view={first,subsequent}` × `weather={present,absent}`
- **Auto Layout:** Vertical, gap 24, centred: place+date (`text/cost`) · weather (absent variant omits silently) · evidence object · retellable sentence (`text/quiet`) · unanswered question · `⬡ SecondaryAction`=Send to one person.
- **Motion:** `motion/settle` on `view=first` only; `subsequent` is static.
- **📌** `MEM-3` — no price/rating/next-place/set layer may exist in this set.

### ⬡ PrimaryAction
- **Variants:** `state={enabled,disabled,pressed}`
- **Auto Layout:** Hug→fill, min target 48×48, padding 16×24, `text/action`.
- **📌** Max one instance per surface; **never placed on a silent-state frame.**

### ⬡ SecondaryAction
- **Variants:** `state={default,pressed}` — textual weight, never PrimaryAction emphasis. Max two per surface.

### ⬡ BackButton
- **Variants:** `default` — standard back semantics; honours system back + edge gesture identically. Never loses journey state.

### ⬡ OfflineBanner
- **Variants:** `visibility={hidden,shown}` (hidden is default) — polite, never assertive; contains no error code. **Never on site.**

### ⬡ PermissionBanner
- **Variants:** `state={unrequested,denied}` (denied renders nothing) — mounts only on Prepare; never re-appears after denial.

### ⬡ WeatherNotice · ⬡ ParkingCard · ⬡ SeasonBadge · ⬡ ChildSuitability · ⬡ DifficultyIndicator · ⬡ JourneyTimeline
- Cost-block sub-components. Each: `value={known,unknown}` (+ domain values). All Auto Layout Horizontal label/value. **All carry text, never colour/icon alone.** `ChildSuitability` renders "no" as plainly as "yes". None appear on site. `JourneyTimeline` reads as a sentence, never a chart, never shows progress.

---

# 📱 PAGE 03 — SURFACES

*Twelve surfaces. Frames arranged L→R in journey order. Each surface lists its frame set, Auto Layout root, and the components it composes. Silent surfaces are reserved dark frames with a locked annotation, no content layer.*

### S01 · Cold Start
- **Frames:** `S01 · ColdStart · resolving`
- **Root:** the OS splash held; **no content layer of ours.** Resolves to S02 or a live journey state.
- **📌** `H-1` — no timed reveal. This frame documents the *absence* of the old TIMELINE gate.

### S02 · Proposal
- **Frames:** `S02 · Proposal · default` · `· no-distance` · `· offline`
- **Root:** Vertical Auto Layout, single `⬡ PlaceProposal`. Only one proposal ever.
- **Motion:** `motion/immediate` in, `motion/carry` → S03.

### S03 · Place
- **Frames:** `S03 · Place · default` · `· cost-unknowns` · `· largest-type`
- **Root:** Vertical, scrollable. Order: astonishment (`text/fact`) · distance+duration · `⬡ HonestCostBlock` · **pinned** `⬡ PrimaryAction`=Prepare (sticky, thumb zone, visible at all scroll) · `⬡ SecondaryAction`=Share · retellable sentence (`text/quiet`) near share.
- **📌** `D-3, C-1` — no text resolves the astonishment; no price element in the set.

### S04 · Journey Preparation
- **Frames:** `S04 · Prepare · caching` · `· ready` · `· offline` · `· permission-request`
- **Root:** Vertical, centred, minimal. Readiness line · determinate progress (caching only) · `⬡ PrimaryAction`=Open navigation · `⬡ SecondaryAction`=Not now · `⬡ PermissionBanner` (request frame only).
- **📌** Location permission requested **here, once**. Text alternatives cache before media.

### S05 · Navigation Handoff
- **Frames:** `S05 · Handoff · no-content` · `· no-maps-fallback` (copyable coords)
- **Root:** no surface of ours; the fallback frame shows place name + coordinates, copyable.

### S06 · Approach
- **Frames:** `S06 · Approach · silent` (`motion/none`) · `S06 · Approach · final-km`
- **Root silent:** `⬡ JourneyHeader mode=silent`, nothing else. **Final-km:** one reassurance line only.
- **📌** `A-8` — zero output hand-off→final-km. `motion/none`.

### S07 · Arrival
- **Frames:** `S07 · Arrival · 0-30s` · `S07 · Arrival · withdrawing`
- **Root:** `⬡ ArrivalSentence` centred + `⬡ SilenceAffordance` at base. Emptiest surface in the product.
- **Motion:** `motion/immediate` in, `motion/withdraw` out. All else `motion/none`.
- **📌** `A-1,A-2,A-7,A-8` — one output event in first 30s; no sound/haptic/reward layer.

### S08 · Protected First Look  ⊘ SILENCE
- **Frames:** `S08 · FirstLook · ⊘ SILENCE`
- **Root:** `⬡ JourneyHeader mode=silent` (place name, `text/quiet`) + `⬡ SilenceAffordance`. **Nothing else. `motion/none`. Screen-sleep permitted (annotation only).**
- **📌** `A-4,A-5,S-2` **INVIOLABLE** — zero output; no countdown/spinner/explanatory layer may exist on this frame. Reviewer checks the layer list is exactly two items.

### S09 · Story
- **Frames:** `S09 · Story · stop-1 … stop-N` · `· paused` · `· mute-text-parity`
- **Root:** one `⬡ StoryStop` fills frame (never scrollable) + `⬡ StoryProgress` (quiet). Inter-stop gap frame `S09 · Story · gap ⊘` (`motion/none`).
- **📌** `P-1,P-2,N-2,AT-5` — 3–5 stops; mute frame proves full text parity with no unmute prompt.

### S10 · Guardian Sight
- **Frames:** `S10 · Guardian · offer` · `· camera-view` · `· unavailable(empty)`
- **Root offer:** `⬡ GuardianEntry`. **Camera-view:** viewfinder + single exit affordance only.
- **📌** `AR-1,AR-2,AR-4` — offer frame cannot precede S09 final stop; unavailable frame is empty; lowering phone → exits to S08-style silence, not a menu.

### S11 · Departure  ⊘ SILENCE
- **Frames:** `S11 · Departure · ⊘ NOTHING`
- **Root:** documented empty frame. If app opened voluntarily → place name only, no new content.
- **📌** `S-4,MEM-3` — zero output on the day; no rating/share/next-place layer.

### S12 · Memory
- **Frames:** `S12 · Memory · first-view` · `· subsequent` · `· no-weather`
- **Root:** `⬡ MemoryCard`. Appears ≥48h after departure.
- **📌** `PR-6,MEM-3` — no counter/set/rarity/commerce layer in the frame.

### Web surfaces *(separate section, `WEB · …`)*
- `WEB · Landing · hero` — Prohodna as section one; astonishment + cost; **no `progress:0` domain cards**; portal motif is imagery, no reward loop.
- `WEB · Place · prohodna` — reuse of app Place hierarchy; ensures the moment is not spent.
- `WEB · Download · handoff` — carries place intent; deep link `unlockingbulgaria://places/prohodna-cave`.
- **No app-journey web frames** (UX §M).

---

# 🔗 PAGE 04 — PROTOTYPE

## 4.1 Journey flow (happy path)

```
S01 ColdStart ─(resolve, motion/immediate)─▶ S02 Proposal
S02 ─(tap card, motion/carry)─▶ S03 Place
S03 ─(tap Prepare, motion/carry)─▶ S04 Prepare
S04 ─(tap Open navigation)─▶ S05 Handoff ─(OS)─▶ [external maps]
[return to app] ─(recompute state)─▶ S06 Approach·silent
S06 ─(enter final km)─▶ S06 final-km
S06 ─(threshold / manual)─▶ S07 Arrival·0-30s
S07 ─(+30s, motion/withdraw)─▶ S08 FirstLook ⊘
S08 ─(+≥30s, question forms)─▶ S09 Story·stop-1
S09 ─(Next ×N, withdraw→gap→settle)─▶ … ─▶ S09 final stop
S09 ─(final stop done)─▶ S10 Guardian·offer
S10 ─(Open)─▶ S10 camera  |  ─(No thanks)─▶ [continue]
[leave site, 3× radius 10min] ─▶ S11 Departure ⊘
S11 ─(+48h)─▶ S12 Memory·first-view
```

## 4.2 Prototype connection rules
- **Every forward arrow is an explicit tap** (UX §A) — no "after delay" triggers **except** the silence windows, which use *After delay* to model the enforced minimums (S07→S08 at 30 000 ms; S08→S09-available at 30 000 ms). Annotate these as *modelling only — real timing is from persisted timestamps, not a Figma timer.*
- **Back:** every surface → previous in path; from S08 back → S07 (silent), **never resumes content**.
- **System/edge back** identical to BackButton.
- No auto-advance, auto-play or auto-navigate arrows anywhere (UX §P.12).

## 4.3 State-machine overlay
Add a greyed connector layer mapping the 13 JourneyProvider states (IMPL PLAN §3.2) onto these frames, so engineers see surface↔state correspondence. Label each frame corner with its journey state (`ARRIVED`, `FIRST_LOOK`, `IN_STORY`, …).

---

# ⚠️ PAGE 05 — STATES

*Every surface's failure and edge frames, per UX §F.2. Grouped by condition, not by surface, so QA can sweep one failure mode across the journey.*

| Row | Frames to build |
|---|---|
| **Permission denied** | S02·no-distance · S03·no-distance · S04·(journey proceeds) — no re-prompt, no explanation layer |
| **Offline** | S02·offline · S03·(full) · S04·offline · S09·(full from cache) — `⬡ OfflineBanner` only if a connection-requiring action is attempted |
| **GPS drift / no fix** | S06·(no reassurance) · S07·(manual affordance carries) · S08·(manual carries whole journey) |
| **False threshold** | S07 → (5 min unacknowledged) → silent revert to S06. **No correction message frame.** |
| **Camera unavailable** | S10·unavailable(empty) — no modal |
| **Asset missing** | S09·text-only (text alternative renders, journey continues) |
| **App kill / restart** | Overlay note on S07/S08/S09/S12: state recomputed from persisted timestamp; silence resumes at correct remaining duration |
| **Largest Dynamic Type** | S02·largest-type · S03·largest-type — reflow, no clip |
| **Screen reader** | Annotation layer on S08: "zero new announcements during window" |

**Tone rule frame:** a locked reference card — no error codes, no "failed/unsupported/missing", no red (UX §P.17).

---

# 📐 PAGE 06 — HANDOFF

## 6.1 Redline philosophy
Because the UX spec is behavioural, redlines annotate **behaviour and token**, not just pixels. Each frame carries:
- `📌 {rule-id}` inviolable tags (red border on the annotation, never on the UI).
- Token bindings: which `text/*`, `motion/*`, behavioural token each layer resolves to.
- Component instance links back to Page 02.

## 6.2 The three testable timing numbers (must appear as handoff assertions — UX §T)
```
📌 A-5   First-look silence minimum ......... 30 000 ms, from persisted arrivedAt/firstLookAt
📌 A-2/A-4/S-2  Output events in any ⊘ window .. 0
📌 S-4   Memory availability delay .......... 48 h from departedAt
```
Each links to the matching PR-0 test assertion in VERTICAL_SLICE_IMPLEMENTATION_PLAN.

## 6.3 Component → code map
Table binding each `⬡` component to its target file (IMPL PLAN Part 7): `PlaceProposal`→`components/place/PlaceProposal.tsx`, `HonestCostBlock`→`components/place/HonestCostBlock.tsx`, `ArrivalSentence`+`SilenceAffordance`→`components/journey/`, `StoryStop`→`components/journey/StoryStop.tsx` (+ reuse `GuruNarration`), etc.

## 6.4 Design Handoff Checklist
Embed UX_SPECIFICATION's 36-item checklist as a Figma checklist frame. **A frame does not enter dev-ready column until every applicable box is ticked**, and any NO in the first block blocks it.

---

# 🎬 PAGE 00 — COVER

File title, slice scope (Prohodna only), the eight governing docs listed as source of truth, a legend for the naming convention and the `⊘ SILENCE` frame marker, and a one-line status per surface (draft / dev-ready). Link to this document.

---

# BUILD ORDER (for the designer, tomorrow)

1. **Foundations** — type (4 levels), colour tokens from app, five motion tokens, behavioural-token reference, Dynamic-Type proof.
2. **Components** — build the 20 sets; start with `PrimaryAction`, `SecondaryAction`, `SilenceAffordance`, `PlaceProposal`, `HonestCostBlock` (unblock the most surfaces).
3. **Surfaces** — S02, S03 first (also the web-shared ones), then the arrival cluster S07/S08/S09 (the risky, novel part — prototype early for the H-SIL-1 field test in Week 2 of EXPERIENCE_HYPOTHESES).
4. **Prototype** — wire happy path + back; add the delay-modelled silences with the "modelling only" note.
5. **States** — sweep the failure rows.
6. **Handoff** — redlines, timing assertions, component→code map, embed the checklist.

**Design the arrival cluster (S07–S09) before anything else that isn't a blocker** — it is the only genuinely novel, highest-risk sequence, and Week 2 of the validation roadmap needs a rough prototype of exactly it.
