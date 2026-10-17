/**
 * Building blocks for the Urdu pages (/ur/...), phase 1 (under native review).
 *
 * Same tool-first layout and the same classes as the Arabic landing pages
 * (app/ar/_shared/ArabicLanding.tsx): a compact header (short H1 + lead),
 * the existing tool component unchanged, then the educational text, FAQ and
 * links. RTL and the Urdu font come from app/ur/layout.tsx; the embedded tool
 * gets the Urdu UI (the language context switches to 'ur' on /ur pages).
 */
import { FaqSection, JsonLd, faqJsonLd } from '@/src/components/seo/SeoSections';
import { UR_COMMON, UR_TOOLS, type Faq, type UrToolKey } from '@/src/lib/i18n/urPages';

/** Compact RTL header: back link, H1, short lead, tool-language note. */
export function UrduHeader({ h1, lead, note = UR_COMMON.toolUiNote.ur }: { h1: string; lead: string; note?: string | null }) {
  return (
    <header className="max-w-2xl mx-auto px-4 pt-3 pb-4 sm:pt-8 sm:pb-5 space-y-1.5 sm:space-y-2">
      <nav aria-label={UR_COMMON.breadcrumbLabel.ur} className="text-xs">
        <a href="/ur" className="inline-flex items-center min-h-[24px] text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 hover:underline">
          → {UR_COMMON.home.ur}
        </a>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold leading-loose text-slate-900 dark:text-slate-100">{h1}</h1>
      <p className="text-[0.95rem] sm:text-base text-slate-600 dark:text-slate-300 leading-loose">{lead}</p>
      {note ? <p className="text-xs text-slate-500 dark:text-slate-400 leading-loose">{note}</p> : null}
    </header>
  );
}

/** Container for the educational content below the tool. */
export function UrduBody({ children }: { children: React.ReactNode }) {
  return <div className="max-w-2xl mx-auto px-4 py-8 space-y-8 leading-loose">{children}</div>;
}

export function UrduSection({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3" aria-labelledby={id}>
      <h2 id={id} className="text-xl font-semibold leading-loose text-slate-900 dark:text-slate-100">{title}</h2>
      <div className="space-y-3 text-slate-700 dark:text-slate-300">{children}</div>
    </section>
  );
}

/** FAQ (shared FaqSection markup) + FAQPage JSON-LD in Urdu. */
export function UrduFaq({ id, faqs }: { id: string; faqs: readonly Faq[] }) {
  const items = faqs.map((f) => ({ q: f.q.ur, a: f.a.ur }));
  return (
    <>
      <FaqSection id={id} title={UR_COMMON.faqTitle.ur} faqs={items} />
      <JsonLd data={{ ...faqJsonLd(items), inLanguage: 'ur' }} />
    </>
  );
}

export interface UrduLink {
  href: string;
  name: string;
  desc: string;
}

/** Links to the other Urdu pages and to the tool's English page. */
export function UrduLinks({ links }: { links: readonly UrduLink[] }) {
  return (
    <nav aria-label={UR_COMMON.linksTitle.ur} className="space-y-3">
      <h2 className="text-xl font-semibold leading-loose text-slate-900 dark:text-slate-100">{UR_COMMON.linksTitle.ur}</h2>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="font-semibold text-emerald-700 dark:text-emerald-300 hover:underline">{l.name}</a>
            <p className="text-sm leading-loose text-slate-600 dark:text-slate-400">{l.desc}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** The other Urdu tool pages (excluding `self`). */
export function otherUrduPages(self: UrToolKey): UrduLink[] {
  return (Object.keys(UR_TOOLS) as UrToolKey[])
    .filter((k) => k !== self)
    .map((k) => ({ href: UR_TOOLS[k].path, name: UR_TOOLS[k].name.ur, desc: UR_TOOLS[k].desc.ur }));
}

/** The same tool's English page. */
export function englishPageLink(enPath: string, nameEn: string): UrduLink {
  return { href: enPath, name: `${nameEn} ${UR_COMMON.inEnglish.ur}`, desc: UR_COMMON.inEnglishDesc.ur };
}

/** Qur'an / Divine Names inside Urdu text: Arabic script, Naskh. */
export function Ar({ children }: { children: React.ReactNode }) {
  return <span lang="ar" className="font-arabic">{children}</span>;
}
