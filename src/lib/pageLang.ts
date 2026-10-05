import type { Metadata } from 'next';
import { cookies, headers } from 'next/headers';
import { SITE_URL } from './siteRoutes';
import { ROUTE_LANG_HEADER, localeAlternates, localizedUrl, type RouteLang } from './i18nRoutes';

export type PageLang = 'en' | 'fr';

/**
 * Language of the URL being served: 'fr' when middleware rewrote a /fr/...
 * mirror onto this route, otherwise 'en'. Drives canonical, hreflang and
 * internal links (content language may still follow the cookie on EN URLs).
 */
export async function getRouteLang(): Promise<RouteLang> {
  const h = await headers();
  return h.get(ROUTE_LANG_HEADER) === 'fr' ? 'fr' : 'en';
}

/**
 * Resolve the page language the same way /abjad and /ikhtiyarat do:
 * /fr URL first, then ?lang= param, then the asrar_lang cookie set by
 * middleware, else EN.
 */
export async function resolvePageLang(
  searchParams: Promise<{ lang?: string }> | { lang?: string } | undefined,
): Promise<PageLang> {
  if ((await getRouteLang()) === 'fr') return 'fr';
  const params = await searchParams;
  if (params?.lang === 'fr') return 'fr';
  if (params?.lang === 'en') return 'en';
  const cookieStore = await cookies();
  return cookieStore.get('asrar_lang')?.value === 'fr' ? 'fr' : 'en';
}

/**
 * Standard metadata for a public tool page: title (rendered through the
 * root "%s | Asrār" template), description, self-canonical on the URL being
 * served (EN path or its /fr mirror) with en/fr/x-default hreflang, and
 * Open Graph / Twitter cards — the same shape /abjad and /ikhtiyarat use.
 */
export async function buildToolMetadata(path: string, m: { title: string; description: string }): Promise<Metadata> {
  const routeLang = await getRouteLang();
  const url = localizedUrl(path, routeLang);
  const imageUrl = `${SITE_URL}/opengraph-image`;

  return {
    title: m.title,
    description: m.description,
    alternates: localeAlternates(path, routeLang),
    openGraph: {
      type: 'website',
      url,
      siteName: 'Asrār Everyday',
      locale: routeLang === 'fr' ? 'fr_FR' : 'en_GB',
      alternateLocale: routeLang === 'fr' ? ['en_GB'] : ['fr_FR'],
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
