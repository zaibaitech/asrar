/* eslint-disable */
/**
 * Urdu page copy for the /ur landing pages (phase 1), hand-translated, each
 * string with its English source so the native reviewer can check it
 * (docs/i18n/ur-review.md is generated from this file, urMetadata.ts, ur.ts and
 * public/i18n/ur-ui.json by scripts/i18n/ur/build_review.ts).
 *
 * Style: natural Pakistani/Indian Urdu, standard Islamic vocabulary (ابجد، برج،
 * ساعاتِ کواکب، استخارہ، صدقہ). Divine Names and the Qur'an stay in Arabic.
 * Reflection, not prediction.
 */

export interface T { en: string; ur: string }
export interface Faq { q: T; a: T }

const t = (en: string, ur: string): T => ({ en, ur });

/** Strings shared by every /ur page. */
export const UR_COMMON = {
  disclaimer: t(
    'These tools are for reflection and learning, not prediction; only Allah knows the unseen.',
    'یہ ٹولز غور و فکر اور سیکھنے کے لیے ہیں، پیش گوئی کے لیے نہیں؛ غیب کا علم صرف اللہ کو ہے۔',
  ),
  toolUiNote: t('Some parts of the tool are still shown in English.', 'ٹول کے کچھ حصے ابھی انگریزی میں ہیں۔'),
  home: t('Asrār', 'اسرار'),
  breadcrumbLabel: t('Breadcrumb', 'صفحے کا راستہ'),
  faqTitle: t('Frequently asked questions', 'عام سوالات'),
  linksTitle: t('Related pages', 'متعلقہ صفحات'),
  inEnglish: t('(in English)', '(انگریزی میں)'),
  inEnglishDesc: t('The same tool with the explanation in English.', 'یہی ٹول، انگریزی وضاحت کے ساتھ۔'),
  /** Arabic-script names: Urdu-only letters have no Abjad value. */
  spellingNote: t(
    'Write names in their Arabic spelling for the Abjad count, using Arabic ي، ك، ة/ه (for example فاطمة rather than فاطمہ, علي rather than علی). Urdu letters such as ی، ک، ہ، ٹ، ڈ، ڑ، ں، ھ، ے are not counted.',
    'ابجد کے حساب کے لیے نام عربی املا میں، عربی ي، ك اور ة/ه کے ساتھ لکھیں (مثلاً فاطمہ کے بجائے فاطمة، علی کے بجائے علي)۔ اردو حروف جیسے ی، ک، ہ، ٹ، ڈ، ڑ، ں، ھ، ے شمار نہیں ہوتے۔',
  ),
};

/** Urdu tool names and one-line descriptions (home list and "related pages"). */
export const UR_TOOLS = {
  burj: {
    path: '/ur/name-and-mother-burj',
    name: t("Your Burj from Your Name and Your Mother's Name", 'اپنے نام اور والدہ کے نام سے برج'),
    desc: t('Your burj, element, blessed day, dhikr and sadaqa from the Abjad count.', 'ابجد کے حساب سے آپ کا برج، عنصر، مبارک دن، ذکر اور صدقہ۔'),
  },
  compatibility: {
    path: '/ur/compatibility',
    name: t('Name Compatibility for Marriage', 'شادی کے لیے ناموں کی مطابقت'),
    desc: t('Compare two names with the soul-connection method.', 'روحانی ربط کے طریقے سے دو ناموں کا موازنہ۔'),
  },
  abjad: {
    path: '/ur/abjad',
    name: t('Abjad Calculator', 'ابجد کیلکولیٹر'),
    desc: t('The Abjad value of any name or Arabic phrase.', 'کسی بھی نام یا عربی عبارت کی ابجد قیمت۔'),
  },
  hours: {
    path: '/ur/planetary-hours',
    name: t('Planetary Hours Today', 'آج کی ساعاتِ کواکب'),
    desc: t('The planet ruling the current hour where you are.', 'آپ کے مقام پر موجودہ ساعت کا حاکم سیارہ۔'),
  },
  planetOfDay: {
    path: '/ur/planet-of-the-day',
    name: t('Planet of the Day', 'آج کا سیارہ'),
    desc: t("Today's ruling planet, the deeds, dhikr and sadaqa that suit it.", 'آج کا حاکم سیارہ، اور اس کے مناسب اعمال، ذکر اور صدقہ۔'),
  },
  ikhtiyarat: {
    path: '/ur/ikhtiyarat',
    name: t('Choosing Suitable Dates (Ikhtiyārāt)', 'مناسب تاریخوں کا انتخاب (اختیارات)'),
    desc: t('Suitable dates for nikāḥ, travel, moving home and business.', 'نکاح، سفر، نئے گھر اور کاروبار کے لیے مناسب تاریخیں۔'),
  },
} as const;
export type UrToolKey = keyof typeof UR_TOOLS;

/** Element and weekday names used in the tables. */
export const UR_ELEMENTS: Record<string, T> = {
  fire: t('Fire', 'آگ'),
  earth: t('Earth', 'مٹی'),
  air: t('Air', 'ہوا'),
  water: t('Water', 'پانی'),
};
/** Indexed like Date.getDay() (0 = Sunday). */
export const UR_WEEKDAYS: readonly T[] = [
  t('Sunday', 'اتوار'),
  t('Monday', 'پیر'),
  t('Tuesday', 'منگل'),
  t('Wednesday', 'بدھ'),
  t('Thursday', 'جمعرات'),
  t('Friday', 'جمعہ'),
  t('Saturday', 'ہفتہ'),
];
/** The twelve burūj, 1 = Aries (Ḥamal) … 12 = Pisces (Ḥūt). */
/**
 * Display form of the burj dhikr on /ur (Urdu review, batch 0): burujData.json
 * vocalises 6 of the 12 pairs and leaves 6 bare, so the /ur burj table shows
 * one fully vocalised style for all 12. Display only: the data file, the
 * calculator and the EN/FR/AR pages are unchanged. Keyed by the bare form.
 */
const UR_DHIKR_VOCALISED: Readonly<Record<string, string>> = {
  'يا مالك يا قدوس': 'يَا مَالِكُ يَا قُدُّوسُ',
  'يا كافي يا غني': 'يَا كَافِي يَا غَنِيُّ',
  'يا علي يا عظيم': 'يَا عَلِيُّ يَا عَظِيمُ',
  'يا رحمن يا رحيم': 'يَا رَحْمٰنُ يَا رَحِيمُ',
  'يا حي يا قيوم': 'يَا حَيُّ يَا قَيُّومُ',
  'يا فتاح يا رزاق': 'يَا فَتَّاحُ يَا رَزَّاقُ',
  'يا كبير يا متعالي': 'يَا كَبِيرُ يَا مُتَعَالِي',
};
const stripHarakat = (s: string) => s.replace(/[\u064B-\u0652\u0670]/g, '').replace(/\s+/g, ' ').trim();
/** The vocalised display form of a burj dhikr (falls back to the data as is). */
export function urDhikrDisplay(arabic: string): string {
  return UR_DHIKR_VOCALISED[stripHarakat(arabic)] ?? arabic;
}

export const UR_BURUJ: readonly T[] = [
  t('Aries (Ḥamal)', 'حمل'),
  t('Taurus (Thawr)', 'ثور'),
  t('Gemini (Jawzāʾ)', 'جوزا'),
  t('Cancer (Saraṭān)', 'سرطان'),
  t('Leo (Asad)', 'اسد'),
  t('Virgo (Sunbula)', 'سنبلہ'),
  t('Libra (Mīzān)', 'میزان'),
  t('Scorpio (ʿAqrab)', 'عقرب'),
  t('Sagittarius (Qaws)', 'قوس'),
  t('Capricorn (Jady)', 'جدی'),
  t('Aquarius (Dalw)', 'دلو'),
  t('Pisces (Ḥūt)', 'حوت'),
];

/* ---------------------------------------------------------------------- */
/* /ur (home)                                                              */
/* ---------------------------------------------------------------------- */
export const UR_HOME = {
  h1: t('Asrār — Abjad, Burj and Planetary Hours', 'اسرار — ابجد، برج اور ساعاتِ کواکب'),
  intro: t(
    "Asrār is a companion for the traditional Islamic sciences of ʿilm al-ḥurūf (the science of letters) and celestial timing. Find your burj from your name and your mother's name, compare two names, calculate Abjad values, see the planet ruling the current hour and day, and choose suitable dates with classical ikhtiyārāt.",
    'اسرار علم الحروف (حروف کا علم) اور فلکی اوقات کے روایتی اسلامی علوم میں آپ کا رہنما ہے۔ نام اور والدہ کے نام سے اپنا برج معلوم کریں، دو ناموں کا موازنہ کریں، ابجد کی قیمتیں نکالیں، موجودہ ساعت اور دن کا حاکم سیارہ دیکھیں، اور کلاسیکی اختیارات کے ذریعے مناسب تاریخیں منتخب کریں۔',
  ),
  toolsTitle: t('Tools in Urdu', 'اردو میں ٹولز'),
};

/* ---------------------------------------------------------------------- */
/* /ur/name-and-mother-burj                                                */
/* ---------------------------------------------------------------------- */
export const UR_BURJ = {
  h1: t("Your Burj from Your Name and Your Mother's Name", 'نام اور والدہ کے نام سے برج'),
  lead: t(
    "Write your name and your mother's name to find your burj by the Abjad count, with its element, temperament, blessed day, dhikr and the sadaqa suited to it.",
    'اپنا نام اور اپنی والدہ کا نام لکھیں اور ابجد کے حساب سے اپنا برج معلوم کریں، ساتھ ہی اس کا عنصر، مزاج، مبارک دن، ذکر اور اس کے مناسب صدقہ بھی۔',
  ),
  howTitle: t('How is the burj calculated?', 'برج کا حساب کیسے ہوتا ہے؟'),
  how: [
    t(
      "Write your name and your mother's name in Arabic letters (or in Latin letters, then choose the Arabic spelling).",
      'اپنا نام اور والدہ کا نام عربی حروف میں لکھیں (یا رومن حروف میں لکھ کر عربی املا منتخب کریں)۔',
    ),
    t(
      'Each name is converted to its Abjad total using the Maghribi letter values.',
      'ہر نام کو مغربی (شمالی افریقی) ترتیب کے حروف کی قیمتوں سے اس کے ابجد مجموعے میں بدلا جاتا ہے۔',
    ),
    t(
      'Add the two totals and divide by 12; the remainder (1 to 12, with 0 counted as 12) is your burj, from 1 = Aries (Ḥamal) to 12 = Pisces (Ḥūt).',
      'دونوں مجموعے جمع کر کے 12 سے تقسیم کریں؛ باقی (1 سے 12 تک، اور صفر کو 12 شمار کیا جاتا ہے) آپ کا برج ہے: 1 = حمل سے 12 = حوت تک۔',
    ),
    t(
      'The burj points to your element (fire, earth, air or water), which describes your temperament, and is linked to a blessed day, a dhikr and a sadaqa.',
      'برج آپ کے عنصر (آگ، مٹی، ہوا یا پانی) کی نشان دہی کرتا ہے جو آپ کے مزاج کو بیان کرتا ہے، اور اس کے ساتھ ایک مبارک دن، ایک ذکر اور ایک صدقہ وابستہ ہے۔',
    ),
  ],
  exampleTitle: t('Worked example', 'حل شدہ مثال'),
  example: t(
    'Muḥammad (محمد) = 92 and Fāṭima (فاطمة) = 135. The total is 92 + 135 = 227; 227 ÷ 12 = 18 remainder 11, so the burj is 11: Aquarius (Dalw), an air sign.',
    'محمد = 92 اور فاطمہ (فاطمة) = 135۔ مجموعہ 92 + 135 = 227؛ 227 ÷ 12 = 18، باقی 11، لہٰذا برج 11 ہے: دلو، جو ہوائی برج ہے۔',
  ),
  dobNote: t(
    "Don't know how to write your mother's name in Arabic? The tool can also find your burj from your date of birth (tropical zodiac).",
    'والدہ کا نام عربی میں لکھنا نہیں آتا؟ یہ ٹول آپ کی تاریخِ پیدائش سے بھی برج (مداری / ٹراپیکل بروج) نکال سکتا ہے۔',
  ),
  istikharaTitle: t('This is not ṣalāt al-istikhāra', 'یہ نمازِ استخارہ نہیں ہے'),
  istikhara: t(
    "The traditional name of this reflection is 'istikhāra of names', but it is not istikhāra: true istikhāra is ṣalāt al-istikhāra, the two rakʿas and the duʿāʾ taught by the Prophet ﷺ. Use this tool for reflection and learning, not prediction; only Allah knows the unseen.",
    'اس غور و فکر کا روایتی نام “ناموں کا استخارہ” ہے، لیکن یہ استخارہ نہیں۔ اصل استخارہ نمازِ استخارہ ہے، یعنی وہ دو رکعتیں اور دعا جو نبی کریم ﷺ نے سکھائیں۔ اس ٹول کو غور و فکر اور سیکھنے کے لیے استعمال کریں، پیش گوئی کے لیے نہیں؛ غیب کا علم صرف اللہ کو ہے۔',
  ),
  tableTitle: t('The twelve burūj at a glance', 'بارہ بروج ایک نظر میں'),
  colBurj: t('Burj', 'برج'),
  colElement: t('Element', 'عنصر'),
  colDay: t('Blessed day', 'مبارک دن'),
  colDhikr: t('Dhikr', 'ذکر'),
  faqs: [
    {
      q: t("How do I find my burj from my name and my mother's name?", 'اپنے نام اور امی کے نام سے برج کیسے معلوم کریں؟'),
      a: t(
        "Add the Abjad value of your name to the value of your mother's name, divide the total by 12 and keep the remainder (0 counts as 12). Remainder 1 is Aries (Ḥamal), 2 Taurus (Thawr), 3 Gemini (Jawzāʾ), and so on up to 12, Pisces (Ḥūt). The calculator above does the counting for you.",
        'اپنے نام کی ابجد قیمت کو والدہ کے نام کی قیمت میں جمع کریں، مجموعے کو 12 سے تقسیم کریں اور باقی کو لیں (صفر کو 12 شمار کریں)۔ باقی 1 ہو تو حمل، 2 ہو تو ثور، 3 ہو تو جوزا، اور اسی طرح 12 ہو تو حوت۔ اوپر والا کیلکولیٹر یہ حساب آپ کے لیے کر دیتا ہے۔',
      ),
    },
    {
      q: t("Why is the mother's name used?", 'والدہ کا نام کیوں لیا جاتا ہے؟'),
      a: t(
        "In ʿilm al-ḥurūf your own name is read as pointing to yourself, and your mother's name to what surrounds you: family inheritance and the circumstances of your path; the burj is drawn from the two together. The method is known in Arab practice, in West Africa (among the Hausa and Wolof) and in South Asia.",
        'علم الحروف میں آپ کا نام آپ کی اپنی ذات کی طرف اشارہ سمجھا جاتا ہے، اور والدہ کا نام آپ کے گرد و پیش کی طرف: خاندانی ورثہ اور زندگی کے حالات؛ اور برج دونوں کو ملا کر نکالا جاتا ہے۔ یہ طریقہ عرب روایت میں، مغربی افریقہ (ہوسا اور وولوف) میں اور برصغیر میں معروف ہے۔',
      ),
    },
    {
      q: t('Is this istikhāra?', 'کیا یہ استخارہ ہے؟'),
      a: t(
        "No. Istikhāra is the prayer of asking Allah for what is good (ṣalāt al-istikhāra). 'Istikhāra of names' is only a traditional label; this calculation is a reflection on names and temperaments, not a prayer and not a way of knowing the unseen.",
        'نہیں۔ استخارہ اللہ تعالیٰ سے خیر طلب کرنے کی نماز (نمازِ استخارہ) ہے۔ “ناموں کا استخارہ” محض ایک روایتی نام ہے؛ یہ حساب ناموں اور مزاجوں پر غور و فکر ہے، نہ نماز ہے اور نہ غیب جاننے کا ذریعہ۔',
      ),
    },
    {
      q: t('Is the name burj the same as my burj by date of birth?', 'کیا نام کا برج وہی ہے جو تاریخِ پیدائش کا برج ہوتا ہے؟'),
      a: t(
        "Not necessarily. The name burj comes only from the letter values of the two names, while the birth-date burj comes from the Sun's position on the day you were born, so the two can differ. The tool offers both.",
        'ضروری نہیں۔ نام کا برج صرف دونوں ناموں کے حروف کی قیمتوں سے نکلتا ہے، جبکہ تاریخِ پیدائش کا برج آپ کی پیدائش کے دن سورج کے مقام سے، اس لیے دونوں مختلف ہو سکتے ہیں۔ یہ ٹول دونوں طریقے پیش کرتا ہے۔',
      ),
    },
    {
      q: t('What does my burj tell me?', 'میرا برج مجھے کیا بتاتا ہے؟'),
      a: t(
        'Your element and temperament, a blessed day of the week, one of the Beautiful Names of Allah to remember, and a traditional sadaqa. Read it as encouragement towards good deeds and self-knowledge, not as a forecast of the future.',
        'آپ کا عنصر اور مزاج، ہفتے کا ایک مبارک دن، اللہ کے اسمائے حسنیٰ میں سے ایک اسم جس کا ذکر کیا جائے، اور ایک روایتی صدقہ۔ اسے نیک اعمال اور خود شناسی کی ترغیب سمجھیں، مستقبل کی پیش گوئی نہیں۔',
      ),
    },
  ] as Faq[],
};

/* ---------------------------------------------------------------------- */
/* /ur/compatibility                                                       */
/* ---------------------------------------------------------------------- */
export const UR_COMPAT = {
  h1: t('Name Compatibility for Marriage', 'شادی کے لیے ناموں کی مطابقت'),
  lead: t(
    'Enter two names to compare their Abjad totals with the traditional soul-connection method, read first for marriage, with friendship, family and work as other contexts.',
    'دو نام لکھیں اور روایتی “روحانی ربط” کے طریقے سے ان کے ابجد مجموعوں کا موازنہ کریں؛ نتیجہ پہلے شادی کے لحاظ سے، اور پھر دوستی، خاندان اور کام کے لحاظ سے پڑھا جا سکتا ہے۔',
  ),
  adabTitle: t('Adab first', 'پہلے ادب'),
  adab: t(
    'A name number cannot tell you whether a marriage will succeed. Ask about dīn and character, consult both families, pray ṣalāt al-istikhāra and put your trust in Allah. Use this tool for reflection and conversation, not as a verdict; Allah alone knows the unseen.',
    'ناموں کا عدد یہ نہیں بتا سکتا کہ شادی کامیاب ہو گی یا نہیں۔ دین اور اخلاق کے بارے میں معلوم کریں، دونوں خاندانوں سے مشورہ کریں، نمازِ استخارہ پڑھیں اور اللہ پر توکل کریں۔ اس ٹول کو غور و فکر اور گفتگو کے لیے استعمال کریں، فیصلے کے طور پر نہیں؛ غیب کا علم صرف اللہ کو ہے۔',
  ),
  howTitle: t('How the names method works', 'ناموں کا طریقہ کیسے کام کرتا ہے'),
  how: [
    t(
      'Write both names in Arabic letters (or type them in Latin letters and pick the Arabic spelling).',
      'دونوں نام عربی حروف میں لکھیں (یا رومن حروف میں لکھ کر عربی املا منتخب کریں)۔',
    ),
    t(
      'Each name is converted to its Abjad (kabīr) total, using the Maghribi or Mashriqi letter values you select.',
      'ہر نام کو اس کے ابجد (کبیر) مجموعے میں بدلا جاتا ہے، آپ کی منتخب کردہ مغربی یا مشرقی ترتیب کے مطابق۔',
    ),
    t(
      'The two totals are added together with 7 and divided by 9; the remainder (1–9, with 0 counted as 9) is the soul-connection number.',
      'دونوں مجموعوں میں 7 جمع کر کے 9 سے تقسیم کیا جاتا ہے؛ باقی (1 سے 9 تک، اور صفر کو 9 شمار کیا جاتا ہے) روحانی ربط کا عدد ہے۔',
    ),
    t(
      'Each number has a traditional meaning, shown for the relationship context you choose: marriage, universal, friendship, family or work.',
      'ہر عدد کا ایک روایتی مفہوم ہے جو آپ کے منتخب کردہ رشتے کے لحاظ سے دکھایا جاتا ہے: شادی، عمومی، دوستی، خاندان یا کام۔',
    ),
  ],
  faqs: [
    {
      q: t('How do I check name compatibility for marriage?', 'شادی کے لیے نام کیسے ملائیں؟'),
      a: t(
        "Enter both names, choose the 'Marriage' context and calculate. The tool adds the Abjad values of the two names plus 7, divides by 9 and shows the meaning of the remainder for marriage.",
        'دونوں نام لکھیں، “شادی” کا انتخاب کریں اور حساب کریں۔ ٹول دونوں ناموں کی ابجد قیمتوں میں 7 جمع کر کے 9 سے تقسیم کرتا ہے اور باقی کا مفہوم شادی کے لحاظ سے دکھاتا ہے۔',
      ),
    },
    {
      q: t('Which Abjad system is used?', 'کون سا ابجد نظام استعمال ہوتا ہے؟'),
      a: t(
        'You can switch between the Maghribi order (North and West Africa) and the Mashriqi order (the East, including South Asia). Most names give the same total in both; names with letters such as ṣād, sīn, shīn, ḍād, ẓāʾ or ghayn can differ.',
        'آپ مغربی ترتیب (شمالی اور مغربی افریقہ) اور مشرقی ترتیب (مشرق، بشمول برصغیر) کے درمیان انتخاب کر سکتے ہیں۔ اکثر ناموں کا مجموعہ دونوں میں یکساں آتا ہے؛ جن ناموں میں ص، س، ش، ض، ظ یا غ جیسے حروف ہوں ان میں فرق ہو سکتا ہے۔',
      ),
    },
    {
      q: t('Can I compare by date of birth instead of names?', 'کیا ناموں کے بجائے تاریخِ پیدائش سے موازنہ ہو سکتا ہے؟'),
      a: t(
        "Yes. Choose 'By Birth Date' to compare two people's Sun, Moon, Venus and Mars signs. This is a general, modern astrological comparison, not a classical Islamic method.",
        'جی ہاں۔ “تاریخِ پیدائش سے” منتخب کریں تاکہ دو افراد کے سورج، چاند، زہرہ اور مریخ کے بروج کا موازنہ ہو۔ یہ ایک عمومی، جدید علمِ نجوم کا موازنہ ہے، کوئی کلاسیکی اسلامی طریقہ نہیں۔',
      ),
    },
    {
      q: t('Is it permissible to rely on name compatibility?', 'کیا ناموں کی مطابقت پر بھروسا کرنا درست ہے؟'),
      a: t(
        'Treat it as cultural reflection, not prediction. Choosing a spouse rests on dīn, character, family counsel and ṣalāt al-istikhāra. No number decides a marriage; Allah alone knows the unseen.',
        'اسے ثقافتی غور و فکر سمجھیں، پیش گوئی نہیں۔ رشتے کا انتخاب دین، اخلاق، خاندان کے مشورے اور نمازِ استخارہ پر ہوتا ہے۔ کوئی عدد شادی کا فیصلہ نہیں کرتا؛ غیب کا علم صرف اللہ کو ہے۔',
      ),
    },
    {
      q: t('What if our result is low?', 'اگر نتیجہ کم آئے تو کیا کریں؟'),
      a: t(
        "A low number is not a prohibition and not a bad omen. It can be an invitation to talk about expectations and patience. Many happy marriages would 'fail' a numeric test.",
        'کم عدد نہ تو ممانعت ہے اور نہ بدشگونی۔ یہ توقعات اور صبر کے بارے میں بات کرنے کی دعوت ہو سکتی ہے۔ بہت سی خوشگوار شادیاں کسی عددی امتحان میں “ناکام” ہو جاتیں۔',
      ),
    },
  ] as Faq[],
};

/* ---------------------------------------------------------------------- */
/* /ur/abjad                                                               */
/* ---------------------------------------------------------------------- */
export const UR_ABJAD = {
  h1: t('Abjad Calculator: The Numerical Value of Your Name', 'ابجد کیلکولیٹر: نام کے اعداد'),
  lead: t(
    "Calculate the Abjad value of your name or any Arabic phrase, choose the Mashriqi or Maghribi order, and see each letter's value and the balance of the elements.",
    'اپنے نام یا کسی بھی عربی عبارت کی ابجد قیمت نکالیں، مشرقی یا مغربی ترتیب منتخب کریں، اور ہر حرف کی قیمت اور عناصر کا توازن دیکھیں۔',
  ),
  whatTitle: t('What is Abjad (ḥisāb al-jummal)?', 'ابجد (حسابِ جمل) کیا ہے؟'),
  what: t(
    "The Abjad system gives every Arabic letter a number: alif 1, bāʾ 2, jīm 3, and so on up to ghayn 1000. The sum of a word's letter values is its ḥisāb al-jummal, a count used for centuries in the Islamic sciences and, in the subcontinent, also for chronograms (tārīkh-goʾī).",
    'ابجد کے نظام میں عربی کے ہر حرف کی ایک عددی قیمت ہے: الف 1، ب 2، ج 3، اور اسی طرح غ 1000 تک۔ کسی لفظ کے حروف کی قیمتوں کا مجموعہ اس کا “حسابِ جمل” کہلاتا ہے، جو صدیوں سے اسلامی علوم میں، اور برصغیر میں تاریخ گوئی (مادۂ تاریخ) میں بھی استعمال ہوتا رہا ہے۔',
  ),
  ordersTitle: t('The Mashriqi and Maghribi orders', 'مشرقی اور مغربی ترتیب'),
  orders: t(
    "In ʿilm al-ḥurūf and ʿilm al-aʿdād scholars studied the numerical values of the Divine Names, Qur'anic phrases and people's names, and linked the letters to the four elements: fire, air, water and earth. There are two common orders: the Mashriqi order used in the East, including Pakistan and India, and the Maghribi order used in North and West Africa. This calculator supports both so you can compare the results.",
    'علم الحروف اور علم الاعداد میں علما نے اسمائے حسنیٰ، قرآنی عبارات اور لوگوں کے ناموں کی عددی قیمتوں کا مطالعہ کیا اور حروف کو چار عناصر سے جوڑا: آگ، ہوا، پانی اور مٹی۔ دو ترتیبیں عام ہیں: مشرقی ترتیب، جو پاکستان اور ہندوستان سمیت مشرق میں رائج ہے، اور مغربی ترتیب، جو شمالی اور مغربی افریقہ میں رائج ہے۔ یہ کیلکولیٹر دونوں ترتیبوں سے حساب کرتا ہے تاکہ آپ نتائج کا موازنہ کر سکیں۔',
  ),
  howTitle: t('How to use the calculator', 'کیلکولیٹر کیسے استعمال کریں'),
  how: t(
    'Choose the type of calculation, write the name or phrase in Arabic letters (or in Latin letters for the tool to convert), then read the total, the value of each letter and the element analysis.',
    'حساب کی قسم منتخب کریں، نام یا عبارت عربی حروف میں لکھیں (یا رومن حروف میں، تاکہ ٹول اسے عربی میں بدل دے)، پھر مجموعہ، ہر حرف کی قیمت اور عناصر کا تجزیہ دیکھیں۔',
  ),
  example: t('Example: Muḥammad = mīm (40) + ḥāʾ (8) + mīm (40) + dāl (4) = 92.', 'مثال: محمد = م (40) + ح (8) + م (40) + د (4) = 92۔'),
  faqs: [
    {
      q: t('What is ʿilm al-aʿdād?', 'علم الاعداد کیا ہے؟'),
      a: t(
        'ʿIlm al-aʿdād is the traditional study of the numbers of letters and words through Abjad. In this tool it is a subject of reflection and learning about names, not fortune-telling.',
        'علم الاعداد حروف اور الفاظ کے اعداد کا روایتی مطالعہ ہے، جو ابجد کے ذریعے کیا جاتا ہے۔ اس ٹول میں یہ ناموں کے بارے میں غور و فکر اور سیکھنے کا موضوع ہے، قسمت کا حال بتانا نہیں۔',
      ),
    },
    {
      q: t('What is the difference between the Mashriqi and Maghribi Abjad?', 'مشرقی اور مغربی ابجد میں کیا فرق ہے؟'),
      a: t(
        'They are two traditional orders of the Abjad letters. They differ in the values of a few letters, so the same name can give two different totals. The calculator supports both; switch with the button above it.',
        'یہ ابجد حروف کی دو روایتی ترتیبیں ہیں۔ چند حروف کی قیمتوں میں فرق ہے، اس لیے ایک ہی نام کے دو مختلف مجموعے آ سکتے ہیں۔ کیلکولیٹر دونوں ترتیبوں سے حساب کرتا ہے؛ اس کے اوپر دیے گئے بٹن سے ترتیب بدلیں۔',
      ),
    },
    {
      q: t('How do I calculate the numbers of my name?', 'اپنے نام کے اعداد کیسے نکالیں؟'),
      a: t(
        'Write your name in Arabic letters in the calculator; it adds up the letter values, ignoring vowel marks. Example: Muḥammad = 40 + 8 + 40 + 4 = 92. You can also type the name in Latin letters and the tool will convert it to Arabic letters.',
        'کیلکولیٹر میں اپنا نام عربی حروف میں لکھیں؛ یہ اعراب کو چھوڑ کر حروف کی قیمتیں جمع کرتا ہے۔ مثال: محمد = 40 + 8 + 40 + 4 = 92۔ آپ نام رومن حروف میں بھی لکھ سکتے ہیں، ٹول اسے عربی حروف میں بدل دے گا۔',
      ),
    },
    {
      q: t('How is tāʾ marbūṭa counted?', 'تائے مربوطہ (ة) کیسے شمار ہوتی ہے؟'),
      a: t(
        'In this calculator tāʾ marbūṭa (ة) counts as hāʾ (5), not as tāʾ (400).',
        'اس کیلکولیٹر میں تائے مربوطہ (ة) کو ہ (5) شمار کیا جاتا ہے، ت (400) نہیں۔',
      ),
    },
    {
      q: t('Is Abjad a way of knowing the unseen?', 'کیا ابجد غیب جاننے کا ذریعہ ہے؟'),
      a: t(
        'No. The numerical values of letters are a subject of reflection and learning in the tradition of ʿilm al-ḥurūf, not prediction or a judgement about the future; only Allah knows the unseen.',
        'نہیں۔ حروف کی عددی قیمتیں علم الحروف کی روایت میں غور و فکر اور سیکھنے کا موضوع ہیں، نہ کہ پیش گوئی یا مستقبل کے بارے میں کوئی حکم؛ غیب کا علم صرف اللہ کو ہے۔',
      ),
    },
  ] as Faq[],
};

/* ---------------------------------------------------------------------- */
/* /ur/planetary-hours                                                     */
/* ---------------------------------------------------------------------- */
/** Same planets, days, elements and "best for" items as the tool's guide (PLANET_GUIDE). */
export const UR_PLANETS: { name: T; day: number; element: string; bestFor: T }[] = [
  { name: t('Sun', 'شمس (سورج)'), day: 0, element: 'fire', bestFor: t('Leadership decisions, visibility and reputation, official matters', 'قیادت کے فیصلے، شہرت اور ساکھ، سرکاری معاملات') },
  { name: t('Moon', 'قمر (چاند)'), day: 1, element: 'water', bestFor: t('Travel and movement, emotional healing, family matters', 'سفر اور نقل و حرکت، جذباتی شفا، گھریلو معاملات') },
  { name: t('Mars', 'مریخ'), day: 2, element: 'fire', bestFor: t('Courage and initiative, physical work, overcoming obstacles', 'ہمت اور پہل، جسمانی کام، رکاوٹوں پر قابو پانا') },
  { name: t('Mercury', 'عطارد'), day: 3, element: 'air', bestFor: t('Study and learning, writing and communication, trade and contracts', 'پڑھائی اور سیکھنا، تحریر اور رابطہ، تجارت اور معاہدے') },
  { name: t('Jupiter', 'مشتری'), day: 4, element: 'air', bestFor: t('Provision and abundance, expansion and growth, spiritual elevation', 'رزق اور فراوانی، وسعت اور ترقی، روحانی بلندی') },
  { name: t('Venus', 'زہرہ'), day: 5, element: 'earth', bestFor: t('Love and relationships, beauty and art, harmony and peace', 'محبت اور تعلقات، حسن اور فن، ہم آہنگی اور امن') },
  { name: t('Saturn', 'زحل'), day: 6, element: 'earth', bestFor: t('Long-term planning, discipline and organisation, land and property', 'طویل مدتی منصوبہ بندی، نظم و ضبط، زمین اور جائیداد') },
];

export const UR_HOURS = {
  h1: t('Planetary Hours Today', 'آج کی ساعاتِ کواکب'),
  lead: t(
    'Find the planet ruling the current hour where you are, the length of each day and night hour, and what suits it in the traditional Islamic science of the stars.',
    'اپنے مقام پر موجودہ ساعت کا حاکم سیارہ، دن اور رات کی ہر ساعت کی مدت، اور روایتی اسلامی علمِ نجوم میں اس کے مناسب کام معلوم کریں۔',
  ),
  whatTitle: t('What are planetary hours?', 'ساعاتِ کواکب کیا ہیں؟'),
  what: t(
    "In the traditional Islamic science of the stars, the day and the night are each divided into twelve unequal hours, each ruled by one of the seven classical planets in the Chaldean order: Saturn → Jupiter → Mars → Sun → Venus → Mercury → Moon. The length of each hour changes daily with sunrise and sunset, and the first hour of the day is ruled by that day's planet.",
    'روایتی اسلامی علمِ نجوم میں دن اور رات دونوں کو بارہ بارہ غیر مساوی ساعتوں میں تقسیم کیا جاتا ہے، اور ہر ساعت پر سات کلاسیکی سیاروں میں سے ایک کلدانی ترتیب سے حاکم ہوتا ہے: زحل ← مشتری ← مریخ ← شمس ← زہرہ ← عطارد ← قمر۔ ہر ساعت کی مدت طلوع و غروبِ آفتاب کے ساتھ روز بدلتی ہے، اور دن کی پہلی ساعت پر اسی دن کا سیارہ حاکم ہوتا ہے۔',
  ),
  howTitle: t('How to use planetary hours', 'ساعاتِ کواکب کیسے استعمال کریں'),
  how: [
    t('Look at the current planetary hour in the tool: note the ruling planet, its element and the time remaining.', 'ٹول میں موجودہ ساعت دیکھیں: حاکم سیارہ، اس کا عنصر اور باقی وقت نوٹ کریں۔'),
    t(
      'Match what you intend to do with what suits the planet (see the table below), and place important work in suitable hours.',
      'جو کام آپ کرنا چاہتے ہیں اسے سیارے کے مناسب کاموں سے ملائیں (نیچے جدول دیکھیں)، اور اہم کام مناسب ساعتوں میں رکھیں۔',
    ),
    t('Begin with Bismillāh and the dhikr suited to that planet; the intention matters most.', 'بسم اللہ اور اس سیارے کے مناسب ذکر سے آغاز کریں؛ اصل اہمیت نیت کی ہے۔'),
    t('Use the button that shows all hours to plan the whole day ahead.', 'پورے دن کی پیشگی منصوبہ بندی کے لیے تمام ساعتیں دکھانے والا بٹن استعمال کریں۔'),
  ],
  guideTitle: t('Guide to the seven planets', 'سات سیاروں کی رہنمائی'),
  colPlanet: t('Planet', 'سیارہ'),
  colDay: t('Its day', 'دن'),
  colElement: t('Element', 'عنصر'),
  colBestFor: t('Suits', 'مناسب کام'),
  faqs: [
    {
      q: t("How do I find today's planetary hours?", 'آج کی ساعاتِ کواکب کیسے معلوم کریں؟'),
      a: t(
        "Open the tool above and allow your location. It calculates today's sunrise and sunset where you are and shows the twelve day hours and twelve night hours, with the planet ruling each one.",
        'اوپر والا ٹول کھولیں اور اپنے مقام (لوکیشن) کی اجازت دیں۔ یہ آپ کے مقام پر آج کے طلوع اور غروبِ آفتاب کا حساب کر کے دن کی بارہ اور رات کی بارہ ساعتیں، ہر ایک کے حاکم سیارے کے ساتھ دکھاتا ہے۔',
      ),
    },
    {
      q: t('How long is a planetary hour?', 'ایک ساعت کتنی دیر کی ہوتی ہے؟'),
      a: t(
        'The time from sunrise to sunset is divided by 12 to give the day hours, and the time from sunset to the next sunrise by 12 to give the night hours, so the length of an hour changes from day to day and from place to place.',
        'طلوعِ آفتاب سے غروب تک کے وقت کو 12 پر تقسیم کرنے سے دن کی ساعتیں بنتی ہیں، اور غروب سے اگلے طلوع تک کے وقت کو 12 پر تقسیم کرنے سے رات کی ساعتیں؛ اس لیے ساعت کی مدت ہر دن اور ہر جگہ مختلف ہوتی ہے۔',
      ),
    },
    {
      q: t('Which planet rules the first hour of the day?', 'دن کی پہلی ساعت کس سیارے کی ہوتی ہے؟'),
      a: t(
        "The first hour of the day is ruled by that day's planet: the Sun for Sunday, the Moon for Monday, Mars for Tuesday, Mercury for Wednesday, Jupiter for Thursday, Venus for Friday and Saturn for Saturday.",
        'دن کی پہلی ساعت پر اسی دن کا سیارہ حاکم ہوتا ہے: اتوار کو شمس، پیر کو قمر، منگل کو مریخ، بدھ کو عطارد، جمعرات کو مشتری، جمعہ کو زہرہ اور ہفتہ کو زحل۔',
      ),
    },
    {
      q: t('What is the Chaldean order?', 'کلدانی ترتیب کیا ہے؟'),
      a: t(
        'It is the fixed order in which the seven planets follow one another through the hours: Saturn, Jupiter, Mars, the Sun, Venus, Mercury, the Moon, and then back to Saturn.',
        'یہ وہ مقررہ ترتیب ہے جس میں سات سیارے ساعتوں پر یکے بعد دیگرے آتے ہیں: زحل، مشتری، مریخ، شمس، زہرہ، عطارد، قمر، اور پھر دوبارہ زحل۔',
      ),
    },
    {
      q: t('Are planetary hours a form of fortune-telling?', 'کیا ساعاتِ کواکب فال یا کہانت ہیں؟'),
      a: t(
        'No. Planetary hours are a traditional tool for reflection and organising time used by Muslim scholars, not divination or fortune-telling. Use them to organise your efforts while always trusting in Allah, and ask people of knowledge about religious rulings.',
        'نہیں۔ ساعاتِ کواکب غور و فکر اور وقت کی ترتیب کا ایک روایتی ذریعہ ہیں جو مسلمان علما استعمال کرتے رہے ہیں، یہ فال گیری یا کہانت نہیں۔ انہیں اپنی کوششوں کو منظم کرنے کے لیے استعمال کریں، ہمیشہ اللہ پر توکل کے ساتھ، اور شرعی احکام کے بارے میں اہلِ علم سے رجوع کریں۔',
      ),
    },
  ] as Faq[],
};

/* ---------------------------------------------------------------------- */
/* /ur/planet-of-the-day                                                   */
/* ---------------------------------------------------------------------- */
export const UR_POTD = {
  h1: t('Planet of the Day', 'آج کا سیارہ'),
  lead: t(
    'Each weekday has a ruling planet in the tradition. See today\'s planet, what suits it, and when its hours fall where you are.',
    'روایت میں ہفتے کے ہر دن کا ایک حاکم سیارہ ہے۔ آج کا سیارہ، اس کے مناسب کام، اور آپ کے مقام پر اس کی ساعتوں کے اوقات دیکھیں۔',
  ),
  rulersTitle: t('The rulers of the seven days', 'ساتوں دنوں کے حاکم سیارے'),
  rulers: t(
    'Sunday: the Sun; Monday: the Moon; Tuesday: Mars; Wednesday: Mercury; Thursday: Jupiter; Friday: Venus; Saturday: Saturn. Whatever its planet, Friday keeps its own special status in Islam: it is the day of jumuʿa, of abundant ṣalawāt on the Prophet ﷺ and of duʿāʾ.',
    'اتوار: شمس؛ پیر: قمر؛ منگل: مریخ؛ بدھ: عطارد؛ جمعرات: مشتری؛ جمعہ: زہرہ؛ ہفتہ: زحل۔ سیارہ کوئی بھی ہو، جمعہ کا دن اسلام میں اپنی الگ فضیلت رکھتا ہے: یہ نمازِ جمعہ، نبی کریم ﷺ پر کثرت سے درود شریف پڑھنے اور دعا کا دن ہے۔',
  ),
  faqs: [
    {
      q: t('Which planet rules today?', 'آج کس سیارے کا دن ہے؟'),
      a: t(
        'The tool above shows it. In the tradition each weekday is ruled by one of the seven classical planets, and the first planetary hour after sunrise belongs to that planet.',
        'اوپر والا ٹول یہ دکھاتا ہے۔ روایت میں ہفتے کے ہر دن پر سات کلاسیکی سیاروں میں سے ایک حاکم ہوتا ہے، اور طلوعِ آفتاب کے بعد پہلی ساعت اسی سیارے کی ہوتی ہے۔',
      ),
    },
    {
      q: t('Does the planet of the day decide whether my day will be good?', 'کیا آج کا سیارہ طے کرتا ہے کہ میرا دن اچھا گزرے گا؟'),
      a: t(
        'No. It is a traditional frame for reflection and for choosing suitable deeds, dhikr and sadaqa. Benefit and harm come only by the will of Allah.',
        'نہیں۔ یہ غور و فکر اور مناسب اعمال، ذکر اور صدقے کے انتخاب کا ایک روایتی خاکہ ہے۔ نفع اور نقصان صرف اللہ کے حکم سے ہے۔',
      ),
    },
  ] as Faq[],
};

/* ---------------------------------------------------------------------- */
/* /ur/ikhtiyarat (tool-first)                                             */
/* ---------------------------------------------------------------------- */
export const UR_IKHTIYARAT = {
  h1: t('Choosing Suitable Dates (Ikhtiyārāt)', 'مناسب تاریخوں کا انتخاب (اختیارات)'),
  lead: t(
    'Pick what you are planning and see the dates the tradition considers suitable, with the reasons.',
    'اپنا منصوبہ منتخب کریں اور وہ تاریخیں دیکھیں جنہیں روایت مناسب سمجھتی ہے، وجوہات کے ساتھ۔',
  ),
  aboutTitle: t('What is ʿilm al-ikhtiyārāt?', 'علمِ اختیارات کیا ہے؟'),
  about: t(
    "Ikhtiyārāt (literally 'choices') is the classical practice of choosing a suitable time to begin an important matter, by looking at the ruler of the day, the planetary hour and the Moon's mansion. It is a tool for reflection: the decision rests on istikhāra, consultation and trust in Allah.",
    'اختیارات (لفظی معنی: انتخاب) کسی اہم کام کے آغاز کے لیے مناسب وقت چننے کی کلاسیکی روایت ہے، جس میں دن کے حاکم سیارے، ساعت اور منزلِ قمر کو دیکھا جاتا ہے۔ یہ غور و فکر کا ذریعہ ہے؛ فیصلہ استخارے، مشورے اور اللہ پر توکل سے ہوتا ہے۔',
  ),
  faqs: [
    {
      q: t('How do I choose a good date for nikāḥ?', 'نکاح کے لیے اچھی تاریخ کیسے منتخب کریں؟'),
      a: t(
        'Choose marriage in the tool to see upcoming dates the tradition considers suitable, with their reasons. Then pray ṣalāt al-istikhāra and consult the family; nikāḥ is permissible on any day.',
        'ٹول میں شادی منتخب کریں تاکہ آنے والی وہ تاریخیں دکھائی دیں جنہیں روایت مناسب سمجھتی ہے، وجوہات کے ساتھ۔ پھر نمازِ استخارہ پڑھیں اور گھر والوں سے مشورہ کریں؛ نکاح ہر دن جائز ہے۔',
      ),
    },
    {
      q: t('Is it wrong to start something on a day the tool does not list?', 'جو دن ٹول میں نہ ہو، کیا اس دن کام شروع کرنا غلط ہے؟'),
      a: t(
        'No. No day is unlucky in Islam. These are traditional preferences for reflection; act with istikhāra and tawakkul.',
        'نہیں۔ اسلام میں کوئی دن منحوس نہیں۔ یہ غور و فکر کے لیے روایتی ترجیحات ہیں؛ استخارے اور توکل کے ساتھ کام کریں۔',
      ),
    },
  ] as Faq[],
};
