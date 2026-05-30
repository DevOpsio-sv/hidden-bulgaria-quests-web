import { DEFAULT_LANG, SUPPORTED_LANGS, type Lang } from "../i18n";

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

export interface SeoDomain {
  id: string;
  slug: string;
  routeIds: string[];
  status: PageStatus;
  coordinates: { lat: number; lng: number };
  images: string[];
  appDeepLink: string;
  translations: Partial<Record<Lang, LocalizedSeoCopy>>;
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
}

export const SITE_ORIGIN = "https://unlockingbulgaria.com";
export const SEO_PAGE_IMAGE = `${SITE_ORIGIN}/favicon.svg`;
export const SEA_DOMAIN_ID = "sea-domain";
export const SEA_ROUTE_ID = "sea-coast-route";
export const DEMO_ROUTE_ID = "demo-route";

const commonFaqBg = [
  {
    q: "Трябва ли ми приложението, за да посетя мястото?",
    a: "Не. Страницата дава основна туристическа и практическа информация. Приложението добавя куестове, AR сцени, реликви, прогрес и пълната кинематографична история.",
  },
  {
    q: "Подходящо ли е за семейства?",
    a: "Да, публичният маршрут е подходящ за планиране на семейно посещение. В приложението преживяването може да се следва с по-спокойно темпо и ясни стъпки.",
  },
];

const commonFaqEn = [
  {
    q: "Do I need the app to visit this place?",
    a: "No. This page gives core tourism and practical information. The app adds quests, AR scenes, relics, progress, and the full cinematic story.",
  },
  {
    q: "Is it family-friendly?",
    a: "Yes, the public route is suitable for planning a family visit. In the app, the experience can be followed at a calmer pace with clear steps.",
  },
];

export const seoDomains: SeoDomain[] = [
  {
    id: SEA_DOMAIN_ID,
    slug: "sea-domain",
    routeIds: [SEA_ROUTE_ID],
    status: "draft",
    coordinates: { lat: 42.65, lng: 27.9 },
    images: [SEO_PAGE_IMAGE],
    appDeepLink: "unlockingbulgaria://domains/sea-domain",
    translations: {
      bg: {
        title: "Морски Предел",
        subtitle: "Домейнът, в който морето пази най-старите врати към България.",
        shortDescription: "Северното и южното Черноморие са подредени като кинематографичен маршрут от езера, носове, антични градове, светилища и резервати.",
        tourismSummary: "Морският Предел събира реални места по Черноморието, които могат да бъдат посетени самостоятелно или като бъдещ маршрут в Unlocking Bulgaria.",
        storyTeaser: "В публичната версия виждаш пътя. В приложението морето започва да отговаря с улики, реликви и скрити сцени.",
        historySummary: "От праисторически некрополи и тракийски светилища до гръцки колонии, римски крепости и средновековни пристанища, брегът пази пластове памет.",
        practicalInfo: "Планирай домейна като серия от отделни пътувания. Някои места са градски и лесни, други изискват автомобил, сезонно съобразяване и внимание към защитени територии.",
        bestSeason: "Късна пролет, ранно лято и ранна есен",
        seoTitle: "Морски Предел | Черноморски маршрут в Unlocking Bulgaria",
        seoDescription: "Открий Морския Предел: Черноморски домейн с места като Дуранкулак, Шабла, Калиакра, Несебър, Созопол, Бегликташ и Ропотамо.",
        faq: commonFaqBg,
      },
      en: {
        title: "Sea Domain",
        subtitle: "The domain where the sea guards Bulgaria's oldest gates.",
        shortDescription: "The northern and southern Black Sea coast become a cinematic route of lakes, capes, ancient towns, sanctuaries, and reserves.",
        tourismSummary: "The Sea Domain brings together real places along the Black Sea that can be visited independently or later followed as an Unlocking Bulgaria route.",
        storyTeaser: "On the public site, you see the path. In the app, the sea begins to answer with clues, relics, and hidden scenes.",
        historySummary: "From prehistoric necropolises and Thracian sanctuaries to Greek colonies, Roman forts, and medieval ports, the coast preserves layers of memory.",
        practicalInfo: "Plan the domain as a sequence of separate trips. Some places are urban and easy, while others require a car, seasonal planning, and care around protected areas.",
        bestSeason: "Late spring, early summer, and early autumn",
        seoTitle: "Sea Domain | Black Sea Route in Unlocking Bulgaria",
        seoDescription: "Explore the Sea Domain: a Black Sea route with Durankulak, Shabla, Kaliakra, Nessebar, Sozopol, Begliktash, Ropotamo, and more.",
        faq: commonFaqEn,
      },
    },
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
      "balchik",
      "varna",
      "pobiti-kamani",
      "byala",
      "cape-emine",
      "nessebar",
      "pomorie",
      "sozopol",
      "begliktash",
      "ropotamo",
      "rusokastro",
    ],
    translations: {
      bg: {
        title: "Маршрут на Морския Предел",
        subtitle: "От северните езера до южните светилища.",
        shortDescription: "Чернова на последователността. Финалната история и реликви остават запазени за приложението.",
      },
      en: {
        title: "Sea Domain Route",
        subtitle: "From northern lakes to southern sanctuaries.",
        shortDescription: "Draft route order. The final story and relic logic stay reserved for the app.",
      },
    },
  },
  {
    id: DEMO_ROUTE_ID,
    domainId: "crossroads-domain",
    slug: "demo-route",
    status: "draft",
    placeIds: ["prohodna-cave"],
    translations: {
      bg: {
        title: "Демо маршрут",
        subtitle: "Героичен пример извън Морския Предел.",
        shortDescription: "Проходна показва как може да изглежда публична страница за силна героична контролна точка.",
      },
      en: {
        title: "Demo Route",
        subtitle: "A hero example outside the Sea Domain.",
        shortDescription: "Prohodna shows how a public page can frame a strong hero checkpoint.",
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
    translations: {
      bg: {
        title: bgName,
        subtitle: "Контролна точка от черновия маршрут на Морския Предел.",
        shortDescription: `${bgName} е публична страница за планиране на посещение и вход към бъдещото преживяване в Unlocking Bulgaria.`,
        tourismSummary: `Посети ${bgName} като реално място по Черноморието и го използвай като отправна точка за по-дълбок културен маршрут.`,
        storyTeaser: `В приложението ${bgName} ще отключи скрит разказ, улика и връзка към следващата точка от Морския Предел.`,
        historySummary: `${bgName} е част от крайбрежната памет на България, където природа, древни пътища, пристанища и местни легенди се преплитат.`,
        practicalInfo: `Планирай ${durationBg} на място. Провери сезона, достъпа и времето предварително, особено при носове, резервати и открити крайбрежни зони.`,
        bestSeason: "Късна пролет, лято и ранна есен",
        seoTitle: `${bgName} | Място от Морския Предел`,
        seoDescription: `Планирай посещение на ${bgName} и виж как мястото се свързва с Морския Предел в Unlocking Bulgaria.`,
        faq: commonFaqBg,
      },
      en: {
        title: enName,
        subtitle: "A checkpoint in the draft Sea Domain route.",
        shortDescription: `${enName} is a public planning page and an entry point into the future Unlocking Bulgaria experience.`,
        tourismSummary: `Visit ${enName} as a real Black Sea place and use it as a starting point for deeper cultural exploration.`,
        storyTeaser: `In the app, ${enName} will unlock a hidden story, a clue, and a connection to the next Sea Domain checkpoint.`,
        historySummary: `${enName} belongs to Bulgaria's coastal memory, where nature, ancient paths, ports, and local legends meet.`,
        practicalInfo: `Plan ${durationEn} on site. Check season, access, and weather in advance, especially around capes, reserves, and exposed coastal areas.`,
        bestSeason: "Late spring, summer, and early autumn",
        seoTitle: `${enName} | Sea Domain Place`,
        seoDescription: `Plan a visit to ${enName} and see how the place connects to the Sea Domain in Unlocking Bulgaria.`,
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
    domainId: "crossroads-domain",
    routeId: DEMO_ROUTE_ID,
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
    translations: {
      bg: {
        title: "Пещера Проходна",
        subtitle: "Демо героична контролна точка извън Морския Предел.",
        shortDescription: "Проходна показва как публична страница може да подготви посетителя за силно кинематографично преживяване в приложението.",
        tourismSummary: "Пещерата е лесно разпознаваема с естествените отвори, известни като Очите на Бога, и е подходяща за кратко културно и природно посещение.",
        storyTeaser: "В приложението светлината, камъкът и отворите могат да се превърнат в скрит слой от загадки и разказ.",
        historySummary: "Проходна е част от карстовия пейзаж на Северна България и носи силна визуална памет, която я прави естествен герой за демо преживяване.",
        practicalInfo: "Планирай 1-2 часа. Носи удобни обувки, провери условията след дъжд и следвай обозначените подходи.",
        bestSeason: "Пролет, лято и есен",
        seoTitle: "Пещера Проходна | Демо страница в Unlocking Bulgaria",
        seoDescription: "Виж демо страница за пещера Проходна и как героична контролна точка може да води към приложение с AR, загадки и история.",
        faq: commonFaqBg,
      },
      en: {
        title: "Prohodna Cave",
        subtitle: "A demo hero checkpoint outside the Sea Domain.",
        shortDescription: "Prohodna shows how a public page can prepare visitors for a strong cinematic experience in the app.",
        tourismSummary: "The cave is known for its natural openings called the Eyes of God and works well for a short cultural and nature visit.",
        storyTeaser: "In the app, light, stone, and the cave openings can become a hidden layer of riddles and story.",
        historySummary: "Prohodna belongs to the karst landscape of northern Bulgaria and carries a strong visual memory that makes it a natural demo hero.",
        practicalInfo: "Plan 1-2 hours. Wear comfortable shoes, check conditions after rain, and follow marked approaches.",
        bestSeason: "Spring, summer, and autumn",
        seoTitle: "Prohodna Cave | Demo Page in Unlocking Bulgaria",
        seoDescription: "See a demo page for Prohodna Cave and how a hero checkpoint can lead into an app with AR, riddles, and story.",
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
  return seoDomains.find((domain) => domain.slug === slug);
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

export function getLocalizedPath(lang: string, path: string) {
  return `/${lang}${path}`;
}

export function getSeoPagePaths() {
  return [
    ...seoDomains.map((domain) => ({ kind: "domain" as const, path: `/${domain.slug}` })),
    ...seoPlaces.map((place) => ({ kind: "place" as const, path: `/places/${place.slug}` })),
  ];
}
