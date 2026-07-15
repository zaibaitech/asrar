/**
 * Shared visual theme for the Compatibility module — light indigo/violet
 * palette matching asrar.app's actual design system (the app has no
 * dark-mode toggle; this is the only visual mode). Centralizes color
 * tokens so the Soul Connection result, astrological result, input forms,
 * and panel shell all render as one cohesive surface.
 */

export const COMPAT_THEME = {
  pageBg: 'linear-gradient(180deg, #F4F2FC 0%, #FAFAFE 40%)',
  cardBg: '#FFFFFF',
  cardBorder: '#E9E6F5',
  surface: '#F8F7FD',
  surfaceBorder: '#E9E6F5',
  line: '#E4E0F2',
  ink: '#241F3D',
  muted: '#6B6684',
  indigo: '#312E81',
  indigoSoft: 'rgba(49,46,129,.35)',
  green: '#16A34A',
  amber: '#B45309',
  danger: '#DC2626',
  ctaGradient: 'linear-gradient(90deg, #7C3AED 0%, #DB2777 100%)',
} as const;

/** Fixed section tints — Meaning/Marriage/Watch Out/Key each keep a consistent color regardless of the archetype's severity. */
export const COMPAT_TINTS = {
  blue: { bg: '#EFF4FF', border: '#D6E2FB', label: '#2563EB' },
  violet: { bg: '#F5F0FE', border: '#E4D9FA', label: '#7C3AED' },
  amber: { bg: '#FFF8EA', border: '#F6E4BC', label: '#B45309' },
  green: { bg: '#EFFBF3', border: '#CDEEDA', label: '#15803D' },
} as const;
