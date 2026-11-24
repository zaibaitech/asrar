/**
 * Urdu landing-page copy for the new /ur routes (sadaqa, sadaqa of the day,
 * 99 Names, manāzil, best-day-for). Each string has its English source for
 * Language Review. These pages stay noindex until PENDING_UR_INDEX_PATHS is
 * cleared. Reflection, not prediction; no regional framing.
 */
import type { Faq, T } from './urPages';

const t = (en: string, ur: string): T => ({ en, ur });

export const UR_SADAQA = {
  h1: t(
    'Sadaqa Guide — By Day of the Week, Hijri Birth Month and Burj',
    'صدقے کی رہنمائی — دنِ ہفتہ، ہجری مہینۂ پیدائش اور برج کے مطابق',
  ),
  lead: t(
    'Sadaqah, voluntary charity, can be given at any time and in any amount. Many Muslims make a habit of giving on Friday (Jumuʿa). This guide also gathers customary suggestions for each weekday, for the Hijri month you were born in, and for your burj.',
    'صدقہ، رضاکارانہ خیرات، کسی بھی وقت اور کسی بھی مقدار میں دیا جا سکتا ہے۔ بہت سے مسلمان جمعہ کے دن صدقہ دینے کی عادت رکھتے ہیں۔ یہ رہنمائی ہر دنِ ہفتہ، آپ کے ہجری مہینۂ پیدائش، اور آپ کے برج کے لیے روایتی تجاویز بھی اکٹھی کرتی ہے۔',
  ),
  dayTitle: t('Sadaqa by day of the week', 'ہفتے کے دن کے مطابق صدقہ'),
  dayIntro: t(
    "Each weekday has its own suggested sadaqah. See today's guidance and the full table on the Sadaqa of the Day page.",
    'ہفتے کے ہر دن کی اپنی تجویز کردہ صدقہ کی صورت ہے۔ آج کی تجویز اور پوری جدول صفحہ «آج کا صدقہ» پر دیکھیں۔',
  ),
  dayLink: t("See today's sadaqa →", 'آج کا صدقہ دیکھیں ←'),
  monthTitle: t('Sadaqa by Hijri birth month', 'ہجری مہینۂ پیدائش کے مطابق صدقہ'),
  monthIntro: t(
    'Enter your Gregorian date of birth to find the Hijri (Islamic) month you were born in, and see the sadaqah suggested for that month.',
    'اپنی عیسوی تاریخِ پیدائش درج کریں تاکہ آپ کا ہجری (اسلامی) مہینۂ پیدائش معلوم ہو، اور اس مہینے کے لیے تجویز کردہ صدقہ نظر آئے۔',
  ),
  burjTitle: t('Sadaqa by burj', 'برج کے مطابق صدقہ'),
  burjIntro: t(
    "Each of the twelve burūj has its own customary sadaqah. Not sure of your burj? Find it from your name and your mother's name.",
    'بارہ بروجز میں سے ہر برج کا اپنا روایتی صدقہ ہے۔ اپنے برج کا یقین نہیں؟ اسے اپنے نام اور والدہ کے نام سے معلوم کریں۔',
  ),
  burjLink: t("Find your burj from your name & mother's name →", 'نام اور والدہ کے نام سے برج معلوم کریں ←'),
  bestDay: t('Suggested day', 'تجویز کردہ دن'),
  faqs: [
    {
      q: t('What is sadaqah?', 'صدقہ کیا ہے؟'),
      a: t(
        'Sadaqah is voluntary charity given for the sake of Allah. It can take many forms — water, food, clothes, or money — and may be given at any time. This guide offers customary suggestions by weekday, birth month and burj; they are not obligations.',
        'صدقہ اللہ کی رضا کے لیے دی جانے والی رضاکارانہ خیرات ہے۔ یہ بہت سی صورتوں میں ہو سکتا ہے — پانی، کھانا، کپڑے یا رقم — اور کسی بھی وقت دیا جا سکتا ہے۔ یہ رہنمائی دن، مہینۂ پیدائش اور برج کے مطابق روایتی تجاویز پیش کرتی ہے؛ یہ فرائض نہیں ہیں۔',
      ),
    },
    {
      q: t('How do I find my Hijri birth month?', 'اپنا ہجری مہینۂ پیدائش کیسے معلوم کروں؟'),
      a: t(
        'Enter your Gregorian date of birth in the checker on this page. It converts the date to the Islamic (Hijri) calendar and shows the sadaqah suggested for that month.',
        'اس صفحے کے جانچنے والے خانے میں اپنی عیسوی تاریخِ پیدائش درج کریں۔ تاریخ اسلامی (ہجری) تقویم میں بدلی جاتی ہے، اور اس مہینے کے لیے تجویز کردہ صدقہ دکھایا جاتا ہے۔',
      ),
    },
    {
      q: t('How do I know my burj?', 'اپنا برج کیسے معلوم کروں؟'),
      a: t(
        "In this tradition your burj comes from the Abjad values of your name and your mother's name: add them, divide by 12 and the remainder gives the burj. The name & mother's name burj page does the calculation for you.",
        'اس روایت میں برج آپ کے نام اور والدہ کے نام کے ابجدی اعداد سے نکلتا ہے: دونوں کو جمع کریں، ۱۲ پر تقسیم کریں، باقی ماندہ برج بتاتا ہے۔ نام اور والدہ کے نام والا صفحہ یہ حساب آپ کے لیے کرتا ہے۔',
      ),
    },
    {
      q: t('Which should I follow: the day, the month or the burj?', 'دن، مہینہ یا برج — کسے اختیار کروں؟'),
      a: t(
        'Any of them, or none. They are complementary customs, not obligations. Sadaqah given sincerely on any day is good; these suggestions simply help you choose a form and a moment.',
        'ان میں سے کوئی بھی، یا کوئی نہیں۔ یہ ایک دوسرے کی تکمیل کرنے والی رسمیں ہیں، فرائض نہیں۔ کسی بھی دن خلوص سے دیا گیا صدقہ اچھا ہے؛ یہ تجاویز صرف صورت اور لمحہ چننے میں مدد کرتی ہیں۔',
      ),
    },
    {
      q: t('Does giving this sadaqah guarantee a result?', 'کیا اس صدقے سے کوئی نتیجہ یقینی ہے؟'),
      a: t(
        'No. Sadaqah is given for the sake of Allah. The intentions mentioned (blessing, ease, provision) are hopes placed with Allah, not promised outcomes.',
        'نہیں۔ صدقہ اللہ کی رضا کے لیے دیا جاتا ہے۔ جن نیتوں کا ذکر ہے (برکت، آسانی، رزق) وہ اللہ سے کی گئی امیدیں ہیں، وعدہ شدہ نتائج نہیں۔',
      ),
    },
  ] as Faq[],
};

export const UR_SADAQA_DAY = {
  h1: t(
    'Sadaqa of the Day — Recommended Sadaqah for Each Day of the Week',
    'آج کا صدقہ — ہفتے کے ہر دن کے لیے تجویز کردہ صدقہ',
  ),
  lead: t(
    'Sadaqah, voluntary charity, is good on every day, and many Muslims make a habit of giving on Friday (Jumuʿa). Giving a little, consistently, is better than waiting for the "perfect" day.',
    'صدقہ، رضاکارانہ خیرات، ہر دن اچھا ہے، اور بہت سے مسلمان جمعہ کے دن دینے کی عادت رکھتے ہیں۔ تھوڑا اور باقاعدگی سے دینا اس سے بہتر ہے کہ «کامل دن» کا انتظار کیا جائے۔',
  ),
  aboutTitle: t('About this guide', 'اس رہنمائی کے بارے میں'),
  about: t(
    "Each weekday is also linked to particular forms of sadaqah: water on Monday, help with someone's medicine on Tuesday, paper and pens on Wednesday, feeding the needy and supporting the mosque on Thursday, clothes, soap and perfume on Friday. Below is today's suggestion and the full weekly table, from the same guidance used by the Asrār calculator.",
    'ہفتے کا ہر دن صدقے کی خاص صورتوں سے بھی جوڑا جاتا ہے: پیر کو پانی، منگل کو کسی کی دوا میں مدد، بدھ کو کاغذ اور قلم، جمعرات کو ضرورت مندوں کو کھانا کھلانا اور مسجد کی مدد، جمعہ کو کپڑے، صابن اور خوشبو۔ نیچے آج کی تجویز اور پوری ہفتہ وار جدول ہے، اسی رہنمائی سے جو اسرار کا کیلکولیٹر استعمال کرتا ہے۔',
  ),
  checkerTitle: t('Check another date', 'کوئی اور تاریخ دیکھیں'),
  checkerIntro: t('The day you plan to give, or your date of birth.', 'جس دن آپ صدقہ دینا چاہتے ہیں، یا آپ کی تاریخِ پیدائش۔'),
  faqs: [
    {
      q: t('What is the "sadaqa of the day"?', '«آج کا صدقہ» کیا ہے؟'),
      a: t(
        'It is the form of sadaqah (voluntary charity) traditionally linked to each day of the week. This page shows today\'s suggestion and the table for all seven days.',
        'یہ صدقے (رضاکارانہ خیرات) کی وہ صورت ہے جو روایت میں ہفتے کے ہر دن سے جوڑی جاتی ہے۔ یہ صفحہ آج کی تجویز اور ساتوں دنوں کی جدول دکھاتا ہے۔',
      ),
    },
    {
      q: t('What is the best day to give sadaqah?', 'صدقہ دینے کا بہترین دن کون سا ہے؟'),
      a: t(
        'Sadaqah is good on every day, and many Muslims make a habit of giving on Friday (Jumuʿa). In this customary guidance Tuesday is linked with healing and ease, and Thursday with opening the way and the lifting of difficulties. Never delay giving because it is not the "right" day.',
        'صدقہ ہر دن اچھا ہے، اور بہت سے مسلمان جمعہ کے دن دینے کی عادت رکھتے ہیں۔ اس روایتی رہنمائی میں منگل کو شفا اور آسانی سے، اور جمعرات کو راہ کھلنے اور مشکلات کے دور ہونے کی امید سے جوڑا جاتا ہے۔ اس لیے صدقہ نہ روکیں کہ آج «صحیح دن» نہیں۔',
      ),
    },
    {
      q: t('Can I use the weekday I was born on?', 'کیا میں اپنے جنم والے دنِ ہفتہ پر عمل کر سکتا ہوں؟'),
      a: t(
        'Yes. The guidance can be read either for the day you plan to give or for the weekday of your birth. Enter a date in the checker above to see which weekday it falls on.',
        'ہاں۔ اس رہنمائی کو اس دن کے لیے بھی پڑھا جا سکتا ہے جس دن آپ دینا چاہتے ہیں، اور اپنے جنم والے دنِ ہفتہ کے لیے بھی۔ اوپر والے خانے میں تاریخ درج کر کے دیکھیں کہ وہ کس دن پڑتی ہے۔',
      ),
    },
    {
      q: t('Is this an obligation or a guarantee of results?', 'کیا یہ فرض ہے یا نتائج کی ضمانت؟'),
      a: t(
        'No. These are customary suggestions for reflection. Sadaqah is given sincerely for the sake of Allah, on any day, and promises no particular outcome: Allah alone knows the unseen.',
        'نہیں۔ یہ غور و فکر کے لیے روایتی تجاویز ہیں۔ صدقہ اللہ کی رضا کے لیے خلوص سے، کسی بھی دن دیا جاتا ہے، اور کسی خاص نتیجے کا وعدہ نہیں کرتا؛ غیب کا علم صرف اللہ کو ہے۔',
      ),
    },
  ] as Faq[],
};

export const UR_WEEKDAY_SADAQA: { day: number; name: T; intro: T; items: T[] }[] = [
  {
    day: 0,
    name: t('Sunday', 'اتوار'),
    intro: t('For Sunday, the recommended sadaqah is:', 'اتوار کے لیے تجویز کردہ صدقہ یہ ہے:'),
    items: [
      t('Gather children and give them food as sadaqah.', 'بچوں کو اکٹھا کریں اور انہیں کھانا صدقے میں دیں۔'),
      t('Help anyone who is poor or in need.', 'جسے بھی محتاجی یا ضرورت ہو اس کی مدد کریں۔'),
    ],
  },
  {
    day: 1,
    name: t('Monday', 'پیر'),
    intro: t('For Monday, the recommended sadaqah is:', 'پیر کے لیے تجویز کردہ صدقہ یہ ہے:'),
    items: [
      t('Give water as sadaqah.', 'پانی صدقے میں دیں۔'),
      t('Help an elderly person, a woman, or children.', 'کسی بزرگ، عورت یا بچوں کی مدد کریں۔'),
      t('Give food or sadaqah to children in the evening.', 'شام کو بچوں کو کھانا یا صدقہ دیں۔'),
    ],
  },
  {
    day: 2,
    name: t('Tuesday', 'منگل'),
    intro: t(
      'Tuesday is recommended for sadaqah given with the hope of healing and ease. Recommended forms of sadaqah include:',
      'منگل کو شفا اور آسانی کی امید سے دیا جانے والا صدقہ مناسب سمجھا جاتا ہے۔ تجویز کردہ صورتیں یہ ہیں:',
    ),
    items: [
      t('Giving food to children.', 'بچوں کو کھانا دینا۔'),
      t('Helping a person who is experiencing difficulties.', 'مشکلات سے گزرنے والے کی مدد کرنا۔'),
      t('Helping someone purchase their medication.', 'کسی کو دوا خریدنے میں مدد دینا۔'),
      t("Contributing toward someone's medical or medication expenses.", 'کسی کے علاج یا دوا کے اخراجات میں حصہ ڈالنا۔'),
    ],
  },
  {
    day: 3,
    name: t('Wednesday', 'بدھ'),
    intro: t('For Wednesday, the recommended sadaqah is:', 'بدھ کے لیے تجویز کردہ صدقہ یہ ہے:'),
    items: [
      t('Give white paper and pens.', 'سفید کاغذ اور قلم دیں۔'),
      t('Provide food to children.', 'بچوں کو کھانا دیں۔'),
    ],
  },
  {
    day: 4,
    name: t('Thursday', 'جمعرات'),
    intro: t(
      'Thursday is considered a customary day for sadaqah given with the hope of ease, provision, or the lifting of difficulties. Recommended acts include:',
      'جمعرات کو آسانی، رزق، یا مشکلات کے دور ہونے کی امید سے دیا جانے والا صدقہ روایتی طور پر مناسب سمجھا جاتا ہے۔ تجویز کردہ کام یہ ہیں:',
    ),
    items: [
      t('Giving food to people in need.', 'ضرورت مندوں کو کھانا دینا۔'),
      t('Giving money as sadaqah.', 'رقم صدقے میں دینا۔'),
      t('Supporting a mosque.', 'مسجد کی مدد کرنا۔'),
      t('Helping to clean a mosque.', 'مسجد کی صفائی میں مدد کرنا۔'),
      t('Performing voluntary service in the mosque.', 'مسجد میں رضاکارانہ خدمت کرنا۔'),
    ],
  },
  {
    day: 5,
    name: t('Friday', 'جمعہ'),
    intro: t(
      'Friday is associated with Venus and is considered a favourable day for giving sadaqah. Recommended acts include giving:',
      'جمعہ کو زہرہ سے جوڑا جاتا ہے، اور صدقہ دینے کے لیے مناسب دن سمجھا جاتا ہے۔ تجویز یہ ہے کہ دیے جائیں:',
    ),
    items: [
      t('Clothes.', 'کپڑے۔'),
      t('Soap.', 'صابن۔'),
      t('Perfume.', 'خوشبو۔'),
    ],
  },
  {
    day: 6,
    name: t('Saturday', 'ہفتہ'),
    intro: t(
      'Saturday is recommended for helping poor and needy people. Recommended sadaqah includes:',
      'ہفتہ کو غریبوں اور ضرورت مندوں کی مدد کے لیے مناسب سمجھا جاتا ہے۔ تجویز کردہ صدقہ اس میں شامل ہے:',
    ),
    items: [
      t('Giving essential food items such as rice, oil, and other necessities.', 'چاول، تیل اور دیگر ضروری اشیائے خوردنی دینا۔'),
      t('Helping an elderly person with their needs.', 'کسی بزرگ کی ضروریات میں مدد کرنا۔'),
      t('Providing financial assistance to someone in difficulty.', 'مشکلات میں مبتلا شخص کو مالی مدد دینا۔'),
    ],
  },
];

export const UR_MONTH_SADAQA: { month: number; name: T; intro: T; items: T[] }[] = [
  {
    month: 1,
    name: t('Muharram', 'محرم'),
    intro: t('For anyone born in Muharram, their sadaqah can include:', 'محرم میں پیدا ہونے والوں کا صدقہ اس میں شامل ہو سکتا ہے:'),
    items: [
      t('Giving water to those in need.', 'ضرورت مندوں کو پانی دینا۔'),
      t('Feeding someone who is fasting.', 'کسی روزہ دار کو کھانا کھلانا۔'),
      t('Helping an orphan or orphans.', 'یتیم یا یتیموں کی مدد کرنا۔'),
      t('Giving other forms of charity according to their ability.', 'اپنی استطاعت کے مطابق خیرات کی دیگر صورتیں ادا کرنا۔'),
    ],
  },
  {
    month: 2,
    name: t('Safar', 'صفر'),
    intro: t('For anyone born in Safar, their sadaqah can include:', 'صفر میں پیدا ہونے والوں کا صدقہ اس میں شامل ہو سکتا ہے:'),
    items: [
      t('Giving rice.', 'چاول دینا۔'),
      t('Giving flour.', 'آٹا دینا۔'),
      t('Giving cooking oil.', 'کوکنگ آئل دینا۔'),
      t('Giving clothes.', 'کپڑے دینا۔'),
      t('Helping sick people, financially or with whatever they need.', 'بیماروں کی مالی یا ان کی ضرورت کے مطابق مدد کرنا۔'),
    ],
  },
  {
    month: 3,
    name: t('Rabi al-Awwal', 'ربیع الاول'),
    intro: t('For anyone born in Rabi al-Awwal, their sadaqah can include:', 'ربیع الاول میں پیدا ہونے والوں کا صدقہ اس میں شامل ہو سکتا ہے:'),
    items: [
      t('Giving sadaqah to children.', 'بچوں کو صدقہ دینا۔'),
      t('Helping poor families.', 'غریب گھرانوں کی مدد کرنا۔'),
      t('Helping and supporting the mosque.', 'مسجد کی مدد اور تعاون کرنا۔'),
      t('Providing food, money, or other useful assistance.', 'کھانا، رقم، یا دیگر مفید مدد فراہم کرنا۔'),
    ],
  },
  {
    month: 4,
    name: t('Rabi al-Thani (Rabi al-Akhir)', 'ربیع الثانی (ربیع الآخر)'),
    intro: t('For anyone born in Rabi al-Thani (Rabi al-Akhir), their sadaqah can include:', 'ربیع الثانی (ربیع الآخر) میں پیدا ہونے والوں کا صدقہ اس میں شامل ہو سکتا ہے:'),
    items: [
      t('Helping a widow.', 'بیوہ کی مدد کرنا۔'),
      t('Giving cooking oil.', 'کوکنگ آئل دینا۔'),
      t('Giving soap.', 'صابن دینا۔'),
      t('Providing kitchen and food supplies.', 'باورچی خانے اور خوراک کا سامان دینا۔'),
      t('Helping with necessities that can support a person or family.', 'ایسی ضروریات میں مدد کرنا جن سے کسی شخص یا خاندان کو سہارا ملے۔'),
    ],
  },
  {
    month: 5,
    name: t('Jumada al-Awwal', 'جمادی الاولیٰ'),
    intro: t('For anyone born in Jumada al-Awwal, their sadaqah can include:', 'جمادی الاولیٰ میں پیدا ہونے والوں کا صدقہ اس میں شامل ہو سکتا ہے:'),
    items: [
      t('Giving hot, nourishing food.', 'گرم اور مقوی کھانا دینا۔'),
      t('Helping poor labourers and workers.', 'غریب مزدوروں اور کام کرنے والوں کی مدد کرنا۔'),
      t('Supporting hardworking people who are facing difficult circumstances.', 'مشکلات میں مبتلا محنتی لوگوں کی مدد کرنا۔'),
    ],
  },
  {
    month: 6,
    name: t('Jumada al-Akhirah (Jumada al-Thani)', 'جمادی الاخرہ (جمادی الثانی)'),
    intro: t(
      'For anyone born in Jumada al-Akhirah, their sadaqah is especially good when it is given discreetly and privately.',
      'جمادی الاخرہ میں پیدا ہونے والوں کا صدقہ خاص طور پر تب اچھا سمجھا جاتا ہے جب وہ چھپا کر اور تنہائی میں دیا جائے۔',
    ),
    items: [
      t('Help anyone who is in need.', 'جسے بھی ضرورت ہو اس کی مدد کریں۔'),
      t('Give food, money, or useful assistance.', 'کھانا، رقم، یا مفید مدد دیں۔'),
      t('Help someone quietly without seeking recognition or praise.', 'تعریف یا شہرت کی خواہش کے بغیر خاموشی سے مدد کریں۔'),
    ],
  },
  {
    month: 7,
    name: t('Rajab', 'رجب'),
    intro: t(
      "For anyone born in Rajab, their sadaqah can focus on supporting people who learn and teach the Qur'an:",
      'رجب میں پیدا ہونے والوں کا صدقہ ان لوگوں کی مدد پر مرکوز ہو سکتا ہے جو قرآن سیکھتے اور پڑھاتے ہیں:',
    ),
    items: [
      t("Giving a complete Qur'an (Kamil) to a mosque or place of Qur'anic learning.", 'مسجد یا قرآن سیکھنے کی جگہ کو مکمل قرآن (کامل) دینا۔'),
      t("Providing Qur'ans for people to read and use.", 'پڑھنے اور استعمال کے لیے قرآن دینا۔'),
      t("Donating Qur'ans to schools and places of Qur'anic learning.", 'مدارس اور قرآن سیکھنے کی جگہوں کو قرآن دینا۔'),
      t("Helping mosques and places of Qur'anic learning.", 'مساجد اور قرآن سیکھنے کی جگہوں کی مدد کرنا۔'),
      t("Supporting Qur'anic students and those who use these places.", 'قرآن کے طلبہ اور ان جگہوں کو استعمال کرنے والوں کی مدد کرنا۔'),
    ],
  },
  {
    month: 8,
    name: t("Sha'ban", 'شعبان'),
    intro: t("For anyone born in Sha'ban, their sadaqah can include:", 'شعبان میں پیدا ہونے والوں کا صدقہ اس میں شامل ہو سکتا ہے:'),
    items: [
      t('Giving meals to poor families.', 'غریب گھرانوں کو کھانا دینا۔'),
      t('Sharing the meals prepared in their own home with a family in need.', 'گھر میں تیار کھانا کسی ضرورت مند خاندان کے ساتھ بانٹنا۔'),
      t('Giving food and other necessities to people who are struggling.', 'مشکلات میں مبتلا لوگوں کو کھانا اور دیگر ضروریات دینا۔'),
      t('Helping and supporting the elderly, especially those who are alone or in need.', 'بزرگوں کی مدد کرنا، خاص طور پر جو اکیلے یا ضرورت مند ہوں۔'),
    ],
  },
  {
    month: 9,
    name: t('Ramadan', 'رمضان'),
    intro: t('For anyone born in Ramadan, their sadaqah can include:', 'رمضان میں پیدا ہونے والوں کا صدقہ اس میں شامل ہو سکتا ہے:'),
    items: [
      t('Giving iftar to someone who is fasting.', 'کسی روزہ دار کو افطار دینا۔'),
      t('Not being reluctant or hesitant to give their zakat when it is due.', 'زکوٰۃ واجب ہونے پر اسے دینے میں ہچکچاہٹ نہ کرنا۔'),
      t('Helping poor families and needy people with food, money, or necessities.', 'غریب گھرانوں اور ضرورت مندوں کی کھانے، رقم یا ضروریات سے مدد کرنا۔'),
      t('Giving this support at night, particularly to those who are in need.', 'یہ مدد رات کو دینا، خاص طور پر ان لوگوں کو جو ضرورت مند ہوں۔'),
    ],
  },
  {
    month: 10,
    name: t('Shawwal', 'شوال'),
    intro: t('For anyone born in Shawwal, their sadaqah can include:', 'شوال میں پیدا ہونے والوں کا صدقہ اس میں شامل ہو سکتا ہے:'),
    items: [
      t('Giving brand-new clothes to someone in need.', 'ضرورت مند کو بالکل نئے کپڑے دینا۔'),
      t('Giving clean, good-quality clothing.', 'صاف اور اچھے کپڑے دینا۔'),
      t('Helping people have suitable clothes that they can wear with dignity.', 'لوگوں کو ایسے مناسب کپڑے مہیا کرنا جو وہ عزت کے ساتھ پہن سکیں۔'),
    ],
  },
  {
    month: 11,
    name: t("Dhu al-Qi'dah", 'ذوالقعدہ'),
    intro: t("For anyone born in Dhu al-Qi'dah, their sadaqah can include:", 'ذوالقعدہ میں پیدا ہونے والوں کا صدقہ اس میں شامل ہو سکتا ہے:'),
    items: [
      t('Helping a traveller, financially or in any other way that can make their journey easier.', 'مسافر کی مالی یا ایسی مدد کرنا جس سے اس کا سفر آسان ہو۔'),
      t('Giving food to poor and needy people.', 'غریبوں اور ضرورت مندوں کو کھانا دینا۔'),
      t('Giving hot, nourishing food as sadaqah to those in need.', 'ضرورت مندوں کو گرم اور مقوی کھانا صدقے میں دینا۔'),
      t('Offering practical assistance to people experiencing hardship.', 'مشکلات سے گزرنے والوں کو عملی مدد دینا۔'),
    ],
  },
  {
    month: 12,
    name: t('Dhu al-Hijjah', 'ذوالحجہ'),
    intro: t('For anyone born in Dhu al-Hijjah, their sadaqah can include:', 'ذوالحجہ میں پیدا ہونے والوں کا صدقہ اس میں شامل ہو سکتا ہے:'),
    items: [
      t('Giving meat as sadaqah, especially to poor and needy people.', 'گوشت صدقے میں دینا، خاص طور پر غریبوں اور ضرورت مندوں کو۔'),
      t('Helping pilgrims who have travelled to Makkah for Hajj, financially or in any other useful way.', 'حج کے لیے مکہ گئے حجاج کی مالی یا کسی اور مفید طریقے سے مدد کرنا۔'),
      t('Visiting and welcoming a pilgrim when they return from Makkah, through ziyar.', 'مکہ سے واپس آنے والے حاجی کی زیارت اور خیرمقدم کرنا۔'),
      t('Helping poor and needy people with food, money, clothing, or other necessities.', 'غریبوں اور ضرورت مندوں کی کھانے، رقم، کپڑے یا دیگر ضروریات سے مدد کرنا۔'),
    ],
  },
];

export const UR_NAMES99 = {
  h1: t('The 99 Names of Allah (Asmāʾ al-Ḥusnā)', 'اللہ کے ننانوے نام (اسماء الحسنیٰ)'),
  lead: t(
    'Each Name in Arabic with its transliteration and Abjad value. Your burj in the name-and-mother calculator also comes with Divine Names for dhikr.',
    'ہر نام عربی میں، نقلِ حرفی اور ابجدی عدد کے ساتھ۔ نام اور والدہ کے نام والے کیلکولیٹر میں آپ کے برج کے ساتھ ذکر کے لیے اسماء الحسنیٰ بھی آتے ہیں۔',
  ),
  listLabel: t('The 99 Names of Allah', 'اللہ کے ننانوے نام'),
  abjadLabel: t('Abjad value', 'ابجدی عدد'),
  mashriqiLabel: t('Mashriqi', 'مشرقی'),
  aboutTitle: t('About this list', 'اس فہرست کے بارے میں'),
  about: t(
    'The Names are given in the order of the compilation drawn from the hadith of al-Walīd in Jāmiʿ al-Tirmidhī (no. 3507). Abjad values drop the article “al-” and use the Maghribi table, the default across Asrār (the Mashriqi value is shown where it differs). The Arabic of each Name is taken only from the verified data files. They are listed for learning and reflection, not prediction.',
    'نام اس ترتیب میں دیے گئے ہیں جو جامع الترمذی (حدیث ۳۵۰۷) میں ولید کی روایت سے ماخوذ معروف فہرست کی ہے۔ ابجدی اعداد میں حرفِ تعریف «ال» گرا دیا جاتا ہے اور مغربی جدول استعمال ہوتی ہے، جو اسرار میں طے شدہ ہے (جہاں مشرقی عدد مختلف ہو وہ ساتھ دکھایا جاتا ہے)۔ ہر نام کا عربی متن صرف تصدیق شدہ فائلوں سے لیا گیا ہے۔ یہ فہرست سیکھنے اور غور و فکر کے لیے ہے، پیش گوئی کے لیے نہیں۔',
  ),
  faqs: [
    {
      q: t('Where does this list of the 99 Names come from?', 'ننانوے ناموں کی یہ فہرست کہاں سے آئی ہے؟'),
      a: t(
        'The Arabic text and order follow the widely used compilation drawn from the hadith of al-Walīd in Jāmiʿ al-Tirmidhī (no. 3507).',
        'عربی متن اور ترتیب اس معروف فہرست کی پیروی کرتی ہے جو جامع الترمذی (حدیث ۳۵۰۷) میں ولید کی روایت سے لی گئی ہے۔',
      ),
    },
    {
      q: t('How are the Abjad values of the Names calculated here?', 'یہاں ناموں کے ابجدی اعداد کیسے نکالے گئے ہیں؟'),
      a: t(
        'The leading definite article "al-" is dropped and the remaining letters are summed with the Maghribi table, the default across Asrār; hamza is counted by its seat. Where the Mashriqi table gives a different total, it is shown next to the value.',
        'شروع کا حرفِ تعریف «ال» گرا دیا جاتا ہے اور باقی حروف کو مغربی جدول سے جمع کیا جاتا ہے، جو اسرار میں طے شدہ ہے۔ حمزہ اپنی کرسی کے حساب سے گنا جاتا ہے۔ جہاں مشرقی جدول کا مجموعہ مختلف ہو، وہ عدد کے ساتھ دکھایا جاتا ہے۔',
      ),
    },
    {
      q: t('How are the Names linked to my burj?', 'یہ نام میرے برج سے کیسے جڑے ہیں؟'),
      a: t(
        'Each of the 12 burūj in the name-and-mother calculator comes with Divine Names for dhikr. Find your burj with the calculator to see yours.',
        'نام اور والدہ کے نام والے کیلکولیٹر میں بارہ بروجز میں سے ہر برج کے ساتھ ذکر کے لیے اسماء الحسنیٰ ہوتے ہیں۔ کیلکولیٹر سے اپنا برج معلوم کر کے اپنے نام دیکھیں۔',
      ),
    },
    {
      q: t('Is this page for prediction or for amulets?', 'کیا یہ صفحہ پیش گوئی یا تعویذ کے لیے ہے؟'),
      a: t(
        'No. The Names are listed for learning, remembrance and reflection. Abjad values are a traditional study of letters, not a way to know the unseen; Allah alone knows the unseen.',
        'نہیں۔ نام سیکھنے، ذکر اور غور و فکر کے لیے درج ہیں۔ ابجدی اعداد حروف کا روایتی مطالعہ ہیں، غیب جاننے کا ذریعہ نہیں؛ غیب کا علم صرف اللہ کو ہے۔',
      ),
    },
  ] as Faq[],
};

export const UR_MANAZIL_PAGE = {
  h1: t('Manāzil al-Qamar — The 28 Lunar Mansions', 'منازل القمر — چاند کے اٹھائیس منازل'),
  lead: t(
    "See which lunar mansion the Moon occupies today, browse all twenty-eight stations, and learn how classical ʿIlm al-Nujūm uses them for reflection and timing adab.",
    'دیکھیں کہ آج چاند کس منزل میں ہے، اٹھائیسوں منازل دیکھیں، اور کلاسیکی علم النجوم انہیں غور و فکر اور وقت کے ادب کے لیے کیسے استعمال کرتا ہے۔',
  ),
  aboutTitle: t('What are the lunar mansions?', 'منازلِ قمر کیا ہیں؟'),
  about: t(
    'Manāzil al-qamar are twenty-eight stations along the Moon’s path. In classical ʿIlm al-Nujūm they mark seasonal and celestial milestones; later electional (ikhtiyārāt) practice also weighs the mansion the Moon occupies when choosing a time to begin something. They are signs for contemplation, not agents that compel the unseen. This page is for learning and adab with time — not prediction, and not a substitute for istikhāra, mashwara or tawakkul. Allah alone knows the ghayb.',
    'منازل القمر چاند کے راستے کے اٹھائیس مقام ہیں۔ کلاسیکی علم النجوم میں یہ موسمی اور فلکی نشانیاں ہیں؛ بعد کی اختیارات کی روایت میں کسی کام کے آغاز کا وقت چنتے ہوئے اس منزل کو بھی دیکھا جاتا ہے جس میں چاند ہو۔ یہ غور و فکر کی نشانیاں ہیں، غیب کو مجبور کرنے والی طاقتیں نہیں۔ یہ صفحہ سیکھنے اور وقت کے ادب کے لیے ہے — پیش گوئی نہیں، اور استخارہ، مشورے یا توکل کا بدل نہیں۔ غیب کا علم صرف اللہ کو ہے۔',
  ),
  browseTitle: t('Browse all 28 manāzil', 'تمام ۲۸ منازل دیکھیں'),
  browseLead: t(
    'Arabic name and transliteration for each station. The live card above (some of its labels may still be in English) shows today’s manzil.',
    'ہر منزل کا عربی نام اور نقلِ حرفی۔ اوپر والا تازہ کارڈ (اس کے کچھ لیبل ابھی انگریزی میں ہو سکتے ہیں) آج کی منزل دکھاتا ہے۔',
  ),
  faqs: [
    {
      q: t('What is a lunar mansion (manzil)?', 'منزلِ قمر کیا ہے؟'),
      a: t(
        'A manzil (pl. manāzil al-qamar) is one of twenty-eight sectors of the Moon’s path. Classical sources give each station a name and traditional themes. Asrār shows the current station and educational notes for reflection.',
        'منزل (جمع: منازل القمر) چاند کے راستے کے اٹھائیس حصوں میں سے ایک ہے۔ کلاسیکی مصادر ہر مقام کا نام اور روایتی مضامین بتاتے ہیں۔ اسرار موجودہ منزل اور غور و فکر کے لیے تعلیمی نوٹس دکھاتا ہے۔',
      ),
    },
    {
      q: t("How does Asrār calculate today's manzil?", 'اسرار آج کی منزل کیسے نکالتا ہے؟'),
      a: t(
        "From the Moon’s tropical ecliptic longitude, divided into 28 equal sectors of 360°/28. Mansion 1 begins at 0° of the tropical ecliptic. This matches Asrār’s default tropical planetary ephemeris.",
        'چاند کے استوائی طولِ بلد سے، جسے ۲۸ برابر حصوں (۳۶۰°/۲۸) میں تقسیم کیا جاتا ہے۔ پہلی منزل استوائی دائرة البروج کے ۰° سے شروع ہوتی ہے۔ یہ اسرار کے طے شدہ استوائی زیج سے میل کھاتا ہے۔',
      ),
    },
    {
      q: t('Does a manzil predict what will happen?', 'کیا منزل یہ بتاتی ہے کہ کیا ہو گا؟'),
      a: t(
        'No. Manāzil are for reflection and for considering the adab of a time, alongside istikhāra and tawakkul. Allah alone knows the unseen.',
        'نہیں۔ منازل غور و فکر کے لیے ہیں، اور استخارے و توکل کے ساتھ وقت کے ادب پر غور کرنے کے لیے۔ غیب کا علم صرف اللہ کو ہے۔',
      ),
    },
  ] as Faq[],
};

export const UR_BEST_DAY = {
  h1: t(
    'Best Day For Nikah, Travel, Moving and Business (Ikhtiyārāt)',
    'نکاح، سفر، نئے گھر اور کاروبار کے لیے مناسب دن (اختیارات)',
  ),
  lead: t(
    'Favourable weekdays and planetary hours for marriage (nikāḥ), travel, moving home and starting a business in the classical ikhtiyārāt tradition. For reflection, alongside istikhāra and tawakkul.',
    'کلاسیکی علمِ اختیارات کے مطابق نکاح، سفر، نئے گھر میں منتقلی اور کاروبار شروع کرنے کے لیے مناسب ایامِ ہفتہ اور ساعاتِ کواکب۔ استخارے اور توکل کے ساتھ غور و فکر کے لیے۔',
  ),
  aboutTitle: t('What is ikhtiyārāt?', 'اختیارات کیا ہیں؟'),
  about: t(
    'Ikhtiyārāt is the classical practice of choosing a suitable time to begin an important matter, by looking at the ruler of the day, the planetary hour and the Moon’s mansion. No day is unlucky in Islam, and no date is religiously forbidden for nikāḥ. These pages are for reflection; they do not replace istikhāra, consultation (mashwara) or tawakkul.',
    'اختیارات کسی اہم کام کے آغاز کے لیے مناسب وقت چننے کی کلاسیکی روایت ہے، جس میں دن کے حاکم سیارے، ساعت اور منزلِ قمر کو دیکھا جاتا ہے۔ اسلام میں کوئی دن منحوس نہیں، اور نکاح کے لیے کوئی تاریخ شرعاً ممنوع نہیں۔ یہ صفحات غور و فکر کے لیے ہیں؛ یہ استخارہ، مشورے یا توکل کا بدل نہیں۔',
  ),
  faqs: [
    {
      q: t('Is there one best day for everything?', 'کیا ہر کام کے لیے ایک ہی بہترین دن ہے؟'),
      a: t(
        'No. Each purpose has its own customary days and hours. Thursday is often among the favoured days, but you should read the page for the matter you are planning.',
        'نہیں۔ ہر مقصد کے اپنے روایتی دن اور ساعات ہیں۔ جمعرات اکثر مناسب دنوں میں ہوتا ہے، مگر جس کام کا ارادہ ہو اس کا صفحہ پڑھیں۔',
      ),
    },
    {
      q: t('Should I wait for a “perfect” date?', 'کیا مجھے «کامل» تاریخ کا انتظار کرنا چاہیے؟'),
      a: t(
        'No. These rules are a support for reflection. They do not replace istikhāra, consultation or tawakkul, and no day is religiously forbidden for nikāḥ.',
        'نہیں۔ یہ قواعد غور و فکر کا سہارا ہیں۔ یہ استخارہ، مشورے یا توکل کا بدل نہیں، اور نکاح کے لیے کوئی دن شرعاً ممنوع نہیں۔',
      ),
    },
  ] as Faq[],
  purposes: {
    marriage: {
      name: t('Best Day for Nikah (Marriage)', 'نکاح (شادی) کے لیے مناسب دن'),
      short: t('Marriage (nikāḥ)', 'نکاح'),
      h1: t('Best day for nikāḥ (marriage) — favoured days and hours', 'نکاح کے لیے مناسب دن — مناسب ایام اور ساعات'),
      lead: t(
        'No date is religiously forbidden for nikāḥ. The classical science of ikhtiyārāt offers a frame for reflecting on a blessed time, alongside istikhāra and family counsel.',
        'نکاح کے لیے کوئی تاریخ شرعاً ممنوع نہیں۔ کلاسیکی علمِ اختیارات ایک بابرکت لمحے پر غور کرنے کا ڈھانچہ دیتا ہے، استخارے اور گھریلو مشورے کے ساتھ۔',
      ),
    },
    travel: {
      name: t('Best Day to Travel', 'سفر کے لیے مناسب دن'),
      short: t('Travel', 'سفر'),
      h1: t('Best day to travel — favoured days and hours', 'سفر کے لیے مناسب دن — مناسب ایام اور ساعات'),
      lead: t(
        'See the weekdays and planetary hours the ikhtiyārāt tradition considers suitable for beginning a journey, for reflection alongside istikhāra and tawakkul.',
        'دیکھیں کہ علمِ اختیارات سفر کے آغاز کے لیے کن ایامِ ہفتہ اور ساعات کو مناسب سمجھتا ہے — استخارے اور توکل کے ساتھ غور و فکر کے لیے۔',
      ),
    },
    'moving-home': {
      name: t('Best Day to Move Home', 'نئے گھر میں منتقلی کے لیے مناسب دن'),
      short: t('Moving home', 'نئے گھر میں منتقلی'),
      h1: t('Best day to move home — favoured days and hours', 'نئے گھر میں منتقلی کے لیے مناسب دن — مناسب ایام اور ساعات'),
      lead: t(
        'See the weekdays and planetary hours the ikhtiyārāt tradition considers suitable for moving home, for reflection alongside istikhāra and tawakkul.',
        'دیکھیں کہ علمِ اختیارات نئے گھر میں منتقل ہونے کے لیے کن ایامِ ہفتہ اور ساعات کو مناسب سمجھتا ہے — استخارے اور توکل کے ساتھ غور و فکر کے لیے۔',
      ),
    },
    business: {
      name: t('Best Day to Start a Business', 'کاروبار شروع کرنے کے لیے مناسب دن'),
      short: t('Business & contracts', 'کاروبار اور عقود'),
      h1: t('Best day to start a business — favoured days and hours', 'کاروبار شروع کرنے کے لیے مناسب دن — مناسب ایام اور ساعات'),
      lead: t(
        'See the weekdays and planetary hours the ikhtiyārāt tradition considers suitable for starting a business or a contract, for reflection alongside istikhāra and tawakkul.',
        'دیکھیں کہ علمِ اختیارات کاروبار یا معاملہ شروع کرنے کے لیے کن ایامِ ہفتہ اور ساعات کو مناسب سمجھتا ہے — استخارے اور توکل کے ساتھ غور و فکر کے لیے۔',
      ),
    },
  },
};
