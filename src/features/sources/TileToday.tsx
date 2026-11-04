'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { LABELS } from './sourcesContent';

/** " · today" in the visitor's UI language (en, fr, ar, ur). Preview only. */
export function TileToday() {
  const { uiLanguage } = useLanguage();
  return <>{LABELS.tileToday[uiLanguage]}</>;
}
