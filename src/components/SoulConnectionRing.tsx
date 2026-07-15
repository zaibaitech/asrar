import React from 'react';
import { COMPAT_THEME } from '../constants/compatibilityTheme';

interface SoulConnectionRingProps {
  /** The result soul number, 1-9. */
  value: number;
  size?: number;
  activeColor?: string;
  revealed?: boolean;
}

/**
 * The "Abjad Dial" — nine numbered stations arranged like an astrolabe,
 * with tick marks and a glowing active station for the result number.
 * Light theme: white/parchment dots, indigo ticks, the archetype's
 * severity color for the active station.
 */
export function SoulConnectionRing({ value, size = 250, activeColor = COMPAT_THEME.green, revealed = true }: SoulConnectionRingProps) {
  const c = size / 2;
  const outerRing = size * 0.456; // 114/250
  const innerRing = size * 0.288; // 72/250
  const tickInner = size * 0.432; // 108/250
  const tickOuter = size * 0.456; // 114/250
  const dotRadius = size * 0.368; // 92/250

  const positions = Array.from({ length: 9 }, (_, i) => {
    const angle = (i / 9) * Math.PI * 2 - Math.PI / 2;
    return {
      n: i + 1,
      x: c + dotRadius * Math.cos(angle),
      y: c + dotRadius * Math.sin(angle),
      angle,
    };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={`Soul connection result: ${value} of 9`}
      className="block mx-auto"
    >
      <circle cx={c} cy={c} r={outerRing} fill="none" stroke={COMPAT_THEME.line} strokeWidth="1.5" />
      <circle cx={c} cy={c} r={innerRing} fill="none" stroke={COMPAT_THEME.line} strokeWidth="1" strokeDasharray="2 6" />

      {positions.map((p, i) => {
        const x1 = c + tickInner * Math.cos(p.angle);
        const y1 = c + tickInner * Math.sin(p.angle);
        const x2 = c + tickOuter * Math.cos(p.angle);
        const y2 = c + tickOuter * Math.sin(p.angle);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={COMPAT_THEME.indigoSoft} strokeWidth="1.5" />
        );
      })}

      {positions.map(p => {
        const active = p.n === value;
        return (
          <g key={p.n}>
            <circle
              cx={p.x}
              cy={p.y}
              r={active ? size * 0.048 : size * 0.024}
              fill={active ? activeColor : '#EFEDFA'}
              stroke={active ? activeColor : COMPAT_THEME.line}
              strokeWidth="1"
              style={{
                filter: active && revealed ? `drop-shadow(0 2px 8px ${activeColor}73)` : 'none',
                transition: 'all 0.6s ease',
              }}
            />
            <text
              x={p.x}
              y={p.y + size * 0.014}
              textAnchor="middle"
              fontSize={active ? size * 0.044 : size * 0.034}
              fill={active ? '#fff' : COMPAT_THEME.muted}
              fontFamily="'Space Grotesk', sans-serif"
              fontWeight="700"
            >
              {p.n}
            </text>
          </g>
        );
      })}

      <text
        x={c}
        y={c + size * 0.08}
        textAnchor="middle"
        fontSize={size * 0.248}
        fill={activeColor}
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        style={{ opacity: revealed ? 1 : 0, transition: 'opacity 1s ease 0.3s' }}
      >
        {value}
      </text>
      <text
        x={c}
        y={c + size * 0.16}
        textAnchor="middle"
        fontSize={size * 0.04}
        letterSpacing="3"
        fill={COMPAT_THEME.muted}
        fontFamily="'Space Grotesk', sans-serif"
      >
        OF NINE
      </text>
    </svg>
  );
}
