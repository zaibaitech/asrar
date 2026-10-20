/**
 * Urdu wording of the /names/[slug] sentences that are built from a name, its Abjad value and a burj.
 * The English page assembles them from several text nodes, which the DOM catalog cannot translate in the right
 * order, so Urdu gets whole templates here (rendered by <ByUiLanguage>). The names, the Arabic spellings, every
 * number and the Latin transliterations ("al-Ḥamal") are passed through unchanged; the 12 names are not translated.
 * Wording of the traditional claims follows the English source: reflection, not prediction.
 */
import type { FaqItem } from '@/src/components/seo/SeoSections';

/** Burj names in Urdu, in remainder order 1..12 (same words as the Urdu catalog's zodiac names). */
export const BURJ_UR: Record<string, string> = {
  Aries: 'حمل', Taurus: 'ثور', Gemini: 'جوزا', Cancer: 'سرطان', Leo: 'اسد', Virgo: 'سنبلہ',
  Libra: 'میزان', Scorpio: 'عقرب', Sagittarius: 'قوس', Capricorn: 'جدی', Aquarius: 'دلو', Pisces: 'حوت',
};
const burjUr = (en: string) => BURJ_UR[en] ?? en;

export interface NameFacts {
  name: string;
  arabicPlain: string;
  value: number;
  mashriqiValue: number;
  variants: string[];
  slug: string;
  /** "م (40) + ح (8) + …" */
  breakdown: string;
}

export interface FatimaExample {
  total: number;
  remainder: number;
  burjEn: string;
  burjTranslit: string;
}

export const urNote = {
  maghribi: 'مغربی ترتیب میں حروف کی قیمتیں، جیسا کہ «میں کون ہوں؟» کیلکولیٹر میں استعمال ہوتی ہیں؛ اعراب شمار نہیں کیے جاتے۔',
  mashriqiSame: 'مشرقی جدول اس نام کے لیے وہی مجموعہ دیتا ہے۔',
  mashriqiDiffers: (v: number) => `مشرقی جدول کے مطابق مجموعہ ${v} ہے۔`,
  checkSpelling: 'آپ کوئی بھی املا',
  inCalculator: 'میں جانچ سکتے ہیں۔',
  abjadCalculator: 'ابجد کیلکولیٹر',
};

export const urPairingsNote = {
  before: 'صرف مثالیں ہیں: اوپر کیلکولیٹر میں اپنی والدہ کا نام استعمال کریں۔ ہر برج کے مطلب (مزاج، ذکر، صدقہ) کی وضاحت',
  link: 'برج کی رہنمائی',
  after: 'میں ہے۔',
};

export const urHow =
  'آپ کے نام اور آپ کی والدہ کے نام کی ابجد قیمتیں جمع کر کے 12 پر تقسیم کی جاتی ہیں؛ جو باقی بچے (1 تا 12؛ صفر ہو تو اسے 12 شمار کیا جاتا ہے) وہی برج ہے: 1 = حمل سے 12 = حوت تک۔ اس غور و فکر کا روایتی نام استخارۃ الاسماء ہے، مگر یہ نمازِ استخارہ نہیں۔ اسے غور و فکر اور تعلیم کے لیے استعمال کریں، پیش گوئی کے لیے نہیں؛ غیب کا علم صرف اللہ کو ہے۔';

export const urValueHeading = (name: string) => `${name} کی ابجد قیمت`;
export const urPairingsHeading = (name: string) => `عام والدہ کے ناموں کے ساتھ ${name} کا برج`;
export const urSpellings = (variants: string[]) => ({
  list: variants.join('، '),
  rest: 'یہ سب عربی میں',
  rest2: 'لکھے جاتے ہیں، اس لیے ان کی قیمت ایک ہی ہے۔ کیلکولیٹر کی رومن حروف والی تلاش میں ان میں سے کوئی بھی لکھیں اور عربی املا منتخب کریں۔',
});
export const urIntro = {
  before: 'حسابِ جمل میں نام',
  after: 'ہے۔ اپنا برج، عنصر، مبارک دن، ذکر اور صدقہ جاننے کے لیے نیچے کیلکولیٹر میں اپنی والدہ کا نام شامل کریں۔',
};

export function urFaqs(n: NameFacts, fatima: FatimaExample | undefined): FaqItem[] {
  const [v1, v2] = n.variants.filter((v) => v.toLowerCase() !== n.slug);
  const example = fatima && n.slug !== 'fatima'
    ? ` مثال کے طور پر والدہ کا نام فاطمہ (فاطمة = 135) ہو تو: ${n.value} + 135 = ${fatima.total}، باقی ${fatima.remainder}، یعنی ${burjUr(fatima.burjEn)}۔`
    : '';
  const faqs: FaqItem[] = [
    {
      q: `نام ${n.name} کی ابجد قیمت کیا ہے؟`,
      a: `${n.name} عربی میں ${n.arabicPlain} لکھا جاتا ہے: ${n.breakdown} = ${n.value}، «میں کون ہوں؟» کیلکولیٹر میں حروف کی مغربی قیمتوں کے مطابق (اعراب شمار نہیں کیے جاتے)۔`,
    },
    {
      q: `نام ${n.name} سے میں اپنا برج کیسے معلوم کروں؟`,
      a: `${n.value} کو اپنی والدہ کے نام کی ابجد قیمت میں جمع کریں، حاصل کو 12 پر تقسیم کریں اور باقی رکھیں (صفر کو 12 شمار کیا جاتا ہے): 1 حمل ہے اور 12 حوت۔${example} اوپر کا کیلکولیٹر یہ حساب خود کر دیتا ہے۔`,
    },
  ];
  if (v1) {
    faqs.push({
      q: v2 ? `کیا ${v1} اور ${v2} کا نتیجہ ${n.name} جیسا ہی ہوتا ہے؟` : `کیا ${v1} کا نتیجہ ${n.name} جیسا ہی ہوتا ہے؟`,
      a: `جی ہاں۔ حساب عربی املا ${n.arabicPlain} پر ہوتا ہے، رومن حروف پر نہیں، اس لیے اس نام کا ہر رومن املا وہی قیمت ${n.value} دیتا ہے۔`,
    });
  }
  faqs.push({
    q: 'کیا برج میرا مستقبل بتاتا ہے؟',
    a: 'نہیں۔ نام اور والدہ کے نام کا برج علم الحروف کی روشنی میں ناموں اور مزاج پر ایک روایتی غور و فکر ہے۔ یہ نمازِ استخارہ نہیں اور نہ غیب جاننے کا ذریعہ؛ غیب کا علم صرف اللہ کو ہے۔',
  });
  return faqs;
}
