/**
 * Urdu titles and descriptions for the /ur pages (phase 1), hand-translated,
 * with their English source for the native review (docs/i18n/ur-review.md).
 *
 * /ur pages are noindex with NO hreflang alternates and no sitemap entry (the
 * canonical is the page itself), except the reviewed pages on the allow-list
 * (INDEXABLE_UR_PATHS in i18nRoutes.ts), which are indexable and carry the
 * full EN/FR/AR/UR hreflang set.
 */
import type { Metadata } from 'next';
import { absoluteUrl } from './siteRoutes';
import { UR_PATHS, hreflangLanguages, isIndexableUrEnPath } from './i18nRoutes';
import { ogImageUrl, ogKeyForPath, OG_SIZE } from './og/urls';
import { ABOUT_META, METHODOLOGY_META } from './infoPageCopy';

export interface UrMeta {
  title: { en: string; ur: string };
  description: { en: string; ur: string };
}

/** Keyed by the English path of the page. */
export const UR_META: Readonly<Record<string, UrMeta>> = {
  '/': {
    title: {
      en: 'Asrār — Abjad, Burj by Name, Planetary Hours and ʿIlm al-Aʿdād in Urdu',
      ur: 'اسرار — ابجد، نام سے برج، علم الاعداد اور ساعاتِ کواکب',
    },
    description: {
      en: "Reflective tools from the Islamic tradition: your burj from your name and your mother's name, name compatibility, Abjad, today's planetary hours, the planet of the day and ikhtiyārāt. For learning and reflection, not prediction.",
      ur: 'نام اور والدہ کے نام سے برج، ناموں کی مطابقت، ابجد، آج کی ساعاتِ کواکب اور اختیارات۔ اسلامی روایت سے غور و فکر کے ٹولز، پیش گوئی نہیں۔',
    },
  },
  '/name-and-mother-burj': {
    title: {
      en: "Find Your Burj from Your Name and Your Mother's Name (Abjad)",
      ur: 'نام اور امی کے نام سے برج معلوم کریں — مفت کیلکولیٹر',
    },
    description: {
      en: "Find your burj from the Abjad values of your name and your mother's (ammi's) name: element, temperament, blessed day, dhikr and sadaqa. A free calculator for reflection, not prediction.",
      ur: 'اپنے نام اور امی کے نام کے ابجد اعداد سے برج، عنصر، مزاج، روایتی دن اور ذکر معلوم کریں۔ غور و فکر کے لیے، پیش گوئی نہیں؛ غیب کا علم صرف اللہ کو ہے۔',
    },
  },
  '/compatibility': {
    title: {
      en: 'Name Compatibility for Marriage: Abjad Calculator',
      ur: 'ناموں کی ابجد کا موازنہ (ثقافتی غور و فکر): ابجد کیلکولیٹر',
    },
    description: {
      en: "Compare two names with the Abjad 'soul connection' method of ʿilm al-ḥurūf, for marriage, friendship or work. For reflection, not a verdict: choose by dīn, character and istikhāra.",
      ur: 'ابجد اور علم الحروف کے “روحانی ربط” سے شادی، دوستی یا کام کے لیے دو ناموں کا موازنہ کریں۔ فیصلہ نہیں؛ رشتہ دین، اخلاق اور استخارے سے طے کریں۔',
    },
  },
  '/abjad': {
    title: {
      en: 'Abjad Calculator: The Numerical Value of Names (ʿIlm al-Aʿdād)',
      ur: 'ابجد کیلکولیٹر: حسابِ جمل سے نام کے اعداد',
    },
    description: {
      en: "Find the Abjad (ḥisāb al-jummal) value of any name or Arabic phrase in the Mashriqi or Maghribi order, with each letter's value and the balance of the four elements. For reflection and learning.",
      ur: 'ابجد کیلکولیٹر سے کسی بھی نام یا عبارت کے حسابِ جمل (مشرقی یا مغربی ترتیب) اور ہر حرف کی قیمت معلوم کریں۔ سیکھنے اور غور و فکر کے لیے، پیش گوئی نہیں۔',
    },
  },
  '/planetary-hours': {
    title: {
      en: "Today's Planetary Hours (Sāʿāt al-Kawākib) for Your Location",
      ur: 'آج کی ساعاتِ کواکب: آپ کے مقام کے مطابق ساعتیں',
    },
    description: {
      en: "Find today's planetary hours: the planet ruling the current hour where you are, the times of the twelve day and twelve night hours in the Chaldean order, and what suits each planet. For reflection and planning your time.",
      ur: 'آج کی ساعاتِ کواکب: آپ کے شہر میں اس وقت کی ساعت کا سیارہ، دن اور رات کی بارہ بارہ ساعتوں کے اوقات اور ہر ساعت کی روایتی نسبتیں، غور و فکر کے لیے۔',
    },
  },
  '/planet-of-the-day': {
    title: {
      en: "Planet of the Day: The Day's Ruler and Its Hours",
      ur: 'آج کا سیارہ: دن کی روایتی سیارہ نسبت اور اس کی ساعتیں',
    },
    description: {
      en: 'Learn which planet rules today in the tradition, the deeds, dhikr and sadaqa that suit it, and its planetary hours for your location.',
      ur: 'جانیں کہ روایت کے مطابق آج کے دن کا منسوب سیارہ کون سا ہے، اس سے منسوب روایتی تجاویز (ان کی کوئی شرعی فضیلت ثابت نہیں) کیا ہیں، اور آپ کے مقام کے مطابق اس کی ساعتیں کب ہیں۔',
    },
  },
  '/ikhtiyarat': {
    title: {
      en: 'Ikhtiyārāt: Choosing Suitable Dates for Nikāḥ, Travel and Business',
      ur: 'نکاح، سفر اور کاروبار کے لیے مناسب تاریخ (اختیارات)',
    },
    description: {
      en: "Suitable dates for nikāḥ, travel, moving home and business according to the traditional science of ikhtiyārāt: the day's ruler, the planetary hour and the lunar mansion. For reflection alongside istikhāra and tawakkul.",
      ur: 'نکاح، سفر، نئے گھر میں منتقلی اور کاروبار کے لیے روایتی علمِ اختیارات کے مطابق مناسب تاریخیں۔ استخارے اور توکل کے ساتھ غور و فکر کے لیے۔',
    },
  },
  '/about': {
    title: { en: ABOUT_META.en.title, ur: ABOUT_META.ur.title },
    description: { en: ABOUT_META.en.description, ur: ABOUT_META.ur.description },
  },
  '/methodology': {
    title: { en: METHODOLOGY_META.en.title, ur: METHODOLOGY_META.ur.title },
    description: { en: METHODOLOGY_META.en.description, ur: METHODOLOGY_META.ur.description },
  },
  '/sadaqa': {
    title: {
      en: 'Sadaqa Guide: by Weekday, Hijri Birth Month & Burj',
      ur: 'صدقہ گائیڈ: ایامِ ہفتہ، ہجری مہینۂ پیدائش اور برج',
    },
    description: {
      en: 'A guide to sadaqah (voluntary charity): suggested forms for each weekday, for your Hijri birth month, and for each of the 12 burūj. For reflection, not prediction.',
      ur: 'صدقہ (رضاکارانہ خیرات) کی رہنمائی: ہر دنِ ہفتہ، آپ کے ہجری مہینۂ پیدائش، اور بارہ بروجز میں سے ہر برج کے لیے تجویز کردہ صورتیں۔ غور و فکر کے لیے، پیش گوئی نہیں۔',
    },
  },
  '/sadaqa-of-the-day': {
    title: {
      en: 'Sadaqa of the Day: Recommended Sadaqah for Each Weekday',
      ur: 'آج کا صدقہ: ہفتے کے ہر دن کے لیے تجویز کردہ صدقہ',
    },
    description: {
      en: "Today's recommended sadaqah and the full weekly table: water on Monday, help with medicine on Tuesday, opening the way on Thursday, clothes and perfume on Friday. For reflection, not prediction.",
      ur: 'آج کا تجویز کردہ صدقہ اور پوری ہفتہ وار جدول: پیر کو پانی، منگل کو دوا میں مدد، جمعرات کو راہ کھولنا، جمعہ کو کپڑے اور خوشبو۔ غور و فکر کے لیے، پیش گوئی نہیں۔',
    },
  },
  '/99-names-of-allah': {
    title: {
      en: 'The 99 Names of Allah (Asmāʾ al-Ḥusnā): Meanings & Abjad Values',
      ur: 'اللہ کے ننانوے نام (اسماء الحسنیٰ): عربی، نقلِ حرفی اور ابجدی اعداد',
    },
    description: {
      en: 'All 99 Names of Allah in Arabic with transliteration and Abjad (ḥisāb al-jummal) value, plus how the Names appear in your name-and-mother burj. For learning and reflection.',
      ur: 'اللہ کے تمام ننانوے نام عربی میں، نقلِ حرفی اور ابجدی عدد کے ساتھ، اور یہ کہ وہ نام اور والدہ کے نام والے برج میں کیسے آتے ہیں۔ سیکھنے اور غور و فکر کے لیے۔',
    },
  },
  '/manazil': {
    title: {
      en: 'Lunar Mansions (Manāzil al-Qamar)',
      ur: 'منازل القمر: چاند کے اٹھائیس منازل',
    },
    description: {
      en: 'The 28 lunar mansions in classical ʿIlm al-Nujūm: today’s manzil, Arabic names, and how manāzil relate to birth profile and ikhtiyārāt. For reflection, not prediction.',
      ur: 'کلاسیکی علم النجوم میں چاند کے اٹھائیس منازل: آج کی منزل، عربی نام، اور ولادت و اختیارات سے تعلق۔ غور و فکر کے لیے، پیش گوئی نہیں۔',
    },
  },
  '/best-day-for': {
    title: {
      en: 'Best Day For Nikah, Travel, Moving & Business (Ikhtiyārāt)',
      ur: 'نکاح، سفر، نئے گھر اور کاروبار کے لیے مناسب دن (اختیارات)',
    },
    description: {
      en: 'Favourable weekdays and planetary hours for marriage (nikāḥ), travel, moving home and starting a business in the classical ikhtiyārāt tradition. For reflection.',
      ur: 'کلاسیکی علمِ اختیارات کے مطابق نکاح، سفر، نئے گھر میں منتقلی اور کاروبار کے لیے مناسب ایامِ ہفتہ اور ساعاتِ کواکب۔ غور و فکر کے لیے۔',
    },
  },
  '/best-day-for/marriage': {
    title: {
      en: 'Best Day for Nikah (Marriage) in Islam',
      ur: 'اسلام میں نکاح کے لیے مناسب دن',
    },
    description: {
      en: 'Favoured weekdays and planetary hours for nikāḥ in the ikhtiyārāt tradition, for reflection alongside istikhāra. No date is religiously forbidden for marriage.',
      ur: 'علمِ اختیارات کے مطابق نکاح کے لیے مناسب ایامِ ہفتہ اور ساعات، استخارے کے ساتھ غور و فکر کے لیے۔ نکاح کے لیے کوئی تاریخ شرعاً ممنوع نہیں۔',
    },
  },
  '/best-day-for/travel': {
    title: {
      en: 'Best Day to Travel (Ikhtiyārāt)',
      ur: 'سفر کے لیے مناسب دن (اختیارات)',
    },
    description: {
      en: 'Favoured weekdays and planetary hours for beginning a journey in the classical ikhtiyārāt tradition. For reflection, alongside istikhāra and tawakkul.',
      ur: 'کلاسیکی علمِ اختیارات کے مطابق سفر کے آغاز کے لیے مناسب ایامِ ہفتہ اور ساعات۔ استخارے اور توکل کے ساتھ غور و فکر کے لیے۔',
    },
  },
  '/best-day-for/moving-home': {
    title: {
      en: 'Best Day to Move Home (Ikhtiyārāt)',
      ur: 'نئے گھر میں منتقلی کے لیے مناسب دن (اختیارات)',
    },
    description: {
      en: 'Favoured weekdays and planetary hours for moving home in the classical ikhtiyārāt tradition. For reflection, alongside istikhāra and tawakkul.',
      ur: 'کلاسیکی علمِ اختیارات کے مطابق نئے گھر میں منتقلی کے لیے مناسب ایامِ ہفتہ اور ساعات۔ استخارے اور توکل کے ساتھ غور و فکر کے لیے۔',
    },
  },
  '/best-day-for/business': {
    title: {
      en: 'Best Day to Start a Business (Ikhtiyārāt)',
      ur: 'کاروبار شروع کرنے کے لیے مناسب دن (اختیارات)',
    },
    description: {
      en: 'Favoured weekdays and planetary hours for starting a business or a contract in the classical ikhtiyārāt tradition. For reflection, alongside istikhāra and tawakkul.',
      ur: 'کلاسیکی علمِ اختیارات کے مطابق کاروبار یا معاملہ شروع کرنے کے لیے مناسب ایامِ ہفتہ اور ساعات۔ استخارے اور توکل کے ساتھ غور و فکر کے لیے۔',
    },
  },
};

/**
 * Metadata for a /ur page: Urdu title and description, self canonical. Noindex
 * and no hreflang languages, unless the page is on the indexable allow-list
 * (then index, follow and the hreflang set, overriding the /ur layout's noindex). The share card is the page's existing
 * (Latin-script) card: the OG renderer cannot shape Urdu text.
 */
export function urduMetadata(enPath: string): Metadata {
  const m = UR_META[enPath];
  const urPath = UR_PATHS[enPath];
  if (!m || !urPath) throw new Error(`No Urdu page for ${enPath}`);
  const url = absoluteUrl(urPath);
  const ogKey = ogKeyForPath(enPath);
  const imageUrl = ogKey ? ogImageUrl(ogKey, 'en') : absoluteUrl('/opengraph-image');
  const title = m.title.ur;
  const description = m.description.ur;
  return {
    title: { absolute: enPath === '/' ? title : `${title} | اسرار` },
    description,
    robots: { index: isIndexableUrEnPath(enPath), follow: true },
    alternates: isIndexableUrEnPath(enPath) ? { canonical: url, languages: hreflangLanguages(enPath) } : { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: 'اسرار',
      locale: 'ur_PK',
      title,
      description,
      images: [{ url: imageUrl, ...OG_SIZE, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [imageUrl] },
  };
}
