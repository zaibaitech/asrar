import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { IkhtiyaratPage } from './IkhtiyaratPage';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.asrar.app';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  let lang: 'en' | 'fr' = 'en';
  if (params?.lang === 'fr') {
    lang = 'fr';
  } else {
    const cookieStore = await cookies();
    if (cookieStore.get('asrar_lang')?.value === 'fr') lang = 'fr';
  }

  const meta = {
    en: {
      title: 'Best Dates (Ikhtiyārāt) — Asrār',
      description: 'Classical Islamic electional astrology for choosing an auspicious date for marriage (nikāḥ), based on real planetary positions, lunar phase, and traditional ikhtiyārāt rules.',
    },
    fr: {
      title: 'Meilleures Dates (Ikhtiyārāt) — Asrār',
      description: "Astrologie électionnelle islamique classique pour choisir une date propice au mariage (nikāḥ), basée sur les positions planétaires réelles, la phase lunaire et les règles traditionnelles de l'ikhtiyārāt.",
    },
  };

  const m = meta[lang];
  const imageUrl = `${baseUrl}/opengraph-image`;

  return {
    title: m.title,
    description: m.description,
    openGraph: {
      type: 'website',
      url: `${baseUrl}/ikhtiyarat`,
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

function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <div className="sticky top-0 bg-white/80 dark:bg-slate-900/80 border-b border-emerald-200 dark:border-emerald-800/50 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="w-6 h-6 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="w-32 h-6 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="w-6" />
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-32 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 animate-pulse" />
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <IkhtiyaratPage />
    </Suspense>
  );
}
