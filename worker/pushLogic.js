// Pure helpers for the push service-worker handlers (worker/index.js).
// Kept free of `self` so they can be unit-tested in Node (worker/pushLogic.test.ts).

export const DEFAULT_TITLE = 'Asrār';
export const DEFAULT_ICON = '/icons/icon-192x192.png';
export const DEFAULT_BADGE = '/icons/icon-72x72.png';

/**
 * Resolve a notification target URL. Only same-origin URLs are allowed;
 * anything else (other origins, javascript:, malformed) falls back to "/".
 * UTM params are added unless already present.
 */
export function resolveClickUrl(rawUrl, origin, topic) {
  let url;
  try {
    url = new URL(typeof rawUrl === 'string' && rawUrl ? rawUrl : '/', origin);
  } catch (e) {
    url = new URL('/', origin);
  }
  if (url.origin !== new URL(origin).origin) url = new URL('/', origin);
  const p = url.searchParams;
  if (!p.has('utm_source')) p.set('utm_source', 'web_push');
  if (!p.has('utm_medium')) p.set('utm_medium', 'notification');
  if (!p.has('utm_campaign')) {
    const t = typeof topic === 'string' && /^[a-z0-9_-]{1,40}$/i.test(topic) ? topic : 'general';
    p.set('utm_campaign', t);
  }
  return url.href;
}

/** Parse a push payload (JSON preferred, plain text tolerated) into showNotification args. */
export function parsePushPayload(text) {
  let data = {};
  if (typeof text === 'string' && text) {
    try {
      const parsed = JSON.parse(text);
      data = parsed && typeof parsed === 'object' ? parsed : { body: String(parsed) };
    } catch (e) {
      data = { body: text };
    }
  }
  const str = (v, max) => (typeof v === 'string' && v.trim() ? v.trim().slice(0, max) : undefined);
  const title = str(data.title, 120) || DEFAULT_TITLE;
  const options = {
    body: str(data.body, 400) || '',
    icon: str(data.icon, 300) || DEFAULT_ICON,
    badge: DEFAULT_BADGE,
    tag: str(data.tag, 64),
    lang: ['en', 'fr', 'ar'].includes(data.lang) ? data.lang : undefined,
    dir: data.lang === 'ar' ? 'rtl' : 'auto',
    data: { url: str(data.url, 500) || '/', topic: str(data.topic, 40) || 'general' },
  };
  Object.keys(options).forEach((k) => options[k] === undefined && delete options[k]);
  return { title, options };
}
