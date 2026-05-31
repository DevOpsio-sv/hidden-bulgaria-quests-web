import { SUPPORTED_LANGS, type Lang } from "../i18n";
import { getPublicSeoDomains, getPublicSeoPlaces, getSeoPagePaths, seoRoutes } from "../data/seoPages";

export interface SeoValidationIssue {
  code:
    | "missing-translation"
    | "empty-translation"
    | "unsupported-language-fallback"
    | "mismatched-page-slug"
    | "broken-localized-route";
  message: string;
}

const requiredCopyFields = [
  "title",
  "subtitle",
  "shortDescription",
  "tourismSummary",
  "storyTeaser",
  "historySummary",
  "practicalInfo",
  "bestSeason",
  "seoTitle",
  "seoDescription",
] as const;

export function validateSeoPages(): SeoValidationIssue[] {
  const issues: SeoValidationIssue[] = [];
  const supported = new Set<string>(SUPPORTED_LANGS);
  const publicDomains = getPublicSeoDomains();
  const publicPlaces = getPublicSeoPlaces();
  const placesById = new Set(publicPlaces.map((place) => place.id));
  const routesById = new Set(seoRoutes.map((route) => route.id));
  const pagePaths = getSeoPagePaths();

  for (const item of [...publicDomains, ...publicPlaces]) {
    if (!item.translations.bg) {
      issues.push({ code: "missing-translation", message: `${item.id} is missing Bulgarian source copy.` });
    }

    for (const lang of Object.keys(item.translations)) {
      if (!supported.has(lang)) {
        issues.push({ code: "unsupported-language-fallback", message: `${item.id} defines unsupported language ${lang}.` });
      }
    }

    for (const lang of ["bg", "en"] as Lang[]) {
      const copy = item.translations[lang];
      if (!copy) {
        issues.push({ code: "missing-translation", message: `${item.id} is missing ${lang} copy and will fall back.` });
        continue;
      }
      for (const field of requiredCopyFields) {
        if (!copy[field]?.trim()) {
          issues.push({ code: "empty-translation", message: `${item.id}.${lang}.${field} is empty.` });
        }
      }
    }

    for (const lang of SUPPORTED_LANGS) {
      if (!item.translations[lang]) {
        issues.push({ code: "missing-translation", message: `${item.id} is missing ${lang} copy and will use fallback content.` });
      }
    }
  }

  for (const place of publicPlaces) {
    if (place.slug !== place.id) {
      issues.push({ code: "mismatched-page-slug", message: `${place.id} has slug ${place.slug}.` });
    }
    if (!routesById.has(place.routeId)) {
      issues.push({ code: "broken-localized-route", message: `${place.id} points to missing route ${place.routeId}.` });
    }
    for (const related of [place.previousPlace, place.nextPlace, ...place.nearbyPlaces].filter(Boolean)) {
      if (!placesById.has(related as string)) {
        issues.push({ code: "broken-localized-route", message: `${place.id} points to missing place ${related}.` });
      }
    }
  }

  for (const route of seoRoutes) {
    for (const placeId of route.placeIds) {
      if (!placesById.has(placeId) && route.placeIds.some((id) => placesById.has(id))) {
        issues.push({ code: "broken-localized-route", message: `${route.id} includes missing place ${placeId}.` });
      }
    }
  }

  for (const lang of SUPPORTED_LANGS) {
    for (const page of pagePaths) {
      if (!page.path.startsWith("/")) {
        issues.push({ code: "broken-localized-route", message: `/${lang}${page.path} is not an absolute localized path.` });
      }
    }
  }

  return issues;
}
