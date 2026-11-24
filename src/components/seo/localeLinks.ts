/**
 * Data for the server-rendered "Other languages" links (component: ./LocaleLinks.tsx).
 * Kept in a .ts file next to relatedTools.ts, like the other per-language label tables.
 */
import { equivalentLocalePath, isIndexableUrEnPath } from '@/src/lib/i18nRoutes';
import type { ToolsLang } from './relatedTools';

const LANGS: readonly { code: ToolsLang; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'ar', label: 'العربية' },
  { code: 'ur', label: 'اردو' },
];

export const LOCALE_LINKS_TITLE: Record<ToolsLang, string> = {
  en: 'Other languages',
  fr: 'Autres langues',
  ar: 'لغات أخرى',
  ur: 'دیگر زبانیں', // hand-written; listed in docs/i18n/ur-review.md
};

/**
 * Real localized URLs of `pagePath` in every language except the one being served.
 * Urdu is listed only where the Urdu page is on the reviewed, indexable allow-list.
 */
export function localeLinkTargets(pagePath: string, served: ToolsLang): { code: ToolsLang; label: string; href: string }[] {
  return LANGS.filter((l) => l.code !== served)
    .filter((l) => l.code !== 'ur' || isIndexableUrEnPath(pagePath))
    .map((l) => ({ ...l, href: equivalentLocalePath(pagePath, l.code) }))
    .filter((l): l is { code: ToolsLang; label: string; href: string } => Boolean(l.href));
}
