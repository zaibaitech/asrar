/**
 * Compact "Related tools" block shown just below a tool's results on the
 * crawlable SEO pages (links and names: ./relatedTools.ts). Same card classes
 * the SEO pages already use; RTL + Arabic font on Arabic pages.
 */
import { RELATED_TOOLS_TITLE as TITLE, pageEventId, relatedToolLinksWithIds, type ToolsLang } from './relatedTools';

export function RelatedTools({
  pagePath,
  lang,
  routeLang = lang,
  className,
}: {
  /** English path of the page the block is on (key into RELATED_TOOLS). */
  pagePath: string;
  /** Language of the page content (names and heading). */
  lang: ToolsLang;
  /** Language of the URL being served (link targets). Defaults to `lang`. */
  routeLang?: ToolsLang;
  /** Optional wrapper classes (width/padding) when placed outside a page's own container. */
  className?: string;
}) {
  const links = relatedToolLinksWithIds(pagePath, lang, routeLang);
  const fromTool = pageEventId(pagePath);
  if (!links.length) return null;
  const ar = lang === 'ar';
  // Urdu: RTL, and the Urdu font is inherited from the /ur layout.
  const rtl = ar || lang === 'ur';
  const nav = (
    <nav
      aria-label={TITLE[lang]}
      lang={rtl ? lang : undefined}
      dir={rtl ? 'rtl' : undefined}
      className={`rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/40 p-4 space-y-3${ar ? ' font-arabic' : ''}`}
    >
      <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">{TITLE[lang]}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {links.map(([href, name, toTool]) => (
          <li key={href}>
            <a
              href={href}
              // Read by AnalyticsClickTracker (related_tool_click); fixed tool ids only.
              data-rt-from={fromTool}
              data-rt-to={toTool}
              className="flex items-center min-h-[44px] rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300 hover:underline"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
  return className ? <div className={className}>{nav}</div> : nav;
}
