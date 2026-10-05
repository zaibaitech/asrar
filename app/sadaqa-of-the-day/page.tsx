import type { Metadata } from 'next';
import { SADAQAH_BY_DAY } from '@/src/features/calculator/lib/sadaqahByDay';
import { buildToolMetadata, getRouteLang, resolvePageLang, type PageLang } from '@/src/lib/pageLang';
import { localizeHref } from '@/src/lib/i18nRoutes';
import { FaqSection, JsonLd, RelatedLinks, faqJsonLd, type FaqItem, type RelatedLink } from '@/src/components/seo/SeoSections';
import { WeekdaySadaqa } from '@/src/components/sadaqa/WeekdaySadaqa';
import { SadaqaDateChecker } from '@/src/components/sadaqa/SadaqaDateChecker';

const PATH = '/sadaqa-of-the-day';

// The "today" card depends on the current date: always render per request
// (the page also reads the language cookie) and let the client re-check the
// visitor's local weekday, so no cached HTML can freeze an old day.
export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Sadaqa of the Day: Recommended Sadaqah for Each Weekday',
    description:
      "Today's recommended sadaqah and the full weekly table: water on Monday, healing on Tuesday, opening the way on Thursday, clothes and perfume on Friday. West African tradition, for reflection.",
  },
  fr: {
    title: 'Sadaqa du jour : la sadaqah recommandée pour chaque jour',
    description:
      "La sadaqah recommandée aujourd'hui et le tableau complet de la semaine : l'eau le lundi, la guérison le mardi, l'ouverture le jeudi, vêtements et parfum le vendredi. Tradition ouest-africaine, pour la réflexion.",
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

/** "a; b; c" from the existing weekday data, so FAQ answers never drift from the table. */
function itemsFor(day: number, lang: PageLang) {
  const d = SADAQAH_BY_DAY[day];
  return (lang === 'fr' ? d.fr : d.en).items.map((s) => s.replace(/\.$/, '')).join('; ');
}

function copy(lang: PageLang) {
  if (lang === 'fr') {
    const faqs: FaqItem[] = [
      {
        q: "Qu'est-ce que la « sadaqa du jour » ?",
        a: "C'est la forme de sadaqah (aumône volontaire) traditionnellement associée au jour de la semaine, selon un enseignement ouest-africain (sénégalais / wolof). Cette page affiche la suggestion d'aujourd'hui et le tableau des sept jours.",
      },
      {
        q: 'Quel est le meilleur jour pour donner la sadaqah ?',
        a: "La sadaqah est bonne tous les jours, et beaucoup de musulmans prennent l'habitude de donner le vendredi (Jumuʿa). Dans cette tradition, le mardi est lié à la guérison et à la protection, et le jeudi à l'ouverture de la voie et à la levée des blocages. Ne retardez jamais un don parce que ce n'est pas « le bon jour ».",
      },
      {
        q: 'Quelle sadaqah donner le lundi ?',
        a: `Pour le lundi, la tradition recommande : ${itemsFor(1, 'fr')}.`,
      },
      {
        q: 'Quelle sadaqah donner le vendredi ?',
        a: `Le vendredi est associé à Vénus ; les dons recommandés sont : ${itemsFor(5, 'fr')}.`,
      },
      {
        q: 'Puis-je utiliser le jour de ma naissance ?',
        a: "Oui. Le guide peut se lire soit avec le jour où vous comptez donner, soit avec le jour de la semaine de votre naissance. Entrez une date dans le vérificateur ci-dessus pour voir le jour correspondant.",
      },
      {
        q: 'Est-ce une obligation ou une garantie de résultat ?',
        a: "Non. Ce sont des suggestions coutumières pour la réflexion. La sadaqah se donne sincèrement pour Allah, sans condition de jour, et ne garantit aucun résultat : Allah seul connaît l'invisible.",
      },
    ];
    return {
      h1: 'Sadaqa du jour — la sadaqah recommandée pour chaque jour de la semaine',
      intro1:
        "La sadaqah, l'aumône volontaire, est bonne chaque jour, et beaucoup de musulmans prennent l'habitude de donner le vendredi (Jumuʿa). Donner un peu, régulièrement, vaut mieux qu'attendre le « jour parfait ».",
      intro2:
        "Dans l'enseignement ouest-africain (sénégalais / wolof) — le sarax — chaque jour de la semaine est aussi associé à des formes précises de sadaqah : l'eau le lundi, l'aide pour les médicaments d'un malade le mardi, papier et stylos le mercredi, nourrir les nécessiteux et soutenir la mosquée le jeudi, vêtements, savon et parfum le vendredi. Voici la suggestion du jour et le tableau complet, tirés du même guide que le calculateur Asrār.",
      intro3:
        "Pour la réflexion et l'éducation, sans prédiction ni promesse de résultat ; Allah seul connaît l'invisible.",
      checkerTitle: 'Vérifier une autre date',
      checkerIntro: 'Le jour où vous comptez donner, ou votre date de naissance.',
      faqTitle: 'Questions fréquentes',
      faqs,
      relatedTitle: 'Voir aussi',
      related: [
        ['/sadaqa', 'Guide de la sadaqa', 'Sadaqah par jour, par mois hégirien de naissance et par burj.'],
        ['/name-and-mother-burj', 'Votre burj par votre nom et celui de votre mère', 'Votre burj, votre jour béni, votre dhikr et la sadaqah de votre burj.'],
        ['/planet-of-the-day', 'Planète du jour', 'La planète gouvernante du jour, ses qualités et le dhikr recommandé.'],
        ['/ikhtiyarat', 'Meilleures dates (Ikhtiyārāt)', 'Choisir une date propice pour le mariage, le voyage ou les affaires.'],
        ['/ramadan', 'Défis de Zikr', 'Suivez votre dhikr : Istighfār, Ṣalawāt et Noms divins.'],
      ] as RelatedLink[],
    };
  }
  const faqs: FaqItem[] = [
    {
      q: 'What is the "sadaqa of the day"?',
      a: 'It is the form of sadaqah (voluntary charity) traditionally linked to each day of the week in a West African (Senegalese / Wolof) teaching. This page shows today\'s suggestion and the table for all seven days.',
    },
    {
      q: 'What is the best day to give sadaqah?',
      a: 'Sadaqah is good on every day, and many Muslims make a habit of giving on Friday (Jumuʿa). In this tradition Tuesday is linked with healing and protection, and Thursday with opening the way and removing blockages. Never delay giving because it is not the "right" day.',
    },
    {
      q: 'What sadaqah should I give on Monday?',
      a: `For Monday the tradition recommends: ${itemsFor(1, 'en')}.`,
    },
    {
      q: 'What sadaqah should I give on Friday?',
      a: `Friday is associated with Venus; the recommended gifts are: ${itemsFor(5, 'en')}.`,
    },
    {
      q: 'Can I use the weekday I was born on?',
      a: 'Yes. The guidance can be read either for the day you plan to give or for the weekday of your birth. Enter a date in the checker above to see which weekday it falls on.',
    },
    {
      q: 'Is this an obligation or a guarantee of results?',
      a: 'No. These are customary suggestions for reflection. Sadaqah is given sincerely for the sake of Allah, on any day, and promises no particular outcome: Allah alone knows the unseen.',
    },
  ];
  return {
    h1: 'Sadaqa of the Day — Recommended Sadaqah for Each Day of the Week',
    intro1:
      'Sadaqah, voluntary charity, is good on every day, and many Muslims make a habit of giving on Friday (Jumuʿa). Giving a little, consistently, is better than waiting for the "perfect" day.',
    intro2:
      'In West African (Senegalese / Wolof) teaching — sarax — each weekday is also linked to particular forms of sadaqah: water on Monday, help with someone\'s medicine on Tuesday, paper and pens on Wednesday, feeding the needy and supporting the mosque on Thursday, clothes, soap and perfume on Friday. Below is today\'s suggestion and the full weekly table, from the same guidance used by the Asrār calculator.',
    intro3: 'For reflection and education, not prediction or a promise of outcomes; Allah alone knows the unseen.',
    checkerTitle: 'Check another date',
    checkerIntro: 'The day you plan to give, or your date of birth.',
    faqTitle: 'Frequently asked questions',
    faqs,
    relatedTitle: 'Related',
    related: [
      ['/sadaqa', 'Sadaqa Guide', 'Sadaqah by weekday, by Hijri birth month and by burj.'],
      ['/name-and-mother-burj', "Your Burj from Your Name & Mother's Name", 'Your burj, blessed day, dhikr and the sadaqah for your burj.'],
      ['/planet-of-the-day', 'Planet of the Day', "Today's ruling planet, qualities and recommended dhikr."],
      ['/ikhtiyarat', 'Best Dates (Ikhtiyārāt)', 'Choose an auspicious date for marriage, travel or business.'],
      ['/ramadan', 'Zikr Challenges', 'Track your dhikr: Istighfār, Ṣalawāt and Divine Names.'],
    ] as RelatedLink[],
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const lang = await resolvePageLang(searchParams);
  const routeLang = await getRouteLang();
  const c = copy(lang);
  // Server default for the highlight (UTC, i.e. Senegal time); the client re-checks local time.
  const serverDay = new Date().getUTCDay();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 dark:text-slate-400">
          <a href={localizeHref('/', routeLang)} className="hover:underline">Asrār</a> › <a href={localizeHref('/sadaqa', routeLang)} className="hover:underline">Sadaqa</a>
        </nav>
        <header className="space-y-3">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{c.h1}</h1>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.intro1}</p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.intro2}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{c.intro3}</p>
        </header>

        <WeekdaySadaqa lang={lang} serverDay={serverDay} />

        <section className="space-y-3" aria-labelledby="sadaqa-checker-heading">
          <h2 id="sadaqa-checker-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            {c.checkerTitle}
          </h2>
          <p className="text-slate-700 dark:text-slate-300">{c.checkerIntro}</p>
          <SadaqaDateChecker lang={lang} mode="day" />
        </section>

        <FaqSection id="sadaqa-day-faq-heading" title={c.faqTitle} faqs={c.faqs} />
        <RelatedLinks title={c.relatedTitle} links={c.related} routeLang={routeLang} />
      </main>

      <JsonLd data={faqJsonLd(c.faqs)} />
    </div>
  );
}
