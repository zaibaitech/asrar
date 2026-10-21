import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { makeCatalog } from '../components/i18n/ArabicDomTranslator';

/** Phase 6: sign-in, profile and profile-setup screens are covered by the Urdu catalog. */
const root = path.resolve(__dirname, '../..');
const catalog = makeCatalog(JSON.parse(readFileSync(path.join(root, 'public/i18n/ur-ui.json'), 'utf8')));
const read = (f: string) => readFileSync(path.join(root, f), 'utf8');

const SCREENS = [
  'app/(site)/auth/page.tsx',
  'src/components/ProfileView.tsx',
  'src/components/ProfileEdit.tsx',
  'src/components/ProfileSetup.tsx',
  'app/(site)/profile/page.tsx',
  'app/(site)/profile/setup/page.tsx',
];

describe('Phase 6: account screens in Urdu', () => {
  it('translates the visible labels of every screen (no sign-in or profile label is left in English)', () => {
    const labels = ['Sign in', 'Sign up', 'Create Account', 'Email Address', 'Password', 'Send Reset Link', 'Forgot password?',
      'Personal Information', 'Preferred Language', 'Save Changes', 'Edit Profile', 'Skip for now', 'Complete Setup', 'Your Location'];
    for (const l of labels) expect(catalog.get(l), l).toMatch(/[؀-ۿ]/);
  });

  it('the exact strings the components render are found in the catalog', () => {
    const missing: string[] = [];
    for (const f of SCREENS) {
      for (const m of read(f).matchAll(/>\s*([A-Z][A-Za-z ,'’&!?.…]{4,60}?)\s*</g)) {
        const t = m[1].trim();
        if (/^(English|Français)$/.test(t)) continue;
        if (!catalog.get(t)) missing.push(`${f}: ${t}`);
      }
    }
    expect(missing).toEqual([]);
  });

  it('keeps the numbers, the brand name and the product names in place', () => {
    expect(catalog.get('Must be at least 6 characters')).toContain('6');
    expect(catalog.get('Supabase not configured')).toContain('Supabase');
    expect(catalog.get('This helps us personalize your experience with Asrār Everyday')).toContain('Asrār Everyday');
  });

  it('uses the same words as the shared dictionary for the navigation labels', () => {
    expect(catalog.get('Home')).toBe('ہوم');
  });
});

describe('Phase 6: fragments around links keep a readable RTL order', () => {
  it('the optional-sign-in sentence is split by a link (node, link, node): the three Urdu pieces read as one sentence right to left', () => {
    const read3 = [catalog.get('Authentication is optional. You can'), catalog.get('use this app'), catalog.get('without an account.')];
    expect(read3.every((x) => x && /[؀-ۿ]/.test(x))).toBe(true);
    expect(read3.join(' ')).toBe('سائن ان اختیاری ہے۔ آپ بغیر اکاؤنٹ کے اس ایپ کو استعمال کر سکتے ہیں۔');
  });
});
