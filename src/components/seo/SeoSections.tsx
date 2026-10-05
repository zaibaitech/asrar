/**
 * Server-rendered building blocks shared by the crawlable tool landing pages
 * (/sadaqa, /sadaqa-of-the-day, /compatibility, /name-and-mother-burj).
 * Mirrors the markup used on /ikhtiyarat: a <dl> FAQ with FAQPage JSON-LD and
 * a "Related tools" <nav> of plain links.
 */

import { localizeHref, type RouteLang } from '@/src/lib/i18nRoutes';

export interface FaqItem {
  q: string;
  a: string;
}

export type RelatedLink = readonly [href: string, name: string, description: string];

export function FaqSection({ id, title, faqs }: { id: string; title: string; faqs: readonly FaqItem[] }) {
  return (
    <section className="space-y-4" aria-labelledby={id}>
      <h2 id={id} className="text-xl font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h2>
      <dl className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.q} className="space-y-1">
            <dt className="font-semibold text-slate-900 dark:text-slate-100">{faq.q}</dt>
            <dd className="text-slate-700 dark:text-slate-300 leading-relaxed">{faq.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function RelatedLinks({
  title,
  links,
  routeLang = 'en',
}: {
  title: string;
  links: readonly RelatedLink[];
  /** Language of the URL being served; on /fr pages links point at /fr mirrors. */
  routeLang?: RouteLang;
}) {
  return (
    <nav aria-label={title} className="space-y-3">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
      <ul className="space-y-3">
        {links.map(([href, name, desc]) => (
          <li key={href}>
            <a href={localizeHref(href, routeLang)} className="font-semibold text-emerald-700 dark:text-emerald-300 hover:underline">
              {name}
            </a>
            <p className="text-sm text-slate-600 dark:text-slate-400">{desc}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function faqJsonLd(faqs: readonly FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output; escape "<" so text can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
