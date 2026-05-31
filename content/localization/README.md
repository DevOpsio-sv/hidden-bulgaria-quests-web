# Content / Localization

This folder contains localization planning, translation tracking, and language-specific notes for Unlocking Bulgaria.

## Supported Languages (14)

| Code | Language | Native Name | Status |
|------|----------|-------------|--------|
| `en` | English | English | Base language |
| `bg` | Bulgarian | Български | Active |
| `de` | German | Deutsch | Active |
| `fr` | French | Français | Active |
| `es` | Spanish | Español | Active |
| `it` | Italian | Italiano | Active |
| `ro` | Romanian | Română | Active |
| `tr` | Turkish | Türkçe | Active |
| `el` | Greek | Ελληνικά | Active |
| `hu` | Hungarian | Magyar | Active |
| `zh` | Chinese | 中文 | Active |
| `ru` | Russian | Русский | Active |
| `ja` | Japanese | 日本語 | Active |
| `sr` | Serbian | Српски | Active |

## How the i18n System Works

- Translation files: `src/i18n/{lang}.json`
- Base language: English (`en.json`) — defines all keys
- Other languages: partial overrides merged with English using `deepMerge()`
- Missing keys fall back to English automatically
- Language is set by URL prefix: `/en`, `/bg`, `/de`, etc.

## Intended Contents

- Translation status tracker (which keys are translated in which languages)
- Notes on culturally sensitive content per language
- Glossary of key product terms per language (Keeper, Guardian Sight, Domain, Seal, etc.)
- Translation workflow documentation (how to add new keys)

## Adding New Translation Keys

1. Add the key to `src/i18n/en.json` first
2. Add translations to all 14 language files
3. If a translation is pending, the English fallback will show
4. Document any pending translations in this folder

## Key Product Terms Across Languages

| English | Bulgarian | Notes |
|---------|-----------|-------|
| Keeper | Пазител | Core player title — never translate freely |
| Guardian Sight | Погледът на Пазителя | AR feature name — preserve meaning |
| Domain | Домейн / Регион | Check per language for best term |
| Route | Маршрут | Check per language |
| Checkpoint | Контролна точка | Check per language |
| Relic | Реликва | Check per language |
| Seal | Печат | Check per language |

## Status

Placeholder — translation tracker to be created.
