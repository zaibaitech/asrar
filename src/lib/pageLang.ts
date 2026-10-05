import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { SITE_URL, absoluteUrl } from './siteRoutes';

export type PageLang = 'en' | 'fr';

/**
 * Resolve the page language the same way /abjad and /ikhtiyarat do:
 * ?lang= param first, then the asrar_lang cookie set by middleware, else EN.
 */
export async function resolvePageLang(
  searchParams: Promise<{ lang?: string }> | { lang?: string } | undefined,
): Promise<PageLang> {
  const params = await searchParams;
  if (params?.lang === 'fr') return 'fr';
  if (params?.lang === 'en') return 'en';
  const cookieStore = await cookies();
  return cookieStore.get('asrar_lang')?.value === 'fr' ? 'fr' : 'en';
}

/**
 * Standard metadata for a public tool page: title (rendered through the
 * root "%s | Asrār" template), description, self-canonical on the EN URL,
 * and Open Graph / Twitter cards — the same shape /abjad and /ikhtiyarat use.
 */
export function buildToolMetadata(path: string, m: { title: string; description: string }): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = `${SITE_URL}/opengraph-image`;

  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
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
