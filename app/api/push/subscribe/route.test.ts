import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { NextRequest } from 'next/server';

const upsert = vi.fn();
const del = vi.fn();
const eq = vi.fn();
const from = vi.fn(() => ({ upsert, delete: del }));
const createClient = vi.fn((..._a: unknown[]) => ({ from }));
vi.mock('@supabase/supabase-js', () => ({ createClient: (...a: unknown[]) => createClient(...a) }));

const SUB = { endpoint: 'https://fcm.googleapis.com/fcm/send/abc', keys: { p256dh: 'B'.repeat(87), auth: 'a1b2c3d4e5f6g7h8' } };
const ENV = {
  NEXT_PUBLIC_VAPID_PUBLIC_KEY: 'pub', VAPID_PRIVATE_KEY: 'priv', VAPID_SUBJECT: 'mailto:x@y.z',
  NEXT_PUBLIC_SUPABASE_URL: 'https://x.supabase.co', SUPABASE_SERVICE_ROLE_KEY: 'svc',
};
let ip = 0;
const req = (method: string, body: unknown, raw?: string) =>
  new NextRequest('https://asrar.app/api/push/subscribe', {
    method, body: raw ?? JSON.stringify(body), headers: { 'x-forwarded-for': `10.0.0.${++ip}` },
  });

async function load() {
  vi.resetModules();
  return import('./route');
}

beforeEach(() => {
  vi.clearAllMocks();
  upsert.mockResolvedValue({ error: null });
  del.mockReturnValue({ eq });
  eq.mockResolvedValue({ error: null });
});
afterEach(() => vi.unstubAllEnvs());

describe('feature off (env vars missing)', () => {
  it('POST and DELETE no-op without touching Supabase', async () => {
    for (const k of Object.keys(ENV)) vi.stubEnv(k, '');
    const { POST, DELETE } = await load();
    for (const res of [await POST(req('POST', { subscription: SUB })), await DELETE(req('DELETE', { endpoint: SUB.endpoint }))]) {
      expect(res.status).toBe(200);
      expect(await res.json()).toEqual({ success: false, enabled: false });
    }
    expect(createClient).not.toHaveBeenCalled();
  });
});

describe('feature on', () => {
  beforeEach(() => { for (const [k, v] of Object.entries(ENV)) vi.stubEnv(k, v); });

  it('POST upserts validated row on endpoint conflict using the service-role key', async () => {
    const { POST } = await load();
    const res = await POST(req('POST', { subscription: SUB, locale: 'fr', email: 'x@y.z' }));
    expect(res.status).toBe(200);
    expect(createClient).toHaveBeenCalledWith(ENV.NEXT_PUBLIC_SUPABASE_URL, 'svc', expect.anything());
    expect(from).toHaveBeenCalledWith('push_subscriptions');
    const [row, opts] = upsert.mock.calls[0];
    expect(opts).toEqual({ onConflict: 'endpoint' });
    expect(row).toMatchObject({ endpoint: SUB.endpoint, locale: 'fr', topics: ['sadaqa'], delivery_hour: 7 });
    expect(row).not.toHaveProperty('email');
  });

  it('POST rejects invalid input and bad JSON with 400', async () => {
    const { POST } = await load();
    expect((await POST(req('POST', { subscription: { endpoint: 'http://x' } }))).status).toBe(400);
    expect((await POST(req('POST', null, '{not json'))).status).toBe(400);
    expect((await POST(req('POST', null, JSON.stringify({ subscription: SUB, pad: 'x'.repeat(5000) })))).status).toBe(400);
    expect(upsert).not.toHaveBeenCalled();
  });

  it('POST returns 500 on DB error without leaking details', async () => {
    upsert.mockResolvedValue({ error: { message: 'secret detail' } });
    const { POST } = await load();
    const res = await POST(req('POST', { subscription: SUB }));
    expect(res.status).toBe(500);
    expect(JSON.stringify(await res.json())).not.toContain('secret');
  });

  it('DELETE removes by endpoint', async () => {
    const { DELETE } = await load();
    const res = await DELETE(req('DELETE', { endpoint: SUB.endpoint }));
    expect(res.status).toBe(200);
    expect(eq).toHaveBeenCalledWith('endpoint', SUB.endpoint);
    expect((await DELETE(req('DELETE', { endpoint: 'javascript:1' }))).status).toBe(400);
  });

  it('rate limits per client IP (429 after 10/min)', async () => {
    const { POST } = await load();
    const same = () => new NextRequest('https://asrar.app/api/push/subscribe', { method: 'POST', body: JSON.stringify({ subscription: SUB }), headers: { 'x-forwarded-for': '9.9.9.9' } });
    const codes: number[] = [];
    for (let i = 0; i < 11; i++) codes.push((await POST(same())).status);
    expect(codes.slice(0, 10).every((c) => c === 200)).toBe(true);
    expect(codes[10]).toBe(429);
  });
});
