import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Asrār Everyday — Sacred Sciences & Divine Timing';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glows */}
        <div
          style={{
            position: 'absolute',
            left: '-60px',
            bottom: '-60px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '-60px',
            top: '-60px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236,72,153,0.14) 0%, transparent 70%)',
          }}
        />

        {/* Logo mark — 8-pointed star SVG */}
        <div style={{ display: 'flex', marginBottom: '32px' }}>
          <svg width="110" height="110" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            <rect width="512" height="512" rx="96" fill="url(#g1)" />
            <circle cx="256" cy="256" r="158" fill="none" stroke="#fff" strokeWidth="2" opacity="0.15" />
            <circle cx="256" cy="256" r="141" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.25" />
            <path
              d="M 256 82 L 329.91 142.04 L 430 82 L 369.96 182.09 L 430 256 L 369.96 329.91 L 430 430 L 329.91 369.96 L 256 430 L 182.09 369.96 L 82 430 L 142.04 329.91 L 82 256 L 142.04 182.09 L 82 82 L 182.09 142.04 Z"
              fill="#fff"
              opacity="0.9"
            />
            <circle cx="256" cy="256" r="55" fill="#FDF4FF" opacity="0.9" />
            <circle cx="256" cy="256" r="16" fill="#8B5CF6" />
            <circle cx="256" cy="173" r="9" fill="#fff" opacity="0.6" />
            <circle cx="328" cy="298" r="9" fill="#fff" opacity="0.6" />
            <circle cx="184" cy="298" r="9" fill="#fff" opacity="0.6" />
          </svg>
        </div>

        {/* App name */}
        <div
          style={{
            display: 'flex',
            fontSize: '72px',
            fontWeight: 700,
            color: '#E5E7EB',
            letterSpacing: '-1px',
            marginBottom: '16px',
          }}
        >
          Asrār Everyday
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            fontSize: '30px',
            color: '#A78BFA',
            marginBottom: '20px',
          }}
        >
          ʿIlm al-Ḥurūf · ʿIlm al-Nujūm · ʿIlm al-ʿAdad
        </div>

        {/* Description */}
        <div
          style={{
            display: 'flex',
            fontSize: '22px',
            color: '#6B7280',
          }}
        >
          Planetary Hours · Abjad Numerology · Zikr Challenges · Name Destiny
        </div>

        {/* Bottom Arabic tagline */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            display: 'flex',
            fontSize: '18px',
            color: '#4B5563',
          }}
        >
          أسرار • Secrets & Mysteries of the Letters
        </div>
      </div>
    ),
    { ...size }
  );
}
