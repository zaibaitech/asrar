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
  /** French name/description, used by the /fr homepage SEO shell. */
  nameFr: string;
  descriptionFr: string;
}

/** Public tool pages linked from the homepage SEO shell and listed in the sitemap. */
export const PUBLIC_TOOLS: PublicTool[] = [
  {
    path: '/planetary-hours',
    name: 'Planetary Hours',
    description: 'Real-time Chaldean planetary hours for your location, with the ruling planet of each hour and what it favours.',
    nameFr: "Heures planétaires",
    descriptionFr: "Heures planétaires chaldéennes en temps réel pour votre position, avec la planète gouvernante de chaque heure et ce qu'elle favorise.",
  },
  {
    path: '/abjad',
    name: 'Abjad Calculator',
    description: 'Calculate the Abjad (ʿilm al-ḥurūf) value of any Arabic name or phrase, with elemental and letter analysis.',
    nameFr: "Calculateur Abjad",
    descriptionFr: "Calculez la valeur Abjad (ʿilm al-ḥurūf) de tout nom ou phrase en arabe, avec l'analyse des éléments et des lettres.",
  },
  {
    path: '/planet-of-the-day',
    name: 'Planet of the Day',
    description: "Today's ruling planet, its spiritual qualities, recommended dhikr and daily guidance.",
    nameFr: "Planète du jour",
    descriptionFr: "La planète gouvernante du jour, ses qualités spirituelles, le dhikr recommandé et les conseils quotidiens.",
  },
  {
    path: '/planet-transit',
    name: 'Planetary Transits',
    description: 'Live positions of the seven classical planets, their essential dignities and retrograde status.',
    nameFr: "Transits planétaires",
    descriptionFr: "Positions en direct des sept planètes classiques, leurs dignités essentielles et leur rétrogradation.",
  },
  {
    path: '/birth-profile',
    name: 'Birth Profile',
    description: 'Your ʿIlm al-Nujūm birth profile: Sun and Moon signs, lunar mansion, day ruler and planetary dignities.',
    nameFr: "Profil de naissance",
    descriptionFr: "Votre profil de naissance en ʿIlm al-Nujūm : signes du Soleil et de la Lune, demeure lunaire, maître du jour et dignités planétaires.",
  },
  {
    path: '/manazil',
    name: 'Lunar Mansions (Manāzil)',
    description: 'The 28 lunar mansions: today’s manzil, Arabic names, spiritual focus, and links to birth profile and ikhtiyārāt. For reflection.',
    nameFr: "Demeures lunaires (Manāzil)",
    descriptionFr: "Les 28 demeures lunaires : le manzil d'aujourd'hui, noms arabes, focus spirituel, et liens vers le profil de naissance et l'ikhtiyārāt. Pour la réflexion.",
  },
  {
    path: '/ikhtiyarat',
    name: 'Best Dates (Ikhtiyārāt)',
    description: 'Classical Islamic electional astrology for choosing an auspicious date for marriage, travel, business and more.',
    nameFr: "Meilleures dates (Ikhtiyārāt)",
    descriptionFr: "L'astrologie électionnelle islamique classique pour choisir une date propice : mariage, voyage, affaires et plus.",
  },
  {
    path: '/best-day-for',
    name: 'Best Day For…',
    description: 'Favourable weekdays and planetary hours for marriage, travel, moving home and business, with the next favourable dates.',
    nameFr: "Meilleur jour pour…",
    descriptionFr: "Jours de la semaine et heures planétaires favorables pour le mariage, le voyage, le déménagement et les affaires, avec les prochaines dates propices.",
  },
  {
    path: '/best-day-for/marriage',
    name: 'Best Day for Nikah (Marriage)',
    description: 'The days and planetary hours the ikhtiyārāt rules favour for a nikāḥ, Sunnah notes and the next favourable dates.',
    nameFr: "Meilleur jour pour le nikāḥ",
    descriptionFr: "Les jours et heures planétaires que les règles de l'ikhtiyārāt favorisent pour un nikāḥ, les notes de la Sunna et les prochaines dates propices.",
  },
  {
    path: '/best-day-for/travel',
    name: 'Best Day to Travel',
    description: 'Thursday and early departure in the Sunnah, plus the favourable days and planetary hours for a journey.',
    nameFr: "Jour favorable pour voyager",
    descriptionFr: "Le jeudi et le départ matinal dans la Sunna, ainsi que les jours et heures planétaires favorables pour un voyage.",
  },
  {
    path: '/best-day-for/moving-home',
    name: 'Best Day to Move Home',
    description: 'The days and planetary hours the ikhtiyārāt rules favour for moving into a new home or laying a foundation.',
    nameFr: "Jour favorable pour déménager",
    descriptionFr: "Les jours et heures planétaires que les règles de l'ikhtiyārāt favorisent pour emménager ou poser des fondations.",
  },
  {
    path: '/best-day-for/business',
    name: 'Best Day to Start a Business',
    description: 'The days and planetary hours the ikhtiyārāt rules favour for starting a business or signing a contract.',
    nameFr: "Jour favorable pour commencer une affaire",
    descriptionFr: "Les jours et heures planétaires que les règles de l'ikhtiyārāt favorisent pour lancer une affaire ou signer un contrat.",
  },
  {
    path: '/name-and-mother-burj',
    name: "Your Burj from Your Name & Mother's Name",
    description: "Find your burj (ṭabʿ) from the Abjad value of your name and your mother's name, with element, blessed day, dhikr and sadaqah.",
    nameFr: "Votre burj par votre nom et celui de votre mère",
    descriptionFr: "Trouvez votre burj (ṭabʿ) à partir de la valeur Abjad de votre nom et de celui de votre mère, avec élément, jour béni, dhikr et sadaqa.",
  },
  {
    path: '/compatibility',
    name: 'Name Compatibility for Marriage',
    description: 'Compare two names with the Abjad soul-connection method (marriage, family, friendship, work) or two dates of birth.',
    nameFr: "Compatibilité des prénoms pour le mariage",
    descriptionFr: "Comparez deux prénoms avec la méthode Abjad de connexion des âmes (mariage, famille, amitié, travail) ou deux dates de naissance.",
  },
  {
    path: '/sadaqa-of-the-day',
    name: 'Sadaqa of the Day',
    description: "Today's recommended sadaqah from West African tradition, with the full table for every day of the week.",
    nameFr: "Sadaqa du jour",
    descriptionFr: "La sadaqa recommandée aujourd'hui selon la tradition ouest-africaine, avec le tableau complet pour chaque jour de la semaine.",
  },
  {
    path: '/sadaqa',
    name: 'Sadaqa Guide',
    description: 'Sadaqah by day of the week, by Hijri birth month (Tamxarit, Gamo, Korité, Tabaski…) and by burj.',
    nameFr: "Guide de la sadaqa",
    descriptionFr: "La sadaqa selon le jour de la semaine, le mois hégirien de naissance (Tamxarit, Gamo, Korité, Tabaski…) et le burj.",
  },
  {
    path: '/ramadan',
    name: 'Zikr Challenges',
    description: 'Track your dhikr: Istighfār, Ṣalawāt, Divine Names and the 201 Prophetic Names practice.',
    nameFr: "Défis de Zikr",
    descriptionFr: "Suivez votre dhikr : Istighfār, Ṣalawāt, Noms divins et la pratique des 201 Noms prophétiques.",
  },
];
