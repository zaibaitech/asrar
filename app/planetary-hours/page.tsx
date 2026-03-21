import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { PlanetaryHoursPage } from './PlanetaryHoursPage';

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
      title: 'Planetary Hours Guide — Asrār',
      description: 'Real-time Chaldean planetary hours based on your location. Discover the ruling planet of the current hour, its spiritual significance, and the best activities to align with natural rhythms in ʿIlm al-Nujūm.',
    },
    fr: {
      title: 'Guide des Heures Planétaires — Asrār',
      description: 'Heures planétaires chaldéennes en temps réel basées sur votre position. Découvrez la planète gouvernante de l\'heure actuelle, sa signification spirituelle et les meilleures activités pour s\'aligner avec les rythmes naturels.',
    },
  };

  const m = meta[lang];
  const imageUrl = `${baseUrl}/og/default.jpg`;

  return {
    title: m.title,
    description: m.description,
    openGraph: {
      type: 'website',
      url: `${baseUrl}/planetary-hours`,
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <div className="sticky top-0 bg-white/80 dark:bg-slate-900/80 border-b border-indigo-200 dark:border-indigo-800/50 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="w-20 h-8 rounded-lg bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="w-40 h-6 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="w-16" />
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
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
      <PlanetaryHoursPage />
    </Suspense>
  );
}
