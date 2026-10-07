import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { FaqSection, JsonLd, RelatedLinks, faqJsonLd } from '@/src/components/seo/SeoSections';
import { LUNAR_MANSIONS } from '@/src/lib/lunarMansions';
import { ogImageUrl } from '@/src/lib/og/urls';
import { getRouteLang } from '@/src/lib/pageLang';
import { localeAlternates, localizeHref, localizedUrl } from '@/src/lib/i18nRoutes';
import { ManazilHubClient } from './ManazilHubClient';

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
    title: 'Lunar Mansions (Manāzil al-Qamar)',
    description:
      'The 28 lunar mansions in classical ʿIlm al-Nujūm: today’s manzil, Arabic names, spiritual focus, and how manāzil relate to birth profile and ikhtiyārāt. For reflection, not prediction.',
  },
  fr: {
    title: 'Demeures lunaires (Manāzil al-Qamar)',
    description:
      'Les 28 demeures lunaires dans l’ʿIlm al-Nujūm classique : le manzil d’aujourd’hui, noms arabes, focus spirituel, et le lien avec le profil de naissance et l’ikhtiyārāt. Pour la réflexion, non la prédiction.',
  },
} as const;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const lang = await resolveLang(searchParams);
  const m = META[lang];
  const routeLang = await getRouteLang();
  const url = localizedUrl('/manazil', routeLang);
  const imageUrl = ogImageUrl('manazil', lang);

  return {
    title: m.title,
    description: m.description,
    alternates: localeAlternates('/manazil', routeLang),
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
    breadcrumbHome: 'Asrār',
    h1: 'Manāzil al-Qamar — The 28 Lunar Mansions',
    lead:
      'See which lunar mansion the Moon occupies today, browse all twenty-eight stations, and learn how classical ʿIlm al-Nujūm uses them for reflection and timing adab.',
    todayTitle: 'Manzil of today / tonight',
    aboutTitle: 'What are the lunar mansions?',
    intro1:
      'Manāzil al-qamar (منازل القمر) are twenty-eight stations along the Moon’s path. In Arab anwāʾ lore and classical ʿIlm al-Nujūm they mark seasonal and celestial milestones; later electional (ikhtiyārāt) practice also weighs the mansion the Moon occupies when choosing a time to begin something.',
    intro2:
      'Asrār divides the ecliptic into twenty-eight equal tropical sectors (~12°51′ each) from the Moon’s longitude — a clear computational convention for education and reflection. Classical star-tied (sidereal) bounds differ; we document the equal tropical method so the live card stays consistent with our planetary ephemeris.',
    intro3:
      'Manāzil are signs for contemplation, not agents that compel the unseen. This page is for learning and adab with time — not prediction, not a fatwa, and not a substitute for istikhāra, mashwara or tawakkul. Allah alone knows the ghayb.',
    browseTitle: 'Browse all 28 manāzil',
    browseLead: 'Arabic name, transliteration and a short focus for each station. Expand the live card above for favourable / caution themes (educational).',
    natalTitle: 'Your natal manzil',
    natalBody:
      'Your birth profile shows the lunar mansion the Moon occupied at your birth time, together with Sun and Moon signs and day ruler.',
    natalCta: 'Open Birth Profile →',
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        q: 'What is a lunar mansion (manzil)?',
        a: 'A manzil (pl. manāzil al-qamar) is one of twenty-eight sectors of the Moon’s path. Classical sources give each station a name and traditional themes. Asrār shows the current station and educational notes for reflection.',
      },
      {
        q: 'How does Asrār calculate today’s manzil?',
        a: 'From the Moon’s tropical ecliptic longitude (astronomy-engine), divided into 28 equal sectors of 360°/28 ≈ 12.857°. Mansion 1 begins at 0° of the tropical ecliptic. This matches Asrār’s default tropical planetary ephemeris.',
      },
      {
        q: 'Is this prediction or magic?',
        a: 'No. Asrār presents manāzil for education and timing adab. There are no talismans, taweez recipes, or claims to know the unseen. Favourable or cautious themes are traditional notes for reflection, not guarantees.',
      },
      {
        q: 'How do manāzil relate to ikhtiyārāt?',
        a: 'Electional timing may weigh the Moon’s mansion among other factors (day ruler, planetary hour, phase). See Best Dates (Ikhtiyārāt). Election tables on Asrār remain separately reviewed and are not auto-derived from every mansion’s fav/unfav list.',
      },
      {
        q: 'Where do I find my birth manzil?',
        a: 'Use Birth Profile with your birth date, time and place. The profile includes the natal lunar mansion alongside Sun/Moon signs.',
      },
    ],
    relatedTitle: 'Related tools',
    related: [
      ['/planetary-hours', 'Planetary Hours', 'The ruling planet of the current hour at your location.'],
      ['/planet-of-the-day', 'Planet of the Day', "Today's ruling planet, qualities and recommended dhikr."],
      ['/ikhtiyarat', 'Best Dates (Ikhtiyārāt)', 'Classical electional timing for nikāḥ, travel, business and more.'],
      ['/birth-profile', 'Birth Profile', 'Your Sun and Moon signs, natal lunar mansion and dignities.'],
      ['/planet-transit', 'Planetary Transits', 'Live positions of the seven classical planets.'],
    ] as const,
  },
  fr: {
    breadcrumbHome: 'Asrār',
    h1: 'Manāzil al-Qamar — Les 28 demeures lunaires',
    lead:
      'Voyez quelle demeure lunaire occupe la Lune aujourd’hui, parcourez les vingt-huit stations, et découvrez comment l’ʿIlm al-Nujūm classique les utilise pour la réflexion et l’adab du temps.',
    todayTitle: 'Manzil d’aujourd’hui / ce soir',
    aboutTitle: 'Que sont les demeures lunaires ?',
    intro1:
      'Les manāzil al-qamar (منازل القمر) sont vingt-huit stations sur le parcours de la Lune. Dans la tradition des anwāʾ et l’ʿIlm al-Nujūm classique, elles marquent des jalons saisonniers et célestes ; la pratique élective (ikhtiyārāt) pèse aussi la demeure occupée par la Lune pour choisir un moment de commencer.',
    intro2:
      'Asrār divise l’écliptique en vingt-huit secteurs tropicaux égaux (~12°51′ chacun) à partir de la longitude de la Lune — une convention claire pour l’éducation et la réflexion. Les bornes sidérales liées aux étoiles diffèrent ; nous documentons la méthode tropicale égale pour rester cohérents avec notre éphéméride planétaire.',
    intro3:
      'Les manāzil sont des signes pour la contemplation, non des agents qui contraignent l’invisible. Cette page sert à apprendre et à l’adab du temps — pas à la prédiction, pas à une fatwa, et pas à un substitut de l’istikhāra, de la mashwara ou du tawakkul. Allah seul connaît le ghayb.',
    browseTitle: 'Parcourir les 28 manāzil',
    browseLead:
      'Nom arabe, translittération et un court focus pour chaque station. Développez la carte en direct ci-dessus pour les thèmes favorables / de prudence (éducatif).',
    natalTitle: 'Votre manzil de naissance',
    natalBody:
      'Votre profil de naissance montre la demeure lunaire occupée par la Lune à votre naissance, avec les signes solaire et lunaire et le maître du jour.',
    natalCta: 'Ouvrir le profil de naissance →',
    faqTitle: 'Questions fréquentes',
    faqs: [
      {
        q: 'Qu’est-ce qu’une demeure lunaire (manzil) ?',
        a: 'Un manzil (pl. manāzil al-qamar) est l’un des vingt-huit secteurs du parcours de la Lune. Les sources classiques donnent à chaque station un nom et des thèmes traditionnels. Asrār montre la station actuelle et des notes éducatives pour la réflexion.',
      },
      {
        q: 'Comment Asrār calcule-t-il le manzil du jour ?',
        a: 'À partir de la longitude écliptique tropicale de la Lune (astronomy-engine), divisée en 28 secteurs égaux de 360°/28 ≈ 12,857°. La demeure 1 commence à 0° de l’écliptique tropical. Cela correspond à l’éphéméride planétaire tropicale par défaut d’Asrār.',
      },
      {
        q: 'Est-ce de la prédiction ou de la magie ?',
        a: 'Non. Asrār présente les manāzil pour l’éducation et l’adab du temps. Pas de talismans, pas de recettes de taweez, pas de prétention à connaître l’invisible. Les thèmes favorables ou prudents sont des notes traditionnelles pour la réflexion, non des garanties.',
      },
      {
        q: 'Quel lien avec l’ikhtiyārāt ?',
        a: 'Le timing électif peut peser la demeure de la Lune parmi d’autres facteurs (gouvernant du jour, heure planétaire, phase). Voir Meilleures dates (Ikhtiyārāt). Les tables d’élection sur Asrār restent revues séparément et ne sont pas dérivées automatiquement de chaque liste fav/défav.',
      },
      {
        q: 'Où trouver mon manzil de naissance ?',
        a: 'Utilisez le Profil de naissance avec date, heure et lieu. Le profil inclut la demeure lunaire natale avec les signes Soleil/Lune.',
      },
    ],
    relatedTitle: 'Outils associés',
    related: [
      ['/planetary-hours', 'Heures planétaires', "La planète gouvernante de l'heure actuelle à votre position."],
      ['/planet-of-the-day', 'Planète du jour', 'La planète gouvernante du jour, ses qualités et le dhikr recommandé.'],
      ['/ikhtiyarat', 'Meilleures dates (Ikhtiyārāt)', 'Timing électif classique pour nikāḥ, voyage, affaires et plus.'],
      ['/birth-profile', 'Profil de naissance', 'Vos signes solaire et lunaire, demeure lunaire natale et dignités.'],
      ['/planet-transit', 'Transits planétaires', 'Positions en direct des sept planètes classiques.'],
    ] as const,
  },
} as const;

function TodayLoading() {
  return (
    <div className="h-48 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-white/60 dark:bg-slate-800/40 animate-pulse" />
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const lang = await resolveLang(searchParams);
  const routeLang = await getRouteLang();
  const c = COPY[lang];
  const isFr = lang === 'fr';

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50 dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900">
      <header className="max-w-3xl mx-auto px-4 pt-3 pb-4 sm:pt-8 sm:pb-5 space-y-1.5 sm:space-y-2">
        <nav aria-label="Breadcrumb" className="text-xs">
          <a
            href={localizeHref('/', routeLang)}
            className="inline-flex items-center min-h-[24px] text-slate-500 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-indigo-400 hover:underline"
          >
            ← {c.breadcrumbHome}
          </a>
        </nav>
        <h1 className="text-[1.375rem] sm:text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100">
          {c.h1}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-snug">{c.lead}</p>
      </header>

      <main className="max-w-3xl mx-auto px-4 pb-10 space-y-8">
        <section aria-labelledby="manazil-today-heading" className="space-y-3">
          <h2 id="manazil-today-heading" className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {c.todayTitle}
          </h2>
          <Suspense fallback={<TodayLoading />}>
            <ManazilHubClient language={lang} />
          </Suspense>
        </section>

        <section className="space-y-3" aria-labelledby="manazil-about-heading">
          <h2 id="manazil-about-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            {c.aboutTitle}
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.intro1}</p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.intro2}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{c.intro3}</p>
        </section>

        <section className="space-y-4" aria-labelledby="manazil-browse-heading">
          <div className="space-y-1">
            <h2 id="manazil-browse-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              {c.browseTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">{c.browseLead}</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {LUNAR_MANSIONS.map((m) => (
              <li
                key={m.number}
                id={`manzil-${m.number}`}
                className="rounded-xl border border-indigo-100 dark:border-indigo-900/50 bg-white/80 dark:bg-slate-800/50 p-3 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">#{m.number}</span>
                  <span className="text-lg leading-none" aria-hidden>
                    {m.emoji}
                  </span>
                </div>
                <div
                  className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-0.5"
                  style={{ fontFamily: "'Amiri', serif" }}
                  lang="ar"
                  dir="rtl"
                >
                  {m.nameArabic}
                </div>
                <div className="text-sm font-medium text-indigo-700 dark:text-indigo-300">{m.nameTransliteration}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                  {isFr ? m.nameFr : m.nameEn}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug line-clamp-3">
                  {isFr ? m.spiritualFocus.fr : m.spiritualFocus.en}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="rounded-xl border border-violet-200 dark:border-violet-800 bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/30 p-4 space-y-2"
          aria-labelledby="manazil-natal-heading"
        >
          <h2 id="manazil-natal-heading" className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {c.natalTitle}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">{c.natalBody}</p>
          <a
            href={localizeHref('/birth-profile', routeLang)}
            className="inline-flex text-sm font-semibold text-violet-700 dark:text-violet-300 hover:underline"
          >
            {c.natalCta}
          </a>
        </section>

        <FaqSection id="manazil-faq-heading" title={c.faqTitle} faqs={c.faqs} />
        <RelatedLinks title={c.relatedTitle} links={[...c.related]} routeLang={routeLang} />
      </main>

      <JsonLd data={faqJsonLd(c.faqs)} />
    </div>
  );
}
