/**
 * Urdu titles and descriptions for the /ur pages (phase 1), hand-translated,
 * with their English source for the native review (docs/i18n/ur-review.md).
 *
 * All /ur pages are noindex for now and have NO hreflang alternates and no
 * sitemap entry: the canonical is the page itself, nothing links Urdu into the
 * EN/FR/AR hreflang sets until the Urdu copy has been reviewed.
 */
import type { Metadata } from 'next';
import { absoluteUrl } from './siteRoutes';
import { UR_PATHS } from './i18nRoutes';
import { ogImageUrl, ogKeyForPath, OG_SIZE } from './og/urls';

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
      ur: 'نام اور امی کے نام سے برج معلوم کریں (ابجد)',
    },
    description: {
      en: "Find your burj from the Abjad values of your name and your mother's (ammi's) name: element, temperament, blessed day, dhikr and sadaqa. A free calculator for reflection, not prediction.",
      ur: 'اپنے اور امی کے نام کے ابجد اعداد سے برج معلوم کریں: عنصر، مزاج، مبارک دن، ذکر اور صدقہ۔ مفت، غور و فکر کے لیے، پیش گوئی نہیں۔',
    },
  },
  '/compatibility': {
    title: {
      en: 'Name Compatibility for Marriage: Abjad Calculator',
      ur: 'شادی کے لیے ناموں کی مطابقت: ابجد کیلکولیٹر',
    },
    description: {
      en: "Compare two names with the Abjad 'soul connection' method of ʿilm al-ḥurūf, for marriage, friendship or work. For reflection, not a verdict: choose by dīn, character and istikhāra.",
      ur: 'ابجد اور علم الحروف کے “روحانی ربط” سے شادی، دوستی یا کام کے لیے دو ناموں کا موازنہ کریں۔ فیصلہ نہیں؛ رشتہ دین، اخلاق اور استخارے سے طے کریں۔',
    },
  },
  '/abjad': {
    title: {
      en: 'Abjad Calculator: The Numerical Value of Names (ʿIlm al-Aʿdād)',
      ur: 'ابجد کیلکولیٹر: نام کے اعداد معلوم کریں',
    },
    description: {
      en: "Find the Abjad (ḥisāb al-jummal) value of any name or Arabic phrase in the Mashriqi or Maghribi order, with each letter's value and the balance of the four elements. For reflection and learning.",
      ur: 'کسی بھی نام یا عربی عبارت کے ابجد اعداد (حسابِ جمل) مشرقی یا مغربی ترتیب میں، ہر حرف کی قیمت اور عناصر کے توازن کے ساتھ معلوم کریں۔',
    },
  },
  '/planetary-hours': {
    title: {
      en: "Today's Planetary Hours (Sāʿāt al-Kawākib) for Your Location",
      ur: 'آج کی ساعاتِ کواکب: آپ کے مقام کے مطابق ساعتیں',
    },
    description: {
      en: "Find today's planetary hours: the planet ruling the current hour where you are, the times of the twelve day and twelve night hours in the Chaldean order, and what suits each planet. For reflection and planning your time.",
      ur: 'آج کی ساعاتِ کواکب: آپ کے شہر میں اس وقت کی ساعت کا سیارہ، دن اور رات کی بارہ بارہ ساعتوں کے اوقات اور ہر ساعت کے مناسب کام، غور و فکر کے لیے۔',
    },
  },
  '/planet-of-the-day': {
    title: {
      en: "Planet of the Day: The Day's Ruler and Its Hours",
      ur: 'آج کا سیارہ: دن کا حاکم سیارہ اور اس کی ساعتیں',
    },
    description: {
      en: 'Learn which planet rules today in the tradition, the deeds, dhikr and sadaqa that suit it, and its planetary hours for your location.',
      ur: 'جانیں کہ روایت کے مطابق آج کے دن کا حاکم سیارہ کون سا ہے، اس کے مناسب اعمال، ذکر اور صدقہ کیا ہیں، اور آپ کے مقام کے مطابق اس کی ساعتیں کب ہیں۔',
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
};

/**
 * Metadata for a /ur page: Urdu title and description, noindex, self
 * canonical and no hreflang languages. The share card is the page's existing
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
    robots: { index: false, follow: true },
    alternates: { canonical: url },
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
