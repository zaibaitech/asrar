import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { SITE_URL, absoluteUrl } from '@/src/lib/siteRoutes';
import { IkhtiyaratPage } from './IkhtiyaratPage';

type Lang = 'en' | 'fr';

async function resolveLang(searchParams: Promise<{ lang?: string }>): Promise<Lang> {
  const params = await searchParams;
  if (params?.lang === 'fr') return 'fr';
  if (params?.lang === 'en') return 'en';
  const cookieStore = await cookies();
  return cookieStore.get('asrar_lang')?.value === 'fr' ? 'fr' : 'en';
}

const META = {
  en: {
    title: 'Best Dates (Ikhtiyārāt)',
    description:
      'Choose an auspicious date for nikāḥ, travel, business or a new start using classical Islamic ikhtiyārāt: day rulers, planetary hours, Moon phase and lunar mansions.',
  },
  fr: {
    title: 'Meilleures Dates (Ikhtiyārāt)',
    description:
      'Choisissez une date propice pour le nikāḥ, un voyage, les affaires ou un nouveau départ avec l\'ikhtiyārāt islamique classique : gouvernants du jour, heures planétaires, phase lunaire et demeures lunaires.',
  },
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const m = META[await resolveLang(searchParams)];
  const url = absoluteUrl('/ikhtiyarat');
  const imageUrl = `${SITE_URL}/opengraph-image`;

  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: url },
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
    h1: 'Ikhtiyārāt: Choose an Auspicious Date',
    lead:
      'Check a date or find the best days for nikāḥ, travel, business or moving home with classical Islamic electional timing — for reflection, not prediction.',
    breadcrumbHome: 'Asrār',
    aboutTitle: 'Ikhtiyārāt — Choose an Auspicious Date the Classical Islamic Way',
    intro1:
      'Ikhtiyārāt is the classical practice of electional timing in ʿIlm al-Nujūm: choosing a day and hour for an important act — nikāḥ (marriage), travel, business, moving home, or starting study — when the celestial indicators are favourable.',
    intro2:
      'Traditional rules weigh the day ruler, the planetary hour, the Moon\'s sign, phase and lunar mansion (manāzil al-qamar), and counsel avoiding periods when the Moon is combust or void of course. The aim is adab with time: beginning matters in a moment that supports them, not forcing outcomes.',
    intro3:
      'Use this page for reflection and education. It is not prediction; Allah alone knows the unseen.',
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        q: 'What is ikhtiyārāt?',
        a: 'Ikhtiyārāt (اختيارات) means "choices" or elections: the traditional Islamic art of selecting an auspicious time to begin an undertaking. It draws on day rulers, planetary hours, and the Moon\'s condition within the broader science of ʿIlm al-Nujūm.',
      },
      {
        q: 'How is it different from fortune-telling?',
        a: 'Fortune-telling claims to reveal the unseen or fix the future. Ikhtiyārāt does not. It offers classical guidelines for when to start something, while affirming that success and knowledge of the ghayb belong to Allah alone. Treat the tool as an aid for reflection, not a verdict.',
      },
      {
        q: 'How do I pick a date for nikāḥ?',
        a: 'Choose the marriage (nikāḥ) election type, then check a candidate date or scan a range. Favourable signs typically include a supportive day ruler and planetary hour, a well-placed Moon by sign, phase and lunar mansion, and avoidance of combust or void-of-course Moon periods. Confirm practical and sharīʿah considerations separately.',
      },
      {
        q: 'Which planetary hour is best for travel or business?',
        a: 'Travel often suits hours of the Moon or Mercury when those planets are well placed; business and trade lean toward Mercury, Jupiter or Venus hours depending on the aim (contracts, growth, or harmony). Always read the hour together with the day ruler and the Moon\'s condition rather than in isolation.',
      },
      {
        q: 'What is a lunar mansion?',
        a: 'A lunar mansion (manzil, pl. manāzil al-qamar) is one of twenty-eight sectors along the Moon\'s path. Classical sources assign each mansion themes such as journeys, contracts or restraint. Ikhtiyārāt uses the mansion the Moon occupies on a given day as one factor among several.',
      },
    ],
    relatedTitle: 'Related tools',
    related: [
      ['/planetary-hours', 'Planetary Hours', 'The ruling planet of the current hour at your location.'],
      ['/planet-of-the-day', 'Planet of the Day', "Today's ruling planet, qualities and recommended dhikr."],
      ['/planet-transit', 'Planetary Transits', 'Live positions of the seven classical planets and their dignities.'],
      ['/birth-profile', 'Birth Profile', 'Your Sun and Moon signs, lunar mansion and planetary dignities.'],
      ['/abjad', 'Abjad Calculator', 'ʿIlm al-ḥurūf letter numerology for Arabic names and phrases.'],
    ],
  },
  fr: {
    h1: 'Ikhtiyārāt : choisir une date propice',
    lead:
      "Vérifiez une date ou trouvez les meilleurs jours pour un nikāḥ, un voyage, une affaire ou un déménagement, selon l'ikhtiyārāt islamique classique — pour la réflexion, pas la prédiction.",
    breadcrumbHome: 'Asrār',
    aboutTitle: 'Ikhtiyārāt — Choisir une date propice selon la voie islamique classique',
    intro1:
      'L\'ikhtiyārāt est la pratique classique du timing électif dans l\'ʿIlm al-Nujūm : choisir un jour et une heure pour un acte important — nikāḥ (mariage), voyage, affaires, déménagement ou début d\'études — lorsque les indicateurs célestes sont favorables.',
    intro2:
      'Les règles traditionnelles prennent en compte le gouvernant du jour, l\'heure planétaire, le signe, la phase et la demeure lunaire (manāzil al-qamar) de la Lune, et conseillent d\'éviter les périodes où la Lune est combust ou « void of course ». Le but est un adab avec le temps : commencer les affaires dans un moment qui les soutient, sans forcer les résultats.',
    intro3:
      'Cette page est destinée à la réflexion et à l\'éducation. Ce n\'est pas de la prédiction ; Allah seul connaît l\'invisible.',
    faqTitle: 'Questions fréquentes',
    faqs: [
      {
        q: 'Qu\'est-ce que l\'ikhtiyārāt ?',
        a: 'Ikhtiyārāt (اختيارات) signifie « choix » ou élections : l\'art islamique traditionnel de sélectionner un moment propice pour commencer une entreprise. Il s\'appuie sur les gouvernants du jour, les heures planétaires et l\'état de la Lune au sein de l\'ʿIlm al-Nujūm.',
      },
      {
        q: 'En quoi cela diffère-t-il de la divination ?',
        a: 'La divination prétend dévoiler l\'invisible ou fixer l\'avenir. L\'ikhtiyārāt ne le fait pas. Il offre des repères classiques pour le moment de commencer quelque chose, tout en affirmant que le succès et la connaissance du ghayb appartiennent à Allah seul. Traitez l\'outil comme une aide à la réflexion, non comme un verdict.',
      },
      {
        q: 'Comment choisir une date pour le nikāḥ ?',
        a: 'Choisissez le type d\'élection mariage (nikāḥ), puis vérifiez une date candidate ou parcourez une plage. Les signes favorables incluent en général un gouvernant du jour et une heure planétaire favorables, une Lune bien placée par signe, phase et demeure lunaire, et l\'évitement des périodes de Lune combust ou void of course. Confirmez à part les aspects pratiques et de sharīʿah.',
      },
      {
        q: 'Quelle heure planétaire convient au voyage ou aux affaires ?',
        a: 'Le voyage convient souvent aux heures de la Lune ou de Mercure lorsque ces planètes sont bien placées ; les affaires et le commerce penchent vers les heures de Mercure, Jupiter ou Vénus selon le but (contrats, croissance ou harmonie). Lisez toujours l\'heure avec le gouvernant du jour et l\'état de la Lune, jamais isolément.',
      },
      {
        q: 'Qu\'est-ce qu\'une demeure lunaire ?',
        a: 'Une demeure lunaire (manzil, pl. manāzil al-qamar) est l\'un des vingt-huit secteurs du parcours de la Lune. Les sources classiques attribuent à chaque demeure des thèmes tels que voyages, contrats ou retenue. L\'ikhtiyārāt utilise la demeure occupée par la Lune un jour donné comme un facteur parmi d\'autres.',
      },
    ],
    relatedTitle: 'Outils associés',
    related: [
      ['/planetary-hours', 'Heures planétaires', "La planète gouvernante de l'heure actuelle à votre position."],
      ['/planet-of-the-day', 'Planète du jour', 'La planète gouvernante du jour, ses qualités et le dhikr recommandé.'],
      ['/planet-transit', 'Transits planétaires', 'Positions en direct des sept planètes classiques et leurs dignités.'],
      ['/birth-profile', 'Profil de naissance', 'Vos signes solaire et lunaire, demeure lunaire et dignités planétaires.'],
      ['/abjad', 'Calculateur Abjad', 'Numérologie des lettres (ʿilm al-ḥurūf) pour noms et phrases en arabe.'],
    ],
  },
} as const;

function Loading() {
  return (
    <div>
      <div className="max-w-2xl mx-auto px-4 pt-1 pb-6 space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-32 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 animate-pulse" />
        ))}
      </div>
    </div>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const lang = await resolveLang(searchParams);
  const c = COPY[lang];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      {/* 1. Compact intro: one short H1 + a two-line lead, so the tool is in the first mobile viewport. */}
      <header className="max-w-2xl mx-auto px-4 pt-3 pb-3 sm:pt-6 space-y-1.5">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 dark:text-slate-400">
          <a href="/" className="text-emerald-700 dark:text-emerald-400 hover:underline">← {c.breadcrumbHome}</a>
        </nav>
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-slate-900 dark:text-slate-100">{c.h1}</h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-snug">{c.lead}</p>
      </header>

      {/* 2–3. Interactive tool and its results (component unchanged apart from its duplicate header bar). */}
      <Suspense fallback={<Loading />}>
        <IkhtiyaratPage hideHeader />
      </Suspense>

      {/* 4. Detailed educational / SEO content, moved below the tool (unchanged text). */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <section className="space-y-3" aria-labelledby="ikhtiyarat-about-heading">
          <h2 id="ikhtiyarat-about-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            {c.aboutTitle}
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.intro1}</p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.intro2}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{c.intro3}</p>
        </section>

        <section className="space-y-4" aria-labelledby="ikhtiyarat-faq-heading">
          <h2 id="ikhtiyarat-faq-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            {c.faqTitle}
          </h2>
          <dl className="space-y-4">
            {c.faqs.map(faq => (
              <div key={faq.q} className="space-y-1">
                <dt className="font-semibold text-slate-900 dark:text-slate-100">{faq.q}</dt>
                <dd className="text-slate-700 dark:text-slate-300 leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <nav aria-label={c.relatedTitle} className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{c.relatedTitle}</h2>
          <ul className="space-y-3">
            {c.related.map(([href, name, desc]) => (
              <li key={href}>
                <a href={href} className="font-semibold text-emerald-700 dark:text-emerald-300 hover:underline">
                  {name}
                </a>
                <p className="text-sm text-slate-600 dark:text-slate-400">{desc}</p>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  );
}
