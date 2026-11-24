/**
 * Shared layout for the About and Methodology information pages
 * (English, /fr rewrite, dedicated /ar and /ur route files).
 */
import type { Metadata } from 'next';
import { LocaleLinks } from './LocaleLinks';
import { JsonLd } from '@/src/components/seo/SeoSections';
import { FACEBOOK_PAGE_URL } from '@/src/components/seo/HomeJsonLd';
import { SITE_URL, absoluteUrl } from '@/src/lib/siteRoutes';
import { localeAlternates, localizedUrl, type RouteLang } from '@/src/lib/i18nRoutes';
import {
  ABOUT_COPY,
  ABOUT_META,
  METHOD_COPY,
  METHODOLOGY_META,
  infoHomeHref,
  localizeInfoHref,
  type InfoLocale,
  type InfoMeta,
  type RichPart,
} from '@/src/lib/infoPageCopy';

const LINK = 'font-semibold text-indigo-700 dark:text-indigo-300 hover:underline';
const P = 'text-slate-700 dark:text-slate-300 leading-relaxed';
const H2 = 'text-xl font-semibold text-slate-900 dark:text-slate-100';
const IN_LANG: Record<InfoLocale, string> = { en: 'en-GB', fr: 'fr-FR', ar: 'ar', ur: 'ur' };

function resolveHref(href: string, lang: InfoLocale): string {
  if (href === '__facebook__') return FACEBOOK_PAGE_URL;
  if (href.startsWith('http')) return href;
  return localizeInfoHref(href, lang);
}

function RichText({ parts, lang }: { parts: RichPart[]; lang: InfoLocale }) {
  return (
    <p className={P}>
      {parts.map((part, i) => {
        if (typeof part === 'string') return <span key={i}>{part}</span>;
        const href = resolveHref(part.href, lang);
        if (part.external) {
          return (
            <a key={i} href={href} target="_blank" rel={part.href === '__facebook__' ? 'noopener noreferrer me' : 'noopener noreferrer'} className={LINK}>
              {part.label}
            </a>
          );
        }
        return (
          <a key={i} href={href} className={LINK}>
            {part.label}
          </a>
        );
      })}
    </p>
  );
}

export function infoPageMetadata(enPath: '/about' | '/methodology', lang: RouteLang | 'ar', meta: InfoMeta): Metadata {
  const alternates = localeAlternates(enPath, lang);
  const url = lang === 'ar' ? alternates.canonical : localizedUrl(enPath, lang);
  return {
    title: meta.seoTitle ? { absolute: meta.seoTitle } : meta.title,
    description: meta.description,
    alternates,
    openGraph: {
      type: 'website',
      url,
      siteName: 'Asrār Everyday',
      locale: lang === 'fr' ? 'fr_FR' : lang === 'ar' ? 'ar_AR' : 'en_GB',
      alternateLocale: lang === 'en' ? ['fr_FR'] : ['en_GB'],
      title: meta.title,
      description: meta.description,
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}

export function AboutView({ lang }: { lang: InfoLocale }) {
  const c = ABOUT_COPY[lang];
  const meta = ABOUT_META[lang];
  const pageUrl = lang === 'en' ? absoluteUrl('/about') : localizeInfoHref('/about', lang);
  const abs = pageUrl.startsWith('http') ? pageUrl : absoluteUrl(pageUrl);
  const home = infoHomeHref(lang);
  const homeAbs = home === '/' ? SITE_URL : absoluteUrl(home);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${abs}#webpage`,
        url: abs,
        name: meta.title,
        description: meta.description,
        inLanguage: IN_LANG[lang],
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${abs}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${abs}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: c.homeLabel, item: homeAbs },
          { '@type': 'ListItem', position: 2, name: c.h1, item: abs },
        ],
      },
    ],
  };

  return (
    <InfoShell lang={lang} breadcrumbLabel={c.breadcrumbLabel} homeHref={home} homeLabel={c.homeLabel} h1={c.h1} lead={c.lead} rights={c.rights} footerHref={localizeInfoHref(c.footerOtherHref, lang)} footerLabel={c.footerOtherLabel} jsonLd={jsonLd}>
      <section className="space-y-3" aria-labelledby="about-what-heading">
        <h2 id="about-what-heading" className={H2}>{c.whatTitle}</h2>
        <p className={P}>{c.whatP1}</p>
        <p className={P}>{c.whatP2}</p>
      </section>
      <section className="space-y-3" aria-labelledby="about-built-heading">
        <h2 id="about-built-heading" className={H2}>{c.builtTitle}</h2>
        <RichText parts={c.builtParts} lang={lang} />
      </section>
      <section className="space-y-3" aria-labelledby="about-stance-heading">
        <h2 id="about-stance-heading" className={H2}>{c.stanceTitle}</h2>
        <p className={P}>{c.stanceP}</p>
      </section>
      <section className="space-y-3" aria-labelledby="about-languages-heading">
        <h2 id="about-languages-heading" className={H2}>{c.languagesTitle}</h2>
        <RichText parts={c.languagesParts} lang={lang} />
      </section>
      <section className="space-y-3" aria-labelledby="about-contact-heading">
        <h2 id="about-contact-heading" className={H2}>{c.contactTitle}</h2>
        <RichText parts={c.contactParts} lang={lang} />
      </section>
      <Related lang={lang} title={c.relatedTitle} items={c.related} />
      <LocaleLinks pagePath="/about" served={lang} />
    </InfoShell>
  );
}

export function MethodologyView({ lang }: { lang: InfoLocale }) {
  const c = METHOD_COPY[lang];
  const meta = METHODOLOGY_META[lang];
  const pageUrl = lang === 'en' ? absoluteUrl('/methodology') : localizeInfoHref('/methodology', lang);
  const abs = pageUrl.startsWith('http') ? pageUrl : absoluteUrl(pageUrl);
  const home = infoHomeHref(lang);
  const homeAbs = home === '/' ? SITE_URL : absoluteUrl(home);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${abs}#webpage`,
        url: abs,
        name: meta.title,
        description: meta.description,
        inLanguage: IN_LANG[lang],
        isPartOf: { '@id': `${SITE_URL}/#website` },
        breadcrumb: { '@id': `${abs}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${abs}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: c.homeLabel, item: homeAbs },
          { '@type': 'ListItem', position: 2, name: c.h1, item: abs },
        ],
      },
    ],
  };

  return (
    <InfoShell lang={lang} breadcrumbLabel={c.breadcrumbLabel} homeHref={home} homeLabel={c.homeLabel} h1={c.h1} lead={c.lead} rights={c.rights} footerHref={localizeInfoHref(c.footerOtherHref, lang)} footerLabel={c.footerOtherLabel} jsonLd={jsonLd}>
      <section className="space-y-3" aria-labelledby="method-abjad-heading">
        <h2 id="method-abjad-heading" className={H2}>{c.abjadTitle}</h2>
        <RichText parts={c.abjadParts} lang={lang} />
      </section>
      <section className="space-y-3" aria-labelledby="method-burj-heading">
        <h2 id="method-burj-heading" className={H2}>{c.burjTitle}</h2>
        <RichText parts={c.burjParts} lang={lang} />
      </section>
      <section className="space-y-3" aria-labelledby="method-hours-heading">
        <h2 id="method-hours-heading" className={H2}>{c.hoursTitle}</h2>
        <RichText parts={c.hoursParts} lang={lang} />
      </section>
      <section className="space-y-3" aria-labelledby="method-manazil-heading">
        <h2 id="method-manazil-heading" className={H2}>{c.manazilTitle}</h2>
        <RichText parts={c.manazilParts} lang={lang} />
      </section>
      <section className="space-y-3" aria-labelledby="method-ikhtiyarat-heading">
        <h2 id="method-ikhtiyarat-heading" className={H2}>{c.ikhtiyaratTitle}</h2>
        <RichText parts={c.ikhtiyaratP1Parts} lang={lang} />
        <p className={P}>{c.ikhtiyaratP2}</p>
      </section>
      <section className="space-y-3" aria-labelledby="method-sadaqa-heading">
        <h2 id="method-sadaqa-heading" className={H2}>{c.sadaqaTitle}</h2>
        <p className={P}>{c.sadaqaP1}</p>
        <RichText parts={c.sadaqaP2Parts} lang={lang} />
      </section>
      <section className="space-y-3" aria-labelledby="method-quran-heading">
        <h2 id="method-quran-heading" className={H2}>{c.quranTitle}</h2>
        <p className={P}>{c.quranP}</p>
      </section>
      <section className="space-y-3" aria-labelledby="method-not-heading">
        <h2 id="method-not-heading" className={H2}>{c.notTitle}</h2>
        <RichText parts={c.notParts} lang={lang} />
      </section>
      <Related lang={lang} title={c.relatedTitle} items={c.related} />
      <LocaleLinks pagePath="/methodology" served={lang} />
    </InfoShell>
  );
}

function Related({ lang, title, items }: { lang: InfoLocale; title: string; items: { href: string; name: string; desc: string }[] }) {
  return (
    <nav aria-label={title} className="space-y-3">
      <h2 className={H2}>{title}</h2>
      <ul className="space-y-3">
        {items.map((l) => (
          <li key={l.href}>
            <a href={localizeInfoHref(l.href, lang)} className="font-semibold text-emerald-700 dark:text-emerald-300 hover:underline">
              {l.name}
            </a>
            <p className="text-sm text-slate-600 dark:text-slate-400">{l.desc}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function InfoShell({
  lang,
  breadcrumbLabel,
  homeHref,
  homeLabel,
  h1,
  lead,
  rights,
  footerHref,
  footerLabel,
  jsonLd,
  children,
}: {
  lang: InfoLocale;
  breadcrumbLabel: string;
  homeHref: string;
  homeLabel: string;
  h1: string;
  lead: string;
  rights: string;
  footerHref: string;
  footerLabel: string;
  jsonLd: object;
  children: React.ReactNode;
}) {
  const rtl = lang === 'ar' || lang === 'ur';
  const font = lang === 'ar' ? 'font-arabic' : '';
  return (
    <div
      lang={lang}
      dir={rtl ? 'rtl' : 'ltr'}
      className={`${font} min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900`}
    >
      <header className="max-w-3xl mx-auto px-4 pt-3 pb-4 sm:pt-8 sm:pb-5 space-y-1.5 sm:space-y-2">
        <nav aria-label={breadcrumbLabel} className="text-xs">
          <a
            href={homeHref}
            className="inline-flex items-center min-h-[24px] text-slate-500 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-indigo-400 hover:underline"
          >
            {rtl ? `→ ${homeLabel}` : `← ${homeLabel}`}
          </a>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{h1}</h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">{lead}</p>
      </header>
      <main className="max-w-3xl mx-auto px-4 pb-10 space-y-8">
        {children}
        <p className="text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {rights} ·{' '}
          <a href={footerHref} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors hover:underline">
            {footerLabel}
          </a>
        </p>
      </main>
      <JsonLd data={jsonLd} />
    </div>
  );
}
