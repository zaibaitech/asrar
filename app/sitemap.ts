import type { MetadataRoute } from 'next';
import { PUBLIC_TOOLS, absoluteUrl } from '../src/lib/siteRoutes';
import { COMMON_NAMES } from '../src/lib/names/commonNames';
import { NAME_PAGE_PATHS } from '../src/lib/names/seo';
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

  // English-only name pages (no FR/AR versions yet, so no hreflang alternates).
  const namePages = [...NAME_PAGE_PATHS, ...COMMON_NAMES.map((n) => `/names/${n.slug}`)].flatMap((p) => entry(p, 0.6));

  return [...entry('/', 1), ...PUBLIC_TOOLS.flatMap((tool) => entry(tool.path, 0.8)), ...namePages];
}
