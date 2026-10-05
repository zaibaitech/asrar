import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { SITE_URL } from '@/src/lib/siteRoutes';
import { getRouteLang } from '@/src/lib/pageLang';
import { localeAlternates, localizeHref, localizedUrl } from '@/src/lib/i18nRoutes';
import { AbjadCalculator } from './AbjadCalculator';

type Lang = 'en' | 'fr';

async function resolveLang(searchParams: Promise<{ lang?: string }>): Promise<Lang> {
  if ((await getRouteLang()) === 'fr') return 'fr';
  const params = await searchParams;
  if (params?.lang === 'fr') return 'fr';
  if (params?.lang === 'en') return 'en';
  const cookieStore = await cookies();
  return cookieStore.get('asrar_lang')?.value === 'fr' ? 'fr' : 'en';
}

const META = {
  en: {
    title: 'Abjad Calculator',
    description:
      'Free Abjad calculator: find the ʿilm al-ḥurūf numerical value of any Arabic name or phrase, with letter-by-letter breakdown, elemental balance and Maghribi or Mashriqi systems.',
  },
  fr: {
    title: 'Calculateur Abjad',
    description:
      "Calculateur Abjad gratuit : trouvez la valeur numérique (ʿilm al-ḥurūf) de tout nom ou phrase en arabe, avec le détail lettre par lettre, l'équilibre des éléments et les systèmes maghribi ou mashriqi.",
  },
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const m = META[await resolveLang(searchParams)];
  const routeLang = await getRouteLang();
  const url = localizedUrl('/abjad', routeLang);
  const imageUrl = `${SITE_URL}/opengraph-image`;

  return {
    title: m.title,
    description: m.description,
    alternates: localeAlternates('/abjad', routeLang),
    openGraph: {
      type: 'website',
      url,
      siteName: 'Asrār Everyday',
      title: m.title,
      description: m.description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: m.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
      images: [imageUrl],
    },
  };
}

const COPY = {
  en: {
    h1: 'Abjad Calculator — ʿIlm al-Ḥurūf Letter Numerology',
    intro:
      'The Abjad system assigns a number to each letter of the Arabic alphabet: alif is 1, bāʾ is 2, jīm is 3, and so on up to ghayn at 1000. Adding the values of the letters in a word gives its ḥisāb al-jummal, the "sum total" used for centuries in the Islamic sciences.',
    aboutTitle: 'How Abjad relates to Islamic letter-numerology',
    about:
      'In ʿilm al-ḥurūf (the science of letters) and ʿilm al-ʿadad (the science of numbers), scholars studied the numerical value of divine names, Qurʾānic phrases and personal names, and linked letters to the four elements: fire, air, water and earth. Two traditions are common: the Mashriqi order used in the East and the Maghribi order used in North and West Africa. This calculator supports both, so you can compare results.',
    useTitle: 'Using the calculator',
    use: 'Choose a calculator type below, enter an Arabic name or phrase (or type it in Latin letters and let the tool transliterate it), and read the total value, the letter-by-letter breakdown and the elemental analysis.',
    note: 'For reflection and education only. It is not prediction; Allah alone knows the unseen.',
    relatedTitle: 'Related tools',
    related: [
      ['/', 'Asrār home', 'The full Asrār app: planetary timing, calculators and dhikr.'],
      ['/planetary-hours', 'Planetary Hours', 'The ruling planet of the current hour at your location.'],
      ['/birth-profile', 'Birth Profile', 'Your Sun and Moon signs, lunar mansion and planetary dignities.'],
      ['/ikhtiyarat', 'Best Dates (Ikhtiyārāt)', 'Classical electional astrology for choosing an auspicious date.'],
    ],
  },
  fr: {
    h1: 'Calculateur Abjad — Numérologie des lettres (ʿIlm al-Ḥurūf)',
    intro:
      'Le système Abjad attribue un nombre à chaque lettre de l\'alphabet arabe : alif vaut 1, bāʾ 2, jīm 3, et ainsi de suite jusqu\'à ghayn à 1000. La somme des valeurs des lettres d\'un mot donne son ḥisāb al-jummal, le « total » utilisé depuis des siècles dans les sciences islamiques.',
    aboutTitle: 'Abjad et la numérologie islamique des lettres',
    about:
      'Dans l\'ʿilm al-ḥurūf (science des lettres) et l\'ʿilm al-ʿadad (science des nombres), les savants étudiaient la valeur numérique des Noms divins, des expressions coraniques et des prénoms, et reliaient les lettres aux quatre éléments : feu, air, eau et terre. Deux traditions existent : l\'ordre mashriqi, utilisé en Orient, et l\'ordre maghribi, utilisé en Afrique du Nord et de l\'Ouest. Ce calculateur prend en charge les deux pour comparer les résultats.',
    useTitle: 'Utiliser le calculateur',
    use: 'Choisissez un type de calcul ci-dessous, saisissez un nom ou une phrase en arabe (ou en lettres latines, l\'outil les translittère), puis consultez la valeur totale, le détail lettre par lettre et l\'analyse des éléments.',
    note: 'À des fins de réflexion et d\'éducation uniquement, sans prédiction ; Allah seul connaît l\'invisible.',
    relatedTitle: 'Outils associés',
    related: [
      ['/', 'Accueil Asrār', "L'application complète : timing planétaire, calculateurs et dhikr."],
      ['/planetary-hours', 'Heures planétaires', "La planète gouvernante de l'heure actuelle à votre position."],
      ['/birth-profile', 'Profil de naissance', 'Vos signes solaire et lunaire, demeure lunaire et dignités planétaires.'],
      ['/ikhtiyarat', 'Meilleures dates (Ikhtiyārāt)', 'Astrologie électionnelle classique pour choisir une date propice.'],
    ],
  },
} as const;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const c = COPY[await resolveLang(searchParams)];
  const routeLang = await getRouteLang();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{c.h1}</h1>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.intro}</p>
        </header>

        <AbjadCalculator />

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{c.aboutTitle}</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.about}</p>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{c.useTitle}</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.use}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{c.note}</p>
        </section>

        <nav aria-label={c.relatedTitle} className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{c.relatedTitle}</h2>
          <ul className="space-y-3">
            {c.related.map(([href, name, desc]) => (
              <li key={href}>
                <a href={localizeHref(href, routeLang)} className="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline">
                  {name}
                </a>
                <p className="text-sm text-slate-600 dark:text-slate-400">{desc}</p>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
}
