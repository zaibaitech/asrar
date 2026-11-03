/**
 * Copy and source notes for the ḥisāb workbook.
 *
 * Source rules (set by Mario): never invent a citation or page number. Each
 * reference carries a status:
 *   'cited-in-repo' - taken from a comment in this repository's own source; the
 *                     original has NOT been re-checked here;
 *   'quran'         - a Qur'an reference; the Arabic is fetched from the bundled
 *                     Tanzil text (/api/quran-verse), never typed in;
 *   'to-verify'     - a direction only; book, chapter and page still have to be
 *                     confirmed against a printed edition by a reviewer.
 *
 * UI labels: EN is the reference text. FR and AR are DRAFTS written for this
 * preview and must be reviewed before the preview flag is removed (machine
 * translations never go live automatically). Urdu falls back to EN.
 */

export type StepId = 'letters' | 'kabir' | 'saghir' | 'tabi' | 'burj' | 'manzil';
export type Lang = 'en' | 'fr' | 'ar';
type L3 = Record<Lang, string>;

export type RefStatus = 'cited-in-repo' | 'quran' | 'to-verify';

export interface SourceRef {
  status: RefStatus;
  text: string;
  /** For status 'quran': surah and ayah, fetched verbatim from Tanzil. */
  quran?: { surah: number; ayah: number };
}

export interface StepSource {
  /** What the step does, in one plain sentence (EN). */
  note: string;
  refs: SourceRef[];
}

export const SOURCES: Record<StepId, StepSource> = {
  letters: {
    note: 'Each letter is given its value from the app-wide abjad table (ḥisāb al-jummal). Maghribi is the default; Mashriqi differs only for س ص ش ض ظ غ.',
    refs: [
      {
        status: 'cited-in-repo',
        text: 'Values and the two letter orders (أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ / صعفض قرست ثخذ ظغش) are documented in src/lib/abjad-maps.ts, which cites Wikipedia "Abjad numerals" (after Macdonald 1986) and Encyclopaedia Iranica "Abjad" (G. Krotkoff, 1982). Not re-checked here.',
      },
      {
        status: 'to-verify',
        text: 'A classical Arabic text that gives the Maghribi order, with its page, is still needed for the source library.',
      },
    ],
  },
  kabir: {
    note: 'Kabīr (الكبير) is the plain sum of the letter values. With a mother\u2019s name, the two sums are added.',
    refs: [
      {
        status: 'to-verify',
        text: 'Adding the name\u2019s letters (and the mother\u2019s name) is the standard jafr / ḥisāb al-jummal practice. Book, chapter and page: to verify.',
      },
    ],
  },
  saghir: {
    note: 'Ṣaghīr (الصغير) is the kabīr reduced by adding its digits until one digit remains (1 to 9).',
    refs: [
      {
        status: 'to-verify',
        text: 'Source for reducing the kabīr to a single digit in the classical ḥisāb: to verify. The app uses the same reduction in all its tools.',
      },
    ],
  },
  tabi: {
    note: 'Ṭabʿ (الطبع): the kabīr divided by 4. The remainder gives the element (1 Fire, 2 Earth, 3 Air, 4 or 0 Water). It is read from the total, not from the letters, so it does not depend on any letter-to-element table.',
    refs: [
      {
        status: 'cited-in-repo',
        text: 'The rule and its element order are written as the Maghribi convention in src/features/ilm-huruf/core.ts. Not re-checked here.',
      },
      {
        status: 'to-verify',
        text: 'The classical text for ÷ 4 and this element order: to verify.',
      },
    ],
  },
  burj: {
    note: 'Burj (البرج): the kabīr divided by 12. The remainder gives the sign of the zodiac in order (1 Aries … 12 Pisces; 0 counts as 12).',
    refs: [
      {
        status: 'to-verify',
        text: 'The classical text for ÷ 12 applied to a name total: to verify.',
      },
      {
        status: 'to-verify',
        text: 'For the signs themselves, al-Bīrūnī, Kitāb al-Tafhīm li-awāʾil ṣināʿat al-tanjīm, is the general reference named in src/lib/lunarMansions.ts. Chapter and page: to verify.',
      },
    ],
  },
  manzil: {
    note: 'Manzil (المنزل): the name\u2019s own kabīr is reduced in the 28-cycle (up to 28 stays as is; above that, ÷ 28 with 0 counting as 28), the same cycle the app\u2019s Divine Name resonance uses. The station of that number is read from the app\u2019s list of the 28 mansions.',
    refs: [
      { status: 'quran', text: 'The Qur\u2019an speaks of the moon\u2019s stations (manāzil):', quran: { surah: 36, ayah: 39 } },
      { status: 'quran', text: 'and in', quran: { surah: 10, ayah: 5 } },
      {
        status: 'cited-in-repo',
        text: 'The list of the 28 mansions cites al-Bīrūnī, Kitāb al-Tafhīm, and Arab anwāʾ astronomy in src/lib/lunarMansions.ts. Not re-checked here.',
      },
      {
        status: 'to-verify',
        text: 'A classical source for finding a person\u2019s manzil from the name total (÷ 28): to verify. Until it is found, treat this step as the app\u2019s method, not an attested rule.',
      },
    ],
  },
};

export const LABELS = {
  title: { en: 'Ḥisāb workbook', fr: 'Cahier de ḥisāb', ar: 'دفتر الحساب' },
  intro: {
    en: 'The working of the name, one step at a time. Each step has its source.',
    fr: 'Le calcul du nom, étape par étape. Chaque étape a sa source.',
    ar: 'حساب الاسم خطوة بخطوة، ولكل خطوة مصدرها.',
  },
  name: { en: 'Name (Arabic)', fr: 'Nom (arabe)', ar: 'الاسم' },
  mother: { en: 'Mother\u2019s name (optional)', fr: 'Nom de la mère (facultatif)', ar: 'اسم الأم (اختياري)' },
  calc: { en: 'Show the working', fr: 'Montrer le calcul', ar: 'أظهر الحساب' },
  system: { en: 'Abjad system', fr: 'Système abjad', ar: 'نظام الجُمَّل' },
  needName: { en: 'Enter a name in Arabic letters.', fr: 'Entrez un nom en lettres arabes.', ar: 'أدخل اسماً بالحروف العربية.' },
  notCounted: { en: 'not counted', fr: 'non compté', ar: 'لا يُحسب' },
  showSource: { en: 'Show source', fr: 'Voir la source', ar: 'عرض المصدر' },
  hideSource: { en: 'Hide source', fr: 'Masquer la source', ar: 'إخفاء المصدر' },
  toVerify: { en: 'to verify', fr: 'à vérifier', ar: 'للتحقق' },
  citedInRepo: { en: 'cited in the app\u2019s code, not re-checked', fr: 'cité dans le code, non revérifié', ar: 'مذكور في شيفرة التطبيق، لم يُراجع' },
  quranSrc: { en: 'Qur\u2019an (Tanzil text)', fr: 'Coran (texte Tanzil)', ar: 'القرآن (نص تنزيل)' },
  total: { en: 'Total', fr: 'Total', ar: 'المجموع' },
  remainder: { en: 'remainder', fr: 'reste', ar: 'الباقي' },
  preview: {
    en: 'Preview. Sources marked “to verify” are not yet confirmed.',
    fr: 'Aperçu. Les sources « à vérifier » ne sont pas encore confirmées.',
    ar: 'نسخة تجريبية. المصادر المعلَّمة «للتحقق» لم تُؤكَّد بعد.',
  },
  steps: {
    letters: { en: '1 · Letters and values', fr: '1 · Lettres et valeurs', ar: '١ · الحروف وقيمها' },
    kabir: { en: '2 · Kabīr (sum)', fr: '2 · Kabīr (somme)', ar: '٢ · الكبير' },
    saghir: { en: '3 · Ṣaghīr (root)', fr: '3 · Ṣaghīr (racine)', ar: '٣ · الصغير' },
    tabi: { en: '4 · Ṭabʿ (÷ 4)', fr: '4 · Ṭabʿ (÷ 4)', ar: '٤ · الطبع' },
    burj: { en: '5 · Burj (÷ 12)', fr: '5 · Burj (÷ 12)', ar: '٥ · البرج' },
    manzil: { en: '6 · Manzil (÷ 28)', fr: '6 · Manzil (÷ 28)', ar: '٦ · المنزل' },
  } as Record<StepId, L3>,
  manzilFrom: {
    en: 'from the name\u2019s own kabīr',
    fr: 'depuis le kabīr du nom seul',
    ar: 'من كبير الاسم وحده',
  },
} satisfies Record<string, L3 | Record<StepId, L3>>;
