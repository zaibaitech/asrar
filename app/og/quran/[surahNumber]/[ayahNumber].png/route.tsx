import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';
import { QURAN_META } from '@/src/features/ilm-huruf/quranResonance';
import { validateVerseReference } from '@/src/features/ilm-huruf/quranApi';

export const runtime = 'edge';

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

type RouteParams = {
  surahNumber: string;
  ayahNumber: string;
};

type AlQuranCloudResponse = {
  data?: Array<{
    text?: string;
    surah?: {
      englishName?: string;
    };
    edition?: {
      identifier?: string;
    };
  }>;
};

type OgFont = {
  name: string;
  data: ArrayBuffer;
  weight: 500 | 700;
  style: 'normal';
};

function normalizeText(text: string): string {
  return text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function clampText(text: string, maxChars: number): string {
  if (text.length <= maxChars) {
    return text;
  }

  return `${text.slice(0, maxChars - 1)}…`;
}

function getTranslationEdition(lang: string): 'en.asad' | 'fr.hamidullah' {
  return lang.toLowerCase().startsWith('fr') ? 'fr.hamidullah' : 'en.asad';
}

async function loadGoogleFont(
  family: string,
  weight: number,
  text: string
): Promise<ArrayBuffer | null> {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:wght@${weight}&display=swap&text=${encodeURIComponent(text)}`;

    const cssResponse = await fetch(cssUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      },
    });

    if (!cssResponse.ok) {
      return null;
    }

    const cssText = await cssResponse.text();
    const fontMatch = cssText.match(/src: url\(([^)]+)\) format\('woff2'\)/);
    const fontUrl = fontMatch?.[1];

    if (!fontUrl) {
      return null;
    }

    const fontResponse = await fetch(fontUrl);

    if (!fontResponse.ok) {
      return null;
    }

    return await fontResponse.arrayBuffer();
  } catch {
    return null;
  }
}

async function fetchAyah(
  surahNumber: number,
  ayahNumber: number,
  translationEdition: 'en.asad' | 'fr.hamidullah'
) {
  const response = await fetch(
    `https://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumber}/editions/quran-simple,${translationEdition}`,
    {
      headers: {
        Accept: 'application/json',
      },
      next: {
        revalidate: 86400,
      },
    }
  );

  if (!response.ok) {
    return null;
  }

  const json = (await response.json()) as AlQuranCloudResponse;
  const entries = Array.isArray(json.data) ? json.data : [];

  const arabic = entries.find((item) => item.edition?.identifier === 'quran-simple');
  const translation = entries.find(
    (item) => item.edition?.identifier === translationEdition
  );

  return {
    arabicText: normalizeText(arabic?.text || ''),
    translationText: normalizeText(translation?.text || ''),
    surahName:
      arabic?.surah?.englishName || QURAN_META[surahNumber]?.name || `Surah ${surahNumber}`,
  };
}

export async function GET(
  request: NextRequest,
  { params }: { params: RouteParams }
) {
  const surahNumber = Number(params.surahNumber);
  const ayahNumber = Number(params.ayahNumber);

  if (!validateVerseReference(surahNumber, ayahNumber)) {
    return new Response('Not Found', { status: 404 });
  }

  const lang = request.nextUrl.searchParams.get('lang') || 'en';
  const translationEdition = getTranslationEdition(lang);

  const ayah = await fetchAyah(surahNumber, ayahNumber, translationEdition);

  if (!ayah || !ayah.arabicText) {
    return new Response('Not Found', { status: 404 });
  }

  const arabicText = clampText(ayah.arabicText, 300);
  const translationText = clampText(ayah.translationText, 200);
  const reference = `Surah ${ayah.surahName} ${surahNumber}:${ayahNumber}`;

  const fontSeedText = `${arabicText}${translationText}${reference}ASRARIYAasrar.app`;
  const [arabicFont, latinRegular, latinSemiBold] = await Promise.all([
    loadGoogleFont('Noto Naskh Arabic', 700, arabicText),
    loadGoogleFont('Manrope', 500, fontSeedText),
    loadGoogleFont('Manrope', 700, fontSeedText),
  ]);

  const fonts: OgFont[] = [];

  if (arabicFont) {
    fonts.push({
      name: 'Noto Naskh Arabic',
      data: arabicFont,
      weight: 700,
      style: 'normal',
    });
  }

  if (latinRegular) {
    fonts.push({
      name: 'Manrope',
      data: latinRegular,
      weight: 500,
      style: 'normal',
    });
  }

  if (latinSemiBold) {
    fonts.push({
      name: 'Manrope',
      data: latinSemiBold,
      weight: 700,
      style: 'normal',
    });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px',
          background:
            'radial-gradient(900px 460px at -5% -10%, rgba(52,211,153,0.25) 0%, rgba(52,211,153,0) 70%), radial-gradient(950px 430px at 105% 105%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0) 68%), linear-gradient(135deg, #0f172a 0%, #131e3b 52%, #0a1024 100%)',
          color: '#f8fafc',
          fontFamily: 'Manrope, system-ui, sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '9999px',
                border: '1px solid rgba(167,243,208,0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(167,243,208,0.08)',
              }}
            >
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '9999px',
                  background: '#34d399',
                }}
              />
            </div>

            <div
              style={{
                fontSize: '20px',
                letterSpacing: '0.08em',
                color: '#d1fae5',
                fontWeight: 700,
              }}
            >
              ASRARIYA
            </div>
          </div>

          <div
            style={{
              border: '1px solid rgba(255,255,255,0.22)',
              borderRadius: '9999px',
              fontSize: '18px',
              padding: '8px 16px',
              color: '#e2e8f0',
            }}
          >
            Share Ayah
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: '54px',
              lineHeight: 1.45,
              textAlign: 'right',
              direction: 'rtl',
              fontFamily: 'Noto Naskh Arabic, serif',
              color: '#ffffff',
              textShadow: '0 3px 24px rgba(0,0,0,0.35)',
            }}
          >
            {arabicText}
          </div>

          <div
            style={{
              fontSize: '30px',
              lineHeight: 1.38,
              color: '#e2e8f0',
              fontFamily: 'Manrope, system-ui, sans-serif',
            }}
          >
            {translationText}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.18)',
            paddingTop: '18px',
          }}
        >
          <div
            style={{
              fontSize: '26px',
              fontWeight: 700,
              color: '#a7f3d0',
              letterSpacing: '0.01em',
              fontFamily: 'Manrope, system-ui, sans-serif',
            }}
          >
            {reference}
          </div>

          <div
            style={{
              fontSize: '22px',
              color: '#cbd5e1',
              fontFamily: 'Manrope, system-ui, sans-serif',
            }}
          >
            asrar.app
          </div>
        </div>
      </div>
    ),
    {
      width: OG_WIDTH,
      height: OG_HEIGHT,
      fonts,
    }
  );
}
