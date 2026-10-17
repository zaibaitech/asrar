/**
 * Privacy-safe GA4 custom events (G-VTWVCR2EJN, loaded in app/layout.tsx).
 *
 * STRICT RULE: events carry only the fixed enum values below. Never names,
 * mother's names, dates of birth, locations, typed text, results or any other
 * user input. Every param is checked against EVENT_SCHEMA: unknown keys and
 * values outside the allow-list are dropped before anything is sent, so a
 * caller cannot leak user data even by mistake.
 *
 * No-ops on the server and when gtag is absent (blocked, not loaded yet).
 * The event name is also sent to Microsoft Clarity as a custom event (name
 * only, no params) so sessions can be filtered by it.
 */

export const TOOLS = [
  'burj',
  'compatibility',
  'abjad',
  'ikhtiyarat',
  'planetary_hours',
  'planet_of_the_day',
  'manazil',
  'sadaqa',
  'best_day_for',
  'birth_profile',
  'planet_transit',
  'ilm_huruf',
  'divine_names',
  'dhikr',
  'ramadan',
] as const;
export type Tool = (typeof TOOLS)[number];

export const LANGS = ['en', 'fr', 'ar', 'ur'] as const;
export type Lang = (typeof LANGS)[number];

export const SHARE_METHODS = ['native', 'copy_link', 'whatsapp', 'telegram', 'twitter', 'facebook'] as const;
export type ShareMethod = (typeof SHARE_METHODS)[number];

export const STORES = ['google_play'] as const;
export type Store = (typeof STORES)[number];

/** Allowed params per event, each with its allowed values. Anything else is stripped. */
export const EVENT_SCHEMA = {
  calculation_complete: { tool: TOOLS, lang: LANGS },
  share_click: { tool: TOOLS, method: SHARE_METHODS },
  language_switch: { from: LANGS, to: LANGS },
  related_tool_click: { from_tool: TOOLS, to_tool: TOOLS },
  install_app_click: { store: STORES },
} as const satisfies Record<string, Record<string, readonly string[]>>;

export type EventName = keyof typeof EVENT_SCHEMA;
export type EventParams<E extends EventName> = {
  [K in keyof (typeof EVENT_SCHEMA)[E]]: (typeof EVENT_SCHEMA)[E][K] extends readonly (infer V)[] ? V : never;
};

/**
 * Keep only allow-listed keys whose value is one of that key's allowed
 * values. Returns null for an unknown event name (nothing is sent).
 */
export function sanitizeEventParams(name: string, params: unknown): Record<string, string> | null {
  if (!Object.prototype.hasOwnProperty.call(EVENT_SCHEMA, name)) return null;
  const schema = EVENT_SCHEMA[name as EventName] as Record<string, readonly string[]>;
  const out: Record<string, string> = {};
  if (params && typeof params === 'object') {
    for (const [key, value] of Object.entries(params as Record<string, unknown>)) {
      if (!Object.prototype.hasOwnProperty.call(schema, key)) continue;
      if (typeof value === 'string' && schema[key].includes(value)) out[key] = value;
    }
  }
  return out;
}

type Gtag = (command: 'event', name: string, params: Record<string, string>) => void;
type Clarity = (command: 'event', name: string) => void;

/** Send a GA4 custom event (sanitized). Safe to call anywhere; never throws. */
export function trackEvent<E extends EventName>(name: E, params: EventParams<E>): void {
  if (typeof window === 'undefined') return;
  try {
    const clean = sanitizeEventParams(name, params);
    if (!clean) return;
    const w = window as unknown as { gtag?: Gtag; clarity?: Clarity };
    if (typeof w.gtag === 'function') w.gtag('event', name, clean);
    if (typeof w.clarity === 'function') w.clarity('event', name);
  } catch {
    /* analytics must never break the page */
  }
}

/** UI language for event params: en, fr or ar (anything else counts as en). */
export function toLang(lang: string | undefined | null): Lang {
  return lang === 'fr' || lang === 'ar' || lang === 'ur' ? lang : 'en';
}

/** Share method for the common "navigator.share, else copy to clipboard" pattern. */
export function nativeOrCopy(): ShareMethod {
  return typeof navigator !== 'undefined' && typeof navigator.share === 'function' ? 'native' : 'copy_link';
}
