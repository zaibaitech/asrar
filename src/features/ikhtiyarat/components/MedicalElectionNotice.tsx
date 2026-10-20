'use client';

import { useLanguage } from '@/src/contexts/LanguageContext';

/** Shown with every medical-election result in Urdu mode. The English wording stays as the source; see docs/i18n. */
export const MEDICAL_NOTICE_UR =
  'طبی علاج کے وقت، انتخاب یا فیصلے کا تعین علمِ نجوم کی بنیاد پر نہ کریں۔ تشخیص اور علاج کے لیے مستند طبی ماہر سے رجوع کریں، اور ضروری طبی امداد میں تاخیر نہ کریں۔ یہ نتیجہ روایتی علمِ نجوم کی تعبیر ہے، کوئی طبی پیش گوئی نہیں۔';

export default function MedicalElectionNotice({ electionType }: { electionType: string }) {
  const { uiLanguage } = useLanguage();
  if (electionType !== 'medical' || uiLanguage !== 'ur') return null;
  return (
    <p
      role="note"
      data-testid="medical-election-notice"
      className="rounded-xl border border-amber-300 dark:border-amber-500/50 bg-amber-50 dark:bg-amber-500/10 p-3 text-xs leading-relaxed text-amber-900 dark:text-amber-200"
    >
      {MEDICAL_NOTICE_UR}
    </p>
  );
}
