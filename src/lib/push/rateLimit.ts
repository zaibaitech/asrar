/**
 * Minimal fixed-window, in-memory rate limiter (per serverless instance).
 * The repo had no existing rate-limit helper; this is best-effort abuse
 * protection, not a global guarantee. Swap for a shared store if needed.
 */
export function createRateLimiter(limit: number, windowMs: number, maxKeys = 5000) {
  const hits = new Map<string, { count: number; resetAt: number }>();
  return function check(key: string, now = Date.now()): boolean {
    const entry = hits.get(key);
    if (!entry || entry.resetAt <= now) {
      if (hits.size >= maxKeys) {
        for (const [k, v] of hits) if (v.resetAt <= now) hits.delete(k);
        if (hits.size >= maxKeys) hits.clear();
      }
      hits.set(key, { count: 1, resetAt: now + windowMs });
      return true;
    }
    entry.count += 1;
    return entry.count <= limit;
  };
}

export function clientKey(headers: Headers): string {
  const fwd = headers.get('x-forwarded-for');
  return (fwd ? fwd.split(',')[0].trim() : headers.get('x-real-ip')) || 'unknown';
}
