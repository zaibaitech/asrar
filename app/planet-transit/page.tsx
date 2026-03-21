import { Suspense } from 'react';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { PlanetTransitPage } from './PlanetTransitPage';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { lang?: string };
}): Promise<Metadata> {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get('language')?.value;
  const lang = searchParams?.lang ?? cookieLang ?? 'en';
  const isEn = lang !== 'fr';

  const title = isEn ? 'Planetary Transits | Asrar' : 'Transits Planétaires | Asrar';
  const description = isEn
    ? 'Live positions of all 7 classical planets, essential dignities, retrograde status, and spiritual guidance inspired by Islamic ʿIlm al-Nujūm.'
    : 'Positions en direct des 7 planètes classiques, dignités essentielles, statut rétrograde et conseils spirituels inspirés de l\'ʿIlm al-Nujūm islamique.';

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-slate-50 dark:from-slate-900 dark:to-slate-900 animate-pulse">
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-2xl w-2/3" />
        <div className="h-40 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
        <div className="h-96 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <PlanetTransitPage />
    </Suspense>
  );
}
