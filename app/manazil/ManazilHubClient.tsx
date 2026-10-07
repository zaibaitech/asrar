'use client';

import { ManzilOfTodayCard } from '@/src/components/planetary/ManzilOfTodayCard';

export function ManazilHubClient({ language }: { language: 'en' | 'fr' }) {
  return <ManzilOfTodayCard language={language} allowExpand />;
}
