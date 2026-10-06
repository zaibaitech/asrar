import type { Metadata } from 'next';
import { FaqSection, JsonLd, RelatedLinks, faqJsonLd, type FaqItem, type RelatedLink } from '@/src/components/seo/SeoSections';
import { getCommonNames } from '@/src/lib/names/commonNames';
import { englishPageMetadata } from '@/src/lib/names/seo';

export const metadata: Metadata = englishPageMetadata('/names', 'name-and-mother-burj', {
  title: "Muslim Names: Abjad Value & Burj from Name and Mother's Name",
  description:
    "The Abjad (ḥisāb al-jummal) value of common Muslim names such as Muhammad, Ali, Fatima and Maryam, and how each one combines with your mother's name to give your burj. For reflection.",
});

const FAQS: FaqItem[] = [
  {
    q: 'What is the Abjad value of a name?',
    a: 'In ḥisāb al-jummal every Arabic letter has a number (alif 1, bāʾ 2, jīm 3 … ghayn 1000). The Abjad value of a name is the sum of its letters, counted from its Arabic spelling; vowel marks are not counted.',
  },
  {
    q: "How is the burj found from my name and my mother's name?",
    a: "Add the Abjad value of your name to the Abjad value of your mother's name, divide by 12 and keep the remainder (0 counts as 12). Remainder 1 is Aries (al-Ḥamal), 2 Taurus, and so on to 12, Pisces (al-Ḥūt).",
  },
  {
    q: 'My name is not in the list. Can I still calculate it?',
    a: 'Yes. The name-and-mother burj calculator accepts any name written in Arabic letters, or typed in Latin letters with an Arabic spelling picked from its suggestions.',
  },
  {
    q: 'Is this a prediction?',
    a: 'No. It is a traditional reflection on names and temperament from ʿilm al-ḥurūf, for education and self-knowledge. Allah alone knows the unseen.',
  },
];

const RELATED: RelatedLink[] = [
  ['/name-and-mother-burj', "Burj from Your Name & Mother's Name", 'Calculate with any name, and see the 12 burūj at a glance.'],
  ['/99-names-of-allah', 'The 99 Names of Allah', 'Arabic, meaning and Abjad value of each Name.'],
  ['/abjad', 'Abjad Calculator', 'The Abjad value of any Arabic name or phrase.'],
];

export default function Page() {
  const names = getCommonNames();
  const groups = [
    { title: 'Boys’ names', items: names.filter((n) => n.gender === 'm') },
    { title: 'Girls’ names', items: names.filter((n) => n.gender === 'f') },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <main className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        <header className="space-y-2">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500 dark:text-slate-400">
            <a href="/" className="hover:underline">Asrār</a> › Names
          </nav>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">Muslim Names: Abjad Value and Burj</h1>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Pick a name to see its Abjad value letter by letter and the burj it gives with common mothers&apos; names, or{' '}
            <a href="/name-and-mother-burj" className="font-semibold text-purple-700 dark:text-purple-300 hover:underline">
              calculate with any name →
            </a>
          </p>
        </header>

        {groups.map((g) => (
          <section key={g.title} className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{g.title}</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {g.items.map((n) => (
                <li key={n.slug}>
                  <a
                    href={`/names/${n.slug}`}
                    className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 hover:border-purple-400"
                  >
                    <span className="block font-semibold text-slate-900 dark:text-slate-100">{n.name}</span>
                    <span className="block text-lg text-slate-700 dark:text-slate-200" lang="ar" dir="rtl">{n.arabicPlain}</span>
                    <span className="block text-sm text-slate-500 dark:text-slate-400">Abjad {n.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Why a name has a number</h2>
          <p className="text-slate-700 dark:text-slate-300">
            In ʿilm al-ḥurūf (the science of letters) each Arabic letter carries a number, and a name&apos;s total is its
            ḥisāb al-jummal. Combined with the mother&apos;s name, it gives the burj used in Istikhārat al-Asmāʾ: a reflection on
            temperament with a blessed day, a dhikr and a sadaqah. It is not the istikhāra prayer, and it is for reflection,
            not prediction.
          </p>
        </section>

        <FaqSection id="names-faq-heading" title="Frequently asked questions" faqs={FAQS} />
        <RelatedLinks title="Related" links={RELATED} />
      </main>
      <JsonLd data={faqJsonLd(FAQS)} />
    </div>
  );
}
