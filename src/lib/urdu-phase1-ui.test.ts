import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { rawTranslations, translations as merged } from './translations';

// the merged ar/ur trees are typed as partial; at runtime they are complete (English fallback)
const translations = merged as unknown as Record<'en' | 'fr' | 'ar' | 'ur', typeof merged.en>;

const read = (p: string) => readFileSync(join(__dirname, '..', '..', p), 'utf8');
const ARABIC_SCRIPT = /[؀-ۿ]/;

const ABJAD_KEYS = [
  'title', 'currentMode', 'maghribi', 'mashriqi', 'western', 'eastern',
  'maghribiSystem', 'mashriqiSystem', 'maghribiDesc', 'mashriqiDesc',
] as const;

describe('Urdu: Abjad system selector and mobile menu use the shared dictionary', () => {
  it('Urdu mode resolves every selector label to Urdu script (no English fallback)', () => {
    for (const k of ABJAD_KEYS) {
      const v = translations.ur.abjadSystem[k];
      expect(v, k).toMatch(ARABIC_SCRIPT);
      expect(v, k).not.toBe(translations.en.abjadSystem[k]);
      expect(rawTranslations.ur.abjadSystem?.[k], `${k} is defined in ur.ts itself`).toBe(v);
    }
  });

  it('Urdu mode resolves "About This App" to Urdu', () => {
    expect(translations.ur.nav.aboutApp).toBe('اس ایپ کے بارے میں');
  });

  it('approved glossary wording: «مغربی/مشرقی نظام», never «عنصری»', () => {
    expect(translations.ur.abjadSystem.maghribiSystem).toBe('مغربی نظام:');
    expect(translations.ur.abjadSystem.mashriqiSystem).toBe('مشرقی نظام:');
    for (const k of ABJAD_KEYS) expect(translations.ur.abjadSystem[k]).not.toMatch(/عنصري|عنصرية|عناصري/);
  });

  it('the Abjad letter values in the descriptions are preserved (calculation facts, not translated)', () => {
    expect(translations.ur.abjadSystem.maghribiDesc).toContain('ش=1000');
    expect(translations.ur.abjadSystem.maghribiDesc).toContain('غ=900');
    expect(translations.ur.abjadSystem.mashriqiDesc).toContain('ش=300');
    expect(translations.ur.abjadSystem.mashriqiDesc).toContain('غ=1000');
  });

  it('English output is unchanged (same wording as the former hard-coded text)', () => {
    const a = translations.en.abjadSystem;
    expect([a.title, a.currentMode, a.maghribi, a.mashriqi, a.western, a.eastern, a.maghribiSystem, a.mashriqiSystem]).toEqual([
      'Abjad System', 'Current Mode:', 'Maghribi', 'Mashriqi', 'Western', 'Eastern', 'Maghribi System:', 'Mashriqi System:',
    ]);
    expect(a.maghribiDesc).toBe('Traditional method of the Maghreb (Morocco to Libya), al-Andalus and West Africa (ش=1000, غ=900)');
    expect(a.mashriqiDesc).toBe('Eastern method used in Egypt, the Middle East and Asia (ش=300, غ=1000)');
    expect(translations.en.nav.aboutApp).toBe('About This App');
  });

  it('fr keeps its previous output (identical to English, as before); ar uses exactly the wording already in public/i18n/ar-ui.json (English where it has none)', () => {
    const arUi = JSON.parse(read('public/i18n/ar-ui.json')) as Record<string, string>;
    for (const k of ABJAD_KEYS) {
      expect(translations.fr.abjadSystem[k], k).toBe(translations.en.abjadSystem[k]);
      // the two long descriptions have no Arabic yet: English, as before
      expect(translations.ar.abjadSystem[k], k).toBe(arUi[translations.en.abjadSystem[k]] ?? translations.en.abjadSystem[k]);
    }
    expect(translations.fr.nav.aboutApp).toBe('About This App');
    expect(translations.ar.nav.aboutApp).toBe(arUi['About This App']);
  });

  it('components render these labels from the dictionary, not literals', () => {
    const sel = read('src/components/AbjadSystemSelector.tsx');
    const menu = read('src/components/MobileMenu.tsx');
    for (const lit of ['Abjad System', 'Current Mode', 'Maghribi System', 'Mashriqi System', 'Traditional method of the Maghreb', 'Eastern method used in']) {
      expect(sel, lit).not.toContain(lit);
    }
    expect(sel).not.toMatch(/>\s*(Western|Eastern|Maghribi|Mashriqi)\s*</);
    expect(sel).not.toMatch(/^\s*(Maghribi|Mashriqi)\s*$/m);
    expect(menu).not.toContain('About This App');
    expect(menu).toContain('t.nav.aboutApp');
    expect(menu).not.toContain('📿 Abjad System');
    expect(menu).toContain('📿 {t.abjadSystem.title}');
  });
});
