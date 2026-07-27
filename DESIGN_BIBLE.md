# UNLOCKING BULGARIA
# DESIGN BIBLE v1.1

**The permanent constitution of the project.**
Ratified 2026-07-26 · Revised 2026-07-26 (v1.1) · Supersedes all prior design documentation.

*v1.1 is a surgical revision. No philosophy, identity, storytelling, visual language or product vision has changed. Six constitutional changes and ten internal contradictions were resolved. See AMENDMENTS.*

---

## STATUS OF THIS DOCUMENT

This document is **binding**. It governs every page, component, photograph, animation, sound, string and commit made to Unlocking Bulgaria from this date forward.

**Precedence, absolute and in this order:**

1. **This Design Bible.**
2. `DESIGN_DIRECTION_2026-07-26.md` — the vision that produced this Bible. Where it is more detailed, it is binding. Where it conflicts with this Bible, this Bible wins.
3. `UX_DESIGN_AUDIT_2026-07-26.md` — **technical evidence only.** Its findings are facts. Its recommendations have no authority. Where the Audit proposes a solution that contradicts this Bible, the Bible wins without discussion.
4. Everything else in the repository.

## The three tiers

Not everything in this document carries the same weight, and pretending otherwise is how constitutions die. A document that is entirely immutable gets routed around; a document that is entirely amendable stops meaning anything. **Every part of this Bible belongs to exactly one tier, and the cost of changing it is the cost of its tier.**

| Tier | What it holds | Where it lives | Amended by |
|---|---|---|---|
| **0 · THE CHARTER** | The 15 Principles · the emotional hierarchy · the twelve prohibitions in §1.4 · the deleted-component register · the amendment process itself | Ch. 1, Ch. 2, §1.4, §9's deleted register | **Owner + two named stewards, unanimous.** Dissent is recorded, not erased. |
| **1 · THE STANDARDS** | The world model · design language · tokens · component governance · page patterns · motion · photography · sound · IA | Ch. 3–7, 9–13 | Design lead + one reviewer, recorded as a dated decision with the rejected alternatives named. |
| **2 · THE SPECS** | Values, budgets, breakpoints, checklists, agent rules, shot lists, QA gates | Ch. 8, 14, 15, 16, 17 | Any lead, normal review, changelog only. |

**Rules move downward as they stabilise. Nothing moves upward without Tier-0 ceremony.** A rule proven by three years of practice may be demoted to a mechanical check; a check that turns out to encode a principle may be promoted by a Tier-0 vote.

**Succession.** Two stewards are named alongside the owner. If the owner is unreachable for ninety days, the stewards may act at Tier 0 by unanimity, and every such act is reviewed on the owner's return. A constitution with one amending authority and no succession freezes permanently the day that authority becomes unavailable — and the team does not stop shipping, it stops consulting.

**Conflict resolution.** Where two provisions collide: **Charter beats Standards beats Specs.** Within a tier, the more specific governs the more general. Where they are equally specific, resolve toward subtraction and record the resolution as a decision.

**Exceptions.** An exception is requested in writing, names the provision, states the reason and the cost of compliance, proposes a sunset date **no more than six months out**, and is approved at the tier of the provision. All live exceptions sit in one open register. **An exception renewed twice becomes an amendment proposal** — a rule that keeps needing exceptions is a wrong rule, and the register is how we find out.

**Rule metadata.** Every rule in Tiers 1 and 2 carries a fixed header, so that a reader in 2031 can tell law from scar tissue:

```
R-046 · Motion is weather or consequence.
  TIER 1 · PRINCIPLE P4
  RATIONALE   Ambient decoration reads as cheap and competes with the land.
  EVIDENCE    Audit 2026-07 — five concurrent ambient systems, none diegetic.
  ENFORCEMENT judgement          (machine | rubric | judgement)
  STATUS      active             (active | temporary | deprecated | superseded)
  REVIEW      2028-01
```

Without `RATIONALE` and `EVIDENCE`, rules become superstition, and superstition is either cargo-culted or ignored. Both destroy the document.

**Amendment.** Amendment happens at the tier of the thing being amended, by the authority named above, recorded in the dated `AMENDMENTS` section at the foot of this file with the reasoning **and the alternatives that were rejected**. No agent, contractor, or future session may amend silently, incrementally, or "temporarily." A change made without amendment is a defect regardless of how good it looks.

**Annual review.** Once a year, in writing: which rules were violated and why (**a high-violation rule is examined, not re-enforced**); which were never once invoked; which are now checked mechanically and can be demoted; which exceptions became permanent; and whether the Charter still describes the product.

**Ambiguity.** Where this document is silent, the correct action is to ask — not to invent. Where this document is ambiguous, resolve toward **subtraction**, toward **the land**, and toward **the visitor's feeling** — never toward feature parity, convention, or ease of implementation.

---

# TABLE OF CONTENTS

**BOOK I — WHY**
1. Core Philosophy · *§1.4 is Tier 0; the rest is Tier 1*
2. Product Principles · **Tier 0**
3. Design Language · *Tier 1*
4. World Building · *Tier 1*

**BOOK II — WHAT**
5. Information Architecture · *Tier 1*
6. The Experience · *Tier 1*
7. Design Tokens · *Tier 1*
8. The Rules — *the canonical register* · *Tier 2*

**BOOK III — HOW IT LOOKS AND SOUNDS**
9. Component System · *Tier 1; the deleted register is Tier 0*
10. Page Blueprints · *Tier 1*
11. Motion Bible · *Tier 1*
12. Photography Bible · *Tier 1*
13. Sound Bible · *Tier 1*

**BOOK IV — HOW IT GETS BUILT**
14. Implementation Strategy · *Tier 2*
15. Design QA · *Tier 2*
16. Cursor Execution Mode — *a generated view of Chapter 8* · *Tier 2*
17. Roadmap · *Tier 2*

**BOOK V — EVOLUTION & GOVERNANCE** · *Tier 0*
18. How this document changes

**BOOK VI — EDITORIAL** · *Tier 1*
19. The written word

**BOOK VII — HISTORICAL INTEGRITY** · *Tier 0 principle, Tier 1 practice*
20. Claims about the past

**BOOK VIII — CONTENT OPERATIONS** · *Tier 1*
21. How a witness is made

**BOOK IX — PARTNERSHIP, COMMERCE & MEMBERSHIP** · *Tier 0 articles, Tier 1 practice*
22. The fence around the money

**BOOK X — AI COLLABORATION** · *Tier 0 articles, Tier 1 practice*
23. Four modes, one boundary

**BOOK XI — CANON** · *Tier 0*
24. The world's own facts

**BOOK XII — DESIGN DRIFT** · *Tier 1*
25. Detecting the slow loss of self

---
---

# BOOK I — WHY

---

# 1. CORE PHILOSOPHY

## 1.1 What Unlocking Bulgaria is

> **Unlocking Bulgaria is the first checkpoint of a quest that continues in the real world.**

It is not a website about a country. It is the threshold of one. The website is the **Cave Domain** — the pre-sequel gateway that the product's own mythology already defines as the place where the Keeper first awakens. Everything that happens on the web is *inside the fiction*, not adjacent to it.

The product exists to answer one question, asked in the first ten seconds and never fully answered:

> **Bulgaria is the only country in Europe whose name has never changed. 681 to now. Empires fell on every side. The country itself vanished for five centuries. The name did not. How?**

The answer is: **people carried it.** Specific people. In specific places. Places that are still standing, that you can drive to, that you can put your hand on.

That is the entire product. Everything else is craft.

## 1.2 What Unlocking Bulgaria is NOT

It is **not** a tourism brochure. Brochures list. We argue.

It is **not** a SaaS marketing site. There is no Hero → How It Works → Features → Pricing. That skeleton sells software subscriptions and it contradicts every sentence we write.

It is **not** a portfolio of effects. If a jury remembers the transition and not the cave, we failed.

It is **not** a directory. We do not build indexes, catalogues, filter chips, or "browse all." A directory is where exploration becomes browsing, and browsing is where feeling dies.

It is **not** a game. There are no points, badges, XP, streaks, levels, confetti or percentage rings. Ever. Under any circumstance. For any reason.

It is **not** neutral. It has a position, a voice, and a temper. It is not for everyone and it does not try to be.

It is **not** complete, and it does not pretend to be. **Honest scarcity is the house style.**

## 1.3 The emotional hierarchy

Emotions are served in this order. When two conflict, the higher one wins.

| Rank | Emotion | Test |
|---|---|---|
| **1** | **Awe** | Does the visitor feel small in front of something old? |
| **2** | **Curiosity** | Is there a question they cannot put down? |
| **3** | **Recognition** | Do they realise this is real, and reachable, and theirs to visit? |
| **4** | **Possession** | Have they *done* something with their own hand? |
| **5** | **Belonging** | Do they want to be counted? |

**Information ranks nowhere.** Information is a by-product. A visitor who leaves fully informed and unmoved is a failure. A visitor who leaves knowing one place name and unable to stop thinking about it is a success.

## 1.4 What must never happen

These are not preferences. They are constitutional prohibitions.

1. **The Told Layer is never without the land.** No narrative surface exists without a photograph of Bulgaria on it. *(The Useful Layer is governed by clarity — see §3.0. The exception lives there, where exceptions belong, and not inside this article.)*
2. **A visitor must never be shown a placeholder, a "coming soon," a draft badge, or a TODO.**
3. **A visitor must never be asked to do something they cannot do.**
4. **A visitor must never click something that looks interactive and isn't.**
5. **A visitor must never wait on a timer for content they could have had.**
6. **A visitor must never be interrupted** — no pop-up, interstitial, exit-intent, newsletter overlay, chat bubble, or countdown.
7. **A visitor must never hear sound they did not ask for.**
8. **A visitor must never reach a dead end.** Every surface offers exactly one true next step.
9. **A visitor must never be shown a grid of choices where one right answer exists.**
10. **A visitor must never be told what they should feel.**
11. **The site must never claim more than it has** — not in languages, not in places, not in features.
12. **The world must never break character.** No marketing voice. No "Sign up now." No "Don't miss out."

## 1.5 What success feels like

Not a metric. A scene:

> Someone in Hamburg opens the site at eleven at night because a friend sent it. They do not read it. They fall through it. Four minutes later they are looking at a photograph of two holes in a limestone ceiling with light coming through, and they say out loud, to nobody: *"What is that?"*
>
> They type their name into a single field.
>
> Six months later they are standing in the cave, looking up, holding a phone.

Everything in this document exists to make that scene more likely.

---

# 2. PRODUCT PRINCIPLES

**Sixteen. Adding a seventeenth requires a Tier-0 amendment and has never yet been justified. Every design decision must cite one.**

*v1.0 said "fifteen, no more will ever be added." That sentence was amended once, openly, to admit P16 — see AMENDMENTS. The intent it carried is preserved and is now enforceable, because it names the cost of adding rather than claiming an impossibility. A rule that says "never" about its own future is a rule that gets broken quietly the first time it must be broken.*

---

### P1 · The land is the interface.
The photograph is not inside the page. **The photograph is the page.** Text appears on the land the way an inscription appears on stone. There is no chrome, no floating card layer, no UI shelf. If an element cannot plausibly exist inside the world, it does not exist.

### P2 · Everything is a threshold.
This world's central image is an opening — a cave mouth, a gate, a pass, a harbour, a relief cut into a cliff. Every image is composed as a threshold: dark near-edge, luminous depth, something framed by something else. Never a flat postcard vista. **This is a law, not a style.**

### P3 · Two states, one world.
Everything exists as **Now** and as **Remembered**. Guardian Sight is not a feature or a section — it is the *medium*. Once the visitor is given it, they keep it, everywhere, to the end.

### P4 · Nothing moves that isn't alive.
The only autonomous motion permitted anywhere in this product is **light, dust, water, breath and wind** — things physically present in the place on screen. Everything else moves because the visitor moved it. **No content is ever revealed on a timer.** Duration governs transitions; it never governs disclosure.

### P5 · Restraint is the luxury signal.
Silence is expensive. Emptiness is expensive. One thing at a time is expensive. Five simultaneous effects read as cheap in every culture on earth. **When in doubt, remove.**

### P6 · The alphabet is the brand.
Bulgaria gave the world an alphabet used by 250 million people. Old Bulgarian uncial and Glagolitic letterforms are our display voice. Not a Roman serif with a classical name. **Letters that were carved here, treated as carving.**

### P7 · The land is the palette. Gold appears once.
No gold-on-black. Colour is sampled from the photographs and named for real places. **Gold appears exactly once in the entire product** — at the Master Key — and because it appears once, it means something.

### P8 · The question is the spine.
*How did the Name survive?* is asked immediately and answered progressively, never completely. Every witness is one piece of the answer. **One piece is always withheld — that piece lives in the app.**

### P9 · Progression is felt, never diagrammed.
No flowcharts. No "how it works." The visitor **earns** things on this website — sight, a place, a name, a light on the map — and arrives at the app already holding them.

### P10 · Honest scarcity beats dishonest abundance.
We have few places. We say so. What is not built is **sealed**, visibly and deliberately, with its name showing. Sealed is a promise. "Coming soon" is an apology. **Our emptiness is the horizon, not a gap.**

### P11 · One next step, never a menu.
Every surface ends with exactly one true next thing, argued for. A grid is a decision; a decision is friction. **The Thread never forks.**

### P12 · Desire first, logistics last.
How to get there, when to go, what shoes — all true, all necessary, all placed behind one deliberate action at the *end* of a place. Never interleaved with the poetry.

### P13 · The world remembers the visitor.
Where they have been lights up. What they have seen stays seen. The map is a record of *them*, not a listing of *us*.

### P14 · Complete in four beats broken in fourteen.
Every language we offer is 100 % complete, including place content, or we do not offer it. A half-translated locale is a broken product, once per locale.

*Scoped at v1.1, in force unchanged: **a language may launch on a defined subset of the estate, provided that subset is closed** — no link, no Thread, no map affordance ever carries the visitor out of it into untranslated content. The visitor's experience of completeness is absolute. Without this scoping, adding a ninth language would eventually require translating a thousand witnesses first, and the principle would die of unaffordability rather than of disagreement.*

### P15 · Accessibility is world-building, not compliance.
The reduced-motion visitor and the sound-off visitor and the screen-reader visitor each receive an **authored alternate experience**, not a degraded one. If the still version isn't beautiful, the moving version isn't finished. **The floor is WCAG 2.2 AA**, with named AAA commitments where the world benefits.

### P16 · The Forbidden Future.
Every other principle governs what we build. **This one governs what we will be asked to build** — because feature creep never arrives as a bad idea. It arrives as a reasonable one, from someone who means well, with a business case, on a Tuesday.

**Unlocking Bulgaria will never become:**

- **Social media.** No profiles, no follows, no feeds, no comments, no likes, no user-visible activity of strangers.
- **Gamified.** No points, badges, XP, levels, streaks, leaderboards, confetti, percentage rings or achievement toasts. Sight, knowledge and custody are the only rewards this world has (§Ch. 9 of the Direction; Book XI).
- **An infinite feed.** Nothing endless, nothing auto-loading, nothing algorithmically ordered. The Thread is authored or it is nothing.
- **A dopamine economy.** No streak anxiety, no loss aversion, no variable reward, no notification designed to return you. **The world waited a thousand years; it can wait for you.**
- **An advertising platform.** No third-party ads, no sponsored placements in the Told Layer, no affiliate links, no data sold, ever, at any valuation.
- **An attention economy.** Time-on-site is not a goal. **A visitor who leaves after four minutes and books a flight has succeeded.** A visitor who stays forty minutes and feels nothing has not.
- **A tourism marketplace.** No booking engine, no inventory, no availability, no commission, no competing with the people we send visitors to.
- **A place where AI replaces discovery.** No generated photography, no generated history, no chatbot guide, no personalised narrative, no recommendation engine. **The land is not a dataset and the visitor is not a profile.**
- **A directory.** No index, no archive, no catalogue, no browse-all, no map of everything (Rule 17).

**How this list is maintained.** Adding an entry is a **Tier-1** decision — the register should grow as we learn what we are being pulled toward. **Removing an entry is a Tier-0 amendment requiring unanimity and a written defence that survives publication.** The asymmetry is deliberate: it must be easy to close a door and hard to open one.

---

# 3. DESIGN LANGUAGE

*Pure language. No implementation. Chapter 7 turns this into tokens; Chapter 8 turns those into enforceable rules.*

## 3.0 The two layers

**This is the most load-bearing definition in the document.** Roughly fifteen rules turn on it, and until now it was assumed rather than stated. Every surface, every component and every string belongs to exactly one layer, and declares which.

> **THE TOLD LAYER** — surfaces whose purpose is to make the visitor *feel* something.
> Governed by the Voice and the Inscription, by HELD / WIDE / CLOSE air, by the motion law, and by the photography law. This is the Descent, the witnesses, the domains, the Covenant, the map's world.
>
> **THE USEFUL LAYER** — surfaces whose purpose is to let the visitor *accomplish* something.
> Governed by the Utility face, SET air, conventional controls, and clarity over atmosphere. This is the Practical Panel, forms, legal, language, partner material, and anything transactional this product ever grows.

Where a surface crosses the boundary, **the boundary is a deliberate threshold and the visitor should feel the register change.** Nothing is ambiguous: if you cannot say which layer a thing is in, it is not designed yet.

Two consequences worth stating now, because they will be needed later:

- **The Useful Layer is where the business lives.** Commerce, membership, education, accounts, booking — anything this product ever needs commercially — belongs here, governed by clarity, and is not a violation of anything. **A price never appears in the Told Layer.**
- **The Useful Layer is not exempt from the world.** It is quieter, not different. It still speaks in the world's voice (Law 8) and it never sells.

## 3.1 Space

Space is **air**, and air is the most expensive material we have.

There are four qualities of air, and every layout is built from them:

- **HELD** — one thing on screen and nothing else. No navigation visible. No next step visible. Used at most **once per page**, at the emotional peak. This is the state that makes the product feel expensive. It is also the state teams delete first under pressure. It is not negotiable.
- **WIDE** — generous separation; the eye travels before it lands. Used between movements, between witnesses, around inscriptions.
- **CLOSE** — a caption to its image, a date to its event. Things that belong to each other sit near each other and nothing else is nearby.
- **SET** — the tight, functional spacing of practical information, forms, legal text. **SET may only appear behind a deliberate action** (P12). It never appears in the emotional sequence.

There is one measure of horizontal air: text never exceeds a comfortable single-column reading measure, regardless of viewport. **We never build a two-column body of prose.** Full-bleed belongs to the land; the measure belongs to the voice.

## 3.2 Light

**Light is the narrative device.** Not colour grading. Not glow effects.

Three light states govern the entire product:

| State | Meaning | Where |
|---|---|---|
| **BEFORE** | cold, silvered, pre-dawn; almost no chroma | everything preceding 681 |
| **AFTER** | warm, ochre, lamp-lit; low sun | everything following 681 |
| **REMEMBERED** | the sacred layer; light that comes from inside the stone rather than from the sky | Guardian Sight, and only there |

The visitor crosses 681 as **a physical change in the temperature of the light**. Most will never consciously notice. That is the point. Felt, not observed.

Light never emanates from UI. There are no glows on buttons, no halos on cards, no neon. **The only light source in this world is the sky, a flame, or memory.**

## 3.3 Colour

Colour is **sampled from the photography**, never invented in a design tool. Every colour in the system is named for a real place and must be traceable to a real frame.

The palette, in full:

| Name | Role | Where it lives |
|---|---|---|
| **Prohodna Dark** | ground | the base of the world; not black — wet limestone, a grey-brown-black with weight |
| **Eyes-of-God** | the one light | the warm white of daylight through rock; used for the voice, inscriptions, and nothing else |
| **Pomorie Slate** | *Before* | cold blue-grey; the pre-681 world, the sea in November |
| **Thracian Ochre** | *After* | warm earth; the post-681 world, tomb fresco, lamplight |
| **Rila Copper** | *Remembered* | oxidised dome green; the Guardian Sight layer, and **only** the Guardian Sight layer |
| **Rose First-Light** | the human | the single warm accent; used where a person is present or addressed. Rare. |
| **Master Key Gold** | the promise | **reserved for the Master Keys and nothing else** |

Rules of colour:

- **The interface has no colour of its own.** Every colour on screen is either in a photograph or sampled from one.
- **Never gold as an accent.** Gold-on-black is the exhausted signature of a decade of crypto and luxury templates. It is banned as a system colour.
- **Rila Copper never appears outside the Remembered state.** Seeing it means memory is present. It must never mean anything else.
- **Rose First-Light is rationed.** If it appears on more than one element per page, delete all but one.
- **Semantic colour** (error, success) is drawn from the earth palette, never from a stoplight. Error is ember; confirmation is first-light. Colour is never the only carrier of meaning.

## 3.4 Typography

Three voices. Three jobs. No exceptions. Ever.

### The Inscription
An Old Bulgarian uncial / Glagolitic-derived display face. It is **carved**, not set. It appears at monumental scale and almost never in quantity. Its highest expression is a numeral: **681**, **1345**.

Used for: place names, the four dates, the Name itself, the Covenant, and the Mark.
Never used for: paragraphs, navigation, buttons, form labels, anything that repeats.

### The Voice
An editorial serif with a true Cyrillic cut and real italics. This is the narration — the tone of a translated ancient text read aloud by someone who believes it.

Used for: all prose. Every sentence the visitor is meant to *feel*.
Never used for: interface labels, numbers in tables, legal text.

### The Utility
One quiet humanist sans with excellent Cyrillic, Greek and CJK coverage. Invisible by design.

Used for: practical information, forms, legal, error messages, anything behind a deliberate action.
Never used for: anything in the emotional sequence.

**Typographic law:**
- Text is never centred except at a HELD moment.
- Text never sits over a busy region of a photograph. If the frame has no quiet region, the frame is wrong — **fix the photograph, not the type**.
- No uppercase tracked-out serif headings. That is the visual signature of every wedding venue in Europe and it is banned.
- No text shadow. Ever. If the type is not legible, the exposure of the plate beneath it is wrong.
- Line breaks in headlines are authored per breakpoint or not authored at all. Never author a break for one width and let it orphan at another.
- **The smallest text anywhere in the product, on any device, is 16px equivalent.** There is no small print in this world.

## 3.5 Motion

Governed in full by Chapter 11. The language, in one paragraph:

**Motion in this world is either weather or consequence.** Weather is light, dust, water, breath and wind — it belongs to the place and continues whether or not anyone is watching. Consequence is anything the visitor caused: they scrolled, so the world descended; they pressed, so memory surfaced; they chose a threshold, so they passed through it. **There is no third category.** Anything that is neither weather nor consequence is decoration and is deleted.

## 3.6 Sound

Governed in full by Chapter 13. The language:

Sound is **place**, not music. Field recordings of the actual locations. Offered once, never imposed, remembered forever. Two moments in the entire product carry a human voice — a single held note from the Bulgarian polyphonic tradition — and they are the only music that ever plays: **when the Name is first spoken**, and **at the Covenant**.

## 3.7 Photography and framing

Governed in full by Chapter 12. The language:

**The Threshold Rule.** Every frame is composed *through* something. Dark near-edge, luminous depth. Dawn or dusk only. A human being present, small, never posed, never looking at camera. **You should be able to identify one of our photographs across a room, at thumbnail size, with the logo removed.** That is the entire brief.

## 3.8 Depth and composition

Depth in this world is **real or absent**. A cave mouth genuinely has a foreground, a middle and a distance; parallax there is honest. A card does not; parallax there is a lie.

There are no drop shadows. There is no elevation system. Nothing floats above anything else, because nothing in this world is made of glass sheets. Separation is achieved with **darkness, distance and edge** — the way it is achieved in a cave.

Composition follows the photograph. **The layout does not impose a grid on the image; the image dictates where the words may go.** Every hero frame is delivered with a designated quiet region, and the words live there. This inverts the normal relationship between design and asset, and it is correct.

## 3.9 Interaction

Three verbs exist in this product:

- **Descend** (scroll) — the primary verb. Moves you down through the land and forward through time.
- **Look through** (press and hold) — the sacred verb. Surfaces the Remembered layer. Given once, kept forever.
- **Pass through** (activate a threshold) — the travel verb. You do not "click a link"; you enter an opening and come out the other side.

There is no fourth verb. No hover-to-reveal-a-menu, no drag-to-reorder, no swipe-carousel, no accordion-of-accordions.

**Every interactive thing looks interactive, and nothing else does.** The audit's single most damaging finding — four cards that say EXPLORE and do nothing — is a violation of this and of P1.

## 3.10 Buttons

There is **one** action form in the product: a line of Inscription type with a rule beneath it that draws itself as you approach.

No pills. No filled rectangles. No gradients. No uppercase tracked serif. No icon-plus-label. No secondary/tertiary hierarchy — **if two actions are offered, one of them is wrong.**

The only exception is the Utility layer behind a deliberate action (forms, practical info, legal), where a plain, honest, conventional control is correct — because there, clarity outranks atmosphere.

## 3.11 Cards

**There are almost no cards.** Cards are how you present a database, and this is not a database.

Where a choice must be offered, it is offered as a **Threshold**: a photograph, a place-name in Inscription, one line of what it saw. It occupies the full width or the full frame. It is not a rounded rectangle with a border and a hover-lift.

The only cards permitted in the entire product are in the **Utility layer**: practical information behind the deliberate action, and the partner benefits on the Partners page. That is the complete list.

## 3.12 Maps

The map is **The Memory Map** — hand-drawn in the tradition of monastery manuscript charts. Ink hatching for ridges, a drawn line for the Danube, a stippled edge for the sea. Not GIS. Not a tile layer. Not a satellite view.

**The map is dark, and it lights as the visitor learns.** It records where they have been. It is also the entire navigation system.

**The map has three states, because a traveller's knowledge of a country has three states.** Not two. This is how anyone has ever known a land they were crossing, and it is the oldest navigation model there is:

| State | Meaning | How a place arrives here |
|---|---|---|
| **WALKED** | You have been. Lit. | Completing a witness. |
| **HEARD OF** | The world has told you it is there. Named, faint, enterable — and visibly not yet walked. | A witness's testimony names it · the Thread points at it · a Seal opens · you asked for it by name and the world answered. |
| **DARK** | You do not know it exists. | Everything else. **Always the majority. Permanently.** |

**Hearsay is earned by reading.** The more testimony a visitor takes in, the more of the country they know is out there. Reading becomes cartography. This is the mechanism that lets a visitor who arrived sideways — from a search engine, on one witness, having never seen the Descent — be given *something*, without being handed everything.

**There is no fourth state, and there is no state that shows the whole country.** A map of everything is a catalogue with a beautiful name, and once a visitor can see everything that exists, the horizon closes. **The horizon is the product** (P10, token HORIZON, Law 7). The Dark is larger than Walked and Heard-of combined, by construction, forever — which is not a promise we have to keep manufacturing but a property of how the map is built.

**Asking for a place by name is permitted, and is bounded by four hard rules:**

1. It answers with **one place, or with silence.** Never a list.
2. It answers only for a name the visitor already brought with them. **The world never suggests what to ask for.**
3. **No partial matching. No autocomplete. No did-you-mean. No ranked results. No empty state offering alternatives.**
4. A place found this way becomes **Heard of** — never Walked. You now know it is there. You have not been.

This is not search. It is asking a guide a question and being answered plainly, or not at all. Rules 17 and 18 survive verbatim: **no index, no archive, no tag page, no browse-all, no catalogue, no map of everything.**

Everything the map must do is specified in §10.3.

## 3.13 Forms

A form in this world is an **inscription**, not a transaction.

- One question at a time where possible.
- Labels are always visible; placeholders are never labels.
- The form states plainly what will happen, before it happens.
- Errors are written in the Voice, in full sentences, and say what to do — never "Invalid input."
- Every form says what we will do with the answer, in one sentence, next to the field.
- **No form ever appears in the emotional sequence except the Covenant**, which is not experienced as a form.

## 3.14 Icons

**There are almost no icons.** The product's symbolic language is *letters and light*, not glyphs.

Permitted marks, in full: the Mark (brand), the Map glyph, the Sound control, and directional indicators where genuinely required for accessibility. That is the complete inventory.

Banned outright: emoji, geometric glyph sets (◉ ⌘ ◈ ✦ ◎), decorative dingbats, icon-per-feature grids, and any icon that duplicates a word beside it.

---

# 4. WORLD BUILDING

## 4.1 What kind of world this is

It is **one continuous place, seen at night and at the edges of day, that remembers everything that has happened in it.**

It is not a collection of pages. It is not a set of sections. It has a top (above the clouds, before the Name) and a bottom (inside the earth, and then out again into the present). It has weather. It has sound. It has a memory.

The visitor is not a user. They are **a stranger arriving in a landscape that has been waiting.**

## 4.2 The laws of physics

These are the world's rules. They are inviolable, and they are the reason it will feel coherent to someone who cannot say why.

**Law 1 — Forward is time, and inward is the land.**
Moving forward in the experience moves you *into* the land and *forward* through history, simultaneously. This never reverses. There is no branching narrative and no sideways one. *On the web, forward is downward — but the law is about the world, not about a scrollbar, and it must survive the app, a headset, a wall and a room.*

**Law 2 — The world has two states, always.**
Now and Remembered. Every surface in the world can, in principle, be looked through. Whether the visitor has been *given* that ability depends on where they are in the story.

**Law 3 — The world moves only as weather, or because you moved it.**
Light, dust, water, breath, wind — these continue. Everything else is still until the visitor acts.

**Law 4 — The world remembers you.**
Places you have been stay lit. This persists within a session and, where the visitor has been inscribed, beyond it. The world never forgets, and it never resets your progress to sell you something.

**Law 5 — Sealed is not the same as absent.**
Things that exist but are not yet open are **visible, named, and closed.** They have a seal. The seal is beautiful. Nothing in this world is under construction; things are simply not yet opened.

**Law 6 — There is always exactly one way forward, and it is always argued for.**
The Thread. Never a fork, never a grid, never "explore more."

**Law 7 — The horizon is always further than you have gone.**
At every moment the map shows more darkness than light. This is a permanent design commitment, not a temporary state of content.

**Law 8 — Nothing in this world speaks in marketing voice.**
Not the buttons, not the errors, not the 404, not the cookie policy. The world has one narrator and they do not sell.

## 4.3 How the visitor moves

| Movement | Verb | What happens |
|---|---|---|
| Through the story | **Descend** | scroll; the land moves past |
| Into a place | **Pass through** | activate a threshold; the camera moves *through* the opening chosen |
| Beneath the surface | **Look through** | press and hold; the Remembered layer rises |
| Across the world | **Open the map** | the world folds outward into the Memory Map |
| Back | **Return** | the Mark; always returns to the surface, never to a "homepage" |

There is no back button in the interface. The browser's is honoured perfectly and that is sufficient.

## 4.4 How the world reacts

- **To arrival:** with weather and silence. Not with a modal, a banner, or a cookie notice.
- **To a press:** memory rises, held, and falls when released. Never latches, never toggles state permanently.
- **To completion of a witness:** a new light appears on the map. Quietly. No celebration, no toast, no sound effect.
- **To being finished:** the Covenant. Then the map, showing what is still dark.
- **To an error:** in the Voice, honestly, with a way onward. The world never blames the visitor.
- **To a returning visitor:** it recognises them. The lights are where they left them. **It does not replay the opening.**

## 4.5 Forbidden in this world

An explicit, non-negotiable list. Anything here is a defect on sight.

- Pop-ups, interstitials, exit-intent, newsletter overlays, chat bubbles, cookie banners
- Countdown timers, urgency copy, "limited spots," "don't miss out"
- Badges, XP, levels, streaks, confetti, percentage-complete rings, achievement toasts
- Autoplay sound of any kind
- Carousels, sliders-of-cards, tabs, mega-menus, breadcrumbs
- Testimonials in quotation-mark cards, logo walls, star ratings
- Stock photography, illustration used as a substitute for photography, AI-generated imagery
- Emoji anywhere in the product surface
- Any element labelled "Coming soon"
- Any use of the word "platform," "solution," "seamless," "unlock your journey," or "immersive"
- Skeleton screens that fake content (a held black frame with weather is honest; a grey pulsing rectangle is not)
- Infinite scroll
- Anything that moves when nobody is looking at it, that isn't weather

---
---

# BOOK II — WHAT

---

# 5. INFORMATION ARCHITECTURE

## 5.1 The naming, fixed

The vocabulary is canon. It is used in the interface, in the code, in the CMS, in this document, and in conversation. Synonyms are defects.

| Canon term | Means | Never call it |
|---|---|---|
| **The Descent** | the home experience | homepage, landing page |
| **Witness** | a real place that saw something | place, destination, POI, attraction |
| **Domain** | a piece of evidence; a region holding witnesses | category, section, collection |
| **The Thread** | the single chain from witness to witness | related, nearby, recommended |
| **The Memory Map** | the map, and the navigation | living map, explore, discover |
| **Light** | a point on the map the visitor has earned | pin, marker, node |
| **Seal** | a domain that exists but is not open | coming soon, locked, disabled |
| **Guardian Sight** | the Remembered layer | AR, filter, overlay, before/after |
| **The Covenant** | the inscription of a name | signup, newsletter, waitlist |
| **Keeper** | someone who has been inscribed | user, subscriber, lead |
| **The Mark** | the brand element | logo |

## 5.2 The route map

Flat, short, human. **A place name is a proper noun, not the child of a category.**

```
/{lang}/                        THE DESCENT
/{lang}/map/                    THE MEMORY MAP
/{lang}/covenant/               THE COVENANT          (also inline at the end of the Descent)
/{lang}/{domain}/               A DOMAIN              e.g. /bg/morski-predel/
/{lang}/{witness}/              A WITNESS             e.g. /bg/prohodna/
/{lang}/the-project/            THE PROJECT           (about · sources · questions · positions)
/{lang}/partners/               PARTNERS
/{lang}/inscribed/              COVENANT RESULT       (noindex)
/{lang}/legal/{privacy|terms|cookies}/
404                             THE UNLIT
```

**Why flat witness slugs.** `/bg/prohodna/` is shareable, memorable, speakable and typeable. `/bg/places/prohodna-cave/` is a database path exposed to a human being. Domains and witnesses share one namespace because in the world they are the same kind of thing: a place with a name. Collisions are prevented by a single reserved-slug registry, not by a URL segment.

**Migration.** Every existing URL 301s permanently to its new home. `/{lang}/places/{slug}` → `/{lang}/{slug}`. `/{lang}/sea-domain` → `/{lang}/morski-predel`. No URL ever dies without a redirect. Slugs are localised per language; the canonical identity is the language-independent ID already present in `placeIdentity.ts`, which remains the bridge to the app and must not change.

**What does not exist and never will:** a place index, a domain index, a search page, a tag page, an archive, a "browse all," a filter view. These are the shapes of a directory (P11).

## 5.3 The four graphs

The site is four overlapping graphs. Confusing them is the source of every IA failure in the current build.

### The World Graph — *what exists*

```
                          THE DESCENT
                               │
              ┌────────────────┼────────────────┐
              │                │                │
        THE CAVE          THE FOUR          THE COVENANT
       (the gateway;       DOMAINS          (the ending, and
        the site itself)      │              the beginning)
              │               │
          PROHODNA      ┌─────┴─────┬──────────┬──────────┐
                        │           │          │          │
                    THE SEA    THE KINGS   SACRED     GOLDEN
                     (open)     (sealed)   TRACES      GATE
                        │                  (sealed)   (sealed)
                   witnesses…
```

The Cave is not one of the four. It is where the visitor already is. This is canon from the product's own mythology and must not be flattened into a fifth equal card.

### The Content Graph — *how a visitor actually travels*

**The Thread.** Strictly linear, always argued, never forked.

```
DESCENT ──▶ PROHODNA ──▶ (next witness) ──▶ (next witness) ──▶ … ──▶ COVENANT
   ▲            │              │                    │                    │
   │            ▼              ▼                    ▼                    ▼
   └────────────────────── THE MEMORY MAP ◀─────────────────────────────┘
                        (a new Light appears each time)
```

Each witness ends with **one** next witness, and the link is a sentence of reasoning, not a label:

> *"The alphabet carved here was hidden two hundred kilometres north, in a room cut into a cliff."*

The Thread is authored, per language, by a human. It is not computed by distance, tags, or recency. **The order of the Thread is the order of the argument**, and the argument is the product.

**The Thread is presented as a chain and stored as a graph.** What the visitor experiences never changes: exactly one next witness, argued for in a sentence, never a fork. Underneath, a witness may belong to more than one argument and may carry more than one authored transition, of which **one is the default for the path the visitor arrived on.**

This is a storage decision, not a design decision, and it exists for one reason: a strictly linear chain is a single hand-authored path through the entire estate, in every language. Inserting one witness rewrites its neighbours; reordering a region cascades through everything. **At eight witnesses that is elegant. At eighty it is unmaintainable, and unmaintainable content is how placeholders come back.** The graph costs the visitor nothing and saves the argument.

> **TIER 0 — THE PERCEPTION GUARANTEE.** *The implementation may be a graph. The experience may never become one.* The visitor must always perceive **one story, one next step, one emotional path.** No branch is ever shown. No choice of continuations is ever offered. No "where would you like to go next." No breadcrumb of the path taken. **If a visitor can tell that the Thread is a graph, the graph has failed and is reverted, whatever it cost.**

### The Progression Graph — *what the visitor earns*

| Earned | When | Persists |
|---|---|---|
| **Sight** | at Prohodna, in the Descent, ~45 s in | forever, everywhere |
| **A Light** | on completing each witness | session; and beyond, once inscribed |
| **A Domain seen** | on reaching a domain's first witness | as above |
| **A Name** | at the Covenant | permanently, and carried into the app |

Progression is stored client-side for the anonymous visitor and reconciled to the account after inscription. **Progression is never used as a gate.** Nothing on the website is locked behind having read something else. The lights are a record, never a lock (P9, P13).

### The SEO Graph — *what a crawler sees*

The crawler's experience is a **first-class authored alternate**, not an afterthought (P15).

- Every witness and domain is a static, crawlable, fully-rendered document with its own title, description, single `<h1>` (the place name), and a real photograph with a real caption.
- **The Thread is a real `<a>`.** Every navigational act in the world resolves to a genuine link with a real `href`. The Memory Map's lights are links. Nothing navigates by script alone.
- Structured data: `TouristAttraction` + `Place` + `ImageObject` per witness; `BreadcrumbList` per witness (schema only — no visible breadcrumb, per Rule 22); `FAQPage` on The Project; `Organization` sitewide.
- Canonical URLs match served URLs exactly, including trailing slash. `hreflang` covers only complete languages (P14) and always reciprocates.
- Every witness has its own social image: the witness photograph, its name in Inscription, localised. Never one shared image.
- The sitemap contains only complete, public, indexable documents. Sealed domains are **not** in the sitemap.

## 5.4 The app relationship

The website and the app are **one continuous product with a boundary, not two products with a link.**

| The website gives | The app gives |
|---|---|
| Sight over still photographs, a fixed number of layers | Sight over the live world, through the camera |
| The story of a place | The quest at the place |
| A name inscribed | The Keeper's progression, artefacts, relics, seals |
| The first checkpoint, genuinely completed | Every checkpoint after |

**The boundary is stated honestly, once, and never repeated.** The current build says "Only in the app" three times on a single page; that is an apology repeated until it becomes a complaint. It is said once, at the Covenant, as a promise.

**The identity bridge is sacred.** `appPlaceId` and the `unlockingbulgaria://` canonical URIs in `placeIdentity.ts` are the contract between the two products. They are language-independent, they never change, and no slug decision may break them.

**Commitment:** an inscribed visitor who opens the app for the first time does **not** start at zero. The Cave Domain shows as begun. This is a design commitment binding on both products.

---

# 6. THE EXPERIENCE

*Second by second. This is the score. Everything in Chapters 9–13 exists to perform it.*

## 6.1 ARRIVAL — the first ten seconds

**0:00 — Ground.**
The page is already there. No loader, no splash, no fade-up, no logo animation. The first frame the browser can paint is a photograph of the Balkan peninsula from very high, before dawn: cloud, cold, almost no colour. It is dark, it is enormous, and it is completely still except for the slow movement of cloud.

There is **nothing on screen** except, small and low: **Преди Името** / *Before the Name*, in Inscription.

No menu. No CTA. No trust chips. No cookie banner. Nothing that wants anything from the visitor.

**0:03 — The offer of sound.**
*The single permitted interruption of a HELD moment in the entire product. It is the world asking permission, not an interface asking for a click — which is why it may exist here and nowhere else.*
One line, at the lower edge, in the Voice, small:
> *This place has a sound.*  **Listen**

One choice. Taken or ignored, it is never asked again. If taken, wind arrives first — thin, high, cold.

**0:06 — Nothing happens.**
This is deliberate and it is the hardest thing in the document to protect. The world holds. The visitor's own restlessness becomes the first interaction: they scroll because nothing else is on offer.

**Emotional target at 0:10 — *unease and scale*.** *Something old is aware of me.*

## 6.2 THE FALL — 0:10 to 0:25

**0:10 — Descent begins.**
The visitor scrolls, and they fall. Through cloud. The horizon rises past them. The Danube plain opens. The land is not being surveyed — it is coming up to meet them.

Two things change continuously and neither is announced: **the light warms**, and **the sound thickens** — wind gives way to the sound of a valley at dawn.

**0:18 — One hill. One opening.**
The fall narrows to a single dark opening in limestone. Everything else leaves the frame.

**0:24 — The threshold.**
They pass through it. Not a page transition. A camera move through an opening they were already looking at.

*Scroll is the only driver. Speed is theirs. At any moment they can stop, reverse, or leave. Nothing is time-gated (P4).*

## 6.3 THE EYES — 0:25 to 0:50

**0:25 — Inside.**
They are standing in Prohodna, looking up. Two openings in the rock. Two columns of daylight falling through dust.

**And it holds.** Nothing happens. The dust moves. The light moves, barely. That is all. **This is the HELD moment of the Descent** and it lasts as long as the visitor lets it.

**0:32 — The first sentence.**
Small, at the base of the frame, in the Voice:
> *The land was watching before we had a name for it.*

**0:40 — The only instruction in the entire product.**
> **Press and hold anywhere.**

**0:42 — Sight is given.**
They press. The Remembered layer rises — Rila Copper, light from inside the stone, marks that were not there, what this place has seen. They release. It falls.

Three seconds, and the visitor has **used the product's central verb with their own hand** (P3, P9). Nothing was explained. Something was handed to them.

**Emotional target at 0:50 — *possession*.** *I can do that. I still can.*

## 6.4 THE QUESTION — 0:50 to 1:20

Only now, having *been* somewhere, does the argument begin. It arrives one line at a time, driven by scroll, in Inscription, over the held frame:

> **1345 years.**
>
> Empires fell on every side of this land.
>
> The country itself vanished for five hundred of them.
>
> **The name never changed.**
>
> *How?*

Then: **nothing.** Black. Silence. A beat longer than is comfortable.

**Emotional target — *a question that cannot be put down*.** This is the highest-value ten seconds in the product. Nothing may be added to it. No CTA, no scroll hint, no chips.

## 6.5 THE EVIDENCE — 1:20 to 3:00

The answer begins. Four Domains — **not content categories; four pieces of evidence in an argument.** Each is one full-bleed threshold: place, date, one sentence about the moment it should have ended and didn't.

| | Domain | The evidence |
|---|---|---|
| I | **The Kings** — Thracian Valley | Before the Name, the land already remembered. |
| II | **The Sea** — Black Sea Coast | The sea does not remember names. It remembers courage. |
| III | **The Sacred Traces** — the northern monasteries | Where the alphabet was kept alive when speaking it was forbidden. |
| IV | **The Golden Gate** — the Balkan passes | Where refusal was physical. |

**Somewhere in this sequence, the visitor crosses 681.** The light shifts from Pomorie Slate to Thracian Ochre. The sound changes. It is never labelled.

**One domain is open. Three carry a Seal** — visible, named, dark, beautiful, closed (P10). A sealed domain is not clickable and does not pretend to be. Beneath the seal, one line in the Voice: *Not yet opened.* Nothing more. No date, no email capture, no apology.

**2:40 — A human being.**
At least once in this sequence, a named Bulgarian appears in frame — small, walking, at a gate, on a ridge, never posed, never looking at camera — with their name in the caption. The story is about people. Until a person appears, it is about geology.

## 6.6 COMMITMENT — 3:00 to 4:00

**The Covenant.** One screen. HELD.

> The name has been carried by everyone who ever spoke it.
>
> Nobody carried it alone.
>
> **Add yours.**

One field: **your name.** Then, quietly, beneath it: your email, with one plain sentence about what will happen to it.

On submission, **immediately and in the browser**: their name rendered in Old Bulgarian uncial as an object they can keep, download and post. And one true sentence:

> *You are the [n]th to be inscribed. When the first route opens, you will be told before anyone else.*

The second vocal moment enters here — a single held note — and then silence.

This is the same email capture the Audit recommended and it is a completely different act (P8, P9). **It is also the only share mechanic the product needs**, because people share things with their name on them. There are no share buttons anywhere in this product.

## 6.7 DEPARTURE — 4:00

The world folds outward into **The Memory Map.**

It is dark. Two or three Lights burn where they have been. Everything else waits. The Seals sit over three regions.

**The Descent ends by handing them the map, not by asking them to download something.**

**Emotional target — *belonging, and unfinished business*.** *I've been counted. And I've barely started.*

## 6.8 RETURN — the second visit

The single most-neglected moment in web design and one of the most important here.

- **The opening does not replay.** A returning visitor arrives *already inside Prohodna*, looking up, with their lights intact. The Fall is a first-time experience and it is never re-imposed.
- The Map remembers. Their name is remembered if inscribed.
- If anything has been unsealed since their last visit, they learn it **on the map**, as a new light in a region that was dark — never as a banner, a badge, or an email-first announcement.
- **Nothing about the return experience nags.** No "you left something unfinished." The world waited; it did not pine.

## 6.9 THE SIDE ENTRANCE — the visitor who never saw the Descent

**At any scale beyond a handful of witnesses, most arrivals are lateral.** Someone lands on one witness from a search engine, a shared link, a partner's site. They have not descended. They have not been given Sight. Under a strict reading of §6.3 they never can be — and the product's central verb would then be unavailable to the majority of its audience.

**That is a correctness failure, not a scaling one, and it is resolved here.**

- **Sight is givable at any entry point.** The first time a visitor meets a photograph with a Remembered plate, anywhere in the world, the invitation appears once, in the same words, in the Voice. It is given, not explained. It is never given twice.
- **The lateral visitor is not shown the Descent as a prerequisite.** They are somewhere real, and that is enough. The world does not tell them they started in the wrong place.
- **The Question finds them anyway.** Every witness's testimony is one piece of the answer to *how did the Name survive* (P8). A visitor who has read one witness has met the question through its evidence rather than through its statement — which is arguably the better order.
- **The Descent remains offered, never imposed.** One line, once, at the foot of their first witness: *there is a beginning to this, if you want it.* Taken or ignored, never repeated.
- **They leave with Hearsay.** Whatever their witness named is now on their map (§3.12). Nobody arrives into a void.

## 6.10 THE LOOP

```
        ┌─────────────────────────────────────────────────┐
        │                                                 │
   DESCEND ──▶ WITNESS ──▶ LOOK THROUGH ──▶ THE THREAD ───┘
   (arrival)   (a place)   (Guardian Sight)  (one next,
        │                        │            never a grid)
        │                        ▼
        └──────────── THE MEMORY MAP ◀── (a new Light)
                    (what you've seen ·
                     what remains dark)
```

Four rules that make it never end:

1. **Every witness ends with exactly one next witness.** Never a grid. This is the rabbit-hole mechanic, and it works precisely because it is a chain and not a menu.
2. **Every witness completed lights the map.** The visitor is *building* something by reading.
3. **The map always shows more darkness than light.** Permanently. This is the horizon.
4. **The end of the Thread is not the end.** The last witness hands you the Covenant; the Covenant hands you the map; the map shows what is still dark. **The loop closes and immediately reopens.**

---

# 7. DESIGN TOKENS

**Conceptual tokens, not CSS variables.** Each token is a *meaning* with a strict domain of use. Implementation values derive from these; the meanings do not derive from implementation. A token used outside its domain is a defect, even if it looks good.

Every design decision, every PR description, and every Cursor task must be expressible as: *"this uses TOKEN, in its permitted domain, because PRINCIPLE."*

---

### LIGHT
*The only source of hierarchy in this world.*
**Means:** attention, revelation, the sky, a flame, memory.
**Allowed:** in photographs; in the Eyes-of-God colour used for the Voice and Inscription; as the warming/cooling of a scene across 681.
**Forbidden:** as a UI effect. No glows, halos, neon, glassmorphism, or luminous buttons. **Light never comes from an interface element.**

### DARKNESS
*The ground of the world, and the material of the horizon.*
**Means:** the not-yet-known; the unlit map; the cave; the near-edge of a threshold.
**Allowed:** as the base of every surface; as the state of unvisited Lights; as the mass around a HELD moment.
**Forbidden:** as a mood filter over a bright photograph. Darkness is *photographed*, never applied.

### THRESHOLD
*The world's central form.*
**Means:** an opening you can pass through; a choice; a doorway between Now and Remembered.
**Allowed:** every photograph's composition; every navigational choice; every page transition.
**Forbidden:** as decoration. A frame-within-a-frame that leads nowhere is a lie about a threshold.

### STONE
*Permanence, weight, resistance.*
**Means:** what has survived; what the letters are cut into.
**Allowed:** in Inscription type treatment; in the texture and mass of the Prohodna Dark ground; in the language of Seals.
**Forbidden:** as a background texture image. Stone is in the photographs; it is never a tiling pattern.

### MEMORY
*The second state of everything.*
**Means:** the Remembered layer; Guardian Sight; Rila Copper.
**Allowed:** only when the visitor is actively looking through, and only after Sight has been given.
**Forbidden:** absolutely everywhere else. **Rila Copper appearing outside a Remembered state is the most serious colour violation possible**, because it destroys the one signal the visitor learned to trust.

### WITNESS
*A place that saw something.*
**Means:** a real, visitable location with testimony.
**Allowed:** as the atomic content unit; as a Light on the map; as a link in the Thread.
**Forbidden:** as a marketing destination. A witness is never described in terms of its amenities.

### SILENCE
*The most expensive material.*
**Means:** the absence of content, motion and sound at a chosen moment.
**Allowed:** once per page, at the emotional peak (the HELD state); after The Question; after the Covenant note.
**Forbidden:** being filled. Any PR that adds an element to a HELD moment is rejected on sight, no matter what the element is.

### DISTANCE
*Scale and unreachability.*
**Means:** the visitor is small; the land is old; there is more beyond.
**Allowed:** in wide frames; in the map's dark regions; in the vertical air between movements.
**Forbidden:** being collapsed for density. We never "make better use of the space."

### BREATH
*Rhythm; the pause between things.*
**Means:** the pacing of the descent; the interval between a line and the next line.
**Allowed:** as the vertical rhythm system (HELD / WIDE / CLOSE / SET).
**Forbidden:** compressing below CLOSE anywhere in the emotional sequence.

### DUST
*The only permitted particulate.*
**Means:** the air of a real place made visible by real light.
**Allowed:** exclusively where it exists in the photograph — a cave shaft, a lit doorway, a fire.
**Forbidden:** as an ambient overlay on any page. **Shooting stars, floating motes, auroras and sparkle layers are permanently banned by this token.**

### WATER · WIND
*Weather. The world's only autonomous motion, alongside dust and breath.*
**Allowed:** where physically present in frame.
**Forbidden:** as a parallax layer over content that is not water or sky.

### VOICE
*The narrator, and the human note.*
**Means:** the editorial serif; the field recordings of people; the two polyphonic moments.
**Allowed:** for anything the visitor is meant to feel.
**Forbidden:** for interface labels, legal text, or anything functional. The Voice never gives instructions except once, at Prohodna.

### INSCRIPTION
*Letters as carving. The brand's deepest asset.*
**Means:** the Old Bulgarian uncial; place names; the four dates; the Name; the Covenant.
**Allowed:** at monumental scale, rarely, never in quantity.
**Forbidden:** in paragraphs, navigation, buttons, form labels, or anything that repeats more than twice on a page.

### SEAL
*A closed thing that is not a missing thing.*
**Means:** a domain that exists and is not yet opened.
**Allowed:** on the three unopened Domains, and on the map's dark regions.
**Forbidden:** carrying a date, a countdown, an email field, or the words "coming soon." **A Seal never apologises.**

### GOLD
*The single most restricted token in the system.*
**Means:** the Master Keys. The promise at the end of everything.
**Allowed:** **reserved for the Master Keys and for nothing else, ever.** Four keys exist in the mythology; gold belongs to them and to no other object, surface or state.
**Forbidden:** everywhere else, in every form — borders, text, accents, hovers, dividers, logos, buttons. **It is never a system colour.** This token exists to be withheld.

### HORIZON
*What you can see and cannot yet reach.*
**Means:** the sealed domains; the map's darkness; the piece of the answer that lives in the app.
**Allowed:** always visible, never reachable.
**Forbidden:** being fully resolved. **If the horizon is ever closed, the product is finished — and a finished world has no reason to be returned to.**

---

# 8. THE RULES

**This chapter is the canonical rule register.** Chapter 16 is a *view* of it, addressed to agents, and is generated from it — never authored separately. Where the two ever disagree, **this chapter governs**, and the disagreement is a defect to be repaired at source. Two hand-maintained copies of the same law drift within a year, and when they drift nobody can say which is authoritative.

**One hundred rules. Every implementation must satisfy all of them.** Each is testable. Each cites its principle.

Every rule carries the metadata header defined in *The three tiers*. Three fields matter most in practice:

- **`ENFORCEMENT`** — `machine` (a build check exists and cites the rule ID), `rubric` (a human checks against a written standard), or `judgement`. Roughly thirty-five of these rules are mechanically enforceable today; those thirty-five belong in CI, because **a rule that fails a build teaches faster than a rule that fails a review.**
- **`EVIDENCE`** — why this rule exists. Many rules below are the scar tissue of specific 2026 defects. That is a legitimate reason for a rule and a terrible reason for a *law*; recording it is how the rule can be retired honourably later instead of accumulating forever.
- **`STATUS: temporary`** — applied to rules that exist to prevent a known past defect rather than to express a principle. **Rules 8, 9, 37, 40, 74, 75 and 76 are marked temporary with a review date of 2027-01**, and are expected to migrate to mechanical checks. They are correct. They are not constitutional.

## Content & voice (1–15)

1. Never ship a string that has not been written by a human in that language. *(P14)*
2. Never ship a page whose copy exists only in English under a non-English `lang`. *(P14)*
3. Always write errors in the Voice, in complete sentences, saying what to do next.
4. Never use: *platform, solution, seamless, immersive, unlock your journey, discover more, learn more, sign up now, don't miss out.*
5. Never tell the visitor what to feel. Show the thing; let them.
6. Every witness has exactly one date, and it is the moment the Name should have ended and didn't. *(P8)*
7. Every photograph has a caption naming the place and, where a person is present, the person. *(P1)*
8. Never repeat the same sentence twice on one page. *(Audit: "Only in the app" ×3)*
9. Never use the same `<h2>` string more than once on a page. *(Audit: 6× page title)*
10. Only one `<h1>` per document, and it is the place name.
11. The boundary with the app is stated once, at the Covenant, as a promise — never as a limitation, never repeated.
12. Never publish content marked draft, provisional, placeholder, or unreviewed. *(P10)*
13. Never render an internal status label to a visitor.
14. The word "quest" appears in the product at most twice. Naming the genre breaks the genre.
15. Copy is authored per breakpoint or breakpoint-agnostic. Never author a line break for one width only.

## Structure & navigation (16–30)

16. There is no navigation bar. The Mark and the Map glyph are the entire persistent interface. *(P11)*
17. Never build an index, archive, tag page, catalogue, or "browse all." Never render a count of how many places exist. *(P11, P16)* — Asking for a place **by a name the visitor already knows**, answered with one place or with silence, is a map affordance and is permitted (§3.12). A directory lists everything by default; a map answers a question.
18. Every **narrative** surface offers exactly one argued next step. **Spatial** surfaces — the Map and a Domain — present the world as it is, and are not narrative. *(P11)*
19. The Thread link is always a full sentence of reasoning, never a label. *(P11)*
20. The Thread is authored by a human per language. It is never computed. *(P8)*
21. Every navigational element is a real `<a>` with a real `href`. Nothing navigates by script alone. *(P15)*
22. Never render a visible breadcrumb. Structured-data breadcrumbs only.
23. Never add a "back to top" control. The Mark returns to the surface.
24. Slugs are flat, localised, and human. Never expose a database path. *(§5.2)*
25. Every URL that has ever been public 301s permanently. No URL dies. *(§5.2)*
26. Canonical URLs match served URLs byte-for-byte, including trailing slash. *(Audit)*
27. `hreflang` lists only complete languages, and always reciprocates. *(P14)*
28. Sealed domains are excluded from the sitemap and are not indexable. *(P10)*
29. `placeIdentity` IDs and `unlockingbulgaria://` URIs are immutable. No slug change may alter them. *(§5.4)*
30. Root `/` negotiates on `Accept-Language`, and the visitor's chosen language is remembered forever.

## Photography & imagery (31–45)

31. Every photograph obeys the Threshold Rule: composed through something, dark near-edge, luminous depth. *(P2)*
32. Every photograph is captured within the two permitted light windows. *(Ch. 12)*
33. Never use stock photography. Never use AI-generated imagery. Never use illustration in place of a photograph.
34. Never ship an image without an authored quiet region for its type. The frame serves the words. *(§3.8)*
35. Never place text over a photograph without verifying legibility against the delivered plate — never by adding a shadow or a scrim that wasn't designed. *(§3.4)*
36. Every image ships with explicit dimensions and an authored `alt` describing what is *in* the frame.
37. `alt` text never describes what the image was supposed to be. *(Audit: alt described a photo; the file was a placeholder)*
38. The hero photograph of any page is eager-loaded with priority. Everything below is lazy.
39. Never ship a `<video>`, `<img>` or `<source>` whose file does not exist in the deploy. *(Audit: 3× 404)*
40. Never ship a decorative photo credit that admits the asset is temporary. *(Audit)*
41. Every witness has its own social image; never a shared generic one. *(P13)*
42. A human being appears in at least one frame per page, except where the place forbids it.
43. People in frame are never posed and never look at camera. *(Ch. 12)*
44. No orange-and-teal grade. No HDR. No lifted-matte film emulation. Blacks stay black. *(Ch. 12)*
45. Aerial footage must read as *falling*, never as *surveying*. *(Ch. 12)*

## Motion (46–58)

46. Motion is weather or consequence. There is no third category. *(P4)*
47. Never time-gate content. No `animation-delay` ladders on anything a visitor might want to read. *(Audit: 4.4 s)*
48. Never autoplay a reveal. The visitor's scroll or press drives everything.
49. Never animate ambient decoration. No stars, motes, auroras, sparkles, rotating globes. *(DUST)*
50. Never build a custom cursor. *(P5)*
51. Parallax only where physical depth exists in the frame. *(§3.8)*
52. Page transitions are camera moves through the chosen threshold, never generic wipes or fades. *(§4.3)*
53. Any transition longer than the time it takes to want the next page is too long. Target ≤ 400 ms perceived. *(Ch. 11)*
54. Every motion has an authored reduced-motion alternate that is *beautiful*, not merely static. *(P15)*
55. The Descent must be skippable, scrubbable, reversible and complete in under 20 s of real time — or it is cut. *(Direction, final self-challenge)*
56. Never replay an opening sequence for a returning visitor. *(§6.8)*
57. Never animate a state change nobody asked for.
58. Nothing on screen may move while the visitor is reading a paragraph.

## Sound (59–66)

59. Never autoplay sound. *(§1.4)*
60. Sound is offered exactly once, at the moment of descent, in one line. *(§6.1)*
61. The visitor's sound choice is remembered forever and never re-asked.
62. Sound is field recording of the actual place. Never library music. Never a bed. *(Ch. 13)*
63. The human voice enters at most twice in any single visit. *(Ch. 13)*
64. Sound never carries information that is not also carried visually. *(P15)*
65. There is exactly one sound control, always in the same place, honest about what it does.
66. Sound never plays over an interaction that produces its own sound.

## Interaction & components (67–80)

67. Anything that looks interactive is interactive. Anything that is not, does not. *(§3.9, Audit P0-4)*
68. Never render a hover affordance on a non-interactive element.
69. Never build a card outside the Utility layer. *(§3.11)*
70. Never build a carousel, tab set, accordion-in-accordion, or mega-menu. *(§4.5)*
71. A surface offers at most one action per layer — one useful action, one narrative action. **Never two of the same kind.** *(§3.0, §3.10)*
72. Never use an icon that duplicates the word beside it. *(§3.14)*
73. Never ship emoji or geometric glyph sets in the product surface. *(§3.14, Audit: ♪ on the Cave)*
74. Style is driven by content identity, never by array index. *(Audit P0-5)*
75. Never render a link to the page the visitor is on. *(Audit: self-referential Nearby)*
76. Never render a section whose body is an empty state. Remove the section. *(Audit: "Gallery — Coming soon")*
77. Practical information lives behind exactly one deliberate action. *(P12)*
78. Every overlay moves focus in, traps it, locks background scroll, inerts the background, and restores focus on close. *(Audit)*
79. Sight is press-and-hold; it never latches, toggles or persists a state. *(§4.4)*
80. Progression is a record, never a gate. Nothing is locked behind having read something. *(P9)*

## Accessibility (81–92)

81. Every interactive element has a visible focus indicator meeting contrast requirements. Never `outline: none` without a superior replacement. *(Audit)*
82. Never derive text colour from `opacity` on a compliant colour. Pre-blend and commit the value. *(Audit: 6 failures)*
83. Every target is at least 24×24 CSS px; interactive map Lights are at least 44×44. *(Audit: 10–16 px)*
84. Every `role="button"` responds to both Enter and Space — or is not a button, it is a link. *(Audit)*
85. `touch-action` never blocks the page's primary scroll axis. *(Audit: Guardian Sight scroll trap)*
86. Every `aria-label` is verified against the element it labels. *(Audit: 2 wrong labels)*
87. Never `aria-hidden` content that carries meaning. *(Audit: 4 core concepts hidden)*
88. Text is never below the platform's comfortable reading minimum. **On the web that minimum is 16 px, everywhere, for any reason.** *(§3.4)*
89. Content must remain usable at 200 % text zoom and 320 px width.
90. Colour is never the sole carrier of meaning.
91. Every video has captions and a transcript; every audio has a transcript. *(P15)*
92. Reduced-motion, sound-off, keyboard-only and screen-reader journeys are tested as *experiences*, not as compliance checks. *(P15)*

## Performance & honesty (93–100)

93. The first paintable frame of any page is its photograph. Nothing precedes it.
94. Never ship a loading state that fakes content. Held darkness with weather is honest; a pulsing grey box is not.
95. Never ship an asset over its budget. **The budget table lives in Tier 2 and is reviewed quarterly** — numbers rot, and a rotted number in a constitution teaches people to ignore constitutions. *(At ratification: hero ≤ 400 KB · any other image ≤ 200 KB · page JS ≤ 40 KB · initial payload ≤ 1.2 MB. Audit: 580 KB logo, 24 MB video.)*
96. Long media is transcoded, segmented, and always shows real progress after a deliberate click. *(Audit)*
97. Audio and video that must stay in sync are one file. Never two elements. *(Audit)*
98. Never ship dead code, unused tokens, or unused strings. *(Audit: ~120 lines dead CSS, 10 dead keys)*
99. Never ship anything that requires consent, identifies a person, joins one visit to another, or involves a third party. **Aggregate, server-side, consent-free counting is permitted — and whatever we count is published on The Project.** A constitution that forbids learning is broken by the first person who needs to learn something, and it is broken *quietly*, which is worse than amending it aloud. Our privacy policy is a promise, and this is how it is kept precisely rather than vaguely. *(§1.4, P16)*
100. **Never ship anything that contradicts this document.** Where two provisions appear to collide, apply the conflict-resolution order — Charter beats Standards beats Specs, and the more specific governs — and record the resolution. If the document must genuinely be contradicted, **amend it first, or request a time-boxed exception.** *(Status of this document)*

## The seven articles added at v1.1 (101–107) — **Tier 0**

*These are not preferences. They are the seven places where this product is most likely to be hollowed out from the inside, by people who mean well.*

101. **Sponsored parity.** A sponsored witness meets the identical editorial, historical and photographic standard as any other, is disclosed plainly, and **no partner ever holds approval over content.** No exceptions, at any price, from any institution. *(Book IX)*
102. **The horizon is never sold.** A Seal opens when its content is ready. Not when a payment clears, not for a launch date, not for a campaign, not for a festival. *(P10, token HORIZON)*
103. **Payment never gates a story.** A visitor may always read what a place saw. What is paid for is what happens *at* the place, in the app — never the knowledge that it happened. *(Book IX)*
104. **No AI-generated imagery, ever.** Not as a placeholder, not for a comp, not for a sealed domain, not "just for the OG card." **This will be the most economically pressured rule in the document within five years**, and it is stated alone so it can be defended alone. *(P16, Book X)*
105. **Every historical claim is sourced and reviewed.** Nothing is asserted about the past without a citable source and a named reviewer. A tourism claim and a historical claim are different objects and are never allowed to wear each other's clothes. *(Book VII)*
106. **WCAG 2.2 AA is the floor**, with named AAA commitments recorded in Tier 2. P15 is philosophically excellent and operationally meaningless without a named standard. *(P15)*
107. **A contribution never appears as attributed user content.** What a visitor gives may enter the record, edited, in this world's voice — or it does not enter. **The moment two narrators speak on one surface, Law 8 is dead.** *(Book IX, Law 8)*

---
---

# BOOK III — HOW IT LOOKS AND SOUNDS

---

# 9. COMPONENT SYSTEM

*Philosophy, not pixels.*

## How a component comes to exist

What is frozen here is **not the inventory — it is the door.** Freezing an inventory is the classic way a design system dies: the list is always slightly incomplete, so a shadow system grows beside it, and within two years the real system is the shadow one. What must be permanent is the standard a thing has to meet to be called a component at all.

**A component may exist only if all five are true:**

1. It is **required by a page pattern** in Chapter 10 — not by a preference, a hunch, or a convention borrowed from elsewhere.
2. **No existing component could serve**, extended or configured.
3. It **declares its layer** — Told or Useful (§3.0).
4. It arrives with **anatomy, states, variants and an accessibility contract**. Philosophy without anatomy is an essay about a design system, not a design system.
5. It removes something, or it justifies why nothing could go.

Admitting a conforming component is a **Tier-1 decision**, recorded. **The twenty-six deleted components below are Tier 0 and are permanently banned by name** — that register, not the inventory, is what actually protects this product from regressing to what it was.

## The current inventory

**Fourteen components.** This list grows only through the door above.

---

### 1 · THE MARK
**Purpose:** the brand, and the way home.
**Exists:** on every surface, top-left, always the same size, never animated.
**Does not exist:** as a link farm anchor, as a loading animation, in more than one place per page.
**Philosophy:** the Mark is a *seal*, not a logo. It is small and it does not compete with the land. On activation it returns the visitor to the surface of the world — not to a "homepage."

### 2 · THE MAP GLYPH
**Purpose:** the entire navigation system, and a record of progress.
**Exists:** on every surface, bottom-anchored, showing how many Lights burn.
**Does not exist:** on the Memory Map itself; on legal pages; during a HELD moment.
**Philosophy:** navigating is an act of collecting. The glyph is the only place the visitor sees their own progress, and it never celebrates.

### 3 · THE THRESHOLD
**Purpose:** every choice in the emotional sequence.
**Exists:** wherever the visitor may move to another place — a domain, a witness, the Thread.
**Does not exist:** in grids of more than one; in the Utility layer; as a card.
**Philosophy:** a threshold is a photograph you can walk into. It carries: the frame, the name in Inscription, one line of what the place saw. Activating it moves the camera *through* the opening in the frame.

### 4 · THE SEAL
**Purpose:** a domain that exists and is not yet opened.
**Exists:** on the three unopened Domains; on the map's dark regions.
**Does not exist:** with a date, a countdown, an email capture, or the words "coming soon."
**Philosophy:** a Seal is a promise expressed as a closed object. It is beautiful, it is named, it is dark, and it does not explain itself. *Not yet opened.* Nothing more.

### 5 · THE INSCRIPTION
**Purpose:** carry the four things that matter — place names, the dates, the Name, the Covenant.
**Exists:** at most three times per page.
**Does not exist:** in navigation, buttons, labels, or body copy.
**Philosophy:** letters cut into a surface. If it repeats, it isn't an inscription; it's a font choice.

### 6 · THE VOICE BLOCK
**Purpose:** everything the visitor is meant to feel.
**Exists:** in a single reading measure, in the photograph's authored quiet region.
**Does not exist:** in two columns; over a busy plate; in the Utility layer.
**Philosophy:** narration, not copy. Read aloud in your head, it should sound like a translation of something older.

### 7 · GUARDIAN SIGHT
**Purpose:** the Remembered layer; the product's central verb.
**Exists:** on every photograph, on every page, after Sight has been given at Prohodna.
**Does not exist:** before it has been given; as a section; as a toggle; as a slider on a page nobody reaches.
**Philosophy:** a capability, not a feature. Press and hold; memory rises; release; it falls. It never latches. Its limit on the web (a fixed number of layers, still images, no camera) is stated once and honestly — the app is a continuation, not an unlock.

### 8 · THE MEMORY MAP
**Purpose:** navigation, progress record, and the horizon, in one object.
**Exists:** as a full surface reached from the Map Glyph, and as the ending of the Descent.
**Does not exist:** as a widget embedded in a page; as a GIS/tile map; as a directory.
**Philosophy:** a monastery manuscript chart that remembers you. Dark by default. Lights appear only where you have been. Seals sit over what is closed. Every Light is a real link. The map always shows more darkness than light.

### 9 · THE COVENANT
**Purpose:** the act of joining; the only conversion in the product.
**Exists:** once, at the end of the Descent; and at its own permanent URL.
**Does not exist:** as a modal, an interstitial, a sticky bar, a footer widget, or a second ask.
**Philosophy:** an inscription, not a signup. Name first, email second, one honest sentence about what happens next. The reward is immediate, visual, and keepable — and it is the product's only share mechanic.

### 10 · THE PRACTICAL PANEL
**Purpose:** everything true and useful about visiting a place.
**Exists:** behind exactly one deliberate action at the end of a witness — *Stand here.*
**Does not exist:** interleaved with the narrative; as a facts strip near the top; as coordinates presented as a map.
**Philosophy:** the only place in the product where the Utility voice, SET spacing, cards and conventional controls are correct — because here, clarity outranks atmosphere. It contains: how to get there (with a real map and a real directions handoff), how long, which season, what to wear, what's nearby worth an hour, and honest warnings.

### 11 · THE FORM
**Purpose:** the two places a human tells us something — the Covenant and Partners.
**Exists:** twice in the product.
**Does not exist:** anywhere in the emotional sequence except the Covenant.
**Philosophy:** an inscription or a serious professional enquiry. Visible labels, honest errors in full sentences, a stated promise about the data, a working no-JavaScript path, and consent where the law and decency require it. *The existing partner form engineering is exemplary and is preserved.*

### 12 · THE SOUND CONTROL
**Purpose:** the visitor's authority over their own ears.
**Exists:** once, in the same position on every surface, after the initial offer.
**Does not exist:** as an autoplay unmute prompt; as a second ask; as a volume slider.
**Philosophy:** one control, honest about what it will do, remembered forever.

### 13 · THE LANGUAGE CHOICE
**Purpose:** the visitor's language, chosen once.
**Exists:** at the edge of the Memory Map, and at the foot of the Utility layer.
**Does not exist:** as a modal overlay; as a flag; hidden behind a hamburger.
**Philosophy:** language is not a setting, it is which version of the world you are in. Choosing it is a quiet, permanent act. Only complete languages are ever offered.

### 14 · THE FOOT
**Purpose:** the small number of true, dull things a site owes its visitors.
**Exists:** at the base of every surface except HELD moments.
**Does not exist:** as three columns of links duplicating on-page anchors.
**Philosophy:** the Mark, who made this, legal, language, and one sentence worth reading. A footer full of links is a site that does not trust its own navigation.

---

## THE DELETED REGISTER — Tier 0
### Components that are deleted and may never return

The header nav · the hamburger · the mobile nav panel · the language modal · the video lightbox · the portal card · the domain grid-of-five · the "How It Works" spine · the flow-node column · the Journey grid · the Features grid · the Timeline section · the Guardian Sight scene cards · the Guardian Sight capability grid · the store buttons · the download band · the FAQ accordion on the Descent · the contact card grid · the footer link farm · the scroll spine · the cursor lens · the shooting stars · the living background · the globe · the arrival section · the hero phone.

**Twenty-six components removed.** The product gets better by subtraction (P5).

**Restoring any item on this register requires a Tier-0 amendment.** This is the accumulated judgement of the whole audit and redesign, and it is the cheapest protection in the document.

---

# 10. PAGE BLUEPRINTS

*Every surface. Why it exists. What it contains. What it must never contain.*

## 10.1 THE DESCENT — `/{lang}/`

**Why it exists:** to convert a stranger into someone who has been somewhere, asked a question they cannot drop, and been counted.

**Structure — six movements, one camera:**

| | Movement | Contains | State |
|---|---|---|---|
| I | **Above** | the peninsula before dawn · *Before the Name* · the sound offer | HELD |
| II | **The Fall** | the descent through cloud to one opening | WIDE |
| III | **The Eyes** | inside Prohodna · the first sentence · Sight given | **HELD** |
| IV | **The Question** | 1345 · the argument · silence | HELD |
| V | **The Evidence** | four Domains — one open, three sealed · the 681 crossing · a named person | WIDE |
| VI | **The Covenant** | name · email · the inscription artefact | **HELD** |

Ends by folding into the Memory Map.

**Must never contain:** a navigation bar · a features grid · a how-it-works diagram · a progression flowchart · a timeline section · store buttons · a partner form · an FAQ · trust chips · a scroll hint that isn't the world itself · more than one action per movement.

**The returning visitor** enters at Movement III with their Lights intact. Movements I–II never replay.

## 10.2 A WITNESS — `/{lang}/{witness}/`

**Why it exists:** the witnesses *are* the answer to the question. Without them the Descent is rhetoric.

**Five beats, in order, never reordered:**

1. **What it is.** Full-bleed threshold photograph. Name in Inscription. Nothing else. **HELD.**
2. **What it saw.** One Voice block. One date. The moment the Name should have ended here and didn't.
3. **Look through it.** Guardian Sight on this place. The reward for having come.
4. **Stand here.** One action. Behind it, the Practical Panel — everything true and useful.
5. **The Thread.** One next witness. One image, one name, one sentence of reasoning. Never a grid.

Completing a witness lights the map.

**Must never contain:** a facts strip above the story · coordinates presented as a map · a "gallery" · a "nearby places" grid · a self-referential link · a route-preview duplicate · the words "Only in the app" more than once · a repeated `<h2>` · a second forward path.

## 10.3 THE MEMORY MAP — `/{lang}/map/`

**Why it exists:** it is the navigation, the progress record, and the horizon. It is also the answer to "exploration stops."

**Contains:** the hand-drawn chart, dark. The visitor's Lights. Seals over closed regions. At its edge, the utility drawer: language, sound, The Project, Partners, legal.

**Three states** (§3.12): **Walked** · **Heard of** · **Dark**. A Heard-of place is legible and never lit — **the world tells you it is there; only the Memory says you have been.** The Dark is never rendered as absence-with-a-hint; it is simply the country, unlit, and it is always most of it.

**Behaviour:**
- Arriving for the first time, exactly one place is Walked: Prohodna. **That is correct, not embarrassing** — one Light is the truthful state of a new visitor (P13).
- A visitor who arrived sideways, on any witness, has Heard of whatever that witness's testimony named. **Nobody is ever handed a void, and nobody is ever handed an index.**
- Each Light is a real link to its witness, at least 44×44, keyboard-reachable, with a name.
- Hovering or focusing a Light shows its name and one line — and the preview itself is part of the link, not a `pointer-events: none` tooltip.
- Dark regions are not interactive and do not pretend to be.
- **The map always shows more darkness than light** (Law 7).
- On touch, the first tap previews; the second enters. Nothing navigates on first contact.

**Must never contain:** a tile/satellite layer · filter chips · a list view · autocomplete · ranked results · a "show all" toggle · clustering that hides the Dark · a count of how many places exist · **anything that makes the world look complete or completable.**

*Asking for a place by the name you already know, and being taken there, is a map affordance and is permitted. Everything that turns that question into a browsing surface is not (Rule 17, §3.12).*

**Has an `<h1>`.** *(Audit: it currently has none.)*

## 10.4 A DOMAIN — `/{lang}/{domain}/`

**Why it exists:** a domain is one piece of evidence in the argument, and the container of its witnesses.

**Structure:** one threshold photograph of the region · the evidence, stated in the Voice · the epoch (Before / After the Name) as light, never as a label · the domain's witnesses as Thresholds *in the order of the argument* · the Thread onward.

*A Domain is a **spatial** surface, not a narrative one (Rule 18). It shows a region as it is, which is why it may present several witnesses at once — and why it is the only surface other than the Map permitted to do so.*

**A sealed domain has no page.** It exists only as a Seal on the Descent and on the map. It is not in the sitemap. It is not indexable. **We do not build empty rooms and lock the doors; we do not build the rooms yet.**

## 10.5 THE COVENANT — `/{lang}/covenant/`

**Why it exists:** the only conversion in the product, and the moment a visitor becomes a Keeper.

**Contains:** the three lines · the name field · the email field with one honest sentence · on success, the inscription artefact and the position in the sequence · the second vocal moment.

**Must never contain:** a second ask · social login · a checkbox pre-ticked · marketing consent bundled with transactional consent · a "no thanks, I hate Bulgaria" dismissal pattern · a countdown · a scarcity claim.

**The result surface** (`/{lang}/inscribed/`) is `noindex`, exists for the no-JavaScript path, and is written in the Voice.

## 10.6 THE PROJECT — `/{lang}/the-project/`

**Why it exists:** everything that builds trust but breaks the spell if placed inside it.

**Contains:** who made this, with faces and names · why · the historical sources and consultants, cited · the six real questions (down from ten) including *Do I need to be in Bulgaria?* and *What does it cost?* · the stated position on AI training and on data · one real email address, answered by a named human.

**Why the FAQ moved here:** the answers are good and honest, and they belong where people go *looking* for reassurance — never in the middle of an emotional sequence.

## 10.7 PARTNERS — `/{lang}/partners/`

**Why it exists:** municipalities, museums and tourism boards are a real revenue and content channel. They need credibility, evidence and a named contact — not seduction.

**Tone:** sober, evidenced, confident. A different register, deliberately. This is the one surface permitted to look like a serious business document.

**Contains:** the cultural-preservation and visitor-economy argument · what a partnership actually involves · the existing form, **preserved exactly as engineered**, plus a consent checkbox and a privacy link · one named human who answers.

**Removed from the Descent entirely.** A B2B lead-gen form inside an emotional sequence is a genre collision that damages both audiences.

## 10.8 THE UNLIT — `404`

**Why it exists:** a wrong turn is still inside the world.

**Contains:** a real photograph — a path that goes into fog, a door in a wall with nothing behind it. One line in the Voice: *There is nothing here yet.* One action: the map.

**Must never contain:** the number 404 in large type · a robot illustration · a joke · a search box · a list of popular pages.

## 10.9 LEGAL — `/{lang}/legal/{doc}/`

**Why it exists:** because it must, and because the current privacy policy is honest in a way that is genuinely rare and worth protecting.

**Tone:** plain, warm, human, Utility face, SET spacing, no atmosphere. **Legal pages are the only surfaces exempt from the photography requirement** — and even here, one frame at the head is preferred.

**Preserved verbatim in spirit:** *"We set no cookies, run no analytics and store nothing in your browser. That is why you have never seen a consent banner here: there is nothing to consent to."* This is a brand asset. Any change to it requires an amendment.

---

# 11. MOTION BIBLE

## 11.1 The one law

> **Motion is either weather or consequence. There is no third category.**

**Weather** — light, dust, water, wind, breath. Belongs to the place. Continues whether or not anyone is watching. Never loops visibly. Never draws attention.

**Consequence** — the visitor scrolled, so the world descended. They pressed, so memory rose. They chose a threshold, so they passed through it.

Anything that is neither is decoration, and decoration is deleted (P4, P5).

## 11.2 The motion inventory

| Motion | Trigger | Duration | Physics | Notes |
|---|---|---|---|---|
| **The Fall** | scroll | visitor-controlled | camera altitude; light warms continuously | reversible, scrubbable, skippable |
| **Passing a threshold** | activation | ≤ 400 ms perceived | camera moves *through* the chosen opening | the opening you selected is the opening you enter |
| **Sight rising** | press | 180 ms in | memory surfaces from *inside* the stone, not faded on top | never latches |
| **Sight falling** | release | 240 ms out | slower than the rise — memory lets go reluctantly | |
| **A Light appearing** | witness completed | 600 ms | ignition, not a pop | no sound, no toast, no celebration |
| **The 681 crossing** | scroll | continuous | colour temperature and sound shift | never labelled |
| **Weather** | none | continuous | dust, cloud, water, only where present in frame | never on a UI surface |
| **The inscription artefact** | Covenant submitted | ~1.2 s | letters appear as if being cut | the one moment permitted to be slow |

**That is the complete list.** Any motion not on it requires an amendment.

*The durations above are transition physics, not disclosure. **Nothing in this table gates content behind time** — every one of them describes how a thing moves once the visitor has already caused it (P4).*

## 11.3 Timing philosophy

- **Entrances are fast; exits are slower.** Things arrive with intent and leave with reluctance.
- **Nothing waits.** Content that is present is present. There are no reveal ladders. *(Audit: 4.4 s hero)*
- **The visitor sets the pace of the Descent.** Always. If they scroll fast, they arrive fast.
- **One held moment per page**, where nothing moves except weather, and there is nothing to do but look. This is the most valuable and most fragile thing in the product.

## 11.4 What is banned, permanently

Ambient particles · shooting stars · floating motes · aurora layers · rotating globes · custom cursors · scroll-triggered fade-up ladders · staggered card reveals · hover-lift on non-interactive elements · number counters · marquees · typewriter text · glassmorphic blur over content that isn't behind glass · anything on a `setInterval` · anything that moves while a paragraph is being read.

## 11.5 The reduced-motion contract

Reduced-motion is **not** "the same page with animations off." It is an **authored alternate** (P15):

- The Fall becomes a sequence of still plates the visitor moves through — a photo essay. It is beautiful in its own right.
- Sight is a tap-to-toggle cross-dissolve at 120 ms rather than a continuous rise.
- Weather is a still frame chosen for the moment the dust caught the light best.
- The 681 crossing happens instantly at a scroll threshold rather than continuously.

**Test:** if the reduced-motion version isn't something you'd ship on its own, the standard version isn't finished.

---

# 12. PHOTOGRAPHY BIBLE

*The largest chapter, because photography is the product. Everything else is craft applied to it.*

## 12.1 The brief, in one sentence

> **You should be able to identify an Unlocking Bulgaria photograph across a room, at thumbnail size, with the logo removed.**

If that is not true of a delivered frame, the frame is rejected regardless of its quality.

## 12.2 The three laws

### Law 1 — Composed through something
Every frame is shot **through** an opening: from inside the cave looking out; beneath the monastery arch; from the shadow of the cliff toward the lit valley; through the fortress gate; between two trees on the pass.

There is always a **dark near-edge** and a **luminous depth**. The near-edge is genuinely dark — not vignetted in post, but *photographed* dark, with real texture in it.

**Never a flat postcard vista. Never a horizon in the middle of the frame. Never a landscape with nothing in the foreground.**

Why: the product's mythology is thresholds. A frame composed as a threshold is doing narrative work before a single word is read.

### Law 2 — Two windows only
**Window A:** the 25 minutes before sunrise through the 15 minutes after.
**Window B:** the 15 minutes before sunset through the 45 minutes after.

Nothing else. No midday. No blue sky. No overcast noon. No golden-hour-adjacent-but-actually-2pm.

Why: the land in this story is either waking or refusing to sleep. That is not a look — it is the *state the story requires*. It also produces the low, raking light that gives stone its texture, which is the entire subject.

**Exception, and only one:** cave interiors, where the light through the openings peaks near solar noon. Prohodna's twin shafts are strongest between 11:00 and 13:30. This is permitted, documented, and applies to interiors only.

### Law 3 — A person, always, never posed
Someone is in frame: small, at the mouth of the cave, walking away up the ridge, standing under the arch. **Never looking at camera. Never smiling at camera. Never gesturing at the view.** Ideally not aware of the camera at all.

They occupy between 2 % and 8 % of the frame height. They are the scale reference and the emotional door.

Why: this is how you make a viewer feel *they* could be there. The eye enters the frame through a human being and then travels past them into the land. A landscape without a person is geology. A landscape with a person is an invitation.

**Where the place forbids a person** — a closed interior, a protected relief — the frame may be unpopulated, and the page carries a person in a different frame.

## 12.3 Camera language

### Lenses, and what each is for

| Lens | Purpose | Rule |
|---|---|---|
| **20–24 mm** | **The Threshold.** You are *inside* the opening. | Keep the near-edge in the frame. Never tilt — verticals stay vertical. |
| **35 mm** | **The human in the land.** The reportage frame. | The default. If unsure, use this. |
| **50 mm** | **The witness at rest.** Quiet, honest, unremarkable. | For the second and third frames of a witness. |
| **85–135 mm** | **Compression of the sacred.** The relief, the fresco, the carved letter, the hand. | Never for landscape. Compression flattens the land and kills the threshold. |

**Banned:** fisheye · ultrawide below 20 mm · tilt-shift · any lens effect applied in post · lens flare, natural or added.

### Aerial

Aerial is permitted **only** for Movements I–II of the Descent, and under one condition:

> **The aerial must read as *falling*, never as *surveying*.**

Real-estate footage — the slow orbit, the smooth push-in over a landmark, the reveal-tilt — is banned outright. The camera in the Descent is not observing Bulgaria. It is arriving in it, with weight, and slightly too fast.

Practically: descend, don't orbit. Keep the horizon high or out of frame. Fly *at* something, not *around* it. Accept motion blur. Never stabilise it into serenity.

### Movement

Live-action motion is permitted in exactly three places: the Descent aerials, the dust in the Prohodna shafts, and water. Everything else is stills.

Where motion is used it is **long, slow, single-take, and locked or falling.** No handheld shake. No gimbal glide. No timelapse. No hyperlapse. **No drone-orbit-with-music.** Ever.

## 12.4 Composition

- **The quiet region is part of the deliverable.** Every hero frame is delivered with a designated area where type will live, and that area is composed for — deliberately underexposed, uncluttered, and large enough. **The photograph serves the words.** *(§3.8)*
- **Negative space is the subject as often as the object is.** A frame that is 70 % darkness with one lit doorway is a better frame than one that shows everything.
- Verticals stay vertical. Horizons stay level. This world is old and does not tilt for drama.
- **The rule of thirds is not a rule here.** The threshold's aperture governs the composition. Centre it if the architecture is centred (Prohodna's twin openings *are* centred, and centring them is correct).
- **Never crop to 1:1.** Squares belong to social platforms, and this world has depth.
- Aspect ratios: **2:1** for thresholds and heroes · **3:2** for witness and reportage frames · **4:5** for the vertical human frame on mobile. Every hero is delivered in both 2:1 and 4:5, framed separately — **never centre-cropped from one to the other.**

## 12.5 Light

- Direction is **raking and low**, across the surface, never flat-on. Stone exists because of side-light.
- **Expose for the highlight; let the shadows go.** In this world, blacks are black and contain almost nothing. That is a decision, not a mistake.
- **Never fill.** No reflectors, no on-camera light, no HDR bracket to recover shadow detail. What is dark stays dark.
- Interiors are lit by their openings — the shaft, the door, the window — and by nothing else.
- Where fire is present, it is the only warm source and it is protected.

## 12.6 Colour and grade

- **A single, restrained grade across the entire library**, defined once as a reference LUT and applied consistently. Frames from different shoots must sit together without seams.
- **Banned:** orange-and-teal · HDR tone-mapping · the lifted-matte "film" look (blacks stay black) · clarity/dehaze sliders · saturation pushes · sky replacement of any kind · any local adjustment that invents light that wasn't there.
- **Permitted:** exposure, contrast, white balance, and dodging/burning that a darkroom printer would have done in 1965.
- Grain: only at capture ISO. Never added.
- The two-epoch temperature difference (Pomorie Slate ↔ Thracian Ochre) is achieved primarily **in the shooting window**, and only secondarily in the grade. Do not manufacture pre-dawn.

## 12.7 The shot list

### Tier 1 — Minimum viable. Nothing ships before these exist.

| # | Subject | Frame | Window | Notes |
|---|---|---|---|---|
| 1 | **Prohodna interior**, looking up through the twin openings | 20 mm, 2:1 and 4:5 | interior noon | **The single most important photograph in the project.** Three light conditions minimum. The dust in the shafts must be visible. |
| 2 | **Prohodna, the tunnel mouth**, figure entering | 24 mm, 2:1 | Window A | the archetypal threshold |
| 3 | **Prohodna approach**, the valley, the opening small in the cliff | 35 mm, 3:2 | Window A | establishes scale |
| 4 | **The peninsula from altitude**, cloud, before dawn | aerial, motion | Window A | Movement I; falling, not surveying |
| 5 | **The Danube plain**, descending | aerial, motion | Window A | Movement II |
| 6 | **Madara Rider**, first light on the relief | 135 mm + 35 mm context | Window A | the compression frame and the threshold frame |
| 7 | **A rock monastery interior** (Ivanovo or Aladzha), light through the cut opening | 24 mm | interior | the alphabet's hiding place |
| 8 | **A named person**, in one of the above places, small, walking, unaware | 35 mm | either | the emotional door |

### Tier 2 — Required for the Evidence movement (four Domains).

| # | Subject | Domain |
|---|---|---|
| 9 | Thracian tomb interior or the Valley at first light | The Kings |
| 10 | The Black Sea in November, from a fortress wall or harbour | The Sea |
| 11 | Rila or a northern monastery gate, from the shadow outward | The Sacred Traces |
| 12 | A Balkan pass in fog, road disappearing | The Golden Gate |

### Tier 3 — The Thread's next witnesses (as content is written).

Belogradchik at dusk, through a gap in the towers · The Rose Valley at 05:10 · Perperikon, cut steps · Nessebar, a church door · a shepherd, a fire, a dog · a carved Cyrillic letter, macro · hands on stone.

### Standing standard
Every witness added to the product ships with **a minimum of three frames**: one threshold hero, one detail (85–135 mm), one human. **No witness is published with fewer.** *(Rule 12, Rule 39.)*

## 12.8 Guardian Sight plates

Every Guardian Sight moment requires **two registered plates of the identical frame**:

- **The Now plate** — the photograph as shot.
- **The Remembered plate** — the same frame, same camera position, with the memory layer. Produced by: a second exposure at a different time (the light that would have been there), plus authored elements — Rila Copper light from inside the stone, inscriptions surfacing, an afterimage of a figure.

**Rules:**
- Pixel-registered. If the camera moved between plates, the pair is rejected.
- The Remembered plate **never** contains anything that is factually false about the place. It reveals; it does not fabricate history.
- Rila Copper appears in the Remembered plate and **nowhere else in the product** (token MEMORY).
- Both plates are captioned; the Remembered plate's caption states plainly what has been added, in the Voice. **We are honest about the artifice; the honesty is part of the atmosphere.**

## 12.9 Captions

Every photograph carries a caption. Captions are National Geographic captions: **place, what is happening, and one fact you did not know.** Never "Beautiful view of Bulgaria."

> *Prohodna, above Karlukovo. The two openings in the ceiling are 35 metres up and have been called the Eyes of God for as long as anyone has written it down. Photographed 06:12, April.*

Where a person is in frame, they are **named**, with permission, always.

## 12.10 Rights, production and delivery

- **Commissioned, never licensed.** A jury identifies stock in under one second, and everything else then reads as decoration over a template.
- **Full buyout: perpetual, worldwide, all media, including the app and print.** No per-use fees. Photographer credited by name on The Project, permanently.
- **Model and property releases** for every identifiable person and every site requiring permission. Monasteries, protected reliefs and cave systems require written permission and it is obtained before the shoot, not after.
- **Delivery:** RAW + 16-bit master + graded master + the two aspect crops + the designated quiet-region map, per frame.
- **Web delivery:** modern formats, responsive sizes, hero within the 400 KB budget, everything else within 200 KB (Rule 95), explicit dimensions always (Rule 36).
- **Storage:** the master library is versioned and backed up independently of the repository. The repository never becomes the archive.

## 12.11 Rejection criteria — a frame is rejected if…

it was shot outside the light windows · it has no dark near-edge · the horizon is centred · a person is looking at camera · the sky has been replaced · the shadows have been lifted · there is no authored quiet region · it could plausibly appear on any other tourism website · **you could not identify it as ours at thumbnail size.**

---

# 13. SOUND BIBLE

## 13.1 Why sound exists here

Bulgaria's most recognised cultural export in the world is **women's polyphonic singing** — *Le Mystère des Voix Bulgares*. It is, literally, **the sound of a name carried by human voices.** In a product about a name carried by human beings for 1,345 years, this is not a soundtrack choice. It is the thesis, audible.

Almost no tourism site does sound well. Doing it well is therefore one of the cheapest available differentiators — and one of the easiest to ruin.

## 13.2 The offer

Sound is offered **exactly once**, at 0:03 of the Descent, in one line, in the Voice:

> *This place has a sound.* **Listen**

- Taken or ignored, **it is never asked again.**
- The choice is remembered forever.
- There is no autoplay, no unmute prompt, no "turn on sound for the full experience" nag.
- Declining costs the visitor nothing that matters — every meaning carried by sound is also carried visually (Rule 64).

## 13.3 The library

**Field recordings of the actual locations.** Never library music. Never a bed. Never a loop the ear can find.

| Layer | Content | Where |
|---|---|---|
| **Air** | wind at altitude, thin and cold | Movement I |
| **Valley** | the Danube plain at dawn — distant dogs, birds waking, a road two kilometres away | Movement II |
| **Stone** | Prohodna interior — drip, long reverb, the specific hush of a large space with two holes in it | Movement III, and the witness |
| **Sea** | water on stone, November, no gulls | The Sea |
| **Bells** | a single distant monastery bell, unhurried | The Sacred Traces |
| **Fire** | close, small, with the room around it | wherever a fire is in frame |
| **Voice** | one held note, women's polyphony, unaccompanied | **twice only** |

**Recording standard:** stereo or ambisonic, on location, at the hour the photograph was made, minimum 5 minutes per location for natural non-looping variation. Recorded by a location sound recordist, not captured on a camera mic.

## 13.4 The two vocal moments

The human voice enters **at most twice in any single visit**, and both times it is a single sustained note from the Bulgarian polyphonic tradition, unaccompanied, entering under the ambience and leaving before it is noticed.

1. **When the Name is first spoken** — Movement IV, at *"The name never changed."*
2. **At the Covenant** — as the inscription is cut.

That is the entire music budget of the product. **It works because it is rationed** (P5, token GOLD's logic applied to sound).

## 13.5 Mixing rules

- Ambience sits low — present, never foreground. If a visitor notices they are listening to sound design, the mix is wrong.
- **Cross-fades between locations follow the camera**, not the section boundary. You hear the valley before you see it.
- **Never duck for an interaction.** Nothing in this world goes quiet so a UI can speak.
- **Never a UI sound.** No clicks, no chimes, no whooshes, no confirmation tones. Not on the Covenant, not on a Light appearing, not on anything.
- Sight rising has **no sound of its own.** Memory is silent. This is a deliberate and important absence.
- Loudness is normalised conservatively; the product is quieter than everything else in the visitor's browser and that is correct.
- All audio pauses when the tab is not visible.

## 13.6 Delivery and accessibility

- Streamed in segments, never a monolithic file. Nothing preloads before the visitor accepts (Rule 96).
- Audio and video that must stay in sync are **one file** (Rule 97). *(Audit: the current intro is two elements that can desync permanently.)*
- Every piece of audio containing information has a transcript. Every video has captions.
- Recordings are credited, with location and date, on The Project.
- **Sound-off is a first-class experience** (P15). It is the default. It is complete. It is what most visitors will get, and it must be excellent on its own.

---
---

# BOOK IV — HOW IT GETS BUILT

---

# 14. IMPLEMENTATION STRATEGY

*The Chief Design Officer now speaks as CTO. No code. Structure only.*

## 14.1 The four non-negotiable delivery constraints

1. **Every Epic leaves the site deployable, coherent and better.** There is never a state where the world is half-rebuilt in public.
2. **Nothing requires a rewrite.** The existing Astro static build, the i18n deep-merge, the Cloudflare Function and the partner form are sound and are preserved. We change what is on the screen, not the machine underneath it — except where this document explicitly requires it.
3. **Every Story is independently implementable, independently reviewable, and independently revertable.** If a Story cannot be reverted alone, it is two Stories.
4. **No Story ships a placeholder.** A Story that cannot be completed with real content is not started. *(Rule 12.)*

## 14.2 The hierarchy

```
EPIC      a coherent transformation · 1–3 weeks · always deployable
 └ FEATURE   one capability within it · reviewable as a unit
    └ STORY     one visitor-visible change · independently shippable
       └ TASK      one engineering action · hours, not days
```

## 14.3 The Story contract

**Every Story, without exception, carries all nine fields.** A Story missing any field is not ready and is not started.

```
STORY   S-<epic>.<n> · <one sentence, from the visitor's point of view>
PRINCIPLE   which of P1–P15 this serves
TOKENS      which conceptual tokens it uses, and in which domain
RULES       which of the 100 Rules it must satisfy
AC          Given / When / Then — testable, no adjectives
DEPENDS ON  Stories that must land first
PRIORITY    P0 blocking · P1 major · P2 polish · P3 delight
RISK        what could go wrong, and the mitigation
IMPACT      which of the five emotions it moves, and how we would know
REVERT      how to remove it alone without breaking anything
```

## 14.4 Three worked examples

---

### EPIC E01 — THE TRUTH SWEEP
> *Nothing on the site may tell a visitor it is unfinished.*

**Priority** P0 · **Duration** 3–5 days · **Depends on** nothing · **Deployable** immediately

**FEATURE E01.F1 — Remove every unfinished signal**

> **STORY S-01.1** · *A visitor never sees an internal status label.*
> **Principle** P10 · **Tokens** — · **Rules** 12, 13
> **AC** — *Given* any public page in any language, *when* it renders, *then* no string derived from a content `status` field appears in the DOM; *and* the `draft` translation key is deleted from all locale files; *and* a build-time check fails the build if any `status` value is interpolated into a rendered string.
> **Depends on** — · **Priority** P0
> **Risk** Low. The eyebrow currently concatenates it; removal is a template change. Mitigation: snapshot test on the witness template.
> **Impact** Trust. Measured by: zero occurrences of the token in rendered HTML across all locales in CI.
> **Revert** Single template change.

> **STORY S-01.2** · *A visitor never sees a photo credit admitting the image is temporary.*
> **Principle** P10 · **Rules** 40
> **AC** — *Given* the Prohodna surface, *when* it renders, *then* no credit string containing "placeholder", "заместител", "README", "TBD" or "required" exists; *and* a CI check greps the built output for a banned-word list and fails on any match.
> **Priority** P0 · **Risk** Low · **Impact** Trust
> **Revert** String removal.

> **STORY S-01.3** · *A visitor never encounters a media element whose file does not exist.*
> **Principle** P1 · **Rules** 39, 93
> **AC** — *Given* a production build, *when* CI runs, *then* every `src`, `srcset`, `poster` and `href` referencing a local asset resolves to a file present in `dist/`; *and* the build fails otherwise. The three known 404 video sources are removed from the markup until real footage exists.
> **Priority** P0 · **Risk** Low · **Impact** Trust, First Impression
> **Revert** Restore markup.

> **STORY S-01.4** · *A visitor never sees a section whose entire content is an empty state.*
> **Principle** P10 · **Rules** 76
> **AC** — *Given* the witness surface, *then* the Media/"Gallery" section is absent; *and* the self-referential Nearby section is absent; *and* the duplicate Route Preview is absent.
> **Priority** P0 · **Risk** Low · **Impact** Trust, Engagement
> **Revert** Component re-inclusion.

**FEATURE E01.F2 — Remove the impossible ask**

> **STORY S-01.5** · *A visitor is never invited to do something they cannot do.*
> **Principle** P8 · **Rules** 4
> **AC** — *Given* the Descent, *then* no disabled store control renders; *and* no copy references a launch list, waitlist or notification that does not exist. Until E04 lands, the band is removed entirely rather than replaced.
> **Depends on** — · **Priority** P0 · **Risk** Temporarily zero conversion surface. Accepted: zero is what exists today, dressed as something. **Mitigation: E04 is the very next Epic.**
> **Impact** Trust
> **Revert** Component re-inclusion.

---

### EPIC E04 — THE COVENANT
> *The only conversion in the product, and it is an act of joining.*

**Priority** P0 · **Duration** 1 week · **Depends on** E01 · **Deployable** yes

**FEATURE E04.F1 — The inscription**

> **STORY S-04.1** · *A visitor can add their name to the people who carried it.*
> **Principle** P8, P9 · **Tokens** INSCRIPTION, SILENCE · **Rules** 3, 4, 71, 78, 91, 99
> **AC** — *Given* the end of the Descent, *when* the visitor reaches it, *then* a HELD surface presents the three lines and one name field, with the email field secondary and one plain sentence stating what happens to it; *and* the form works with JavaScript disabled; *and* errors are full sentences in the Voice; *and* consent is explicit, unticked, and separate from the transactional purpose; *and* success moves focus to the confirmation.
> **Depends on** S-01.5 · **Priority** P0
> **Risk** Medium — this is the product's only conversion. Mitigation: reuse the existing `partner-enquiry` Function, `_validation.mjs` and the `/sent` `/not-sent` pattern verbatim. **This is a copy, not a build.**
> **Impact** Conversion, Belonging. Known by: inscriptions per 100 completed Descents.
> **Revert** Route + component removal; the previous state was an empty band.

> **STORY S-04.2** · *A visitor receives their name, cut in Old Bulgarian uncial, to keep.*
> **Principle** P6, P9 · **Tokens** INSCRIPTION · **Rules** 15, 36
> **AC** — *Given* a successful inscription, *when* the response returns, *then* the visitor's name is rendered in the Inscription face as a downloadable image, generated client-side, with correct rendering for Cyrillic and Latin input; *and* names in scripts the face does not support fall back gracefully to the Voice face without error; *and* the artefact carries no logo, no URL and no watermark other than the Mark.
> **Depends on** S-04.1, E07 · **Priority** P1
> **Risk** Medium — script coverage. Mitigation: authored fallback, tested against a name corpus in all four shipped languages plus Greek, Chinese and Japanese input.
> **Impact** Belonging, Sharing. Known by: artefact download rate.
> **Revert** Feature-flag off; inscription still succeeds.

---

### EPIC E10 — GUARDIAN SIGHT ENGINE
> *The product's central verb, given once and kept forever.*

**Priority** P0 · **Duration** 2 weeks · **Depends on** E05 (plates), E06, E08 · **Deployable** yes

**FEATURE E10.F1 — Look through**

> **STORY S-10.1** · *A visitor presses and holds any photograph, and memory rises.*
> **Principle** P3 · **Tokens** MEMORY, LIGHT · **Rules** 46, 54, 67, 79, 85, 90
> **AC** — *Given* a photograph with a registered Remembered plate, *when* the visitor presses and holds (pointer, touch or Space/Enter on a focused control), *then* the Remembered layer rises over 180 ms and falls over 240 ms on release; *and* it never latches; *and* vertical page scroll is never blocked by the gesture; *and* keyboard and screen-reader users receive an equivalent control with a text description of the layer; *and* under reduced-motion the transition is a 120 ms cross-dissolve on tap-toggle.
> **Depends on** S-05.x (plate pair delivered), S-08.x
> **Priority** P0
> **Risk** High — this is the single most important interaction in the product and the current implementation traps scroll on mobile. Mitigation: gesture prototype validated on real devices before any styling work; explicit device matrix in the AC.
> **Impact** Possession. Known by: hold-rate on the Prohodna surface; target > 60 % of visitors who reach Movement III.
> **Revert** Flag off; the Now plate renders alone and the page remains complete.

---

## 14.5 Content production runs in parallel, and gates everything

Engineering can build the world. It cannot build the land.

| Track | Owner | Lead time | Gates |
|---|---|---|---|
| **Photography Tier 1** | Art Director + photographer | 6–10 weeks incl. permissions and weather contingency | E09, E12, E14 |
| **Guardian Sight plates** | Art Director + retoucher | +3 weeks after Tier 1 | E10 |
| **Witness writing** | Storytelling Director | 1 week per witness, per language | E18, E19 |
| **The Thread order** | Storytelling Director | once, then per addition | E19 |
| **Typeface** | Creative Director | 4–12 weeks (licence) or 4–6 months (commission) | E07, S-04.2 |
| **Field recordings** | Sound designer, with the photo shoot | same trips | E25 |
| **Translation to completeness** | Localisation | 3 weeks for 4 languages | E22 |

**The rule:** *no Epic that requires content begins before that content is delivered and approved.* Building a surface and filling it later is how placeholders enter production, and placeholders are the defect this entire project is recovering from.

---

# 15. DESIGN QA

## 15.1 The Five Questions — asked of every PR, before anything else

If any answer is wrong, the PR is rejected regardless of code quality.

1. **Which Principle does this serve?** If the author cannot name one of P1–P15, the change has no reason to exist.
2. **What did it remove?** A PR that only adds is suspect. *(P5.)*
3. **Would a visitor feel anything different?** If not, is it in the Utility layer? If it is neither, why is it being built?
4. **Does it contradict any of the 100 Rules?** Cite the check.
5. **Is any part of it a placeholder?** If yes, it does not merge. *(Rule 12.)*

## 15.2 Every page

- [ ] Exactly one `<h1>`, and it is the place name
- [ ] No `<h2>` string repeated
- [ ] At least one photograph of Bulgaria (legal pages excepted)
- [ ] Every photograph has a caption and authored `alt`
- [ ] Exactly one HELD moment, and nothing has been added to it
- [ ] Exactly one forward path, argued for in a sentence
- [ ] No card outside the Utility layer
- [ ] No icon that duplicates a word beside it
- [ ] No emoji, no geometric glyph set
- [ ] Practical information is behind exactly one deliberate action
- [ ] Canonical matches the served URL byte-for-byte
- [ ] Own social image; never a shared generic one
- [ ] Text nowhere smaller than 16 px equivalent
- [ ] Usable at 320 px width and 200 % text zoom
- [ ] The Foot is present; the Map Glyph is present; nothing else persistent

## 15.3 Every photograph

- [ ] Composed **through** something · dark near-edge · luminous depth
- [ ] Shot inside a permitted light window (or is a documented interior exception)
- [ ] Person present, small, unposed, not looking at camera (or the place forbids it)
- [ ] Horizon level, verticals vertical, horizon not centred
- [ ] Authored quiet region present, and the type is in it
- [ ] Grade matches the reference; no orange-teal, no HDR, no lifted matte, no sky replacement
- [ ] Delivered in both required aspect crops, **framed separately, never centre-cropped**
- [ ] Caption names the place, what is happening, and one thing you didn't know
- [ ] Any person is named, with permission
- [ ] Within the size budget, explicit dimensions, correct loading priority
- [ ] **Identifiable as ours at thumbnail size with the Mark removed**

## 15.4 Every animation

- [ ] Is it **weather** or **consequence**? If neither — delete
- [ ] Nothing time-gated; nothing on an interval
- [ ] Entrance faster than exit
- [ ] Nothing moves while a paragraph is being read
- [ ] Reduced-motion alternate is **authored and beautiful**, not merely disabled
- [ ] Reversible, interruptible, and never blocks input
- [ ] Perceived transition ≤ 400 ms
- [ ] No layout shift caused by it

## 15.5 Every interaction

- [ ] Everything that looks interactive is; nothing else does
- [ ] Visible focus indicator meeting contrast, on every control
- [ ] Targets ≥ 24 px; map Lights ≥ 44 px
- [ ] Keyboard: Enter *and* Space where a button; a link where it navigates
- [ ] Overlays: focus in, trapped, background inert, scroll locked, focus restored
- [ ] `touch-action` never blocks the page's primary scroll axis
- [ ] Every `aria-label` verified against its element
- [ ] Nothing meaningful is `aria-hidden`
- [ ] Colour is never the only carrier of meaning
- [ ] No text colour derived from `opacity`

## 15.6 Every string

- [ ] Written by a human in that language; no English fallback under a non-English `lang`
- [ ] Not on the banned-word list
- [ ] Not repeated elsewhere on the page
- [ ] In the correct voice for its layer (Voice / Utility / Inscription)
- [ ] Does not tell the visitor what to feel
- [ ] Errors are full sentences saying what to do

## 15.7 Every release

- [ ] Asset budgets met (hero ≤ 400 KB · image ≤ 200 KB · JS ≤ 40 KB · initial ≤ 1.2 MB)
- [ ] No dead code, unused tokens, or unused strings shipped
- [ ] All local asset references resolve in `dist/`
- [ ] `hreflang` covers only complete languages and reciprocates
- [ ] Sealed domains absent from the sitemap and non-indexable
- [ ] No new URL without a redirect for its predecessor
- [ ] The four journeys walked end-to-end by a human: **standard · reduced-motion · sound-off · keyboard + screen reader**
- [ ] The returning-visitor path verified: the opening does not replay; Lights persist

## 15.8 The final test — the Room Test

Before any Epic is called done, put the surface on a large screen, stand back three metres, and ask:

> **Does this look like it could be about any other country?**

If yes, it is not finished.

**Judged by three people, one of whom has not worked on the surface**, with a written verdict of one paragraph. Judgement is the correct instrument here and is not a weakness. *Unaccountable* judgement is. A single unnamed reviewer blocking an Epic is a bottleneck wearing a standard's clothes.

---

# 16. CURSOR EXECUTION MODE

**The most important chapter for day-to-day survival of this document.**

These rules bind every AI agent, every Cursor session, every Claude session, and every human contractor working in this repository. They are written to be unambiguous under autonomous execution.

> **This chapter is a generated view of Chapter 8**, addressed to agents. It is never authored separately. Where it disagrees with Chapter 8, **Chapter 8 governs** and the disagreement is repaired at source.

**Two obligations before any rule below applies:**

- **Declare the layer.** Every task states whether it touches the **Told Layer** or the **Useful Layer** (§3.0). Roughly fifteen rules below resolve differently depending on the answer. **An agent that cannot name the layer must stop and ask** — not guess.
- **Cite the rule.** Every PR description names the Epic, the Story, the Principle, the layer, and the rule IDs in scope.

## Scope and authority (1–12)

1. **Read this Bible before writing any code in this repository.** Not the summary. The document.
2. **Work only inside the current Epic.** Never touch a surface belonging to a different Epic, even to improve it.
3. **Never redesign anything you were not asked to redesign.**
4. If a task requires violating this Bible, **stop and report.** Never proceed with a compromise.
5. Never amend this Bible. Never add to it. Never "interpret" it into a new rule.
6. Where this document is silent, **ask.** Silence is not permission.
7. Where this document is ambiguous, resolve toward subtraction, toward the land, and toward the visitor's feeling.
8. The Audit's recommendations carry **no authority.** Its findings are evidence only.
9. Never restore a component listed in §9 as deleted.
10. Never introduce a component that has not passed the five admission criteria in §9, recorded as a Tier-1 decision. Never assume the inventory is the limit; never assume the door is optional.
11. Never rename a canon term from §5.1. Synonyms in code, copy or commits are defects.
12. Every PR description names the Epic, the Story, the Principle, **the layer**, and what was removed.

## Design system integrity (13–28)

13. **Never invent a colour.** Every colour comes from §3.3 and is traceable to a photograph.
14. **Never use gold** except at the single sanctioned Master Key appearance.
15. **Never use Rila Copper** outside a Remembered state.
16. **Never introduce a new spacing value.** Use HELD / WIDE / CLOSE / SET.
17. **Never introduce a new typeface.** Three faces exist. Three jobs exist.
18. **Never use the Inscription face for body text, navigation, buttons or labels.**
19. **Never use the Utility face inside the emotional sequence.**
20. Never introduce a new border-radius, shadow, or elevation value. There is no elevation system.
21. **Never add a drop shadow.** Separation is achieved with darkness, distance and edge.
22. Never add a gradient that is not inside a photograph.
23. Never add a backdrop blur to anything that is not behind glass in the fiction.
24. Never add a text-shadow. Fix the plate.
25. Never centre text outside a HELD moment.
26. Never build a two-column body of prose.
27. Never exceed the reading measure, at any viewport.
28. Never set any text below 16 px equivalent, anywhere, for any reason.

## Content and copy (29–40)

29. **Never hardcode a user-visible string in a component.** All copy comes from the locale files.
30. **Never write copy in a language you were not given.** Never machine-translate. Never guess.
31. Never add a locale key without adding it to the base language first.
32. Never ship a locale that is less than 100 % complete.
33. Never use a word from the banned list (Rule 4).
34. Never write copy that instructs the visitor how to feel.
35. Never repeat a sentence on a page.
36. Never write an error message shorter than a sentence.
37. Never label a Seal with a date, a countdown, or "coming soon."
38. Never write a Thread link as a label. It is always a sentence of reasoning.
39. Never write `alt` text describing an image that is not there.
40. Never leave a comment in a rendered surface. Comments are for code.

## Media (41–52)

41. **Never reference an asset that does not exist in the repository.** CI enforces this; do not disable the check.
42. Never ship an image without explicit dimensions.
43. Never ship an image over budget.
44. Never centre-crop a hero from one aspect to another. Use the delivered crop.
45. Never place type over a photograph without the authored quiet region.
46. Never add a scrim, gradient overlay or vignette to make type legible. Report the plate as unusable.
47. **Never use stock, AI-generated, or illustrated imagery.**
48. Never add a Guardian Sight interaction without a registered plate pair.
49. Never ship an unregistered plate pair. If the camera moved, reject it.
50. Never combine audio and video as two elements where they must stay in sync.
51. Never autoplay media with sound.
52. Never preload heavy media before the visitor has acted.

## Motion (53–64)

53. **Never add an animation that is neither weather nor consequence.**
54. **Never add `animation-delay` to anything containing content.**
55. Never add a scroll-triggered fade-up ladder.
56. Never stagger reveals across a group.
57. Never add an ambient particle system of any kind.
58. Never add a custom cursor.
59. Never add parallax to an element without physical depth.
60. Never add motion without an authored reduced-motion alternate in the same PR.
61. Never make a transition longer than 400 ms perceived.
62. Never animate on `setInterval` or `setTimeout` chains.
63. Never replay an opening sequence for a returning visitor.
64. **Never change animation behaviour globally.** Motion changes are per-Story, per-surface.

## Interaction and accessibility (65–78)

65. **Never remove a focus indicator.** Never `outline: none` without a superior visible replacement in the same rule.
66. Never derive text colour from `opacity`. Pre-blend and commit the value.
67. Never create a target below 24 px, or a map Light below 44 px.
68. Never use `role="button"` on something that navigates. Use a link.
69. Never handle Enter without handling Space on a button.
70. Never block the page's primary scroll axis with `touch-action`.
71. Never open an overlay without focus-in, focus-trap, scroll lock, background inert and focus restore.
72. Never `aria-hidden` content that carries meaning.
73. Never copy an `aria-label` from another element without verifying it.
74. Never rely on hover to expose information. Touch and keyboard must reach it.
75. **Never reduce accessibility to achieve a visual effect.** The effect is wrong.
76. Never add a `tabindex` above 0.
77. Never navigate by script where a link would work.
78. Never ship an interaction without walking it by keyboard and with a screen reader.

## Architecture and hygiene (79–92)

79. **Never refactor a file unrelated to the current Story.**
80. Never rename a route without a permanent redirect in the same PR.
81. **Never change `placeIdentity` IDs or `unlockingbulgaria://` URIs.** They are the app contract.
82. *(Moved to `CONTRIBUTING.md` at v1.1 — dependency policy. Correct, and not a design rule. Every non-design rule in this document dilutes the authority of the design rules.)*
83. Never duplicate a component. Extend or extract; never fork.
84. Never leave dead code, unused tokens, unused locale keys or commented-out blocks.
85. **Never leave a TODO, FIXME, HACK or XXX in the repository.** If it isn't done, the Story isn't done.
86. Never implement a placeholder of any kind, visual or in data.
87. Never introduce a second way of doing something that already has a way.
88. Never add analytics, tracking, cookies or third-party scripts. The privacy promise is binding.
89. Never add a third-party font host, CDN, embed or widget.
90. *(Moved to `CONTRIBUTING.md` — CI policy.)*
91. *(Moved to `CONTRIBUTING.md` — commit hygiene.)*
92. Never merge without the Design QA checklist for the touched surfaces.

## Judgement (93–100)

93. **When in doubt, remove.**
94. When two solutions are equal, choose the quieter one.
95. When a feature would make the world more complete, ask whether the horizon survives it.
96. When something is technically correct and emotionally wrong, it is wrong.
97. When a convention from another site suggests itself, that is a reason for suspicion, not for adoption.
98. When you have finished a Story, ask what you could now delete.
99. **Never optimise a detail before the experience it sits inside is right.**
100. **Never ship anything that contradicts this document. If it must be contradicted, amend the document first — with the owner's written decision, recorded in AMENDMENTS.**

---

# 17. ROADMAP

**Thirty Epics. Ordered by return. Each 1–3 weeks. Each leaves the site deployable and better.**

Three tracks run in parallel: **BUILD** (engineering), **LAND** (photography, sound, writing), and **HOUSE** (correctness, hygiene). LAND has the longest lead time and starts on day one.

---

## STAGE ONE — TRUTH (weeks 1–6)
*Goal: stop the site from telling visitors it is unfinished. Highest return per hour available anywhere in this document.*

| # | Epic | Track | Wks | Why it comes here |
|---|---|---|---|---|
| **E01** | **The Truth Sweep** — every draft badge, placeholder credit, "coming soon," empty section, 404 asset and impossible ask removed | BUILD | 1 | The cheapest, largest movement in Trust available. Nothing else competes. |
| **E02** | **Photography Commission — Tier 1** — brief, contract, permissions, shoot, grade, deliver | LAND | 6–10 | Longest lead time in the project. **Starts on day one and gates almost everything.** |
| **E03** | **Correctness & Access Remediation** — every Audit defect: contrast, focus, targets, keyboard, overlays, labels, scroll trap | HOUSE | 1.5 | Cheap, invisible to atmosphere, unblocks the a11y contract in P15. |
| **E04** | **The Covenant** — the inscription replaces the disabled band | BUILD | 1 | Restores the product's only conversion, in the correct emotional register. |
| **E05** | **Asset & Performance Foundation** — logo, image pipeline, budgets, CI asset-existence check, media transcoding | HOUSE | 1 | Enforces Rules 39/93/95 mechanically so they cannot regress. |
| **E06** | **The Deletion Sweep** — the 26 components in §9 removed; dead CSS and dead locale keys deleted | BUILD | 1 | The site becomes quieter and faster before it becomes beautiful. Makes every later Epic cheaper. |

**Deployable state after Stage One:** an honest, fast, quiet, accessible site with a working conversion and no lies on it. Not yet beautiful. **No longer embarrassing.**

---

## STAGE TWO — THE LAND (weeks 6–14)
*Goal: the country appears, and the visitor is handed the product's central verb.*

| # | Epic | Track | Wks | Why here |
|---|---|---|---|---|
| **E07** | **Design Token Foundation** — the palette from the plates, the four airs, the three light states | BUILD | 1 | Everything visual downstream depends on it. Cannot start before Tier 1 photography. |
| **E08** | **The Typography System** — Inscription face acquired; three faces, three jobs | BUILD/LAND | 1.5 | The single most ownable differentiator (P6). Licence track starts in Stage One. |
| **E09** | **The Threshold Component** — the one choice form, with the image pipeline behind it | BUILD | 1 | Replaces cards everywhere. Unblocks Evidence, Domains, the Thread. |
| **E10** | **Movement III — The Eyes** — Prohodna as the opening frame; the first sentence; HELD | BUILD | 1.5 | **The new first impression.** Ships before the Fall, so the site is never dependent on the riskiest idea. |
| **E11** | **Guardian Sight Engine** — press-and-hold, plate pairs, keyboard equivalent, reduced-motion alternate | BUILD | 2 | The product's central verb. The highest-value interaction in the project. |
| **E12** | **Movement IV — The Question** — 1345, the argument, the silence | BUILD | 1 | Ten seconds; the highest emotional density on the site. |
| **E13** | **Photography Tier 2** — the four Domain frames | LAND | 3 | Gates E14. |

**Deployable state:** a visitor arrives inside a cave in Bulgaria, looks through the stone with their own hand, and is asked a question they cannot drop. **The product now has a reason to exist.**

---

## STAGE THREE — THE WORLD (weeks 14–24)
*Goal: exploration begins and never ends.*

| # | Epic | Track | Wks | Why here |
|---|---|---|---|---|
| **E14** | **Movement V — The Evidence** — four Domains, one open, three Sealed; the Seal component | BUILD | 1.5 | Turns the content gap into the horizon (P10). |
| **E15** | **The 681 Crossing** — light and sound shift across the epoch boundary | BUILD | 1 | Structural storytelling nobody else in the category has. |
| **E16** | **IA & URL Migration** — flat slugs, permanent redirects, canonical/hreflang truth, sitemap discipline | HOUSE | 1.5 | Must land before the Thread multiplies URLs. |
| **E17** | **The Memory Map v1** — the hand-drawn chart, Lights as real links, Seals, no directory | BUILD/LAND | 2.5 | The centrepiece invention. Chart illustration is a LAND deliverable. |
| **E18** | **The Map as Navigation** — the Mark and the Map Glyph; the nav bar, hamburger and footer farm deleted | BUILD | 1 | The fastest single change to *what kind of thing this feels like*. |
| **E19** | **Progression & Memory** — Lights persist; the returning visitor enters at Movement III | BUILD | 1 | Delivers P13 and fixes the worst-neglected moment in web design. |
| **E20** | **The Witness Template** — the five beats; Prohodna rebuilt as the reference implementation | BUILD | 1.5 | The atomic content unit of the whole product. |
| **E21** | **The Practical Panel** — everything true and useful, behind one deliberate action, with a real map | BUILD | 1 | Serves the actual business goal — people standing in the place (P12). |
| **E22** | **The Thread** — the authored chain; one next witness, always | BUILD/LAND | 1.5 | Closes the loop. Requires 3–4 witnesses written and shot. |

**Deployable state:** a world with a loop, a map that remembers, and a horizon that never closes. **This is the version that could be submitted.**

---

## STAGE FOUR — THE HOUSE IN ORDER (weeks 24–30)
*Goal: everything the world owes its visitors, done properly.*

| # | Epic | Track | Wks | Why here |
|---|---|---|---|---|
| **E23** | **Language Contraction** — four complete locales; ten removed until whole | HOUSE/LAND | 2 | P14. A complete product in four beats a broken one in fourteen. |
| **E24** | **The Project** — about, faces, sources, six questions, the stated positions | BUILD/LAND | 1 | Trust lives here, out of the emotional sequence. |
| **E25** | **Partners, extracted** — its own page, its own sober register, the existing form preserved plus consent | BUILD | 1 | Ends the genre collision; serves both audiences properly. |
| **E26** | **The Unlit & the Legal surfaces** — the 404 inside the world; legal restyled, the privacy promise protected | BUILD | 0.5 | Small, and completes the world's coverage. |
| **E27** | **SEO & Social Surface** — per-witness images and schema, crawl surface as an authored alternate | HOUSE | 1 | Now worth doing, because there is finally something worth finding. |

---

## STAGE FIVE — THE AWARD (weeks 30–40)
*Goal: something a jury has not seen. Every Epic here is optional and none of them is a foundation.*

| # | Epic | Track | Wks | Note |
|---|---|---|---|---|
| **E28** | **The Sound System** — field recordings, the two vocal moments, the single offer and control | BUILD/LAND | 2 | Recorded on the Tier 1 and Tier 2 trips; assembled now. |
| **E29** | **Movements I–II — The Fall** | BUILD/LAND | 2.5 | **Gated.** Ships only if it is skippable, scrubbable, reversible, usable at 3G and under 20 s. **If it fails the gate, it is cut and the site opens inside Prohodna** — which is the version that already shipped in E10 and is possibly the better product. |
| **E30** | **Authored Alternates & the Impossible Thing** — reduced-motion and sound-off experiences authored as first-class; and the one moment that makes people send the link | BUILD | 2 | Candidate for the impossible thing: at the Covenant, the two shafts of light in Prohodna resolve into the shape they make from above — the reason the openings are called the Eyes of God — and the visitor understands the site has been looking back the entire time. |

---

## The gates

Three hard gates. Passing them is a project-owner decision, not a team decision.

**GATE 1 — after E02.** Is the Tier 1 photography identifiable as ours at thumbnail size? **If not, reshoot before building anything on top of it.** No amount of engineering recovers from generic images.

**GATE 2 — after E22.** Does a stranger reach the Covenant without being told to? **If not, the Thread's argument is wrong, not its implementation.** Fix the writing, not the code.

**GATE 3 — before E29.** Does the Fall pass all five conditions? **If not, cut it.** The site opens inside Prohodna and loses nothing that matters.

## What is deliberately not on this roadmap

A place index · a search · filters · a blog · a newsletter beyond the Covenant · social embeds · a partner portal · a booking integration · user accounts on the web · reviews · a share widget · dark/light theming · a design-system package · a CMS migration · analytics.

**Each of these would make the product more complete and less alive.** They are recorded here so that a future session does not propose them as new ideas (Cursor Rule 95).

---
---

# BOOK V — EVOLUTION & GOVERNANCE

---

# 18. HOW THIS DOCUMENT CHANGES

*Tier 0. Without this book, nothing else in the Bible can be maintained, and a document that cannot be maintained is a document that gets ignored.*

## 18.1 Why this book exists

Every governing document dies the same way. Not by being wrong — by becoming impossible to change, so that the work happens beside it instead of inside it, and within two years the real system is the shadow one. **This book is the machinery that prevents that.**

## 18.2 Authority

| Tier | Governs | Amended by | Recorded as |
|---|---|---|---|
| **0 · Charter** | Ch. 1–2, §1.4, the Deleted Register, articles 101–107, Book VII's principle, Book IX's articles, Book X's articles, Book XI, this book | **Owner + two named stewards, unanimous.** Dissent is published, not erased. | Amendment |
| **1 · Standards** | Ch. 3–7, 9–13, Books VI, VIII, XII | Design lead + one reviewer | **ADR** |
| **2 · Specs** | Ch. 8, 14–17, all values, budgets, checklists, agent rules | Any lead, normal review | Changelog |

**Succession.** Two stewards are named alongside the owner and recorded in AMENDMENTS. If the owner is unreachable for ninety days, the stewards may act at Tier 0 by unanimity; every such act is reviewed on the owner's return and may be reversed. **A constitution with one amending authority freezes permanently the day that person is unavailable — and the team does not stop shipping, it stops consulting.**

## 18.3 Architecture Decision Records

Every non-trivial decision gets a numbered, dated ADR:

```
ADR-014 · Why the map has three states rather than two
  DATE · STATUS (proposed | accepted | superseded by ADR-nnn)
  CONTEXT     what forced the decision
  OPTIONS     every option genuinely considered
  DECISION    what we chose
  CONSEQUENCES what this makes easy, and what it makes hard
  REJECTED    why each other option lost — the most important field
```

**The AMENDMENTS table records what changed. The ADR records why the alternatives lost.** In three years, the second is the only part anyone needs, because the first is visible in the diff and the second exists nowhere else.

## 18.4 The rule lifecycle

```
proposed → active → under review → deprecated (sunset date + replacement named) → retired (archived, never deleted)
```

Nothing is ever deleted from the record. A retired rule remains readable with its rationale, its evidence, and the reason it stopped applying, so that nobody re-derives it from scratch or re-litigates a settled argument.

## 18.5 Exceptions

> An exception is requested in writing. It names the provision, states the reason and the cost of compliance, proposes a **sunset date no more than six months out**, and is approved at the tier of the provision. **All live exceptions sit in one open register.**
>
> **An exception renewed twice becomes an amendment proposal**, automatically. A rule that keeps needing exceptions is a wrong rule, and the register is how we find out before the rule quietly stops being obeyed.

**A constitution with no legal way to deviate guarantees illegal deviation.** This is the single most likely proximate cause of this document being abandoned, and it is why this section exists.

## 18.6 The annual constitutional review

Once a year, in writing, published internally:

1. **Which rules were violated, how often, and why.** A high-violation rule is *examined*, not re-enforced.
2. **Which rules were never once invoked.** Candidates for retirement. *A rule never invoked in two years is a candidate for deletion, not a badge of honour.*
3. **Which are now checked mechanically** and can be demoted to Tier 2.
4. **Which exceptions became permanent** in practice.
5. **The Drift Dashboard** (Book XII), in full, with the previous year beside it.
6. **Does the Charter still describe the product?** If it does not, one of the two is wrong, and the answer is not automatically the Charter.

## 18.7 Research obligation

**No Gate passes on internal opinion alone.** Gate 2 in particular — *does a stranger reach the Covenant without being told to* — is a question about strangers and cannot be answered by the people who built it.

Minimum standard for a Gate: **five people who have never seen the product**, recruited outside the team and outside Bulgaria for at least two of them, observed without instruction, with the session notes attached to the Gate decision. This is not a research programme. It is the floor beneath which a Gate decision is fiction.

## 18.8 Medium volumes

**The Charter is medium-independent.** Each medium — web, app, spatial, print, exhibition — carries its own Standards volume that must satisfy the Charter and may not contradict it. Without this, the first serious app or exhibition work forks the philosophy, and **a forked philosophy is a dead one.**

---
---

# BOOK VI — EDITORIAL

---

# 19. THE WRITTEN WORD

*Tier 1. The Bible defined the Voice typographically and tonally and never editorially. This product **is** its sentences; a design system without a content standard produces beautiful surfaces containing prose nobody governs.*

## 19.1 The register

The Voice sits at one point on a line, and both ends of that line are failures:

```
ARCHAIC ◄─────────────────── THE VOICE ───────────────────► BROCHURE
"Lo, the ancient stones"                        "Discover breathtaking Bulgaria"
```

**The Voice reads like a plain translation of something older, made by someone who believed it.** Short sentences. Concrete nouns. Almost no adjectives. The rhythm of speech, not of copy.

| Failure | Sounds like | Why it fails |
|---|---|---|
| **Archaic** | *"Herein the land doth remember"* | Costume. Nobody believes a costume. |
| **Brochure** | *"Discover the breathtaking beauty of…"* | Sells. The world does not sell (Law 8). |
| **Explanatory** | *"This is where the app's AR feature activates"* | Breaks the world to describe the product. |
| **Sentimental** | *"You'll feel the magic of…"* | Tells the visitor what to feel (Rule 5). |
| **Academic** | *"The site exhibits Late Antique stratigraphy"* | Correct, and nobody stands anywhere because of it. |

## 19.2 Ten laws of the sentence

1. **Concrete beats abstract.** *Two holes in a limestone ceiling* beats *a remarkable geological formation.*
2. **A number is a fact, not a flourish.** Use it once and let it land: *35 metres up.*
3. **Never two adjectives.** Usually never one.
4. **No sentence explains the previous sentence.** If it needs explaining, rewrite it.
5. **The strongest word goes last.**
6. **Never name the emotion.** Not *haunting*, not *breathtaking*, not *unforgettable*.
7. **Never address the visitor as "you" more than once per surface.** More than that and it becomes advertising.
8. **A paragraph is at most four sentences** anywhere in the Told Layer.
9. **Read it aloud.** If you would not say it to a friend standing in the place, it is wrong.
10. **Cut the first sentence.** It is almost always throat-clearing.

## 19.3 Captions

Promoted here from Ch. 12, because a caption is writing before it is photography.

**Place · what is happening · one fact you did not know.** Never *"beautiful view of Bulgaria."*

> *Prohodna, above Karlukovo. The two openings in the ceiling are 35 metres up and have been called the Eyes of God for as long as anyone has written it down. Photographed 06:12, April.*

Where a person is in frame, they are **named, with permission, always.**

## 19.4 The Thread sentence

The single hardest sentence in the product, and the one that carries the whole exploration loop.

**A Thread sentence is a reason, not a label.** It states a fact from the witness just read that makes the next witness inevitable.

- **Right:** *"The alphabet carved here was hidden two hundred kilometres north, in a room cut into a cliff."*
- **Wrong:** *"Discover more places nearby."* — a label.
- **Wrong:** *"You might also like Ivanovo."* — a recommendation engine wearing a coat.
- **Wrong:** *"Next: Ivanovo Rock Monastery."* — true, and it argues nothing.

**Test:** remove the next witness's name from the sentence. If the sentence still makes you want to go there, it is right.

## 19.5 Naming

- **A witness is named as the place is named locally**, in the local script, with the visitor's script beside it where they differ. We do not rename places for search volume.
- **A Domain's name is canon** (Book XI) and does not vary by language beyond honest translation.
- **Never invent a name for a real place.** Never use a marketing name. Never use a name a local would not recognise.
- **Slugs are the local name, transliterated, short.** `/bg/prohodna/` — not `/bg/prohodna-cave-eyes-of-god/`.

## 19.6 Translation is not localisation

**The narrative is not culturally neutral, and pretending otherwise is both an editorial failure and a diplomatic one.**

*"Where the alphabet was kept alive when speaking it was forbidden"* reads one way to a German visitor and another to a Turkish one. That is not a translation problem. It is an authorship problem, and it is solved by authorship.

- Each language has a **named editor**, not a translator, who is a native speaker and who is empowered to change emphasis, order and framing — never facts.
- **Facts are invariant across languages. Framing is not.** A sentence that is true and gracious in Bulgarian and true and accusatory in Turkish is rewritten in Turkish, not softened everywhere.
- **No machine translation ships.** AI may draft; a named human owns every published sentence (Book X).
- Where a claim is contested (Book VII), the contested-claims register governs **in every language simultaneously** — we do not tell different stories in different markets. **That is the one thing that would end this project fastest.**

## 19.7 The banned list

Maintained as data in Tier 2 and enforced in CI. At ratification: *platform · solution · seamless · immersive · unlock your journey · discover more · learn more · sign up now · don't miss out · breathtaking · hidden gem · must-see · bucket list · authentic experience · off the beaten path.*

---
---

# BOOK VII — HISTORICAL INTEGRITY

---

# 20. CLAIMS ABOUT THE PAST

*The principle is Tier 0. The practice is Tier 1. **This is the highest-severity area in the entire document**, and it is not a design risk — it is the one that could end the project rather than degrade it.*

## 20.1 The problem, stated plainly

This product makes claims about a nation's past, spanning the Ottoman period, the Second Bulgarian Empire, Christianisation, and the origin of an alphabet whose authorship is contested between three modern states. The framing of 1396–1878, the treatment of Ottoman-era heritage, the place of Turkish, Roma, Jewish and Armenian communities in the national story, and anything touching Macedonia are **live political questions in the region today.**

**A single ill-judged sentence, in one language, on one witness page, is a reputational and diplomatic risk to a project courting municipalities and cultural institutions.** Chapter 12 governs the aperture of a lens in more detail than v1.0 governed a claim about the past. This book closes that gap.

## 20.2 The Tier-0 principle

> **Nothing is asserted about the past without a citable source and a named reviewer.**
> A tourism claim and a historical claim are different objects and are never allowed to wear each other's clothes.

## 20.3 The source standard

| Claim type | Standard |
|---|---|
| **Established fact** — a date, a construction, a documented event | One academic or primary source, cited on the witness page. |
| **Scholarly consensus** — an interpretation most historians share | Two independent sources; the page says *"most historians hold that…"*, not *"it is known that…"* |
| **Contested** | Governed by §20.5. Either stated as contested, with the positions named — or not stated at all. |
| **Legend, folklore, oral tradition** | Explicitly framed as such. *"The story told locally is…"* **Never presented as history, and never quietly upgraded to history by a later rewrite.** |
| **Our own narrative claim** — e.g. *the Name survived because people carried it* | Marked as the project's thesis, not as a finding. **We are allowed a thesis. We are not allowed to disguise it as a fact.** |

Sources are visible on the witness page — in the Useful Layer, behind the same deliberate action as the practical information — never hidden, never only in a footer.

## 20.4 The historian

**A named historian per Domain, engaged, credited publicly on The Project, who signs off before any witness in that Domain publishes.** Their credit is also a trust asset: a heritage product whose sources are named is a different object from one whose sources are not.

**No witness beyond Prohodna publishes before a historian is engaged.** This is a gate, not an aspiration.

## 20.5 The contested-claims register

A maintained, dated list of subjects on which this product will and will not make claims, with reasoning. Non-exhaustive, at ratification:

| Subject | Position |
|---|---|
| Authorship of Glagolitic and Cyrillic | State what is documented; name the scholarly disagreement; **claim nothing on behalf of any modern state.** |
| The framing of 1396–1878 | Describe what happened to specific places and people. **No collective moral language about any nation, then or now.** |
| Ottoman-era heritage | Treated as Bulgarian heritage, because it happened here and it is still standing. Never as an interruption. |
| Macedonia | **No claims. In any language. Under any framing.** |
| Minority communities — Turkish, Roma, Jewish, Armenian, Pomak | Present where the record shows them present. **Absence from the story is itself a claim**, and it is one we do not make. |
| The Thracian–Slav–Bulgar synthesis | Present as synthesis. Never as descent, never as purity. |
| The communist period | Out of scope for witnesses; if it touches a place, describe the place. |

## 20.6 The nationalism boundary

**Stated in writing so that a junior writer, a contractor, or an AI generating copy in 2029 cannot cross it by accident.**

The product's thesis is national continuity. That is a legitimate, moving, and true story, and it sits one careless sentence from ethnonationalism. The line is here:

> **The Name survived because people carried it — and the people who carried it were not all the same people.**
>
> **Pride in persistence. Never pride in purity.**

Operationally, that means: we celebrate *endurance, language, craft, hospitality and refusal.* We never write a sentence that implies a bloodline, an essential character, a rightful territory, or a people who do not belong. **If a sentence would be quoted approvingly by an ethnonationalist, it is rewritten, regardless of whether it is technically true.**

## 20.7 Corrections

- An error is corrected **within 72 hours** of being confirmed.
- The correction is **acknowledged on the page**, dated, in the Voice — not silently edited.
- Errors and their corrections are logged permanently.
- **Heritage products that quietly edit history lose the exact trust the whole project runs on.** Visible correction is a trust asset; silent correction is the beginning of the end.

## 20.8 Escalation

Any claim that a team member is unsure about **stops publication and goes to the historian.** There is no deadline in this project worth a wrong sentence about someone's past.

---
---

# BOOK VIII — CONTENT OPERATIONS

---

# 21. HOW A WITNESS IS MADE

*Tier 1. Engineering can build the world. It cannot build the land.*

## 21.1 The lifecycle

```
proposed → researched → historically reviewed → written → photographed → recorded
   → translated → QA'd → published → reviewed annually → corrected or retired
```

| Gate | Signed by | Cannot pass without |
|---|---|---|
| Researched | Storytelling Director | sources at the Book VII standard |
| Historically reviewed | **the Domain's historian** | a signature, not an email |
| Written | Storytelling Director + language editor | the Thread sentence, the date, the caption |
| Photographed | Art Director | 3 frames minimum, Threshold Rule, quiet region maps |
| Recorded | Sound designer | location ambience from the same trip |
| Translated | each language's named editor | Book VI §19.6 |
| Published | Design lead | the Design QA checklist for a witness |

**No stage may be skipped and no stage may be back-filled.** Building a surface and filling it later is precisely how placeholders entered production, and placeholders are the defect this entire project is recovering from.

## 21.2 The minimum viable witness

Three commissioned frames (threshold hero · detail · human) · one Guardian Sight plate pair · one date · one testimony · one Thread sentence · one practical panel · sources · one historian's signature · complete in every shipped language.

**A witness that lacks any of these is not published. There is no reduced version.**

## 21.3 The economics — stated, because a standard without a budget is abandoned silently

At the Chapter 12 standard, a witness costs approximately:

| Line | Estimate |
|---|---|
| Photography (3 frames delivered, incl. travel, permissions, weather contingency, amortised) | €900 – €1,800 |
| Guardian Sight plate pair (second exposure + retouch) | €350 – €700 |
| Research, writing, historian review | €600 – €1,200 |
| Sound (amortised across a trip) | €150 – €300 |
| Translation, 4 languages | €300 – €600 |
| **Per witness, all in** | **≈ €2,300 – €4,600** |

**Therefore: 20 witnesses ≈ €46k–92k. 100 witnesses ≈ €230k–460k. 1,000 witnesses ≈ €2.3m–4.6m.**

**These numbers are the honest consequence of the standards in this document.** They are stated so the argument happens now, in the open, rather than at witness #40 when someone quietly proposes stock photography for the next ten.

**The review trigger:** if the per-witness cost cannot be met, the response is **fewer witnesses at full standard** — never more witnesses at reduced standard. Scarcity is already the house style (P10). **A smaller world, fully made, is the product. A larger world, half made, is the thing we already tried.**

## 21.4 When a place changes

The Bible had no concept of content that must be corrected or withdrawn. At scale this happens monthly.

- **Closed, unsafe, or access withdrawn** → the practical panel is updated within 48 hours; the testimony stays. What a place saw does not stop being true because you cannot currently stand there.
- **Physically damaged or destroyed** → the witness remains, the photography remains, and one line in the Voice states what happened and when. **This world is about things that survived; it does not pretend nothing is lost.**
- **A partner relationship ends** → the witness is unaffected. Content is never withdrawn because a commercial relationship ended (article 101).
- **Retired** → archived, never deleted; the URL 301s to the nearest true thing; the Thread is re-authored around the gap.

---
---

# BOOK IX — PARTNERSHIP, COMMERCE & MEMBERSHIP

---

# 22. THE FENCE AROUND THE MONEY

*Articles are Tier 0. Practice is Tier 1. **This book is not a concession to the business. It is the fence** — commerce arrives whether or not the constitution has vocabulary for it, and the only question is whether it arrives governed.*

## 22.1 Where money lives

**Everything commercial lives in the Useful Layer** (§3.0), governed by clarity. **A price never appears in the Told Layer.** One sentence resolves the entire tension, and it costs the philosophy nothing.

## 22.2 The Tier-0 articles

Restated from Ch. 8 because this is where they will be looked for:

- **101 · Sponsored parity.** Identical standards, plain disclosure, and **no partner ever holds approval over content.** No exceptions, at any price, from any institution.
- **102 · The horizon is never sold.** A Seal opens when its content is ready.
- **103 · Payment never gates a story.** A visitor may always read what a place saw.
- **107 · A contribution never appears as attributed user content.**

## 22.3 The commerce boundary

> **The web tells. The app does.**

Free, forever, on the web: what a place is, what it saw, its Guardian Sight layer, how to stand there. Paid, in the app: what happens *at* the place — the quest, the artefacts, the relics, the seals, the Keeper's progression.

**Stated once, at the Covenant, as a promise.** Never repeated, never as a limitation, never as a nag. *(v1.0's build said "Only in the app" three times on one page; an apology repeated becomes a complaint.)*

## 22.4 Partners and co-branding

- A partner's mark appears in the **Useful Layer** and on The Project. **Never in the Told Layer, never on a witness photograph, never in a lockup with the Mark.**
- **Their credibility is borrowed by the project. It is never lent to a frame.**
- A partner may propose a witness. A partner may not approve one, edit one, or delay one.
- Municipal funding is disclosed on The Project, by name and by amount band.

## 22.5 Membership, if it ever exists

Not built, not scheduled, and governed in advance so that it cannot arrive ungoverned:

- Membership may buy **access, depth and support**. It may never buy **status, visibility to other visitors, or a shortcut through the story.**
- No tier is ever displayed to anyone but its holder.
- **No membership mechanic may create a reason to return that is not the world itself** (P16 — dopamine economy).

## 22.6 Community — contribution, not commentary

Community will be requested, by municipalities, by schools, by Keepers. Reviews, comments, ratings and social embeds remain banned (P16).

**The governed alternative:** a Keeper may **add to the record** — a photograph for the archive, a correction, a memory of a place. It enters editorial review, and if accepted it enters **edited, in this world's voice, unattributed on the surface** and credited on The Project.

**The moment two narrators speak on one surface, Law 8 is dead.** This is the only form of community this world's physics can support, and it is a real one: contributors change the record, which is more than a comment ever does.

## 22.7 Education

Schools and universities are a real audience and a real channel. They receive **materials, not a product variant** — downloadable, in the Useful Layer, teacher-facing, factual, and held to Book VII in full. **The world is not simplified for children.** It is a world; children are allowed in worlds.

---
---

# BOOK X — AI COLLABORATION

---

# 23. FOUR MODES, ONE BOUNDARY

*Articles are Tier 0. Practice is Tier 1. Chapter 16 governs AI implementing the design. **This book governs AI making the product**, which is where the ten-year risk actually sits.*

## 23.1 The four modes

| Mode | What it means | Status |
|---|---|---|
| **IMPLEMENTING** | Writing code, markup, styles from a specified design | **Permitted**, under Ch. 16 |
| **ASSISTING** | Drafting, summarising, checking, searching, restructuring — with a human deciding | **Permitted**, with a named human owner |
| **GENERATING** | Producing published artefacts: imagery, copy, translations, history | **Severely restricted** — see §23.3 |
| **DECIDING** | Choosing what to publish, what a place means, which claim is true, what the visitor sees next | **Forbidden. Permanently. In every form.** |

**The boundary is drawn at judgement, not at output.** An AI may write a thousand words; it may not decide that any of them is true.

## 23.2 The Tier-0 articles

- **No AI-generated imagery, ever** (article 104). Not as a placeholder, not for a comp, not for a sealed domain, not for an OG card, not "temporarily." **The photograph is the product; a generated photograph is a lie about a place that exists.**
- **No AI-authored historical claims** (article 105). AI may find sources. It may not decide what happened.
- **No AI as the sole translator** of a shipped locale (Book VI §19.6).
- **No personalised narrative, no recommendation engine, no chatbot guide** (P16). **The land is not a dataset and the visitor is not a profile.**
- **A named human owns every published sentence.** Ownership is a name in a record, not a review click.

## 23.3 Generating — the narrow permission

AI may generate **drafts** — of copy, of translation, of research summaries — provided that:
1. A named human rewrites or ratifies every sentence before publication.
2. **Nothing generated is published in the same session it was generated.** Distance is part of the review.
3. Generated drafts are marked as such in the working record, so that provenance survives the person.

## 23.4 Disclosure

**The project states publicly, on The Project, where AI is and is not used.** This is a coherence obligation: a product that refuses to be training data (`ai-train=no`) and declines to say how it uses AI itself is holding two positions it cannot defend simultaneously — and it *will* be asked.

## 23.5 The standing instruction to every agent

> **You may build this world. You may not decide what is true in it, what it looks like, or what it means.**
> When a task requires that judgement, **stop and ask.** Silence is not permission (Ch. 16, rule 6).

---
---

# BOOK XI — CANON

---

# 24. THE WORLD'S OWN FACTS

*Tier 0. **This book prevents world drift** — the slow, unintentional divergence of a mythology held across six documents and several people's heads, which is how a world becomes inconsistent without anyone ever deciding to make it so.*

## 24.1 Standing

**Canon is not design and it is not marketing. It is what is true inside the world.** Nothing in the product, the app, a partner's material, a press release or a translation may contradict this book. Changing canon is a Tier-0 amendment, and it is the amendment most likely to be regretted.

## 24.2 The spine

| Fact | Value |
|---|---|
| The Name | **Bulgaria.** Unchanged since **681**. |
| The span | **1,345 years**, recalculated annually and never rounded for effect. |
| The axis | **681** — *Before the Name* / *After the Name*. |
| The question | *How did the Name survive?* |
| The answer | **People carried it** — and they were not all the same people (Book VII §20.6). |

## 24.3 The Domains

| Domain | Region | Master Key | Epoch | Status |
|---|---|---|---|---|
| **The Cave** | Karst north; Prohodna | *gateway* | before | the website itself |
| **The Kings** | Thracian Valley | **Earth** | before | sealed |
| **The Sea** | Black Sea coast | **Soul** | after | open |
| **The Sacred Traces** | northern monasteries | **Spirit** | after | sealed |
| **The Golden Gate** | Balkan passes | **Body** | after | sealed |

**The Cave is not a fifth Domain.** It is the gateway, where the Keeper first awakens, and it is where the visitor already is. Flattening it into a fifth equal card is a canon violation, and v1.0's build committed it.

## 24.4 Progression

```
Checkpoint → Route (+ Relic) → Domain (+ Seal) → Master Key → The Living Covenant
```

Four Master Keys — **Earth · Soul · Spirit · Body**. One Living Covenant. **Gold belongs to the Keys and to nothing else** (token GOLD, article 102's sibling).

## 24.5 The vocabulary

Canon terms are §5.1's table, and they are canon everywhere: interface, code, CMS, commits, conversation, partner decks, press. **Synonyms are defects.** The most common drift is *place* for **Witness** and *coming soon* for **Seal**; both are how the old product's vocabulary reasserts itself.

## 24.6 Symbols

- **The Eyes of God** — Prohodna's twin openings. The product's founding image. Never used decoratively, never as an icon, never as a loading spinner.
- **The Seal** — a closed Domain. Beautiful, named, dark, and it never apologises.
- **The Mark** — the brand, a seal, not a logo.
- **The Inscription** — Old Bulgarian uncial. Letters that were cut here.

**Geometric glyph sets, emoji and dingbats are not symbols of this world and never were** (§3.14). The `♪` that appeared on the Cave Domain in the 2026 build is the canonical example of what this book exists to prevent.

## 24.7 Adding to canon

New lore — a new Domain, a relic, a symbol, a role — is a **Tier-0 amendment**, and must:
1. Be consistent with everything above.
2. Be grounded in something real in Bulgaria.
3. Be nameable in Bulgarian first.
4. Not require any existing canon to be retconned. **If it does, it is not new lore. It is a rewrite, and it is refused.**

---
---

# BOOK XII — DESIGN DRIFT

---

# 25. DETECTING THE SLOW LOSS OF SELF

*Tier 1. **Drift is the actual ten-year threat.** Not a bad decision — a thousand reasonable ones. Every individual step is defensible; the aggregate is a different product wearing the same name.*

## 25.1 The one question

> ## **"Does this still feel like Unlocking Bulgaria?"**

Asked at every quarterly review, of the whole product, by three people, one of whom has not worked on it that quarter.

## 25.2 The Drift Dashboard

**Twelve counted indicators, each with a ceiling. Measured quarterly. Reviewed annually against the previous year.**

| # | Indicator | Measured as | Ceiling |
|---|---|---|---|
| 1 | **Motion load** | distinct animated behaviours on the busiest surface | **≤ 3** |
| 2 | **Ambient motion** | autonomous animations that are not weather | **0** |
| 3 | **Colour load** | distinct hues rendered outside a photograph | **≤ 5** |
| 4 | **Interface load** | persistent chrome elements on any surface | **≤ 3** |
| 5 | **Explanation load** | words explaining the product rather than the land, per surface | **≤ 40** |
| 6 | **Choice load** | forward paths offered on any narrative surface | **1** |
| 7 | **Navigation load** | items in any persistent navigation | **≤ 2** |
| 8 | **Commerce load** | commercial elements visible in the Told Layer | **0** |
| 9 | **AI load** | published artefacts with any generated content, as a share | **0 % imagery · ≤ 20 % copy drafts, all human-ratified** |
| 10 | **Notification load** | messages the product sends unprompted | **0** |
| 11 | **Convenience load** | affordances added to reduce effort that also reduce meaning | **≤ 1 per year, each with an ADR** |
| 12 | **Frame signature** | photographs identifiable as ours at thumbnail size, as a share | **≥ 95 %** |

**These ceilings were set by judgement, not by evidence, because there is no evidence yet. They will be wrong.** Recalibrating them is a Tier-1 decision with an ADR — but recalibrating *upward* three years running is not calibration. It is drift with a spreadsheet.

## 25.3 The smell tests

Ten questions. **Any "yes" is investigated at the next review.**

1. Did we add a section to explain something we could have shown?
2. Did we add a second CTA anywhere?
3. Did a card appear in the Told Layer?
4. Did we make something faster to reach that was better when it took effort?
5. Did a number appear on screen that is about the visitor's activity?
6. Did we describe a feature using the word it is called internally?
7. Did we soften a sentence so nobody could object to it?
8. Did we add an option instead of making a decision?
9. Did we schedule something around a launch date rather than around readiness?
10. Did anyone say *"users expect"* and win an argument with it?

## 25.4 The four drifts, and what each looks like

**Visual drift** — the world becomes an interface. Symptoms: elevation appears; a shadow appears; a hue appears that isn't in a photograph; a card appears; the Inscription starts repeating; gold shows up as a border. *Regression test: the Room Test (§15.8).*

**Interaction drift** — the world becomes an app. Symptoms: a menu; a filter; a toggle; a second action; a tooltip explaining a control; a shortcut past the thing the shortcut was avoiding. *Regression test: can the whole product still be operated with three verbs — descend, look through, pass through?*

**Storytelling drift** — the world becomes a brochure. Symptoms: an adjective; a "you"; a benefit statement; a sentence that would work for any country; a section titled with a product noun. *Regression test: read the newest surface aloud beside the Prohodna testimony. If they sound like different writers, one of them is wrong.*

**AI drift** — the world becomes generic. The most dangerous, because it is the least visible: prose that is smooth, correct, and belongs to nobody. Symptoms: every sentence the same length; no strange detail; no fact that surprises; nothing a human would have hesitated over. *Regression test: **find the sentence in this surface that a committee would have cut.** If there isn't one, a committee already did.*

## 25.5 The identity regression suite

Run annually. **Failing any one of these is a constitutional event, not a backlog item.**

- [ ] A stranger, shown one screenshot with the Mark removed, can tell it is one country and that the country is old.
- [ ] The product can still be operated with three verbs.
- [ ] There is still exactly one forward path on every narrative surface.
- [ ] The Dark is still larger than Walked plus Heard-of.
- [ ] Nothing on any screen moves that is not weather.
- [ ] Gold has appeared nowhere except a Master Key.
- [ ] Rila Copper has appeared nowhere except a Remembered state.
- [ ] Every photograph still passes the thumbnail test.
- [ ] No item on the P16 register has been quietly approached.
- [ ] The newest witness reads like the first one.
- [ ] A visitor can still finish a visit having been told nothing about the product.
- [ ] The world still waits, and does not pine.

## 25.6 What to do when drift is found

**Not a redesign.** Drift is corrected by **subtraction of the specific additions that caused it**, named individually, in one release. The ADR records what was removed and which indicator it moved.

**If three indicators exceed their ceiling in the same quarter, feature work stops** until they are back under. That is a hard stop, and it is the only one in this document.

---
---

# CLOSING

Three things, and then this document should be closed and used.

**One.** The writing on this project is already good enough to win. That was true before the audit and it is the only reason any of this is worth doing. Everything in this Bible exists to stop the design from getting in the writing's way.

**Two.** The largest single risk in this document is not technical. It is that Stage One and Stage Two get built beautifully and **the photography never gets commissioned**, or gets commissioned cheaply. If that happens, this becomes a very well-organised template. **Gate 1 is not a formality.**

**Three.** The second-largest risk is that this becomes a beautiful shell around an app that does not open. The Covenant is a promise made to real people with their real names on it. **Every stage of this roadmap should be gated on the app making equivalent progress.** A world that ends after four minutes is a demo. A promise that is not kept is worse than a site with 404s.

> **The goal is not an award.**
> **The goal is someone standing in a cave in Lukovit at six in the morning, looking up, because of something they read one night in another country.**

Everything above is in service of that, and nothing above outranks it.

---

## AMENDMENTS

*Additions to this section require the written decision of the project owner at the tier of the provision, dated, with reasoning **and the alternatives that were rejected**.*

### v1.1 — 2026-07-26 · Constitutional Review Board findings, accepted

Scope: governance and architecture only. **No philosophy, identity, emotional journey, storytelling, visual language or product vision was changed.** The Board's finding was that the document was excellent as a vision and structurally undifferentiated as a constitution — every provision carrying identical weight and identical amendment cost, which guarantees it is routed around rather than amended.

| # | Section | Change | Reason | Alternatives rejected |
|---|---|---|---|---|
| **CC-1** | Status of this document | Three-tier structure (Charter / Standards / Specs), amendment authority per tier, succession, conflict-resolution order, exception protocol, annual review | A constitution survives by being small and hard to change, above a body of law that is easy to change. One weight for everything means the ceremony gets skipped. | Leaving it flat *(rejected: guarantees an extra-constitutional territory that grows quarterly)*; splitting into separate files *(rejected: fragments the voice)* |
| **CC-2** | Status of this document; Ch. 8 | Rule metadata header — tier, principle, rationale, evidence, enforcement, status, review date. Rules 8, 9, 37, 40, 74, 75, 76 marked `temporary`. | Without rationale, rules become superstition — cargo-culted or ignored. ~30 rules are scar tissue from 2026 defects, which is a legitimate reason for a rule and a terrible reason for a law. | Deleting the defect-driven rules *(rejected: they are correct and still needed)* |
| **CC-3** | Ch. 8, Ch. 16 | Ch. 8 declared the canonical register; Ch. 16 declared a generated view of it | The two chapters overlapped by ~60 % in different words. Two hand-maintained copies of one law drift within a year, and then nobody can say which is authoritative. | Deleting Ch. 16 *(rejected: the agent-addressed view is genuinely useful and rare)* |
| **CC-4** | New §3.0 | Formal definition of the **Told Layer** and the **Useful Layer** | ~15 rules turned on this distinction and it was never defined. It was the single most-referenced and least-specified idea in the document. It also gives commerce, membership and education a constitutional home without touching the emotional sequence. | Leaving it implicit *(rejected: unresolvable by an agent, and the business had nowhere legitimate to live)* |
| **CC-5** | §3.12, §10.3, Rule 17 | The map has two states: **The Memory** (what you have seen) and **The Atlas** (what exists) | The Memory Map was the sole navigation *and* was defined as a record of visits only. At scale, the only navigation surface would be structurally incapable of showing anything unvisited. The ban on indexes, archives, tag pages and browse-all is untouched. | Permitting a place index *(rejected: a directory is where exploration becomes browsing)* |
| **CC-6** | §5.3 | The Thread is **presented as a chain and stored as a graph** | A strictly linear hand-authored chain in every language becomes unmaintainable at scale, and unmaintainable content is how placeholders return. The visitor's experience is unchanged: still exactly one argued next step, never a fork. | Computing the Thread *(rejected: the order of the Thread is the order of the argument, and the argument is the product)* |

**Contradictions resolved in the same revision** (required for Rule 100 to be satisfiable): P4 timers *(C5)*; token GOLD vs the four Master Keys *(C6)*; Rule 18 vs Domain and Map surfaces *(C1, C2)*; Rule 71 vs the Witness's required beats *(C3)*; the sound offer inside a HELD movement *(C4)*; Rule 63's undefined scope *(C8)*; a normative cross-reference to a superseded document *(C9)*; the frozen component inventory vs the roadmap's own requirements *(C10, resolved by governing the door rather than the list)*.

### v1.1 — second tranche · Constitutional Revision Board

*Full resolutions, with reasoning and rejected alternatives, are recorded in `DESIGN_BIBLE_v1.1_RESOLUTION.md`. Fifty-six recommendations were classified; four were rejected.*

| # | Section | Change | Reason |
|---|---|---|---|
| **M-1** | Ch. 2 | **P16 · The Forbidden Future** added; "fifteen, no more" amended to "sixteen" | Every other principle governs what we build. P16 governs what we will be asked to build. Feature creep arrives as a reasonable idea, from someone who means well, with a business case. |
| **CC-5r** | §3.12, §10.3, R17 | The Board's **Atlas rejected**; the map now has three states — **Walked · Heard of · Dark** | An Atlas is a catalogue with a beautiful name, and a visitor who can see everything has no horizon. Three states solve navigation *and* deepen mystery: hearsay is earned by reading. |
| **CC-6g** | §5.3 | **Tier-0 perception guarantee** added to the Thread | The Board proposed the graph as an implementation nicety. It is now bounded: if a visitor can tell the Thread is a graph, the graph is reverted whatever it cost. |
| **S7** | §6.9 | **The Side Entrance** — Sight is givable at any entry point | A near-term correctness failure: at any real scale most arrivals are lateral, and those visitors could never receive the product's central verb. |
| **R7–R15** | various | 16 px → platform minimum · budgets to Tier 2 · P14 scoped to a closed subset · analytics as a governed, published permission · Law 1 made medium-independent · Room Test panel of three · engineering policy to `CONTRIBUTING.md` · the §1.4 photography exception relocated | Only absolutes that were implementation details, temporary workarounds, obsolete fixes or technology-specific were relaxed. **No philosophical law was weakened.** |
| **101–107** | Ch. 8 | Seven Tier-0 articles: sponsored parity · the horizon is never sold · payment never gates a story · no AI imagery · sourced history · WCAG 2.2 AA · contributions never attributed | The seven places this product is most likely to be hollowed out from the inside, by people who mean well. |
| **Books V–X** | Ch. 18–23 | Evolution & Governance · Editorial · Historical Integrity · Content Operations · Partnership & Commerce · AI Collaboration | Governance, the written word, the past, the pipeline, the money, and the machines. Book VII is the highest-severity gap in v1.0. |
| **M-2** | Ch. 24 | **Book XI — Canon** | The mythology was held across six documents and several heads. That is how a world becomes inconsistent without anyone deciding to make it so. |
| **M-3 · M-4** | Ch. 25 | **Book XII — Design Drift**, with a twelve-indicator counted Dashboard and ceilings | Drift is the real ten-year threat: a thousand reasonable decisions producing a different product with the same name. Now measurable before a visitor notices. |

**Rejected, with reasoning:**

| Rejected | Why |
|---|---|
| Demote Photography Laws 2 & 3 to "strong defaults" *(Board X-1)* | The photography philosophy is constitutional and not amendable by a review board. On the merits: distinctiveness comes from three laws holding *simultaneously across a whole library*, not from each being unprecedented. Relaxing two leaves a library one-third distinctive and two-thirds competent — worse than either extreme. The Board's real anxiety is addressed as a drift indicator instead. |
| "Delete ~170 of the 190 nevers" *(Board X-2)* | Absolutes that defend the world's physics are the point of this document. Reduced only where an absolute was an implementation detail, a temporary workaround, an obsolete bug fix, or technology-specific. **Net: 31 relaxed, 7 added.** A world with negotiable physics is not a world. |
| "Split the document into two files" *(Board X-3)* | Tiering achieves the governance outcome inside one document. Splitting fragments the voice, and the voice is load-bearing here in a way it is not at Apple. |
| Reduce Rule 17's ban to permit search *(Board R4, as stated)* | Accepted only in the narrow form: asking for a name the visitor already brought, answered with one place or silence. No list, no autocomplete, no ranked results, no zero-state alternatives. |

### Still open at v1.1 — named, not hidden

- **Component anatomy, states, variants and accessibility contracts** — the admission criteria exist; not one component has been specified. **This is the largest remaining gap.**
- **Colour values** — seven named colours, no values, blocked on photography. Cursor rule 13 remains unsatisfiable until Tier 2 carries the numbers.
- **A research method** — the obligation exists (§18.7); the practice does not.
- **A one-page card** — sixteen principles, the layer definition, the Deleted Register, the twelve real absolutes, for a photographer or a partner's designer who will never read twenty-five chapters.
- **The drift ceilings are invented** and will be wrong until there is a year of data.
- **Book VII has no historian.** It is a well-designed empty vessel on the highest-risk topic in the project, and an empty vessel is not a solved problem.

---

**UNLOCKING BULGARIA · DESIGN BIBLE v1.1**
*Ratified 2026-07-26 · Revised 2026-07-26*


