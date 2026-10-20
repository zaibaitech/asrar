/**
 * Urdu drafts for the calculator UI on /ur/abjad (Batch 13 of the native Urdu review, sheet 2).
 *
 * STATUS: DRAFT — NOT REVIEWED. Machine-assisted drafts reusing the reviewed /ur terms
 * (ابجد قیمت، ابجدِ کبیر، علم الحروف، نسبت، اسمِ الٰہی، ہم آہنگی، تدبر، صدقہ). They are listed
 * for the reviewer as "Batch 13: /ur/abjad calculator UI" with a blank Correction column.
 *
 * Only the keys that had no Urdu are here (134 keys); the other calculator strings were already
 * in the reviewed catalog. The calculator itself still renders English on /ur (it is given
 * appLanguage 'en', as on /ar) and the runtime catalog swaps in the Urdu, so these drafts reach
 * the page through public/i18n/ur-ui.json: scripts/i18n/ur/build_catalog.py pairs each value
 * with the English in en.ts (scripts/i18n/ur/dump_calculator.ts). No calculation, count or
 * layout changes. Placeholders ({max}, {ayah}, {total}, {themes}) become catalog patterns.
 */
import type { calculatorEn, divineNamePickerEn, nameFieldEn } from './en';

type Draft<T> = { [K in keyof T]?: T[K] extends readonly string[] ? readonly string[] : string };

export const calculatorUr: Draft<typeof calculatorEn> = {
  inputLabel: 'عربی متن',
  inputPlaceholder: 'کوئی نام، عبارت یا اسمِ الٰہی لکھیں',
  newCalculation: 'نیا حساب',
  kabir: 'کبیر (کل مجموعہ)',
  saghir: 'صغیر (جذر)',
  sirr: 'سِرّ (راز)',
  wusta: 'وُسطیٰ (درمیانی)',
  kamal: 'کمال (تکمیل)',
  bast: 'بسط (پھیلاؤ)',
  elementalComposition: 'عناصر کی نسبت',
  letterFrequency: 'حروف کی ترکیب',
  balanceScore: 'توازن کا اشاریہ',
  dominantElement: 'غالب نسبت',
  weakestElement: 'کمزور ترین نسبت',
  noLetters: 'تجزیے کے لیے کوئی عربی حرف نہیں ملا',
  nameFieldPlaceholder: 'اپنا نام عربی حروف میں لکھیں',
  archetype: 'علامتی مثالیہ',
  spiritualGuidance: 'روحانی رہنمائی',
  divineNameResonance: 'اسمائے الٰہی سے نسبتیں',
  recommendedDhikrCounts: 'ذکر کی تجویز کردہ تعداد',
  bestTimeWindow: 'موزوں ترین وقت',
  powerDays: 'خاص دن',
  repeatedLetters: 'دہرائے گئے حروف',
  nearSacredNumber: 'قریب ترین مقدس عدد',
  selectDivineName: 'اسمِ الٰہی منتخب کریں',
  suggestedCounts: 'ذکر کی تجویز کردہ تعداد',
  bestTimesToPractice: 'معمول کے لیے موزوں اوقات',
  valueBased: 'قیمت پر مبنی',
  preparation: 'تیاری',
  etiquette: 'آداب',
  analysisTitleName: 'نام کا تجزیہ',
  analysisTitlePhrase: 'عبارت کا تجزیہ',
  analysisTitleDhikr: 'اسمِ الٰہی کا تجزیہ',
  analysisTitleGeneral: 'متن کا تجزیہ',
  methodologyLabel: 'ابجد اور حروف کی نسبتوں کا تجزیہ',
  numericalSignature: 'عددی شناخت',
  abjadKabirLabel: 'ابجدِ کبیر',
  howCalculated: 'یہ کیسے نکالا جاتا ہے؟',
  howCalculatedBody:
    'ابجدِ کبیر کے نظام میں ہر عربی حرف کی ایک مقرر عددی قیمت ہے۔ اعراب شمار نہیں ہوتے؛ متن کے باقی تمام حروف کی قیمتیں جمع کر کے یہ مجموعہ بنتا ہے۔',
  totalLettersLabel: 'کل حروف',
  uniqueLettersLabel: 'الگ الگ حروف',
  numericalProfileTitle: 'عددی خاکہ',
  classicalCalculation: 'کلاسیکی حساب',
  traditionalUnverified: 'روایتی اصطلاح · درست تاریخی فارمولا غیر مصدقہ',
  derivedMetricLabel: 'ایپ کا اخذ کردہ پیمانہ',
  kabirFormula: 'متن کے ہر حرف کی ابجد قیمت کا مجموعہ۔',
  saghirFormula: 'کبیر کی قیمت کا عددی جذر: اس کے ہندسے بار بار جمع کیے جاتے ہیں یہاں تک کہ 1 سے 9 تک کا ایک ہندسہ رہ جائے۔',
  sirrFormula:
    'یہاں کبیر میں سے صغیر گھٹا کر نکالا گیا ہے۔ «سِرّ» (راز) علم الحروف کی ایک روایتی اصطلاح ہے؛ اس ایپ کے فارمولے کی کسی مخصوص تاریخی ماخذ سے آزادانہ تصدیق نہیں ہوئی۔',
  wustaFormula:
    'یہاں کبیر اور صغیر کا پورے عدد والا اوسط، یعنی (کبیر + صغیر) ÷ 2، لیا گیا ہے۔ «وُسطیٰ» (درمیانی) ایک روایتی اصطلاح ہے؛ اس ایپ کے فارمولے کی کسی مخصوص تاریخی ماخذ سے آزادانہ تصدیق نہیں ہوئی۔',
  kamalFormula:
    'یہاں کبیر اور صغیر کو جمع کر کے نکالا گیا ہے۔ «کمال» (تکمیل) ایک روایتی اصطلاح ہے؛ اس ایپ کے فارمولے کی کسی مخصوص تاریخی ماخذ سے آزادانہ تصدیق نہیں ہوئی۔',
  bastFormula:
    'یہاں کبیر کو صغیر سے ضرب دے کر نکالا گیا ہے۔ «بسط» (پھیلاؤ) ایک روایتی اصطلاح ہے؛ اس ایپ کے فارمولے کی کسی مخصوص تاریخی ماخذ سے آزادانہ تصدیق نہیں ہوئی۔',
  elementalCorrespondenceSubtitle: 'اس حساب کے نظام میں استعمال ہونے والی حروف کی نسبتوں سے ماخوذ۔',
  balanceIndexFormula:
    '100 میں سے یہ پیمانہ منہا کیا جاتا ہے کہ چاروں عناصر کے حصے ہر ایک کے 25٪ کی برابر تقسیم سے کتنے ہٹے ہوئے ہیں؛ صرف ایک عنصر والے نام کا اشاریہ 0 اور برابر تقسیم کا 100 ہوتا ہے۔',
  letterCorrespondencesTitle: 'حروف کی نسبتیں',
  correspondenceSystemName: 'مغربی علم الحروف کی حروف کی درجہ بندی',
  correspondenceSystemLabel: 'نسبتوں کا نظام',
  correspondenceNote:
    'یہ منتخب درجہ بندی کی روایت کی علامتی نسبتیں ہیں، سائنسی پیمائش نہیں۔ ایک الگ تاریخی نظام (مشرقی) بعض حروف کو مختلف طور پر منسوب کرتا ہے؛ وہ اس ایپ میں شامل نہیں۔',
  zodiacalCorrespondenceTitle: 'برج سے نسبت',
  letterBasedCorrespondence: 'حروف پر مبنی نسبت',
  zodiacDisclaimer:
    'یہ منتخب نسبتوں کے نظام سے ماخوذ ایک علامتی برجی نسبت ہے (نام کا عددی مجموعہ بارہ برجوں میں سے ایک تک گھٹایا جاتا ہے)۔ یہ آپ کا فلکیاتی یا پیدائشی برج نہیں، جو آپ کی اصل تاریخِ پیدائش پر منحصر ہے۔',
  zodiacUnavailable: 'اس حساب کے لیے برج سے نسبت دستیاب نہیں۔',
  themesLabel: 'موضوعات',
  archetypeDisclaimer:
    'اس نام کی عددی اور حرفی نسبتوں سے ماخوذ تعبیری علامت — ایک روایتی تعبیر، نفسیاتی جائزہ نہیں۔',
  whyThese: 'یہی کیوں؟',
  dhikrDisclaimer: 'ذاتی غور و فکر کے لیے تجویز کردہ عددی نسبتیں — اس نام سے جڑا کوئی لازمی عبادتی حکم نہیں۔',
  analysisTellsTitle: 'یہ تجزیہ کیا بتاتا ہے',
  analysisTellsItems: [
    'نام کی عددی قیمت',
    'حروف کی ترکیب',
    'حروف کی تکرار',
    'منتخب علم الحروف کے نظام کے مطابق نسبتیں',
    'ان نسبتوں سے ماخوذ علامتی تعبیرات',
  ],
  analysisNotTitle: 'یہ تجزیہ کیا طے نہیں کرتا',
  analysisNotItems: ['آپ کا اصل پیدائشی برج', 'آپ کا پیدائشی زائچہ', 'آپ کی شخصیت کی ٹھیک تصویر', 'آپ کا مستقبل', 'آپ کی تقدیر'],
  methodologyTitle: 'طریقۂ کار',
  methodologyTraditionLabel: 'حساب کی روایت',
  methodologyTraditionValue: 'علم الحروف / ابجد',
  methodologyPrimarySystemLabel: 'بنیادی عددی نظام',
  methodologyPrimarySystemValue: 'ابجدِ کبیر',
  methodologyInterpretiveLabel: 'تعبیر کی سطح',
  methodologyInterpretiveValue: 'علامتی / روایتی تعبیر',
  methodologyBirthDataLabel: 'پیدائش کا نجومی ڈیٹا',
  methodologyBirthDataValue: 'فراہم نہیں کیا گیا',
  learnMore: 'جانیں کہ یہ حساب کیسے ہوتا ہے',
  learnMoreBody:
    'اس صفحے کا ہر نتیجہ چار سطحوں سے گزرتا ہے: (1) آپ کے لکھے ہوئے متن کے حروف، (2) ابجدِ کبیر میں ان کی مقرر عددی قیمتیں، (3) وہ نسبتیں جو اس ایپ کا مغربی علم الحروف کا ڈیٹا ان اعداد اور حروف سے جوڑتا ہے (عنصر، برج، قریبی اسمائے الٰہی، قریبی مقدس اعداد)، اور (4) ان نسبتوں کی علامتی تعبیر (مثالیہ، رہنمائی، ذکر کی تجویز)۔ پہلی دو سطحیں سیدھا حساب ہیں۔ تیسری سطح اس نسبتوں کے نظام پر منحصر ہے جو یہ ایپ استعمال کرتی ہے، جو کئی تاریخی نظاموں میں سے ایک ہے۔ چوتھی سطح روایتی تعبیر ہے، آپ کے بارے میں کوئی حقیقی دعویٰ نہیں۔',
  quranSurahLabel: 'سورت',
  quranAyahLabel: 'آیت',
  quranAyahHelper: 'اس سورت میں {max} آیات ہیں۔',
  quranVerseResultTitle: 'قرآنی آیت',
  motherNameFieldPlaceholder: 'اپنی والدہ کا نام عربی حروف میں لکھیں',
  divineResonanceTitle: 'اسمِ الٰہی سے ہم آہنگی',
  divineResonanceSubtitle: 'وہ اسمِ الٰہی جو اس نام سے ہم آہنگ ہے',
  divineResonanceAbjadNote: 'یہ اسمِ الٰہی 28 حروف کے ابجد دور کے ذریعے اس نام سے ہم آہنگ ہے۔',
  howItWasDerived: 'یہ کیسے نکالا گیا',
  abjadTotalLabel: 'ابجد مجموعہ',
  resonanceIndexLabel: 'ہم آہنگی کا اشاریہ (1–28)',
  resonantLetterLabel: 'ہم آہنگ حرف',
  dhikrOptionalLabel: 'ذکر (اختیاری)',
  dhikrSuggestedCountLabel: 'تجویز کردہ تعداد',
  divineResonanceDhikrDescription:
    'یہ اسمِ الٰہی ذکر (اللہ کی یاد) میں پڑھا جا سکتا ہے، اپنی نیت کے مطابق قرب، مغفرت یا مدد مانگتے ہوئے۔',
  quranicResonanceSubtitle: 'اس عدد کے ذریعے تدبر کے لیے ایک آیت',
  ayahOfLabel: 'آیت {ayah} (کل {total} میں سے)',
  readFullVerseLabel: 'پوری آیت \u2068Quran.com\u2069 پر پڑھیں',
  quranResonanceReflectionNote:
    'یہ آیت اس نام اور قرآنی ساخت کے درمیان عددی ہم آہنگی سے سامنے آئی ہے — غور و تدبر کے لیے پیش ہے، فال یا پیش گوئی کے لیے نہیں۔',
  quranTextLoadError: 'آیت کا متن ابھی دستیاب نہیں — نیچے دیے گئے لنک سے اسے \u2068Quran.com\u2069 پر پڑھیں۔',
  loadingVerse: 'آیت لوڈ ہو رہی ہے…',
  noCalculatorsFound: 'آپ کی تلاش سے کوئی کیلکولیٹر نہیں ملا',
  divineNameSubtitle:
    'وہ اسمائے الٰہی جن کی اپنی ابجد قیمت اس ایپ کے مطابقت کے اصول کے مطابق اس نام کے کبیر مجموعے کے سب سے قریب ہے۔',
  exactMatchLabel: 'بالکل مطابق',
  closestMatchLabel: 'قریب ترین',
  numericalCorrespondenceLabel: 'عددی نسبت',
  reducedValueLabel: 'گھٹائی گئی قیمت',
  whyTheseIntro: 'یہ اسمائے الٰہی اس لیے چنے گئے کہ ان کی اپنی ابجد قیمت اس نام کے کبیر مجموعے کے عددی طور پر قریب ہے۔',
  whyTheseRuleLabel: 'مطابقت کا اصول',
  whyTheseRuleValue: 'ایپ کی طے کردہ عددی نسبت — حساب شدہ کبیر مجموعے سے قریب ترین ابجد قیمت (سب سے کم مطلق فرق)۔',
  whyTheseMultipleSystems: 'نسبت منتخب علم الحروف کے طریقے پر منحصر ہے؛ کوئی دوسرا نظام اسی مجموعے کے لیے دوسرے اسماء چن سکتا ہے۔',
  attributeThemesTitle: 'صفات کے علامتی موضوعات',
  attributeThemesSubtitle: 'متعلقہ اسمائے الٰہی کی صفات — آپ کی شخصیت کا بیان نہیں۔',
  primaryThemeLabel: 'بنیادی موضوع',
  secondaryThemesLabel: 'ثانوی موضوعات',
  spiritualReflectionTitle: 'روحانی غور و فکر',
  spiritualReflectionBody:
    'اس تجزیے کی عددی نسبتیں {themes} کے موضوعات سامنے لاتی ہیں — یہ ذاتی غور و فکر اور ذکر میں رکھنے کے موضوعات ہیں، آپ کی تقدیر یا روحانی مرتبے کے بارے میں کوئی فیصلہ نہیں۔',
  divineNameEsotericNote:
    'یہ عددی نسبتیں علم الحروف کی علامتی روایت سے تعلق رکھتی ہیں۔ یہ کسی شخص کی تقدیر، روحانی مرتبہ یا اللہ سے اس کا تعلق طے نہیں کرتیں۔',
  dhikrWhyThese: 'یہی اعداد کیوں؟',
  dhikrWhyTheseBody:
    '33 اور 99 تسبیح کی روایتی تعداد ہیں اور اس نام سے آزاد ہیں۔ یہاں کوئی اور عدد اس نام کی اپنی صغیر (گھٹائی گئی) یا کبیر (کل) قیمت سے آتا ہے۔',
  sadaqahResultTitle: 'اسلامی پیدائشی مہینہ',
  hijriYearLabel: 'ہجری سال',
  sadaqahSuggestionsTitle: 'صدقے کی تجاویز',
  sadaqahUnavailable: 'اس مہینے کے لیے صدقے کی رہنمائی دستیاب نہیں۔',
  sadaqahDisclaimer:
    'یہ غور و فکر اور خیرات کے لیے روایتی تجاویز ہیں — کسی بھی قسم کا صدقہ، کسی بھی وقت، ہمیشہ اچھا ہے اور انہی صورتوں تک محدود نہیں۔',
  sadaqahDayUnavailable: 'اس دن کے لیے صدقے کی رہنمائی دستیاب نہیں۔',
};

export const nameFieldUr: Draft<typeof nameFieldEn> = {
  chooseFromList: 'فہرست سے چنیں',
  searchPlaceholder: 'نام تلاش کریں...',
  noResults: 'کوئی نام نہیں ملا',
  hideKeyboard: 'کی بورڈ چھپائیں',
  space: 'خالی جگہ',
  delete: 'حذف کریں',
};

export const divineNamePickerUr: Draft<typeof divineNamePickerEn> = {
  title: 'اسمِ الٰہی منتخب کریں',
  searchPlaceholder: 'عربی یا رومن حروف میں تلاش کریں...',
  noResults: 'کوئی نام نہیں ملا',
};
