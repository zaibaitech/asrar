import type { Metadata } from 'next';
import { absoluteUrl } from '@/src/lib/siteRoutes';
import { OG_SIZE, ogImageUrl, type OgPageKey } from '@/src/lib/og/urls';

/**
 * Metadata for the English-only name pages (/names, /names/<slug>,
 * /99-names-of-allah): self-canonical, no hreflang alternates (there is no
 * FR/AR version yet), and an existing Latin-script share card.
 */
export function englishPageMetadata(path: string, ogKey: OgPageKey, m: { title: string; description: string }): Metadata {
  const url = absoluteUrl(path);
  const image = ogImageUrl(ogKey, 'en');
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: 'Asrār Everyday',
      locale: 'en_GB',
      title: m.title,
      description: m.description,
      images: [{ url: image, ...OG_SIZE, alt: m.title }],
    },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description, images: [image] },
  };
}

/** EN-only SEO paths added for the names pages, for the sitemap. */
export const NAME_PAGE_PATHS = ['/names', '/99-names-of-allah'] as const;
