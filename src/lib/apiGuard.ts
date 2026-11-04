import { NextRequest, NextResponse } from 'next/server';

/**
 * Small abuse guards for the AI routes: a request-size cap and a simple
 * per-client rate limit. Nothing about the request body is stored or logged.
 *
 * The limiter is in-memory, so on serverless it is per instance: a basic brake
 * against loops and casual abuse, not a hard guarantee. Use a shared store
 * (e.g. Upstash/Vercel KV) if stronger limits are needed.
 */

const buckets = new Map<string, { count: number; resetAt: number }>();
const MAX_BUCKETS = 5000;

function clientKey(request: NextRequest): string {
  const fwd = request.headers.get('x-forwarded-for');
  return (fwd?.split(',')[0] || request.headers.get('x-real-ip') || 'unknown').trim();
}

/** Returns a 429 response when the client is over its limit, otherwise null. */
export function rateLimit(
  request: NextRequest,
  name: string,
  { max = 10, windowMs = 60_000 }: { max?: number; windowMs?: number } = {},
): NextResponse | null {
  const now = Date.now();
  if (buckets.size > MAX_BUCKETS) {
    for (const [k, v] of buckets) if (v.resetAt <= now) buckets.delete(k);
    if (buckets.size > MAX_BUCKETS) buckets.clear();
  }
  const key = `${name}:${clientKey(request)}`;
  const b = buckets.get(key);
  if (!b || b.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return null;
  }
  b.count += 1;
  if (b.count > max) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a moment and try again.' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil((b.resetAt - now) / 1000)) } },
    );
  }
  return null;
}

/**
 * Reads the JSON body but refuses anything larger than maxBytes (checked on the
 * Content-Length header and again on the actual text). Returns the parsed body
 * or an error response.
 */
export async function readJsonCapped(
  request: NextRequest,
  maxBytes = 16_000,
): Promise<{ body: any } | { error: NextResponse }> {
  const tooLarge = () =>
    ({ error: NextResponse.json({ error: 'Request too large.' }, { status: 413 }) }) as const;
  const declared = Number(request.headers.get('content-length') || 0);
  if (declared > maxBytes) return tooLarge();
  const text = await request.text();
  if (text.length > maxBytes) return tooLarge();
  try {
    return { body: JSON.parse(text) };
  } catch {
    return { error: NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 }) };
  }
}
