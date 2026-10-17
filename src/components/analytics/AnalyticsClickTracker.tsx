'use client';

import { useEffect } from 'react';
import { TOOLS, trackEvent, type Tool } from '@/src/lib/analytics';

const isTool = (v: string | undefined): v is Tool => !!v && (TOOLS as readonly string[]).includes(v);

/**
 * One delegated click listener (renders nothing) for links that are plain
 * server-rendered anchors:
 * - Related tools block: <a data-rt-from data-rt-to> -> related_tool_click
 * - Any Google Play link to the Asrār app -> install_app_click {store: google_play}
 * Only fixed ids are sent; never the URL, link text or anything typed.
 */
export default function AnalyticsClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a');
      if (!a) return;
      const from = a.getAttribute('data-rt-from') ?? undefined;
      const to = a.getAttribute('data-rt-to') ?? undefined;
      if (isTool(from) && isTool(to)) {
        trackEvent('related_tool_click', { from_tool: from, to_tool: to });
        return;
      }
      if ((a.getAttribute('href') ?? '').startsWith('https://play.google.com/store/apps/details?id=com.zaibaitech.asrariya')) {
        trackEvent('install_app_click', { store: 'google_play' });
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);
  return null;
}
