/**
 * Istikhara Module - Element-Based Theme System
 * Consistent with web app color schemes and visual identity
 */

export type ElementType = 'fire' | 'earth' | 'air' | 'water';

interface ElementTheme {
  emoji: string;
  name: string;
  nameFr: string;
  gradient: [string, string, string]; // RGB gradient colors
  bgGradient: [string, string, string]; // Background gradient with opacity
  progressColor: string;
  borderColor: string;
  textColor: string;
  textBright: string;
  glowColor: string;
  accentBg: string;
}

/**
 * Element-based color schemes
 * These match the web app's visual identity exactly
 */
export const ELEMENT_THEMES: Record<ElementType, ElementTheme> = {
  fire: {
    emoji: '🔥',
    name: 'Fire',
    nameFr: 'Feu',
    gradient: ['#dc2626', '#ea580c', '#eab308'], // red-600, orange-500, yellow-500
    bgGradient: ['rgba(153, 27, 27, 0.2)', 'rgba(154, 52, 18, 0.15)', 'rgba(133, 77, 14, 0.1)'],
    progressColor: '#ef4444',
    borderColor: 'rgba(248, 113, 113, 0.5)',
    textColor: '#fecaca',
    textBright: '#fee2e2',
    glowColor: 'rgba(239, 68, 68, 0.3)',
    accentBg: 'rgba(239, 68, 68, 0.2)',
  },
  earth: {
    emoji: '🌍',
    name: 'Earth',
    nameFr: 'Terre',
    gradient: ['#d97706', '#eab308', '#22c55e'], // amber-600, yellow-500, green-500
    bgGradient: ['rgba(146, 64, 14, 0.2)', 'rgba(133, 77, 14, 0.15)', 'rgba(20, 83, 45, 0.1)'],
    progressColor: '#f59e0b',
    borderColor: 'rgba(251, 191, 36, 0.5)',
    textColor: '#fde68a',
    textBright: '#fef3c7',
    glowColor: 'rgba(245, 158, 11, 0.3)',
    accentBg: 'rgba(245, 158, 11, 0.2)',
  },
  air: {
    emoji: '💨',
    name: 'Air',
    nameFr: 'Air',
    gradient: ['#0891b2', '#3b82f6', '#6366f1'], // cyan-600, blue-500, indigo-500
    bgGradient: ['rgba(22, 78, 99, 0.2)', 'rgba(30, 64, 175, 0.15)', 'rgba(67, 56, 202, 0.1)'],
    progressColor: '#06b6d4',
    borderColor: 'rgba(34, 211, 238, 0.5)',
    textColor: '#a5f3fc',
    textBright: '#cffafe',
    glowColor: 'rgba(6, 182, 212, 0.3)',
    accentBg: 'rgba(6, 182, 212, 0.2)',
  },
  water: {
    emoji: '💧',
    name: 'Water',
    nameFr: 'Eau',
    gradient: ['#2563eb', '#6366f1', '#9333ea'], // blue-600, indigo-500, purple-500
    bgGradient: ['rgba(30, 64, 175, 0.2)', 'rgba(67, 56, 202, 0.15)', 'rgba(107, 33, 168, 0.1)'],
    progressColor: '#3b82f6',
    borderColor: 'rgba(96, 165, 250, 0.5)',
    textColor: '#bfdbfe',
    textBright: '#dbeafe',
    glowColor: 'rgba(59, 130, 246, 0.3)',
    accentBg: 'rgba(59, 130, 246, 0.2)',
  },
};

/**
 * Get element from buruj number (1-12)
 * Classical element association:
 * - Fire: Aries(1), Leo(5), Sagittarius(9)
 * - Earth: Taurus(2), Virgo(6), Capricorn(10)
 * - Air: Gemini(3), Libra(7), Aquarius(11)
 * - Water: Cancer(4), Scorpio(8), Pisces(12)
 */
export function getElementFromBuruj(buruj: number): ElementType {
  const elementMap: Record<number, ElementType> = {
    1: 'fire',   5: 'fire',   9: 'fire',
    2: 'earth',  6: 'earth', 10: 'earth',
    3: 'air',    7: 'air',   11: 'air',
    4: 'water',  8: 'water', 12: 'water',
  };
  return elementMap[buruj] || 'fire';
}

/**
 * Core UI colors for the Istikhara module
 * Consistent dark theme with spiritual aesthetics
 */
export const COLORS = {
  background: {
    primary: '#0f172a',     // slate-900
    secondary: '#1e293b',   // slate-800
    elevated: 'rgba(255, 255, 255, 0.05)',
    overlay: 'rgba(0, 0, 0, 0.7)',
  },
  accent: {
    purple: '#9333ea',
    pink: '#ec4899',
    indigo: '#6366f1',
    green: '#10b981',
    amber: '#f59e0b',
    red: '#ef4444',
  },
  text: {
    primary: '#ffffff',
    secondary: '#cbd5e1',   // slate-300
    muted: '#94a3b8',       // slate-400
    accent: '#a78bfa',      // purple-400
  },
};

/**
 * Typography scales for Istikhara module
 */
export const TYPOGRAPHY = {
  // Headings
  h1: { fontSize: 32, fontWeight: '700' as const, lineHeight: 40 },
  h2: { fontSize: 24, fontWeight: '700' as const, lineHeight: 32 },
  h3: { fontSize: 20, fontWeight: '600' as const, lineHeight: 28 },
  h4: { fontSize: 18, fontWeight: '600' as const, lineHeight: 24 },
  
  // Body text
  body: { fontSize: 16, fontWeight: '400' as const, lineHeight: 24 },
  bodySmall: { fontSize: 14, fontWeight: '400' as const, lineHeight: 20 },
  
  // Special
  arabic: { fontSize: 28, fontWeight: '600' as const, lineHeight: 40 },
  arabicSmall: { fontSize: 20, fontWeight: '500' as const, lineHeight: 28 },
  caption: { fontSize: 12, fontWeight: '400' as const, lineHeight: 16 },
};

/**
 * Spacing scale (in pixels)
 */
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

/**
 * Border radius scale
 */
export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
};

/**
 * Shadow definitions (elevation)
 */
export const SHADOWS = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.23,
    shadowRadius: 4,
    elevation: 5,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
};

/**
 * Get element-specific glow shadow
 */
export function getElementGlow(element: ElementType) {
  const theme = ELEMENT_THEMES[element];
  return {
    shadowColor: theme.glowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  };
}

/**
 * Glassmorphism effect style
 */
export const GLASSMORPHISM = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: RADIUS.xl,
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.2)',
};

/**
 * Helper to get RGB values from hex color
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

/**
 * Helper to create rgba color string
 */
export function rgba(hex: string, alpha: number): string {
  const rgb = hexToRgb(hex);
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}
