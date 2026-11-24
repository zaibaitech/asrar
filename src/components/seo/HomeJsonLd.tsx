import { SITE_URL, absoluteUrl } from '@/src/lib/siteRoutes';

/**
 * Official Asrariya Facebook Page. Already recorded on the open
 * feat/facebook-page-link branch (PR #76). Used here only as Organization.sameAs;
 * no new profiles are invented.
 */
export const FACEBOOK_PAGE_URL = 'https://www.facebook.com/people/Asrariya/61551898746499/';

/** Organization + WebSite JSON-LD for the homepage. No site-search action: that route does not exist. */
export function HomeJsonLd() {
  const orgId = `${SITE_URL}/#organization`;
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: 'Asrār (asrar.app)',
        url: absoluteUrl('/about'),
        description:
          'Asrār (asrar.app) is a free web app of reflective tools from the Islamic esoteric tradition, built by Zaibai Tech. For learning and reflection, not prediction.',
        logo: absoluteUrl('/icons/icon-512x512.png'),
        sameAs: [FACEBOOK_PAGE_URL],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: 'Asrār (asrar.app)',
        url: SITE_URL,
        publisher: { '@id': orgId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
