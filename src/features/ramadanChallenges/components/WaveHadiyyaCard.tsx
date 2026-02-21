'use client';

import React, { useState } from 'react';
import { WAVE_RECIPIENT, HADIYYA_TEXT } from '../waveDonation';

interface WaveHadiyyaCardProps {
  locale: 'en' | 'fr';
}

export function WaveHadiyyaCard({ locale }: WaveHadiyyaCardProps) {
  const [copied, setCopied] = useState(false);
  const t = HADIYYA_TEXT[locale];

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(WAVE_RECIPIENT.phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement('input');
      input.value = WAVE_RECIPIENT.phone;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 mb-4">
      {/* Main Card */}
      <div 
        className="rounded-2xl p-6 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 30, 35, 0.95), rgba(45, 40, 50, 0.95))',
          border: '2px solid #D4A843',
          boxShadow: '0 4px 20px rgba(212, 168, 67, 0.15)'
        }}
      >
        {/* Header with Wave Badge */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">💸</span>
          <h3 
            className="text-xl font-semibold"
            style={{ color: '#D4A843' }}
          >
            {t.cardTitle}
          </h3>
        </div>

        {/* Subtitle */}
        <p className="text-gray-300 text-sm mb-5">
          {t.cardSubtitle}
        </p>

        {/* Teacher Block */}
        <div 
          className="rounded-xl p-4 mb-5"
          style={{ 
            background: 'rgba(212, 168, 67, 0.1)',
            border: '1px solid rgba(212, 168, 67, 0.3)'
          }}
        >
          <p className="text-gray-400 text-xs mb-2">{t.teacherLabel}</p>
          <p 
            className="text-lg font-medium mb-1"
            style={{ 
              color: '#D4A843',
              fontFamily: 'var(--font-amiri), serif'
            }}
          >
            {WAVE_RECIPIENT.arabicName}
          </p>
          <p className="text-gray-200 text-sm">
            {WAVE_RECIPIENT.name}
          </p>
        </div>

        {/* Wave Buttons */}
        <div className="flex flex-col gap-3 mb-5">
          {/* Wave Sénégal */}
          <a
            href={WAVE_RECIPIENT.waveUrlSenegal}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{ 
              background: 'linear-gradient(135deg, #00A859, #008547)',
              boxShadow: '0 2px 10px rgba(0, 168, 89, 0.3)'
            }}
          >
            <span className="text-lg">🇸🇳</span>
            {t.senegalBtn}
          </a>

          {/* Wave International */}
          <a
            href={WAVE_RECIPIENT.waveUrlInternational}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{ 
              background: 'linear-gradient(135deg, #1E88E5, #1565C0)',
              boxShadow: '0 2px 10px rgba(30, 136, 229, 0.3)'
            }}
          >
            <span className="text-lg">🌍</span>
            {t.internationalBtn}
          </a>
        </div>

        {/* Copy Number */}
        <button
          onClick={copyNumber}
          className="flex items-center justify-center gap-2 mx-auto py-2 px-4 rounded-lg text-sm transition-all hover:bg-white/10"
          style={{ color: '#D4A843' }}
        >
          <span className="font-mono">{WAVE_RECIPIENT.phone}</span>
          <span className="text-base">{copied ? '✓' : '📋'}</span>
          {copied && (
            <span className="text-green-400 text-xs ml-1">{t.copyDone}</span>
          )}
        </button>

        {/* Baraka Note */}
        <p 
          className="text-xs mt-4 italic"
          style={{ color: 'rgba(212, 168, 67, 0.7)' }}
        >
          {t.barakaNote}
        </p>
      </div>

      {/* Skip Link */}
      <p className="text-center text-gray-500 text-xs mt-3">
        {t.skipLink}
      </p>
    </div>
  );
}
