import type { DeepPartial } from './types';

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

/** Deep-merge a partial locale over the base (English): missing keys fall back to the base value. */
export function withFallback<T>(base: T, partial: DeepPartial<T> | undefined): T {
  if (!isPlainObject(base) || !isPlainObject(partial)) {
    return (partial === undefined || partial === null || partial === '' ? base : partial) as T;
  }
  const out: Record<string, unknown> = { ...base };
  for (const k of Object.keys(partial)) {
    if (!(k in base)) continue;
    out[k] = withFallback((base as Record<string, unknown>)[k], (partial as Record<string, unknown>)[k] as never);
  }
  return out as T;
}
