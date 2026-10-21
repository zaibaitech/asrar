import { describe, it, expect, vi } from 'vitest';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'fs';
import path from 'path';

/** SR (21 Oct 2026): /ur/abjad sends its Urdu calculator text in the server HTML. */
vi.mock('@/src/contexts/LanguageContext', () => ({ useLanguage: () => ({ language: 'en', uiLanguage: 'ur', t: {} }) }));
import { urduCalculatorText } from '../features/calculator/i18n/urServer';
import { CalculatorTextProvider } from '../features/calculator/i18n/CalculatorTextContext';
import { CalculatorScreen } from '../features/calculator/CalculatorScreen';
import { calculatorEn, nameFieldEn, divineNamePickerEn } from '../features/calculator/i18n/en';

const URDU = /[\u0600-\u06FF]/;

describe('/ur/abjad server-rendered Urdu calculator text', () => {
  it('every calculator, name-field and picker string has server-side Urdu', () => {
    const t = urduCalculatorText();
    for (const [ns, en] of [['calculator', calculatorEn], ['nameField', nameFieldEn], ['divineNamePicker', divineNamePickerEn]] as const) {
      for (const k of Object.keys(en)) {
        const v = t[ns]![k];
        expect(v, `${ns}.${k}`).toBeDefined();
        for (const s of Array.isArray(v) ? v : [v]) expect(s, `${ns}.${k}`).toMatch(URDU);
      }
    }
  });

  it('CalculatorScreen renders the Urdu in static (server) markup; without the provider it stays English', () => {
    const screen = createElement(CalculatorScreen, { appLanguage: 'en', headingAs: 'h2' });
    const text = (h: string) => h.replace(/<[^>]+>/g, '|');
    const ur = text(renderToStaticMarkup(createElement(CalculatorTextProvider, { value: urduCalculatorText(), children: screen })));
    const en = text(renderToStaticMarkup(screen));
    expect(en).toContain('|Calculation Type|');
    expect(en).toContain('|9 calculators|');
    for (const s of ['|کیلکولیٹر|', '|حساب کی قسم|', '|9 کیلکولیٹر|', '|نام اور متن کا تجزیہ|']) expect(ur).toContain(s);
    // No Latin-letter text left between tags in the server markup of the calculator browser.
    const latin = ur.split('|').filter((s) => /[A-Za-z]{3,}/.test(s));
    expect(latin).toEqual([]);
  });

  it('/ur/abjad wraps the unchanged calculator in the provider; /abjad and /ar/abjad do not', () => {
    const read = (f: string) => readFileSync(path.resolve(__dirname, '../..', f), 'utf8');
    expect(read('app/(ur)/ur/abjad/page.tsx')).toMatch(/<CalculatorTextProvider value=\{urduCalculatorText\(\)\}>\s*<AbjadCalculator \/>/);
    expect(read('app/(site)/abjad/page.tsx')).not.toContain('CalculatorTextProvider');
    expect(read('app/(ar)/ar/abjad/page.tsx')).not.toContain('CalculatorTextProvider');
  });
});
