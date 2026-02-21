import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { bilingualMeta, challengeMeta } from '../src/lib/seoConfig';
import AsrarEveryday from '../asrar-everyday-app';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.asrar.app';

/**
 * Generate dynamic metadata based on URL parameters and cookies
 * Supports language detection and challenge-specific OG tags
 */
export async function generateMetadata({
  searchParams,
}: {
  searchParams: { lang?: string; challenge?: string };
}): Promise<Metadata> {
  // Check URL param first, then cookie
  let lang: 'en' | 'fr' = 'en';
  
  if (searchParams?.lang === 'fr') {
    lang = 'fr';
  } else if (searchParams?.lang === 'en') {
    lang = 'en';
  } else {
    // Try to read from cookie
    const cookieStore = cookies();
    const cookieLang = cookieStore.get('asrar_lang')?.value;
    if (cookieLang === 'fr') {
      lang = 'fr';
    }
  }

  const challenge = searchParams?.challenge as keyof typeof challengeMeta | undefined;
  
  // Check for challenge-specific metadata
  if (challenge && challengeMeta[challenge]) {
    const meta = challengeMeta[challenge][lang];
    return {
      title: meta.title,
      description: meta.description,
      openGraph: {
        type: 'website',
        locale: lang === 'fr' ? 'fr_FR' : 'en_GB',
        url: `${baseUrl}?challenge=${challenge}${lang === 'fr' ? '&lang=fr' : ''}`,
        siteName: 'Asrār Everyday',
        title: meta.title,
        description: meta.description,
        images: [
          {
            url: bilingualMeta[lang].ogImage,
            width: 1200,
            height: 630,
            alt: meta.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.title,
        description: meta.description,
        images: [bilingualMeta[lang].ogImage],
      },
    };
  }

  // Default bilingual metadata
  const meta = bilingualMeta[lang];
  return {
    title: meta.title,
    description: meta.shortDescription,
    openGraph: {
      type: 'website',
      locale: meta.locale,
      alternateLocale: lang === 'en' ? ['fr_FR'] : ['en_GB'],
      url: `${baseUrl}${lang === 'fr' ? '?lang=fr' : ''}`,
      siteName: 'Asrār Everyday',
      title: meta.title,
      description: meta.fullDescription,
      images: [
        {
          url: meta.ogImage,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.fullDescription,
      images: [meta.ogImage],
    },
  };
}

/**
 * Home page component for Asrār Everyday
 * Server component that renders the client app
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <AsrarEveryday />
    </div>
  );
}
