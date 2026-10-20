import { describe, it, expect } from 'vitest';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import SupabaseConfigNotice, { authErrorMessage, shouldShowAuthDiagnostics, AUTH_UNAVAILABLE_MESSAGE } from './SupabaseConfigNotice';

const text = (html: string) => html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const render = (nodeEnv: string, urlSet = true, keySet = false) =>
  renderToStaticMarkup(createElement(SupabaseConfigNotice, { urlSet, keySet, nodeEnv }));

describe('/auth Supabase notice', () => {
  it('production: renders no configuration detail, only a plain message', () => {
    const html = render('production', true, true);
    expect(html).toContain(AUTH_UNAVAILABLE_MESSAGE);
    for (const leak of ['Supabase', 'URL:', 'Key:', 'Missing', 'Set<', 'Build Time', 'Length', 'NEXT_PUBLIC']) expect(html).not.toContain(leak);
  });

  it('development and test: renders the checklist (set / missing) and never a value, a length or a timestamp', () => {
    for (const env of ['development', 'test']) {
      const html = render(env, true, false);
      expect(html).toContain('Supabase not configured');
      expect(html).toContain('URL: ✓ Set');
      expect(html).toContain('Key: ✗ Missing');
      expect(text(html)).not.toMatch(/Build Time|chars|https?:\/\//);
      expect(text(html)).toBe('Supabase not configured URL: ✓ Set Key: ✗ Missing');
    }
  });

  it('shouldShowAuthDiagnostics follows the real NODE_ENV when no override is given', () => {
    expect(shouldShowAuthDiagnostics('production')).toBe(false);
    expect(shouldShowAuthDiagnostics('development')).toBe(true);
    expect(shouldShowAuthDiagnostics(undefined)).toBe(true);
    expect(shouldShowAuthDiagnostics()).toBe(process.env.NODE_ENV !== 'production');
  });

  it('form errors: "Supabase not configured" is hidden in production, all other messages pass through', () => {
    expect(authErrorMessage('Supabase not configured', 'Failed to sign in', false, 'production')).toBe(AUTH_UNAVAILABLE_MESSAGE);
    expect(authErrorMessage('Supabase not configured', 'Failed to sign in', false, 'development')).toBe('Supabase not configured');
    expect(authErrorMessage('Invalid login credentials', 'Failed to sign in', true, 'production')).toBe('Invalid login credentials');
    expect(authErrorMessage(undefined, 'Failed to sign in', true, 'production')).toBe('Failed to sign in');
  });
});
