export const PUSH_TOPICS = ['sadaqa', 'planetary', 'manzil', 'best-day'] as const;
export const PUSH_LOCALES = ['en', 'fr', 'ar'] as const;
export type PushTopic = (typeof PUSH_TOPICS)[number];
export type PushLocale = (typeof PUSH_LOCALES)[number];

export interface SubscriptionRow {
  endpoint: string;
  p256dh: string;
  auth: string;
  timezone: string;
  locale: PushLocale;
  topics: PushTopic[];
  delivery_hour: number;
}

type Result<T> = { ok: true; value: T } | { ok: false; error: string };

const B64URL = /^[A-Za-z0-9_-]+=*$/;

export function validateEndpoint(value: unknown): Result<string> {
  if (typeof value !== 'string' || value.length === 0 || value.length > 1000) return { ok: false, error: 'Invalid endpoint' };
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return { ok: false, error: 'Invalid endpoint' };
  }
  if (url.protocol !== 'https:' || url.username || url.password) return { ok: false, error: 'Invalid endpoint' };
  return { ok: true, value: url.href };
}

function isValidTimezone(tz: string): boolean {
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: tz });
    return true;
  } catch {
    return false;
  }
}

/** Validate a POST body: { subscription: PushSubscriptionJSON, timezone?, locale?, topics?, deliveryHour? } */
export function validateSubscribeBody(body: unknown): Result<SubscriptionRow> {
  if (!body || typeof body !== 'object') return { ok: false, error: 'Invalid body' };
  const b = body as Record<string, unknown>;
  const sub = b.subscription as Record<string, unknown> | undefined;
  if (!sub || typeof sub !== 'object') return { ok: false, error: 'Missing subscription' };

  const endpoint = validateEndpoint(sub.endpoint);
  if (!endpoint.ok) return endpoint;

  const keys = sub.keys as Record<string, unknown> | undefined;
  const p256dh = keys?.p256dh;
  const auth = keys?.auth;
  if (typeof p256dh !== 'string' || p256dh.length < 20 || p256dh.length > 200 || !B64URL.test(p256dh))
    return { ok: false, error: 'Invalid keys' };
  if (typeof auth !== 'string' || auth.length < 8 || auth.length > 100 || !B64URL.test(auth))
    return { ok: false, error: 'Invalid keys' };

  let timezone = 'UTC';
  if (b.timezone !== undefined) {
    if (typeof b.timezone !== 'string' || b.timezone.length > 64 || !isValidTimezone(b.timezone))
      return { ok: false, error: 'Invalid timezone' };
    timezone = b.timezone;
  }

  let locale: PushLocale = 'en';
  if (b.locale !== undefined) {
    if (!(PUSH_LOCALES as readonly unknown[]).includes(b.locale)) return { ok: false, error: 'Invalid locale' };
    locale = b.locale as PushLocale;
  }

  let topics: PushTopic[] = ['sadaqa'];
  if (b.topics !== undefined) {
    if (!Array.isArray(b.topics) || b.topics.length === 0 || b.topics.length > PUSH_TOPICS.length)
      return { ok: false, error: 'Invalid topics' };
    if (!b.topics.every((t) => (PUSH_TOPICS as readonly unknown[]).includes(t))) return { ok: false, error: 'Invalid topics' };
    topics = Array.from(new Set(b.topics as PushTopic[]));
  }

  let delivery_hour = 7;
  if (b.deliveryHour !== undefined) {
    const h = b.deliveryHour;
    // Quiet hours 22:00–06:00 are never selectable.
    if (typeof h !== 'number' || !Number.isInteger(h) || h < 6 || h > 21) return { ok: false, error: 'Invalid deliveryHour' };
    delivery_hour = h;
  }

  return {
    ok: true,
    value: { endpoint: endpoint.value, p256dh, auth, timezone, locale, topics, delivery_hour },
  };
}
