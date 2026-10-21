'use client';

import type { ReactNode } from 'react';
import { useLanguage } from '@/src/contexts/LanguageContext';

/**
 * Server pages render English (that is what crawlers and the other languages get). In Urdu mode this swaps in a whole
 * Urdu fragment: for sentences assembled from names and numbers across several text nodes, which the DOM catalog
 * cannot translate without scrambling the right-to-left order.
 */
export default function ByUiLanguage({ ur, children }: { ur: ReactNode; children: ReactNode }) {
  const { uiLanguage } = useLanguage();
  return <>{uiLanguage === 'ur' ? ur : children}</>;
}
