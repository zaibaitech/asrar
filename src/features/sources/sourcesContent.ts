/**
 * Copy and source notes for the "Show the working + sources" layer (preview only).
 *
 * Source rules (set by Mario): never invent a citation or page number. Each
 * reference carries a status:
 *   'cited-in-repo' - taken from a comment in this repository's own source; the
 *                     original has NOT been re-checked here;
 *   'attributed'    - a named classical source whose text was read; the edition is linked;
 *   'quran'         - a Qur'an reference; the Arabic is fetched from the bundled
 *                     Tanzil text (/api/quran-verse), never typed in;
 *   'to-verify'     - a direction only; book, chapter and page still have to be
 *                     confirmed against a printed edition by a reviewer.
 *
 * UI labels: EN is the reference text. FR and AR are DRAFTS written for this
 * preview and must be reviewed before the preview flag is removed (machine
 * translations never go live automatically). Urdu falls back to EN.
 */

export type StepId = 'letters' | 'kabir' | 'saghir' | 'tabi' | 'burj' | 'manzil' | 'lettersMansions';
export type Lang = 'en' | 'fr' | 'ar';
type L3 = Record<Lang, string>;

export type RefStatus = 'cited-in-repo' | 'quran' | 'to-verify' | 'attributed';

export interface SourceRef {
  status: RefStatus;
  text: string;
  /** For status 'quran': surah and ayah, fetched verbatim from Tanzil. */
  quran?: { surah: number; ayah: number };
  /** Optional link to the edition used. */
  url?: string;
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
    note: 'Manzil (المنزل) is only ever the Moon\u2019s real place among the 28 mansions: the Moon\u2019s ecliptic longitude, computed with astronomy-engine, falls in one of 28 equal sectors of 12.857\u00b0 counted from 0\u00b0 of the zodiac. Today\u2019s mansion is shown here. A person\u2019s natal mansion needs a birth date, time and place: use Birth profile. The name is not used for the manzil.',
    refs: [
      { status: 'quran', text: 'The Qur\u2019an speaks of the moon\u2019s stations (manāzil):', quran: { surah: 36, ayah: 39 } },
      { status: 'quran', text: 'and in', quran: { surah: 10, ayah: 5 } },
      {
        status: 'cited-in-repo',
        text: 'The list of the 28 mansions cites al-Bīrūnī, Kitāb al-Tafhīm, and Arab anwāʾ astronomy in src/lib/lunarMansions.ts, which also states that 28 equal tropical sectors is the convention used here. Not re-checked.',
      },
      {
        status: 'to-verify',
        text: 'Where the count of the 28 sectors starts (tropical 0\u00b0 Aries here) and whether classical sources use equal sectors: to verify.',
      },
    ],
  },
  lettersMansions: {
    note: 'Each letter of the name is set beside the mansion that al-Būnī\u2019s table gives it, in the Mashriqi abjad order (first to last letter). The table is fixed: it does not change with the Maghribi / Mashriqi setting. It is a spiritual correspondence between letters and the mansions, not an astronomical one (for the Moon\u2019s real position, see Manzil (the Moon)). The mansion is matched to the app\u2019s list by number; a few Arabic spellings differ from the app\u2019s (mansions 1, 9, 16, 26, 27 and 28).',
    refs: [
      {
        status: 'attributed',
        text: 'Attributed to al-Būnī, Shams al-Maʿārif al-Kubrā, ch. 2. Edition: Muʾassasat al-Nūr, Beirut, as on ablibrary.net; the 28 entries were checked on pp. 16 to 19 of that edition.',
        url: 'https://ablibrary.net/book_content/b/10942/16',
      },
    ],
  },
};

export const LABELS = {
  title: { en: 'Show the working + sources', fr: 'Voir le calcul + sources', ar: 'عرض الحساب والمصادر' },
  notCounted: { en: 'not counted', fr: 'non compté', ar: 'لا يُحسب' },
  showSource: { en: 'Show source', fr: 'Voir la source', ar: 'عرض المصدر' },
  hideSource: { en: 'Hide source', fr: 'Masquer la source', ar: 'إخفاء المصدر' },
  attributed: { en: 'attributed', fr: 'attribué', ar: 'منسوب' },
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
    manzil: { en: '6 · Manzil (the Moon)', fr: '6 · Manzil (la Lune)', ar: '٦ · المنزل (القمر)' },
    lettersMansions: { en: 'Letters and their mansions', fr: 'Les lettres et leurs demeures', ar: 'الحروف ومنازلها' },
  } as Record<StepId, L3>,
  manzilToday: { en: 'Today\u2019s manzil', fr: 'Le manzil d\u2019aujourd\u2019hui', ar: 'منزل اليوم' },
  manzilNatal: {
    en: 'Natal manzil (needs birth date, time and place): Birth profile',
    fr: 'Manzil de naissance (date, heure et lieu requis) : Profil de naissance',
    ar: 'منزل الميلاد (يلزم التاريخ والوقت والمكان): الملف الفلكي',
  },
  position: { en: 'mansion', fr: 'demeure', ar: 'المنزلة' },
  order: {
    en: 'Mashriqi abjad order, fixed (independent of your Maghribi / Mashriqi setting)',
    fr: 'Ordre abjad mashriqi, fixe (indépendant de votre réglage maghribi / mashriqi)',
    ar: 'ترتيب الجُمَّل المشرقي، ثابت (لا يتأثر باختيار النظام)',
  },
} satisfies Record<string, L3 | Record<StepId, L3>>;
