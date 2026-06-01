import { DEFAULT_LANG, SUPPORTED_LANGS, type Lang } from "../i18n";
import { geoToMap } from "../utils/geoToMap";

export type PageStatus = "draft" | "ready";
export type PlaceType = "hero" | "standard" | "demo";
export type Difficulty = "easy" | "moderate" | "hard";

export interface LocalizedSeoCopy {
  title: string;
  subtitle: string;
  shortDescription: string;
  tourismSummary: string;
  storyTeaser: string;
  historySummary: string;
  practicalInfo: string;
  bestSeason: string;
  seoTitle: string;
  seoDescription: string;
  faq: Array<{ q: string; a: string }>;
}

export type DomainEpoch = "before" | "after";
export type DomainMasterKey = "spirit" | "soul" | "body" | "earth" | "gateway";

export interface SeoDomain {
  id: string;
  slug: string;
  routeIds: string[];
  status: PageStatus;
  coordinates: { lat: number; lng: number };
  images: string[];
  appDeepLink: string;
  translations: Partial<Record<Lang, LocalizedSeoCopy>>;
  /** Which side of 681 CE this domain primarily represents */
  epoch: DomainEpoch;
  /** Symbolic axis: Дух / Душа / Тяло / Земя */
  masterKey: DomainMasterKey;
  /** SVG path (viewBox 0 0 800 500) for the region overlay + accent hex tint */
  mapRegion?: { path: string; accent: string };
}

export interface SeoRoute {
  id: string;
  domainId: string;
  slug: string;
  status: PageStatus;
  placeIds: string[];
  translations: Partial<Record<Lang, Pick<LocalizedSeoCopy, "title" | "subtitle" | "shortDescription">>>;
}

export interface SeoPlace {
  id: string;
  slug: string;
  domainId: string;
  routeId: string;
  type: PlaceType;
  status: PageStatus;
  coordinates: { lat: number; lng: number };
  duration: string;
  localizedDuration?: Partial<Record<Lang, string>>;
  difficulty: Difficulty;
  childFriendly: boolean;
  images: string[];
  videoUrl?: string;
  audioUrl?: string;
  nearbyPlaces: string[];
  previousPlace?: string;
  nextPlace?: string;
  appDeepLink: string;
  translations: Partial<Record<Lang, LocalizedSeoCopy>>;
  /** Which side of 681 CE this place primarily belongs to */
  epoch: DomainEpoch;
  /** Normalized 0..1 position on the Bulgaria Living Map SVG (viewBox 800×500) */
  map?: { x: number; y: number };
  /** Guardian Sight interactive reveal — path to overlay art in public/media/ */
  guardianSight?: { overlayImage: string };
}

export const SITE_ORIGIN = "https://unlockingbulgaria.com";
export const SEO_PAGE_IMAGE = `${SITE_ORIGIN}/og-image.png`;

// Domain IDs mirror the app canon: 4 main Master Key Domains + Cave gateway.
export const STONE_DOMAIN_ID = "region-1-earth-domain";
export const SEA_DOMAIN_ID = "region-2-sea-gate";
export const DANUBE_DOMAIN_ID = "region-3-danube-domain";
export const GOLDEN_CROWN_DOMAIN_ID = "region-4-mountain-region";
export const CAVE_DOMAIN_ID = "region-5-cave-domain";

export const SEA_ROUTE_ID = "route-3-1";
export const CAVE_DEMO_ROUTE_ID = "route-cave-prohodna-gateway";

const commonFaqBg = [
  {
    q: "Трябва ли ми приложението, за да посетя мястото?",
    a: "Не. Страницата дава основна туристическа и практическа информация. Приложението добавя Поглед на Пазителя, Артефакти, Реликви, прогрес и пълната кинематографична история.",
  },
  {
    q: "Подходящо ли е за семейства?",
    a: "Да, публичният маршрут е подходящ за планиране на семейно посещение. В приложението преживяването може да се следва с по-спокойно темпо и ясни стъпки.",
  },
];

const commonFaqEn = [
  {
    q: "Do I need the app to visit this place?",
    a: "No. This page gives core tourism and practical information. The app adds Guardian Sight, Artifacts, Relics, progress, and the full cinematic story.",
  },
  {
    q: "Is it family-friendly?",
    a: "Yes, the public route is suitable for planning a family visit. In the app, the experience can be followed at a calmer pace with clear steps.",
  },
];

// Domain region SVG paths — viewBox 0 0 800 500
// Approximate geographic zones; replace with precise GIS paths when available.
// TODO: replace rough polygons with authored per-region paths for production.
const REGION_NW    = "M 0,33 L 320,18 L 308,225 L 0,225 Z";
const REGION_NC    = "M 320,18 L 658,33 L 648,225 L 308,225 Z";
const REGION_COAST = "M 658,33 L 723,67 L 787,117 Q 793,260 788,300 L 783,383 L 723,430 L 690,450 L 646,395 L 648,225 Z";
const REGION_SC    = "M 165,225 L 648,225 L 648,395 L 490,470 L 310,462 L 155,380 Z";
const REGION_SW    = "M 0,305 L 205,295 L 285,432 L 172,455 L 26,450 L 0,380 Z";
const REGION_W     = "M 0,225 L 210,225 L 220,305 L 0,305 Z";

export const seoDomains: SeoDomain[] = [
  // Index 0 — Stone Domain / Earth Master Key
  {
    id: STONE_DOMAIN_ID,
    slug: "stone-domain",
    routeIds: [],
    status: "draft",
    coordinates: { lat: 43.8, lng: 24.0 },
    images: [SEO_PAGE_IMAGE],
    appDeepLink: "unlockingbulgaria://domains/region-1-earth-domain",
    epoch: "before",
    masterKey: "earth",
    mapRegion: { path: REGION_NW, accent: "#1e3a5f" },
    translations: {},
  },
  // Index 1 — The Sea Gate / Soul Master Key
  {
    id: SEA_DOMAIN_ID,
    slug: "sea-gate",
    routeIds: [SEA_ROUTE_ID],
    status: "draft",
    coordinates: { lat: 43.1, lng: 25.6 },
    images: [SEO_PAGE_IMAGE],
    appDeepLink: "unlockingbulgaria://domains/region-2-sea-gate",
    epoch: "after",
    masterKey: "soul",
    mapRegion: { path: REGION_COAST, accent: "#1e3a5f" },
    translations: {
      bg: {
        title: "Морски Предел",
        subtitle: "Пределът на Душата, в който морето пази Живата Искра.",
        shortDescription: "Морският Предел е един от четирите основни Предела на Главните Ключове: 4 маршрута, 16 контролни точки, 4 реликви, Печат и Главен Ключ.",
        tourismSummary: "Морският Предел събира реални места по Черноморието, които могат да бъдат посетени самостоятелно, а в приложението се превръщат в маршрут на памет, движение и смелост.",
        storyTeaser: "В публичната версия виждаш прага. В приложението морето започва да отговаря с улики, Артефакти, Реликви и сцени на Погледа на Пазителя.",
        historySummary: "От праисторически некрополи и носове до фарове, крепости и крайбрежни обети, брегът пази пластове памет, събрани около Живата Искра.",
        practicalInfo: "Планирай Предела като серия от маршрути. Първият маршрут следва северния бряг и завършва при Калиакра като Route Finale.",
        bestSeason: "Късна пролет, ранно лято и ранна есен",
        seoTitle: "Морски Предел | The Sea Gate в Unlocking Bulgaria",
        seoDescription: "Открий Морския Предел: Пределът на Душата и Живата Искра, с маршрути по Черноморието и първи северен път към Калиакра.",
        faq: commonFaqBg,
      },
      en: {
        title: "The Sea Gate",
        subtitle: "The Soul Domain where the sea keeps the Living Spark.",
        shortDescription: "The Sea Gate is one of the four main Master Key Domains: 4 routes, 16 checkpoints, 4 relics, a Seal, and one Master Key.",
        tourismSummary: "The Sea Gate brings together real Black Sea places that can be visited independently and become a route of memory, movement, and courage inside the app.",
        storyTeaser: "On the public site, you see the threshold. In the app, the sea begins to answer with clues, Artifacts, Relics, and Guardian Sight scenes.",
        historySummary: "From prehistoric necropolises and capes to lighthouses, fortresses, and coastal vows, the shore preserves layers of memory gathered around the Living Spark.",
        practicalInfo: "Plan the Domain as a sequence of routes. The first route follows the northern shore and closes at Kaliakra as the Route Finale.",
        bestSeason: "Late spring, early summer, and early autumn",
        seoTitle: "The Sea Gate | Black Sea Master Key Domain",
        seoDescription: "Explore The Sea Gate: the Soul Domain and Living Spark of Unlocking Bulgaria, with Black Sea routes and a northern path toward Kaliakra.",
        faq: commonFaqEn,
      },
    },
  },
  // Index 2 — Danube Domain / Spirit Master Key
  {
    id: DANUBE_DOMAIN_ID,
    slug: "danube-domain",
    routeIds: [],
    status: "draft",
    coordinates: { lat: 42.2, lng: 25.4 },
    images: [SEO_PAGE_IMAGE],
    appDeepLink: "unlockingbulgaria://domains/region-3-danube-domain",
    epoch: "after",
    masterKey: "spirit",
    mapRegion: { path: REGION_SC, accent: "#1e3a5f" },
    translations: {},
  },
  // Index 3 — Golden Crown / Body Master Key
  {
    id: GOLDEN_CROWN_DOMAIN_ID,
    slug: "golden-crown",
    routeIds: [],
    status: "draft",
    coordinates: { lat: 41.6, lng: 24.7 },
    images: [SEO_PAGE_IMAGE],
    appDeepLink: "unlockingbulgaria://domains/region-4-mountain-region",
    epoch: "after",
    masterKey: "body",
    mapRegion: { path: REGION_SW, accent: "#4a2010" },
    translations: {},
  },
  // Cave pre-sequel gateway — not required for Living Covenant.
  {
    id: CAVE_DOMAIN_ID,
    slug: "cave-domain",
    routeIds: [CAVE_DEMO_ROUTE_ID],
    status: "draft",
    coordinates: { lat: 42.7, lng: 23.3 },
    images: [SEO_PAGE_IMAGE],
    appDeepLink: "unlockingbulgaria://domains/region-5-cave-domain",
    epoch: "before",
    masterKey: "gateway",
    mapRegion: { path: REGION_W, accent: "#4a2010" },
    translations: {},
  },
];

export const seoRoutes: SeoRoute[] = [
  {
    id: SEA_ROUTE_ID,
    domainId: SEA_DOMAIN_ID,
    slug: "sea-coast-route",
    status: "draft",
    placeIds: [
      "durankulak",
      "shabla",
      "tyulenovo",
      "kaliakra",
    ],
    translations: {
      bg: {
        title: "Пристанищата на паметта",
        subtitle: "Първи маршрут на Морския Предел: Дуранкулак, Шабла, Тюленово, Калиакра.",
        shortDescription: "Четири контролни точки по северния бряг. В приложението те отключват четири Артефакта и една Реликва на Маршрута.",
      },
      en: {
        title: "Harbors of Memory",
        subtitle: "The Sea Gate Route 1: Durankulak, Shabla, Tyulenovo, Kaliakra.",
        shortDescription: "Four checkpoints on the northern shore. In the app, they unlock four Artifacts and one Route Relic.",
      },
    },
  },
  {
    id: CAVE_DEMO_ROUTE_ID,
    domainId: CAVE_DOMAIN_ID,
    slug: "prohodna-gateway-route",
    status: "draft",
    placeIds: ["prohodna-cave"],
    translations: {
      bg: {
        title: "Пещерен портал",
        subtitle: "Първата среща с Пещерния Предел.",
        shortDescription: "Проходна е flagship героична контролна точка и pre-sequel праг към основния път на Пазителя.",
      },
      en: {
        title: "Cave Gateway",
        subtitle: "The first encounter with the Cave Domain.",
        shortDescription: "Prohodna is the flagship hero checkpoint and pre-sequel threshold before the Keeper's main path.",
      },
    },
  },
];

const seaPlaces = [
  ["durankulak", "Дуранкулак", "Durankulak", 43.687, 28.545, "2-3 ч.", "2-3 hr"],
  ["shabla", "Шабла", "Shabla", 43.539, 28.535, "1-2 ч.", "1-2 hr"],
  ["tyulenovo", "Тюленово", "Tyulenovo", 43.49, 28.586, "1-2 ч.", "1-2 hr"],
  ["kaliakra", "Калиакра", "Kaliakra", 43.362, 28.465, "2 ч.", "2 hr"],
  ["balchik", "Балчик", "Balchik", 43.407, 28.162, "2-4 ч.", "2-4 hr"],
  ["varna", "Варна", "Varna", 43.214, 27.914, "половин ден", "Half day"],
  ["pobiti-kamani", "Побити Камъни", "Pobiti Kamani", 43.228, 27.706, "1-2 ч.", "1-2 hr"],
  ["byala", "Бяла", "Byala", 42.874, 27.888, "1-2 ч.", "1-2 hr"],
  ["cape-emine", "Нос Емине", "Cape Emine", 42.704, 27.9, "2-3 ч.", "2-3 hr"],
  ["nessebar", "Несебър", "Nessebar", 42.659, 27.736, "половин ден", "Half day"],
  ["pomorie", "Поморие", "Pomorie", 42.563, 27.64, "2-3 ч.", "2-3 hr"],
  ["sozopol", "Созопол", "Sozopol", 42.424, 27.695, "половин ден", "Half day"],
  ["begliktash", "Бегликташ", "Begliktash", 42.311, 27.733, "1-2 ч.", "1-2 hr"],
  ["ropotamo", "Ропотамо", "Ropotamo", 42.308, 27.748, "2-3 ч.", "2-3 hr"],
  ["rusokastro", "Русокастро", "Rusokastro", 42.459, 27.153, "1-2 ч.", "1-2 hr"],
] as const;

function makeSeaPlace(index: number, row: (typeof seaPlaces)[number]): SeoPlace {
  const [id, bgName, enName, lat, lng, durationBg, durationEn] = row;
  const previousPlace = seaPlaces[index - 1]?.[0];
  const nextPlace = seaPlaces[index + 1]?.[0];
  return {
    id,
    slug: id,
    domainId: SEA_DOMAIN_ID,
    routeId: SEA_ROUTE_ID,
    type: index === 0 || id === "kaliakra" || id === "sozopol" ? "hero" : "standard",
    status: "draft",
    coordinates: { lat, lng },
    duration: durationEn,
    localizedDuration: { bg: durationBg, en: durationEn },
    difficulty: id === "cape-emine" || id === "ropotamo" ? "moderate" : "easy",
    childFriendly: id !== "cape-emine",
    images: [SEO_PAGE_IMAGE],
    audioUrl: `unlockingbulgaria://audio/${id}`,
    nearbyPlaces: [previousPlace, nextPlace].filter(Boolean) as string[],
    previousPlace,
    nextPlace,
    appDeepLink: `unlockingbulgaria://places/${id}`,
    epoch: "before",
    map: geoToMap(lat, lng),
    translations: {
      bg: {
        title: bgName,
        subtitle: "Контролна точка от първия маршрут на Морския Предел.",
        shortDescription: `${bgName} е публична страница за планиране на посещение и вход към бъдещото преживяване в Unlocking Bulgaria.`,
        tourismSummary: `Посети ${bgName} като реално място по Черноморието и го използвай като отправна точка за по-дълбок културен маршрут.`,
        storyTeaser: `В приложението ${bgName} отключва скрит разказ, улика, Артефакт и връзка към Реликвата на маршрута.`,
        historySummary: `${bgName} е част от крайбрежната памет на България, където природа, древни пътища, пристанища и местни легенди се преплитат.`,
        practicalInfo: `Планирай ${durationBg} на място. Провери сезона, достъпа и времето предварително, особено при носове, резервати и открити крайбрежни зони.`,
        bestSeason: "Късна пролет, лято и ранна есен",
        seoTitle: `${bgName} | Място от Морския Предел`,
        seoDescription: `Планирай посещение на ${bgName} и виж как мястото се свързва с Морския Предел в Unlocking Bulgaria.`,
        faq: commonFaqBg,
      },
      en: {
        title: enName,
        subtitle: "A checkpoint in The Sea Gate's first route.",
        shortDescription: `${enName} is a public planning page and an entry point into the future Unlocking Bulgaria experience.`,
        tourismSummary: `Visit ${enName} as a real Black Sea place and use it as a starting point for deeper cultural exploration.`,
        storyTeaser: `In the app, ${enName} unlocks a hidden story, a clue, an Artifact, and a connection to the Route Relic.`,
        historySummary: `${enName} belongs to Bulgaria's coastal memory, where nature, ancient paths, ports, and local legends meet.`,
        practicalInfo: `Plan ${durationEn} on site. Check season, access, and weather in advance, especially around capes, reserves, and exposed coastal areas.`,
        bestSeason: "Late spring, summer, and early autumn",
        seoTitle: `${enName} | The Sea Gate Checkpoint`,
        seoDescription: `Plan a visit to ${enName} and see how the place connects to The Sea Gate in Unlocking Bulgaria.`,
        faq: commonFaqEn,
      },
    },
  };
}

export const seoPlaces: SeoPlace[] = [
  ...seaPlaces.map((row, index) => makeSeaPlace(index, row)),
  {
    id: "prohodna-cave",
    slug: "prohodna-cave",
    domainId: CAVE_DOMAIN_ID,
    routeId: CAVE_DEMO_ROUTE_ID,
    type: "demo",
    status: "draft",
    coordinates: { lat: 43.173, lng: 24.071 },
    duration: "1-2 hr",
    localizedDuration: { bg: "1-2 ч.", en: "1-2 hr" },
    difficulty: "easy",
    childFriendly: true,
    images: [SEO_PAGE_IMAGE],
    audioUrl: "unlockingbulgaria://audio/prohodna-cave",
    nearbyPlaces: [],
    appDeepLink: "unlockingbulgaria://places/prohodna-cave",
    epoch: "before",
    map: geoToMap(43.173, 24.071),
    guardianSight: { overlayImage: "/media/prohodna/prohodna-overlay.png" },
    translations: {
      bg: {
        title: "Пещера Проходна",
        subtitle: "Първата героична контролна точка на Пещерния Предел.",
        shortDescription: "Проходна подготвя посетителя за Пещерния портал — pre-sequel преживяване, в което земята гледа преди Името.",
        tourismSummary: "Пещерата е разпознаваема с естествените отвори, известни като Очите на Бога, но в Unlocking Bulgaria тя е преди всичко праг към паметта на земята.",
        storyTeaser: "В приложението светлината, камъкът и отворите се превръщат в първия въпрос към Пазителя.",
        historySummary: "Проходна е част от карстовия пейзаж на Северна България и носи силна визуална памет: място, където земя, тъмнина, дъх и небе се срещат.",
        practicalInfo: "Планирай 1-2 часа. Носи удобни обувки, провери условията след дъжд и следвай обозначените подходи.",
        bestSeason: "Пролет, лято и есен",
        seoTitle: "Пещера Проходна | Пещерен Предел в Unlocking Bulgaria",
        seoDescription: "Виж Проходна като първата героична контролна точка на Пещерния Предел и pre-sequel портал към пътя на Пазителя.",
        faq: commonFaqBg,
      },
      en: {
        title: "Prohodna Cave",
        subtitle: "The first hero checkpoint of the Cave Domain.",
        shortDescription: "Prohodna prepares visitors for the Cave gateway: a pre-sequel experience where the land watches before the Name.",
        tourismSummary: "The cave is known for the natural openings called the Eyes of God, but in Unlocking Bulgaria it is first a threshold into earth memory.",
        storyTeaser: "In the app, light, stone, and the cave openings become the first question asked of the Keeper.",
        historySummary: "Prohodna belongs to the karst landscape of northern Bulgaria and carries a strong visual memory: a place where earth, darkness, breath, and sky meet.",
        practicalInfo: "Plan 1-2 hours. Wear comfortable shoes, check conditions after rain, and follow marked approaches.",
        bestSeason: "Spring, summer, and autumn",
        seoTitle: "Prohodna Cave | Cave Domain in Unlocking Bulgaria",
        seoDescription: "See Prohodna as the first hero checkpoint of the Cave Domain and the pre-sequel gateway into the Keeper's path.",
        faq: commonFaqEn,
      },
    },
  },
];

export function getLocalizedCopy<T extends { translations: Partial<Record<Lang, LocalizedSeoCopy>> }>(
  item: T,
  lang: string,
): LocalizedSeoCopy {
  const requested = SUPPORTED_LANGS.includes(lang as Lang) ? (lang as Lang) : DEFAULT_LANG;
  return item.translations[requested] ?? item.translations.en ?? item.translations.bg!;
}

export function getLocalizedRouteCopy(route: SeoRoute, lang: string) {
  const requested = SUPPORTED_LANGS.includes(lang as Lang) ? (lang as Lang) : DEFAULT_LANG;
  return route.translations[requested] ?? route.translations.en ?? route.translations.bg!;
}

export function getSeoDomain(slug: string) {
  return seoDomains.find((domain) => domain.slug === slug || domain.id === slug);
}

export function getSeoPlace(slug: string) {
  return seoPlaces.find((place) => place.slug === slug);
}

export function getSeoRoute(id: string) {
  return seoRoutes.find((route) => route.id === id);
}

export function getPlacesForRoute(routeId: string) {
  return seoPlaces.filter((place) => place.routeId === routeId);
}

export function getPublicSeoDomains() {
  return seoDomains.filter((domain) => domain.id === SEA_DOMAIN_ID);
}

export function getPublicSeoPlaces() {
  return seoPlaces;
}

export function getLocalizedPath(lang: string, path: string) {
  return `/${lang}${path}`;
}

export function getSeoPagePaths() {
  return [
    ...getPublicSeoDomains().map((domain) => ({ kind: "domain" as const, path: `/${domain.slug}` })),
    ...getPublicSeoPlaces().map((place) => ({ kind: "place" as const, path: `/places/${place.slug}` })),
  ];
}
