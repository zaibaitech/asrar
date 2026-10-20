/**
 * Medical-election safety wording: the single source of truth for every surface that shows a medical
 * tier, score or timing claim (in-app views, shared-result page and its metadata, share text, share card).
 *
 * Status of the texts (see docs/i18n/ur-review.md, Phase 13):
 *  - ur.long is the notice written for the Urdu interface in Phase 10 and is unchanged.
 *  - Every other text is an AI DRAFT. None has been approved by a medical professional or a native-language
 *    reviewer; French and Arabic in particular need qualified language review.
 *
 * Meaning shared by all languages: astrology gives a traditional interpretation, not a clinically validated
 * medical prediction; it must not be used to choose, delay, stop or replace treatment; consult a qualified
 * health professional and do not delay necessary care. (The Urdu long text predates the "stop or replace"
 * clause and says the same without it.)
 */

export type NoticeLang = 'en' | 'ur' | 'fr' | 'ar';

export const MEDICAL_NOTICE_STATUS = 'draft: not approved by a medical professional or a native-language reviewer' as const;

export const MEDICAL_NOTICE: Record<NoticeLang, { long: string; short: string; occasion: string }> = {
  en: {
    long: 'Astrology cannot tell you when, whether or how to have medical treatment or surgery, and it must not be used to choose, delay, stop or replace treatment. Consult a qualified healthcare professional, and do not delay necessary care. This result is a traditional astrological interpretation, not a clinically validated medical prediction.',
    short: 'Traditional astrological reading — not medical advice.',
    occasion: 'Medical treatment · traditional reading',
  },
  ur: {
    long: 'طبی علاج کے وقت، انتخاب یا فیصلے کا تعین علمِ نجوم کی بنیاد پر نہ کریں۔ تشخیص اور علاج کے لیے مستند طبی ماہر سے رجوع کریں، اور ضروری طبی امداد میں تاخیر نہ کریں۔ یہ نتیجہ روایتی علمِ نجوم کی تعبیر ہے، کوئی طبی پیش گوئی نہیں۔',
    short: 'روایتی نجومی تعبیر — طبی مشورہ نہیں۔',
    occasion: 'طبی علاج · روایتی تعبیر',
  },
  fr: {
    long: "L'astrologie ne peut pas indiquer quand, si ou comment se faire soigner ou opérer, et ne doit pas servir à choisir, retarder, arrêter ou remplacer un traitement. Consultez un professionnel de santé qualifié et ne retardez pas les soins nécessaires. Ce résultat est une interprétation astrologique traditionnelle, et non une prédiction médicale validée cliniquement.",
    short: 'Lecture astrologique traditionnelle — pas un avis médical.',
    occasion: 'Traitement médical · lecture traditionnelle',
  },
  ar: {
    long: 'لا يمكن لعلم النجوم أن يحدّد وقت العلاج الطبي أو الجراحة أو ما إذا كان ينبغي إجراؤهما، ولا يجوز استخدامه لاختيار العلاج أو تأخيره أو إيقافه أو الاستعاضة عنه. راجع مختصًا صحيًا مؤهلًا، ولا تؤخّر الرعاية الطبية الضرورية. هذه النتيجة تفسير فلكي تقليدي، وليست تنبؤًا طبيًا مثبتًا سريريًا.',
    short: 'قراءة فلكية تقليدية — وليست نصيحة طبية.',
    occasion: 'العلاج الطبي · قراءة تقليدية',
  },
};

/** The share card is drawn with a Latin-only font, so only English and French exist there. */
const OG_CAUTION = {
  en: 'Traditional reading, not medical advice',
  fr: 'Lecture traditionnelle, pas un avis médical',
} as const;

export const noticeLang = (ui: string | undefined): NoticeLang => (ui === 'ur' || ui === 'fr' || ui === 'ar' ? ui : 'en');
export const isRtlNotice = (lang: NoticeLang) => lang === 'ur' || lang === 'ar';
export const isMedicalElection = (electionType: string | undefined) => electionType === 'medical';

/** Metadata description: unchanged for every election type except medical, which gets the short caution appended. */
export function descriptionWithCaution(description: string, electionType: string | undefined, lang: 'en' | 'fr'): string {
  return isMedicalElection(electionType) ? `${description} ${MEDICAL_NOTICE[lang].short}` : description;
}

/** Share text: unchanged except for medical results. */
export function shareTextFor(p: { dateOnly: string; tierLabel: string; score: number; electionType: string; language: 'en' | 'fr' }): string {
  const base = `${p.dateOnly} — ${p.tierLabel} (${p.score}/100)`;
  return isMedicalElection(p.electionType) ? `${base}. ${MEDICAL_NOTICE[p.language].short}` : base;
}

/** Share-card footer: unchanged except for medical results. */
export function ogFooterFor(baseFooter: string, electionType: string | undefined, lang: 'en' | 'fr'): string {
  return isMedicalElection(electionType) ? `${OG_CAUTION[lang]} · ${baseFooter}` : baseFooter;
}
