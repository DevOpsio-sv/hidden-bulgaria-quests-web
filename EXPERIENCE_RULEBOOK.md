# EXPERIENCE RULEBOOK

*Governance layer. The Heart is the constitution, the Manifesto is the philosophy, the Experience Bible describes the intended experience. This document converts all three into enforceable law.*

*Every rule here is testable, violable, and auditable. If a designer cannot break it, it is not a rule and does not belong in this document.*

---

## HOW TO READ THIS DOCUMENT

**Citations.** `[Heart §V]` `[Manifesto §4]` `[Manifesto L3]` `[Bible §7]` `[Bible L22]` — every constraint traces to a parent document. A rule without a citation is a rule someone invented, and it may be challenged on that basis alone.

**⚠ RFV — Requires Field Validation.** A number the parent documents imply a *direction* for but do not fix. Provisional values are marked and must be replaced by observed data. **Provisional numbers are enforceable until superseded** — "unvalidated" is not a defence for ignoring one.

**INVIOLABLE.** A small set of rules admit no waiver, ever. They are marked. Breaking one is not a product decision; it is a breach.

**Waivers.** Any other rule may be broken. To break it you need, in writing, before shipping: (1) the rule ID, (2) which parent document the exception better serves, (3) a named owner, (4) an expiry date, (5) how you will know it was a mistake. No expiry, no waiver. Waivers are reviewed quarterly and default to closed.

**Burden of proof sits with the proposal, not the objection** [Manifesto §15].

---

# 1. DISCOVERY RULES

### D-1 · One Astonishment Per Place — INVIOLABLE
**Purpose** Protect the engine of the entire product.
**Rule** Every published place carries exactly one irreducible astonishment. Not zero. Not several.
**Why** [Manifesto §4, L3] The scarce resource is the single fact out of scale with the place. Several competing facts produce a lecture; none produces a viewpoint.
**Verify** Publication record names the astonishment in one sentence. A reviewer who has never seen the place reads it and reacts involuntarily.
**Fails** A place shipped because it is beautiful. A place with four interesting facts and no disproportionate one.
**Exceptions** None.

### D-2 · The Four-Part Disproportion Test
**Purpose** Make "is this worth publishing" objective.
**Rule** A place ships only if all four hold: *(a)* it looks unremarkable or unassuming; *(b)* it carries a true fact wildly out of scale with its appearance; *(c)* it is reachable by the intended audience; *(d)* the resolution requires physical presence.
**Why** [Manifesto §4] Remove (c) and it is a documentary. Remove (d) and we entertained someone into staying home.
**Verify** Four boxes, four pieces of evidence, in the publication record.
**Fails** Publishing a famous landmark because it performs well. Publishing a fact that fully resolves in the telling.
**Exceptions** (a) may be waived for a place whose fame conceals its actual astonishment — the waiver must name what everyone gets wrong about it.

### D-3 · Costed Proposal
**Purpose** A proposal that hides its cost is an advertisement.
**Rule** No place may be proposed without: distance from the person, realistic duration, difficulty, viable season, viable hours, child viability.
**Why** [Manifesto §1] The promise is specific, reachable, *and costed*.
**Verify** Any proposal missing one of the six fails automated publication check.
**Fails** "Beautiful cave, 2h away" with no note that the last entry is 16:00 and the road is unpaved.
**Exceptions** None for publication. Fields may be marked *unknown* — but *unknown* must be shown to the person, not hidden.

### D-4 · Reachability Bound
**Purpose** Stop posters masquerading as invitations.
**Rule** Default proposals must be completable as a same-day return journey from the person's actual location. Anything beyond that is presented as *planning* material, never as *today*.
**Why** [Manifesto §1] "A magnificent place eight hours away is not a proposal — it is a poster."
**Verify** Sample 100 proposals against real user locations; count violations.
**Exceptions** Explicit planning mode, where the person has declared a future trip.

### D-5 · Choice Ceiling
**Purpose** Prevent catalogue growth from reaching the surface.
**Rule** Simultaneous proposals shown to a person: **maximum 3.** ⚠ RFV. This number may not increase as the catalogue grows.
**Why** [Manifesto §12] Surface area must not grow with content.
**Verify** Static audit of every surface that proposes places.
**Fails** A "browse all" grid. A regional list of 40.
**Exceptions** A deliberate archive/planning surface the person navigated to on purpose, one level down.

### D-6 · No Filler — INVIOLABLE
**Purpose** Protect the trust economy.
**Rule** No place may be published to complete a route, fill a region, reach a number, satisfy a partner, or balance a map.
**Why** [Manifesto §6, L4–L8] A mediocre place costs the next three journeys and the person never tells us why they stopped.
**Verify** Every publication record answers: *what would be lost if this were not published?* "The route would be incomplete" is a rejection, not an answer.
**Exceptions** None.

### D-7 · Recommendation Provenance
**Purpose** Not become the systems described in [Manifesto §2].
**Rule** Every recommendation must be defensible with a human sentence: why this place, for this person, today. Popularity is not a reason.
**Verify** Spot-audit 20 live recommendations per quarter; each must produce the sentence.
**Fails** "Trending near you." "Most visited this month."
**Exceptions** None.

---

# 2. HOME RULES

### H-1 · Place Before Product — INVIOLABLE
**Purpose** Move attention off us and onto the world immediately.
**Rule** A named, located, reachable place appears before any menu, account request, tutorial, brand statement, or explanation of what this is. Zero navigation required to reach it.
**Why** [Bible §4] Target state at second ten is disbelief about a fact, not admiration of a product.
**Verify** Cold-install test: count taps to first named place. Must be 0.
**Fails** A splash screen. A value proposition. A "get started" flow.
**Exceptions** None.

### H-2 · Home Decision Ceiling
**Rule** Maximum **3** actionable choices on the primary surface. ⚠ RFV.
**Why** [Manifesto §12] Complication produces hesitation, and hesitation is where a Saturday gets spent at home.
**Verify** Count interactive elements that lead somewhere. Includes navigation.
**Exceptions** None without waiver.

### H-3 · Forbidden on Home — INVIOLABLE
**Rule** Never present on the primary surface: any counter reading zero; completion percentage; progress bar; catalogue size; pricing; a tutorial; a feature tour; an account wall; anything describing what the person has not done.
**Why** [Manifesto §13, §10] Scale shown early is a boast. Progress must read as abundance, never as debt.
**Verify** Static audit each release.
**Fails** "0 of 64 places visited." "Explore 4 domains, 16 routes, 64 checkpoints."
**Exceptions** None.

### H-4 · Time to First Curiosity
**Rule** An observable involuntary reaction to a fact about the world within **10 seconds** of opening.
**Why** [Bible §4].
**Verify** Moderated observation, n≥20, first-time users. Record the second at which the reaction occurs; median must be ≤10s. ⚠ RFV — protocol to be formalised.
**Exceptions** None.

### H-5 · Home Is Not a Destination
**Rule** If a person can pleasantly spend more than **5 minutes** on Home without moving toward a place, Home has failed. ⚠ RFV.
**Why** [Manifesto §1] Any session that satisfies someone into staying put has worked against us.
**Verify** Session-length distribution on the primary surface, treated as an *inverse* quality signal.
**Fails** Feeds. Endless scroll. Editorial browsing.
**Exceptions** Declared planning mode.

---

# 3. MAP RULES

### M-1 · Map Purpose
**Rule** The map exists to answer two questions only: *where is that* and *can I get there today*. It is not an inventory display, a progress surface, or a browsing environment.
**Why** [Manifesto §1, §11].
**Verify** Every map element must serve one of the two questions or be removed.

### M-2 · Marker Ceiling
**Rule** Maximum **7** simultaneous markers. ⚠ RFV. The number may not grow with the catalogue.
**Why** [Manifesto §12, L25].
**Verify** Automated count at every zoom level.
**Fails** Clustering that expands into 200 pins.

### M-3 · What the Map May Never Become — INVIOLABLE
**Rule** The map may never render: completion state across the country; other people's activity; a checklist; a coverage percentage; locked/greyed places as absence.
**Why** [Manifesto L43, §10] Never show someone what they are missing. [Bible L43] A journey that can be ranked has stopped being a journey.
**Verify** Static audit.
**Exceptions** None.

### M-4 · Navigation Ends at Arrival
**Rule** Once the person crosses the arrival radius, the map recedes and is not the default surface until they leave.
**Why** [Bible §7, §8] Eyes on screen more than on place means the visit was replaced.
**Verify** On-site session inspection.

---

# 4. PLACE RULES

### P-1 · One Idea Per Stop
**Rule** Each stop within a place carries exactly one idea.
**Why** [Bible §8].
**Verify** Content review: a stop whose summary needs the word "and" fails.

### P-2 · Stop Count
**Rule** Minimum 3, maximum 5 stops per place.
**Why** [Bible §8] "Three to five stops at most. The temptation to add a sixth is the beginning of a lecture."
**Exceptions** A single-moment place may ship with 1 stop; it may never ship with 6.

### P-3 · Exactly One Moment — INVIOLABLE
**Rule** Every place contains exactly one designed moment [see §5, §9]. Never two.
**Why** [Bible §9, L17, L24] Surprise once per place; twice is a trick.
**Verify** The moment is registered with spot, bearing, and optimal hours before publication.
**Exceptions** None.

### P-4 · The Unanswered Question
**Rule** Every place must leave the person with one deliberately unresolved question, recorded at publication.
**Why** [Bible §8] A visitor who leaves fully informed has closed the place.
**Verify** Named in the publication record. Exit interviews confirm people can state it.
**Fails** Content that answers everything it raises.

### P-5 · Movement Requirement
**Rule** A visit must require bodily movement between the arrival point and the moment. A place experienced entirely from a parking space fails.
**Why** [Heart §V] Effort is what converts information into memory. [Bible §8].
**Verify** Recorded walking distance and terrain per place. Minimum ⚠ RFV.
**Exceptions** Accessibility routes — which must be designed, not defaulted to, and must still deliver the moment [see G-6].

### P-6 · Depth Is One Level Down
**Rule** Optional depth is never on the surface. A person who wants one sentence and a person who wants forty minutes must both be served without either taxing the other.
**Why** [Manifesto §12, L26].
**Verify** Count surface elements; depth must require a deliberate reach.

### P-7 · Interruptible and Resumable — INVIOLABLE
**Rule** Any visit may be interrupted at any point and resumed with zero loss, zero penalty, zero re-entry cost — including days later, on another device, offline.
**Why** [Manifesto §3, L16] [Bible §8] Real life is the interrupting force and we will never win a fight against it.
**Verify** Interrupt at each stop; resume; confirm identical state.
**Exceptions** None.

### P-8 · Nothing Can Be Failed
**Rule** No visit state may be described as failure, missed, incomplete, or expired. Nothing missed is announced.
**Why** [Manifesto §10, L43] [Bible §8].
**Fails** "You missed 2 of 5 stops."

---

# 5. ARRIVAL RULES

*This section governs the highest-stakes minute in the product. Four of its rules are inviolable.*

### A-1 · The Practical Fog (0–30s)
**Rule** From arrival detection to +30 seconds: **maximum one sentence**, restricted to (a) confirmation they are in the right place and (b) which direction to walk. No story, no atmosphere, no sound, no haptic, no reward.
**Why** [Bible §7] They are not available. Anything else competes with a car door.
**Verify** On-site output log for the first 30 seconds; assert ≤1 message and content class.
**Fails** A welcome. An atmospheric line. A chime.

### A-2 · The Walk-In Silence (30–90s) — INVIOLABLE
**Rule** Zero product-originated output from +30s until the threshold is crossed.
**Why** [Bible §7] The place is already working. Narration here is theft.
**Verify** Output log; assert zero events.
**Exceptions** Safety only [see A-9].

### A-3 · Threshold Registration
**Rule** No place may be published without a registered threshold: the position and bearing at which the place becomes visible or encloses the person, recorded to within a few metres.
**Why** [Bible §7] "We must know exactly where that point is for every location we ever publish."
**Verify** Publication gate. Missing threshold = cannot publish.
**Exceptions** None.

### A-4 · First Look Protection — INVIOLABLE
**Rule** Between threshold crossing and the end of the gap [A-5]: no narration, no overlay, no camera layer, no notification, no sound, no haptic, no visual change initiated by us.
**Why** [Bible §7, L3, L4] Narrate their first look and we overwrite it permanently — they will remember our sentence instead of what they saw.
**Verify** Output log across the window; assert zero events.
**Exceptions** Safety only.

### A-5 · The Gap (30–90s after first look) — INVIOLABLE
**Rule** A minimum of 30 seconds of complete silence after the first unmediated look, before any content may begin.
**Why** [Bible §7] Boredom at a great place is the precondition of attention. The question must form on its own.
**Verify** Timestamp comparison: first content event minus threshold event ≥30s.
**Exceptions** The person explicitly requests content earlier. Never automatic.

### A-6 · First Words Constraint
**Rule** The first on-site sentence must be specific and must reference something visible from where the person is standing. It may not be the most lyrical sentence in the piece.
**Why** [Bible §7] Beauty in the opening line is us performing; specificity is us pointing.
**Verify** Editorial review: name the visible referent. No referent = rejected.
**Fails** "For thousands of years, this sacred land has whispered its secrets."

### A-7 · Arrival Is Not an Achievement — INVIOLABLE
**Rule** No reward, confirmation flourish, counter increment shown, badge, sound, or celebratory animation on arrival.
**Why** [Bible §7, L12].
**Exceptions** None.

### A-8 · On-Site Notification Blackout — INVIOLABLE
**Rule** Zero product-originated notifications from threshold crossing to departure.
**Why** [Bible L20] Nothing interrupts awe. Nothing.
**Verify** Notification suppression audit; assert zero sends to on-site users.
**Exceptions** None. Safety messages are not notifications and are governed separately.

### A-9 · Safety Override
**Rule** Genuine safety information (weather, closure, hazard, light) may interrupt any silence in this section. It must be unmistakably distinct from content and must never carry a secondary message.
**Why** Duty of care outranks experience design.
**Fails** A safety notice with a "while you're here…" attached.

---

# 6. QUEST RULES

### Q-1 · One Active Objective
**Rule** Maximum **1** active objective at a time. Objectives may not queue, stack, or accumulate.
**Why** [Manifesto §7] A quest is an errand that fits inside a Saturday. [Manifesto §12].
**Verify** State inspection: assert active objective count ≤1.
**Fails** A task list. A journal of open threads.

### Q-2 · Day-Shaped
**Rule** A quest must be completable in a single outing. ⚠ RFV for hours.
**Why** [Manifesto §7] "the only shape most people can actually schedule."
**Verify** Median observed completion within one outing for ≥80% of finishers. ⚠ RFV.

### Q-3 · Silent Abandonment
**Rule** Abandonment is permanent, silent, and free. No reminders, no re-prompts, no guilt, no expiry warnings.
**Why** [Manifesto L19, L20] Someone who goes once and never returns is a success, not churn.
**Verify** Assert zero outbound messages triggered by non-completion.
**Exceptions** None.

### Q-4 · Auto-Expiry
**Rule** A quest not acted on disappears silently rather than accumulating. ⚠ RFV for window.
**Why** [Manifesto §10] Progress reads as abundance, never as debt.
**Fails** A backlog of 14 unstarted quests.

### Q-5 · Quest Subordination — INVIOLABLE
**Rule** The quest may never be more interesting than the place.
**Why** [Manifesto §7] "If people play for the structure rather than the ground, we have built a game, and games are played indoors."
**Verify** Removal test: strip the quest structure and ask a sample whether they still want to go. If desire drops materially, the quest has become the attraction and must be reduced.
**Exceptions** None.

### Q-6 · Exact Resume
**Rule** Interruption resumes at the exact point. Never restarts, never penalises.
**Why** [Bible §8] [Manifesto §3].

---

# 7. NARRATION RULES

### N-1 · Segment Length Ceiling
**Rule** Maximum **90 seconds** per continuous narration segment on site. ⚠ RFV — derived from [Bible §3]: the sacred register holds for about ninety seconds before it becomes theatre.
**Verify** Asset duration audit.

### N-2 · Mandatory Trailing Silence — INVIOLABLE
**Rule** Every narration segment ends in silence, and the silence is never zero. Ratio ⚠ RFV; floor is absolute.
**Why** [Bible §15, L2] Meaning happens in the pause, not the sentence.
**Verify** Assert no content event within the trailing window.
**Exceptions** None.

### N-3 · Location Dependency Test
**Rule** If a passage works equally well at home, it may not be used on site.
**Why** [Manifesto L31].
**Verify** Editorial: read it aloud in a meeting room. If nothing is lost, reject it for on-site use.

### N-4 · Pointing Requirement
**Rule** Every on-site segment must point at something the listener can see from where they stand.
**Why** [Manifesto §8] The test is that the listener's eyes move.
**Verify** Named visible referent per segment. Field observation of head/eye movement.

### N-5 · Never Begin
**Rule** Narration may not begin: during the practical fog; during the walk-in; during the gap; during the moment; while the person is walking on uneven ground; while another person is speaking.
**Why** [Bible §7, §9, §15].

### N-6 · Must Stop
**Rule** Narration stops immediately when: the person walks away; the phone is lowered; weather or safety changes; a call arrives; the camera closes.
**Verify** Interrupt tests for each trigger.

### N-7 · Interpretation Labelling — INVIOLABLE
**Rule** A person must be able to tell, *in the moment*, whether they are hearing what is known or what it might mean. Footnotes do not satisfy this.
**Why** [Manifesto §8, L34] [Heart §IX].
**Verify** Editorial audit: every interpretive claim carries an in-line marker in voice and text.
**Exceptions** None.

### N-8 · No Music On Site — INVIOLABLE
**Rule** No music at any place, at any time, at any volume.
**Why** [Bible §15] Music is someone else's interpretation and it overwrites the wind, which is what they will still have in ten years.
**Verify** Asset audit by location class.
**Exceptions** None. Music is permitted in transit and in memory surfaces only.

### N-9 · Adjective Prohibition
**Rule** Banned in all copy and narration: *charming, picturesque, hidden gem, must-see, breathtaking, stunning, magical, unforgettable.*
**Why** [Manifesto L36] Adjectives are what we write when we failed to find the fact.
**Verify** Automated lint on all content, all 14 languages.

---

# 8. SILENCE RULES

### S-1 · The Six Silences
**Rule** Six silences are designed, scheduled, and defended:
| Silence | Trigger | Duration |
|---|---|---|
| Arrival | arrival detected | 0–30s, ≤1 sentence |
| Walk-in | +30s | until threshold — total |
| The gap | first look | ≥30s, target 30–90s |
| The moment | moment reached | total, unbounded |
| The return | departure detected | 10–15 min |
| The long silence | visit completed | no next-place proposal same day |
**Why** [Bible §15].
**Verify** Output logs per window.

### S-2 · Silence Is Not Interrupted — INVIOLABLE
**Rule** During any designed silence: no sound, no haptic, no notification, no attention-seeking animation, no autoplay, no badge change visible to the person.
**Exceptions** Safety only [A-9].

### S-3 · Legibility of Silence
**Rule** A person must be able to distinguish intentional silence from malfunction — and this must be solved without adding content.
**Why** [Bible §15] "The hardest craft problem in this entire product."
**Verify** Field study: ask people during a silence whether they think it is broken. Target ⚠ RFV.
**Fails** Solving it with a "listening…" animation, a progress spinner, or an explanatory line.

### S-4 · Contact Frequency Ceiling
**Rule** No next-place proposal on the day of a completed visit. Days-until-next-contact ⚠ RFV.
**Why** [Bible §10] Proposing the next place on the way home converts a completed experience into a queue.
**Verify** Assert zero proposal sends within the blackout window after a completion event.

---

# 9. AR RULES

### AR-1 · Never First — INVIOLABLE
**Rule** No camera layer, overlay, or reconstruction may activate before the first unmediated look. Earliest permissible activation: after the gap [A-5], and only on deliberate request.
**Why** [Bible §7, L4, L15] Shown first it replaces the place; shown last it deepens it.
**Verify** Timestamp assertion: no AR activation event before gap end.
**Exceptions** None.

### AR-2 · AR Is Never the Moment — INVIOLABLE
**Rule** The designed moment [P-3] may not be an AR moment. AR may precede or follow it; it may not *be* it.
**Why** [Bible §9] The moment is physical, caused by the place. [Bible L4] Nothing mediates a first look.
**Verify** Publication record states the moment and states whether AR is involved. "Yes" is a rejection.
**Exceptions** None.

### AR-3 · Frequency and Duration
**Rule** Maximum **1** heavy AR sequence per place. Duration ceiling ⚠ RFV. AR must end itself; it may not wait to be dismissed.
**Why** [Bible L24] Surprise once per place. [Manifesto §11].

### AR-4 · Full Non-AR Parity — INVIOLABLE
**Rule** Every AR moment has a complete non-AR path that delivers the same understanding. No content, no completion, and no reward may exist only in AR.
**Why** [Heart §IX] Every tool we use is optional and none of it is ever the reason. [Manifesto L50].
**Verify** Complete every place end-to-end with the camera disabled. Any gap is a release blocker.
**Exceptions** None.

### AR-5 · Silent Degradation
**Rule** When AR cannot run — device, light, weather, battery — it degrades to the non-AR path silently. No error, no apology, no "your device does not support."
**Why** [Manifesto §3] Doubt is friction.
**Fails** A modal explaining what the person is missing.

### AR-6 · Camera Down Ends AR
**Rule** Lowering the phone ends the AR state immediately and returns to silence, not to a menu.
**Why** [Bible §12, L6] Attention recovery returns to silence by default.

---

# 10. PROGRESSION RULES

### PR-1 · No Global Completion Display — INVIOLABLE
**Rule** No percentage, fraction, or counter representing progress against the whole product may be displayed anywhere.
**Why** [Manifesto §10] Progress reads as abundance, never as debt.
**Fails** "17 of 64." "26% complete."
**Exceptions** None.

### PR-2 · No Zero States
**Rule** A counter, collection, or archive at zero is never shown. It appears when it has something in it.
**Why** [Manifesto §13] [Bible §5].

### PR-3 · Absence Is Never Rendered — INVIOLABLE
**Rule** We never display what a person has not done, has not collected, or has missed — in any form, including greying, locks, silhouettes, or dimming.
**Why** [Manifesto L43].
**Exceptions** None.

### PR-4 · Progress on Request Only
**Rule** Progress surfaces are reached deliberately. They are never the default view and never appear unprompted.
**Why** [Manifesto §13] Structure becomes visible because they went looking.

### PR-5 · Emotional Targets
**Rule** The states after 1 / 5 / 20 / 50 places [Manifesto §10] are the acceptance criteria for progression design. They are validated by interview, not by analytics.
**Verify** Qualitative research each major release, n≥10 per band. ⚠ RFV — protocol to be formalised.

### PR-6 · Collection Eligibility — INVIOLABLE
**Rule** Nothing is collectible that can be obtained without going. No rarity, no tiers, no trading, no expiry, no sets that can be completed at home.
**Why** [Manifesto §9, L38, L39].
**Verify** For every collectible: name the physical act that produced it. No act = delete.
**Exceptions** None.

### PR-7 · Archive Organised by Memory
**Rule** The personal archive is organised by when, who with, conditions, and what happened — never by our internal structure.
**Why** [Manifesto §9, L41] The person is looking for a day, not browsing our system.

### PR-8 · No Terminal Completion
**Rule** No state is presented as "finished." Completion is never announced with finality.
**Why** [Manifesto §10] Completion is not the goal; the next place is. [Bible §13].

---

# 11. CONTENT RULES

### C-1 · The Retellable Sentence
**Rule** Every place ships with exactly one sentence written to be repeated at a dinner table. It is a publication gate.
**Why** [Bible §11, L41] It will do more than any sharing feature.
**Verify** Named in the record. Tested: read it to five people, ask them to repeat it an hour later. ⚠ RFV for pass rate.

### C-2 · Fact Budget
**Rule** One astonishment [D-1] plus a maximum of **3** supporting facts per place. ⚠ RFV.
**Why** [Bible §8] Less than they can absorb.

### C-3 · Certainty Floor — INVIOLABLE
**Rule** No claim is published without a citable source. Contested claims are labelled as contested. Nothing is invented, ever, including plausible-sounding detail.
**Why** [Heart §IX] [Manifesto §8, L34] We work with real graves and living communities.
**Verify** Source register per place; historian sign-off [G-2].
**Exceptions** None.

### C-4 · Community Consent — INVIOLABLE
**Rule** Where a place is inhabited, sacred, or actively used, the resident or custodial community's version of the story outranks ours, and publication requires their awareness and non-objection.
**Why** [Heart §VIII] The people who live there are not scenery.
**Verify** Signed record per applicable place.
**Exceptions** None.

### C-5 · Rejection Triggers
**Rule** Content is rejected outright when: no astonishment exists; the astonishment cannot be verified; the place cannot receive visitors without harm; the community objects; the claim requires invention to be interesting.
**Why** [Heart §VIII] [Manifesto §6].
**Verify** Rejections are logged with reason. A quarter with zero rejections triggers review of the reviewers.

### C-6 · Reading Time Ceiling
**Rule** Maximum on-site reading per stop ⚠ RFV. Nothing requiring reading while walking [AT-7].
**Why** [Bible §8] [Manifesto §11] Design conditions: one hand, direct sun, cold fingers.

---

# 12. ATTENTION RULES

### AT-1 · Eyes-On-Place Ratio — INVIOLABLE
**Rule** Across a full visit, product-active time must be **under 25%** of total on-site time.
**Why** [Bible §8] "If a person is looking at a screen more than at the place, the visit has not been enhanced — it has been replaced."
**Verify** Screen-active duration ÷ dwell duration, measured per visit, reported per place. Any place exceeding the ratio is re-designed, not re-marketed.
**Exceptions** None.

### AT-2 · Interactions Per Stop
**Rule** Maximum **2** required interactions per stop. ⚠ RFV.
**Why** [Manifesto §11] Every decision asked on site is attention taken from the reason they came.

### AT-3 · Uninterrupted Screen Time
**Rule** Maximum **90 seconds** of continuous screen engagement on site before the product returns to silence. ⚠ RFV, aligned to N-1.

### AT-4 · Return to Silence
**Rule** After any screen episode the default next state is silence — never a suggested next action.
**Why** [Bible §15, L6].
**Fails** "What's next?" appearing after every stop.

### AT-5 · No Reading While Walking
**Rule** No content may require reading while in motion.
**Verify** Content classification per stop; field observation.

### AT-6 · Field Conditions Test — INVIOLABLE
**Rule** Every on-site surface is tested under: one hand, direct sunlight, wind, cold fingers, 30% battery, no signal, and a tired person at the end of a drive.
**Why** [Manifesto §11] A design that only works in an office has not been tested.
**Verify** Signed field-test record per release. Office-only sign-off is not acceptable evidence.
**Exceptions** None.

---

# 13. MEMORY RULES

### MEM-1 · The Moment Is Never Captured By Us — INVIOLABLE
**Rule** We do not record, prompt capture of, or mark the designed moment. No "capture this," no automatic save, no timestamped commemoration of it.
**Why** [Bible L22] A moment we record is a moment we took.
**Exceptions** None.

### MEM-2 · Evidence, Not Content
**Rule** What is kept is proof that a day happened — low ceremony, low production, personally meaningful. Not a produced artefact of ours.
**Why** [Manifesto §9].

### MEM-3 · Revisiting Without Selling — INVIOLABLE
**Rule** Memory surfaces may resurface by season, anniversary, weather, or proximity — and may never carry a purchase prompt, an upsell, or a next-place proposal.
**Why** [Manifesto L46] Never sell inside a moment. [Bible §10].
**Exceptions** None.

### MEM-4 · Never Stored
**Rule** We do not store continuous location, movement history beyond activation verification, or any data enabling comparison between people.
**Why** [Bible L43] A journey that can be ranked has stopped being a journey.
**Verify** Data-inventory audit each release.

### MEM-5 · Never Surfaced — INVIOLABLE
**Rule** Never shown to anyone: other people's progress; rankings; streaks; comparative statistics; what they missed.
**Exceptions** None.

---

# 14. ANTI-PATTERNS — PERMANENTLY FORBIDDEN

Each carries a detection test. Presence of any is a release blocker.

| # | Anti-pattern | Detection test |
|---|---|---|
| 1 | Reward before wonder | Any positive feedback event before the gap ends |
| 2 | AR before reality | AR activation timestamp precedes first unmediated look |
| 3 | Achievement before place | Arrival triggers any celebratory state |
| 4 | Progress before curiosity | A counter appears before a place is named |
| 5 | Notification during awe | Any send to a user inside an arrival radius |
| 6 | Interface competing with nature | Screen-active ratio ≥25% of visit |
| 7 | Narration over the first look | Any audio between threshold and gap end |
| 8 | Music on site | Any audio asset without speech classified for a location |
| 9 | Social comparison | Any surface displaying another person's activity |
| 10 | Leaderboards / rankings | Any ordered list of people |
| 11 | Streaks | Any state degraded by inactivity |
| 12 | Artificial urgency | Any countdown not derived from real light, season, or opening hours |
| 13 | Manufactured scarcity | Any limited-time collectible |
| 14 | Checklist behaviour | Any surface presenting places as items to tick |
| 15 | Collecting for its own sake | Any collectible obtainable without physical presence |
| 16 | Completion pressure | Any message referencing what remains |
| 17 | Zero states | Any counter rendered at 0 |
| 18 | Gamification replacing exploration | Removal test [Q-5] shows desire depends on structure |
| 19 | Too many choices | More than 3 simultaneous proposals |
| 20 | Too much narration | Segment exceeding 90s, or zero trailing silence |
| 21 | Home as destination | Median primary-surface session exceeding the H-5 ceiling |
| 22 | Selling inside a moment | Any commercial element between arrival and departure |
| 23 | Next-place on the drive home | Any proposal within the S-4 blackout |
| 24 | Guilt mechanics | Any message triggered by non-completion |
| 25 | Invented history | Any claim without a source in the register |
| 26 | Filler places | A publication record whose justification is completeness |
| 27 | AR-only content | Any content unreachable with the camera disabled |
| 28 | Explaining the product | Any onboarding describing how the system works |

---

# 15. QUALITY GATES

No place is published until all twelve pass. Each requires named evidence and a named signatory.

| Gate | Pass criterion | Evidence | Signatory |
|---|---|---|---|
| **G-1 Wonder** | Exactly one astonishment; four-part disproportion test passed [D-1, D-2] | One-sentence statement + cold-reader reaction | Content lead |
| **G-2 Truth** | Every claim sourced; contested claims labelled; nothing invented [C-3] | Source register | Historian |
| **G-3 Threshold** | Threshold position and bearing registered [A-3] | Field survey record | Field lead |
| **G-4 Moment** | Exactly one moment, with spot, bearing, optimal hours; not AR [P-3, AR-2] | Moment record | Experience lead |
| **G-5 Silence** | Six silences designed and defended; no output in protected windows [S-1] | Output-log test result | QA |
| **G-6 Accessibility** | Full non-AR path; readable in direct sun; audio and text parity; a designed route that reaches the moment for people with limited mobility [AR-4, C-6, P-5] | Accessibility test record | Accessibility lead |
| **G-7 Story** | One retellable sentence; one unanswered question; every segment points at something visible [C-1, P-4, N-4] | Editorial record | Writer + editor |
| **G-8 Seasonality** | Viable seasons, hours, weather and light windows stated; out-of-window proposals suppressed [D-3] | Season matrix | Field lead |
| **G-9 Safety** | Hazards documented; safe route; safety messaging distinct and message-free [A-9] | Risk assessment | Field lead |
| **G-10 Family** | Child viability stated honestly; the place works for the second person in the car [Manifesto L17] | Family field test | Field lead |
| **G-11 Community** | Custodial community aware and not objecting; their version recorded [C-4] | Signed record | Partnerships |
| **G-12 Returnability** | The place rewards a second visit in a different season or condition [Bible §13] | Named second-visit proposition | Experience lead |

**Gate failure is not negotiable by deadline.** A place that fails a gate does not ship late — it does not ship.

---

# 16. DESIGN REVIEW CHECKLIST

Answerable YES / NO / N/A. Any NO on an INVIOLABLE-linked item blocks release.

**Discovery**
1. Does every proposal name exactly one astonishment? ☐
2. Does every proposal state distance, duration, difficulty, season, hours, child viability? ☐
3. Are simultaneous proposals ≤3? ☐
4. Can every live recommendation be defended with a human sentence? ☐

**First surface**
5. Is a named place reachable in zero taps from open? ☐
6. Are there ≤3 actionable choices? ☐
7. Is every forbidden element absent (zero counters, %, scale, pricing, tutorial, account wall)? ☐

**Map**
8. Are simultaneous markers ≤7 at every zoom? ☐
9. Is completion state, others' activity, and absence entirely absent from the map? ☐

**Arrival** *(all inviolable-linked)*
10. Is output in 0–30s limited to one confirmation-and-direction sentence? ☐
11. Is output between +30s and threshold exactly zero? ☐
12. Is the threshold registered for this place? ☐
13. Is there ≥30s of complete silence after the first look before any content? ☐
14. Does the first sentence name something visible from the standing position? ☐
15. Is arrival entirely unrewarded — no sound, haptic, counter, or flourish? ☐
16. Are notifications suppressed for on-site users? ☐

**Narration and silence**
17. Is every segment ≤90s with non-zero trailing silence? ☐
18. Does every segment fail the meeting-room test (i.e. lose something when read indoors)? ☐
19. Is interpretation distinguishable from fact in the moment? ☐
20. Is there zero music at this location? ☐
21. Are banned adjectives absent in all 14 languages? ☐

**AR**
22. Is AR impossible before the gap ends? ☐
23. Is the moment non-AR? ☐
24. Does the entire place complete with the camera disabled? ☐
25. Does AR degrade silently, with no error or apology? ☐

**Quest and progression**
26. Is there ≤1 active objective? ☐
27. Is abandonment silent, free, and reminder-less? ☐
28. Does the removal test show desire survives without the quest structure? ☐
29. Is there no global completion display anywhere? ☐
30. Is absence never rendered — no locks, greys, silhouettes, or missing-item slots? ☐
31. Is every collectible impossible to obtain without going? ☐

**Attention and field**
32. Is measured screen-active time under 25% of visit duration? ☐
33. Are required interactions ≤2 per stop? ☐
34. Does the product return to silence after every screen episode? ☐
35. Has this shipped through the full field-conditions test — one hand, sun, wind, cold, 30% battery, no signal, tired? ☐

**Memory and commerce**
36. Is the moment uncaptured and unmarked by us? ☐
37. Is every memory surface free of purchase prompts and next-place proposals? ☐
38. Is there zero commercial content between arrival and departure? ☐
39. Is the next-place blackout enforced after completion? ☐
40. Is nothing stored that would allow one person to be compared with another? ☐

**Final**
41. Have all twelve quality gates passed with named evidence and signatories? ☐
42. For every rule broken: is there a written waiver with owner, justification, and expiry? ☐
43. Applying the Ultimate Product Test [Manifesto §15] — does this make it more likely someone discovers, visits, and remembers another real place? ☐
44. Applying the Experience Test [Bible §18] — is the answer to *what does the person feel* written without the words tap, click, navigate, or select? ☐

---

## OPEN ITEMS REQUIRING FIELD VALIDATION

The following are enforceable now and provisional until observed data replaces them. Owner and target date required for each before the first public release.

D-4 reachability threshold · D-5 proposal ceiling · H-2 decision ceiling · H-4 curiosity measurement protocol · H-5 home dwell ceiling · M-2 marker ceiling · P-5 movement minimum · Q-2 quest duration · Q-4 expiry window · N-1 segment ceiling · N-2 silence ratio · S-3 broken-vs-intentional pass rate · S-4 contact blackout length · AR-3 AR duration ceiling · C-1 retellable pass rate · C-2 supporting fact budget · C-6 reading ceiling · AT-2 interactions per stop · AT-3 screen-time ceiling · PR-5 research protocol

*A provisional number that survives a year without validation is not validated. It is unexamined. Review it.*
