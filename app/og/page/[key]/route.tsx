import type { NextRequest } from 'next/server';
import { renderCard } from '@/src/lib/og/card';
import { isOgPageKey, utcYmd } from '@/src/lib/og/urls';
import { cardFor } from './cards';

// Fonts are read from disk and the best-day-for cards reuse the ikhtiyārāt scan.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const YMD = /^\d{4}-\d{2}-\d{2}$/;

/**
 * GET /og/page/<key>?lang=fr&d=YYYY-MM-DD — branded 1200×630 share card for
 * an SEO page. `d` only selects the day for daily cards (today's sadaqa);
 * every word on the card comes from the app's own data, never from the URL.
 */
export async function GET(request: NextRequest, { params }: { params: { key: string } }) {
  if (!isOgPageKey(params.key)) return new Response('Not Found', { status: 404 });
  const lang = request.nextUrl.searchParams.get('lang') === 'fr' ? 'fr' : 'en';
  const d = request.nextUrl.searchParams.get('d');
  const ymd = d && YMD.test(d) && !Number.isNaN(Date.parse(d)) ? d : utcYmd();
  // Daily cards: a dated URL never changes, an undated one is "today" (short cache).
  const cacheSeconds = d ? 86400 : 3600;
  return renderCard(await cardFor(params.key, lang, ymd), cacheSeconds);
}
