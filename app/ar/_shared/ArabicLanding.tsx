/**
 * Building blocks for the Arabic landing pages (/ar/...).
 *
 * Same tool-first layout as /ikhtiyarat (PR #64): a compact Arabic header
 * (short H1 + 2–3 line intro), then the existing tool component unchanged,
 * then the Arabic educational text, FAQ and links.
 *
 * Only the Arabic containers carry lang="ar" dir="rtl"; the embedded tool is
 * wrapped in dir="ltr" because its own UI is English/French (the app has no
 * Arabic UI), so its layout is exactly the same as on its English page.
 */
import type { Metadata } from 'next';
import { localeAlternates } from '@/src/lib/i18nRoutes';
import { ogImageUrl, OG_SIZE, type OgPageKey } from '@/src/lib/og/urls';
import { FaqSection, JsonLd, faqJsonLd, type FaqItem } from '@/src/components/seo/SeoSections';

export const AR_DISCLAIMER = 'هذه الأداة للتأمّل والتعلّم، لا للتنبّؤ؛ ولا يعلم الغيبَ إلا الله.';
export const AR_TOOL_UI_NOTE = 'واجهة الأداة متاحة حاليًا بالإنجليزية والفرنسية.';

/**
 * Metadata for an Arabic landing page: Arabic title/description, canonical on
 * the /ar URL, en/fr/ar/x-default hreflang. The share card is the page's
 * existing (Latin-script) card: the OG renderer cannot shape Arabic text.
 */
export function arabicMetadata(enPath: string, ogKey: OgPageKey, m: { title: string; description: string }): Metadata {
  const alternates = localeAlternates(enPath, 'ar');
  const imageUrl = ogImageUrl(ogKey, 'en');
  return {
    title: m.title,
    description: m.description,
    alternates,
    openGraph: {
      type: 'website',
      url: alternates.canonical,
      siteName: 'Asrār Everyday',
      locale: 'ar_AR',
      alternateLocale: ['en_GB', 'fr_FR'],
      title: m.title,
      description: m.description,
      images: [{ url: imageUrl, ...OG_SIZE, alt: m.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
      images: [imageUrl],
    },
  };
}

/** Compact RTL header: back link, H1, short lead, tool-language note. */
export function ArabicHeader({ h1, lead, note = AR_TOOL_UI_NOTE }: { h1: string; lead: string; note?: string }) {
  return (
    <header lang="ar" dir="rtl" className="font-arabic max-w-2xl mx-auto px-4 pt-3 pb-4 sm:pt-8 sm:pb-5 space-y-1.5 sm:space-y-2">
      <nav aria-label="مسار التنقل" className="text-xs">
        <a href="/" className="inline-flex items-center min-h-[24px] text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 hover:underline">
          → أسرار
        </a>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-slate-900 dark:text-slate-100">{h1}</h1>
      <p className="text-[0.95rem] sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">{lead}</p>
      {note ? <p className="text-xs text-slate-500 dark:text-slate-400">{note}</p> : null}
    </header>
  );
}

/** RTL container for the educational content below the tool. */
export function ArabicBody({ children }: { children: React.ReactNode }) {
  return (
    <div lang="ar" dir="rtl" className="font-arabic max-w-2xl mx-auto px-4 py-8 space-y-8 leading-loose">
      {children}
    </div>
  );
}

export function ArabicSection({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3" aria-labelledby={id}>
      <h2 id={id} className="text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
      <div className="space-y-3 text-slate-700 dark:text-slate-300">{children}</div>
    </section>
  );
}

/** FAQ (reuses the shared FaqSection markup) + FAQPage JSON-LD. */
export function ArabicFaq({ id, faqs }: { id: string; faqs: readonly FaqItem[] }) {
  return (
    <>
      <FaqSection id={id} title="أسئلة شائعة" faqs={faqs} />
      <JsonLd data={{ ...faqJsonLd(faqs), inLanguage: 'ar' }} />
    </>
  );
}

export interface ArabicLink {
  href: string;
  name: string;
  desc: string;
}

/** Links to the other Arabic pages and to the tools' English pages. */
export function ArabicLinks({ links }: { links: readonly ArabicLink[] }) {
  return (
    <nav aria-label="صفحات ذات صلة" className="space-y-3">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">صفحات ذات صلة</h2>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="font-semibold text-emerald-700 dark:text-emerald-300 hover:underline">{l.name}</a>
            <p className="text-sm text-slate-600 dark:text-slate-400">{l.desc}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** The same tool's English and French pages. */
export function toolPageLinks(enPath: string, nameEn: string, nameFr: string): ArabicLink[] {
  return [
    { href: enPath, name: `${nameEn} (بالإنجليزية)`, desc: 'الأداة نفسها مع الشرح باللغة الإنجليزية.' },
    { href: `/fr${enPath}`, name: `${nameFr} (بالفرنسية)`, desc: 'الأداة نفسها مع الشرح باللغة الفرنسية.' },
  ];
}

const ALL_LINKS: Record<string, ArabicLink> = {
  abjad: { href: '/ar/abjad', name: 'حساب الجمل', desc: 'قيمة أي اسم أو عبارة عربية بالترتيب المغربي أو المشرقي.' },
  hours: { href: '/ar/planetary-hours', name: 'ساعات الكواكب اليوم', desc: 'الكوكب الحاكم للساعة الحالية في موقعك.' },
  burj: { href: '/ar/name-and-mother-burj', name: 'برجك من اسمك واسم أمك', desc: 'البرج والعنصر واليوم المبارك والذكر من حساب الجمل.' },
  sadaqa: { href: '/ar/sadaqa-of-the-day', name: 'صدقة اليوم', desc: 'الصدقة المستحبة لكل يوم من أيام الأسبوع.' },
};

/** The other Arabic landing pages (excluding `self`). */
export function otherArabicPages(self: keyof typeof ALL_LINKS): ArabicLink[] {
  return Object.entries(ALL_LINKS).filter(([k]) => k !== self).map(([, v]) => v);
}

export { AR_WEEKDAYS, AR_ELEMENTS } from './weekdays';
