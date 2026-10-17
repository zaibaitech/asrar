'use client';

import { useCallback, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import { toLang, trackEvent, type Lang, type Tool } from './analytics';

/** /ar and /fr URLs decide the language; otherwise the visitor's UI language. */
function langFor(uiLanguage: string): Lang {
  if (typeof window !== 'undefined') {
    const p = window.location.pathname;
    if (p === '/ar' || p.startsWith('/ar/')) return 'ar';
    if (p === '/ur' || p.startsWith('/ur/')) return 'ur';
    if (p === '/fr' || p.startsWith('/fr/')) return 'fr';
  }
  return toLang(uiLanguage);
}

/**
 * Returns a callback that sends `calculation_complete` {tool, lang}. No user
 * data. Pass a tool to the callback to override the default (multi-tool forms).
 */
export function useTrackCalculation(tool: Tool) {
  const { uiLanguage } = useLanguage();
  // Read at send time, so a language restored just after mount is used.
  const uiRef = useRef(uiLanguage);
  uiRef.current = uiLanguage;
  return useCallback(
    (override?: Tool) => trackEvent('calculation_complete', { tool: override ?? tool, lang: langFor(uiRef.current) }),
    [tool],
  );
}

/**
 * Sends `calculation_complete` whenever `result` changes to a new truthy value
 * (a result appears). `result` is only compared, never sent. With `once`, at
 * most one event per mount (tools that show/refresh a result on their own,
 * such as planetary hours).
 */
export function useTrackResult(tool: Tool, result: unknown, { once = false }: { once?: boolean } = {}) {
  const track = useTrackCalculation(tool);
  const prev = useRef<unknown>(null);
  const sent = useRef(false);
  useEffect(() => {
    if (result && result !== prev.current && !(once && sent.current)) {
      sent.current = true;
      // Next tick: lets the language provider restore the saved language first.
      setTimeout(() => track(), 0);
    }
    prev.current = result;
  }, [result, once, track]);
}

/** The ikhtiyārāt tool is also embedded on /best-day-for/* pages. */
export function useIkhtiyaratTool(): Tool {
  const pathname = usePathname() ?? '';
  return pathname.includes('/best-day-for') ? 'best_day_for' : 'ikhtiyarat';
}
