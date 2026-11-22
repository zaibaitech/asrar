import type { Metadata } from 'next';
import { RelatedTools } from '@/src/components/seo/RelatedTools';
import { AR_META, arabicMetadata } from '@/src/lib/arMetadata';
import { SITE_URL } from '@/src/lib/siteRoutes';
import { buildToolMetadata, getRouteLang, getServedLang, resolvePageLang } from '@/src/lib/pageLang';
import { FaqSection, JsonLd, RelatedLinks, faqJsonLd, type FaqItem, type RelatedLink } from '@/src/components/seo/SeoSections';
import { CompatibilityCalculator } from './CompatibilityCalculator';
import { AbjadSystemSelector } from '@/src/components/AbjadSystemSelector';

const PATH = '/compatibility';

const META = {
  en: {
    title: 'Name Compatibility for Marriage (Abjad Calculator)',
    description:
      'Free name compatibility calculator for marriage: compare two names with the Abjad (ḥisāb al-jummal) soul-connection method, or two dates of birth. For reflection, alongside istikhāra and family counsel.',
  },
  fr: {
    title: 'Compatibilité des prénoms pour le mariage (Abjad)',
    description:
      "Calculateur gratuit de compatibilité des prénoms pour le mariage : comparez deux prénoms avec la méthode abjad (ḥisāb al-jummal) ou deux dates de naissance. Pour la réflexion, avec l'istikhāra et le conseil de la famille.",
  },
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const arMeta = await arabicMetadata('/compatibility');
  if (arMeta) return arMeta;
  const lang = await resolvePageLang(searchParams);
  return buildToolMetadata(PATH, META[lang], lang);
}

const COPY = {
  en: {
    h1: 'Name Compatibility for Marriage — Abjad Soul Connection Calculator',
    intro1:
      'Before a nikāḥ, many families like to look at the harmony between two names. In ʿilm al-ḥurūf each Arabic letter has a number (the Abjad, or ḥisāb al-jummal), so every name has a total. This calculator compares the two totals with the traditional "soul connection" method and reads the result for marriage first, with friendship, family and work as other contexts.',
    intro2:
      'You can also compare two dates of birth (a general, modern astrological comparison of Sun, Moon, Venus and Mars signs), look at a person\'s resonance with one of the 99 Names of Allah, or find the Divine Name that matches an intention.',
    adabTitle: 'Adab first',
    adab:
      'A name number cannot tell you whether a marriage will succeed. Ask about dīn and character, consult both families, pray ṣalāt al-istikhāra and put your trust in Allah. Use this tool for reflection and conversation, not as a verdict; Allah alone knows the unseen.',
    howTitle: 'How the names method works',
    how: [
      'Write both names in Arabic letters (or type them in Latin letters and pick the Arabic spelling).',
      'Each name is converted to its Abjad (kabīr) total, using the Maghribi or Mashriqi letter values you select.',
      'The two totals are added together with 7 and divided by 9; the remainder (1–9, with 0 counted as 9) is the soul-connection number.',
      'Each number has a traditional meaning and outlook, shown for the relationship context you choose: marriage, universal, friendship, family or work.',
    ],
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        q: 'How do I check name compatibility for marriage?',
        a: 'Enter both names, choose the "Marriage" context and calculate. The tool adds the Abjad values of the two names plus 7, divides by 9 and shows the meaning of the remainder for marriage.',
      },
      {
        q: 'Which Abjad system is used?',
        a: 'You can switch between the Maghribi order (the Maghreb, al-Andalus and West Africa) and the Mashriqi order (Egypt, the Middle East and Asia). Most names give the same total in both; names containing any of the six letters ṣād, ḍād, sīn, ẓāʾ, ghayn or shīn can differ.',
      },
      {
        q: 'Can I compare by date of birth instead of names?',
        a: 'Yes. Choose "By Birth Date" to compare two people\'s Sun, Moon, Venus and Mars signs. This is a general, modern astrological comparison, not a classical Islamic method, and it never uses birth time or houses.',
      },
      {
        q: 'Is it permissible to rely on name compatibility?',
        a: 'Treat it as cultural reflection, not prediction. Choosing a spouse rests on dīn, character, family counsel and ṣalāt al-istikhāra. No number decides a marriage; Allah alone knows the unseen.',
      },
      {
        q: 'What if our result is low?',
        a: 'A low number is not a prohibition and not a bad omen. It can be an invitation to talk about expectations and patience. Many happy marriages would "fail" a numeric test.',
      },
    ] as FaqItem[],
    relatedTitle: 'Related',
    related: [
      ['/ikhtiyarat', 'Best Dates (Ikhtiyārāt)', 'Choose an auspicious date for the nikāḥ.'],
      ['/name-and-mother-burj', "Your Burj from Your Name & Mother's Name", 'Your burj, blessed day, dhikr and sadaqah.'],
      ['/abjad', 'Abjad Calculator', 'The Abjad value of any Arabic name or phrase.'],
      ['/sadaqa', 'Sadaqa Guide', 'Sadaqah by weekday, Hijri birth month and burj.'],
      ['/birth-profile', 'Birth Profile', 'Your Sun and Moon signs, lunar mansion and planetary dignities.'],
    ] as RelatedLink[],
  },
  fr: {
    h1: 'Compatibilité des prénoms pour le mariage — calculateur abjad de connexion des âmes',
    intro1:
      "Avant un nikāḥ, beaucoup de familles aiment regarder l'harmonie entre deux prénoms. Dans l'ʿilm al-ḥurūf, chaque lettre arabe a un nombre (l'abjad, ou ḥisāb al-jummal) : chaque prénom a donc un total. Ce calculateur compare les deux totaux avec la méthode traditionnelle de « connexion des âmes » et lit le résultat d'abord pour le mariage, puis pour l'amitié, la famille et le travail.",
    intro2:
      "Vous pouvez aussi comparer deux dates de naissance (comparaison astrologique générale et moderne des signes du Soleil, de la Lune, de Vénus et de Mars), voir la résonance d'une personne avec l'un des 99 Noms d'Allah, ou trouver le Nom divin qui correspond à une intention.",
    adabTitle: "L'adab d'abord",
    adab:
      "Un nombre ne peut pas dire si un mariage réussira. Renseignez-vous sur la religion et le caractère, consultez les deux familles, priez la ṣalāt al-istikhāra et placez votre confiance en Allah. Utilisez cet outil pour la réflexion et le dialogue, non comme un verdict ; Allah seul connaît l'invisible.",
    howTitle: 'Comment fonctionne la méthode des prénoms',
    how: [
      'Écrivez les deux prénoms en lettres arabes (ou en lettres latines, puis choisissez l\'orthographe arabe).',
      'Chaque prénom est converti en son total abjad (kabīr), avec les valeurs maghribi ou mashriqi choisies.',
      'Les deux totaux sont additionnés avec 7 puis divisés par 9 ; le reste (1 à 9, 0 comptant pour 9) est le nombre de connexion des âmes.',
      'Chaque nombre a un sens et une perspective traditionnels, affichés selon le contexte choisi : mariage, universel, amitié, famille ou travail.',
    ],
    faqTitle: 'Questions fréquentes',
    faqs: [
      {
        q: 'Comment vérifier la compatibilité des prénoms pour le mariage ?',
        a: "Entrez les deux prénoms, choisissez le contexte « Mariage » et lancez le calcul. L'outil additionne les valeurs abjad des deux prénoms plus 7, divise par 9 et affiche le sens du reste pour le mariage.",
      },
      {
        q: 'Quel système abjad est utilisé ?',
        a: "Vous pouvez choisir l'ordre maghribi (Maghreb, al-Andalus et Afrique de l'Ouest) ou l'ordre mashriqi (Égypte, Moyen-Orient et Asie). La plupart des prénoms donnent le même total ; ceux qui contiennent l'une des six lettres ṣād, ḍād, sīn, ẓāʾ, ghayn ou shīn peuvent différer.",
      },
      {
        q: 'Peut-on comparer par date de naissance ?',
        a: "Oui. Choisissez « Par Date de Naissance » pour comparer les signes du Soleil, de la Lune, de Vénus et de Mars de deux personnes. C'est une comparaison astrologique générale et moderne, pas une méthode islamique classique, et elle n'utilise jamais l'heure de naissance ni les maisons.",
      },
      {
        q: 'Peut-on se fier à la compatibilité des prénoms ?',
        a: "Considérez-la comme une réflexion culturelle, pas une prédiction. Le choix d'un conjoint repose sur la religion, le caractère, le conseil des familles et la ṣalāt al-istikhāra. Aucun nombre ne décide d'un mariage ; Allah seul connaît l'invisible.",
      },
      {
        q: 'Et si notre résultat est faible ?',
        a: "Un nombre faible n'est ni une interdiction ni un mauvais présage. Il peut inviter à parler des attentes et de la patience. Beaucoup de mariages heureux « échoueraient » à un test numérique.",
      },
    ] as FaqItem[],
    relatedTitle: 'Voir aussi',
    related: [
      ['/ikhtiyarat', 'Meilleures dates (Ikhtiyārāt)', 'Choisir une date propice pour le nikāḥ.'],
      ['/name-and-mother-burj', 'Votre burj par votre nom et celui de votre mère', 'Votre burj, jour béni, dhikr et sadaqah.'],
      ['/abjad', 'Calculateur Abjad', "La valeur abjad de tout nom ou phrase en arabe."],
      ['/sadaqa', 'Guide de la sadaqa', 'Sadaqah par jour, mois hégirien de naissance et burj.'],
      ['/birth-profile', 'Profil de naissance', 'Vos signes solaire et lunaire, demeure lunaire et dignités planétaires.'],
    ] as RelatedLink[],
  },
  /**
   * /ar/compatibility (served by this route with ROUTE_LANG_HEADER=ar). Every string is the
   * existing Arabic from public/i18n/ar-ui.json (what the runtime catalog already showed on
   * /ar), now server-rendered; links point at the /ar pages. Review list:
   * docs/i18n/ar-compatibility-review.md.
   */
  ar: {
    h1: 'توافق الأسماء للزواج — حاسبة صلة الأرواح بالأبجد',
    intro1:
      'قبل النكاح تحبّ أسر كثيرة أن تنظر في الانسجام بين الاسمين. ففي علم الحروف لكل حرف عربي عدد (الأبجد أو حساب الجُمَّل)، فلكل اسم مجموع. تقارن هذه الحاسبة بين المجموعين بطريقة «صلة الأرواح» التقليدية، وتقرأ النتيجة للزواج أولًا، ثم للصداقة والعائلة والعمل.',
    intro2:
      'يمكنك أيضًا مقارنة تاريخَي ميلاد (مقارنة فلكية عامة حديثة لأبراج الشمس والقمر والزهرة والمريخ)، أو النظر في رنين شخص مع اسم من أسماء الله الحسنى، أو إيجاد اسم من أسماء الله الحسنى يناسب نيّتك.',
    adabTitle: 'الأدب أولًا',
    adab:
      'لا يستطيع عدد الاسم أن يخبرك بنجاح الزواج. اسأل عن الدين والخُلق، واستشر الأسرتين، وصلِّ صلاة الاستخارة، وتوكّل على الله. واستعمل هذه الأداة للتأمّل والحديث، لا للحكم؛ والله وحده يعلم الغيب.',
    howTitle: 'كيف تعمل طريقة الأسماء',
    how: [
      'اكتب الاسمين بالحروف العربية (أو اكتبهما بالحروف اللاتينية واختر الكتابة العربية).',
      'يُحوَّل كل اسم إلى مجموعه في الأبجد الكبير، بقيم الحروف المغربية أو المشرقية التي تختارها.',
      'يُجمع المجموعان مع 7 ويُقسم الناتج على 9؛ والباقي (1–9، والصفر يُعدّ 9) هو عدد صلة الأرواح.',
      'لكل عدد معنى ونظرة تقليديان، يُعرضان بحسب سياق العلاقة الذي تختاره: زواج، عام، صداقة، عائلة أو عمل.',
    ],
    faqTitle: 'أسئلة شائعة',
    faqs: [
      {
        q: 'كيف أتحقق من توافق الأسماء للزواج؟',
        a: 'أدخل الاسمين واختر سياق «الزواج» ثم احسب. تجمع الأداة قيمتي الأبجد للاسمين مع 7، وتقسم على 9، وتعرض معنى الباقي في الزواج.',
      },
      {
        q: 'أي نظام أبجد يُستعمل؟',
        a: 'يمكنك التبديل بين الترتيب المغربي (المغرب العربي والأندلس وغرب أفريقيا) والترتيب المشرقي (مصر والمشرق وسائر آسيا). وأكثر الأسماء تعطي المجموع نفسه في الترتيبين؛ أما الأسماء التي فيها أحد الحروف الستة: الصاد والضاد والسين والظاء والغين والشين، فقد يختلف مجموعها.',
      },
      {
        q: 'هل يمكنني المقارنة بتاريخ الميلاد بدلًا من الأسماء؟',
        a: 'نعم. اختر «بتاريخ الميلاد» لتقارن بين أبراج الشمس والقمر والزهرة والمريخ لشخصين. وهذه مقارنة فلكية عامة حديثة، لا طريقة إسلامية كلاسيكية، ولا تستعمل وقت الميلاد ولا البيوت.',
      },
      {
        q: 'هل يجوز الاعتماد على توافق الأسماء؟',
        a: 'اجعله تأمّلًا ثقافيًا لا تنبّؤًا. فاختيار الزوج قائم على الدين والخُلق ومشورة الأهل وصلاة الاستخارة. ولا يحسم عددٌ زواجًا؛ والله وحده يعلم الغيب.',
      },
      {
        q: 'ماذا لو كانت نتيجتنا منخفضة؟',
        a: 'العدد المنخفض ليس تحريمًا ولا شؤمًا، بل قد يكون دعوة للحديث عن التوقّعات والصبر. وكثير من الزيجات السعيدة كانت «سترسب» في اختبار رقمي.',
      },
    ] as FaqItem[],
    relatedTitle: 'ذات صلة',
    related: [
      ['/ar/ikhtiyarat', 'أفضل التواريخ (الاختيارات)', 'اختر تاريخًا مناسبًا للنكاح.'],
      ['/ar/name-and-mother-burj', 'برجك من اسمك واسم أمك', 'برجك ويومك المناسب وذكرك وصدقتك.'],
      ['/ar/abjad', 'حاسبة الأبجد', 'قيمة الأبجد لأي اسم أو عبارة عربية.'],
      ['/ar/sadaqa', 'دليل الصدقة', 'الصدقة بحسب يوم الأسبوع وشهر الميلاد الهجري والبرج.'],
      ['/ar/birth-profile', 'ملف الميلاد', 'برجا الشمس والقمر ومنزل القمر وحظوظ الكواكب من القوة.'],
    ] as RelatedLink[],
  },
} as const;

/** WebApplication schema for /ar/compatibility (name and description reuse AR_META / the Arabic links). */
const AR_WEB_APP_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'حساب التوافق بالأسماء',
  url: `${SITE_URL}/ar/compatibility`,
  inLanguage: 'ar',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'Web',
  description: AR_META['/compatibility'].description,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  isAccessibleForFree: true,
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const lang = await resolvePageLang(searchParams);
  const routeLang = await getRouteLang();
  const served = await getServedLang();
  // /ar/compatibility: Arabic copy, RTL list padding, Arabic JSON-LD. EN and FR are unchanged.
  const isAr = served === 'ar';
  const c = isAr ? COPY.ar : COPY[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-3">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{c.h1}</h1>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.intro1}</p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.intro2}</p>
        <aside className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-4 space-y-1">
          <h2 className="font-semibold text-amber-900 dark:text-amber-200">{c.adabTitle}</h2>
          <p className="text-sm text-amber-900/90 dark:text-amber-100/90 leading-relaxed">{c.adab}</p>
        </aside>
        <div className="flex justify-end">
          <AbjadSystemSelector compact />
        </div>
      </main>

      <CompatibilityCalculator />

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <RelatedTools pagePath="/compatibility" lang={served === 'ar' ? 'ar' : lang} routeLang={served} />
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{c.howTitle}</h2>
          <ol className={`list-decimal ${isAr ? 'pr-5' : 'pl-5'} space-y-1 text-slate-700 dark:text-slate-300`}>
            {c.how.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <FaqSection id="compatibility-faq-heading" title={c.faqTitle} faqs={c.faqs} />
        <RelatedLinks title={c.relatedTitle} links={c.related} routeLang={routeLang} />
      </div>

      {isAr ? (
        <>
          <JsonLd data={{ ...faqJsonLd(c.faqs), inLanguage: 'ar' }} />
          <JsonLd data={AR_WEB_APP_JSON_LD} />
        </>
      ) : (
        <JsonLd data={faqJsonLd(c.faqs)} />
      )}
    </div>
  );
}
