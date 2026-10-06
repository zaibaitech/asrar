import type { Metadata } from 'next';
import { FaqSection, JsonLd, RelatedLinks, faqJsonLd, type FaqItem, type RelatedLink } from '@/src/components/seo/SeoSections';
import { DIVINE_NAMES } from '@/src/data/divine-names';
import { englishPageMetadata } from '@/src/lib/names/seo';

export const metadata: Metadata = englishPageMetadata('/99-names-of-allah', 'abjad', {
  title: 'The 99 Names of Allah (Asmāʾ al-Ḥusnā): Meanings & Abjad Values',
  description:
    'All 99 Names of Allah in Arabic with transliteration, English meaning and Abjad (ḥisāb al-jummal) value, plus how the Names appear in your name-and-mother burj.',
});

const FAQS: FaqItem[] = [
  {
    q: 'Where does this list of the 99 Names come from?',
    a: 'The Arabic text and order follow the widely used compilation drawn from the hadith of al-Walīd in Jāmiʿ al-Tirmidhī (no. 3507).',
  },
  {
    q: 'How are the Abjad values of the Names calculated here?',
    a: 'The leading definite article "al-" is dropped and the remaining letters are summed with the standard Mashriqi table; hamza is counted by its seat (ؤ as wāw, ئ as yāʾ, أ/إ/آ as alif). The two compound Names, Mālik al-Mulk and Dhū al-Jalāli wa al-Ikrām, keep their full spelling.',
  },
  {
    q: 'Why does the Abjad calculator show a different number for a Name?',
    a: 'The Abjad calculator counts every letter you type, including "al-", and uses the Maghribi table by default, so its total can differ from the value listed here.',
  },
  {
    q: 'How are the Names linked to my burj?',
    a: 'Each of the 12 burūj in the name-and-mother calculator comes with Divine Names for dhikr, for example Yā Raḥmān, Yā Raḥīm for Cancer (al-Saraṭān). Find your burj with the calculator to see yours.',
  },
  {
    q: 'Is this page for prediction or for amulets?',
    a: 'No. The Names are listed for learning, remembrance and reflection. Abjad values are a traditional study of letters, not a way to know the unseen; Allah alone knows the unseen.',
  },
];

const RELATED: RelatedLink[] = [
  ['/name-and-mother-burj', "Burj from Your Name & Mother's Name", 'Your burj, element, blessed day and the Divine Names for its dhikr.'],
  ['/names', 'Muslim Names: Abjad Value and Burj', 'Common names such as Muhammad, Ali, Fatima and Maryam.'],
  ['/abjad', 'Abjad Calculator', 'The Abjad value of any Arabic name or phrase.'],
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <main className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        <header className="space-y-2">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500 dark:text-slate-400">
            <a href="/" className="hover:underline">Asrār</a> › 99 Names of Allah
          </nav>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            The 99 Names of Allah (Asmāʾ al-Ḥusnā)
          </h1>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Each Name in Arabic with its transliteration, meaning and Abjad value. Your burj in the{' '}
            <a href="/name-and-mother-burj" className="font-semibold text-purple-700 dark:text-purple-300 hover:underline">
              name-and-mother calculator
            </a>{' '}
            also comes with Divine Names for dhikr.
          </p>
        </header>

        <ol className="space-y-2" aria-label="The 99 Names of Allah">
          {DIVINE_NAMES.map((n) => (
            <li
              key={n.number}
              id={`name-${n.number}`}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 sm:p-4"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  <span className="text-slate-400 dark:text-slate-500 tabular-nums">{n.number}.</span> {n.transliteration}{' '}
                  <span className="font-normal text-slate-600 dark:text-slate-300">— {n.translation.en}</span>
                </h2>
                <span className="font-arabic text-xl text-slate-900 dark:text-slate-100 shrink-0" lang="ar" dir="rtl">
                  {n.arabic}
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{n.meaning.en}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Abjad value: {n.abjadValue}</p>
            </li>
          ))}
        </ol>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">About this list</h2>
          <p className="text-slate-700 dark:text-slate-300">
            The Names are given in the order of the compilation drawn from the hadith of al-Walīd in Jāmiʿ al-Tirmidhī
            (no. 3507). Abjad values drop the article &ldquo;al-&rdquo; and use the Mashriqi table. They are listed for learning
            and reflection, not prediction.
          </p>
        </section>

        <FaqSection id="names99-faq-heading" title="Frequently asked questions" faqs={FAQS} />
        <RelatedLinks title="Related" links={RELATED} />
      </main>
      <JsonLd data={faqJsonLd(FAQS)} />
    </div>
  );
}
