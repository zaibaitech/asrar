import React from 'react';

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
 * Ported from the user-supplied design (astrolabe theme, gold ticks,
 * center number "OF NINE").
 */
export function SoulConnectionRing({ value, size = 260, activeColor = '#3FB97C', revealed = true }: SoulConnectionRingProps) {
  const c = size / 2;
  const outerRing = size * 0.454; // 118/260
  const innerRing = size * 0.292; // 76/260
  const tickInner = size * 0.431; // 112/260
  const tickOuter = size * 0.454; // 118/260
  const dotRadius = size * 0.369; // 96/260

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
      {/* astrolabe rings */}
      <circle cx={c} cy={c} r={outerRing} fill="none" stroke="rgba(200,165,91,0.18)" strokeWidth="1" />
      <circle cx={c} cy={c} r={innerRing} fill="none" stroke="rgba(200,165,91,0.18)" strokeWidth="1" strokeDasharray="2 6" />

      {/* tick marks */}
      {positions.map((p, i) => {
        const x1 = c + tickInner * Math.cos(p.angle);
        const y1 = c + tickInner * Math.sin(p.angle);
        const x2 = c + tickOuter * Math.cos(p.angle);
        const y2 = c + tickOuter * Math.sin(p.angle);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(200,165,91,0.4)" strokeWidth="1.5" />
        );
      })}

      {/* the nine stations */}
      {positions.map(p => {
        const active = p.n === value;
        return (
          <g key={p.n}>
            <circle
              cx={p.x}
              cy={p.y}
              r={active ? size * 0.042 : size * 0.019}
              fill={active ? activeColor : '#1C1631'}
              stroke={active ? activeColor : 'rgba(200,165,91,0.18)'}
              strokeWidth="1"
              style={{
                filter: active && revealed ? `drop-shadow(0 0 10px ${activeColor}88)` : 'none',
                transition: 'all 0.6s ease',
              }}
            />
            <text
              x={p.x}
              y={p.y + size * 0.0135}
              textAnchor="middle"
              fontSize={active ? size * 0.0423 : size * 0.0308}
              fill={active ? '#0D0A1A' : '#8E86A3'}
              fontFamily="'Space Grotesk', sans-serif"
              fontWeight="700"
            >
              {p.n}
            </text>
          </g>
        );
      })}

      {/* central number */}
      <text
        x={c}
        y={c + size * 0.0846}
        textAnchor="middle"
        fontSize={size * 0.246}
        fill={activeColor}
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        style={{ opacity: revealed ? 1 : 0, transition: 'opacity 1s ease 0.3s' }}
      >
        {value}
      </text>
      <text
        x={c}
        y={c + size * 0.1615}
        textAnchor="middle"
        fontSize={size * 0.0385}
        letterSpacing="3"
        fill="#8E86A3"
        fontFamily="'Space Grotesk', sans-serif"
      >
        OF NINE
      </text>
    </svg>
  );
}
