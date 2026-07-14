import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { evaluateElection } from '@/src/lib/ikhtiyarat/engine';
import { marriageElectionConfig } from '@/src/lib/ikhtiyarat/elections/marriage';
import { travelElectionConfig } from '@/src/lib/ikhtiyarat/elections/travel';
import { businessElectionConfig } from '@/src/lib/ikhtiyarat/elections/business';
import { gregorianToHijri } from '@/src/lib/ikhtiyarat/hijri';
import { ElectionInput, ElectionRulesConfig, ElectionType } from '@/src/lib/ikhtiyarat/types';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.asrar.app';

const CONFIG_BY_ELECTION_TYPE: Record<ElectionType, ElectionRulesConfig> = {
  marriage: marriageElectionConfig,
  travel: travelElectionConfig,
  business: businessElectionConfig,
};

interface PageParams {
  date: string; // YYYY-MM-DD
}

interface PageSearchParams {
  lat?: string;
  lon?: string;
  tz?: string;
  lang?: string;
  /** Defaults to 'marriage' — keeps every pre-existing share link (minted before travel existed) resolving the same as before. */
  election?: string;
}

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function electionTypeFromParams(searchParams: PageSearchParams): ElectionType {
  if (searchParams.election === 'travel') return 'travel';
  if (searchParams.election === 'business') return 'business';
  return 'marriage';
}

/** Re-derive the election result from the URL alone — nothing is stored server-side. */
function evaluateFromParams(dateStr: string, searchParams: PageSearchParams) {
  if (!DATE_RE.test(dateStr)) return null;

  const lat = Number(searchParams.lat);
  const lon = Number(searchParams.lon);
  const tz = searchParams.tz || 'UTC';
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) return null;

  const datetime = new Date(`${dateStr}T12:00:00Z`);
  if (Number.isNaN(datetime.getTime())) return null;

  const electionType = electionTypeFromParams(searchParams);
  const input: ElectionInput = { datetime, lat, lon, tz, electionType };
  return evaluateElection(input, CONFIG_BY_ELECTION_TYPE[electionType]);
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<PageParams>;
  searchParams: Promise<PageSearchParams>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const lang = resolvedSearchParams.lang === 'fr' ? 'fr' : 'en';
  const electionType = electionTypeFromParams(resolvedSearchParams);
  const result = evaluateFromParams(resolvedParams.date, resolvedSearchParams);

  const electionLabel = {
    marriage: { en: 'marriage', fr: 'le mariage' },
    travel: { en: 'travel', fr: 'le voyage' },
    business: { en: 'business', fr: 'les affaires' },
  }[electionType];

  const title = lang === 'fr' ? 'Résultat Ikhtiyārāt — Asrār' : 'Ikhtiyārāt Result — Asrār';
  const tierLabel = result ? (lang === 'fr' ? result.tierInfo.labelFr : result.tierInfo.labelEn) : '';
  const description = result
    ? (lang === 'fr'
        ? `${resolvedParams.date} — ${tierLabel} (${result.score}/100) pour ${electionLabel.fr}, selon l'ikhtiyārāt classique.`
        : `${resolvedParams.date} — ${tierLabel} (${result.score}/100) for ${electionLabel.en}, per classical ikhtiyārāt.`)
    : (lang === 'fr' ? `Vérifiez une date pour ${electionLabel.fr} selon l'ikhtiyārāt classique.` : `Check a date for ${electionLabel.en} per classical ikhtiyārāt.`);

  const url = `${baseUrl}/ikhtiyarat/r/${resolvedParams.date}`;
  const imageUrl = `${baseUrl}/og/default.jpg`;

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      url,
      siteName: 'Asrār Everyday',
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

const TIER_COPY = {
  en: { checkYourself: 'Check a date for yourself', backToTool: 'Best Dates (Ikhtiyārāt)', hijriDate: 'Hijri date', score: 'Score' },
  fr: { checkYourself: 'Vérifiez une date vous-même', backToTool: 'Meilleures Dates (Ikhtiyārāt)', hijriDate: 'Date hégirienne', score: 'Score' },
};

export default async function SharedResultPage({
  params,
  searchParams,
}: {
  params: Promise<PageParams>;
  searchParams: Promise<PageSearchParams>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const lang = resolvedSearchParams.lang === 'fr' ? 'fr' : 'en';
  const c = TIER_COPY[lang];
  const electionType = electionTypeFromParams(resolvedSearchParams);

  const result = evaluateFromParams(resolvedParams.date, resolvedSearchParams);
  if (!result) notFound();

  // Must match the tz evaluateFromParams used to compute result.date's local
  // day (startOfLocalDay in engine.ts) — formatting in a different zone can
  // display the wrong calendar date near a day boundary (e.g. BST midnight
  // is still "yesterday" in UTC).
  const displayTz = resolvedSearchParams.tz || 'UTC';
  const hijri = gregorianToHijri(result.date);
  const tierLabel = lang === 'fr' ? result.tierInfo.labelFr : result.tierInfo.labelEn;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/60 p-6 space-y-4 text-center">
        <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          {result.date.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: displayTz })}
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400">
          {c.hijriDate}: {hijri.day} {hijri.monthName[lang]} ({hijri.monthName.wolof}) {hijri.year} AH
        </div>

        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
          style={{ backgroundColor: `${result.tierInfo.color}12`, borderColor: `${result.tierInfo.color}40` }}
        >
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: result.tierInfo.color }} />
          <span className="text-base font-semibold" style={{ color: result.tierInfo.color }}>{tierLabel}</span>
          <span dir="rtl" lang="ar" className="font-arabic text-sm opacity-70" style={{ color: result.tierInfo.color }}>{result.tierInfo.labelAr}</span>
        </div>

        <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          {c.score}: {result.score}/100
        </div>

        <Link
          href={`/ikhtiyarat?date=${resolvedParams.date}&election=${electionType}${resolvedSearchParams.lang ? `&lang=${resolvedSearchParams.lang}` : ''}`}
          className="block w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors"
        >
          {c.checkYourself}
        </Link>

        <Link href="/ikhtiyarat" className="block text-xs text-slate-500 dark:text-slate-400 hover:underline">
          {c.backToTool}
        </Link>
      </div>
    </div>
  );
}
