import React from 'react';

interface SoulConnectionRingProps {
  /** The result soul number, 1-9. */
  value: number;
  size?: number;
  activeColor?: string;
}

/**
 * Nine beads arranged in a circle, starting at the top (-90°) and going
 * clockwise — matching asrar-mobile's SoulConnectionRing.tsx. The bead
 * matching `value` is enlarged and filled with activeColor; the other 8
 * stay small and faint.
 */
export function SoulConnectionRing({ value, size = 140, activeColor = '#d97706' }: SoulConnectionRingProps) {
  const center = size / 2;
  const radius = size / 2 - 14;
  const inactiveFill = 'rgba(217,119,6,0.15)';

  const beads = Array.from({ length: 9 }, (_, i) => {
    const number = i + 1;
    const angle = (-90 + i * (360 / 9)) * (Math.PI / 180);
    const cx = center + radius * Math.cos(angle);
    const cy = center + radius * Math.sin(angle);
    const isActive = number === value;
    return { number, cx, cy, isActive };
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {beads.map(bead => (
        <circle
          key={bead.number}
          cx={bead.cx}
          cy={bead.cy}
          r={bead.isActive ? 9.6 : 8}
          fill={bead.isActive ? activeColor : inactiveFill}
          className="transition-all duration-500"
        />
      ))}
    </svg>
  );
}
