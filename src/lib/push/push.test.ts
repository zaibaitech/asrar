import { describe, it, expect } from 'vitest';
import { getPushConfig, isPushEnabled } from './config';
import { validateSubscribeBody, validateEndpoint } from './validation';
import { createRateLimiter } from './rateLimit';
import fs from 'fs';
import path from 'path';

const KEYS = { p256dh: 'B'.repeat(87), auth: 'a1b2c3d4e5f6g7h8i9j0kw' };
const SUB = { endpoint: 'https://fcm.googleapis.com/fcm/send/abc123', keys: KEYS };
const FULL_ENV = {
  NEXT_PUBLIC_VAPID_PUBLIC_KEY: 'pub', VAPID_PRIVATE_KEY: 'priv', VAPID_SUBJECT: 'mailto:x@y.z',
  NEXT_PUBLIC_SUPABASE_URL: 'https://x.supabase.co', SUPABASE_SERVICE_ROLE_KEY: 'svc',
} as unknown as NodeJS.ProcessEnv;

describe('push config', () => {
  it('is off when any VAPID var is missing', () => {
    expect(getPushConfig({} as NodeJS.ProcessEnv)).toBeNull();
    expect(isPushEnabled({ ...FULL_ENV, VAPID_PRIVATE_KEY: '' })).toBe(false);
    expect(isPushEnabled({ ...FULL_ENV, VAPID_SUBJECT: undefined })).toBe(false);
  });
  it('is off without the service-role key (never falls back to anon)', () => {
    expect(isPushEnabled({ ...FULL_ENV, SUPABASE_SERVICE_ROLE_KEY: undefined })).toBe(false);
  });
  it('is on with all vars; CRON_SECRET optional', () => {
    expect(isPushEnabled(FULL_ENV)).toBe(true);
    expect(getPushConfig(FULL_ENV)?.cronSecret).toBeNull();
    expect(getPushConfig({ ...FULL_ENV, CRON_SECRET: 's' })?.cronSecret).toBe('s');
  });
});

describe('validateSubscribeBody', () => {
  it('applies defaults', () => {
    const r = validateSubscribeBody({ subscription: SUB });
    expect(r).toEqual({ ok: true, value: { endpoint: SUB.endpoint, ...KEYS, timezone: 'UTC', locale: 'en', topics: ['sadaqa'], delivery_hour: 7 } });
  });
  it('accepts full valid input and dedupes topics', () => {
    const r = validateSubscribeBody({ subscription: SUB, timezone: 'Africa/Lagos', locale: 'ar', topics: ['sadaqa', 'manzil', 'sadaqa'], deliveryHour: 21 });
    expect(r.ok && r.value).toMatchObject({ timezone: 'Africa/Lagos', locale: 'ar', topics: ['sadaqa', 'manzil'], delivery_hour: 21 });
  });
  it.each([
    [null], ['str'], [{}],
    [{ subscription: { ...SUB, endpoint: 'http://insecure.example/x' } }],
    [{ subscription: { ...SUB, endpoint: 'not a url' } }],
    [{ subscription: { ...SUB, endpoint: 'https://' + 'a'.repeat(1001) } }],
    [{ subscription: { endpoint: SUB.endpoint } }],
    [{ subscription: { ...SUB, keys: { p256dh: 'short', auth: KEYS.auth } } }],
    [{ subscription: { ...SUB, keys: { ...KEYS, auth: 'bad auth!!' } } }],
    [{ subscription: SUB, timezone: 'Mars/Olympus' }],
    [{ subscription: SUB, locale: 'de' }],
    [{ subscription: SUB, topics: ['spam'] }],
    [{ subscription: SUB, topics: [] }],
    [{ subscription: SUB, deliveryHour: 23 }],
    [{ subscription: SUB, deliveryHour: 3 }],
    [{ subscription: SUB, deliveryHour: 7.5 }],
  ])('rejects %j', (body) => {
    expect(validateSubscribeBody(body).ok).toBe(false);
  });
  it('never passes through extra fields (no PII stored)', () => {
    const r = validateSubscribeBody({ subscription: SUB, email: 'a@b.c', userId: 'u1', lat: 1, lng: 2 });
    expect(r.ok && Object.keys(r.value).sort()).toEqual(['auth', 'delivery_hour', 'endpoint', 'locale', 'p256dh', 'timezone', 'topics']);
  });
  it('validateEndpoint rejects credentials in URL', () => {
    expect(validateEndpoint('https://u:p@push.example/x').ok).toBe(false);
  });
});

describe('rate limiter', () => {
  it('allows up to the limit per window then resets', () => {
    const check = createRateLimiter(2, 1000);
    expect([check('a', 0), check('a', 1), check('a', 2), check('b', 2)]).toEqual([true, true, false, true]);
    expect(check('a', 1001)).toBe(true);
  });
});

describe('migration 009_create_push_subscriptions.sql', () => {
  const sql = fs.readFileSync(path.join(__dirname, '../../../supabase/migrations/009_create_push_subscriptions.sql'), 'utf8').replace(/--.*$/gm, '');
  it('has required columns, unique endpoint and RLS with no client policies', () => {
    for (const col of ['endpoint TEXT NOT NULL UNIQUE', 'p256dh', 'auth', 'timezone', 'locale', 'topics', 'delivery_hour', 'created_at'])
      expect(sql).toContain(col);
    expect(sql).toMatch(/ENABLE ROW LEVEL SECURITY/);
    expect(sql).not.toMatch(/CREATE POLICY/i);
    expect(sql).toMatch(/REVOKE ALL ON public\.push_subscriptions FROM anon, authenticated/);
  });
  it('stores no user id or location', () => {
    expect(sql).not.toMatch(/user_id|latitude|longitude|\blat\b|\blng\b|email|ip_address/i);
  });
});
