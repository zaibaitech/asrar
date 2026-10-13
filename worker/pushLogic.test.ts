import { describe, it, expect } from 'vitest';
// @ts-ignore plain JS module bundled into the service worker
import { resolveClickUrl, parsePushPayload, DEFAULT_TITLE } from './pushLogic';

const O = 'https://asrar.app';

describe('resolveClickUrl', () => {
  it('keeps same-origin paths and adds UTM params', () => {
    const u = new URL(resolveClickUrl('/sadaqa?x=1', O, 'sadaqa'));
    expect(u.origin).toBe(O);
    expect(u.pathname).toBe('/sadaqa');
    expect(u.searchParams.get('x')).toBe('1');
    expect(u.searchParams.get('utm_source')).toBe('web_push');
    expect(u.searchParams.get('utm_medium')).toBe('notification');
    expect(u.searchParams.get('utm_campaign')).toBe('sadaqa');
  });
  it('accepts absolute same-origin URLs', () => {
    expect(resolveClickUrl('https://asrar.app/fr/manazil', O)).toMatch(/^https:\/\/asrar\.app\/fr\/manazil\?/);
  });
  it.each(['https://evil.example/x', '//evil.example/x', 'javascript:alert(1)', 'http://asrar.app/x', 'data:text/html,hi'])(
    'rejects cross-origin / unsafe %s',
    (bad) => {
      expect(new URL(resolveClickUrl(bad, O)).pathname).toBe('/');
      expect(new URL(resolveClickUrl(bad, O)).origin).toBe(O);
    },
  );
  it('falls back to / for missing url and sanitises topic', () => {
    const u = new URL(resolveClickUrl(undefined, O, '<script>'));
    expect(u.pathname).toBe('/');
    expect(u.searchParams.get('utm_campaign')).toBe('general');
  });
  it('does not overwrite existing UTM params', () => {
    const u = new URL(resolveClickUrl('/?utm_source=wa', O));
    expect(u.searchParams.get('utm_source')).toBe('wa');
  });
});

describe('parsePushPayload', () => {
  it('parses JSON payloads', () => {
    const { title, options } = parsePushPayload(JSON.stringify({ title: 'Sadaqa', body: 'Today', url: '/sadaqa', topic: 'sadaqa', lang: 'ar' }));
    expect(title).toBe('Sadaqa');
    expect(options.body).toBe('Today');
    expect(options.dir).toBe('rtl');
    expect(options.data).toEqual({ url: '/sadaqa', topic: 'sadaqa' });
  });
  it('tolerates empty and plain-text payloads', () => {
    expect(parsePushPayload('').title).toBe(DEFAULT_TITLE);
    expect(parsePushPayload('hello').options.body).toBe('hello');
    expect(parsePushPayload('').options.data.url).toBe('/');
  });
  it('drops unknown langs and truncates long fields', () => {
    const { title, options } = parsePushPayload(JSON.stringify({ title: 'x'.repeat(500), lang: 'de' }));
    expect(title.length).toBe(120);
    expect(options.lang).toBeUndefined();
  });
});
