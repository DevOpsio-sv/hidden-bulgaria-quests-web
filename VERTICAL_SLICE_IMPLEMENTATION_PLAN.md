# VERTICAL SLICE IMPLEMENTATION PLAN
## Prohodna — the first complete journey

*Governed by THE_HEART_OF_THE_PROJECT_v2, PRODUCT_MANIFESTO, EXPERIENCE_BIBLE, EXPERIENCE_RULEBOOK, PRODUCT_RECONSTRUCTION_SPECIFICATION, PRODUCT_ECOSYSTEM_MAP, PRODUCT_PATTERN_LIBRARY.*

*Every claim below was verified against the repositories on 2026-07-24. Where an earlier document made a claim this audit contradicts, the correction is stated explicitly.*

**Scope:** one place, end to end, production quality. Nothing else.

---

# PART 1 — REPOSITORY TECHNICAL AUDIT

## 1.1 Platform and build

| System | Verified state | Files | Disposition |
|---|---|---|---|
| **Expo / RN** | Expo `~54.0.35`, React Native `0.81.5`, React `19.1.0`, New Architecture **enabled** | `package.json`, `app.json` | **Reuse.** Current, well within support. |
| **Router** | `expo-router ~6.0.24`, file-based, single `Stack`, three modal routes registered | `app/_layout.tsx` (111 lines) | **Reuse.** Only route additions needed. |
| **Build config** | `app.json` + `app.config.js` merge; ReactVision keys injected from env; `eas.json` present | `app.config.js`, `eas.json` | **Reuse.** |
| **Scheme** | `"scheme": "hiddenbulgariaquests"` | `app.json` | ⚠️ **Modify — see 1.9.** |
| **Tests** | **None.** No test files, no `__tests__`, no jest/jest-expo in devDependencies | — | ❌ **Missing entirely.** |
| **CI/CD** | **None.** No `.github/workflows` | — | ❌ **Missing entirely.** |
| **Scripts** | `lint` (expo lint), `typecheck` (tsc --noEmit). No test script | `package.json` | **Extend.** |

## 1.2 Application state

| System | Verified state | Files | Disposition |
|---|---|---|---|
| **Providers** | Six nested Contexts: Language → FieldPreferences → Auth → Entitlement → Progress → GlobalMenu | `app/_layout.tsx:71-100` | **Reuse.** Add one more inside Progress. |
| **Progress** | Context holding `completedPlaceIds: string[]`, persisted | `src/progress/index.tsx` | **Reuse.** Sufficient for the slice. |
| **Field prefs** | `{ useLocation, autoNavigateOnArrival, activationMode: 'gps'\|'manual' }` | `src/field/fieldPreferences.ts` | **Reuse — this is the key seam.** |
| **Persistence** | `readJsonStore` / `writeJsonStore` — localStorage on web, `expo-file-system/legacy` document dir on native | `lib/storage.ts` (37 lines) | **Reuse as is.** No new dependency needed. |
| **Auth** | Context + `expo-secure-store` storage; modal routes | `src/auth/*`, `app/auth/{gate,login,register}.tsx` | **Isolate.** Must not gate the slice. |
| **Entitlements** | Context, access control, RevenueCat + Mock payment services | `src/entitlements/*`, `src/payments/*` | **Isolate.** Prohodna slice runs free in pilot. |
| **Backend** | **Supabase** (`@supabase/supabase-js`, `src/lib/supabase.ts`, `supabase/` dir) | — | **Reuse.** *Correction: older architecture docs specify AWS Amplify. The code uses Supabase.* |

## 1.3 Location, geofence, proximity — *the most important finding in this audit*

| System | Verified state | Files | Disposition |
|---|---|---|---|
| **Geofence service** | Singleton, `Location.watchPositionAsync`, haversine, fires `onArrival` **once**; web no-op; permission requested inline | `lib/geofenceService.ts` (150 lines) | **Reuse with modification.** |
| **useGeofence** | Hook wrapper, returns `{ distanceMeters, isInside }` | `hooks/useGeofence.ts` (128 lines) | **Reuse as is.** |
| **useCheckpointProximity** | **A 5-state proximity model already exists:** `unknown` / `far` (>1000 m) / `approaching` (200–1000 m) / `arrival` (50–200 m) / `threshold` (≤ `gpsRadius`, default 100 m). Derived, no extra GPS watchers | `hooks/useCheckpointProximity.ts` (73 lines) | **Reuse — this is the backbone of the arrival work.** |
| **Background location** | **Not implemented.** No `expo-task-manager`, no background location permission | — | **Deliberately not added — see 8.4.** |

> ### CORRECTION TO A PRIOR DOCUMENT
> `PRODUCT_RECONSTRUCTION_SPECIFICATION` §1.7 and §3.14, and the Design Review Board report, state that the app **auto-navigates into the checkpoint on arrival** and call it the worst defect in the codebase.
>
> **That is overstated.** `app/map.tsx:74` guards the jump with `if (!checkpoint || !autoNavigateOnArrival) return;`, and `DEFAULT_FIELD_PREFERENCES.autoNavigateOnArrival` is **`false`** (`src/field/fieldPreferences.ts:14`).
>
> **The accurate defect:** the mechanism exists and is user-enablable; and — more importantly — **there is no designed arrival at all.** No protected silence, no threshold model, no practical sentence, no gap. The remedy is largely *additive*, which makes this slice substantially cheaper than the reconstruction spec assumed.

## 1.4 Content and data

| System | Verified state | Files | Disposition |
|---|---|---|---|
| **Content model** | Full TS interfaces — `CheckpointContent`, `RouteContent`, `PredelContent`, `RewardContent`, `Coordinates`, `QuizAnswerContent`, `ARScene` | `types/index.ts` | **Extend additively.** |
| **Content data** | Generated bundle, 849 lines | `data/gameContent.ts` | **Extend additively.** |
| **Prohodna** | Present as **`place-2-1-4`**, `nameEn: 'PROHODNA: The Eyes of God'`, guru monologue drafted (bg + en), artifact `The Watching Stone / Камъкът на Паметта` special-cased at lines 743–758, 794–803 | `data/gameContent.ts` | **Reuse.** Real content already exists. |
| **Existing fields available** | `gpsCoordinates`, `gpsRadius`, `guruMonologueBg/En`, `storyLayerBg/En`, `arSceneId`, `quizQuestion*`, `quizAnswers`, `artifactId`, `alwaysFree` | `types/index.ts:135-165` | **Reuse.** |
| **Missing for the slice** | astonishment, retellable sentence, unanswered question, threshold coords + bearing, walking direction, practical arrival sentence, duration, difficulty, child viability, season, hours, parking, road, safety, story stops | — | **Add — see Part 6.** |
| **ID mismatch** | App uses `place-2-1-4`; website uses `prohodna-cave`. Confirms `FOUNDATION_REVIEW` Issue 01, still open | both repos | ⚠️ **Must be bridged in PR 1.** |

## 1.5 Localisation

15 locale files (`translations/bg.ts` … `zh.ts`) plus `src/i18n`, `useLanguage()`, `localize()`, `t()`. **Reuse.** *Slice ships bg + en strings only; other locales fall back.*

## 1.6 AR, audio, narration, reward

| System | Verified state | Files | Disposition |
|---|---|---|---|
| **AR** | `@reactvision/react-viro ^2.55.0`, `expo-camera`, `three` + `@react-three/fiber`, `expo-gl`, Skia | `app/ar/[id].tsx`, `components/GuardianCamera.tsx`, `components/ARSceneRenderer.tsx`, `services/ar/` | **Isolate + re-site.** Not removed. |
| **AR trigger** | `useGuardianSightTrigger` — DeviceMotion pitch 50–100°, falls back to `isRaised=true` when unsupported | `hooks/useGuardianSightTrigger.ts` | **Reuse with modification** — must not auto-open. |
| **Audio** | `expo-audio`; intro song controller and voice controller | `lib/introAudio.ts` | **Reuse.** Narration playback exists. |
| **Narration** | `GuruNarration.tsx`, emits `guruComplete` | `components/GuruNarration.tsx` | **Reuse with modification** — needs segmentation + trailing silence. |
| **Reward** | `RewardMemory.tsx`, `app/reward/[id].tsx` | — | **Reuse with modification** — re-timed to post-departure. |
| **Quiz** | `app/quiz/[id].tsx` | — | **Hide for the slice.** Not deleted. |

## 1.7 Checkpoint screen — current behaviour

`app/checkpoint/[id].tsx` (429 lines): computes `isAtLocation = proximity.state === 'threshold' || manualAtPlace`; derives `experienceTier`; runs a **1.5 s timer that reveals a Skip control**; plays `GuruNarration` immediately; on `guruComplete || skipRequested` activates the CTA; CTA routes to `/ar/[id]`. Manual arrival exists and logs `manual_arrival`.

**Contradictions with the governing documents:** narration begins on mount with no arrival silence (**A-1/A-2/A-4/A-5**, four inviolable); AR is the terminal CTA and therefore the peak (**AR-2** inviolable); no threshold model (**A-3**); no stop segmentation (**P-1/P-2**).

## 1.8 Telemetry

`logFieldEvent(name, payload)` with 7 event names, **dev-only** (`if (!__DEV__) return;`), TODO for production forwarding. `src/field/fieldEvents.ts`. **Reuse and extend** — the seam is correct, the sink is missing.

## 1.9 Deep linking — *verified defect*

- App scheme: `"scheme": "hiddenbulgariaquests"` (`app.json:9`)
- Website emits: `appDeepLink: "unlockingbulgaria://places/prohodna-cave"` (`src/data/seoPages.ts:360`), plus `unlockingbulgaria://audio/prohodna-cave`

**These do not match. Every website deep link is currently dead.** No `expo-linking` handler is registered for a `places/` path either. Fixed in PR 5.

## 1.10 Website

Astro 5, Cloudflare Pages. `src/data/seoPages.ts` holds a rich `SeoPlace` model — coordinates, duration, difficulty, `childFriendly`, images, audio, nearby, deep link, 14-language translations, `guardianSight.overlayImage`. **This is the strongest existing asset across both repos and needs the least work.**

---

# PART 2 — CURRENT FLOW AS CODED

```
COLD START
  └─ app/_layout.tsx — fonts load; splash held; 6 providers mount
  └─ app/index.tsx — HOME (747 lines)
        Timed reveal: nav 1.5s · kicker 3s · title 4.5s · subtitle 5.7s
        copy 9s · PRIMARY CTA 13s · secondary 13.6s · SKIP 14.8s
        Video background loops; intro audio; StarField
        ▸ No place named. No fact. No distance. No action for 13 s.

  → /intro                app/intro.tsx — scroll narrative, Europe map, continuity steps
  → /map                  app/map.tsx — all Предели as cards
        GeofenceWatcher per predel → useGeofence on that predel's FIRST checkpoint
        onArrival → if (autoNavigateOnArrival) navigateToCheckpoint()   [default FALSE]
        FieldStatusBanner, connectivity, epoch filter
  → /predel/[id]          → /route/[id] → /checkpoint/[id]

CHECKPOINT  app/checkpoint/[id].tsx
  useCheckpointProximity → unknown|far|approaching|arrival|threshold
  arrival (50–200m)  → edge pulse animation loop
  threshold (≤radius)→ isAtLocation = true
  GuruNarration plays ON MOUNT · skip control appears at 1.5 s
  guruComplete || skipRequested → CTA activates
  CTA → /ar/[id]  ──▶ AR IS THE TERMINAL EXPERIENCE
  → /quiz/[id] → /reward/[id]

AUTH   /auth/gate | login | register  (modals, entitlement-triggered)
```

**Rulebook violations in the coded path**

| Rule | Status | Evidence |
|---|---|---|
| **H-1** place before product *(inviolable)* | ❌ | `app/index.tsx` TIMELINE: no place, 13 s to action |
| **H-3** no scale/zero-states on first surface | ❌ | `app/map.tsx` shows all Предели with progress |
| **H-4** curiosity ≤10 s | ❌ | First actionable moment at 13 s |
| **A-1** ≤1 sentence in first 30 s | ❌ | No arrival stage exists |
| **A-2 / A-4 / A-5** protected silences *(inviolable)* | ❌ | Narration on mount |
| **A-3** registered threshold | ❌ | No threshold data model |
| **A-7** arrival unrewarded *(inviolable)* | ⚠️ | Edge-pulse loop fires at `arrival` |
| **AR-1 / AR-2** AR never first, never the moment *(inviolable)* | ❌ | AR is the terminal CTA |
| **AR-4** non-AR parity *(inviolable)* | ❌ | Completion path runs through `/ar/[id]` |
| **P-1 / P-2** one idea per stop, 3–5 stops | ❌ | Single monologue |
| **N-2** trailing silence *(inviolable)* | ❌ | Not modelled |
| **D-3** costed proposal | ❌ | No cost fields in app content |
| **Q-3** silent abandonment | ✅ | No completion nagging exists |
| **G2/AT-6** offline + field conditions | ⚠️ | Connectivity detected; no field-test record |

---

# PART 3 — TARGET VERTICAL-SLICE FLOW

## 3.1 Architecture decision: how to hold journey state

**Options considered**

| Option | Verdict |
|---|---|
| Route-derived state only | ❌ Cannot survive backgrounding or restart mid-silence; timers are not routes |
| Extend `ProgressProvider` | ❌ Conflates permanent completion with ephemeral journey state |
| Formal state machine library (XState) | ❌ New dependency, new idiom, ~40 kB, team has no existing familiarity; the graph is small and linear |
| **Context + `useReducer` "journey coordinator", persisted through `lib/storage.ts`** | ✅ **Recommended** |

**Why:** the codebase already uses exactly this shape five times over (`ProgressProvider`, `FieldPreferencesProvider`, `AuthProvider`, `EntitlementProvider`, `LanguageProvider`). A reducer gives explicit, testable transitions with zero new dependencies, and `lib/storage.ts` already provides cross-platform persistence. Proximity is *derived input*, not state — it continues to come from `useCheckpointProximity`.

**New:** `src/journey/JourneyProvider.tsx`, `journeyReducer.ts`, `journeyTypes.ts`, `journeyStorage.ts` — mounted inside `ProgressProvider` in `app/_layout.tsx`.

## 3.2 States

| State | Entry | Visible | Allowed | Forbidden | Exit | Persisted | Offline | Permission denied | Recovery |
|---|---|---|---|---|---|---|---|---|---|
| `IDLE` | Cold start, no active journey | The proposal | Open place | Any structure, counters, scale | Place opened | — | Full (content bundled) | Show distance as unknown, never block | — |
| `PLACE_OPEN` | Proposal opened | Astonishment + honest cost | Prepare, share, back | Price, lore, progression | Prepare tapped / back | `placeId`, timestamp | Full | Distance hidden, everything else shown | Restore |
| `PREPARED` | Offline content cached | Confirmation + hand-off | Open navigation, cancel | Story content | Nav opened / cancelled | `preparedAt` | Full | Prompt permission at this point only | Restore |
| `EN_ROUTE` | External nav opened | Nothing until proximity | Return to app | **Any story** | `approaching` | `startedAt` | Full | Manual-arrival path offered | Restore |
| `APPROACHING` | `proximity.state === 'approaching'` | One reassurance in the last km | — | Story, notifications | `arrival` or `threshold` | last known state | Full | Manual arrival | Restore |
| `ARRIVED` | `threshold`, or manual confirm | **One sentence: you are here + walk this way** | Acknowledge | Story, sound, haptic, reward, AR, notification | +30 s | `arrivedAt` | Full | Manual confirm always available | Timestamp-based, survives restart |
| `WALK_IN_SILENCE` | `arrivedAt + 30 s` | **Nothing** | Manual "I'm at the place" | **All output** | Threshold crossed or manual | — | Full | — | Recompute from `arrivedAt` |
| `FIRST_LOOK` | Threshold crossed / manual | **Nothing** | Nothing | **All output** *(inviolable)* | +30 s minimum | `firstLookAt` | Full | — | Recompute from `firstLookAt` |
| `STORY_AVAILABLE` | `firstLookAt + 30 s` | One low-key affordance | Begin story | Auto-start, sound, badge | Story begun | — | Full | — | Restore |
| `IN_STORY` | User began | Current stop, one idea | Next, pause, leave | >1 idea, failure states | Last stop or leave | `stopIndex` | Full — audio + text bundled | — | Resume exact stop |
| `AFTERWORD_AVAILABLE` | Story complete | Guardian Sight offered | Open AR, decline | Auto-open, requirement | Opened or departed | — | Degrades silently | Camera denied → silent skip | Restore |
| `DEPARTING` | Distance > threshold ×3, sustained 10 min | Nothing | — | Reward, proposals, upsell | Confirmed | `departedAt` | Full | Manual "I've left" | Restore |
| `VISIT_COMPLETE` | Departure confirmed | Nothing that day | — | **Next-place proposal same day** | `departedAt + 48 h` | Completion record | Full | — | Restore |
| `MEMORY_AVAILABLE` | `departedAt + 48 h` | Evidence appears once | View, share to one person | Ranking, scoring, upsell | — | Memory record | Full | — | Restore |

---

# PART 4 — EXPERIENCE FLOW

## 4.1 Discovery
Cold start shows **one place**: astonishment, name, distance. No menu, no map, no counters. Prohodna is the only proposal in the slice — hard-coded selection is acceptable and honest at n=1; *do not build a recommendation engine.*
**Permission denied:** show everything except distance; never block, never re-prompt, never explain what they are missing. **Far away:** show real distance and reframe as planning; do not hide the place. **Offline:** fully functional — the proposal is bundled.

## 4.2 Place decision
Astonishment · distance · realistic duration · difficulty · access hours · child viability · season · road and parking · accessibility · weather caveat.
Primary: **Prepare this journey.** Secondary: **Send to one person** (native share sheet, one-to-one — pattern C2).
Price is absent from the pilot.

## 4.3 Journey preparation
Cache media and narration through existing asset handling; confirm readiness in one line; hand off to the device's navigation app via `expo-linking` (`geo:` / Apple Maps URL). **We never render turn-by-turn.** Returning to the app resumes at `EN_ROUTE`. **No background location** — see 8.4.

## 4.4 Approach
The app is silent until `approaching`. In the final kilometre, exactly one reassurance: *this road — keep going.* Nothing else. No story, ever, in the car.

## 4.5 Arrival
Detected by `useCheckpointProximity` reaching `threshold`, or by manual confirmation, which is always available and equal in status. **False geofence:** if `threshold` fires but the user does not acknowledge within 5 minutes, silently revert to `APPROACHING` — never announce the correction.
One sentence, then nothing. Silence begins immediately after it.
**Distinguishing intentional silence from breakage without adding content:** a single always-present, non-animated, low-contrast affordance (`I'm at the place`) that is visible in every silent state. It is not an instruction and it is not a countdown. It proves the app is alive by being tappable. ⚠️ **Requires field validation — this is the hardest craft problem in the slice.**

## 4.6 First look
The threshold is a stored coordinate plus a bearing (see 6.2). If it cannot be reliably detected — GPS drift in a limestone gorge is likely at Prohodna — the manual affordance is the primary path, not a fallback. Story becomes available 30 s after the look, and it **arrives as an option, never as a launch**.

## 4.7 On-site story
Three to five stops, one idea each, each pointing at something visible from a stated standing position. Audio and text parity always. Fully bundled offline. Interruption at any point resumes exactly. Nothing can be failed or missed.

## 4.8 Guardian Sight
Offered only after the story completes. Never required. Complete non-AR path exists by construction (the story *is* the path). Degrades silently on unsupported devices, denied camera permission, or poor light. Lowering the phone exits to silence, not to a menu.

## 4.9 Departure
Detected by sustained distance beyond three times the radius for 10 minutes, or manual. Visit marked complete. **Nothing is shown on the day.** Evidence appears 48 hours later — one object, with the date, the place, and the weather.

---

# PART 5 — SCREEN AND SURFACE INVENTORY

*Compact form. All ten app surfaces plus three website surfaces.*

### S1 · Cold Start Proposal — `app/index.tsx` — **MODIFIED**
Purpose: hand over one place in zero taps. Emotional target: *"where is that?"* by second ten.
Data: astonishment, name, distance, one image. Visible: those four plus one action. Hidden: everything else.
Primary: open place. Secondary: another one *(no-op in slice — single place)*.
Loading: previous proposal from cache, never a spinner. Offline: identical. Permission denied: distance omitted silently. Error: fall back to bundled Prohodna.
A11y: 26 pt minimum, sunlight contrast, screen-reader labels.
Analytics: `app_opened`, `first_place_displayed`.
Rulebook: H-1, H-2 (≤3 choices), H-3, H-4.
Reuse: `LivingBackground` motifs, `StarField`, typography tokens, `LanguageSwitcher`. New: `PlaceProposal`.
**Accept:** cold install → named place visible ≤3 s, 0 taps; no counter, no scale, no tutorial; skip/gate timers removed.

### S2 · Prohodna Place Detail — `app/place/[id].tsx` — **NEW** *(mirrors website place page)*
Purpose: honest cost. Emotional target: *"we could do this Saturday."*
Visible: astonishment, distance, duration, difficulty, hours, child viability, season, road/parking, accessibility, weather. Hidden: story, moment, AR, lore, price.
Primary: prepare journey. Secondary: send to one person.
Offline: full. Permission denied: no distance, no explanation.
Analytics: `place_opened`, `planning_details_opened`, `place_shared_one_to_one`.
Rulebook: D-3, D-4, P-6. Reuse: theme tokens, `useLanguage`. New: `HonestCostBlock`.
**Accept:** all six cost fields render or show honest *unknown*; no price; share opens native sheet.

### S3 · Journey Preparation — `app/journey/prepare.tsx` — **NEW**
Purpose: cache offline content, hand off navigation. Visible: one readiness line, one hand-off action.
Loading: real progress for caching only. Offline: allowed if already cached; otherwise honest. Permission: location requested **here**, first time, in context.
Analytics: `journey_started`, `external_navigation_opened`.
Rulebook: G2, AT-6. New: `PrepareJourney`.
**Accept:** content available with network disabled afterwards; navigation opens the OS app; cancel leaves no residue.

### S4 · Approach — *no screen* — **NEW behaviour in JourneyProvider**
Silent until `approaching`. One reassurance in the final kilometre. Forbidden: story, notifications, sound.
Analytics: `approach_detected`. Rulebook: D1 pattern, S-1.
**Accept:** zero output events between `EN_ROUTE` and final kilometre.

### S5 · Arrival — `app/journey/arrival.tsx` — **NEW**
Visible 0–30 s: one sentence (you are here + walk direction). Then nothing.
Forbidden: reward, sound, haptic, notification, animation, AR, story.
Manual confirm always present. Analytics: `arrival_detected`, `arrival_manually_confirmed`, `practical_arrival_message_displayed`, `protected_silence_started`.
Rulebook: A-1, A-2, A-7, A-8 *(inviolable)*. Reuse: `GeofenceIndicator` (heavily reduced). New: `ArrivalSentence`.
**Accept:** ≤1 output event in first 30 s; zero thereafter until first look completes; app restart preserves timing from `arrivedAt`.

### S6 · Protected First Look — *state, not screen* — **NEW**
Visible: nothing but the persistent manual affordance. Duration ≥30 s.
Rulebook: A-3, A-4, A-5, AR-1 *(inviolable)*. Analytics: `threshold_crossed`.
**Accept:** automated log assertion of zero output events across the window.

### S7 · Story Stop — `app/checkpoint/[id].tsx` — **MODIFIED**
Visible: one idea, one visible referent. Primary: next. Secondary: pause/leave.
Offline: full. Interruption: resumes at exact `stopIndex`.
Analytics: `story_manually_requested`, `first_story_segment_started`, per-stop start/complete.
Rulebook: P-1, P-2, N-1 (≤90 s), N-2, N-4, N-7, AT-2.
Reuse: `GuruNarration` (segmented), existing monologue content. New: `StoryStop`, `StopProgress` *(non-numeric)*.
**Accept:** 3–5 stops; every stop names a visible referent; trailing silence non-zero; no failure state exists.

### S8 · Guardian Sight Entry — `app/ar/[id].tsx` — **MODIFIED**
Offered only after story completion. Silent degradation. Camera-down exits to silence.
Rulebook: AR-1, AR-2, AR-4, AR-5 *(inviolable)*. Reuse: `GuardianCamera`, `ARSceneRenderer`, `useGuardianSightTrigger` (auto-open removed).
**Accept:** activation impossible before `AFTERWORD_AVAILABLE`; place completes end-to-end with camera disabled; no error modal on unsupported devices.

### S9 · Departure — *state* — **NEW**
Detection: sustained distance > 3× radius for 10 min, or manual. **Nothing visible.**
Analytics: `departure_detected`, `visit_completed`. Rulebook: S-4, MEM-1, MEM-3.
**Accept:** zero product output on the day of the visit after departure.

### S10 · Delayed Memory — `app/memory/[id].tsx` — **NEW**
Appears ≥48 h after departure. One object: place, date, weather. No score, no set, no upsell.
Rulebook: PR-2, PR-6, PR-7, MEM-3 *(inviolable)*. Reuse: `RewardMemory` visuals, existing artifact assets.
**Accept:** unreachable before 48 h; contains no commercial element; survives reinstall via persisted record.

### W1 · Website landing hero — `src/components/HeroSection.astro` + `[lang]/index.astro` — **MODIFIED**
Prohodna as section one with astonishment and cost. Remove `progress: 0` from domain cards. Portal mechanic reduced to imagery.
**Accept:** a named place is above the fold; no zero-state renders.

### W2 · Website Prohodna page — `[lang]/places/[slug].astro` — **MODIFIED (light)**
Already strongest surface. Add astonishment and retellable sentence; ensure the moment is not spent.
**Accept:** page states cost fields; story teaser does not resolve the astonishment.

### W3 · App CTA / deep link — `src/components/DownloadCTA.astro`, `src/data/seoPages.ts` — **MODIFIED**
Carry place intent across install. **Fix scheme mismatch (1.9).**
**Accept:** `unlockingbulgaria://places/prohodna-cave` opens the app at Prohodna; uninstalled devices reach the store with campaign parameters.

---

# PART 6 — CONTENT AND DATA MODEL

Additive only. No migration. Every field optional so existing 849 lines of `gameContent.ts` continue to typecheck.

## 6.1 Proposed additions to `types/index.ts`

```ts
/** Physical arrival geometry. Required before a place may ship (Rulebook A-3). */
export interface ThresholdContent {
  coordinates: Coordinates;       // where the place becomes visible/enclosing
  bearingDegrees: number;         // direction the Keeper faces at that point
  toleranceMeters?: number;       // default 25
  walkDirectionBg: string;        // "по пътеката вдясно"
  walkDirectionEn?: string;
}

/** Everything needed to decide whether to go (Rulebook D-3). */
export interface PracticalContent {
  distanceHintBg?: string;
  durationMinutes: number;        // realistic time ON SITE
  difficulty: 'easy' | 'moderate' | 'hard';
  childViable: boolean;
  childViabilityNoteBg?: string;
  accessHoursBg?: string;         // undefined => "unknown", shown as unknown
  bestSeasonsBg?: string;
  roadConditionBg?: string;
  parkingBg?: string;
  accessibilityBg?: string;       // limited-mobility route, or honest absence
  weatherCaveatBg?: string;
  safetyNotesBg?: string;
}

/** One idea, pointing at one visible thing (Rulebook P-1, N-4). */
export interface StoryStopContent {
  id: string;
  order: number;
  visibleReferentBg: string;      // what the listener can see from here
  visibleReferentEn?: string;
  narrationBg: string;            // <= 90s spoken (Rulebook N-1)
  narrationEn?: string;
  textAlternativeBg: string;      // parity, always (Rulebook G3)
  textAlternativeEn?: string;
  audioAsset?: string;
  trailingSilenceMs: number;      // never 0 (Rulebook N-2)
  isInterpretation?: boolean;     // marked in-the-moment (Rulebook N-7)
}

export interface CheckpointExperienceContent {
  astonishmentBg: string;         // the one fact (Rulebook D-1)
  astonishmentEn?: string;
  retellableSentenceBg: string;   // the export artifact (Rulebook C-1)
  retellableSentenceEn?: string;
  unansweredQuestionBg: string;   // what they leave holding (Rulebook P-4)
  unansweredQuestionEn?: string;
  arrivalSentenceBg: string;      // <= 1 sentence, 0-30s (Rulebook A-1)
  arrivalSentenceEn?: string;
  threshold: ThresholdContent;
  practical: PracticalContent;
  stops: StoryStopContent[];      // 3-5 (Rulebook P-2)
  guardianSightOptional?: boolean;    // default true
  departureRadiusMultiplier?: number; // default 3
  memoryDelayHours?: number;          // default 48
}

// Additive on the existing interface — all optional, nothing breaks:
export interface CheckpointContent {
  // …existing fields unchanged…
  experience?: CheckpointExperienceContent;
  /** Cross-surface identity bridge (website uses `prohodna-cave`). */
  webSlug?: string;
}
```

## 6.2 Prohodna instance
`place-2-1-4` gains `webSlug: 'prohodna-cave'` and a fully populated `experience` block. The existing guru monologue (`data/gameContent.ts:264`) is **segmented, not rewritten** — the eight authored beats map to 4 stops. `gpsCoordinates` and `gpsRadius` already exist; `threshold.coordinates` and `bearingDegrees` require **one field visit** and cannot be desk-derived.

---

# PART 7 — COMPONENT PLAN

| File | Class | Action |
|---|---|---|
| `app/index.tsx` | **REPLACE (behaviour) / EXTRACT (assets)** | Remove the 8-stage TIMELINE gate. Extract video, `StarField`, gradient, typography into `components/atmosphere/` for reuse. Render `PlaceProposal`. |
| `app/intro.tsx` | **REUSE AS IS, RE-SITED** | No code change; reachable post-visit only. Zero content loss. |
| `app/map.tsx` | **REUSE WITH MODIFICATION** | Extract `GeofenceWatcher` (lines ~48–85). Not the primary surface in the slice; otherwise untouched. |
| `app/checkpoint/[id].tsx` | **REUSE WITH MODIFICATION** | Remove 1.5 s skip timer and mount-time narration; consume `JourneyProvider`; render `StoryStop`. |
| `app/quiz/[id].tsx` | **HIDE** | Untouched, unreachable in slice. |
| `app/reward/[id].tsx` | **REUSE WITH MODIFICATION** | Re-timed to `MEMORY_AVAILABLE`. |
| `app/ar/[id].tsx` | **REUSE WITH MODIFICATION** | Entry gated on `AFTERWORD_AVAILABLE`. |
| `app/ar-demo.tsx` | **HIDE** | Retained for web/marketing; not in app first-run. |
| `app/profile.tsx` (3 lines) | **RETIRE LATER** | Out of scope. |
| `app/settings.tsx`, `screens/settings` | **REUSE AS IS** | Field prefs already live here. |
| `app/auth/*` | **ISOLATE** | Must not trigger during the slice. |
| `app/subscription.tsx`, `src/payments/*`, `src/entitlements/*` | **ISOLATE** | Prohodna free in pilot. |
| `components/GeofenceIndicator.tsx` | **REUSE WITH MODIFICATION** | Must render nothing during protected silences. |
| `components/GuardianCamera.tsx`, `ARSceneRenderer.tsx`, `services/ar/` | **REUSE AS IS** | Only entry timing changes. |
| `components/GuruNarration.tsx` | **REUSE WITH MODIFICATION** | Accept a single stop; emit completion; enforce trailing silence. |
| `components/RewardMemory.tsx` | **REUSE AS IS** | Rendered later in time. |
| `hooks/useCheckpointProximity.ts` | **REUSE AS IS** | The backbone. No change. |
| `hooks/useGeofence.ts`, `lib/geofenceService.ts` | **REUSE WITH MODIFICATION** | Permission request moves to prepare step. |
| `hooks/useGuardianSightTrigger.ts` | **REUSE WITH MODIFICATION** | Must not auto-open; gate on journey state. |
| `lib/storage.ts` | **REUSE AS IS** | Journey persistence rides on it. |
| `src/field/fieldEvents.ts` | **REUSE WITH MODIFICATION** | Extend event union; add production sink. |
| — | **NEW** | `src/journey/{JourneyProvider,journeyReducer,journeyTypes,journeyStorage}.ts(x)`, `components/place/{PlaceProposal,HonestCostBlock}`, `components/journey/{PrepareJourney,ArrivalSentence,StoryStop,SilenceAffordance}`, `app/place/[id].tsx`, `app/journey/{prepare,arrival}.tsx`, `app/memory/[id].tsx` |
| `src/components/HeroSection.astro`, `[lang]/index.astro` | **REUSE WITH MODIFICATION** | Reorder; Prohodna first. |
| `src/components/PortalCard.astro` (671 lines) | **REUSE WITH MODIFICATION** | Keep visual; remove the "awaken the seal" reward loop. |
| `src/components/DownloadCTA.astro` | **REUSE WITH MODIFICATION** | Carry place intent; fix scheme. |
| `src/components/LivingMap.astro` | **HIDE** | Demoted below place content; no code change. |
| `src/data/seoPages.ts` | **REUSE WITH MODIFICATION** | Add astonishment + retellable sentence; align deep link. |

---

# PART 8 — TECHNICAL DESIGN

**8.1 Journey state.** Context + reducer (§3.1). Transitions are pure functions — the entire Part 3 table is unit-testable without a device.

**8.2 Persistence.** `lib/storage.ts`, key `unlocking-bulgaria-journey-v1`. **Store absolute timestamps, never remaining durations** — this is what makes silence survive backgrounding, restart and clock changes. On resume, recompute state from `now - arrivedAt`.

**8.3 Offline content.** Prohodna assets bundled or cached at prepare time via existing `expo-asset`. `useConnectivity` already detects state. No new library.

**8.4 Location and background.** Foreground only. **Deliberately not adding `expo-task-manager` / background geofencing:** it requires an always-on permission that contradicts the privacy stance, materially complicates review on both stores, and is unnecessary because the person is holding the phone as they arrive. The manual affordance covers the gap at a fraction of the cost. *Revisit only if field tests show manual arrival failing.*

**8.5 Threshold detection.** Distance to `threshold.coordinates` within `toleranceMeters`, optionally corroborated by device heading vs `bearingDegrees` (`expo-sensors`, already installed). **Prohodna is a limestone gorge — assume GPS is unreliable and treat the manual path as primary.**

**8.6 Silence timers.** Derived from persisted timestamps, never `setTimeout` alone. A timer is a rendering optimisation; the timestamp is the truth.

**8.7 Deep links.** Add `unlockingbulgaria` to the app scheme alongside `hiddenbulgariaquests` (Expo accepts an array), rather than changing published website URLs. Register `places/:slug` and resolve via `webSlug`.

**8.8 Analytics sink.** Extend `logFieldEvent`; add a buffered writer that persists offline and flushes on reconnect. **No new analytics SDK for the pilot** — the sample size is a handful of families, and a JSON file plus manual export is sufficient and more private.

**8.9 Departure and memory.** Both are pure functions of persisted timestamps and current distance. No server, no scheduler, no push notification.

**Libraries added: none.**

---

# PART 9 — ANALYTICS AND VALIDATION HOOKS

Extend `FieldEventName` with: `app_opened`, `first_place_displayed`, `place_opened`, `planning_details_opened`, `journey_started`, `external_navigation_opened`, `approach_detected`, `arrival_detected`, `arrival_manually_confirmed`, `arrival_message_displayed`, `protected_silence_started`, `threshold_crossed`, `story_manually_requested`, `story_segment_started`, `story_segment_completed`, `screen_active_ms`, `guardian_sight_offered`, `guardian_sight_opened`, `guardian_sight_closed`, `departure_detected`, `visit_completed`, `memory_available`, `place_shared_one_to_one`.

**Two derived measures that matter more than any of the above:** output-event count inside each protected silence window (target: **zero**), and screen-active milliseconds ÷ on-site dwell (target: **<25%**, Rulebook AT-1).

**Privacy boundaries.** Store *event + timestamp + place id*. **Never** store continuous location, a movement trace, or any coordinate beyond a boolean arrival verification. No cross-user comparison data — Rulebook MEM-4/MEM-5 are inviolable and this is where they get violated by accident. `screen_active_ms` is aggregate duration only, never content-level attention. Pilot data is local-first and exported manually with participant consent.

---

# PART 10 — TEST STRATEGY

**Prerequisite: there is no test infrastructure.** PR 0 adds `jest-expo`, `@testing-library/react-native`, a `test` script and a GitHub Actions workflow running `lint`, `typecheck`, `test`.

**Unit** — `journeyReducer` transitions (every row of the Part 3 table); timestamp recomputation after simulated restart; silence-window arithmetic; content validators (3–5 stops, non-zero trailing silence, referent present, all six cost fields, threshold present).
**Integration** — deep-link resolution `places/prohodna-cave` → `place-2-1-4`; persistence round-trip; permission-denied path; offline cold start; navigation hand-off.
**Component** — `PlaceProposal` (renders with and without distance), `HonestCostBlock` (honest unknowns), `ArrivalSentence` (≤1 output), `StoryStop` (audio/text parity), `SilenceAffordance` (present, non-animated).
**E2E** — first install · location denied · offline cold start · return from external navigation · false geofence then revert · manual arrival · **restart during protected silence** · interruption mid-stop · Guardian Sight unavailable · visit completion · memory at +48 h.

**Not testable without going there** — and therefore the actual acceptance test: whether silence reads as intentional rather than broken; whether GPS resolves at the cave mouth; whether the threshold bearing is right; whether the arrival sentence is enough to find the path; whether a family with two children behaves as designed; whether the astonishment survives the drive. **Minimum: three families, two devices, one wet day.**

---

# PART 11 — PR-SIZED IMPLEMENTATION PLAN

*Every PR is behind `FEATURE_PROHODNA_SLICE` (Expo config extra + a `src/config` flag) unless noted. Every PR is revertable by flag.*

| PR | Objective | Files | Depends | Tests | Risk | Ships alone |
|---|---|---|---|---|---|---|
| **0** | Test + CI foundation | `package.json`, `jest.config.js`, `.github/workflows/ci.yml` | — | Smoke | **Low** | ✅ |
| **1** | Content contract + Prohodna data | `types/index.ts`, `data/gameContent.ts`, new `data/contentValidation.ts` | 0 | Unit validators | **Low** | ✅ |
| **2** | Remove cold-start gate behind flag; extract atmosphere assets | `app/index.tsx`, new `components/atmosphere/*` | 1 | Component | **Med** — most visible change | ✅ |
| **3** | Proposal surface | `app/index.tsx`, `components/place/PlaceProposal.tsx` | 2 | Component | Low | ✅ |
| **4** | Place detail + honest cost | new `app/place/[id].tsx`, `components/place/HonestCostBlock.tsx` | 1,3 | Component | Low | ✅ |
| **5** | Website Prohodna-first + deep-link fix | `app.json`, `src/data/seoPages.ts`, `HeroSection.astro`, `[lang]/index.astro`, `DownloadCTA.astro`, `PortalCard.astro` | 1 | Integration | **Med** — SEO | ✅ |
| **6** | Journey coordinator + prepare + nav hand-off | new `src/journey/*`, `app/journey/prepare.tsx`, `app/_layout.tsx` | 4 | **Unit — the core suite** | Med | ✅ |
| **7** | Extract geofence from map | `app/map.tsx`, new `components/journey/JourneyGeofence.tsx` | 6 | Integration | Med | ✅ |
| **8** | Arrival coordination + manual fallback | `app/journey/arrival.tsx`, `components/journey/{ArrivalSentence,SilenceAffordance}.tsx` | 7 | Unit + E2E | **High** | ✗ (needs 6,7) |
| **9** | Protected first-look timing | `src/journey/journeyReducer.ts`, `GeofenceIndicator.tsx` | 8 | **Zero-output assertions** | **High** | ✗ |
| **10** | Story stops | `app/checkpoint/[id].tsx`, `GuruNarration.tsx`, new `StoryStop.tsx` | 9 | Component + E2E | Med | ✗ |
| **11** | Guardian Sight → afterword | `app/ar/[id].tsx`, `useGuardianSightTrigger.ts` | 10 | E2E incl. camera-disabled | Med | ✗ |
| **12** | Memory after departure | new `app/memory/[id].tsx`, `app/reward/[id].tsx`, `RewardMemory.tsx` | 10 | Unit (48 h) + E2E | Low | ✗ |
| **13** | Telemetry + buffered sink | `src/field/fieldEvents.ts`, new `src/field/eventSink.ts` | 6 | Unit | Low | ✅ |
| **14** | Offline, permissions, recovery hardening | `geofenceService.ts`, `journeyStorage.ts`, `useConnectivity.ts` | 8 | E2E matrix | Med | ✗ |

---

# PART 12 — BUILD / REUSE / HIDE / DEFER / RETIRE

**BUILD NOW** — journey coordinator; proposal surface; place detail with honest cost; prepare + nav hand-off; arrival with protected silence; threshold model; story stops; delayed memory; deep-link fix; test + CI foundation.

**REUSE NOW** — `useCheckpointProximity` (unchanged), `useGeofence`, `geofenceService`, `lib/storage`, field preferences, `logFieldEvent`, `GuruNarration`, `GuardianCamera`, `ARSceneRenderer`, `RewardMemory`, all 15 locale files, the Prohodna monologue, the existing artifact, the cinematic assets, the website place-page template, `seoPages.ts`.

**HIDE NOW** — `intro.tsx` (post-visit), `map.tsx` (not primary), predel/route/domain screens, quiz, `ar-demo`, subscription and entitlement gating, `LivingMap`, the portal reward loop.

**DEFER** — national Nearby; catalogue redesign; Domains on day one; Master Keys; Living Covenant; global progression; search; social; full archive; every other place; 12 of 14 languages.

**RETIRE LATER** — `app/profile.tsx` stub; the cold-start TIMELINE constant once the flag is permanent; `autoNavigateOnArrival` preference once designed arrival ships.

---

# PART 13 — DESIGN WORKSTREAM

**Before coding:** the proposal surface (low-fi, one screen, three elements); the honest-cost block (information hierarchy for six fields, including how *unknown* reads honestly); the arrival sentence (typography at 26 pt in direct sun); **the silence affordance** — the single hardest design problem in the slice: an element that proves the app is alive without asking for attention, without animating, and without adding content.

**Designed in code:** story-stop pacing, transitions between journey states, the memory object layout.

**Interaction prototype required:** arrival → silence → first look → story availability. Timing cannot be evaluated statically.

**Motion:** almost none on site. Motion budget belongs to the proposal surface and the memory object only.

**Preserving the identity — explicitly not discarded.** Cinzel, Cormorant Infant and EB Garamond stay. `#050302` ground, `#D8B96A` gold, `#E8D5A0` ivory stay. The video, `StarField`, gradients and portal motifs are **extracted into `components/atmosphere/` and reused as backdrop** on the proposal and memory surfaces. The cinematic becomes a post-visit asset, seen by more people than it currently is. **The rule is not "less atmosphere" — it is "atmosphere never gates action, and never appears on site."**

**Needs owner approval:** anything in Part 14.

---

# PART 14 — OWNER DECISIONS

| # | Decision | Options | Recommendation | Cost of delay |
|---|---|---|---|---|
| 1 | **Prohodna as pilot** | Prohodna · Aglen free set · a Sea Gate place | **Prohodna** — content exists, astonishment is unarguable, price point proven | Blocks everything |
| 2 | **Place-first cold start** | Keep cinematic gate · place first · A/B | **Place first, behind a flag** | Blocks PR 2–4 |
| 3 | **Cinematic re-sited** | Gate · optional post-visit · delete | **Optional post-visit.** Nothing is deleted | Blocks PR 2 |
| 4 | **Map demoted** | Primary · wayfinding only | **Wayfinding only** | Blocks PR 7 |
| 5 | **Guardian Sight → afterword** | Keep as peak · afterword | **Afterword.** Rulebook AR-2 is inviolable; keeping it as the peak requires a written waiver | Blocks PR 11; **highest narrative impact** |
| 6 | **No AR required for completion** | Required · optional | **Optional** (AR-4 inviolable) | Blocks PR 11 |
| 7 | **Reward after departure** | At checkpoint · +48 h | **+48 h** | Blocks PR 12 |
| 8 | **No public progression day one** | Show · hide | **Hide** | Blocks PR 3 |
| 9 | **Deep-link scheme** | Add `unlockingbulgaria` to app · change website URLs | **Add to app** — website URLs may already be indexed | Blocks PR 5 |
| 10 | **Pilot is free** | Free · €4.99 | **Free for the pilot.** Learn the experience before pricing it | Blocks PR 4 |
| 11 | **Scope frozen at one place** | One · several | **One.** Six weeks, three families, then decide | Scope creep is the main risk to this plan |

---

# THE NEXT ACTION

## 1. The exact first pull request

**PR 0 — Test and CI foundation.**

Not PR 1. The repository has **zero tests and no CI**, and PRs 8–10 change timing-critical behaviour behind inviolable rules. Writing those without a test harness is how the silences quietly break six months later. This is one day of work and it makes every subsequent PR verifiable.

## 2. Exact files expected to change

```
package.json                      + devDeps: jest-expo, jest, @testing-library/react-native,
                                    @types/jest, react-test-renderer
                                  + scripts: "test", "test:watch", "test:ci"
jest.config.js                    NEW — preset jest-expo, transformIgnorePatterns for RN/Expo
jest.setup.js                     NEW — mock expo-location, expo-sensors, expo-file-system/legacy
.github/workflows/ci.yml          NEW — node 20, npm ci, lint, typecheck, test on PR + main
__tests__/smoke.test.ts           NEW — haversineDistance + classifyDistance boundary cases
                                    (proves the harness runs against real repo code)
tsconfig.json                     types: ["jest"] if needed
```

## 3. Exact acceptance criteria

- `npm test` passes locally on a clean clone after `npm ci`.
- Smoke test imports `haversineDistance` from `lib/geofenceService.ts` and asserts a known distance to ±1 m.
- Smoke test asserts `useCheckpointProximity` boundary classification at 1001 m → `far`, 1000 m → `approaching`, 200 m → `arrival`, `radius` → `threshold`, `null` → `unknown`.
- CI runs `lint`, `typecheck` and `test` on every PR and blocks merge on failure.
- No production code is modified. No behaviour changes. Fully revertable.
- Total diff under ~150 lines excluding lockfile.

## 4. The exact next prompt

> Implement PR 0 — Test and CI foundation — in `c:\Users\User\Documents\REPOS\hidden-bulgaria-quests`, exactly as specified in the "THE NEXT ACTION" section of `VERTICAL_SLICE_IMPLEMENTATION_PLAN.md`.
>
> Add `jest-expo` and React Native Testing Library, a `jest.config.js` with the correct `transformIgnorePatterns` for Expo 54 / RN 0.81, a `jest.setup.js` mocking `expo-location`, `expo-sensors` and `expo-file-system/legacy`, `test` / `test:watch` / `test:ci` scripts, and a GitHub Actions workflow running lint, typecheck and test on pull requests and pushes to main.
>
> Add one smoke test file that imports real repository code: `haversineDistance` from `lib/geofenceService.ts` (assert a known distance to ±1 m) and the proximity classification boundaries from `hooks/useCheckpointProximity.ts` (1001 → far, 1000 → approaching, 200 → arrival, radius → threshold, null → unknown). If `classifyDistance` is not exported, export it — that is the only production change permitted in this PR.
>
> Do not modify any other production code. Do not begin PR 1. Run `npm test` and paste the output when you are done.
