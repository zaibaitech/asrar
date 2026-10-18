'use client';

import { ManzilOfTodayCard } from '@/src/components/planetary/ManzilOfTodayCard';
import { useTrackResult } from '@/src/lib/useAnalytics';

export function ManazilHubClient({ language }: { language: 'en' | 'fr' }) {
  // Today's manzil card is the hub's result.
  useTrackResult('manazil', true, { once: true });
  return <ManzilOfTodayCard language={language} allowExpand />;
}
