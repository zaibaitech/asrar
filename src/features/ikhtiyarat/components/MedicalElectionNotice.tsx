'use client';

import { useLanguage } from '@/src/contexts/LanguageContext';
import { isMedicalElection, noticeLang } from '../medicalNotice';
import MedicalNoticeText from './MedicalNoticeText';

/** Shown with every medical-election result, in the language of the interface. Wording: ../medicalNotice.ts */
export default function MedicalElectionNotice({ electionType }: { electionType: string }) {
  const { uiLanguage } = useLanguage();
  if (!isMedicalElection(electionType)) return null;
  return <MedicalNoticeText lang={noticeLang(uiLanguage)} />;
}
