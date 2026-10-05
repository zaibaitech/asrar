import { Suspense } from 'react';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { absoluteUrl } from '@/src/lib/siteRoutes';
import { PlanetOfTheDayPage } from './PlanetOfTheDayPage';

type Lang = 'en' | 'fr';

async function resolveLang(searchParams: Promise<{ lang?: string }>): Promise<Lang> {
  const params = await searchParams;
  if (params?.lang === 'fr') return 'fr';
  if (params?.lang === 'en') return 'en';
  const cookieStore = await cookies();
  // Prefer asrar_lang (used elsewhere); fall back to legacy "language" cookie.
  const asrar = cookieStore.get('asrar_lang')?.value;
  if (asrar === 'fr') return 'fr';
  if (asrar === 'en') return 'en';
  return cookieStore.get('language')?.value === 'fr' ? 'fr' : 'en';
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const lang = await resolveLang(searchParams);
  const isEn = lang !== 'fr';

  const title = isEn ? 'Planet of the Day' : 'Planète du Jour';
  const description = isEn
    ? 'Discover the ruling planet of today, its spiritual qualities, recommended dhikr, and daily guidance inspired by Islamic ʿIlm al-Nujūm.'
    : 'Découvrez la planète gouvernante du jour, ses qualités spirituelles, le dhikr recommandé et les conseils quotidiens inspirés de l\'ʿIlm al-Nujūm islamique.';

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl('/planet-of-the-day'),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl('/planet-of-the-day'),
      images: [{ url: absoluteUrl('/icons/icon-512x512.png') }],
    },
    twitter: { card: 'summary', title, description },
  };
}

const H1 = {
  en: "Planet of the Day — Today's Ruling Planet & Dhikr",
  fr: 'Planète du jour — Planète gouvernante du jour et dhikr',
} as const;

function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-slate-50 dark:from-slate-900 dark:to-slate-900 animate-pulse">
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-2xl w-2/3" />
        <div className="h-40 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
        <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
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

  return (
    <>
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-slate-50 dark:from-slate-900 dark:via-amber-950/10 dark:to-slate-900">
        <div className="max-w-3xl mx-auto px-4 pt-6 pb-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            {H1[lang]}
          </h1>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <PlanetOfTheDayPage />
      </Suspense>
    </>
  );
}
