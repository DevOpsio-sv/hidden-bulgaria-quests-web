import en from "./en.json";
import bg from "./bg.json";
import de from "./de.json";
import fr from "./fr.json";
import es from "./es.json";
import it from "./it.json";
import ro from "./ro.json";
import tr from "./tr.json";
import el from "./el.json";
import hu from "./hu.json";
import zh from "./zh.json";
import ru from "./ru.json";
import ja from "./ja.json";
import sr from "./sr.json";

export const SUPPORTED_LANGS = [
  "en", "bg", "de", "fr", "es", "it",
  "ro", "tr", "el", "hu", "zh", "ru", "ja", "sr",
] as const;

export type Lang = (typeof SUPPORTED_LANGS)[number];

export const DEFAULT_LANG: Lang = "en";

export const LANG_NAMES: Record<Lang, string> = {
  en: "English", bg: "Български", de: "Deutsch",
  fr: "Français", es: "Español", it: "Italiano",
  ro: "Română", tr: "Türkçe", el: "Ελληνικά",
  hu: "Magyar", zh: "中文", ru: "Русский", ja: "日本語", sr: "Српски",
};

export const LANG_LABELS: Record<Lang, string> = {
  en: "EN", bg: "БГ", de: "DE", fr: "FR", es: "ES",
  it: "IT", ro: "RO", tr: "TR", el: "ΕΛ", hu: "HU", zh: "中文",
  ru: "РУ", ja: "JA", sr: "СР",
};

export type Dict = typeof en;
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object
    ? T[K] extends unknown[]
      ? T[K]
      : DeepPartial<T[K]>
    : T[K];
};

const allDicts: Record<Lang, DeepPartial<Dict>> = {
  en, bg, de, fr, es, it, ro, tr, el, hu, zh, ru, ja, sr,
};

function deepMerge<T extends object>(base: T, override: DeepPartial<T>): T {
  const result = { ...base } as T;
  for (const key in override) {
    const k = key as keyof T;
    const ov = override[k];
    const bv = base[k];
    if (ov !== undefined && ov !== null) {
      if (
        typeof bv === "object" && !Array.isArray(bv) &&
        typeof ov === "object" && !Array.isArray(ov)
      ) {
        result[k] = deepMerge(bv as object, ov as object) as T[keyof T];
      } else {
        result[k] = ov as T[keyof T];
      }
    }
  }
  return result;
}

export function getDict(lang: string): Dict {
  const l = SUPPORTED_LANGS.includes(lang as Lang) ? (lang as Lang) : DEFAULT_LANG;
  if (l === "en") return en;
  return deepMerge<Dict>(en, allDicts[l] as Partial<Dict>);
}

export function isValidLang(lang: string): lang is Lang {
  return SUPPORTED_LANGS.includes(lang as Lang);
}
