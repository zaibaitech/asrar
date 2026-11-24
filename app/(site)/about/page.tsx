import type { Metadata } from 'next';
import { JsonLd, RelatedLinks } from '@/src/components/seo/SeoSections';
import { FACEBOOK_PAGE_URL } from '@/src/components/seo/HomeJsonLd';
import { SITE_URL, absoluteUrl } from '@/src/lib/siteRoutes';
import { ABOUT_LEAD } from '@/src/lib/infoPageCopy';

const PATH = '/about';
const TITLE = 'About Asrār';
const DESCRIPTION =
  'Asrār (asrar.app) is a free web app of reflective Islamic tools built by Zaibai Tech, a UK company. For learning and reflection, not prediction. Only Allah knows the unseen.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl(PATH), languages: { 'x-default': absoluteUrl(PATH) } },
  openGraph: {
    type: 'website',
    url: absoluteUrl(PATH),
    siteName: 'Asrār Everyday',
    locale: 'en_GB',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/opengraph-image`],
  },
};


const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${absoluteUrl(PATH)}#webpage`,
      url: absoluteUrl(PATH),
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      breadcrumb: { '@id': `${absoluteUrl(PATH)}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${absoluteUrl(PATH)}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Asrār', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'About', item: absoluteUrl(PATH) },
      ],
    },
  ],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <header className="max-w-3xl mx-auto px-4 pt-3 pb-4 sm:pt-8 sm:pb-5 space-y-1.5 sm:space-y-2">
        <nav aria-label="Breadcrumb" className="text-xs">
          <a
            href="/"
            className="inline-flex items-center min-h-[24px] text-slate-500 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-indigo-400 hover:underline"
          >
            ← Asrār
          </a>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{TITLE}</h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">{ABOUT_LEAD}</p>
      </header>

      <main className="max-w-3xl mx-auto px-4 pb-10 space-y-8">
        <section className="space-y-3" aria-labelledby="about-what-heading">
          <h2 id="about-what-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            What Asrār is
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Asrār is a companion for the traditional Islamic sciences of ʿIlm al-Ḥurūf (the science of
            letters) and ʿIlm al-Nujūm (celestial timing). The tools include an Abjad calculator, a burj
            from a name and a mother&apos;s name, name compatibility, planetary hours and the planet of the
            day, planetary transits, a birth profile, the 28 lunar mansions (manāzil al-qamar), ikhtiyārāt
            (choosing a time to begin something), best-day guides for nikāḥ, travel, moving home and
            business, West African sadaqah guidance, dhikr challenges, and the 99 Names of Allah with
            their Abjad values.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            The app is free to use. No account is required for the public calculators.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="about-built-heading">
          <h2 id="about-built-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Who builds it
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Asrār is built by Zaibai Tech (Zaibaitech Ltd), a UK company based in Edinburgh, Scotland.{' '}
            <a
              href="https://zaibaitech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline"
            >
              zaibaitech.com
            </a>{' '}
            is the company website.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="about-stance-heading">
          <h2 id="about-stance-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            For reflection, not prediction
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            These tools are for reflection and education, not prediction. Only Allah knows the unseen.
            Asrār does not give fatwas, does not replace istikhāra, family counsel (mashwara) or trust
            in God (tawakkul), and is not for fortune-telling. For religious rulings, consult qualified
            scholars.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="about-languages-heading">
          <h2 id="about-languages-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Languages
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Asrār is available in English, French, Arabic and Urdu. Some pages are still English-only,
            including this one and the{' '}
            <a href="/methodology" className="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline">
              methodology
            </a>{' '}
            page. Language versions of a tool are linked from that tool when they exist.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="about-contact-heading">
          <h2 id="about-contact-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Contact
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            You can reach the company through{' '}
            <a
              href="https://zaibaitech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline"
            >
              zaibaitech.com
            </a>
            . Asrār also has an official Facebook Page,{' '}
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer me"
              className="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline"
            >
              Asrariya
            </a>
            .
          </p>
        </section>

        <RelatedLinks
          title="Related pages"
          links={[
            ['/methodology', 'Methodology', 'How the calculators work, and what they are not.'],
            ['/abjad', 'Abjad Calculator', 'The Maghribi or Mashriqi value of an Arabic name or phrase.'],
            ['/ikhtiyarat', 'Best Dates (Ikhtiyārāt)', 'Choosing a time for nikāḥ, travel, business or a new start.'],
            ['/sadaqa', 'Sadaqa Guide', 'West African sadaqah by weekday, Hijri birth month and burj.'],
          ]}
        />

        <p className="text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} All rights reserved ·{' '}
          <a href="/methodology" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors hover:underline">
            Methodology
          </a>
        </p>
      </main>

      <JsonLd data={jsonLd} />
    </div>
  );
}
