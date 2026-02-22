'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Copy, Check, QrCode } from 'lucide-react';
import { WAVE_RECIPIENT, HADIYYA_TEXT } from '../waveDonation';

interface WaveHadiyyaCardProps {
  locale: 'en' | 'fr';
}

// Wave Sénégal Logo (simplified)
const WaveLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <circle cx="12" cy="12" r="10" fill="#1DC7EA"/>
    <path d="M7 12c1.5-2 3-3 5-3s3.5 1 5 3c-1.5 2-3 3-5 3s-3.5-1-5-3z" fill="white"/>
    <circle cx="12" cy="12" r="2" fill="#1DC7EA"/>
  </svg>
);

// SendWave Logo (simplified globe style)
const SendWaveLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <circle cx="12" cy="12" r="10" fill="#6366F1"/>
    <ellipse cx="12" cy="12" rx="4" ry="9" stroke="white" strokeWidth="1.5" fill="none"/>
    <line x1="3" y1="12" x2="21" y2="12" stroke="white" strokeWidth="1.5"/>
    <path d="M4 8h16M4 16h16" stroke="white" strokeWidth="1" opacity="0.6"/>
  </svg>
);

export function WaveHadiyyaCard({ locale }: WaveHadiyyaCardProps) {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const t = HADIYYA_TEXT[locale];

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(WAVE_RECIPIENT.phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
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
    <div className="w-full max-w-md mb-4">
      {/* Title */}
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
        {t.title} • {t.subtitle}
      </p>
      <p className="text-base font-medium text-amber-700 dark:text-amber-300 mb-3">
        {WAVE_RECIPIENT.name}
      </p>

      {/* QR Code Toggle Button */}
      <button
        onClick={() => setShowQR(!showQR)}
        className="w-full flex items-center justify-center gap-2 py-2.5 px-3 mb-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-medium text-sm transition-all shadow-md shadow-cyan-500/20"
      >
        <QrCode className="w-5 h-5" />
        <span>🇸🇳 {showQR ? (locale === 'fr' ? 'Masquer QR Code' : 'Hide QR Code') : (locale === 'fr' ? 'Scanner QR Wave Sénégal' : 'Scan Wave Senegal QR')}</span>
      </button>

      {/* QR Code Display */}
      {showQR && (
        <div className="mb-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-cyan-200 dark:border-cyan-800 animate-in slide-in-from-top-2 duration-200">
          <div className="flex justify-center">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <Image
                src="/images/wave_qr_773363584.png"
                alt="Wave Sénégal QR Code"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-3">
            {locale === 'fr' ? 'Scannez avec l\'app Wave Sénégal' : 'Scan with Wave Senegal app'}
          </p>
        </div>
      )}

      {/* Buttons Row */}
      <div className="flex gap-2 mb-2">
        {/* Wave Sénégal */}
        <a
          href={WAVE_RECIPIENT.waveUrlSenegal}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-cyan-50 hover:bg-cyan-100 dark:bg-cyan-900/30 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 font-medium text-sm transition-all"
        >
          <WaveLogo />
          <span>🇸🇳 Wave</span>
        </a>

        {/* SendWave International */}
        <a
          href={WAVE_RECIPIENT.sendWaveUrl[locale]}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 font-medium text-sm transition-all"
        >
          <SendWaveLogo />
          <span>🌍 SendWave</span>
        </a>

        {/* Copy Number */}
        <button
          onClick={copyNumber}
          className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border text-sm font-medium transition-all ${
            copied
              ? 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400'
              : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
          }`}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span className="hidden sm:inline">{copied ? t.copied : t.copyNumber}</span>
        </button>
      </div>

      {/* Phone number display */}
      <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
        {WAVE_RECIPIENT.phoneDisplay}
      </p>
    </div>
  );
}
