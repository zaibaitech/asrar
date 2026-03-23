import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import ShareActions from './ShareActions';
import { QURAN_META } from '@/src/features/ilm-huruf/quranResonance';
import { validateVerseReference } from '@/src/features/ilm-huruf/quranApi';

const BASE_URL = 'https://asrar.app';
const ANDROID_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.zaibaitech.asrariya';

type PageParams = {
  surahNumber: string;
  ayahNumber: string;
};

type AyahPayload = {
  arabicText: string;
  translation: string;
  surahName: string;
  surahNameArabic: string;
};

type AlQuranCloudResponse = {
  data?: Array<{
    text?: string;
    surah?: {
      englishName?: string;
      name?: string;
    };
    edition?: {
      identifier?: string;
    };
  }>;
};

function getPreferredLanguage(acceptLanguage: string | null): 'en' | 'fr' {
  if (!acceptLanguage) {
    return 'en';
  }

  return acceptLanguage.toLowerCase().includes('fr') ? 'fr' : 'en';
}

const getAyahData = cache(
  async (
    surahNumber: number,
    ayahNumber: number,
    lang: 'en' | 'fr'
  ): Promise<AyahPayload | null> => {
    const translationEdition = lang === 'fr' ? 'fr.hamidullah' : 'en.asad';

    const response = await fetch(
      `https://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumber}/editions/quran-simple,${translationEdition}`,
      {
        headers: {
          Accept: 'application/json',
        },
        next: {
          revalidate: 86400,
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const json = (await response.json()) as AlQuranCloudResponse;
    const entries = Array.isArray(json.data) ? json.data : [];

    const arabicEntry = entries.find(
      (entry) => entry.edition?.identifier === 'quran-simple'
    );

    const translationEntry = entries.find(
      (entry) => entry.edition?.identifier === translationEdition
    );

    const surahMeta = QURAN_META[surahNumber];

    return {
      arabicText: arabicEntry?.text || '',
      translation: translationEntry?.text || '',
      surahName:
        arabicEntry?.surah?.englishName || surahMeta?.name || `Surah ${surahNumber}`,
      surahNameArabic: arabicEntry?.surah?.name || surahMeta?.nameAr || '',
    };
  }
);

async function getRequestLanguage(): Promise<'en' | 'fr'> {
  const requestHeaders = await headers();
  const acceptLanguage = requestHeaders.get('accept-language');
  return getPreferredLanguage(acceptLanguage);
}

function buildShareUrl(surahNumber: number, ayahNumber: number) {
  return `${BASE_URL}/share/quran/${surahNumber}/${ayahNumber}`;
}

function buildOgImageUrl(surahNumber: number, ayahNumber: number) {
  return `${BASE_URL}/og/quran/${surahNumber}/${ayahNumber}.png`;
}

function truncateForDescription(text: string, maxLength = 240): string {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 1)}…`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const surahNumber = Number(resolvedParams.surahNumber);
  const ayahNumber = Number(resolvedParams.ayahNumber);

  if (!validateVerseReference(surahNumber, ayahNumber)) {
    return {
      title: 'Ayah Not Found | Asrariya',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const lang = await getRequestLanguage();
  const ayahData = await getAyahData(surahNumber, ayahNumber, lang);

  const surahName = ayahData?.surahName || QURAN_META[surahNumber]?.name || 'Quran';
  const title = `Surah ${surahName} ${surahNumber}:${ayahNumber}`;
  const description = truncateForDescription(
    `${ayahData?.arabicText || ''} — ${ayahData?.translation || ''}`.trim()
  );
  const url = buildShareUrl(surahNumber, ayahNumber);
  const ogImage = buildOgImageUrl(surahNumber, ayahNumber);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      siteName: 'Asrariya',
      images: [
        {
          url: ogImage,
          alt: `Surah ${surahName} ${surahNumber}:${ayahNumber}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function QuranSharePage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const resolvedParams = await params;
  const surahNumber = Number(resolvedParams.surahNumber);
  const ayahNumber = Number(resolvedParams.ayahNumber);

  if (!validateVerseReference(surahNumber, ayahNumber)) {
    notFound();
  }

  const lang = await getRequestLanguage();
  const ayahData = await getAyahData(surahNumber, ayahNumber, lang);

  if (!ayahData || !ayahData.arabicText) {
    notFound();
  }

  const deepLinkUrl = `asrariya://quran/${surahNumber}/${ayahNumber}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700">
          Asrariya Quran Share
        </p>

        <h1 className="mt-2 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
          Surah {ayahData.surahName} ({ayahData.surahNameArabic}) {surahNumber}:{ayahNumber}
        </h1>

        <p className="mt-6 text-right text-2xl leading-relaxed text-slate-900 sm:text-3xl">
          {ayahData.arabicText}
        </p>

        <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg">
          {ayahData.translation}
        </p>

        <ShareActions
          deepLinkUrl={deepLinkUrl}
          androidStoreUrl={ANDROID_STORE_URL}
        />
      </div>
    </main>
  );
}
