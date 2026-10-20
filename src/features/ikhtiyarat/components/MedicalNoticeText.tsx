import { MEDICAL_NOTICE, isRtlNotice, type NoticeLang } from '../medicalNotice';

/** The notice itself: no hooks, so it renders in client views and in the server-rendered shared-result page. */
export default function MedicalNoticeText({ lang }: { lang: NoticeLang }) {
  const rtl = isRtlNotice(lang);
  return (
    <p
      role="note"
      data-testid="medical-election-notice"
      lang={lang}
      dir={rtl ? 'rtl' : 'ltr'}
      className="rounded-xl border border-amber-300 dark:border-amber-500/50 bg-amber-50 dark:bg-amber-500/10 p-3 text-xs leading-relaxed text-amber-900 dark:text-amber-200 text-start break-words"
    >
      {MEDICAL_NOTICE[lang].long}
    </p>
  );
}
