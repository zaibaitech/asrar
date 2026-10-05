import type { Metadata } from 'next';
import { buildToolMetadata, resolvePageLang, type PageLang } from '@/src/lib/pageLang';
import { FaqSection, JsonLd, RelatedLinks, faqJsonLd, type FaqItem, type RelatedLink } from '@/src/components/seo/SeoSections';
import { PURPOSE_SLUGS, REFERENCE_LOCATION, type PurposeSlug } from '@/src/lib/ikhtiyarat/purposes';
import { capitalise, formatDate, getUpcomingDates, listJoin, purposeFacts } from './data';
import { PURPOSE_NAV, REFLECTION } from './copy';

const PATH = '/best-day-for';

// The "next favourable date" column depends on today's date.
export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Best Day For Nikah, Travel, Moving & Business (Ikhtiyārāt)',
    description:
      'Favourable weekdays and planetary hours for marriage (nikāḥ), travel, moving home and starting a business in the classical ikhtiyārāt tradition, with the next favourable dates. For reflection.',
  },
  fr: {
    title: 'Jour favorable pour le mariage, voyager, déménager, les affaires',
    description:
      "Les jours et heures planétaires favorables pour le mariage (nikāḥ), le voyage, le déménagement et les affaires selon l'ikhtiyārāt classique, avec les prochaines dates propices. Pour la réflexion.",
  },
};

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  return buildToolMetadata(PATH, META[await resolvePageLang(searchParams)]);
}

function copy(lang: PageLang, thursdayEverywhere: boolean) {
  if (lang === 'fr') {
    const faqs: FaqItem[] = [
      { q: "Qu'est-ce que l'ikhtiyārāt ?", a: "L'ikhtiyārāt (choix du moment, astrologie électionnelle) est une science classique qui cherche le moment le plus propice pour commencer une action — mariage, voyage, construction, affaires — à partir du jour, de l'heure planétaire, de la Lune et des demeures lunaires." },
      { q: 'Existe-t-il un jour favorable pour tout ?', a: thursdayEverywhere ? "Non : chaque usage a ses propres règles. Le jeudi figure toutefois parmi les jours favorisés pour les quatre usages de cette page." : "Non : chaque usage a ses propres règles, jours et heures." },
      { q: "Dois-je attendre une date « parfaite » ?", a: "Non. Aucune date n'est religieusement interdite pour le nikāḥ, et ces règles sont un support de réflexion. Elles ne remplacent ni l'istikhāra, ni la consultation (mashwara), ni le tawakkul." },
      { q: 'Pourquoi les dates sont-elles calculées pour La Mecque ?', a: "Les heures planétaires et la Lune dépendent du lieu. Cette page utilise La Mecque, la position par défaut de l'application ; l'outil Meilleures dates calcule pour votre propre position." },
      { q: 'Les dates sont-elles à jour ?', a: "Oui. Les prochaines dates sont recalculées pour la date du jour avec le même moteur que l'outil Meilleures dates (Ikhtiyārāt)." },
    ];
    return {
      h1: 'Meilleur jour pour… le mariage, le voyage, le déménagement et les affaires',
      intro: [
        "Quel jour choisir pour un nikāḥ, un départ en voyage, un déménagement ou le lancement d'une affaire ? La science classique de l'ikhtiyārāt (choix du moment) attribue à chaque usage ses jours et heures planétaires favorables.",
        "Voici, pour chaque usage, ce que favorisent les règles de l'outil Asrār et la prochaine date propice, recalculée à chaque chargement de la page.",
      ],
      th: ['Usage', 'Jours favorisés', 'Heures planétaires', 'Prochaine date propice'],
      none: 'aucune dans les 90 jours',
      note: `Dates calculées pour ${REFERENCE_LOCATION.nameFr} (position par défaut de l'application).`,
      faqTitle: 'Questions fréquentes',
      faqs,
      relatedTitle: 'Voir aussi',
    };
  }
  const faqs: FaqItem[] = [
    { q: 'What is ikhtiyārāt?', a: 'Ikhtiyārāt (electional timing) is the classical science of choosing the most favourable moment to begin an action — a marriage, a journey, a building, a business — from the day, the planetary hour, the Moon and the lunar mansions.' },
    { q: 'Is there one best day for everything?', a: thursdayEverywhere ? 'No: each purpose has its own rules. Thursday is, however, among the favoured days for all four purposes on this page.' : 'No: each purpose has its own rules, days and hours.' },
    { q: 'Should I wait for a "perfect" date?', a: 'No. No date is religiously forbidden for nikāḥ, and these rules are an aid to reflection. They are not a substitute for istikhāra, consultation (mashwara) and tawakkul (reliance on Allah).' },
    { q: 'Why are the dates computed for Makkah?', a: "Planetary hours and the Moon depend on location. This page uses Makkah, the app's default location; the Best Dates tool computes for your own location." },
    { q: 'Are the dates up to date?', a: 'Yes. The next dates are recalculated for today with the same engine as the Best Dates (Ikhtiyārāt) tool.' },
  ];
  return {
    h1: 'Best Day For… Nikah, Travel, Moving Home and Business',
    intro: [
      'Which day should you choose for a nikāḥ, setting out on a journey, moving home or starting a business? The classical science of ikhtiyārāt (electional timing) gives each purpose its own favourable weekdays and planetary hours.',
      'For each purpose below: what the Asrār tool’s rules favour, and the next favourable date, recalculated every time this page loads.',
    ],
    th: ['Purpose', 'Favoured days', 'Planetary hours', 'Next favourable date'],
    none: 'none within 90 days',
    note: `Dates computed for ${REFERENCE_LOCATION.nameEn} (the app's default location).`,
    faqTitle: 'Frequently asked questions',
    faqs,
    relatedTitle: 'Related',
  };
}

export default async function Page({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = await resolvePageLang(searchParams);
  const now = new Date();
  const rows = await Promise.all(
    PURPOSE_SLUGS.map(async (slug: PurposeSlug) => {
      const f = purposeFacts(slug, lang);
      const [next] = await getUpcomingDates(slug, now);
      return { slug, f, next };
    }),
  );
  const thursdayEverywhere = rows.every((r) => r.f.weekdays.some((w) => w.day === 4));
  const c = copy(lang, thursdayEverywhere);
  const fr = lang === 'fr';
  const related: RelatedLink[] = [
    ['/ikhtiyarat', fr ? 'Meilleures dates (Ikhtiyārāt)' : 'Best Dates (Ikhtiyārāt)', fr ? 'Vérifiez une date ou trouvez les meilleures dates à votre position.' : 'Check a date or find the best dates for your location.'],
    ['/planetary-hours', fr ? 'Heures planétaires' : 'Planetary Hours', fr ? "La planète gouvernante de l'heure actuelle à votre position." : 'The ruling planet of the current hour at your location.'],
    ['/planet-of-the-day', fr ? 'Planète du jour' : 'Planet of the Day', fr ? 'La planète gouvernante du jour, ses qualités et le dhikr recommandé.' : "Today's ruling planet, qualities and recommended dhikr."],
    ['/compatibility', fr ? 'Compatibilité des prénoms pour le mariage' : 'Name Compatibility for Marriage', fr ? 'Comparez deux prénoms avec la méthode abjad avant un nikāḥ.' : 'Compare two names with the Abjad soul-connection method before a nikāḥ.'],
    ['/sadaqa-of-the-day', fr ? 'Sadaqa du jour' : 'Sadaqa of the Day', fr ? "La sadaqah recommandée aujourd'hui et le tableau de la semaine." : "Today's recommended sadaqah and the weekly table."],
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 dark:text-slate-400">
          <a href="/" className="hover:underline">Asrār</a> › <a href="/ikhtiyarat" className="hover:underline">Ikhtiyārāt</a>
        </nav>
        <header className="space-y-3">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{c.h1}</h1>
          {c.intro.map((p) => (
            <p key={p} className="text-slate-700 dark:text-slate-300 leading-relaxed">{p}</p>
          ))}
          <p className="text-sm text-slate-500 dark:text-slate-400">{REFLECTION[lang]}</p>
        </header>

        <section className="space-y-3">
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/40">
            <table className="w-full text-sm">
              <thead className="text-left text-slate-500 dark:text-slate-400">
                <tr>{c.th.map((h) => <th key={h} className="px-3 py-2 font-medium">{h}</th>)}</tr>
              </thead>
              <tbody>
                {rows.map(({ slug, f, next }) => (
                  <tr key={slug} className="border-t border-slate-200 dark:border-slate-700 align-top">
                    <td className="px-3 py-2">
                      <a href={`/best-day-for/${slug}`} className="font-semibold text-emerald-700 dark:text-emerald-300 hover:underline">{PURPOSE_NAV[slug][lang].name}</a>
                    </td>
                    <td className="px-3 py-2 text-slate-700 dark:text-slate-300">{capitalise(listJoin(f.weekdayNames, lang))}</td>
                    <td className="px-3 py-2 text-slate-700 dark:text-slate-300">{listJoin(f.planetNames, lang)}</td>
                    <td className="px-3 py-2 text-slate-700 dark:text-slate-300">
                      {next ? <time dateTime={next.ymd}>{capitalise(formatDate(next.ymd, lang))}</time> : c.none}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">{c.note}</p>
        </section>

        <FaqSection id="best-day-hub-faq-heading" title={c.faqTitle} faqs={c.faqs} />
        <RelatedLinks title={c.relatedTitle} links={related} />
      </main>
      <JsonLd data={faqJsonLd(c.faqs)} />
    </div>
  );
}
