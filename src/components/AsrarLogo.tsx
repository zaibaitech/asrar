'use client';

import React from 'react';

/**
 * Asrār Logo - Sacred Geometry Logo Component
 * 
 * Incorporates:
 * - 8-pointed star (Octagram) - divine order
 * - 3 concentric rings - أسرار = 462 → 4+6+2 = 12 → 3
 * - 3 dots in triangular formation - trinity of body, soul, spirit
 * - Subtle ع (Ayn) curve - source/spring
 * - Center eye with inner dot - the "seed"
 * 
 * Element color palettes based on traditional correspondences
 */

export type ElementType = 'fire' | 'water' | 'earth' | 'air' | 'aether';
export type LogoVariant = 'icon' | 'wordmark' | 'horizontal';

interface AsrarLogoProps {
  /** Size in pixels */
  size?: number;
  /** Logo variant */
  variant?: LogoVariant;
  /** Element theme for colors */
  element?: ElementType;
  /** Use monochrome colors (for light/dark mode) */
  mono?: boolean;
  /** Show background (for app icons) */
  showBackground?: boolean;
  /** Animate subtle rotation */
  animate?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Show sacred geometry grid */
  showGrid?: boolean;
}

// Element-based color palettes
const elementPalettes = {
  fire: {
    primary: '#DC2626',
    secondary: '#F97316',
    tertiary: '#FCD34D',
    glow: '#FEF3C7'
  },
  water: {
    primary: '#1E40AF',
    secondary: '#3B82F6',
    tertiary: '#67E8F9',
    glow: '#E0F2FE'
  },
  earth: {
    primary: '#166534',
    secondary: '#22C55E',
    tertiary: '#A3E635',
    glow: '#ECFCCB'
  },
  air: {
    primary: '#6366F1',
    secondary: '#A78BFA',
    tertiary: '#E0E7FF',
    glow: '#F5F3FF'
  },
  aether: {
    primary: '#4F46E5',
    secondary: '#8B5CF6',
    tertiary: '#EC4899',
    glow: '#FDF4FF'
  }
};

// Generate the main 8-pointed star path (two overlapping squares)
const generateOctagram = (cx: number, cy: number, outerRadius: number, innerRadius: number): string => {
  const points: { x: number; y: number }[] = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI / 4) - Math.PI / 2;
    const r = i % 2 === 0 ? outerRadius : innerRadius;
    points.push({
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle)
    });
  }
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
};

// Generate concentric circles for the 3 rings (number symbolism)
const generateRings = (cx: number, cy: number, baseRadius: number) => {
  return [
    { radius: baseRadius * 1.4, opacity: 0.15, strokeWidth: 2 },
    { radius: baseRadius * 1.25, opacity: 0.25, strokeWidth: 1.5 },
    { radius: baseRadius * 1.1, opacity: 0.35, strokeWidth: 1 }
  ];
};

export const AsrarLogo: React.FC<AsrarLogoProps> = ({
  size = 120,
  variant = 'icon',
  element = 'aether',
  mono = false,
  showBackground = false,
  animate = false,
  className = '',
  showGrid = false,
}) => {
  const showWordmark = variant === 'wordmark' || variant === 'horizontal';
  const horizontal = variant === 'horizontal';
  
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.35;
  const innerR = outerR * 0.55;
  const rings = generateRings(cx, cy, outerR);
  
  const colors = elementPalettes[element];
  const gradientId = `asrar-gradient-${element}`;
  const glowId = `asrar-glow-${element}`;
  
  const getColor = (type: keyof typeof colors) => {
    if (mono) {
      return 'currentColor';
    }
    return colors[type];
  };
  
  const bgColor = showBackground 
    ? `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
    : 'transparent';
  
  const viewBoxWidth = horizontal && showWordmark ? size * 2.5 : size;
  const viewBoxHeight = horizontal && showWordmark ? size : (showWordmark && !horizontal ? size * 1.4 : size);

  return (
    <svg
      width={viewBoxWidth}
      height={viewBoxHeight}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ background: bgColor, display: 'block' }}
    >
      <defs>
        {/* Main gradient */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={getColor('primary')} />
          <stop offset="50%" stopColor={getColor('secondary')} />
          <stop offset="100%" stopColor={getColor('tertiary')} />
        </linearGradient>
        
        {/* Glow filter */}
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background sacred geometry grid (optional) */}
      {showGrid && (
        <g opacity="0.1">
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={cx + outerR * 1.8 * Math.cos(i * Math.PI / 6)}
              y2={cy + outerR * 1.8 * Math.sin(i * Math.PI / 6)}
              stroke={getColor('primary')}
              strokeWidth="0.5"
            />
          ))}
        </g>
      )}

      {/* Three concentric rings - representing the number 3 */}
      {rings.map((ring, i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={ring.radius}
          fill="none"
          stroke={mono ? getColor('primary') : `url(#${gradientId})`}
          strokeWidth={ring.strokeWidth}
          opacity={ring.opacity}
          className={animate ? `animate-spin-slow-${i % 2 === 0 ? 'forward' : 'reverse'}` : ''}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}

      {/* Outer rotating square (45° rotated) */}
      <g
        className={animate ? 'animate-spin-slower' : ''}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      >
        <rect
          x={cx - outerR * 0.75}
          y={cy - outerR * 0.75}
          width={outerR * 1.5}
          height={outerR * 1.5}
          fill="none"
          stroke={mono ? getColor('primary') : `url(#${gradientId})`}
          strokeWidth="1.5"
          opacity="0.3"
          transform={`rotate(45 ${cx} ${cy})`}
        />
      </g>

      {/* Main 8-pointed star */}
      <g filter={mono ? 'none' : `url(#${glowId})`}>
        {/* Back layer - slightly larger, more transparent */}
        <path
          d={generateOctagram(cx, cy, outerR * 1.05, innerR * 1.05)}
          fill={mono ? getColor('primary') : `url(#${gradientId})`}
          opacity="0.3"
          className={animate ? 'animate-spin-reverse' : ''}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
        
        {/* Main star */}
        <path
          d={generateOctagram(cx, cy, outerR, innerR)}
          fill={mono ? getColor('primary') : `url(#${gradientId})`}
          className={animate ? 'animate-pulse-subtle' : ''}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      </g>

      {/* Inner circle with subtle glow - the "eye" center */}
      <circle
        cx={cx}
        cy={cy}
        r={innerR * 0.5}
        fill={mono ? 'transparent' : colors.glow}
        opacity="0.9"
      />
      
      {/* Center dot - the pupil/seed */}
      <circle
        cx={cx}
        cy={cy}
        r={innerR * 0.15}
        fill={mono ? getColor('primary') : `url(#${gradientId})`}
      />

      {/* Subtle ع (Ayn) inspired curves in the geometry */}
      <g opacity="0.4">
        <path
          d={`M ${cx - innerR * 0.3} ${cy + innerR * 0.1} 
              Q ${cx} ${cy - innerR * 0.3} ${cx + innerR * 0.3} ${cy + innerR * 0.1}`}
          fill="none"
          stroke={mono ? getColor('primary') : `url(#${gradientId})`}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* Three dots arranged in triangle - number 3 symbolism */}
      {[0, 120, 240].map((angle, i) => {
        const dotRadius = innerR * 0.08;
        const dotDistance = innerR * 0.75;
        const rad = (angle - 90) * Math.PI / 180;
        return (
          <circle
            key={i}
            cx={cx + dotDistance * Math.cos(rad)}
            cy={cy + dotDistance * Math.sin(rad)}
            r={dotRadius}
            fill={mono ? getColor('primary') : `url(#${gradientId})`}
            opacity="0.6"
          />
        );
      })}

      {/* Wordmark */}
      {showWordmark && (
        <text
          x={horizontal ? size * 1.15 : cx}
          y={horizontal ? cy + 8 : size * 1.25}
          textAnchor={horizontal ? 'start' : 'middle'}
          fontFamily="'Noto Sans Arabic', 'Amiri', Georgia, serif"
          fontSize={size * 0.18}
          fontWeight="600"
          fill={mono ? getColor('primary') : `url(#${gradientId})`}
          letterSpacing="0.05em"
        >
          Asrār
        </text>
      )}

      <style jsx>{`
        @keyframes spin-slow-forward {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        
        .animate-spin-slow-forward {
          animation: spin-slow-forward 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 30s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 4s ease-in-out infinite;
        }
      `}</style>
    </svg>
  );
};

export default AsrarLogo;
