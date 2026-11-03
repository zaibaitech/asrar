import { describe, it, expect } from 'vitest';
import { NextRequest } from 'next/server';
import { rateLimit, readJsonCapped } from './apiGuard';

const req = (body: string, headers: Record<string, string> = {}) =>
  new NextRequest('http://localhost/api/x', { method: 'POST', body, headers });

describe('apiGuard', () => {
  it('rate limits per client after max requests, with Retry-After', () => {
    const h = { 'x-forwarded-for': '203.0.113.7' };
    const results = Array.from({ length: 4 }, () => rateLimit(req('{}', h), 'test-a', { max: 3, windowMs: 60_000 }));
    expect(results.slice(0, 3).every((r) => r === null)).toBe(true);
    expect(results[3]?.status).toBe(429);
    expect(results[3]?.headers.get('Retry-After')).toBeTruthy();
  });

  it('keeps separate buckets per client and per route', () => {
    expect(rateLimit(req('{}', { 'x-forwarded-for': '198.51.100.1' }), 'test-b', { max: 1 })).toBeNull();
    expect(rateLimit(req('{}', { 'x-forwarded-for': '198.51.100.2' }), 'test-b', { max: 1 })).toBeNull();
    expect(rateLimit(req('{}', { 'x-forwarded-for': '198.51.100.1' }), 'test-c', { max: 1 })).toBeNull();
  });

  it('rejects oversized bodies with 413 and bad JSON with 400, accepts small JSON', async () => {
    const big = await readJsonCapped(req(JSON.stringify({ a: 'x'.repeat(200) })), 100);
    expect('error' in big && big.error.status).toBe(413);
    const bad = await readJsonCapped(req('{not json'), 100);
    expect('error' in bad && bad.error.status).toBe(400);
    const ok = await readJsonCapped(req('{"a":1}'), 100);
    expect('body' in ok && ok.body).toEqual({ a: 1 });
  });
});
