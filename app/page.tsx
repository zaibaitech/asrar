import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { bilingualMeta } from '../src/lib/seoConfig';
import AsrarEveryday from '../asrar-everyday-app';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.asrar.app';

/**
 * Generate dynamic metadata based on URL parameters and cookies
 * Supports language detection and challenge-specific OG tags
 */
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string; challenge?: string }>;
}): Promise<Metadata> {
  // Await searchParams (Next.js 14.2+ requirement)
  const params = await searchParams;
  
  // Check URL param first, then cookie
  let lang: 'en' | 'fr' = 'en';
  
  if (params?.lang === 'fr') {
    lang = 'fr';
  } else if (params?.lang === 'en') {
    lang = 'en';
  } else {
    // Try to read from cookie
    const cookieStore = await cookies();
    const cookieLang = cookieStore.get('asrar_lang')?.value;
    if (cookieLang === 'fr') {
      lang = 'fr';
    }
  }

  // Default bilingual metadata
  const meta = bilingualMeta[lang];
  // Ensure absolute URL for default OG image
  const defaultImageUrl = meta.ogImage.startsWith('http') ? meta.ogImage : `${baseUrl}${meta.ogImage}`;
  
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
          url: defaultImageUrl,
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
      images: [defaultImageUrl],
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
