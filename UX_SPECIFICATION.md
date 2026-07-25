# UX SPECIFICATION
## The Prohodna Vertical Slice — behavioural operating system

*Bridges the eight governing documents to Figma, code and QA. Nothing after this is product strategy.*

**Scope:** twelve surfaces. Cold Start → Proposal → Place → Preparation → Navigation Handoff → Approach → Arrival → Protected First Look → Story → Guardian Sight → Departure → Memory. Nothing else exists in this specification.

**Core principle:** the interface exists to protect the experience, never to compete with it. Behaviour is defined before appearance. No colours, no dimensions, no fonts.

---

## HOW TO READ THIS DOCUMENT

**§A–§F are global baselines.** They apply to every surface unless a screen explicitly overrides them. This is deliberate: repeating twelve identical accessibility and failure sections would hide the three places where they genuinely differ, which is exactly where implementation goes wrong. Each screen therefore states *"Baseline applies"* plus its overrides.

**Two surfaces have no interface at all** — Protected First Look and Departure. They are specified in full anyway, because *deciding to render nothing* is a design decision that must be reviewed, tested and defended like any other.

---

# §A — INTERACTION LANGUAGE

**Governing intent: nothing surprises.** A person outdoors, tired, one-handed, will not investigate. If a control's behaviour is not predictable from its appearance, it is wrong.

**Buttons.** One primary action per surface, maximum. It sits in the lower third, thumb-reachable. Secondary actions are textual and visually quieter. Destructive or irreversible actions do not exist in this slice — nothing here can be lost, failed or undone, so no confirmation dialogs are required anywhere in the journey.

**Cards.** A card is a proposal. Tapping anywhere on it opens it. Cards never contain competing tap targets, never expand in place, and never reorder themselves while visible.

**Sheets.** Used only for the native share sheet and the OS permission prompt. We present no sheets of our own during the slice.

**Modals and dialogs.** **None on site.** From arrival to departure, nothing may appear over content. Off site, modals are limited to system-owned prompts.

**Navigation.** Forward is always an explicit tap. There is no automatic navigation anywhere in this slice — the geofence never pushes a route, it only changes state.

**Back.** System back and edge gestures always work and always mean "one step back in my own path." Back never loses journey state; the journey is persisted independently of the navigation stack. Back during protected silence returns to the arrival surface, which is also silent — it never resumes content.

**Deep links.** `unlockingbulgaria://places/:slug` resolves to the Place surface with journey state intact. If a journey is already in progress for that place, the link resolves to the current journey state instead — never to the beginning.

**Returning from the maps app.** Foregrounding recomputes state from persisted timestamps and current distance. It never replays anything. If the person left during `EN_ROUTE` and returns during `APPROACHING`, they see the approach surface, not a summary of what they missed.

**Backgrounding / foregrounding.** All silence and timing is computed from absolute timestamps. Backgrounding cannot shorten or extend a silence. Foregrounding never triggers audio, motion or content.

**Rotation.** Portrait only for the slice. Landscape is locked out rather than badly supported — see §M.

**Keyboard.** Never appears. No text input exists in this journey.

**External links.** Only two: the maps application, and the native share sheet. Both hand off; neither embeds a browser.

---

# §B — MOTION LANGUAGE

Five named behaviours. Nothing else is permitted.

| Name | Experience | Where |
|---|---|---|
| **Immediate** | Appears already present. No perceptible entry. | The proposal at cold start; the arrival sentence |
| **Settle** | Arrives from slightly below and comes to rest, unhurried. | Place detail content; memory card |
| **Carry** | The thing you tapped remains the thing you are looking at; context is preserved across the transition. | Proposal → Place; Place → Preparation |
| **Withdraw** | Content leaves without drawing attention to its leaving. Slower than it arrived. | Arrival sentence → silence; end of a story stop |
| **None** | No motion whatsoever. Static. | Every on-site state — see forbidden zones |

**Motion is forbidden, absolutely, in:** the arrival window; the walk-in silence; the protected first look; the gap between story stops; the departure state. In these states nothing may pulse, breathe, fade, shimmer, animate or loop — including any existing ambient or "living" background treatments.

> **This retires the current `arrival` edge-pulse loop** in `app/checkpoint/[id].tsx`. A pulsing screen at 50–200 m is a celebration of arrival, and arrival is not an achievement.

**Waiting.** There are no spinners in this slice. Content is bundled or cached before it is needed. The single exception is offline preparation, where a real determinate progress indicator is honest and correct.

**Loading.** A surface never renders a skeleton of itself. It renders the last known good content, or it renders the one thing it is certain of.

---

# §C — TYPOGRAPHIC LANGUAGE

**Four levels. No more.**

1. **The fact.** One per surface, at most. The astonishment, the arrival sentence, the current story idea. Largest, highest contrast, generously spaced. Everything else is at least one full step smaller.
2. **The cost.** Distance, duration, difficulty, hours. Compact, scannable, evenly weighted — no single cost field outranks another, because the one that matters differs per person.
3. **The action.** Legible at arm's length in sun, but never larger than the fact.
4. **The quiet layer.** Place name during silence, attributions, the manual affordance. Deliberately low contrast, deliberately easy to ignore, never invisible.

**Emotional contrast** between level 1 and level 4 should be extreme — a person glancing for half a second must see only the fact.

**Outdoors.** Every level assumes direct sunlight, motion, and a possibly wet or gloved finger. Long measures are forbidden: no line exceeds a comfortable single glance.

**When to avoid text entirely.** During the walk-in, the first look, and between story stops. **When an image replaces text:** never on site. On site the real thing is present and a photograph of it is an insult. Images belong to the proposal, the place page and the memory card only.

---

# §D — CONTENT LANGUAGE

| Limit | Value | Source |
|---|---|---|
| Astonishment on the proposal | ≤ 25 words | Derived from Rulebook D-1 · ⚠ RFV |
| Arrival sentence | **Exactly 1 sentence** | Rulebook A-1 |
| Ideas per story stop | **1** | Rulebook P-1 |
| Story stops | **3–5** | Rulebook P-2 |
| Narration per stop | **≤ 90 s** | Rulebook N-1 |
| Trailing silence per stop | **> 0, never zero** | Rulebook N-2 *(inviolable)* |
| Supporting facts per place | ≤ 3 | Rulebook C-2 |
| Visible choices per surface | ≤ 3 | Rulebook H-2 |
| Required interactions per stop | ≤ 2 | Rulebook AT-2 |
| Simultaneous concepts | 1 | Rulebook P-1 |
| Interruptions initiated by us, on site | **0** | Rulebook A-8 *(inviolable)* |
| Notifications, entire slice | **0** | Rulebook A-8 |
| Emotional peaks per place | **1** | Rulebook P-3 *(inviolable)* |
| Reading time per on-site surface | ≤ 20 s | ⚠ RFV |

**Never written:** *charming, picturesque, hidden gem, must-see, breathtaking, stunning, magical, unforgettable.* Also never: percentages, counters, "you have unlocked", "congratulations", "don't miss", "limited time".

**Never explained:** how the product works; what a Keeper is; what a Domain is; why we chose this place; what will happen next in the journey; that a silence is intentional.

---

# §E — BEHAVIOURAL DESIGN TOKENS

Semantic behaviours, not appearances. Every visual decision resolves through one of these.

| Token | Meaning | Behaviour contract |
|---|---|---|
| `action.primary` | The one thing this surface is for | One per surface. Thumb-reachable. Never appears during a silence. |
| `action.secondary` | An honest alternative | Textual weight. Never competes. Never uses the same emphasis as primary. |
| `action.quiet` | Present but not offered | The manual affordance. Static, low contrast, always tappable, never animated. |
| `state.silence` | Deliberate absence | No motion, no audio, no new content, screen-sleep permitted. |
| `state.arrival` | You are here | Exactly one sentence. No celebration, no sound, no haptic. |
| `state.approach` | Almost there | One reassurance in the final kilometre. Otherwise nothing. |
| `state.story` | One idea, pointing | Single concept, visible referent, trailing silence. |
| `state.guardian` | Optional deepening | Offered after story only. Never auto-opens. Exits to silence. |
| `state.memory` | Evidence, later | Appears once, ≥48 h after departure. Carries no commerce. |
| `state.waiting` | Genuinely working | Determinate only. Exists only during offline preparation. |
| `state.unknown` | We do not know | Shown honestly. Never blank, never guessed, never apologised for. |
| `state.unavailable` | Not possible right now | Silent degradation. No error framing, no explanation of loss. |
| `info.cost` | What it will take you | Even weight across all fields. No field is emphasised. |
| `info.fact` | The one thing | Highest contrast on the surface. One per surface. |
| `nav.handoff` | Leaving to another app | Explicit, expected, never automatic. |

---

# §F — GLOBAL BASELINES

## F.1 Accessibility baseline *(applies to every surface)*

One-handed operation with the primary action inside natural thumb arc. All interactive targets comfortably large for a gloved or wet finger. Full screen-reader labelling, with reading order matching visual order. Dynamic type honoured to the largest system size without truncation or overlap — surfaces reflow, never clip. Sunlight-grade contrast on levels 1–3 of the type hierarchy. **No meaning is carried by colour alone anywhere in the slice.** Nothing requires a gesture more complex than a tap. Nothing requires reading while walking. Everything works offline. Everything works with degraded GPS via the manual path. Everything completes with the camera unavailable. Content pitched to be usable by a competent ten-year-old and comfortable for a seventy-year-old.

## F.2 Failure baseline *(applies to every surface)*

**The tone rule: never shame, never panic, never expose implementation language.** No error codes, no "failed", no "unsupported", no "you are missing", no red.

| Condition | Behaviour |
|---|---|
| Location permission denied | Everything works; distance is simply absent. Never re-prompt. Never explain the loss. |
| Offline | Everything works. No banner unless the person attempts something that genuinely requires connection. |
| GPS drift / no fix | Manual affordance is always present and equal in status — never labelled as a fallback. |
| Wrong arrival (false threshold) | If unacknowledged for 5 minutes, silently revert to approach. Never announce the correction. |
| Camera unavailable | Guardian Sight is simply not offered. No modal, no explanation. |
| Asset missing | The text alternative renders. The journey continues. Logged internally, invisible externally. |
| Story unavailable | Journey remains completable; the stop is skipped silently and the visit still completes. |
| Restart / killed app | State recomputed from persisted absolute timestamps. Silences resume at the correct remaining duration. |

## F.3 Telemetry baseline

Every event carries: event name, absolute timestamp, place id, journey id. **Nothing else.** No coordinates beyond a boolean arrival verification. No movement trace. No content-level attention data. No cross-user comparison fields. Local-first, exported manually with consent.

---

# THE TWELVE SURFACES

---

# 1 · COLD START

**Purpose** Decide, invisibly, what this person should meet — and get out of the way in under three seconds.
**Patterns** B1 Snag · G2 Assumed Absence
**Rules** H-1 *(inviolable)*, H-4, G2
**Enters with** No intent. Possibly idle, possibly mid-journey and returning.
**Leaves with** Attention already transferred to a place.
**Decision enabled** None — this surface decides *for* the user.
**Encourages** Immediate contact with a fact.
**Prevents** Waiting, watching, evaluating the product.

**Information hierarchy** — Nothing of its own. Cold Start renders no content; it resolves state and hands to the correct surface. *Why:* every element here would be a toll booth. **Hidden:** brand, version, loading state, tutorial, account, the entire product concept.

**Layout** No layout. The splash already held by the system is the only visual, and it ends as soon as fonts resolve.

**Interactions** None. Touch during this window is queued to the destination surface, never dropped.

**Motion** `Immediate`. The destination appears already present. **Forbidden:** any staged reveal, any timed sequence. *This retires the eight-stage TIMELINE gate.*

**Audio** None. *Why:* audio at launch is a claim on attention before anything has been earned, and it fails outright for anyone in a quiet room, a car with others, or a meeting.

**Accessibility** Baseline. Screen readers announce the destination surface, never a loading state.

**Failure** Baseline. If journey state is unreadable, resolve to the Proposal — never to an error.

**Telemetry** `app_opened` at resolve. *Question answered: how often do people open us without a journey in progress?*

**Acceptance criteria**
- On cold install, a named place is visible within 3 s of the splash ending, with 0 taps.
- No timed reveal sequence delays any actionable control.
- With a journey in progress, the app resolves to that journey's current state, not the Proposal.
- With unreadable persisted state, the app resolves to the Proposal without displaying an error.

---

# 2 · PROPOSAL

**Purpose** Cause *"wait — where is that?"* and hand over one reachable place.
**Patterns** A1 Disproportion · A2 Retellable Sentence · B1 Snag
**Rules** H-1, H-2, H-3 *(inviolable)*, H-4, H-5, D-3, D-5
**Enters with** Idleness. No intent.
**Leaves with** Involuntary curiosity attached to a specific piece of ground.
**Decision enabled** *Do I want to know more about this place?*
**Encourages** Saying it out loud to someone in the room.
**Prevents** Browsing, evaluating, comparing, scale-assessment.

**Information hierarchy**
1. **The astonishment** — the fact, out of scale with the place. *First because it is the only reason anyone continues.*
2. **The place name** — *second because a fact without a name cannot be repeated.*
3. **The distance from here** — *third because this is the moment interest becomes personal; it converts a fact into a possibility.*
4. **One image** — under-selling, not over-selling. *Fourth deliberately: an image first produces admiration, and admiration is satisfied at a distance.*
5. **Primary action: open the place.**
6. **Quiet: another one** — *last, small; it exists so the surface is not a dead end.*

**Hidden:** catalogue size, domains, routes, progression, counters, price, account, map, lore, the product's name as a subject. *Hiding scale is what allows a stranger to feel invited rather than enrolled — a syllabus is a reason to start later.*

**Layout** Single column, no scroll required for hierarchy items 1–5. The fact occupies the visual centre of gravity in the upper half; the image is subordinate and never full-bleed behind the fact where it would fight for contrast. Distance sits immediately under the name, tightly grouped — they are one thought. Primary action in the lower third, thumb arc. Reading flow is strictly vertical, one item per glance. Sunlight-legible at every level. One-handed by construction. Not intended for use while walking. Tablet: identical, centred, with generous margins — never a grid of proposals. **Only one proposal is ever visible.**

**Interactions**
- *Tap the card or the primary action* → Place. Reinforces: one decision, no comparison. Must never interrupt: nothing — this is the entry.
- *Tap "another one"* → replaces the proposal in place, no navigation. In the slice this is inert (single place); it must not appear if it cannot function.
- *Pull to refresh* → **not implemented.** A proposal is not a feed.
- *Scroll* → allowed but unnecessary; nothing essential lives below the fold.

**Motion** Entry `Immediate`. Exit to Place: `Carry` — the fact remains anchored so the person continues reading rather than re-orienting. **Forbidden:** looping ambient motion behind the fact, parallax, attention-seeking pulses on the primary action.

**Audio** None. *Why:* this surface is most often opened in a room with other people. Silent by default is the only respectful default, and there is nothing here that sound would improve.

**Accessibility** Baseline. The astonishment is a single screen-reader utterance — not fragmented across elements. Distance announces as a spoken phrase, not a numeral with an abbreviation.

**Failure** Baseline. Permission denied → the distance line is simply absent; nothing shifts to fill it and no explanation appears. Offline → identical, content is bundled.

**Telemetry** `first_place_displayed` on render. *Question: is the first thing a person meets a place, every time?*

**Acceptance criteria**
- Exactly one place is visible. Never two.
- Interactive elements leading elsewhere: ≤ 3.
- No element displays a count, a percentage, a total or a zero state.
- With location permission denied, the surface renders fully and the distance element is absent — no placeholder, no explanatory text.
- With airplane mode enabled on a cold start, the surface renders identically.
- The astonishment renders without truncation at the largest system text size.

---

# 3 · PLACE

**Purpose** Answer *can we actually do this* before the person has to ask.
**Patterns** C1 Honest Cost · C2 Said Aloud · A2 Retellable Sentence
**Rules** D-3, D-4, P-6, C-1
**Enters with** Curiosity, unpriced.
**Leaves with** A shape of a day, and the impulse to tell someone.
**Decision enabled** *Are we going, and roughly when?*
**Encourages** Sharing with exactly one person.
**Prevents** Story consumption, moment spoilage, price anxiety.

**Information hierarchy**
1. **The astonishment, restated** — *continuity; the person arrived here because of it.*
2. **Distance and realistic on-site duration** — *the two numbers that decide everything.*
3. **The cost block** — difficulty, child viability, access hours, best seasons, road and parking, accessibility, weather caveat. *Even weight, no emphasis: the field that matters differs per person, so ranking them would be a guess about someone else's life.*
4. **Primary action: prepare this journey.**
5. **Secondary: send to one person.**
6. **The retellable sentence** — quietly placed near the share action. *Positioned here because this is the moment someone is about to describe it to another human, and this is the sentence we want them to use.*

**Hidden:** the story, the moment, the AR layer, the unanswered question, the artifact, the domain, the route, the price, all progression. *Hiding the moment is what makes going necessary — a page that resolves the astonishment has replaced the visit.*

**Layout** Scrollable single column. Hierarchy items 1–2 above the fold without exception. The cost block is a compact, evenly weighted cluster — scannable in one pass, no field visually louder than another; unknown values are present and legible, not omitted. Primary action pinned within thumb reach and always visible, even mid-scroll, because the decision can happen at any point in the read. Image usage is restrained and never resolves the astonishment. Tablet: single centred column, wider margins, never two columns.

**Interactions**
- *Tap primary* → Preparation. Reinforces: commitment precedes content.
- *Tap share* → native share sheet, prefilled with the retellable sentence and a link. **One-to-one only** — no public post targets are suggested or promoted.
- *Scroll* → reveals cost detail. Never triggers anything.
- *Tap back* → Proposal, with state intact.
- **Prevented:** any interaction that reveals story content.

**Motion** Entry `Settle`. Cost fields do not animate in sequence; they arrive together as one block, because staggering them implies ranking. Exit `Carry`.

**Audio** None. *Why:* nothing here benefits from sound, and the surface is frequently read aloud by one person to another — our audio would compete with the human voice, which is the mechanism we most want to encourage.

**Accessibility** Baseline. The cost block reads as a structured list, each field as "label, value" — never as an icon row. Unknown values read as "not known", never as silence or a dash.

**Failure** Baseline. Unknown cost fields render as honestly unknown and are announced as such. Offline: full content; the share action still works, since sharing a link needs no connection.

**Telemetry** `place_opened` on render. `planning_details_opened` when the cost block enters the viewport. `place_shared_one_to_one` on share-sheet dismissal with a completed send. *Questions: does the cost block get read? Does anyone actually tell one other person?*

**Acceptance criteria**
- All six cost dimensions render — a value or an explicit unknown. Never absent.
- No price, tier, subscription or purchase element appears anywhere on this surface.
- The primary action is reachable without scrolling at every scroll position.
- The share payload contains the retellable sentence verbatim.
- No text on this surface resolves the astonishment.
- With the largest system text size, no cost field truncates or overlaps.

---

# 4 · JOURNEY PREPARATION

**Purpose** Make the phone useless later, on purpose — everything cached before there is no signal.
**Patterns** G2 Assumed Absence · G3 Complete Alternative
**Rules** G2, AT-6, P-7
**Enters with** Decision made.
**Leaves with** Confidence that the phone will not be the problem.
**Decision enabled** *Am I ready to leave?*
**Encourages** Leaving.
**Prevents** Discovering a dependency at the cave mouth.

**Information hierarchy**
1. **One readiness line** — *what is ready, in plain language.*
2. **Determinate progress**, only while genuinely working. *Second because it is temporary.*
3. **Primary action: open navigation.**
4. **Quiet: not now** — returns to Place without discarding preparation.

**Hidden:** the manifest, file sizes, technical detail, anything about caching mechanics. *A person preparing to leave does not want a systems report.*

**Layout** Minimal single column, vertically centred, very few elements. This is a threshold surface and should feel like one — it is passed through, not inhabited.

**Interactions**
- *Tap primary* → OS navigation app via geo intent. This is the **only** moment location permission is requested, in context, with a plain reason.
- *Permission denied* → preparation still completes; the navigation hand-off still works; only arrival detection degrades to manual. **The journey is never blocked.**
- *Tap "not now"* → back to Place, cache retained.
- *Backgrounding mid-preparation* → resumes on return, never restarts.

**Motion** Entry `Settle`. Progress is the one honest determinate indicator in the slice. Exit is a hand-off, not a transition — the OS animation owns it.

**Audio** None.

**Accessibility** Baseline. Progress announces at meaningful intervals, not continuously. The permission rationale is legible and is not the only place the reason appears.

**Failure** Baseline. Offline at preparation: state honestly that content will be ready when there is a connection, and allow departure anyway. Insufficient storage: prepare what fits, text alternatives first — **the text path is never sacrificed to media.**

**Telemetry** `journey_started` on entry. `external_navigation_opened` on hand-off. *Question: how many decisions become departures?*

**Acceptance criteria**
- After preparation completes, the entire on-site journey runs with airplane mode enabled.
- Location permission is requested exactly once, on this surface, never earlier.
- Denying permission does not block progression to navigation hand-off.
- Backgrounding during preparation and returning resumes progress without restarting.
- Text alternatives for every story stop are cached before any media asset.

---

# 5 · NAVIGATION HANDOFF

**Purpose** Give the driving to the app people already trust with their lives.
**Patterns** B3 Occupied Surface *(inverse — we decline to occupy)* · G2
**Rules** M-1, M-4, Manifesto L17
**Enters with** Readiness.
**Leaves with** Being in a maps app, with us silent.
**Decision enabled** None — this is a hand-off.
**Encourages** Actually leaving.
**Prevents** Us competing with navigation.

**Information hierarchy** None. We render nothing. *We never draw a route, never show turn-by-turn, never re-render a map.*

**Layout** No surface. The OS transition is the entire experience.

**Interactions** One outbound intent. If no maps application resolves, we present the coordinates in copyable form and nothing else. Return to our app at any time resumes journey state without replay.

**Motion** None of ours.

**Audio** None. *Why:* the maps app owns audio for the next hour and any sound from us would collide with a turn instruction — a genuine safety matter, not a preference.

**Accessibility** Baseline. The fallback coordinate display is fully readable and copyable.

**Failure** Baseline. No maps app: coordinates plus place name, copyable. Never an error.

**Telemetry** Covered by `external_navigation_opened`. No tracking of the drive.

**Acceptance criteria**
- Tapping hand-off opens the device's default maps application with the destination populated.
- Our app produces no audio and no notification from hand-off until arrival.
- Returning to our app at any point restores the correct journey state without replaying content.
- With no maps app installed, coordinates are displayed and copyable; no error is shown.

---

# 6 · APPROACH

**Purpose** Remove doubt in the final kilometre and say nothing else.
**Patterns** D1 Quiet Approach
**Rules** S-1, D1 pattern, A-8 *(inviolable)*
**Enters with** Transit boredom and rising anticipation.
**Leaves with** Certainty that this is the right road.
**Decision enabled** *Do I keep going?*
**Encourages** Continuing when the road stops looking plausible.
**Prevents** Turning around; and spending the story in the car.

**Information hierarchy**
1. **Nothing**, from hand-off until the final kilometre. *Silence is the content.*
2. **In the final kilometre: one reassurance.** Place name and a confirmation that this is the road. *Existing because doubt at the threshold turns around more cars than distance ever has.*

**Hidden:** everything. Especially the story. *A story spent in a moving car cannot be spent at the place, and the place will inherit an audience that already knows.*

**Layout** If the app is foregrounded during approach: place name, distance, and the reassurance when applicable. Nothing else. Designed to be understood by a passenger glancing, never read by a driver.

**Interactions** None required. The manual affordance is present. Backgrounded is the expected state.

**Motion** **`None`.** Forbidden zone begins here and does not end until departure.

**Audio** None. *Why:* the driver is navigating. Any voice of ours competes with a turn instruction at exactly the wrong moment.

**Accessibility** Baseline. The reassurance is a single short screen-reader utterance.

**Failure** Baseline. No GPS: no reassurance is shown; the manual path is available and unremarked.

**Telemetry** `approach_detected` once, on first entry to the approach band. *Question: how many journeys reach the final kilometre?*

**Acceptance criteria**
- Zero product-originated output events between navigation hand-off and the final-kilometre band.
- The reassurance appears at most once per journey.
- No audio, notification, vibration or motion occurs at any point during approach.
- Backgrounding throughout approach produces no notifications.

---

# 7 · ARRIVAL

**Purpose** Say one useful thing, then leave.
**Patterns** D2 Withdrawal · F5 Second Person
**Rules** A-1, A-2, A-7, A-8 *(all inviolable)*, AT-1
**Enters with** Awkwardness — stiff from the car, bags, the lock, the toilet question. **Nobody feels awe at second five.**
**Leaves with** Orientation, and a phone in a pocket.
**Decision enabled** *Which way do I walk?*
**Encourages** Putting the phone away.
**Prevents** Ceremony, celebration, story, screen attachment.

**Information hierarchy**
1. **One sentence: you are here, and walk that way.** *This is the entire content of the surface. It exists because the only real question at second ten is which direction to walk.*
2. **The quiet affordance** — persistent, static.

**Hidden:** the story, the artifact, any counter, the AR layer, any celebration, the moment, what happens next. *Every one of these would claim attention at the exact second attention should transfer to the place.*

**Layout** One sentence, large, high contrast, vertically centred, readable at arm's length in full sun by someone standing up and moving. Nothing above it. Nothing below it but the quiet affordance at the base of the screen. The emptiest surface in the product, deliberately.

**Interactions**
- *Any tap* → acknowledges and enters silence early. Never required.
- *The quiet affordance* → confirms arrival manually. Always present, equal in status to GPS detection, **never labelled as a fallback.**
- **Forbidden:** any interaction that starts content. There is no "begin" here.

**Motion** Entry `Immediate` — the sentence is simply there. Exit `Withdraw` — slower than it arrived, so the departure of the interface is not itself an event. **All other motion forbidden.**

**Audio** **None, at any volume, including haptics.** *Why:* a sound at arrival converts a threshold into an achievement, and it arrives in a moment where four people are getting out of a car — it would be heard by everyone and belongs to no one.

**Accessibility** Baseline, with one override: **the arrival sentence is announced once and not repeated.** Screen readers must not re-announce on focus changes. The walking direction must be comprehensible without any visual reference.

**Failure** Baseline, with overrides:
- False threshold: if unacknowledged for 5 minutes, revert silently to approach. **Never announce the correction.**
- GPS unavailable: the surface is reachable entirely through the quiet affordance.
- Wrong place: the person's manual confirmation always wins over our detection.

**Telemetry** `arrival_detected` or `arrival_manually_confirmed`; `arrival_message_displayed`; `protected_silence_started`. *Questions: does GPS work at this cave? Do people trust the manual path?*

**Acceptance criteria**
- Exactly one output event occurs in the first 30 s after arrival detection.
- Zero audio, zero haptic, zero notification, zero animation occurs at arrival.
- No counter, badge, artifact or reward element renders.
- The quiet affordance is present and tappable at all times.
- Killing and relaunching the app during the arrival window restores the correct remaining silence, computed from the persisted arrival timestamp.
- A threshold event unacknowledged for 5 minutes reverts state with no user-visible message.

---

# 8 · PROTECTED FIRST LOOK

**Purpose** Render nothing, for a defined duration, on purpose.
**Patterns** D3 Unaccompanied Look · D4 Held Silence
**Rules** A-3, A-4, A-5, AR-1, N-5, S-2 *(all inviolable)*
**Enters with** Anticipation, walking.
**Leaves with** A memory that belongs to them and not to us.
**Decision enabled** None. Deliberately.
**Encourages** Looking up.
**Prevents** Us overwriting their first sight with our sentence — permanently.

**Information hierarchy**
1. **The place name, in the quiet layer.** *Present solely as proof of aliveness. Not content.*
2. **The quiet affordance.**
3. **Nothing else.**

**Hidden:** everything, including any indication that a silence is in progress. *A countdown converts silence into waiting, and waiting is a demand for attention. The person must not know they are inside a designed window.*

**Layout** Near-empty. Two low-contrast elements, both static, both ignorable. **The screen is permitted to sleep.** We explicitly release any keep-awake here: the best possible state of this surface is a dark phone in a pocket, and the app must not fight the device to prevent that.

> **The hardest problem in the slice — how a person knows it is not broken — is solved without adding content:** the surface responds to touch, the place name is legible, and the affordance is tappable. Aliveness is proven by responsiveness, not by a message. **No spinner, no "listening", no breathing dot, no explanatory line.** ⚠ This resolution requires field validation.

**Interactions**
- *The quiet affordance* → confirms they have arrived at the place proper, ending the walk-in early.
- *Any other tap* → nothing. Deliberately inert.
- *System back* → returns to arrival, which is also silent. Never resumes content.

**Motion** **`None`. Absolute.** Nothing moves for the duration, including any ambient or background treatment inherited from other surfaces.

**Audio** **None.** *Why:* this is the single most important silence in the product. The place is already producing sound — changing temperature, changing acoustics, wind, footsteps — and every one of those is more powerful than anything we could write.

**Accessibility** Baseline, with overrides: **screen readers announce nothing new during the window.** A person using VoiceOver must experience the same silence, not a narrated version of it. The affordance remains focusable and correctly labelled.

**Failure** Baseline. If the threshold cannot be detected at all, the manual path carries the entire journey and nothing about the experience changes.

**Telemetry** `threshold_crossed` when detected. Output-event count within the window, asserted at **zero**. *Question: did anything speak when it should not have?*

**Acceptance criteria**
- Zero product-originated output events between threshold crossing and the end of the protected window.
- The minimum window is 30 s and cannot be shortened by any user action other than an explicit tap on the quiet affordance.
- Screen keep-awake is released for the duration.
- No countdown, timer, progress indicator or explanatory text renders at any point.
- Backgrounding and returning does not reset, extend or shorten the window.
- With a screen reader active, no new announcement occurs during the window.

---

# 9 · STORY

**Purpose** Make the ground readable, one idea at a time, then stop.
**Patterns** F1 Pointing · F2 One Idea at a Time · F3 Unanswered Question · G3 Complete Alternative
**Rules** P-1, P-2, P-4, N-1, N-2 *(inviolable)*, N-4, N-7, AT-1, AT-2, AT-5
**Enters with** A question that formed on its own.
**Leaves with** One unresolved thread and a sentence worth repeating.
**Decision enabled** *Do I want the next one?*
**Encourages** Looking at the thing, not the screen.
**Prevents** Reading while walking; lecture; failure.

**Information hierarchy**
1. **The visible referent** — what to look at, from where you are standing. *First, because the story is addressed to the ground, not to the reader.*
2. **The one idea.** *Second; it only makes sense once the eyes have found the thing.*
3. **Interpretation marker**, when the content is interpretation rather than record. *Inline, in the moment — a footnote does not satisfy this.*
4. **Primary: next.**
5. **Quiet: pause / leave.**
6. **Non-numeric position indicator.** *Last and deliberately vague — "there are more" without "you are 2 of 5", because a fraction is a completion pressure.*

**Hidden:** total stop count as a number, elapsed time, the artifact, the AR layer, progression, anything about what happens after the last stop.

**Layout** One stop fills the surface. The referent line sits at the top where it is read first; the idea below it with generous spacing; controls in the thumb arc. **The surface is never scrollable** — if a stop does not fit, it is two stops. Designed for standing, one-handed, in sun, glanced at rather than read.

**Interactions**
- *Tap next* → advances one stop, then enters the trailing silence before anything else renders.
- *Tap pause* → suspends narration; resumes at the exact position, including mid-sentence.
- *Tap leave* → exits with no penalty, no warning, no confirmation dialog. Progress persists. **Nothing can be failed.**
- *Lowering the phone / backgrounding* → narration stops; nothing auto-resumes on return.
- *Scroll* → does not exist.
- **Must never interrupt:** a person mid-look. Nothing auto-advances, ever.

**Motion** Between stops: `Withdraw`, then a silent gap, then `Settle`. The gap is mandatory and non-zero. **Forbidden:** progress animations, celebratory transitions on stop completion, anything that draws the eye at the end of a stop — the end of a stop is precisely when the eye should return to the place.

**Audio** Narration, optional, per stop. **Starts only on explicit request** — never on stop entry. Stops immediately on: pause, leave, backgrounding, phone call, lowering the phone, or the person walking away from the referent. Resumes at exact position, never from the beginning. Works over headphones and speaker; respects the system mute switch, in which case the text alternative carries the full content with no loss and no prompting to unmute. Continues briefly with the screen locked so a person can pocket the phone and listen — **this is the ideal usage and must be supported.** **No music, ever, at any stop, at any volume.**

**Accessibility** Baseline, with overrides: **complete audio-text parity — the text alternative carries the full meaning, not a summary.** Never requires reading while moving. The referent is described in a way that does not assume sight of the screen.

**Failure** Baseline. Missing audio → text renders, silently. Missing stop → skipped silently, visit still completes. Interruption at any point → exact resume.

**Telemetry** `story_manually_requested` on the first explicit start; `story_segment_started` / `story_segment_completed` per stop; `screen_active_ms` aggregate. *Questions: do people ask for the story unprompted? Which stop loses them? What fraction of the visit is spent on the screen?*

**Acceptance criteria**
- The place has between 3 and 5 stops.
- Each stop presents exactly one idea and names one visible referent.
- No narration segment exceeds 90 s.
- Trailing silence after every segment is greater than zero.
- Story never begins automatically — an explicit tap is required for the first stop.
- Backgrounding during a stop and returning resumes at the identical position.
- With system mute engaged, the full content is available as text with no prompt to unmute.
- No surface in the story flow is scrollable.
- Aggregate screen-active time is under 25% of on-site dwell in field measurement.

---

# 10 · GUARDIAN SIGHT

**Purpose** Deepen a relationship that already exists — never create one.
**Patterns** F4 Afterword · G3 Complete Alternative
**Rules** AR-1, AR-2, AR-4, AR-5, AR-6 *(first four inviolable)*
**Enters with** Having already seen the place with their own eyes.
**Leaves with** *"So that's what I was looking at."*
**Decision enabled** *Do I want another layer?*
**Encourages** Optional curiosity after the fact.
**Prevents** Meeting the place through a screen; AR becoming the reason anyone came.

**Information hierarchy**
1. **One line offering it**, after the last stop. *An offer, not a call to action.*
2. **Primary: open.** 3. **Quiet: no thanks** — equal legitimacy, no persuasion.

**Hidden:** any suggestion that declining loses something; any device-capability messaging; any framing of this as the climax.

**Layout** The offer is a small, calm element after the final stop — never a full-screen takeover, never a modal. Inside the AR view: viewfinder and one exit affordance. Nothing else.

**Interactions**
- *Open* → camera layer, on request only.
- *Lower the phone* → **exits immediately to silence, not to a menu.** Reinforces that the place, not the app, is the destination.
- *Decline* → the journey continues identically. No follow-up, ever.
- **Must never:** auto-open on device motion. `useGuardianSightTrigger` may enable the layer but must not launch it.

**Motion** Entry to the camera is functional, not dramatic. **Forbidden:** any reveal ceremony — a ceremony here would make this the moment, which is prohibited.

**Audio** Optional narration only, on the same rules as Story. No music. No sound effects on layer activation.

**Accessibility** Baseline. Fully skippable with zero consequence. Never the sole carrier of any content. Unusable one-handed by nature — therefore never required.

**Failure** Baseline, with override: **silent degradation.** No camera, denied permission, poor light, unsupported device, low battery → Guardian Sight is simply not offered. No modal, no apology, no explanation of what is missing.

**Telemetry** `guardian_sight_offered`, `guardian_sight_opened`, `guardian_sight_closed`. *Questions: how many decline? Does declining change completion or satisfaction? — this determines whether AR earns future investment.*

**Acceptance criteria**
- Activation is impossible before the final story stop completes.
- The place completes end-to-end with the camera permission denied.
- No error, modal or explanatory text appears on any unsupported device.
- Lowering the phone exits to a silent state within one second.
- Declining produces no follow-up offer for the remainder of the journey.

---

# 11 · DEPARTURE

**Purpose** Notice they left, and say nothing.
**Patterns** D4 Held Silence · F6 Evidence *(deferred)*
**Rules** S-4, MEM-1, MEM-3 *(inviolable)*, Anti-patterns 22, 23
**Enters with** Afterglow, tiredness, hunger, the walk back to the car.
**Leaves with** A conversation we are not part of.
**Decision enabled** None.
**Encourages** Talking to each other.
**Prevents** Us converting a completed day into a queue.

**Information hierarchy** **Nothing.** No surface renders. *This is the most valuable hour of the journey and it belongs entirely to them.*

**Hidden:** the reward, the artifact, the next place, the share prompt, the rating request, the summary. *Proposing the next place on the way home from the last one teaches a person that our interest in them is transactional.*

**Layout** None.

**Interactions** None initiated by us. The app opened voluntarily shows the place name and nothing new.

**Motion** `None`.

**Audio** None.

**Accessibility** Baseline.

**Failure** Baseline. If departure cannot be detected, it resolves on next app open beyond the radius. Detection failure must never leave a journey permanently open.

**Telemetry** `departure_detected`, `visit_completed`. *Question: how long do people actually stay?*

**Acceptance criteria**
- Zero notifications, prompts, proposals or content are produced on the calendar day of the visit after departure.
- No rating request, share prompt or next-place suggestion appears at any point during or after departure.
- Opening the app voluntarily after departure shows no new content.
- A journey with undetected departure resolves on the next app open outside the radius.

---

# 12 · MEMORY

**Purpose** Give the day an index, two days later.
**Patterns** F6 Evidence · A2 Retellable Sentence
**Rules** PR-2, PR-6, PR-7, MEM-2, MEM-3 *(inviolable)*
**Enters with** Distance from the event; the memory has set.
**Leaves with** Something to look at years later, and possibly someone to send it to.
**Decision enabled** *Do I want to tell someone about this?*
**Encourages** One-to-one sharing, unprompted.
**Prevents** Scoring, collecting for its own sake, comparison.

**Information hierarchy**
1. **The place, the date, the weather that day.** *First because this is how memory is actually indexed — not by our structure.*
2. **The evidence object.** *Second: proof, low ceremony.*
3. **The retellable sentence.** *Third, positioned for the share.*
4. **The unanswered question**, restated. *Last, because it is what makes them think about going back.*
5. **Quiet: send to one person.**

**Hidden:** counters, sets, completion, rarity, the next place, anything purchasable. *A memory surface carrying commerce is a memory we have taken from them.*

**Layout** Single calm object, generous space, no chrome. Designed to be opened years later by someone who is not looking for anything.

**Interactions**
- *Tap share* → native sheet, one-to-one, prefilled with the sentence.
- *Tap back* → exits. Nothing follows.
- **Forbidden:** any interaction leading to a purchase, a next place, or a rating.

**Motion** Entry `Settle`, once. No repeat animation on subsequent opens — a memory should not perform.

**Audio** None.

**Accessibility** Baseline. Weather and date read as natural language.

**Failure** Baseline. Missing weather data → omitted silently, never guessed.

**Telemetry** `memory_available`, `place_shared_one_to_one`. *Question: does delayed evidence produce sharing that same-day reward would not?*

**Acceptance criteria**
- Unreachable before 48 h after departure.
- Contains no price, upsell, next-place proposal or rating request.
- Displays place, date and weather; weather omitted silently when unavailable.
- Survives app reinstall via persisted record.
- No counter, percentage, set indicator or rarity marker renders.

---

# §K — COMPONENT SPECIFICATION

*Contracts. Inputs are props; outputs are callbacks. Every component inherits the accessibility and failure baselines (§F) and may only use motion named in §B. **Reuse rule for all twenty: a component may not be reused on a surface where its governing rule does not apply** — reuse is by meaning, never by convenience.*

### PlaceProposal
**Purpose** Hand over one place. **In** astonishment, name, distance‑or‑null, image‑or‑null. **Out** `onOpen`, `onAnother`. **States** with distance · without distance · image missing. **A11y** astonishment as one utterance; distance spoken as a phrase. **Animation** `Immediate` in, `Carry` out. **Errors** absent distance renders nothing in its place. **Accept** exactly one instance mounts; renders fully with all optional inputs null; no counter or total renders.

### HonestCostBlock
**Purpose** Answer feasibility. **In** duration, difficulty, childViable, hours, seasons, road, parking, accessibility, weather — each value‑or‑unknown. **Out** none. **States** complete · partial · all‑unknown. **A11y** structured label/value list; unknown reads "not known". **Animation** arrives as one block; fields never stagger. **Errors** unknown is a rendered value, never omitted. **Accept** all six dimensions always present; no field visually or semantically outranks another.

### JourneyHeader
**Purpose** Say where you are without competing. **In** placeName, distance‑or‑null. **Out** `onBack`. **States** normal · silent (name only, quiet layer) · offline. **A11y** not a live region — must not re‑announce. **Animation** none. **Errors** none. **Accept** renders in the quiet layer during every protected window; produces zero announcements during silence.

### ArrivalSentence
**Purpose** One useful thing, once. **In** sentence (single sentence), walkDirection. **Out** `onAcknowledge`. **States** visible · withdrawing. **A11y** announced exactly once; never on refocus. **Animation** `Immediate` in, `Withdraw` out. **Errors** none — content is bundled. **Accept** emits exactly one output event; contains no sound, haptic or animation; rejects multi‑sentence input at build time.

### SilenceAffordance
**Purpose** Prove aliveness without asking for attention. **In** label. **Out** `onConfirm`. **States** idle only — it has no other state. **A11y** focusable, labelled, never announced spontaneously. **Animation** **forbidden.** **Errors** none. **Accept** static at all times; present in every silent state; never labelled as a fallback or alternative; tappable within one frame of mount.

### StoryStop
**Purpose** One idea, pointing at one thing. **In** referent, idea, textAlternative, audio‑or‑null, isInterpretation, trailingSilenceMs. **Out** `onNext`, `onPause`, `onLeave`. **States** reading · narrating · paused · trailing‑silence. **A11y** full audio/text parity; referent comprehensible without the screen. **Animation** `Withdraw` → gap → `Settle`. **Errors** missing audio renders text silently. **Accept** never scrollable; exactly one idea; trailing silence > 0; no auto‑advance under any condition.

### StoryProgress
**Purpose** Suggest there is more, without a fraction. **In** hasMore boolean. **Out** none. **States** more · last. **A11y** reads as "more to come" / "last". **Animation** none. **Errors** none. **Accept** never renders a number, fraction, percentage or dot count.

### GuardianEntry
**Purpose** Offer an optional layer. **In** available boolean. **Out** `onOpen`, `onDecline`. **States** offered · unavailable (renders nothing). **A11y** decline carries equal weight to open. **Animation** `Settle`, once. **Errors** unavailable renders nothing — no modal, no explanation. **Accept** cannot mount before the final stop completes; declining produces no further offer in the journey.

### MemoryCard
**Purpose** Index a day. **In** place, date, weather‑or‑null, evidence, sentence, question. **Out** `onShare`. **States** first view · subsequent views. **A11y** date and weather as natural language. **Animation** `Settle` on first view only; static thereafter. **Errors** missing weather omitted silently. **Accept** contains no price, rating, next‑place or set indicator; does not animate on re‑open.

### PrimaryAction
**Purpose** The one thing. **In** label, enabled. **Out** `onPress`. **States** enabled · disabled · pressed. **A11y** large target, clear role. **Animation** press feedback only. **Errors** disabled states never explain themselves accusingly. **Accept** at most one instance per surface; never mounts during a protected window.

### SecondaryAction
**Purpose** An honest alternative. **In** label. **Out** `onPress`. **States** default · pressed. **A11y** never announced as secondary. **Animation** press feedback only. **Errors** none. **Accept** never uses the same visual emphasis as PrimaryAction; never appears more than twice per surface.

### BackButton
**Purpose** One step back in my own path. **In** none. **Out** `onPress`. **States** default only. **A11y** standard back semantics; honours system back and edge gestures identically. **Animation** none. **Errors** none. **Accept** never loses journey state; during silence returns to a silent surface and never resumes content.

### OfflineBanner
**Purpose** Explain a blocked action, never a state. **In** reason. **Out** dismiss. **States** hidden (default) · shown. **A11y** polite announcement, never assertive. **Animation** `Settle`. **Errors** n/a. **Accept** hidden unless the person attempted something genuinely requiring connection; never shown on site; contains no error code or technical term.

### PermissionBanner
**Purpose** Ask once, in context, with a plain reason. **In** permission, reason. **Out** `onRequest`, `onSkip`. **States** unrequested · denied (renders nothing thereafter). **A11y** reason is legible and duplicated in body content. **Animation** `Settle`. **Errors** denial is silent and permanent — never re‑prompt. **Accept** mounts only on Journey Preparation; never blocks progression; never re‑appears after denial.

### WeatherNotice
**Purpose** Say when today is a bad idea. **In** caveat‑or‑null. **Out** none. **States** present · absent. **A11y** plain language, no icons alone. **Animation** none. **Errors** absent renders nothing. **Accept** never renders on site; never used to create urgency.

### ParkingCard
**Purpose** Remove the last unknown before leaving. **In** parkingNote, roadCondition. **Out** none. **States** known · partially known · unknown. **A11y** structured list. **Animation** none. **Errors** unknown rendered honestly. **Accept** appears only on Place and Preparation; unknown values visible, never hidden.

### SeasonBadge
**Purpose** State when this place is itself. **In** seasons. **Out** none. **States** in‑season · out‑of‑season · unknown. **A11y** text, never colour alone. **Animation** none. **Errors** unknown renders as unknown. **Accept** out‑of‑season never blocks; never phrased as scarcity or a deadline.

### ChildSuitability
**Purpose** Answer the question a parent asks first. **In** viable boolean, note‑or‑null. **Out** none. **States** yes · no · qualified. **A11y** explicit text; never an icon alone. **Animation** none. **Errors** none. **Accept** renders "no" as plainly as "yes" — honesty outranks conversion.

### DifficultyIndicator
**Purpose** Set the body's expectation. **In** difficulty, walkNote‑or‑null. **Out** none. **States** easy · moderate · hard. **A11y** word plus any visual; never colour or shape alone. **Animation** none. **Errors** none. **Accept** never understates; identical weight to other cost fields.

### JourneyTimeline
**Purpose** Show the shape of a day before committing. **In** durationMinutes, travelMinutes‑or‑null. **Out** none. **States** with travel · on‑site only. **A11y** reads as a sentence, not a chart. **Animation** none. **Errors** null travel renders on‑site duration only. **Accept** never renders progress, completion or elapsed time; never appears on site.

---

# §M — RESPONSIVE BEHAVIOUR

Behavioural adaptation, not layout adaptation.

| Context | Behaviour |
|---|---|
| **Phone portrait** | The design target. Everything is authored for this first. |
| **Phone landscape** | **Locked out for the slice.** Rotating on site means a person is holding the phone two-handed, which is the posture we are trying to prevent. Locking is more honest than supporting it badly. |
| **Very small phones** | The fact and the primary action are never sacrificed. Cost fields wrap and stack; images shrink first, then drop entirely. |
| **Very large phones** | Content does not stretch. Line lengths stay short; the primary action stays in the thumb arc rather than centred — the reachable zone matters more than symmetry. |
| **Tablet portrait** | Single centred column with wide margins. **Never a grid, never two proposals.** More space means more silence, not more content. |
| **Tablet landscape** | Same as tablet portrait, centred. We do not use the extra width. |
| **Web** | Proposal and Place only — these are the surfaces a person meets before travelling. Journey, arrival, story, Guardian Sight and memory are **not** available on web, because they require presence, and offering them at a desk would let someone complete a journey they never took. |

---

# §T — EXPERIENCE TIMELINE

*Canonical timing reference. All durations measured from persisted absolute timestamps, never from elapsed foreground time.*

```
COLD START
0.0s    App opens. Splash held only while fonts resolve.
≤3.0s   A named place is on screen. Zero taps. No sequence, no gate.
≤10.0s  Involuntary reaction to a fact about the world.        [Rulebook H-4]

DECISION                          (minutes to days later — usually days)
        Place opened. Six cost dimensions readable.
        Optionally: sent to exactly one person.
        Journey prepared. Location permission requested — once, here, in context.

TRAVEL
        Navigation handed to the OS maps app. We go silent.
        SILENCE — from hand-off to the final kilometre.        [zero output]
final km  One reassurance. Once. Nothing else.

ARRIVAL
0s      Threshold detected, or manual confirmation.
0–30s   EXACTLY ONE SENTENCE — you are here, walk that way.    [Rulebook A-1]
30s     Sentence withdraws. Screen keep-awake released.

PROTECTED WINDOW
30–90s  WALK-IN SILENCE — zero output.                         [A-2, inviolable]
        Threshold crossed → FIRST LOOK.
+0–30s  FIRST LOOK PROTECTED — zero output, minimum 30s.       [A-5, inviolable]
        Screen may sleep. Ideal state: phone in pocket.

STORY                             (only on explicit request)
        Stop 1 — one idea, one visible referent, ≤90s narration
        → mandatory trailing silence, >0                       [N-2, inviolable]
        Stop 2 … Stop 3 … [3–5 stops total]                    [P-2]
        Last stop → the unanswered question.

AFTERWORD                         (optional, declinable, no consequence)
        Guardian Sight offered. Never before this point.       [AR-1, inviolable]

DEPARTURE
        Distance > 3× radius sustained 10 min, or manual.
        Visit complete. NOTHING SHOWN.
        Rest of day: zero output.                              [S-4]

MEMORY
+48h    Evidence appears. Once. Place, date, weather, sentence.
        No score. No set. No commerce.                         [MEM-3, inviolable]
```

**Three numbers are inviolable and must be asserted in automated tests: 30 s minimum first-look silence, 0 output events in every protected window, 48 h memory delay.**

---

# §P — UX DESIGN PRINCIPLES

1. The interface never competes with the landscape.
2. The place is always stronger than the screen.
3. Silence is a designed interaction, with a duration and a boundary.
4. The phone is a guide, not a destination.
5. Every screen must justify its existence against being deleted.
6. If removing a screen improves the journey, remove the screen.
7. The interface disappears before the memory begins.
8. Nobody feels awe at second five. Design for the awkwardness.
9. One fact per surface. One idea per stop. One decision per screen.
10. Cost is answered in the same breath as the invitation.
11. Nothing on site may be scrollable.
12. Nothing auto-advances. Nothing auto-plays. Nothing auto-navigates.
13. The manual path is equal in status to the automatic one, never a fallback.
14. Aliveness is proven by responsiveness, never by a message.
15. A countdown converts silence into waiting. Never show one.
16. The screen is allowed to sleep. Do not fight the device.
17. Failure is never shamed, never explained, never coloured red.
18. Unknown is a value. Display it.
19. Motion is for orientation only; on site there is nothing to orient.
20. Text is never replaced by an image at a place — the real thing is present.
21. Sharing means one person. Never a feed.
22. Arrival is a threshold, not an achievement.
23. Progress reads as abundance or it is not shown.
24. Everything works with no signal, one hand, cold fingers and 30% battery.

---

# DESIGN HANDOFF CHECKLIST

*Every screen, component and change passes this before implementation. Any **NO** in the first block blocks the work.*

**Pattern and law**
1. Which pattern(s) from the Pattern Library does this implement? *(Naming none blocks the work.)*
2. Which Rulebook rules govern it, and are any of them inviolable?
3. Does it violate any rule? If yes, is there a written waiver with owner and expiry?

**Attention**
4. Does this increase or decrease attention on the place? *(Increase to the screen blocks the work on site.)*
5. Can it be quieter?
6. Can it be removed entirely?
7. Would the journey improve if this screen did not exist?
8. Does it create memory, or merely interaction?

**Behaviour**
9. What is the single decision this enables?
10. What behaviour does it prevent?
11. Does anything auto-play, auto-advance or auto-navigate? *(Any yes blocks the work.)*
12. Is there exactly one primary action?
13. Is any element on site scrollable? *(Yes blocks the work.)*

**Silence and motion**
14. Does this render during any protected window? *(Yes blocks the work.)*
15. Is any motion present in a forbidden zone?
16. Does any silence display a countdown, spinner or explanatory text?

**Honesty**
17. Are all applicable cost dimensions present, including honest unknowns?
18. Does any copy resolve the astonishment before arrival?
19. Are any banned adjectives present, in any of the shipped languages?

**Resilience**
20. Does it work with location denied?
21. Does it work fully offline?
22. Does it work with the camera unavailable?
23. Does it survive app kill and restart mid-state, with timing recomputed from absolute timestamps?
24. Is the manual path present and equal in status?

**Field reality**
25. Readable in direct sunlight at arm's length?
26. Operable one-handed, with a gloved or wet finger?
27. Does it avoid requiring reading while walking?
28. Tested at the largest system text size without truncation?
29. Does it carry any meaning by colour alone?
30. Full screen-reader parity, including silence *(no announcements during protected windows)*?

**Commerce and comparison**
31. Does any commercial element appear between arrival and departure? *(Yes blocks the work.)*
32. Does any surface expose another person's activity, a ranking or a comparison? *(Yes blocks the work.)*
33. Does any memory surface carry a prompt to buy, rate or continue?

**Telemetry**
34. Does every event answer a stated product question?
35. Is any location, movement trace or comparison data collected beyond boolean arrival verification? *(Yes blocks the work.)*

**Acceptance**
36. Is every acceptance criterion objectively testable, with no subjective wording?
