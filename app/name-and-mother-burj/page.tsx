import type { Metadata } from 'next';
import { BURJ_NAMES_AR, BURJ_NAMES_EN, BURJ_NAMES_FR, getBurujData } from '@/src/features/istikhara/calculations';
import { ZODIAC_SADAQAH, ZODIAC_SIGN_ORDER, ZODIAC_SIGN_SYMBOL } from '@/src/data/zodiacSadaqahData';
import { buildToolMetadata, resolvePageLang, type PageLang } from '@/src/lib/pageLang';
import { FaqSection, JsonLd, RelatedLinks, faqJsonLd, type FaqItem, type RelatedLink } from '@/src/components/seo/SeoSections';
import { BurjCalculator } from './BurjCalculator';

const PATH = '/name-and-mother-burj';

const META = {
  en: {
    title: "Find Your Burj from Your Name & Mother's Name",
    description:
      "Free calculator: your burj (sign, ṭabʿ) from the Abjad value of your name and your mother's name — برجك من اسمك واسم امك. Element, temperament, blessed day, dhikr and burj sadaqah. For reflection.",
  },
  fr: {
    title: 'Votre burj avec votre nom et celui de votre mère',
    description:
      "Calculateur gratuit : votre burj (signe, ṭabʿ) d'après la valeur abjad de votre prénom et de celui de votre mère — برجك من اسمك واسم امك. Élément, tempérament, jour béni, dhikr et sadaqah du burj.",
  },
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  return buildToolMetadata(PATH, META[await resolvePageLang(searchParams)]);
}

const ELEMENT = {
  en: { fire: 'Fire', earth: 'Earth', air: 'Air', water: 'Water' },
  fr: { fire: 'Feu', earth: 'Terre', air: 'Air', water: 'Eau' },
} as const;

const COPY = {
  en: {
    kicker: 'Istikhārat al-Asmāʾ · ',
    h1: "Find Your Burj from Your Name and Your Mother's Name",
    intro1:
      'From the Arab world to West Africa and South Asia, people look for their burj (sign, ṭabʿ or sitāra) from their own name and their mother\'s name — in Arabic «برجك من اسمك واسم امك», in French « trouver son burj avec son prénom et le prénom de sa mère », in Urdu "naam se sitara". This page does the calculation with the same "Who Am I?" tool used in the Asrār app and explains the result: your element and temperament, blessed day, recommended dhikr and the sadaqah for your burj.',
    intro2:
      'The traditional name for this reflection is Istikhārat al-Asmāʾ, but it is not the istikhāra prayer: real istikhāra is ṣalāt al-istikhāra, the two rakʿas and duʿāʾ taught by the Prophet ﷺ. Use this tool for reflection and education, not prediction; Allah alone knows the unseen.',
    howTitle: 'How the calculation works',
    how: [
      "Write your name and your mother's name in Arabic letters (or type them in Latin letters and pick the Arabic spelling).",
      'Each name is converted to its Abjad (ḥisāb al-jummal) total using the Maghribi letter values.',
      'Add the two totals and divide by 12. The remainder (1–12, with 0 counted as 12) is your burj, from 1 = Aries (al-Ḥamal) to 12 = Pisces (al-Ḥūt).',
      'The burj gives your element (fire, earth, air or water), which describes your ṭabʿ (temperament), and links to a blessed day, a dhikr and a sadaqah.',
    ],
    exampleTitle: 'Worked example',
    example:
      'محمد (Muhammad) = 92 and فاطمة (Fatima) = 135. 92 + 135 = 227, and 227 ÷ 12 = 18 remainder 11, so the burj is 11: Aquarius (al-Dalw), an air burj.',
    dobNote: "Don't know your mother's name in Arabic? The tool can also work from your date of birth (tropical zodiac).",
    burujTitle: 'The 12 burūj at a glance',
    element: 'Element',
    temperament: 'Temperament',
    blessedDay: 'Blessed day',
    dhikr: 'Dhikr',
    sadaqah: 'Sadaqah',
    sadaqahLink: 'All sadaqah by burj →',
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        q: "How do I find my burj from my name and my mother's name?",
        a: "Add the Abjad value of your name to the Abjad value of your mother's name, divide by 12 and keep the remainder (0 counts as 12). Remainder 1 is Aries (al-Ḥamal), 2 Taurus, 3 Gemini, and so on to 12, Pisces (al-Ḥūt). The calculator above does it for you.",
      },
      {
        q: "Why is the mother's name used?",
        a: "In ʿilm al-ḥurūf your own name is read as who you are, and your mother's name as what surrounds you: family inheritance and the conditions of your path. Pairing the two gives the burj. The same method is found in Arabic, West African (Hausa, Wolof) and South Asian practice.",
      },
      {
        q: 'Is this the same as istikhāra?',
        a: 'No. Istikhāra is the prayer of seeking Allah\'s guidance (ṣalāt al-istikhāra). The name "Istikhārat al-Asmāʾ" is traditional, but this calculation is a reflection on names and temperament, not a prayer and not a way to know the unseen.',
      },
      {
        q: 'Is my name burj the same as my zodiac sign by birth date?',
        a: 'Not necessarily. The name-based burj comes only from the Abjad values of the two names. Your sign by birth date comes from the Sun\'s position when you were born, so the two can differ. The tool offers both methods.',
      },
      {
        q: 'What does my burj tell me?',
        a: 'Your element and temperament, a blessed day of the week, a Divine Name to remember in dhikr, and a traditional sadaqah. Read it as encouragement to good deeds and self-knowledge, not as a forecast.',
      },
    ] as FaqItem[],
    relatedTitle: 'Related',
    related: [
      ['/sadaqa', 'Sadaqa Guide', 'Sadaqah by weekday, Hijri birth month and burj.'],
      ['/sadaqa-of-the-day', 'Sadaqa of the Day', "Today's recommended sadaqah."],
      ['/compatibility', 'Name Compatibility for Marriage', 'Compare two names with the Abjad soul-connection method.'],
      ['/abjad', 'Abjad Calculator', 'The Abjad value of any Arabic name or phrase.'],
      ['/birth-profile', 'Birth Profile', 'Your Sun and Moon signs, lunar mansion and planetary dignities.'],
    ] as RelatedLink[],
  },
  fr: {
    kicker: 'Istikhārat al-Asmāʾ · ',
    h1: 'Trouver son burj avec son nom et le nom de sa mère',
    intro1:
      "Du monde arabe à l'Afrique de l'Ouest et à l'Asie du Sud, on cherche son burj (signe, ṭabʿ ou sitāra) à partir de son prénom et de celui de sa mère — en arabe «برجك من اسمك واسم امك», en français « trouver son burj avec son prénom et le prénom de sa mère ». Cette page fait le calcul avec l'outil « Qui suis-je ? » de l'application Asrār et explique le résultat : élément et tempérament, jour béni, dhikr recommandé et sadaqah de votre burj.",
    intro2:
      "Le nom traditionnel de cette réflexion est Istikhārat al-Asmāʾ, mais ce n'est pas la prière d'istikhāra : la véritable istikhāra est la ṣalāt al-istikhāra, les deux rakʿas et la duʿāʾ enseignées par le Prophète ﷺ. Utilisez cet outil pour la réflexion et l'éducation, sans prédiction ; Allah seul connaît l'invisible.",
    howTitle: 'Comment se fait le calcul',
    how: [
      'Écrivez votre prénom et celui de votre mère en lettres arabes (ou en lettres latines, puis choisissez l\'orthographe arabe).',
      'Chaque prénom est converti en son total abjad (ḥisāb al-jummal) avec les valeurs maghribi.',
      'Additionnez les deux totaux et divisez par 12. Le reste (1 à 12, 0 comptant pour 12) est votre burj, de 1 = Bélier (al-Ḥamal) à 12 = Poissons (al-Ḥūt).',
      "Le burj donne votre élément (feu, terre, air ou eau), qui décrit votre ṭabʿ (tempérament), ainsi qu'un jour béni, un dhikr et une sadaqah.",
    ],
    exampleTitle: 'Exemple',
    example:
      'محمد (Muhammad) = 92 et فاطمة (Fatima) = 135. 92 + 135 = 227 ; 227 ÷ 12 = 18, reste 11 : le burj est donc le 11, Verseau (al-Dalw), un burj d\'air.',
    dobNote: "Vous ne connaissez pas le nom de votre mère en arabe ? L'outil peut aussi partir de votre date de naissance (zodiaque tropical).",
    burujTitle: 'Les 12 burūj en bref',
    element: 'Élément',
    temperament: 'Tempérament',
    blessedDay: 'Jour béni',
    dhikr: 'Dhikr',
    sadaqah: 'Sadaqah',
    sadaqahLink: 'Toute la sadaqah par burj →',
    faqTitle: 'Questions fréquentes',
    faqs: [
      {
        q: 'Comment trouver mon burj avec mon nom et celui de ma mère ?',
        a: "Additionnez la valeur abjad de votre prénom et celle du prénom de votre mère, divisez par 12 et gardez le reste (0 compte pour 12). Le reste 1 correspond au Bélier (al-Ḥamal), 2 au Taureau, 3 aux Gémeaux, et ainsi de suite jusqu'à 12, les Poissons (al-Ḥūt). Le calculateur ci-dessus le fait pour vous.",
      },
      {
        q: 'Pourquoi utiliser le nom de la mère ?',
        a: "En ʿilm al-ḥurūf, votre prénom exprime qui vous êtes, et le prénom de votre mère ce qui vous entoure : l'héritage familial et les conditions de votre chemin. L'association des deux donne le burj. La même méthode se retrouve dans les pratiques arabe, ouest-africaine (haoussa, wolof) et sud-asiatique.",
      },
      {
        q: "Est-ce la même chose que l'istikhāra ?",
        a: "Non. L'istikhāra est la prière de demande de guidance à Allah (ṣalāt al-istikhāra). Le nom « Istikhārat al-Asmāʾ » est traditionnel, mais ce calcul est une réflexion sur les noms et le tempérament, ni une prière ni un moyen de connaître l'invisible.",
      },
      {
        q: 'Mon burj par le nom est-il mon signe par date de naissance ?',
        a: "Pas forcément. Le burj par le nom vient uniquement des valeurs abjad des deux prénoms ; le signe par date de naissance vient de la position du Soleil à votre naissance. Les deux peuvent différer, et l'outil propose les deux méthodes.",
      },
      {
        q: 'Que m\'apprend mon burj ?',
        a: "Votre élément et votre tempérament, un jour béni de la semaine, un Nom divin pour le dhikr et une sadaqah traditionnelle. Lisez-le comme un encouragement aux bonnes œuvres et à la connaissance de soi, non comme une prévision.",
      },
    ] as FaqItem[],
    relatedTitle: 'Voir aussi',
    related: [
      ['/sadaqa', 'Guide de la sadaqa', 'Sadaqah par jour, mois hégirien de naissance et burj.'],
      ['/sadaqa-of-the-day', 'Sadaqa du jour', "La sadaqah recommandée aujourd'hui."],
      ['/compatibility', 'Compatibilité des prénoms pour le mariage', "Comparez deux prénoms avec la méthode abjad de connexion d'âme."],
      ['/abjad', 'Calculateur Abjad', 'La valeur abjad de tout nom ou phrase en arabe.'],
      ['/birth-profile', 'Profil de naissance', 'Vos signes solaire et lunaire, demeure lunaire et dignités planétaires.'],
    ] as RelatedLink[],
  },
} as const;

/** Server-rendered summary of each burj from the existing burujData.json (same data the calculator shows). */
function burujSummaries(lang: PageLang) {
  return Array.from({ length: 12 }, (_, i) => {
    const n = i + 1;
    const p = getBurujData(n);
    const names = p.spiritual_practice.divine_names;
    const dhikr = 'arabic' in names ? names : null;
    const zodiacId = ZODIAC_SIGN_ORDER[i];
    return {
      n,
      symbol: ZODIAC_SIGN_SYMBOL[zodiacId],
      name: lang === 'fr' ? BURJ_NAMES_FR[i] : BURJ_NAMES_EN[i],
      translit: ZODIAC_SADAQAH[zodiacId].translit,
      arabic: BURJ_NAMES_AR[i],
      element: ELEMENT[lang][p.element as keyof (typeof ELEMENT)['en']] ?? p.element,
      temperament: p.personality[lang]?.temperament,
      blessedDay: p.blessed_day.day[lang],
      dhikr,
      sadaqah: p.sadaqah.monthly.traditional[lang],
    };
  });
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const lang = await resolvePageLang(searchParams);
  const c = COPY[lang];
  const buruj = burujSummaries(lang);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-3">
        <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">
          {c.kicker}
          <span lang="ar" dir="rtl">برجك من اسمك واسم امك</span>
        </p>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{c.h1}</h1>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.intro1}</p>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{c.intro2}</p>
      </main>

      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <BurjCalculator />
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{c.howTitle}</h2>
          <ol className="list-decimal pl-5 space-y-1 text-slate-700 dark:text-slate-300">
            {c.how.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">{c.exampleTitle}</h3>
          <p className="text-slate-700 dark:text-slate-300">{c.example}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{c.dobNote}</p>
        </section>

        <section className="space-y-4" aria-labelledby="buruj-heading">
          <h2 id="buruj-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">{c.burujTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {buruj.map((b) => (
              <article
                key={b.n}
                id={`burj-${b.n}`}
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 space-y-1.5 text-sm"
              >
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {b.n}. <span aria-hidden="true">{b.symbol} </span>
                  {b.name} · {b.translit} <span lang="ar" dir="rtl">({b.arabic})</span>
                </h3>
                <p className="text-slate-700 dark:text-slate-300"><strong>{c.element}:</strong> {b.element}</p>
                {b.temperament && (
                  <p className="text-slate-700 dark:text-slate-300"><strong>{c.temperament}:</strong> {b.temperament}</p>
                )}
                <p className="text-slate-700 dark:text-slate-300"><strong>{c.blessedDay}:</strong> {b.blessedDay}</p>
                {b.dhikr && (
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>{c.dhikr}:</strong> {b.dhikr.transliteration} (<span lang="ar" dir="rtl">{b.dhikr.arabic}</span>) — {b.dhikr.translation[lang]}
                  </p>
                )}
                <p className="text-slate-700 dark:text-slate-300"><strong>{c.sadaqah}:</strong> {b.sadaqah}</p>
              </article>
            ))}
          </div>
          <a href="/sadaqa#by-burj" className="inline-block font-semibold text-purple-700 dark:text-purple-300 hover:underline">
            {c.sadaqahLink}
          </a>
        </section>

        <FaqSection id="burj-faq-heading" title={c.faqTitle} faqs={c.faqs} />
        <RelatedLinks title={c.relatedTitle} links={c.related} />
      </div>

      <JsonLd data={faqJsonLd(c.faqs)} />
    </div>
  );
}
