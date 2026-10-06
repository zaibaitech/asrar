import type { MetadataRoute } from 'next';
import { PUBLIC_TOOLS, absoluteUrl } from '../src/lib/siteRoutes';
import { LOCALIZED_PATHS, arabicUrl, hreflangLanguages, localizedUrl } from '../src/lib/i18nRoutes';

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, priority: number) => {
    const localized = LOCALIZED_PATHS.includes(path);
    const base = { changeFrequency: 'daily' as const, priority };
    if (!localized) return [{ url: absoluteUrl(path), ...base }];
    // EN URL, its /fr mirror (and /ar page if any), each listing all as hreflang alternates.
    const alternates = { languages: hreflangLanguages(path) };
    const ar = arabicUrl(path);
    return [
      { url: localizedUrl(path, 'en'), ...base, alternates },
      { url: localizedUrl(path, 'fr'), ...base, alternates },
      // Arabic landing page, only where one exists (src/lib/i18nRoutes.ts AR_PATHS).
      ...(ar ? [{ url: ar, ...base, alternates }] : []),
    ];
  };

  return [...entry('/', 1), ...PUBLIC_TOOLS.flatMap((tool) => entry(tool.path, 0.8))];
}
