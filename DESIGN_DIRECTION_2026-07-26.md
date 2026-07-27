# UNLOCKING BULGARIA — DESIGN DIRECTION
### From audit to authorship
**Design Director's brief · 2026-07-26**
*Supersedes the proposed solutions in `UX_DESIGN_AUDIT_2026-07-26.md`. The audit's findings stand. Its recommendations do not.*

---

# PART ONE — THE AUDIT IS WRONG ABOUT WHAT MATTERS

The audit is factually accurate and strategically shallow. It found 404s, contrast ratios, index drift and a broken type scale. All real. And then it did what auditors do: it proposed to **repair the thing that exists** rather than ask whether the thing that exists should exist.

Its roadmap has fifty items. Forty-two of them make a mediocre website less broken. Eight of them touch what a visitor would actually feel. That ratio is the audit's real failure, and it is worse than any bug it found.

Here is what it got wrong.

## The 20 recommendations I reject

**1. "Make all five Domain cards real links."**
Wrong root cause. The problem is not that four cards don't link — it is that **there is nothing behind them.** Linking them to empty pages is worse than the current lie. The correct response to incomplete content is not equal-but-empty grids. It is **scarcity, honestly staged.** Ship one Domain at a museum standard. Let the other three be *visibly sealed* — not "coming soon," but *closed*, on purpose, with their names showing and their contents withheld. Withholding is a design tool. Emptiness dressed as availability is not.

**2. "Build a place index and a domain index."**
This is IA-by-CMS-convention. An index page is a list, and a list of one is a monument to emptiness. Atlas Obscura's index works because it has 25,000 entries. Ours would have one. **The map should be the index — but only once the map has something to hold.** Until then, a single authored line through the content beats a branching directory every time.

**3. "Add visible breadcrumbs."**
A breadcrumb is an apology for a structure the visitor cannot feel. In a world, you don't need a trail of URLs — you need a **horizon**. If someone needs `Home › Domains › Cave › Prohodna` to know where they are, the atmosphere has already failed and the breadcrumb won't save it.

**4. "Compress the hero animation to 900 ms."**
Right that 4.4 s is indefensible. Wrong frame. The problem isn't *speed* — it's that the reveal is **time-gated**. Time-gated motion steals agency: the site is performing at you while you wait. Nothing on this site should be on a timer. Everything should be **immediate, or driven by your own scroll.** Change the mechanism, not the duration.

**5. "Correct GIS Bulgaria silhouette."**
Technically right, emotionally wrong. A GIS-accurate outline is a *data* map — it says "this is a territory." This product needs a **memory** map — hand-drawn, in the tradition of monastery manuscript charts, deliberately and beautifully imprecise. The current polygon is bad because it is *accidentally* crude. The answer to accidental crudeness is authorship, not accuracy.

**6. "Delete the shooting stars or the motes."**
Reduction was the right instinct, quantity was the wrong reason. The problem is that **none of the motion is diegetic.** It doesn't come from the world. Dust in a cave shaft is not decoration — it's the cave breathing. Delete every particle system that isn't something physically present in the place you're looking at.

**7. "Launch-list email capture — highest ROI change."**
The mechanism is right; the framing I gave it was pure SaaS. "Notify me when the app launches" is a transaction. This product's entire thesis is about a name being **carried** by people across 1,345 years. The email field is not a signup. It is an **act of joining a line.** Same input, entirely different emotional weight, and the difference is worth more than every conversion tweak in the roadmap.

**8. "Add a live Keeper counter for social proof."**
Growth-hack thinking in a world that should feel ancient. A number ticking upward is Kickstarter. If we count anything, it should feel like an inscription, not a metric — a position in a sequence, not a running total.

**9. "Fix the mobile type scale inversion" as a P0.**
It is a bug. It belongs on an engineering board, not in a design strategy. Listing it beside "commission photography" as a peer priority is a category error that flattens everything into a to-do list and destroys the sense of what actually matters.

**10. "Fix trailing slashes / canonical / 307s" as P1.**
Hygiene. At a 50 ms TTFB no human has ever perceived this. I inflated an SEO housekeeping item into a major UX failure because it was easy to prove. That's auditor bias — measurable problems get overweighted against unmeasurable ones.

**11. "FAQPage JSON-LD, per-page OG images, consolidate button systems, delete dead CSS."**
All correct. All irrelevant to whether one human being feels anything. Ship them in a maintenance sprint and never discuss them in a design review again.

**12. "The hero is 60 % empty on desktop."**
I criticized emptiness. That was a failure of nerve. **Journey is 80 % empty space and it is the most emotionally effective thing ever shipped in interactive media.** The hero's problem is not that it is empty — it is that the emptiness is *undesigned*. It is black, not void. Black is an absence. Void is a composition.

**13. "Delete the cursor lens or make it functional."**
Delete it. Full stop. A custom cursor on a site whose entire job is to make you *look at a country* competes with the photography for attention and loses. No exceptions, no clever version.

**14. "The Journey section duplicates How It Works — delete one."**
Right that they're redundant. Wrong that either survives. **Both must go.** Progression explained in a diagram is progression the visitor did not experience. Never draw a system you can let someone feel.

**15. "Rebuild the timeline: scroll-linked, with photos and place links."**
I proposed decorating a bad component. The timeline should not be a section of the website. **1,345 years is the site's vertical axis.** Time is the scroll. You don't visit the timeline; you are always inside it.

**16. "Add a contact form instead of mailto cards."**
Marginal. A luxury brand answers by name. One human being, one photograph, one real email address, one honest promise about response time beats a form with four routing categories.

**17. "Blocking AI crawlers is a strategic error."**
Too blunt. I conflated two different things. **Refusing to be training data (`ai-train=no`) is brand-consistent** for a project about heritage and custody — arguably it *is* the brand. **Refusing to be cited in AI answers (`ai-input`) is self-harm**, because that is discovery, not extraction. Allow retrieval and citation. Keep the training refusal and put it in the About page as a stated position. It's a good story.

**18. "Add a place-page map with directions, parking, transit."**
Correct utility, wrong moment. Logistics inside the emotional sequence is a record scratch. **Desire first, logistics last.** Every practical fact — how to get there, when to go, what shoes — belongs behind one deliberate action at the very end of a place, not interleaved between the poetry.

**19. "Privacy-preserving analytics."**
Sound business advice, badly prioritised at #33 of 50. There is currently no product to measure. Instrument after there is something worth learning about.

**20. The roadmap contradicts itself.**
I wrote "restraint: one moving thing at a time" and then proposed clustered filterable maps, scroll-driven era transitions, generated OG cards, a journal, an audio system and a browser demo quest. That is **feature accumulation wearing the costume of delight.** A fifty-item delight list is not a vision. It is a backlog with better adjectives.

## The 30 findings I stand behind completely

1. There is no photography. This remains the whole story.
2. Three `<video>` sources 404. The hero has no image at all.
3. Production pages display "draft," "placeholder," "See README."
4. The site asks people to join a launch list that does not exist.
5. Both store buttons are disabled — the primary conversion is unreachable.
6. Four of five Domain cards show "EXPLORE" on hover and do nothing.
7. Atmospheric styling is index-drifted onto the wrong cards.
8. A musical note is the glyph for the Cave Domain.
9. The Living Map has one dot.
10. The place page's "Map" section is a string of coordinates.
11. "Gallery" is a section whose entire body is the words "Coming soon."
12. "Nearby places" contains one card: a link to the page you're on.
13. Six `<h2>`s on the place page are the page title repeated.
14. Twelve of fourteen languages are ~46 % English, including the primary CTA.
15. The German page serves an English `<h1>` under `lang="de"`.
16. The video lightbox never moves focus into itself.
17. No overlay traps focus, locks scroll, or inerts the background.
18. Contrast failures are all decorative `opacity` on compliant colours.
19. `.mobile-lang-btn` removes its focus outline entirely.
20. Map targets are 10–16 px and Space doesn't activate them.
21. The map's nodes aren't links — invisible to crawlers, middle-click, everything.
22. `touch-action:none` traps vertical scroll across the Guardian Sight image on mobile.
23. The 24 MB intro video has no loading state after a deliberate click.
24. Video and narration are separate elements that can desync permanently.
25. The 580 KB PNG logo is almost certainly the LCP element.
26. The place page's only outbound links are itself, twice, and a one-dot map.
27. The map page has no `<h1>` and no way forward.
28. `/map` and `/sea-domain` appear in no navigation surface.
29. There is no share affordance anywhere, and one generic OG image for all pages and languages.
30. **The writing is genuinely award-grade and is the only asset worth building on.**

---

# PART TWO — WHAT IS FUNDAMENTALLY WRONG

Strip the bugs away and imagine every asset delivered, every 404 fixed, every contrast ratio corrected. You would have a beautiful, fast, accessible website that nobody remembers. Here is why.

### 1. It explains a mythology instead of practising it.
This project invented a genuine cosmology — Keepers, Master Keys, Domains, Seals, Guardian Sight, the Living Covenant. Then it put each one in a card with a glyph and a two-line description. **Every mechanic is a noun.** The visitor is invited to admire a system they cannot enter. You cannot make someone feel adventure by describing adventure to them in a four-column grid.

### 2. It is a SaaS skeleton wearing a fantasy skin.
Hero → How It Works → Domains → Features → Download → Partners → FAQ → Contact. That is the Stripe page architecture from 2019. The mythology is painted on top of a template built to sell software subscriptions. **The structure contradicts the story on every screen**, and structure always wins.

### 3. It is about a name and it shows no people.
"One Name Survived" is a claim about human beings refusing to let something die — through 500 years of occupation, through empires that fell on either side. That is a ghost story about ordinary people. **There is not one human face anywhere on this website.** Not a shepherd, not a monk, not a grandmother, not a child. The site argues that people carried a name and then shows you gradients.

### 4. It asks the best question in European tourism and never answers it.
*"1345 years. One name survived. How?"* is a superb hook. And then the site talks about AR features and partnership enquiries. **The question is a line cast into an empty pond.** The entire site should be the answer, delivered in layers, and the visitor should feel it assembling.

### 5. It presents a country that does not appear.
Bulgaria — Thracian gold, the Rila frescoes, Belogradchik's red towers, the Rose Valley at dawn, Prohodna's twin openings, the Black Sea in November, the Madara Rider carved into a cliff face 1,300 years ago — is one of the most visually extraordinary places in Europe and **it is entirely absent from its own website.** The visitor is asked to feel national pride about a country they are not shown.

---

# PART THREE — WHAT THE ROOM WOULD SAY

**Apple** would delete two-thirds of it and rebuild the rest as **one continuous shot**. No sections. No cards. One camera, descending. They would make a single idea — a name that would not die — carry the entire page, and they would give it more space than anyone thinks reasonable.

**Airbnb Experiences** would ask one question that stops the room: *"Whose experience is this?"* They would put a human being on screen in the first ten seconds — a named Bulgarian, a real face, someone who has actually stood in Prohodna — and they would make the product feel like it belongs to people rather than to a brand system.

**Stripe** would attack the information architecture and win. They would say: you have one place, four sealed Domains, and a story. **Stop building a site that pretends to be complete.** Build the smallest possible thing that is *entirely* finished, and make its edges deliberate. Stripe's genius is not visual — it is knowing exactly what to leave out.

**National Geographic** would refuse to proceed until the photography commission was signed. Then they would restructure everything around **evidence**: not "four Domains" but four pieces of proof in an argument, each anchored to a real place, a real date, and a real person. And they would insist on captions written by someone who has been there.

**Atlas Obscura** would say the obsession is right and the packaging is corporate. They would find the *strange specific detail* — the cave whose two openings are called the Eyes of God and photograph as a skull from above; the fact that Cyrillic was invented here and is now used by 250 million people who mostly don't know it; the fact that the name survived while the country did not. **They would lead with the strangeness, not with the brand.**

**Journey's art director** would delete every UI element on screen. All of them. And then add back only what cannot be expressed as landscape. They would say: your problem is not that you lack features. **Your problem is that there is no wind.**

**A Zelda world designer** would say: you have written a map and forgotten to build a world. There is no sense of *elsewhere* — no distant thing on the horizon that I want to walk toward. **Give me one silhouette I can see from everywhere and cannot reach yet.**

**Monument Valley's UX lead** would say: your interactions explain, they don't reward. Every touch should produce something quiet and slightly impossible. And **one interaction, done perfectly, beats nine.**

**An Awwwards juror** — me, at the table — would say: the writing is the best I've read in this category all year, and everything around it is a template. Fix the ratio.

---

# PART FOUR — THE EMOTIONAL ARC

Design the feeling first. Everything else is downstream.

| Time | The visitor should feel | Delivered by |
|---|---|---|
| **5 s** | *Unease and scale.* Something old is aware of me. I am small and I am somewhere real. | Full-bleed, sound-optional descent. No UI. No menu. One line of text. |
| **30 s** | *A question I cannot put down.* How does a name survive 1,345 years when the country holding it vanished for five hundred of them? | The question posed by the land, not by marketing. Then: silence. Let it sit. |
| **2 min** | *Recognition.* Oh — it survived because of specific people, in specific places, that are still standing. I could stand there. | Four pieces of evidence. Each one a place, a date, a moment it should have ended and didn't. |
| **5 min** | *Possession.* I saw something hidden with my own hand. I have a place I want to go and I know its name. | Guardian Sight given as a capability, not explained as a feature. Prohodna, entered and seen through. |
| **10 min** | *Belonging.* I want to be counted among the people who carried this. | The Covenant. Not a signup — an inscription. |

Note what is missing: at no point does the visitor feel *informed*. Information is a by-product. If someone leaves knowing facts but feeling nothing, we failed. If they leave knowing one place name and unable to stop thinking about it, we won.

---

# PART FIVE — THE MANIFESTO

## Unlocking Bulgaria is not a website about a country.
## It is the first checkpoint of a quest that continues in the real world.

**I. The land is the interface.**
There is no chrome. No cards floating over gradients. Photography is not decoration placed inside a layout — **the photograph is the page**, and text is something that appears on the land, the way an inscription appears on stone. If an element cannot exist inside the world, it should not exist.

**II. Everything is a threshold.**
This world's central image is an opening: a cave mouth, a monastery gate, a mountain pass, a cliff-carved relief, a harbour. Every photograph is composed as a **threshold** — dark foreground edge, luminous depth, something framed by something else. Never a flat postcard vista. This is a photographic law, not a preference, and it is derived from the product's own mythology.

**III. Two states, one world.**
Everything in this world exists as *Now* and as *Remembered*. Guardian Sight is not a section and not a feature — **it is the medium of the entire site.** Once given, the visitor keeps it. Every image can be looked *through*, everywhere, until the end.

**IV. Nothing moves that isn't alive.**
Zero ambient decoration. The only autonomous motion in the product is **light, dust, water, breath and wind** — things physically present in the place on screen. Everything else moves because the visitor moved it. No timers. Ever.

**V. Restraint is the luxury signal.**
Silence is expensive. Empty space is expensive. One thing at a time is expensive. Five simultaneous effects read as cheap in every culture on earth. **Where the audit said "add," we subtract.**

**VI. The alphabet is the brand.**
Bulgaria gave the world an alphabet. 250 million people use it. This is the single most ownable asset in the entire project and it is currently unused. **Cyrillic letterforms — Glagolitic and Old Bulgarian uncial — are the display typography.** Not a Roman serif with a classical name. Letters that were carved and inked here, treated as *carving*.

**VII. Gold is not the brand. The land is the palette.**
Gold-on-black is the most exhausted premium cliché of the last decade — crypto, fintech, every "luxury" template. Our colours are named after real places and taken from real photographs: Prohodna Dark, Eyes-of-God, Thracian Ochre, Rila Copper, Pomorie Slate, Rose Valley First-Light. **Gold appears exactly once in the entire experience**, for the Master Key, and because it appears once it means something.

**VIII. The question is the spine.**
*How did the Name survive?* is asked in the first ten seconds and answered progressively, never completely. The visitor should leave with the answer forming and one piece deliberately withheld — the piece that lives in the app.

**IX. Progression is felt, never diagrammed.**
No flowcharts of Checkpoint → Route → Domain → Key. The visitor **earns** something on this website — sight, a place, a name, a mark — and arrives at the app already holding it.

**X. Honest scarcity beats dishonest abundance.**
We have one place. We say so, and we make that one place unforgettable. Three Domains are *sealed*, visibly, deliberately, with their names showing. Sealed is a promise. "Coming soon" is an apology.

---

# PART SIX — THE VISUAL LANGUAGE

## Photography — "The Threshold Rule"

Every image in this product obeys three laws:

**Composed through something.** Shot from inside the cave looking out; from beneath the monastery arch; from the shadow of the cliff toward the lit valley. There is always a dark near-edge and a luminous depth. This produces an instantly recognisable frame signature — you would know an Unlocking Bulgaria photograph across a room, at thumbnail size, with the logo removed. **That is the definition of an ownable visual language.**

**Two hours only.** Everything is shot in the twenty minutes before sunrise or the forty minutes after sunset. No midday. No blue sky. The land is either waking or refusing to sleep. This is not a look — it is the *state* the story requires: a country at the edge of remembering.

**A person, always, but never posed.** Someone is in frame — small, walking away, at the mouth of the cave, on the ridge. Never looking at camera. Never smiling at camera. The visitor's eye enters the frame through a human being and then travels past them into the land. **This is how you make a viewer feel they could be there:** you put a body in the space at the scale the space deserves.

Shot list, minimum viable: Prohodna interior (up through the Eyes of God, three light conditions), Prohodna approach, Madara Rider at first light, Rila or Ivanovo interior, the Rose Valley at 05:10, Belogradchik at dusk, the Black Sea in November, one Balkan pass in fog. **Eight images, authored, is worth more than four hundred licensed.** A jury can smell stock in under a second.

## Lighting and colour

Light is the narrative device, not colour grading. The site's colour temperature **shifts as you descend through time** — cold, silvered, pre-dawn blue in the "Before the Name" material; warmer, ochre, lamp-lit after 681. The visitor crosses the year 681 as a *physical change in the light*, and most of them will never consciously notice why the page suddenly feels warmer. That is the good kind of design: felt, not observed.

## Typography

- **Display / inscription:** a Cyrillic uncial drawn from Old Bulgarian manuscript hands. Used large, sparingly, always as if cut into a surface. Numerals — 681, 1345 — are its highest expression and appear at monumental scale.
- **Voice:** an editorial serif with a true Cyrillic cut, for the narration. Not decorative. The tone of a translated ancient text.
- **Utility:** one quiet humanist sans with excellent Cyrillic, Greek and CJK support, for the things that must be functional — practical info, the form, legal.
- **Rule:** three faces, three jobs, no exceptions. The current site runs four faces with no assignment logic, including Georgia appearing by accident.

## Sound

**This product has no right to exist without sound.** The one internationally famous Bulgarian cultural export is *Le Mystère des Voix Bulgares* — women's polyphonic singing, and it is, literally, **the sound of a name being carried by voices.** The metaphor is already perfect and it is currently unused.

- Offered once, at the moment of descent: *"This place has a sound."* One choice, remembered forever.
- Field recordings, not music: drip and reverb in Prohodna, wind on the pass, sea on stone, a fire, distant bells.
- A single held vocal note enters exactly twice in the whole experience: when the Name is first spoken, and at the Covenant.
- Never autoplay. Never a music bed. One control, always in the same place, honest about what it will do.

## Motion

- **Scroll is descent.** Down the page is down through the land and forward through time.
- **Nothing fades in on a timer.** Content is present or the visitor summons it.
- **Parallax only where depth physically exists** — a cave mouth genuinely has a foreground and a distance. A card does not.
- **Transitions are camera moves**, not page swaps: you move *through* the opening you clicked. The doorway you selected is the doorway you pass through. This makes navigation feel like travel instead of like loading.
- **One held moment per page** where everything stops and there is nothing to do but look. Confidence is the ability to give the visitor nothing.

## Cards, buttons, UI

**There are almost no cards.** Cards are how you present a database. This is not a database.

Where a choice must be offered, it is offered as a **threshold**: an image, a place-name in inscription type, and a single line of what it saw. Not a rounded rectangle with a border and a hover lift.

Buttons: one primary form in the whole product — a line of inscription type with a rule beneath it that draws itself when you approach. No pills. No gradients. No uppercase Cinzel with 0.1 em tracking, which is the visual signature of every wedding-venue website in Europe.

## Maps — the single most important invention

**Replace the country outline with a Memory Map.**

Not GIS. Not a directory of everything that exists. An illuminated hand-drawn chart in the tradition of monastery manuscripts — ridges as ink hatching, the Danube as a drawn line, the sea as a stippled edge.

And this is the mechanic that changes everything:

> **The map is dark. Places appear on it only as you learn them.**

You arrive and there is one point of light: Prohodna. Read its testimony and a second point appears. Cross into a Domain and its region illuminates. **The map is a record of what you have seen — not a listing of what we have built.**

This is a genuine invention and it solves four problems at once:
- The "map with one dot" defect becomes **correct**, because one dot is the truthful state of a new visitor.
- It creates **progression before install**, which is the hardest thing this project has to do.
- It gives the visitor a reason to return: *the map is not finished.*
- It converts our content poverty into narrative tension. What we don't have yet reads as *unlit*, not *missing*.

The map is also the navigation. There is no menu.

---

# PART SEVEN — THE REDESIGNED EXPERIENCE

## Navigation — **deleted and replaced**

**Delete:** the six-anchor header nav, the hamburger, the mobile nav panel, the language overlay-as-modal, the footer link farm, breadcrumbs.

**Replace with two persistent elements only:**

1. **The Mark** (top left) — the brand, and a single tap returns you to the surface.
2. **The Map** (bottom right, or bottom centre on mobile) — one glyph. It shows how many points are lit. Tap it and the world folds open into the Memory Map. **This is the entire navigation system.**

Everything else — language, sound, legal, partners — lives *inside* the map view, at its edge, where utility belongs. The reading surface stays clean.

*Why:* a nav bar with six anchors announces "this is a marketing page." Removing it is the single fastest way to change what kind of thing this feels like. And a navigation that doubles as a progress record makes every act of navigating also an act of collecting.

## The Homepage — **one continuous descent**

Delete every existing section. The homepage is not a stack of sections. It is **one camera move**, in five movements, and the visitor drives it with their scroll.

**Movement I — Above (0–10 s).**
The peninsula from very high up, before dawn. Cloud. Cold. Almost no colour. One line, small, in inscription type: *Преди Името.* / *Before the Name.* No menu. No CTA. No trust chips. Nothing to click. A quiet offer of sound.

**Movement II — Descent (10–25 s).**
You scroll and you fall. Through cloud, into the Danube plain, toward one hill, toward one dark opening in limestone. The horizon rises past you. The temperature of the light changes. **This is a real camera move over real photography and it is the entire first impression.** No text until it settles.

**Movement III — Inside (25–45 s).**
You are inside Prohodna, looking up. Two openings in the rock. Daylight falling in two columns through dust. It holds. Nothing happens. **Let it hold for a long time.**

Then, small, at the base of the frame: *The land was watching before we had a name for it.*

And then — the only moment of instruction in the entire product — an invitation to **look through**. Press and hold anywhere. The remembered layer surfaces: the light, the marks, what this place has seen. Release and it's gone. Three seconds and the visitor has *used the product's central verb with their own hand.*

**This replaces the entire "Guardian Sight" section. It is not explained. It is given.**

**Movement IV — The Question (45–75 s).**
Only now, having been somewhere, does the argument begin.

> **1345 years.**
> Empires fell on every side of this land.
> The country vanished for five hundred of them.
> **The name never changed.**
> *How?*

Then black. Then silence. Then a beat longer than is comfortable.

**Movement V — The Evidence.**
Four thresholds. **Not "Domains." Not content categories. Four pieces of evidence in an argument.** Each is one full-bleed image, one place, one date, one sentence about the moment it should have ended and didn't.

- **The Kings** — before the Name, the land already remembered. *Thracian Valley.*
- **The Sea** — the sea does not remember names. It remembers courage. *Black Sea Coast.*
- **The Sacred Traces** — where the alphabet was kept alive when speaking it was forbidden. *Northern monasteries.*
- **The Golden Gate** — the passes where refusal was physical. *The Balkan.*

One is open. **Three are sealed** — visible, named, dark, with the seal shown. Not "coming soon." *Sealed.* The Cave is where you already are.

Then the Covenant. Then the world folds into the Map. **The homepage ends by handing you the map, not by asking you to download something.**

## Places — **renamed "Witnesses"**

*Why they exist:* they are the proof. Without them the question is rhetoric.

Every place page is one argument in four beats:

1. **What it is.** Full-bleed threshold photograph. Name in inscription type. Nothing else on screen. Hold.
2. **What it saw.** One paragraph. One date. The moment this place was a witness to the Name surviving.
3. **Look through it.** Guardian Sight, on this place, in the visitor's hand. The remembered layer. This is the reward for having come this far.
4. **Stand here.** *One* line: how far, how long, what season, and a single action — *Take me there.* Behind that action: everything practical — directions, transit, the walk, the shoes, the rain warning, what's nearby that's worth an hour.

Then — and this is the whole exploration model —

5. **The next witness.** Not "related places." Not a grid. **One image, one name, one sentence, and a reason:** *"The alphabet that was carved here was hidden two hundred kilometres north, in a room cut into a cliff."* The chain of testimony continues. **There is always exactly one next thing, and it is always the right one.**

**Delete from the place page:** the "Only in the app" hero aside, the second "Only in the app" story card, the third "Only in the app" CTA band, the coordinates-as-map section, the empty Gallery section, the self-referential Nearby grid, the duplicate Route Preview, the Quick Facts strip in its current position, and every one of the six repeated `<h2>`s.

## The Timeline — **deleted as a section, promoted to the site's axis**

*Why it shouldn't exist as a section:* six static rows with a gold dot is a Wikipedia table. Nobody has ever felt anything reading it.

**What replaces it:** time is the vertical axis of the whole product. Scrolling anywhere in this world moves you through it. The **year 681 is a threshold you physically cross** — the light changes temperature, the sound changes, the typography's colour shifts from silver to ochre. Individual dates appear where they belong: on the witness that carries them. 864 belongs to a monastery. 1396 belongs to a fortress that fell. **A date attached to a place you can stand in is memorable. A date in a list is not.**

## Guardian Sight — **deleted as a section, promoted to the medium**

*Why it shouldn't exist as a section:* four "Reality → Revealed" cards describing an experience is the exact failure mode of this entire site. Text explaining a visual capability.

**What replaces it:** the capability itself, given once in Prohodna and retained everywhere afterwards. Press and hold on any image, anywhere on the site, and the remembered layer surfaces. It should feel like being handed something. And the site's version has an honest, stated limit — a fixed number of layers, a still image, no live camera — so that the app's version is not a paywall but a *continuation*.

## "How It Works" and "The Journey" — **both deleted**

Two sections describing the same five-stage progression, two screens apart, one of them entirely hidden from assistive technology. Nobody has ever installed an app because they understood its progression taxonomy from a flowchart. **The visitor should complete a checkpoint on the website and thereby know what a checkpoint is.**

## "Features" — **deleted**

Eight cards with glyphs. This is the section that makes the site look like software. Delete it entirely. What matters from it — AR is optional, it works for families, it's in 14 languages — is answered honestly in the FAQ, where people who need reassurance go looking for it, and nowhere else.

## The Download band — **deleted and replaced by the Covenant**

*Why the current one shouldn't exist:* two disabled buttons and an invitation to join a list that does not exist. It is the most damaging twenty seconds on the site.

**The Covenant.** At the end of the descent, after the evidence, one screen:

> The name has been carried by everyone who ever spoke it.
> Nobody carried it alone.
> **Add yours.**

One field: your name. Then, quietly, your email. In return — immediately, in the browser — **your name rendered in Old Bulgarian uncial, as an object you can keep and post.** And one true sentence: *You are the [n]th to be inscribed. When the first route opens, you'll be told before anyone else.*

That is the same email capture the audit recommended. It converts far better *and* it is the only share mechanic the site needs, because people share things with their name on them. No share buttons required.

## Partners — **moved off the homepage entirely**

*Why it shouldn't be on the homepage:* a B2B lead-gen form in the middle of an emotional experience is a genre collision that damages both. A municipality does not need to be seduced; they need credibility, a case, and a contact.

Its own page. Its own tone: sober, evidenced, confident. Visitor numbers, dwell time, the cultural preservation argument, one named human being who answers. Reached from the map's edge and from the footer. **Keep the form exactly as engineered — it is the best-built thing in the codebase.** Add the consent checkbox. Nothing else changes.

## FAQ — **kept, moved, halved**

*Why it exists:* ten honest answers to real objections. This is a genuine trust asset and the copy is good.

Move it out of the emotional sequence — it belongs on an **About / The Project** page alongside the founders, the sources, the historical consultants, and the stated position on AI training. Cut to six questions. Add the two that actually block a booking: *Do I need to be in Bulgaria?* and *What does it cost?*

## Footer — **almost entirely deleted**

*Why the current one shouldn't exist:* a three-column link farm duplicating on-page anchors, an untranslated English credit line on the Japanese page, and a wrongly-labelled legal nav.

What remains: the Mark, one line of who made this, legal, language, and a single sentence that is worth reading. Nothing else. **A footer full of links is a site that doesn't trust its own navigation.**

## Language — **rebuilt as a first-class citizen**

Fourteen languages is a genuine competitive advantage that is currently self-sabotaged, because twelve of them are half-English.

**Decision: ship four languages, complete.** Bulgarian, English, German, and one of Romanian/Greek (nearest markets, highest realistic inbound). Remove the other ten until they are translated to 100 %, including the place content. **A complete site in four languages is a premium product. A half-translated site in fourteen is a broken one, fourteen times over.**

The switcher is not a modal. It is in the map's edge, and the choice is remembered forever. `/` negotiates on `Accept-Language`.

---

# PART EIGHT — THE EXPLORATION LOOP

The audit's answer to "exploration stops" was *build index pages*. That is a directory, and a directory is where exploration goes to become browsing.

**The correct loop has four states and the visitor is always in one of them:**

```
        ┌──────────────────────────────────────────────┐
        │                                              │
    DESCEND ──▶ WITNESS ──▶ LOOK THROUGH ──▶ THE NEXT ─┘
   (arrival)   (a place)   (Guardian Sight)  (one link,
        │                       │            never a grid)
        │                       ▼
        └────────────── THE MAP ◀── (a new point lights)
                     (where you've been,
                      what remains dark)
```

Four rules that make it never end:

**1. Every witness ends with exactly one next witness — never a grid.**
A grid is a decision. A decision is friction. One well-argued next step is an invitation. This is the *Wikipedia rabbit-hole* mechanic and it is the most powerful exploration pattern ever built, and it works precisely because it is a chain, not a menu.

**2. Every completed witness lights the map.**
Progress is visible, permanent within the session, and pleasurable. The visitor is *building* something by reading.

**3. The map always shows more darkness than light.**
There is always visibly more. This is Zelda's core loop: a silhouette on the horizon you cannot reach yet. Sealed Domains are not a content gap — **they are the horizon.**

**4. The end of the chain is not the end.**
The last witness hands you the Covenant. The Covenant hands you back the map. The map shows you what is still dark. **The loop closes and immediately reopens.**

---

# PART NINE — QUEST DESIGN WITHOUT CHILDISHNESS

Everything that makes a quest feel juvenile is a **reward-system artefact**: badges, XP bars, confetti, percentage-complete rings, streaks, "Level 3!". They are childish because they reward *activity* rather than *understanding*.

Adult questing rewards three things instead:

**Sight.** You are given a way of seeing that you did not have before, and you keep it. This is the most sophisticated reward mechanic in games (Metroid, Zelda, *Return of the Obra Dinn*) and it is exactly what Guardian Sight already is. It requires no points.

**Knowledge that changes what you see.** After you learn what happened at Madara, the *first* image on the homepage means something different. Nothing on screen changed. **The visitor changed.** This is the highest form of progression and it costs nothing to build — it only requires that the content be sequenced.

**Custody.** You are not given a score. You are given something to keep, and an implication that it now depends on you. The Covenant is a *duty*, not an achievement. Duties feel adult. Achievements feel like school.

**Progression before install, concretely:**
The website *is* the Cave Domain — the pre-sequel gateway that the product's own mythology already defines as "where the Keeper first awakens." The visitor who completes the site has genuinely completed the first checkpoint: they have descended, they have seen through, they have been inscribed. **When the app opens, they don't start at zero. They start as someone who was already here.** That is not a marketing promise. It is a design commitment that both products must honour.

---

# PART TEN — WHAT WOULD BE UNIQUE TO ONLY THIS

Five things nobody else can copy, because they come from this specific country and this specific story:

**1. The Threshold frame.** Every image shot through an opening. Recognisable at thumbnail size with the logo removed.

**2. The alphabet as typography.** Old Bulgarian uncial as the display voice. No other nation on earth can use this. It is free, it is unused, and it is the most ownable asset in the project.

**3. The 681 axis.** A single year that the visitor physically crosses, felt as a change in light, sound and colour temperature. "Before the Name / After the Name" is a structural idea no tourism site has, and it is already written into the data model.

**4. The Memory Map that lights as you learn.** Navigation, progress record, and content strategy in one object — and it makes our content scarcity into narrative tension.

**5. The voices.** A held polyphonic note, used exactly twice. The sound of a name being carried by human throats, in a product about a name being carried by human beings.

Any one of these would differentiate the site. Together they constitute a world.

---

# PART ELEVEN — THE MASTER PLAN

**Twenty transformational changes, in order of consequence.**

| # | Change | Why it is transformational |
|---|---|---|
| **1** | **Commission original photography under the Threshold Rule** — 8 locations, dawn/dusk only, a human in frame | Without this nothing else can be true. This is the product. |
| **2** | **Rebuild the homepage as one continuous descent**, not a stack of sections | Changes what kind of thing this *is* in the first ten seconds |
| **3** | **Delete the nav bar. Ship the Memory Map as the entire navigation** | Removes the marketing-page signal; makes navigating an act of collecting |
| **4** | **Make the map light as you learn** | Turns content scarcity into narrative tension; creates progression before install |
| **5** | **Give Guardian Sight in the first 45 seconds, as a capability, not a section** | The visitor uses the product's central verb before reading a single feature |
| **6** | **Replace "four Domains" with "four pieces of evidence"** — one open, three visibly sealed | Turns a content gap into a horizon; turns a grid into an argument |
| **7** | **Replace the download band with the Covenant** — inscription, not signup | Fixes the single most damaging screen and creates the share mechanic |
| **8** | **Adopt Old Bulgarian uncial as the display voice** | The most ownable, cheapest, most defensible differentiator available |
| **9** | **Retire gold-on-black. Build the palette from the photographs.** Gold appears once, for the Master Key | Removes the most exhausted premium cliché in the industry |
| **10** | **Restructure places as Witnesses, ending in exactly one next witness** | Creates the infinite loop the audit correctly identified as missing |
| **11** | **Add sound: field recordings, offered once, remembered** | Doubles emotional bandwidth; almost no competitor does this well |
| **12** | **Delete Features, How It Works, Journey, Timeline-as-section, the Gallery, Nearby, and the Route Preview** | Seven sections removed. The site gets better by subtraction. |
| **13** | **Make 681 a threshold the visitor crosses**, felt as light and sound | Structural storytelling nobody else in the category has |
| **14** | **Ship four complete languages instead of fourteen broken ones** | A complete product in four beats a broken one in fourteen |
| **15** | **Move Partners to its own page with its own sober tone** | Ends the genre collision; serves both audiences properly |
| **16** | **Put a human being on screen in the first minute** — a named Bulgarian who has stood in these places | The story is about people. Currently there are none. |
| **17** | **Kill every timer. All reveal is scroll-driven or immediate.** | Returns agency; fixes perceived performance at the root |
| **18** | **Kill all ambient decoration.** Only light, dust, water, breath, wind | Restraint is the luxury signal; five effects read as cheap |
| **19** | **Practical information behind one deliberate action at the end of a place** | Desire first, logistics last — never interleaved |
| **20** | **Fix the correctness defects from the audit in one maintenance sprint** and never discuss them in a design review | They matter. They are not strategy. Contain them. |

---

# PART TWELVE — PHASES

### **Phase 1 — Perception (4–6 weeks)**
*Goal: a visitor's first ten seconds change completely, before any architecture is rebuilt.*

- Photography commission signed and shot (Prohodna ×3 conditions, Madara, one monastery interior, Rose Valley, Belogradchik, Black Sea, one pass)
- Homepage Movements I–IV live: descent, Prohodna, the hold, the question
- Guardian Sight in the hero, press-and-hold, on real photography
- Every "draft," "placeholder," "See README" and "Coming soon" removed
- The Covenant replaces the disabled store buttons
- All timers deleted; reveal becomes scroll-driven
- All ambient decoration deleted (stars, motes, cursor lens, globe)
- Audit's correctness defects fixed in one sweep

**After Phase 1:** the site no longer reads as an unfinished template. Trust and First Impression move more in these six weeks than in the following six months.

### **Phase 2 — Architecture (6–10 weeks)**
*Goal: exploration never ends.*

- Memory Map built and made the navigation
- Map lighting mechanic wired to visited witnesses
- Nav bar, hamburger, footer link farm deleted
- Four Evidence thresholds; three visibly sealed
- Prohodna rebuilt as the Witness template
- One-next-witness chain implemented (needs 3–4 more witnesses written and shot)
- Partners moved to its own page; About/FAQ page created
- Language reduced to four complete locales
- Features / How It Works / Journey / Timeline sections deleted

**After Phase 2:** it is a world with a loop, not a page with sections.

### **Phase 3 — Premium (4–6 weeks)**
*Goal: it feels expensive in the hand.*

- Old Bulgarian uncial commissioned or licensed; type system rebuilt
- Palette rebuilt from the photography; gold reduced to one appearance
- Sound design: field recordings, the two vocal moments, one honest control
- Transitions become camera moves through the threshold you selected
- The 681 crossing: light, colour temperature, sound
- The held moment on every page
- Accessibility rebuilt properly *within the new system* — focus, contrast, targets, reduced-motion parity for every new effect

**After Phase 3:** it is competitive with the best tourism work in Europe.

### **Phase 4 — Award (4–8 weeks)**
*Goal: something a jury has not seen before.*

- Guardian Sight retained site-wide, on every image
- The Covenant inscription artefact — name in uncial, generated in-browser, keepable
- Sealed Domain reveals: real, staged unsealing events, not "coming soon"
- The witness chain deepened to 8–12 places
- Reduced-motion and sound-off experiences authored as *first-class alternates*, not degradations — juries increasingly check this and almost nobody does it well
- A single impossible thing: one moment that makes people send the link to someone else. Candidate: at the Covenant, the two columns of light in Prohodna slowly resolve into the shape they actually make from above — the reason the openings are called the Eyes of God — and the visitor realises the site has been looking back at them the entire time.

---

# THE FINAL QUESTION

## *"If this were submitted to Awwwards after your redesign — would you personally vote Site of the Day?"*

**After Phase 3: yes, I would vote for it.** The Threshold photographic rule, the alphabet as typography, the Memory Map that lights as you learn, and a homepage that is one descent rather than a stack of sections — that is a coherent world, and coherent worlds win. It would sit comfortably beside the best travel work of the year.

**After Phase 4: I would argue for it in the jury room**, which is different and rarer. The Guardian Sight-as-medium and the Covenant inscription are things I have not seen, and juries reward the unseen far more than the polished.

**But I would vote no if any of the following were true — and right now all three are:**

**1. The photography is licensed rather than authored.**
A jury identifies stock in under one second, and the moment they do, everything else reads as decoration over a template. Eight authored images beat four hundred licensed ones, and there is no budget shortcut around this. **If the photography commission does not happen, none of the rest is worth building.** This is the whole risk of the project in one sentence.

**2. It stays a beautiful shell around a product that doesn't exist.**
Right now the app is unbuilt, one place is written, three Domains are empty. Phase 1–4 could produce a gorgeous site with nothing behind it — and that is the most seductive failure mode available to a team with taste. **A world that ends after four minutes is a demo.** The Covenant is a promise; if the app never opens, the site becomes a monument to something that didn't happen. Every phase above should be gated on the app making equivalent progress.

**3. We build for the jury instead of for the visitor.**
An Awwwards SOTD is worth roughly one week of traffic and a badge. **A Bulgarian tourism experience that makes fifty thousand people decide to visit a cave in Lukovit is worth immeasurably more**, and the two goals overlap by about eighty percent — but not completely. Wherever they diverge, choose the visitor. If a jury-pleasing effect makes the descent slower or the question quieter, cut it and lose the award.

**And the honest self-challenge, since you asked for one:**

The descent is my strongest idea and also my riskiest. Long cinematic scroll-jacked openings are a known Awwwards trope and a known usability failure — they punish returning visitors, they are hostile on slow connections, and half of them get abandoned before the payoff. **If the descent cannot be made skippable, instantly scrubbable, fully usable at 3G, and complete in under twenty seconds of real time, it must be cut** — and the site should open *already inside Prohodna*, looking up. That version is less spectacular and probably more effective. I would prototype both and let real visitors decide, not the design team, and not me.

The writing on this project is already good enough to win. **Go and photograph the country it is about — and finish the app it promises.** Everything else here is craft, and craft is the easy part.
