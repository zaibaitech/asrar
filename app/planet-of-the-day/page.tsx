import { Suspense } from 'react';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { PlanetOfTheDayPage } from './PlanetOfTheDayPage';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { lang?: string };
}): Promise<Metadata> {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get('language')?.value;
  const lang = searchParams?.lang ?? cookieLang ?? 'en';
  const isEn = lang !== 'fr';

  const title = isEn ? 'Planet of the Day | Asrar' : 'Planète du Jour | Asrar';
  const description = isEn
    ? 'Discover the ruling planet of today, its spiritual qualities, recommended dhikr, and daily guidance inspired by Islamic ʿIlm al-Nujūm.'
    : 'Découvrez la planète gouvernante du jour, ses qualités spirituelles, le dhikr recommandé et les conseils quotidiens inspirés de l\'ʿIlm al-Nujūm islamique.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: `${process.env.NEXT_PUBLIC_APP_URL ?? ''}/icons/icon-512.png` }],
    },
    twitter: { card: 'summary', title, description },
  };
}

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

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <PlanetOfTheDayPage />
    </Suspense>
  );
}
