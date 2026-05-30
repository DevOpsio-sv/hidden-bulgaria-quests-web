# Content / Domains

This folder contains structured content planning files for the six regional domains.

## The Six Domains

| Domain ID | Region | Epoch | Status |
|-----------|--------|-------|--------|
| `domain_danube_northwest` | Danube & Northwest | Before the Name | Planned |
| `domain_old_capitals` | Old Capitals (Pliska, Preslav, Tarnovo) | After the Name | Planned |
| `domain_black_sea` | Black Sea Coast | Before the Name | Planned |
| `domain_thracian_valley` | Thracian Valley | Before the Name | Planned |
| `domain_rhodope` | Rhodope Mountains | After the Name | Planned |
| `domain_sofia_west` | Sofia & Western Bulgaria | After the Name | Planned |

## Intended Contents (Per Domain)

Each domain folder should contain:
- `overview.md` — domain concept, historical context, seal description
- `routes.md` — list of three routes with route IDs
- `seal.md` — seal design brief and unlock criteria

## Naming Convention

- Domain IDs: `domain_{descriptor}` (lowercase snake_case)
- See `/docs/governance/NAMING_CONVENTIONS.md` for full convention

## Status

Placeholder — to be populated as domain content is developed.

## Notes

- Domain data currently embedded in `src/i18n/en.json` under `domains.cards`
- Structured domain content will eventually move to a CMS or data layer
- Content must follow DEC-009: no hardcoded story content in components
