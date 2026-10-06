import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BurjCalculator } from '@/app/name-and-mother-burj/BurjCalculator';
import { FaqSection, JsonLd, RelatedLinks, faqJsonLd, type FaqItem, type RelatedLink } from '@/src/components/seo/SeoSections';
import { COMMON_NAMES, burjWithMothers, getCommonName, getCommonNames, type CommonName } from '@/src/lib/names/commonNames';
import { englishPageMetadata } from '@/src/lib/names/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return COMMON_NAMES.map((n) => ({ slug: n.slug }));
}

type Props = { params: Promise<{ slug: string }> };

const ELEMENT_EN: Record<string, string> = { fire: 'Fire', earth: 'Earth', air: 'Air', water: 'Water' };

function breakdown(n: CommonName) {
  return n.letters.map((l) => `${l.letter} (${l.value})`).join(' + ');
}

function faqsFor(n: CommonName, fatimaExample: ReturnType<typeof burjWithMothers>[number] | undefined): FaqItem[] {
  const [v1, v2] = n.variants.filter((v) => v.toLowerCase() !== n.slug);
  const example = fatimaExample && n.slug !== 'fatima'
    ? ` For example, with a mother named Fatima (فاطمة = 135): ${n.value} + 135 = ${fatimaExample.total}, remainder ${fatimaExample.remainder}, which is ${fatimaExample.burjEn} (${fatimaExample.burjTranslit}).`
    : '';
  const faqs: FaqItem[] = [
    {
      q: `What is the Abjad value of the name ${n.name}?`,
      a: `${n.name} is written ${n.arabicPlain} in Arabic: ${breakdown(n)} = ${n.value}, using the Maghribi letter values of the "Who Am I?" calculator (vowel marks are not counted).`,
    },
    {
      q: `How do I find my burj with the name ${n.name}?`,
      a: `Add ${n.value} to the Abjad value of your mother's name, divide the total by 12 and keep the remainder (0 counts as 12): 1 is Aries (al-Ḥamal) and 12 is Pisces (al-Ḥūt).${example} The calculator above does it for you.`,
    },
  ];
  if (v1) {
    faqs.push({
      q: v2 ? `Do ${v1} and ${v2} give the same result as ${n.name}?` : `Does ${v1} give the same result as ${n.name}?`,
      a: `Yes. The calculation uses the Arabic spelling ${n.arabicPlain}, not the Latin letters, so every Latin spelling of this name gives the same value, ${n.value}.`,
    });
  }
  faqs.push({
    q: 'Does the burj predict my future?',
    a: 'No. The name-and-mother burj is a traditional reflection on names and temperament from ʿilm al-ḥurūf. It is not the istikhāra prayer and not a way to know the unseen; Allah alone knows the unseen.',
  });
  return faqs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const n = getCommonName(slug);
  if (!n) return {};
  return englishPageMetadata(`/names/${n.slug}`, 'name-and-mother-burj', {
    title: `${n.name} (${n.arabicPlain}): Abjad Value & Burj with Mother's Name`,
    description: `The Abjad value of ${n.name} (${n.arabicPlain}) is ${n.value}. Find your burj, element, blessed day and dhikr from the name ${n.name} and your mother's name. For reflection, not prediction.`,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const n = getCommonName(slug);
  if (!n) notFound();

  const pairings = burjWithMothers(n).filter((p) => p.mother.slug !== n.slug);
  const fatima = burjWithMothers(n).find((p) => p.mother.slug === 'fatima');
  const faqs = faqsFor(n, fatima);
  const others = getCommonNames().filter((o) => o.slug !== n.slug);
  const related: RelatedLink[] = [
    ['/name-and-mother-burj', "Burj from Your Name & Mother's Name", 'How the calculation works and the 12 burūj at a glance.'],
    ['/99-names-of-allah', 'The 99 Names of Allah', 'Arabic, meaning and Abjad value of each Name.'],
    ['/abjad', 'Abjad Calculator', 'The Abjad value of any Arabic name or phrase.'],
    ['/compatibility', 'Name Compatibility for Marriage', 'Compare two names with the Abjad soul-connection method.'],
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <main className="max-w-3xl mx-auto px-4 pt-6 pb-4 space-y-2">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 dark:text-slate-400">
          <a href="/" className="hover:underline">Asrār</a> › <a href="/names" className="hover:underline">Names</a> › {n.name}
        </nav>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
          {n.name} (<span lang="ar" dir="rtl">{n.arabicPlain}</span>): Abjad Value and Burj
        </h1>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          In ḥisāb al-jummal the name {n.name} (<span lang="ar" dir="rtl">{n.arabic}</span>) has an Abjad value of{' '}
          <strong>{n.value}</strong>. Add your mother&apos;s name in the calculator below to find your burj, element, blessed
          day, dhikr and sadaqah.
        </p>
      </main>

      <BurjCalculator />

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <section className="space-y-3" aria-labelledby="value-heading">
          <h2 id="value-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Abjad value of {n.name}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <th scope="col" className="px-4 py-2 font-semibold">Letter</th>
                  <th scope="col" className="px-4 py-2 font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                {n.letters.map((l, i) => (
                  <tr key={i} className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                    <td className="px-4 py-2 text-lg" lang="ar">{l.letter}</td>
                    <td className="px-4 py-2 text-slate-700 dark:text-slate-300">{l.value}</td>
                  </tr>
                ))}
                <tr className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold">
                  <td className="px-4 py-2">Total</td>
                  <td className="px-4 py-2">{n.value}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Maghribi letter values, as used by the &ldquo;Who Am I?&rdquo; calculator; vowel marks are not counted.{' '}
            {n.mashriqiValue === n.value
              ? 'The Mashriqi table gives the same total for this name.'
              : `The Mashriqi table gives ${n.mashriqiValue}.`}{' '}
            You can check any spelling in the <a href="/abjad" className="text-purple-700 dark:text-purple-300 hover:underline">Abjad calculator</a>.
          </p>
        </section>

        {n.variants.length > 1 && (
          <section className="space-y-3" aria-labelledby="spellings-heading">
            <h2 id="spellings-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">Spellings</h2>
            <p className="text-slate-700 dark:text-slate-300">
              {n.variants.join(', ')}: all are written <span lang="ar" dir="rtl">{n.arabicPlain}</span> in Arabic, so they share
              the same value. Type any of them in the calculator&apos;s Latin search and pick the Arabic spelling.
            </p>
          </section>
        )}

        <section className="space-y-3" aria-labelledby="pairings-heading">
          <h2 id="pairings-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Burj of {n.name} with common mothers&apos; names
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <th scope="col" className="px-3 py-2 font-semibold">Mother&apos;s name</th>
                  <th scope="col" className="px-3 py-2 font-semibold">Total</th>
                  <th scope="col" className="px-3 py-2 font-semibold">Burj</th>
                  <th scope="col" className="px-3 py-2 font-semibold">Element</th>
                  <th scope="col" className="px-3 py-2 font-semibold">Blessed day</th>
                </tr>
              </thead>
              <tbody>
                {pairings.map((p) => (
                  <tr key={p.mother.slug} className="border-t border-slate-200 dark:border-slate-700 align-top bg-white dark:bg-slate-900">
                    <th scope="row" className="px-3 py-2 font-semibold text-slate-900 dark:text-slate-100">
                      <a href={`/names/${p.mother.slug}`} className="hover:underline">{p.mother.name}</a>{' '}
                      <span lang="ar" dir="rtl" className="font-normal">({p.mother.arabicPlain})</span>
                    </th>
                    <td className="px-3 py-2">{n.value} + {p.mother.value} = {p.total}</td>
                    <td className="px-3 py-2">
                      {p.remainder}. {p.burjEn} <span lang="ar" dir="rtl">({p.burjAr})</span>
                    </td>
                    <td className="px-3 py-2">{ELEMENT_EN[p.element] ?? p.element}</td>
                    <td className="px-3 py-2">{p.blessedDay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Examples only: use your own mother&apos;s name in the calculator above. What each burj means (temperament, dhikr,
            sadaqah) is explained on the{' '}
            <a href="/name-and-mother-burj#buruj-heading" className="text-purple-700 dark:text-purple-300 hover:underline">burj guide</a>.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="how-heading">
          <h2 id="how-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">How the burj is found</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Your name&apos;s Abjad total and your mother&apos;s are added and divided by 12; the remainder (1–12, with 0 counted as
            12) is the burj, from 1 = Aries (al-Ḥamal) to 12 = Pisces (al-Ḥūt). The traditional name for this reflection is
            Istikhārat al-Asmāʾ, but it is not the istikhāra prayer. Use it for reflection and education, not prediction; Allah
            alone knows the unseen.
          </p>
        </section>

        <FaqSection id="name-faq-heading" title="Frequently asked questions" faqs={faqs} />

        <nav aria-label="Other names" className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Other names</h2>
          <ul className="flex flex-wrap gap-2">
            {others.map((o) => (
              <li key={o.slug}>
                <a
                  href={`/names/${o.slug}`}
                  className="inline-block rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1 text-sm text-slate-700 dark:text-slate-200 hover:border-purple-400"
                >
                  {o.name} <span lang="ar" dir="rtl">{o.arabicPlain}</span>
                </a>
              </li>
            ))}
          </ul>
          <a href="/names" className="inline-block font-semibold text-purple-700 dark:text-purple-300 hover:underline">All names →</a>
        </nav>

        <RelatedLinks title="Related" links={related} />
      </div>

      <JsonLd data={faqJsonLd(faqs)} />
    </div>
  );
}
