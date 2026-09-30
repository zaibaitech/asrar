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

/** Public tool pages linked from the homepage and listed in the sitemap. */
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
    path: '/ramadan',
    name: 'Zikr Challenges',
    description: 'Track your dhikr: Istighfār, Ṣalawāt, Divine Names and the 201 Prophetic Names practice.',
  },
];
