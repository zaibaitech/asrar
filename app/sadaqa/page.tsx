import type { Metadata } from 'next';
import { SADAQAH_BY_DAY } from '@/src/features/calculator/lib/sadaqahByDay';
import { SADAQAH_BY_MONTH } from '@/src/features/calculator/lib/sadaqahByMonth';
import { ZODIAC_SADAQAH, ZODIAC_SIGN_ORDER, ZODIAC_SIGN_SYMBOL } from '@/src/data/zodiacSadaqahData';
import { buildToolMetadata, getRouteLang, resolvePageLang, type PageLang } from '@/src/lib/pageLang';
import { localizeHref } from '@/src/lib/i18nRoutes';
import { FaqSection, JsonLd, RelatedLinks, faqJsonLd, type FaqItem, type RelatedLink } from '@/src/components/seo/SeoSections';
import { SadaqaDateChecker } from '@/src/components/sadaqa/SadaqaDateChecker';

const PATH = '/sadaqa';

const META = {
  en: {
    title: 'Sadaqa Guide: by Weekday, Hijri Birth Month & Burj',
    description:
      'Traditional West African sadaqah guidance in one place: the sadaqa of the day, sadaqah by your Hijri birth month (Tamxarit, Gamo, Korité, Tabaski…) and sadaqah for each of the 12 burūj.',
  },
  fr: {
    title: 'Guide de la sadaqa : par jour, mois hégirien et burj',
    description:
      'Le sarax ouest-africain réuni en un seul guide : la sadaqa du jour, la sadaqah selon votre mois hégirien de naissance (Tamxarit, Gamo, Korité, Tabaski…) et la sadaqah des 12 burūj.',
  },
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const lang = await resolvePageLang(searchParams);
  return buildToolMetadata(PATH, META[lang], lang);
}

const WEEKDAY_FR = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

const COPY = {
  en: {
    h1: 'Sadaqa Guide — By Day of the Week, Hijri Birth Month and Burj',
    intro1:
      'Sadaqah, voluntary charity, can be given at any time and in any amount. Many Muslims make a habit of giving on Friday (Jumuʿa), and in West African (Senegalese / Wolof) practice — sarax — particular forms of sadaqah are also suggested for each weekday, for the Hijri month you were born in, and for your burj.',
    intro2:
      'This guide gathers the three in one place, using the same data as the Asrār calculators. Use whichever applies to you, and remember that the best sadaqah is the one given sincerely and regularly.',
    note: 'For reflection and education, not prediction or a promise of outcomes; Allah alone knows the unseen.',
    dayTitle: 'Sadaqa by day of the week',
    dayIntro: 'Each weekday has its own suggested sadaqah. See today\'s guidance and the full table on the Sadaqa of the Day page.',
    dayLink: "See today's sadaqa →",
    monthTitle: 'Sadaqa by Hijri birth month',
    monthIntro:
      'Enter your Gregorian date of birth to find the Hijri (Islamic) month you were born in. Wolof names are shown where they are commonly used (Tamxarit, Gamo, Korité, Tabaski…).',
    burjTitle: 'Sadaqa by burj',
    burjIntro:
      'Each of the twelve burūj has its own traditional sadaqah, according to the teachings of Seringe Mahdiou Niane (with companion videos in Wolof inside the app). Not sure of your burj? Find it from your name and your mother\'s name.',
    burjLink: "Find your burj from your name & mother's name →",
    bestDay: 'Suggested day',
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        q: 'What is sarax?',
        a: 'Sarax is the Wolof word for sadaqah (voluntary charity). In Senegalese and wider West African practice it is often given in specific forms — water, food, clothes, a ram, kola nuts — depending on the day, the person\'s birth month or their burj.',
      },
      {
        q: 'How do I find my Hijri birth month?',
        a: 'Enter your Gregorian date of birth in the checker on this page. It converts the date to the Islamic (Hijri) calendar and shows the sadaqah suggested for that month.',
      },
      {
        q: 'How do I know my burj?',
        a: "In this tradition your burj comes from the Abjad values of your name and your mother's name: add them, divide by 12 and the remainder gives the burj. The name & mother's name burj page does the calculation for you.",
      },
      {
        q: 'Which should I follow: the day, the month or the burj?',
        a: 'Any of them, or none. They are complementary customs, not obligations. Sadaqah given sincerely on any day is good; these suggestions simply help you choose a form and a moment.',
      },
      {
        q: 'Does giving this sadaqah guarantee a result?',
        a: 'No. Sadaqah is given for the sake of Allah. The intentions mentioned (blessing, protection, ease, provision) are hopes placed with Allah, not promised outcomes.',
      },
    ] as FaqItem[],
    relatedTitle: 'Related',
    related: [
      ['/sadaqa-of-the-day', 'Sadaqa of the Day', "Today's recommended sadaqah and the weekly table."],
      ['/name-and-mother-burj', "Your Burj from Your Name & Mother's Name", 'Burj, blessed day, dhikr and burj sadaqah.'],
      ['/compatibility', 'Name Compatibility for Marriage', 'Compare two names with the Abjad soul-connection method.'],
      ['/planet-of-the-day', 'Planet of the Day', "Today's ruling planet, qualities and recommended dhikr."],
      ['/abjad', 'Abjad Calculator', 'All calculator types, including sadaqah by date.'],
    ] as RelatedLink[],
  },
  fr: {
    h1: 'Guide de la sadaqa — par jour de la semaine, mois hégirien de naissance et burj',
    intro1:
      "La sadaqah, l'aumône volontaire, peut se donner à tout moment et en toute quantité. Beaucoup de musulmans prennent l'habitude de donner le vendredi (Jumuʿa) ; dans la pratique ouest-africaine (sénégalaise / wolof) — le sarax — des formes précises de sadaqah sont aussi suggérées pour chaque jour de la semaine, pour le mois hégirien de naissance et pour chaque burj.",
    intro2:
      "Ce guide réunit les trois, à partir des mêmes données que les calculateurs Asrār. Suivez celle qui vous concerne, en gardant à l'esprit que la meilleure sadaqah est celle donnée avec sincérité et régularité.",
    note: "Pour la réflexion et l'éducation, sans prédiction ni promesse de résultat ; Allah seul connaît l'invisible.",
    dayTitle: 'Sadaqa par jour de la semaine',
    dayIntro: 'Chaque jour a sa sadaqah suggérée. Voir la suggestion du jour et le tableau complet sur la page Sadaqa du jour.',
    dayLink: 'Voir la sadaqa du jour →',
    monthTitle: 'Sadaqa par mois hégirien de naissance',
    monthIntro:
      "Entrez votre date de naissance grégorienne pour trouver votre mois hégirien (islamique) de naissance. Les noms wolof sont indiqués lorsqu'ils sont courants (Tamxarit, Gamo, Korité, Tabaski…).",
    burjTitle: 'Sadaqa par burj',
    burjIntro:
      "Chacun des douze burūj a sa sadaqah traditionnelle, selon les enseignements de Seringe Mahdiou Niane (avec des vidéos en wolof dans l'application). Vous ne connaissez pas votre burj ? Trouvez-le avec votre nom et celui de votre mère.",
    burjLink: 'Trouver votre burj par votre nom et celui de votre mère →',
    bestDay: 'Jour conseillé',
    faqTitle: 'Questions fréquentes',
    faqs: [
      {
        q: "Qu'est-ce que le sarax ?",
        a: "Sarax est le mot wolof pour la sadaqah (aumône volontaire). Au Sénégal et en Afrique de l'Ouest, elle est souvent donnée sous des formes précises — eau, nourriture, vêtements, bélier, noix de cola — selon le jour, le mois de naissance ou le burj de la personne.",
      },
      {
        q: 'Comment connaître mon mois hégirien de naissance ?',
        a: 'Entrez votre date de naissance grégorienne dans le vérificateur de cette page. La date est convertie au calendrier islamique (hégirien) et la sadaqah suggérée pour ce mois s\'affiche.',
      },
      {
        q: 'Comment connaître mon burj ?',
        a: "Dans cette tradition, le burj vient des valeurs abjad de votre nom et de celui de votre mère : on les additionne, on divise par 12 et le reste donne le burj. La page « burj par le nom et le nom de la mère » fait le calcul pour vous.",
      },
      {
        q: 'Lequel suivre : le jour, le mois ou le burj ?',
        a: "L'un ou l'autre, ou aucun. Ce sont des coutumes complémentaires, pas des obligations. Une sadaqah sincère est bonne quel que soit le jour ; ces suggestions aident seulement à choisir une forme et un moment.",
      },
      {
        q: 'Cette sadaqah garantit-elle un résultat ?',
        a: "Non. La sadaqah se donne pour Allah. Les intentions mentionnées (bénédiction, protection, facilité, subsistance) sont des espoirs remis à Allah, pas des résultats promis.",
      },
    ] as FaqItem[],
    relatedTitle: 'Voir aussi',
    related: [
      ['/sadaqa-of-the-day', 'Sadaqa du jour', 'La sadaqah recommandée aujourd\'hui et le tableau de la semaine.'],
      ['/name-and-mother-burj', 'Votre burj par votre nom et celui de votre mère', 'Burj, jour béni, dhikr et sadaqah du burj.'],
      ['/compatibility', 'Compatibilité des prénoms pour le mariage', "Comparez deux prénoms avec la méthode abjad de connexion d'âme."],
      ['/planet-of-the-day', 'Planète du jour', 'La planète gouvernante du jour, ses qualités et le dhikr recommandé.'],
      ['/abjad', 'Calculateur Abjad', 'Tous les types de calcul, dont la sadaqah par date.'],
    ] as RelatedLink[],
  },
} as const;

function pick<T>(lang: PageLang, v: { en: T; fr: T }): T {
  return lang === 'fr' ? v.fr : v.en;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const lang = await resolvePageLang(searchParams);
  const routeLang = await getRouteLang();
  const c = COPY[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{c.h1}</h1>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.intro1}</p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.intro2}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{c.note}</p>
          <ul className="flex flex-wrap gap-2 pt-1 text-sm">
            <li><a href="#by-weekday" className="rounded-full border border-emerald-300 dark:border-emerald-700 px-3 py-1 text-emerald-800 dark:text-emerald-200 hover:underline">{c.dayTitle}</a></li>
            <li><a href="#by-hijri-month" className="rounded-full border border-emerald-300 dark:border-emerald-700 px-3 py-1 text-emerald-800 dark:text-emerald-200 hover:underline">{c.monthTitle}</a></li>
            <li><a href="#by-burj" className="rounded-full border border-emerald-300 dark:border-emerald-700 px-3 py-1 text-emerald-800 dark:text-emerald-200 hover:underline">{c.burjTitle}</a></li>
          </ul>
        </header>

        <section id="by-weekday" className="space-y-3 scroll-mt-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{c.dayTitle}</h2>
          <p className="text-slate-700 dark:text-slate-300">{c.dayIntro}</p>
          <ul className="space-y-1 text-slate-700 dark:text-slate-300">
            {SADAQAH_BY_DAY.map((d) => (
              <li key={d.day}>
                <strong className="text-slate-900 dark:text-slate-100">
                  {lang === 'fr' ? WEEKDAY_FR[d.day] : d.displayName}
                </strong>{' '}
                — {pick(lang, d).items.map((s) => s.replace(/\.$/, '')).join('; ')}
              </li>
            ))}
          </ul>
          <a href={localizeHref('/sadaqa-of-the-day', routeLang)} className="inline-block font-semibold text-emerald-700 dark:text-emerald-300 hover:underline">
            {c.dayLink}
          </a>
        </section>

        <section id="by-hijri-month" className="space-y-4 scroll-mt-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{c.monthTitle}</h2>
          <p className="text-slate-700 dark:text-slate-300">{c.monthIntro}</p>
          <SadaqaDateChecker lang={lang} mode="month" />
          <div className="space-y-4">
            {SADAQAH_BY_MONTH.map((m) => {
              const t = pick(lang, m);
              return (
                <article key={m.month} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 space-y-2">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    {m.month}. {m.displayName}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">{t.intro}</p>
                  <ul className="list-disc pl-5 space-y-0.5 text-sm text-slate-700 dark:text-slate-300">
                    {t.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section id="by-burj" className="space-y-4 scroll-mt-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{c.burjTitle}</h2>
          <p className="text-slate-700 dark:text-slate-300">{c.burjIntro}</p>
          <a href={localizeHref('/name-and-mother-burj', routeLang)} className="inline-block font-semibold text-emerald-700 dark:text-emerald-300 hover:underline">
            {c.burjLink}
          </a>
          <div className="grid gap-4 sm:grid-cols-2">
            {ZODIAC_SIGN_ORDER.map((id) => {
              const z = ZODIAC_SADAQAH[id];
              return (
                <article key={id} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 space-y-2">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    <span aria-hidden="true">{ZODIAC_SIGN_SYMBOL[id]} </span>
                    {lang === 'fr' ? z.fr : z.en} · {z.translit} <span lang="ar" dir="rtl">({z.ar})</span>
                  </h3>
                  <ul className="list-disc pl-5 space-y-0.5 text-sm text-slate-700 dark:text-slate-300">
                    {z.specificForms.map((f) => (
                      <li key={f.title.en}>{f.title[lang]}</li>
                    ))}
                  </ul>
                  {z.timing && (
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {c.bestDay}: <strong>{z.timing.day[lang]}</strong>
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <FaqSection id="sadaqa-faq-heading" title={c.faqTitle} faqs={c.faqs} />
        <RelatedLinks title={c.relatedTitle} links={c.related} routeLang={routeLang} />
      </main>

      <JsonLd data={faqJsonLd(c.faqs)} />
    </div>
  );
}
