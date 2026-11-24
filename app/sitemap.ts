import type { MetadataRoute } from 'next';
import { PUBLIC_TOOLS, INFO_PAGES, absoluteUrl } from '../src/lib/siteRoutes';
import { COMMON_NAMES } from '../src/lib/names/commonNames';
import { NAME_PAGE_PATHS } from '../src/lib/names/seo';
import { LOCALIZED_PATHS, arabicUrl, hreflangLanguages, indexableUrduUrl, localizedUrl } from '../src/lib/i18nRoutes';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entry = (path: string, priority: number) => {
    const localized = LOCALIZED_PATHS.includes(path);
    const base = { changeFrequency: 'daily' as const, priority, lastModified };
    if (!localized) {
      const ur = indexableUrduUrl(path);
      if (!ur) return [{ url: absoluteUrl(path), ...base }];
      const alternates = { languages: hreflangLanguages(path) };
      return [
        { url: absoluteUrl(path), ...base, alternates },
        { url: ur, ...base, alternates },
      ];
    }
    // EN URL, its /fr mirror (and /ar page if any), each listing all as hreflang alternates.
    const alternates = { languages: hreflangLanguages(path) };
    const ar = arabicUrl(path);
    const ur = indexableUrduUrl(path); // reviewed Urdu page on INDEXABLE_UR_PATHS
    return [
      { url: localizedUrl(path, 'en'), ...base, alternates },
      { url: localizedUrl(path, 'fr'), ...base, alternates },
      // Arabic version: dedicated landing page (AR_PATHS) or the /ar app mirror.
      ...(ar ? [{ url: ar, ...base, alternates }] : []),
      ...(ur ? [{ url: ur, ...base, alternates }] : []),
    ];
  };

  // English-only name pages (no FR/AR versions yet, so no hreflang alternates).
  const namePages = [...NAME_PAGE_PATHS, ...COMMON_NAMES.map((n) => `/names/${n.slug}`)].flatMap((p) => entry(p, 0.6));

  const tools = PUBLIC_TOOLS;
  const infoPages = INFO_PAGES.flatMap((page) => entry(page.path, 0.6));
  return [...entry('/', 1), ...tools.flatMap((tool) => entry(tool.path, 0.8)), ...namePages, ...infoPages];
}
