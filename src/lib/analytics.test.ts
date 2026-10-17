import { afterEach, describe, expect, it, vi } from 'vitest';
import { EVENT_SCHEMA, sanitizeEventParams, trackEvent } from './analytics';

describe('analytics allow-list', () => {
  it('keeps allow-listed enum params', () => {
    expect(sanitizeEventParams('calculation_complete', { tool: 'burj', lang: 'ar' })).toEqual({ tool: 'burj', lang: 'ar' });
    expect(sanitizeEventParams('share_click', { tool: 'burj', method: 'whatsapp' })).toEqual({ tool: 'burj', method: 'whatsapp' });
    expect(sanitizeEventParams('language_switch', { from: 'en', to: 'fr' })).toEqual({ from: 'en', to: 'fr' });
    expect(sanitizeEventParams('related_tool_click', { from_tool: 'burj', to_tool: 'abjad' })).toEqual({ from_tool: 'burj', to_tool: 'abjad' });
    expect(sanitizeEventParams('install_app_click', { store: 'google_play' })).toEqual({ store: 'google_play' });
  });

  it('strips any param that is not on the allow-list (user input never gets through)', () => {
    const leaky = {
      tool: 'burj',
      lang: 'en',
      name: 'محمد',
      mother_name: 'فاطمة',
      dob: '1990-01-01',
      location: '14.69,-17.44',
      latitude: 14.69,
      text: 'anything typed',
      result: 'Aquarius',
      page_location: 'https://www.asrar.app/?name=x',
    };
    expect(sanitizeEventParams('calculation_complete', leaky)).toEqual({ tool: 'burj', lang: 'en' });
  });

  it('strips allow-listed keys whose value is not one of the fixed enums', () => {
    expect(sanitizeEventParams('calculation_complete', { tool: 'محمد', lang: 'xx' })).toEqual({});
    expect(sanitizeEventParams('share_click', { tool: 'burj', method: 'https://evil.example/?q=name' })).toEqual({ tool: 'burj' });
    expect(sanitizeEventParams('calculation_complete', { tool: { toString: () => 'burj' }, lang: 1 })).toEqual({});
  });

  it('rejects unknown event names and inherited keys', () => {
    expect(sanitizeEventParams('user_name_entered', { tool: 'burj' })).toBeNull();
    expect(sanitizeEventParams('__proto__', {})).toBeNull();
    expect(sanitizeEventParams('toString', {})).toBeNull();
    expect(sanitizeEventParams('calculation_complete', Object.create({ tool: 'burj' }))).toEqual({});
  });

  it('allow-list only contains short fixed identifiers', () => {
    for (const params of Object.values(EVENT_SCHEMA)) {
      for (const values of Object.values(params)) {
        for (const v of values as readonly string[]) expect(v).toMatch(/^[a-z_]{2,20}$/);
      }
    }
  });
});

describe('trackEvent', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('no-ops when window / gtag are absent', () => {
    expect(() => trackEvent('calculation_complete', { tool: 'burj', lang: 'en' })).not.toThrow();
    vi.stubGlobal('window', {});
    expect(() => trackEvent('calculation_complete', { tool: 'burj', lang: 'en' })).not.toThrow();
  });

  it('sends only sanitized params to gtag, and the bare name to Clarity', () => {
    const gtag = vi.fn();
    const clarity = vi.fn();
    vi.stubGlobal('window', { gtag, clarity });
    trackEvent('calculation_complete', { tool: 'burj', lang: 'fr', name: 'Fatima' } as never);
    expect(gtag).toHaveBeenCalledWith('event', 'calculation_complete', { tool: 'burj', lang: 'fr' });
    expect(clarity).toHaveBeenCalledWith('event', 'calculation_complete');
  });
});
