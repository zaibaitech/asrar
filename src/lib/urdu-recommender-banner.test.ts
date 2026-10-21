import { describe, it, expect, vi } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { makeCatalog } from '../components/i18n/ArabicDomTranslator';

/** Pass 4, Q3: the Ramadan "Best dhikr now" banner shows the recited Arabic in Urdu/Arabic UI. */
const ui = vi.hoisted(() => ({ lang: 'ur' }));
vi.mock('@/src/contexts/LanguageContext', () => ({ useLanguage: () => ({ uiLanguage: ui.lang }) }));
vi.mock('../features/ramadanChallenges/recommender', () => ({
  getBestDhikrNow: () => ({
    challenge: { id: 'c1', type: 'istighfar', arabicText: 'أَسْتَغْفِرُ اللهَ', transliteration: 'Astaghfirullāh' },
  }),
  getCurrentTimeWindow: () => ({ name: 'Fajr / Pre-dawn', nameAr: 'الفجر' }),
}));
import { RecommenderBanner } from '../features/ramadanChallenges/components/RecommenderBanner';

const root = path.resolve(__dirname, '../..');
const raw: Record<string, string> = JSON.parse(readFileSync(path.join(root, 'public/i18n/ur-ui.json'), 'utf8'));
const catalog = makeCatalog(raw);
const render = (lang: string, language: 'en' | 'fr' = 'en') => {
  ui.lang = lang;
  return renderToStaticMarkup(createElement(RecommenderBanner, { challenges: [], language }));
};

describe('RecommenderBanner', () => {
  it('Urdu and Arabic UI show challenge.arabicText in an RTL Arabic span the catalog skips', () => {
    for (const lang of ['ur', 'ar']) {
      const html = render(lang);
      expect(html).toContain('dir="rtl" lang="ar" data-no-ar="true"');
      expect(html).toContain('أَسْتَغْفِرُ اللهَ');
      expect(html).not.toContain('Astaghfirullāh');
    }
  });

  it('English and French output is unchanged (transliteration, no Arabic span)', () => {
    const en = render('en');
    expect(en).toContain('Best dhikr now:');
    expect(en).toContain('<span class="font-semibold text-teal-800 dark:text-teal-200">Astaghfirullāh</span>');
    expect(en).not.toContain('data-no-ar');
    const fr = render('fr', 'fr');
    expect(fr).toContain('Recommandé maintenant:');
    expect(fr).toContain('Astaghfirullāh');
    expect(fr).not.toContain('أَسْتَغْفِرُ');
  });

  it('the card/modal catalog value for "Astaghfirullāh" stays the Urdu meaning', () => {
    expect(catalog.get('Astaghfirullāh')).toBe('اللہ سے مغفرت مانگنا');
  });

  it('the 5 time-window names have Urdu (Maghrib and ʿIshāʾ were already there)', () => {
    const want: Record<string, string> = {
      'Fajr / Pre-dawn': 'فجر / سحر',
      'Morning / Ḍuḥā': 'صبح / چاشت',
      'Ẓuhr / Midday': 'ظہر / دوپہر',
      'ʿAṣr / Afternoon': 'عصر / سہ پہر',
      'Late Night / Tahajjud': 'رات کا آخری حصہ / تہجد',
    };
    for (const [en, ur] of Object.entries(want)) expect(catalog.get(en)).toBe(ur);
    expect(catalog.get('Maghrib / Ifṭār')).toBeTruthy();
    expect(catalog.get('ʿIshāʾ / Tarāwīḥ')).toBe('عشاء / تراویح');
  });
});
