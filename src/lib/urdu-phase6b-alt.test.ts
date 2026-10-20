import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { imageAlt, IMAGE_ALT_UR, type ImageAltKey } from './i18n/imageAlt';
import { makeCatalog } from '../components/i18n/ArabicDomTranslator';

/** Phase 6B: Urdu alternatives for images, chosen per component (ArabicDomTranslator does not translate `alt`). */
const root = path.resolve(__dirname, '../..');
const read = (f: string) => readFileSync(path.join(root, f), 'utf8');
const catalog = makeCatalog(JSON.parse(read('public/i18n/ur-ui.json')));
const strip = (s: string) => s.replace(/[⁦-⁩]/g, '');

const WIRING: [ImageAltKey, string, string][] = [
  ['profilePreview', 'src/components/ProfilePictureUpload.tsx', 'Profile preview'],
  ['googlePlayBadge', 'src/components/GetTheAppBanner.tsx', 'Get it on Google Play'],
  ['profileFallback', 'src/components/ProfileView.tsx', 'Profile'],
  ['waveQr', 'src/features/ramadanChallenges/components/WaveHadiyyaCard.tsx', 'Wave Sénégal QR Code'],
  ['playInstallQr', 'app/(site)/share/quran/[surahNumber]/[ayahNumber]/ShareActions.tsx', 'QR code to install Asrariya from Google Play'],
];

describe('image alt text', () => {
  it('Urdu mode gets the Urdu alternative; English, French and Arabic keep the original text exactly', () => {
    for (const [key, , en] of WIRING) {
      expect(imageAlt(key, en, 'ur')).toBe(IMAGE_ALT_UR[key]);
      for (const l of ['en', 'fr', 'ar', undefined]) expect(imageAlt(key, en, l), `${key}/${l}`).toBe(en);
    }
  });

  it('every Urdu alternative is Urdu script, non-empty, and keeps its Latin brand names', () => {
    for (const v of Object.values(IMAGE_ALT_UR)) expect(v).toMatch(/[؀-ۿ]/);
    expect(IMAGE_ALT_UR.waveQr).toContain('Wave');
    expect(IMAGE_ALT_UR.playInstallQr).toContain('Asrariya');
    expect(IMAGE_ALT_UR.playInstallQr).toContain('Google Play');
    expect(IMAGE_ALT_UR.chernoAvatar).toContain('Cherno');
  });

  it('the Play badge alt equals the link\'s Urdu aria-label from the catalog (the badge is the link image)', () => {
    expect(IMAGE_ALT_UR.googlePlayBadge).toBe(catalog.get('Get it on Google Play'));
  });

  it('the QR alt says the same as the sentence next to it in the catalog, minus the sentence ending', () => {
    expect(strip(IMAGE_ALT_UR.playInstallQr)).toBe(strip(catalog.get('QR code to install Asrariya from Google Play')!));
  });

  it('each component routes its alt through imageAlt with the language of the interface, and keeps the English fallback', () => {
    for (const [key, file, en] of WIRING) {
      const src = read(file);
      expect(src, file).toContain(`imageAlt('${key}', '${en}', uiLanguage)`);
      expect(src, file).toContain('uiLanguage');
    }
  });

  it('a profile photo keeps the person\'s own name as its description when there is one', () => {
    expect(read('src/components/ProfileView.tsx')).toContain("alt={profile.full_name || imageAlt('profileFallback', 'Profile', uiLanguage)}");
  });
});
