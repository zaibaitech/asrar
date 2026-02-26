import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { RamadanPage } from './RamadanPage';
import { challengeMeta } from '@/src/lib/seoConfig';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.asrar.app';

/**
 * Ramadan Challenge Page
 * ======================
 * Dedicated full-page experience for Ramadan spiritual challenges.
 * Replaces the dropdown with an immersive dhikr tracking interface.
 */

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string; challenge?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  
  // Check URL param first, then cookie for language
  let lang: 'en' | 'fr' = 'en';
  
  if (params?.lang === 'fr') {
    lang = 'fr';
  } else if (params?.lang === 'en') {
    lang = 'en';
  } else {
    const cookieStore = await cookies();
    const cookieLang = cookieStore.get('asrar_lang')?.value;
    if (cookieLang === 'fr') {
      lang = 'fr';
    }
  }

  const meta = {
    en: {
      title: 'Ramadan Spiritual Challenges — Asrār',
      description: 'Track your Ramadan dhikr goals with Istighfār, Ṣalawāt, Divine Names, and the 201 Prophetic Names practice. Transform your spiritual journey this holy month.',
    },
    fr: {
      title: 'Défis Spirituels du Ramadan — Asrār',
      description: 'Suivez vos objectifs de dhikr du Ramadan avec l\'Istighfār, les Ṣalawāt, les Noms Divins et la pratique des 201 Noms Prophétiques. Transformez votre parcours spirituel ce mois sacré.',
    },
  };

  const currentMeta = meta[lang];

  // Check for challenge-specific deep-link metadata
  const challenge = params?.challenge as keyof typeof challengeMeta | undefined;
  if (challenge && challengeMeta[challenge]) {
    const cMeta = challengeMeta[challenge][lang];
    return {
      title: cMeta.title,
      description: cMeta.description,
      openGraph: {
        type: 'website',
        locale: lang === 'fr' ? 'fr_FR' : 'en_GB',
        url: `${baseUrl}/ramadan?challenge=${challenge}${lang === 'fr' ? '&lang=fr' : ''}`,
        siteName: 'Asrār Everyday',
        title: cMeta.title,
        description: cMeta.description,
        images: [
          {
            url: lang === 'fr' ? '/og-image-fr.png' : '/og-image-en.png',
            width: 1200,
            height: 630,
            alt: cMeta.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: cMeta.title,
        description: cMeta.description,
        images: [lang === 'fr' ? '/og-image-fr.png' : '/og-image-en.png'],
      },
    };
  }

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    openGraph: {
      type: 'website',
      locale: lang === 'fr' ? 'fr_FR' : 'en_GB',
      url: `${baseUrl}/ramadan${lang === 'fr' ? '?lang=fr' : ''}`,
      siteName: 'Asrār Everyday',
      title: currentMeta.title,
      description: currentMeta.description,
      images: [
        {
          url: lang === 'fr' ? '/og-image-fr.png' : '/og-image-en.png',
          width: 1200,
          height: 630,
          alt: currentMeta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMeta.title,
      description: currentMeta.description,
      images: [lang === 'fr' ? '/og-image-fr.png' : '/og-image-en.png'],
    },
  };
}

// Loading fallback for Suspense — matches real page layout to prevent flash
function RamadanLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-amber-600 to-orange-500 px-4 py-3">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <div className="w-8 h-8 rounded-lg bg-white/20 animate-pulse" />
          <div className="w-40 h-5 rounded bg-white/20 animate-pulse" />
          <div className="w-8 h-8 rounded-lg bg-white/20 animate-pulse" />
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 pt-5">
        <div className="h-2 rounded-full bg-amber-200/50 dark:bg-amber-800/30 mb-6" />
        {[1, 2].map(i => (
          <div key={i} className="mb-4 rounded-xl bg-white/60 dark:bg-slate-800/40 border border-amber-200/40 dark:border-amber-700/20 p-4 animate-pulse">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-200/60 dark:bg-amber-700/30" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-32 rounded bg-amber-200/60 dark:bg-amber-700/30" />
                <div className="h-3 w-48 rounded bg-amber-100/60 dark:bg-amber-800/20" />
              </div>
              <div className="w-16 h-10 rounded-lg bg-amber-200/60 dark:bg-amber-700/30" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<RamadanLoading />}>
      <RamadanPage />
    </Suspense>
  );
}
