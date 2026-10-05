import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildToolMetadata, resolvePageLang, type PageLang } from '@/src/lib/pageLang';
import { FaqSection, JsonLd, RelatedLinks, faqJsonLd, type RelatedLink } from '@/src/components/seo/SeoSections';
import { PURPOSE_SLUGS, REFERENCE_LOCATION, type PurposeSlug } from '@/src/lib/ikhtiyarat/purposes';
import { capitalise, formatDate, formatTime, getNextFavouredHours, getUpcomingDates, listJoin, planetName, purposeFacts } from '../data';
import { PURPOSE_NAV, REFLECTION, purposeCopy } from '../copy';
import { ElectionToolEmbed } from '../ElectionToolEmbed';
import { LocalTime } from '../LocalTime';

// Upcoming dates and planetary hours depend on "now": render per request
// (the page also reads the language cookie) so no cached HTML goes stale.
export const dynamic = 'force-dynamic';

type Params = Promise<{ purpose: string }>;
type Search = Promise<{ lang?: string }>;

function isPurpose(s: string): s is PurposeSlug {
  return (PURPOSE_SLUGS as string[]).includes(s);
}

export async function generateMetadata({ params, searchParams }: { params: Params; searchParams: Search }): Promise<Metadata> {
  const { purpose } = await params;
  if (!isPurpose(purpose)) return {};
  const lang = await resolvePageLang(searchParams);
  const c = purposeCopy(purpose, lang, purposeFacts(purpose, lang));
  return buildToolMetadata(`/best-day-for/${purpose}`, { title: c.title, description: c.description });
}

const UI = {
  en: {
    breadcrumb: 'Best day for…',
    daysTitle: 'Favoured days of the week',
    daysIntro: 'From the day-of-week rule the Asrār tool uses for this purpose:',
    points: 'pts',
    hoursTitle: 'Favoured planetary hours',
    hoursIntro: (h: string) => `A window in an hour of ${h} earns a bonus. Each planetary hour is one twelfth of daytime or night, so the clock times change with the seasons and your location.`,
    cautionsTitle: 'Conditions treated as cautions',
    cautionsIntro: 'Any of these rules a window out, whatever the weekday:',
    othersTitle: 'Other factors the tool weighs',
    upcomingTitle: 'Next favourable dates',
    upcomingIntro: (loc: string) => `Computed now for ${loc} (the app's default location) with the same engine as the "Find Best Dates" scanner: days rated Acceptable or better with no ruling-out condition, within the next 90 days. Times are ${loc} time (UTC+3).`,
    upcomingNone: 'No day in the next 90 days reaches Acceptable without a ruling-out condition. Use the tool below to see the least-afflicted options for your location.',
    bestWindow: 'best window',
    hourOf: (p: string) => `hour of ${p}`,
    nextHoursTitle: 'Next favourable planetary hours',
    nextHoursIntro: (loc: string, h: string) => `The coming hours of ${h} in ${loc} (UTC+3), computed for this page load.`,
    toolTitle: 'Check dates for your own location',
    toolIntro: 'The interactive ikhtiyārāt tool, set to this purpose. It uses your location if you allow it (otherwise Makkah).',
    openTool: 'Open the full Best Dates (Ikhtiyārāt) tool →',
    faqTitle: 'Frequently asked questions',
    relatedTitle: 'Related',
  },
  fr: {
    breadcrumb: 'Meilleur jour pour…',
    daysTitle: 'Jours de la semaine favorisés',
    daysIntro: "D'après la règle du jour de la semaine qu'utilise l'outil Asrār pour cet usage :",
    points: 'pts',
    hoursTitle: 'Heures planétaires favorisées',
    hoursIntro: (h: string) => `Un créneau situé dans une heure de ${h} reçoit un bonus. Chaque heure planétaire vaut un douzième du jour ou de la nuit : les heures d'horloge varient donc selon la saison et votre position.`,
    cautionsTitle: 'Conditions de prudence',
    cautionsIntro: "Chacune écarte un créneau, quel que soit le jour :",
    othersTitle: "Autres facteurs pris en compte par l'outil",
    upcomingTitle: 'Prochaines dates propices',
    upcomingIntro: (loc: string) => `Calculées maintenant pour ${loc} (position par défaut de l'application) avec le même moteur que « Trouver les meilleures dates » : jours notés Acceptable ou mieux, sans condition éliminatoire, dans les 90 prochains jours. Heures de ${loc} (UTC+3).`,
    upcomingNone: "Aucun jour des 90 prochains jours n'atteint Acceptable sans condition éliminatoire. Utilisez l'outil ci-dessous pour voir les options les moins affligées à votre position.",
    bestWindow: 'meilleur créneau',
    hourOf: (p: string) => `heure de ${p}`,
    nextHoursTitle: 'Prochaines heures planétaires favorables',
    nextHoursIntro: (loc: string, h: string) => `Les prochaines heures de ${h} à ${loc} (UTC+3), calculées à ce chargement de page.`,
    toolTitle: 'Vérifier des dates pour votre position',
    toolIntro: "L'outil interactif d'ikhtiyārāt, réglé sur cet usage. Il utilise votre position si vous l'autorisez (sinon La Mecque).",
    openTool: "Ouvrir l'outil complet Meilleures dates (Ikhtiyārāt) →",
    faqTitle: 'Questions fréquentes',
    relatedTitle: 'Voir aussi',
  },
} as const;

function related(purpose: PurposeSlug, lang: PageLang): RelatedLink[] {
  const others = PURPOSE_SLUGS.filter((s) => s !== purpose).map(
    (s) => [`/best-day-for/${s}`, PURPOSE_NAV[s][lang].name, lang === 'fr' ? 'Jours et heures favorables, et les prochaines dates propices.' : 'Favourable days and hours, and the next favourable dates.'] as RelatedLink,
  );
  const fr = lang === 'fr';
  const extra: RelatedLink[] = [
    ['/best-day-for', fr ? 'Meilleur jour pour… (tous les usages)' : 'Best Day For… (all purposes)', fr ? 'Mariage, voyage, déménagement, affaires : vue d’ensemble.' : 'Marriage, travel, moving home and business at a glance.'],
    ['/ikhtiyarat', fr ? 'Meilleures dates (Ikhtiyārāt)' : 'Best Dates (Ikhtiyārāt)', fr ? 'Vérifiez une date ou trouvez les meilleures dates à votre position.' : 'Check a date or find the best dates for your location.'],
    ['/planetary-hours', fr ? 'Heures planétaires' : 'Planetary Hours', fr ? "La planète gouvernante de l'heure actuelle à votre position." : 'The ruling planet of the current hour at your location.'],
    ['/planet-of-the-day', fr ? 'Planète du jour' : 'Planet of the Day', fr ? 'La planète gouvernante du jour, ses qualités et le dhikr recommandé.' : "Today's ruling planet, qualities and recommended dhikr."],
  ];
  if (purpose === 'marriage') {
    extra.push(['/compatibility', fr ? 'Compatibilité des prénoms pour le mariage' : 'Name Compatibility for Marriage', fr ? 'Comparez deux prénoms avec la méthode abjad avant un nikāḥ.' : 'Compare two names with the Abjad soul-connection method before a nikāḥ.']);
  }
  return [...others, ...extra];
}

export default async function Page({ params, searchParams }: { params: Params; searchParams: Search }) {
  const { purpose } = await params;
  if (!isPurpose(purpose)) notFound();
  const lang = await resolvePageLang(searchParams);
  const ui = UI[lang];
  const facts = purposeFacts(purpose, lang);
  const c = purposeCopy(purpose, lang, facts);
  const now = new Date();
  const [upcoming, nextHours] = [await getUpcomingDates(purpose, now), getNextFavouredHours(purpose, now)];
  const loc = lang === 'fr' ? REFERENCE_LOCATION.nameFr : REFERENCE_LOCATION.nameEn;
  const hoursList = listJoin(facts.planetNames, lang);
  const toolHref = `/ikhtiyarat?election=${facts.def.toolElection}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 dark:text-slate-400">
          <a href="/" className="hover:underline">Asrār</a> › <a href="/best-day-for" className="hover:underline">{ui.breadcrumb}</a>
        </nav>

        <header className="space-y-3">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{c.h1}</h1>
          {c.intro.map((p) => (
            <p key={p} className="text-slate-700 dark:text-slate-300 leading-relaxed">{p}</p>
          ))}
          <p className="text-sm text-slate-500 dark:text-slate-400">{REFLECTION[lang]}</p>
        </header>

        <section className="space-y-3" aria-labelledby="days-heading">
          <h2 id="days-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">{ui.daysTitle}</h2>
          <p className="text-slate-700 dark:text-slate-300">{ui.daysIntro}</p>
          <ul className="space-y-2">
            {facts.weekdays.map((w) => (
              <li key={w.day} className="rounded-xl border border-emerald-200 dark:border-emerald-800/50 bg-white/70 dark:bg-slate-800/40 px-4 py-3">
                <span className="font-semibold text-slate-900 dark:text-slate-100">{capitalise(w.name)}</span>{' '}
                <span className="text-xs text-emerald-700 dark:text-emerald-300">+{w.points} {ui.points}</span>
                <p className="text-sm text-slate-600 dark:text-slate-400">{w.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3" aria-labelledby="hours-heading">
          <h2 id="hours-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">{ui.hoursTitle}</h2>
          <p className="text-slate-700 dark:text-slate-300">{ui.hoursIntro(hoursList)}</p>
        </section>

        {c.sunnah && (
          <section className="space-y-3" aria-labelledby="sunnah-heading">
            <h2 id="sunnah-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">{c.sunnahTitle}</h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
              {c.sunnah.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </section>
        )}

        <section className="space-y-3" aria-labelledby="upcoming-heading">
          <h2 id="upcoming-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">{ui.upcomingTitle}</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">{ui.upcomingIntro(loc)}</p>
          {upcoming.length ? (
            <ul className="space-y-2">
              {upcoming.map((d) => (
                <li key={d.ymd} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/40 px-4 py-3">
                  <time dateTime={d.ymd} className="font-semibold text-slate-900 dark:text-slate-100">{capitalise(formatDate(d.ymd, lang))}</time>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {lang === 'fr' ? d.tierFr : d.tierEn} ({d.score}/100) · {ui.bestWindow} {formatTime(d.bestWindowIso, lang)}
                    {d.hourPlanet ? ` · ${ui.hourOf(planetName(d.hourPlanet, lang))}` : ''}
                  </p>
                  <LocalTime iso={d.bestWindowIso} lang={lang} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-700 dark:text-slate-300">{ui.upcomingNone}</p>
          )}
        </section>

        <section className="space-y-3" aria-labelledby="next-hours-heading">
          <h2 id="next-hours-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">{ui.nextHoursTitle}</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">{ui.nextHoursIntro(loc, hoursList)}</p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {nextHours.map((h) => (
              <li key={h.startIso} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/40 px-4 py-2">
                <span className="font-semibold text-slate-900 dark:text-slate-100">{planetName(h.planet, lang)}</span>{' '}
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {formatTime(h.startIso, lang, true)}–{formatTime(h.endIso, lang)}
                </span>
                <LocalTime iso={h.startIso} lang={lang} />
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3" aria-labelledby="cautions-heading">
          <h2 id="cautions-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">{ui.cautionsTitle}</h2>
          <p className="text-slate-700 dark:text-slate-300">{ui.cautionsIntro}</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
            {facts.cautions.map((x) => <li key={x}>{x}</li>)}
          </ul>
          <details className="text-sm text-slate-600 dark:text-slate-400">
            <summary className="cursor-pointer">{ui.othersTitle}</summary>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {facts.others.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </details>
        </section>

        <section className="space-y-3" aria-labelledby="tool-heading">
          <h2 id="tool-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">{ui.toolTitle}</h2>
          <p className="text-slate-700 dark:text-slate-300">{ui.toolIntro}</p>
          <ElectionToolEmbed electionType={facts.def.toolElection} />
          <p>
            <a href={toolHref} className="font-semibold text-emerald-700 dark:text-emerald-300 hover:underline">{ui.openTool}</a>
          </p>
        </section>

        <FaqSection id="best-day-faq-heading" title={ui.faqTitle} faqs={c.faqs} />
        <RelatedLinks title={ui.relatedTitle} links={related(purpose, lang)} />
      </main>

      <JsonLd data={faqJsonLd(c.faqs)} />
    </div>
  );
}
