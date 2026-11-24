import type { Metadata } from 'next';
import { JsonLd, RelatedLinks } from '@/src/components/seo/SeoSections';
import { SITE_URL, absoluteUrl } from '@/src/lib/siteRoutes';
import { METHODOLOGY_LEAD } from '@/src/lib/infoPageCopy';

const PATH = '/methodology';
const TITLE = 'Methodology';
const DESCRIPTION =
  'How Asrār calculates Abjad values, the name-and-mother burj, planetary hours, manāzil, ikhtiyārāt and sadaqah, and how Qur’an text is sourced. For reflection, not prediction.';

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
      '@type': 'WebPage',
      '@id': `${absoluteUrl(PATH)}#webpage`,
      url: absoluteUrl(PATH),
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      breadcrumb: { '@id': `${absoluteUrl(PATH)}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${absoluteUrl(PATH)}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Asrār', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Methodology', item: absoluteUrl(PATH) },
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
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">{METHODOLOGY_LEAD}</p>
      </header>

      <main className="max-w-3xl mx-auto px-4 pb-10 space-y-8">
        <section className="space-y-3" aria-labelledby="method-abjad-heading">
          <h2 id="method-abjad-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Abjad (ḥisāb al-jummal)
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Each Arabic letter has a number. Adding the letters of a name or phrase gives its Abjad
            total. Asrār uses the Maghribi letter order by default, and offers the Mashriqi order as a
            switch. The two orders differ on six letters: ṣād, ḍād, sīn, ẓāʾ, ghayn and shīn. A name
            that does not use those letters has the same total in both. Vowel marks are not counted.
            The{' '}
            <a href="/abjad" className="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline">
              Abjad calculator
            </a>{' '}
            shows a letter-by-letter breakdown in either system.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="method-burj-heading">
          <h2 id="method-burj-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Burj from a name and a mother&apos;s name
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            The calculator on{' '}
            <a
              href="/name-and-mother-burj"
              className="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline"
            >
              Your Burj from Your Name &amp; Mother&apos;s Name
            </a>{' '}
            takes the Maghribi Abjad total of each name, adds the two totals, and divides by 12. The
            remainder (1 to 12, with 0 counted as 12) is the burj, from 1 = Aries (al-Ḥamal) to 12 =
            Pisces (al-Ḥūt). That burj is linked to an element and temperament, and to a day, dhikr and
            sadaqah shown by the tool. The name-based burj is not the same as a Sun-sign from a date of
            birth; the tool can also show the tropical sign from a date of birth, and the two may differ.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="method-hours-heading">
          <h2 id="method-hours-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Planetary hours
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            In the Chaldean scheme used on the{' '}
            <a
              href="/planetary-hours"
              className="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline"
            >
              Planetary Hours
            </a>{' '}
            page, the time from sunrise to sunset, and the time from sunset to the next sunrise, are
            each divided into twelve equal hours. The hours follow a fixed repeating order: Saturn,
            Jupiter, Mars, the Sun, Venus, Mercury, the Moon. The first hour after sunrise belongs to
            the planet of the weekday (the Sun on Sunday, the Moon on Monday, Mars on Tuesday, Mercury
            on Wednesday, Jupiter on Thursday, Venus on Friday, Saturn on Saturday). Because day and
            night are each split into twelve, a planetary hour is usually not 60 minutes long. Sunrise
            and sunset are taken at the visitor&apos;s location; when a location is not available, the app
            uses Makkah as a fallback, as it does elsewhere.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="method-manazil-heading">
          <h2 id="method-manazil-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Lunar mansions (manāzil)
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Asrār places the Moon in one of twenty-eight equal tropical sectors (~12°51′ each), from
            the Moon&apos;s tropical ecliptic longitude. That convention is documented on the{' '}
            <a href="/manazil" className="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline">
              lunar mansions
            </a>{' '}
            page so the live card stays consistent with the planetary ephemeris; classical star-tied
            (sidereal) bounds differ. The names and instructional framing draw on Al-Bīrūnī&apos;s Kitāb
            al-Tafhīm, traditional Arab anwāʾ lore, and classical ikhtiyārāt themes for
            activity adab — not guarantees. The Qur&apos;ān mentions the Moon&apos;s stations as signs (10:5;
            36:39–40). The page does not present talisman or taweez recipes.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="method-ikhtiyarat-heading">
          <h2 id="method-ikhtiyarat-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Ikhtiyārāt and best-day guides
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            The{' '}
            <a href="/ikhtiyarat" className="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline">
              ikhtiyārāt
            </a>{' '}
            tool and the{' '}
            <a href="/best-day-for" className="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline">
              best-day
            </a>{' '}
            pages use the same election rule sets in the app. A date or time window is scored from the
            weekday, the planetary hour, and the Moon&apos;s condition (sign, phase and lunar mansion).
            Some conditions can rule a window out, including a combust or void-of-course Moon and,
            depending on the purpose, other hard checks (for example eclipse proximity for nikāḥ, or
            Mercury retrograde for business).
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            As the configs are written today, nikāḥ receives a weekday bonus on Friday, Thursday and
            Monday, and a planetary-hour bonus in Venus, Moon or Jupiter hours. Travel is bonus-scored
            on Wednesday and Thursday; moving home on Saturday and Thursday; business or contracts on
            Wednesday and Thursday. These are the implemented scores, offered for reflection — not a
            fatwa and not a substitute for practical arrangements, istikhāra or counsel. Upcoming dates
            on the best-day pages are computed for a reference location of Makkah when a personal
            location is not used.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="method-sadaqa-heading">
          <h2 id="method-sadaqa-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Sadaqah guidance
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Sadaqah is voluntary charity — giving to those in need. It is a widely shared value, and
            Asrār offers its suggestions for reflection, not as a prediction of what must be given or of
            what will follow. Anyone may give at any time; the tables are not obligations.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            The Who Am I? and burj tools keep two systems of traditional sadaqah guidance separate:
            date-of-birth guidance, drawn from traditional sadaqah guidance (source: Serigne Mahdiou Niane);
            and name and mother&apos;s-name burj guidance, drawn from traditional sadaqah guidance for
            that burj. The{' '}
            <a href="/sadaqa" className="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline">
              Sadaqa Guide
            </a>{' '}
            also presents weekday, birth-month and burj suggestions as a prompt for giving.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="method-quran-heading">
          <h2 id="method-quran-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Qur&apos;an text
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Arabic Qur&apos;an wording on Asrār is held to the Tanzil quran-simple text. The Qur&apos;an share
            pages load the quran-simple edition from api.alquran.cloud. This is a standard imlāʾī
            encoding of the ʿUthmānic rasm; it is not a new edition prepared by Asrār.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="method-not-heading">
          <h2 id="method-not-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            What this is not
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Asrār is not a prediction engine, a fortune-telling service, or geomancy. It does not issue
            fatwas, does not sell or prescribe talismans or taweez, and does not claim to know the
            unseen. The calculators do not replace ṣalāh times, istikhāra, family counsel (mashwara) or
            trust in God (tawakkul). Only Allah knows the unseen. For religious rulings, consult
            qualified scholars. A fuller account of the stance is on the{' '}
            <a href="/about" className="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline">
              About
            </a>{' '}
            page.
          </p>
        </section>

        <RelatedLinks
          title="Related pages"
          links={[
            ['/about', 'About Asrār', 'What the app is, who builds it, and how to get in touch.'],
            ['/abjad', 'Abjad Calculator', 'Maghribi (default) and Mashriqi letter values.'],
            ['/name-and-mother-burj', "Your Burj from Your Name & Mother's Name", 'The remainder-by-12 method described above.'],
            ['/planetary-hours', 'Planetary Hours', 'Chaldean hours from sunrise and sunset at your location.'],
            ['/manazil', 'Lunar Mansions (Manāzil)', 'The 28 stations and the equal tropical method.'],
            ['/ikhtiyarat', 'Best Dates (Ikhtiyārāt)', 'The election tool that uses the rule sets above.'],
            ['/sadaqa', 'Sadaqa Guide', 'Voluntary charity for those in need, offered for reflection.'],
          ]}
        />

        <p className="text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} All rights reserved ·{' '}
          <a href="/about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors hover:underline">
            About
          </a>
        </p>
      </main>

      <JsonLd data={jsonLd} />
    </div>
  );
}
