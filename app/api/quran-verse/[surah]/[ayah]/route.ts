import { NextResponse } from 'next/server';
import { AYAH_COUNTS } from '@/src/features/ilm-huruf/quranApi';
import tanzil from '@/src/data/tanzil/quran-simple.json';

/**
 * One ayah's Arabic text, served verbatim from the bundled Tanzil Project
 * Quran text (Simple, v1.1, https://tanzil.net). The text is never altered.
 * No upstream request is made and nothing about the request is logged.
 */
const VERSES = tanzil as unknown as Record<string, string>;

export async function GET(_req: Request, context: { params: Promise<{ surah: string; ayah: string }> }) {
  const { surah, ayah } = await context.params;
  const s = Number(surah);
  const a = Number(ayah);
  const text =
    Number.isInteger(s) && Number.isInteger(a) && s >= 1 && s <= 114 && a >= 1 && a <= (AYAH_COUNTS[s] ?? 0)
      ? VERSES[`${s}:${a}`]
      : undefined;
  if (!text) return NextResponse.json({ text: null }, { status: 404 });
  return NextResponse.json(
    { text, source: 'Tanzil Project, quran-simple v1.1 (tanzil.net)' },
    { headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=2592000, immutable' } },
  );
}
