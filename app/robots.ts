import type { MetadataRoute } from 'next';
import { SITE_URL } from '../src/lib/siteRoutes';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /auth and /profile stay crawlable so bots can see their noindex tag.
        disallow: ['/api/', '/api-docs', '/auth/callback'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
