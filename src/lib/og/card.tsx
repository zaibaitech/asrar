/**
 * Branded 1200×630 share card (Open Graph / Twitter / WhatsApp previews),
 * in the same style as app/opengraph-image.tsx: dark indigo gradient, the
 * Asrār star mark, and one accent colour per tool family.
 *
 * Node runtime only (fonts are read from disk; see next.config.js
 * outputFileTracingIncludes so they ship with the serverless function).
 */
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { OG_SIZE } from './urls';

export const ACCENTS = {
  emerald: '#34D399',
  indigo: '#818CF8',
  amber: '#FBBF24',
  pink: '#F472B6',
  violet: '#A78BFA',
} as const;

export type Accent = keyof typeof ACCENTS;

export interface CardHighlight {
  /** Small label above the highlight, e.g. "Friday's sadaqa". */
  label: string;
  /** Lines of text (bulleted when more than one). */
  lines?: string[];
  /** A coloured pill (e.g. an ikhtiyārāt tier) and a big figure (e.g. "82/100"). */
  badge?: { text: string; color: string };
  figure?: string;
}

export interface CardProps {
  accent: Accent;
  eyebrow: string;
  title: string;
  subtitle?: string;
  highlight?: CardHighlight;
  footer: string;
}

const FONT_DIR = join(process.cwd(), 'src', 'lib', 'og', 'fonts');
let fontsPromise: Promise<{ name: string; data: Buffer; weight: 400 | 700; style: 'normal' }[]> | null = null;

function loadFonts() {
  fontsPromise ??= Promise.all([
    readFile(join(FONT_DIR, 'NotoSans-Regular.ttf')),
    readFile(join(FONT_DIR, 'NotoSans-Bold.ttf')),
  ]).then(([regular, bold]) => [
    { name: 'Noto Sans', data: regular, weight: 400 as const, style: 'normal' as const },
    { name: 'Noto Sans', data: bold, weight: 700 as const, style: 'normal' as const },
  ]);
  return fontsPromise;
}

/** Trim to a maximum length on a word boundary, with an ellipsis. */
export function clamp(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const space = cut.lastIndexOf(' ');
  return `${(space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[\s,;:—-]+$/, '')}…`;
}

function StarMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="96" fill="url(#g1)" />
      <path
        d="M 256 82 L 329.91 142.04 L 430 82 L 369.96 182.09 L 430 256 L 369.96 329.91 L 430 430 L 329.91 369.96 L 256 430 L 182.09 369.96 L 82 430 L 142.04 329.91 L 82 256 L 142.04 182.09 L 82 82 L 182.09 142.04 Z"
        fill="#fff"
        opacity="0.9"
      />
      <circle cx="256" cy="256" r="55" fill="#FDF4FF" opacity="0.9" />
      <circle cx="256" cy="256" r="16" fill="#8B5CF6" />
    </svg>
  );
}

function Card({ accent, eyebrow, title, subtitle, highlight, footer }: CardProps) {
  const color = ACCENTS[accent];
  const hasHighlight = Boolean(highlight);
  const titleSize = hasHighlight ? (title.length > 48 ? 46 : 54) : title.length > 60 ? 56 : 64;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '52px 64px 44px',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 55%, #0F172A 100%)',
        fontFamily: 'Noto Sans',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: '-140px',
          top: '-160px',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${color}33 0%, transparent 70%)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '-120px',
          bottom: '-160px',
          width: '460px',
          height: '460px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,70,229,0.22) 0%, transparent 70%)',
        }}
      />

      {/* Brand row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <StarMark size={56} />
          <div style={{ display: 'flex', marginLeft: '18px', fontSize: '30px', fontWeight: 700, color: '#E5E7EB' }}>
            Asrār Everyday
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: '24px', color: '#94A3B8' }}>asrar.app</div>
      </div>

      {/* Main */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            fontSize: '24px',
            fontWeight: 700,
            color,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '14px',
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: `${titleSize}px`,
            fontWeight: 700,
            color: '#F8FAFC',
            lineHeight: 1.12,
            letterSpacing: '-1px',
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div style={{ display: 'flex', fontSize: '28px', color: '#CBD5E1', lineHeight: 1.35, marginTop: '16px' }}>
            {subtitle}
          </div>
        ) : null}
        {highlight ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '26px',
              padding: '22px 28px',
              borderRadius: '24px',
              background: 'rgba(255,255,255,0.06)',
              border: `2px solid ${color}55`,
            }}
          >
            <div style={{ display: 'flex', fontSize: '22px', fontWeight: 700, color, marginBottom: '10px' }}>
              {highlight.label}
            </div>
            {highlight.badge || highlight.figure ? (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {highlight.badge ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '8px 22px',
                      borderRadius: '999px',
                      background: `${highlight.badge.color}26`,
                      border: `2px solid ${highlight.badge.color}`,
                      color: '#F8FAFC',
                      fontSize: '32px',
                      fontWeight: 700,
                    }}
                  >
                    <div style={{ display: 'flex', width: '16px', height: '16px', borderRadius: '50%', background: highlight.badge.color, marginRight: '12px' }} />
                    {highlight.badge.text}
                  </div>
                ) : null}
                {highlight.figure ? (
                  <div style={{ display: 'flex', fontSize: '44px', fontWeight: 700, color: '#F8FAFC', marginLeft: highlight.badge ? '28px' : '0' }}>
                    {highlight.figure}
                  </div>
                ) : null}
              </div>
            ) : null}
            {(highlight.lines ?? []).map((line, i) => (
              <div key={i} style={{ display: 'flex', fontSize: '28px', color: '#F1F5F9', lineHeight: 1.35, marginTop: i === 0 ? '0' : '6px' }}>
                {(highlight.lines?.length ?? 0) > 1 ? `• ${line}` : line}
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', fontSize: '20px', color: '#64748B' }}>{footer}</div>
      </div>
    </div>
  );
}

/** Render a card. `cacheSeconds` controls how long CDNs / crawlers may keep it. */
export async function renderCard(props: CardProps, cacheSeconds = 86400): Promise<ImageResponse> {
  return new ImageResponse(<Card {...props} />, {
    ...OG_SIZE,
    fonts: await loadFonts(),
    headers: {
      'cache-control': `public, max-age=${Math.min(cacheSeconds, 3600)}, s-maxage=${cacheSeconds}, stale-while-revalidate=${cacheSeconds}`,
    },
  });
}
