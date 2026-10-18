import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { gregorianToHijri } from '@/src/lib/ikhtiyarat/hijri';
import {
  electionTypeFromParams,
  evaluateFromParams,
  type PageParams,
  type PageSearchParams,
} from '@/src/lib/ikhtiyarat/sharedResult';
import { ogIkhtiyaratResultUrl, ogImageUrl } from '@/src/lib/og/urls';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.asrar.app';

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
    businessStart: { en: 'starting a business', fr: 'la création d\'une entreprise' },
    medical: { en: 'medical treatment', fr: 'un traitement médical' },
    home: { en: 'moving or building', fr: 'un déménagement ou une construction' },
    education: { en: 'education or studies', fr: 'des études ou une formation' },
  }[electionType];

  const title = lang === 'fr' ? 'Résultat Ikhtiyārāt' : 'Ikhtiyārāt Result';
  const tierLabel = result ? (lang === 'fr' ? result.tierInfo.labelFr : result.tierInfo.labelEn) : '';
  const description = result
    ? (lang === 'fr'
        ? `${resolvedParams.date} — ${tierLabel} (${result.score}/100) pour ${electionLabel.fr}, selon l'ikhtiyārāt classique.`
        : `${resolvedParams.date} — ${tierLabel} (${result.score}/100) for ${electionLabel.en}, per classical ikhtiyārāt.`)
    : (lang === 'fr' ? `Vérifiez une date pour ${electionLabel.fr} selon l'ikhtiyārāt classique.` : `Check a date for ${electionLabel.en} per classical ikhtiyārāt.`);

  const url = `${baseUrl}/ikhtiyarat/r/${resolvedParams.date}`;
  // Result card for this exact share link (date, tier, score) — what WhatsApp shows.
  const imageUrl = result
    ? ogIkhtiyaratResultUrl(resolvedParams.date, resolvedSearchParams)
    : ogImageUrl('ikhtiyarat', lang);

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
