import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { bilingualMeta } from '../src/lib/seoConfig';
import { PUBLIC_TOOLS, SITE_URL, absoluteUrl } from '../src/lib/siteRoutes';
import AsrarEveryday from '../asrar-everyday-app';
import { HomeSeoShell } from './HomeSeoShell';

const baseUrl = SITE_URL;

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
    title: { absolute: meta.title },
    description: meta.shortDescription,
    alternates: {
      canonical: absoluteUrl('/'),
    },
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
      <HomeSeoShell>
        <main className="max-w-3xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Asrār — Planetary Hours, Abjad &amp; Islamic Sacred Sciences
          </h1>
          <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
            Asrār is a companion for the traditional Islamic sciences of ʿIlm al-Nujūm (celestial
            timing) and ʿIlm al-Ḥurūf (the science of letters). Find the ruling planet of the current
            hour and day, follow live planetary transits, build your birth profile, choose auspicious
            dates with classical ikhtiyārāt, calculate Abjad values, and keep up your daily dhikr.
          </p>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            These tools are for reflection and education, not prediction. Only Allah knows the unseen.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-slate-900 dark:text-slate-100">Explore the tools</h2>
          <ul className="mt-4 space-y-3">
            {PUBLIC_TOOLS.map((tool) => (
              <li key={tool.path}>
                <a href={tool.path} className="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline">
                  {tool.name}
                </a>
                <p className="text-sm text-slate-600 dark:text-slate-400">{tool.description}</p>
              </li>
            ))}
          </ul>
        </main>
      </HomeSeoShell>
    </div>
  );
}
