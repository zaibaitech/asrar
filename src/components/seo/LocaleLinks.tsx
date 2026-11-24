/**
 * Server-rendered "Other languages" links: plain <a href> to the real localized
 * URLs (/fr, /ar, /ur), so crawlers and visitors can reach every language
 * version from the page itself, not only from the sitemap or the client-side
 * switcher. Targets and labels: ./localeLinks.ts.
 */
import { LOCALE_LINKS_TITLE as TITLE, localeLinkTargets } from './localeLinks';
import type { ToolsLang } from './relatedTools';

export function LocaleLinks({ pagePath, served }: { pagePath: string; served: ToolsLang }) {
  const links = localeLinkTargets(pagePath, served);
  if (!links.length) return null;
  const rtl = served === 'ar' || served === 'ur';
  return (
    <nav
      aria-label={TITLE[served]}
      lang={rtl ? served : undefined}
      dir={rtl ? 'rtl' : undefined}
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600 dark:text-slate-400${served === 'ar' ? ' font-arabic' : ''}`}
    >
      <span>{TITLE[served]}:</span>
      {links.map((l) => (
        <a key={l.code} href={l.href} hrefLang={l.code} lang={l.code} className="font-semibold text-emerald-700 dark:text-emerald-300 hover:underline">
          {l.label}
        </a>
      ))}
    </nav>
  );
}
