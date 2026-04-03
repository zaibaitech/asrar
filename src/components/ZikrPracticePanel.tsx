'use client';

import { useState } from 'react';
import { PLANETARY_ZIKR, LocalizedText } from '@/src/lib/planetaryZikr';
import { translations } from '@/src/lib/translations';

type Props = {
  planetKey: string;
  context?: string;
  showWhen?: 'always' | 'auspicious-only';
  isAuspicious?: boolean;
  language?: 'en' | 'fr';
};

export function ZikrPracticePanel({
  planetKey,
  context,
  showWhen = 'always',
  isAuspicious,
  language = 'en',
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const data = PLANETARY_ZIKR[planetKey?.toLowerCase()];
  const t = translations[language].planetary.zikr;

  const getText = (field: LocalizedText) => field[language] ?? field.en;

  if (!data) return null;
  if (data.zikr.length === 0) return null;
  if (showWhen === 'auspicious-only' && !isAuspicious) return null;

  return (
    <div className="zikr-panel" style={{ borderColor: data.color }}>
      <button
        type="button"
        className="zikr-panel-header"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
      >
        <span className="zikr-planet-badge" style={{ background: data.color }}>
          {data.planet} {getText(data.label)}
        </span>
        <span className="zikr-panel-title">
          {context ? `${context} - ` : ''}
          {t.recommendedZikr}
        </span>
        <span className="zikr-toggle-icon">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="zikr-panel-body">
          {data.sectionNote && (
            <p className="zikr-section-note">{getText(data.sectionNote)}</p>
          )}
          <ul className="zikr-list">
            {data.zikr.map((entry, index) => (
              <li key={`${entry.name}-${index}`} className="zikr-item">
                <div className="zikr-item-header">
                  <div className="zikr-name-group">
                    <span className="zikr-name">{entry.name}</span>
                    {entry.arabicName && (
                      <span className="zikr-arabic-name font-arabic" dir="rtl" lang="ar">
                        {entry.arabicName}
                      </span>
                    )}
                  </div>
                  {entry.note && <span className="zikr-badge">{getText(entry.note)}</span>}
                  <span className="zikr-count" style={{ color: data.color }}>
                    {entry.count}x
                  </span>
                </div>
                <p className="zikr-benefit">{getText(entry.benefit)}</p>
              </li>
            ))}
          </ul>
          <p className="zikr-footer-note">
            {t.footerNote}
          </p>
        </div>
      )}
    </div>
  );
}