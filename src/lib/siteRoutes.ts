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
  description: string;
}

/** Public tool pages linked from the homepage SEO shell and listed in the sitemap. */
export const PUBLIC_TOOLS: PublicTool[] = [
  {
    path: '/planetary-hours',
    name: 'Planetary Hours',
    description: 'Real-time Chaldean planetary hours for your location, with the ruling planet of each hour and what it favours.',
  },
  {
    path: '/abjad',
    name: 'Abjad Calculator',
    description: 'Calculate the Abjad (ʿilm al-ḥurūf) value of any Arabic name or phrase, with elemental and letter analysis.',
  },
  {
    path: '/planet-of-the-day',
    name: 'Planet of the Day',
    description: "Today's ruling planet, its spiritual qualities, recommended dhikr and daily guidance.",
  },
  {
    path: '/planet-transit',
    name: 'Planetary Transits',
    description: 'Live positions of the seven classical planets, their essential dignities and retrograde status.',
  },
  {
    path: '/birth-profile',
    name: 'Birth Profile',
    description: 'Your ʿIlm al-Nujūm birth profile: Sun and Moon signs, lunar mansion, day ruler and planetary dignities.',
  },
  {
    path: '/ikhtiyarat',
    name: 'Best Dates (Ikhtiyārāt)',
    description: 'Classical Islamic electional astrology for choosing an auspicious date for marriage, travel, business and more.',
  },
  {
    path: '/best-day-for',
    name: 'Best Day For…',
    description: 'Favourable weekdays and planetary hours for marriage, travel, moving home and business, with the next favourable dates.',
  },
  {
    path: '/best-day-for/marriage',
    name: 'Best Day for Nikah (Marriage)',
    description: 'The days and planetary hours the ikhtiyārāt rules favour for a nikāḥ, Sunnah notes and the next favourable dates.',
  },
  {
    path: '/best-day-for/travel',
    name: 'Best Day to Travel',
    description: 'Thursday and early departure in the Sunnah, plus the favourable days and planetary hours for a journey.',
  },
  {
    path: '/best-day-for/moving-home',
    name: 'Best Day to Move Home',
    description: 'The days and planetary hours the ikhtiyārāt rules favour for moving into a new home or laying a foundation.',
  },
  {
    path: '/best-day-for/business',
    name: 'Best Day to Start a Business',
    description: 'The days and planetary hours the ikhtiyārāt rules favour for starting a business or signing a contract.',
  },
  {
    path: '/name-and-mother-burj',
    name: "Your Burj from Your Name & Mother's Name",
    description: "Find your burj (ṭabʿ) from the Abjad value of your name and your mother's name, with element, blessed day, dhikr and sadaqah.",
  },
  {
    path: '/compatibility',
    name: 'Name Compatibility for Marriage',
    description: 'Compare two names with the Abjad soul-connection method (marriage, family, friendship, work) or two dates of birth.',
  },
  {
    path: '/sadaqa-of-the-day',
    name: 'Sadaqa of the Day',
    description: "Today's recommended sadaqah from West African tradition, with the full table for every day of the week.",
  },
  {
    path: '/sadaqa',
    name: 'Sadaqa Guide',
    description: 'Sadaqah by day of the week, by Hijri birth month (Tamxarit, Gamo, Korité, Tabaski…) and by burj.',
  },
  {
    path: '/ramadan',
    name: 'Zikr Challenges',
    description: 'Track your dhikr: Istighfār, Ṣalawāt, Divine Names and the 201 Prophetic Names practice.',
  },
];
