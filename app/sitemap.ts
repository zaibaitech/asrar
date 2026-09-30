import type { MetadataRoute } from 'next';
import { PUBLIC_TOOLS, absoluteUrl } from '../src/lib/siteRoutes';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl('/'), changeFrequency: 'daily', priority: 1 },
    ...PUBLIC_TOOLS.map((tool) => ({
      url: absoluteUrl(tool.path),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    })),
  ];
}
