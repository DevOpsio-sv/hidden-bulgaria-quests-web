# Content / Checkpoints

This folder contains structured content planning files for individual checkpoints.

## Checkpoint Structure

Each checkpoint has:
- A **real GPS location** (latitude, longitude, radius)
- A **story moment** (historical, mythological, or natural)
- An optional **AR trigger** (Guardian Sight sequence)
- A **non-AR alternative** (required for accessibility)
- Narration audio + subtitle file (when produced)
- Collectible clue or partial artifact unlock

## Checkpoint ID Convention

`checkpoint_{location_slug}_{NNN}` — lowercase snake_case with 3-digit sequence number

### Example Checkpoint IDs
```
checkpoint_kaliakra_001
checkpoint_nessebar_001
checkpoint_pliska_001
checkpoint_tarnovo_001
checkpoint_belogradchik_001
checkpoint_orpheus_cave_001
```

The sequence number (`_001`) allows multiple checkpoints at the same location in future expansions.

## Intended Contents (Per Checkpoint)

- `{checkpoint_id}.md` — location data, story brief, AR trigger brief, accessibility note, narration brief

## Status

Placeholder — to be populated as routes and checkpoints are defined.

## Notes

- 5 checkpoints per route × 18 routes = 90 checkpoints total (at minimum)
- Every checkpoint with AR content must have a non-AR alternative (DEC-011)
- Every checkpoint with narration must have subtitle files (DEC-010)
- Checkpoint content must be structured, not hardcoded into components (DEC-009)
