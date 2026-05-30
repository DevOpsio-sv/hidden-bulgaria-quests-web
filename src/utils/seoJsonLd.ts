import type { LocalizedSeoCopy, SeoDomain, SeoPlace } from "../data/seoPages";
import { SEO_PAGE_IMAGE, SITE_ORIGIN } from "../data/seoPages";

export function placeJsonLd(place: SeoPlace | SeoDomain, copy: LocalizedSeoCopy, lang: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: copy.title,
    description: copy.seoDescription,
    image: place.images[0] ?? SEO_PAGE_IMAGE,
    url: `${SITE_ORIGIN}/${lang}${path}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: place.coordinates.lat,
      longitude: place.coordinates.lng,
    },
  };
}

export function faqJsonLd(copy: LocalizedSeoCopy) {
  if (!copy.faq.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(lang: string, items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_ORIGIN}/${lang}${item.path}`,
    })),
  };
}
