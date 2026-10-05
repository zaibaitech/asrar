/**
 * Canonical site URL and the list of public, indexable pages.
 * Shared by the sitemap, per-page canonicals, and the homepage crawler links.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_BASE_URL || 'https://www.asrar.app').replace(/\/+$/, '');

/** Absolute URL for a site path, e.g. absoluteUrl('/planetary-hours'). */
export function absoluteUrl(path: string = '/'): string {
  if (path === '/' || path === '') return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export interface PublicTool {
  path: string;
  name: string;
  /** French label for client-side link lists (footer). */
  nameFr: string;
  description: string;
}

/** Public tool pages linked from the homepage and listed in the sitemap. */
export const PUBLIC_TOOLS: PublicTool[] = [
  {
    path: '/planetary-hours',
    name: 'Planetary Hours',
    nameFr: 'Heures planétaires',
    description: 'Real-time Chaldean planetary hours for your location, with the ruling planet of each hour and what it favours.',
  },
  {
    path: '/abjad',
    name: 'Abjad Calculator',
    nameFr: 'Calculateur Abjad',
    description: 'Calculate the Abjad (ʿilm al-ḥurūf) value of any Arabic name or phrase, with elemental and letter analysis.',
  },
  {
    path: '/planet-of-the-day',
    name: 'Planet of the Day',
    nameFr: 'Planète du jour',
    description: "Today's ruling planet, its spiritual qualities, recommended dhikr and daily guidance.",
  },
  {
    path: '/planet-transit',
    name: 'Planetary Transits',
    nameFr: 'Transits planétaires',
    description: 'Live positions of the seven classical planets, their essential dignities and retrograde status.',
  },
  {
    path: '/birth-profile',
    name: 'Birth Profile',
    nameFr: 'Profil de naissance',
    description: 'Your ʿIlm al-Nujūm birth profile: Sun and Moon signs, lunar mansion, day ruler and planetary dignities.',
  },
  {
    path: '/ikhtiyarat',
    name: 'Best Dates (Ikhtiyārāt)',
    nameFr: 'Meilleures dates (Ikhtiyārāt)',
    description: 'Classical Islamic electional astrology for choosing an auspicious date for marriage, travel, business and more.',
  },
  {
    path: '/name-and-mother-burj',
    name: "Your Burj from Your Name & Mother's Name",
    nameFr: 'Votre burj par votre nom et celui de votre mère',
    description: "Find your burj (ṭabʿ) from the Abjad value of your name and your mother's name, with element, blessed day, dhikr and sadaqah.",
  },
  {
    path: '/compatibility',
    name: 'Name Compatibility for Marriage',
    nameFr: 'Compatibilité des prénoms pour le mariage',
    description: 'Compare two names with the Abjad soul-connection method (marriage, family, friendship, work) or two dates of birth.',
  },
  {
    path: '/sadaqa-of-the-day',
    name: 'Sadaqa of the Day',
    nameFr: 'Sadaqa du jour',
    description: "Today's recommended sadaqah from West African tradition, with the full table for every day of the week.",
  },
  {
    path: '/sadaqa',
    name: 'Sadaqa Guide',
    nameFr: 'Guide de la sadaqa',
    description: 'Sadaqah by day of the week, by Hijri birth month (Tamxarit, Gamo, Korité, Tabaski…) and by burj.',
  },
  {
    path: '/ramadan',
    name: 'Zikr Challenges',
    nameFr: 'Défis de Zikr',
    description: 'Track your dhikr: Istighfār, Ṣalawāt, Divine Names and the 201 Prophetic Names practice.',
  },
];
