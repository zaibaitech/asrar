'use client';

import { useState, useEffect, useCallback } from 'react';
import { PLANETARY_ZIKR } from '@/src/lib/planetaryZikr';
import { translations } from '@/src/lib/translations';
import { TasbihCounter } from '@/src/features/ramadanChallenges/components/TasbihCounter';
import { queueDhikrIncrement } from '@/src/features/ramadanChallenges/communityDhikrService';

type Props = {
  planetKey: string;
  context?: string;
  showWhen?: 'always' | 'auspicious-only';
  isAuspicious?: boolean;
  language?: 'en' | 'fr';
};

// Parse the first number from a count string like "66 or 594", "298", "1000×"
function parseTargetCount(countStr: string): number {
  const match = countStr.match(/\d+/);
  return match ? parseInt(match[0], 10) : 33;
}

function getStorageKey(planetKey: string, zikrName: string): string {
  return `planetary_zikr_${planetKey}_${zikrName}`;
}

export function ZikrPracticePanel({
  planetKey,
  context,
  showWhen = 'always',
  isAuspicious,
  language = 'en',
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [openTasbihIndex, setOpenTasbihIndex] = useState<number | null>(null);
  const [counts, setCounts] = useState<Record<string, number>>({});

  const data = PLANETARY_ZIKR[planetKey?.toLowerCase()];
  const t = translations[language].planetary.zikr;
  const tTasbih = translations[language].tasbih;

  // Load persisted counts from localStorage
  useEffect(() => {
    if (!data) return;
    const loaded: Record<string, number> = {};
    for (const entry of data.zikr) {
      const key = getStorageKey(planetKey, entry.name);
      const stored = localStorage.getItem(key);
      if (stored) loaded[entry.name] = parseInt(stored, 10) || 0;
    }
    setCounts(loaded);
  }, [data, planetKey]);

  const handleTasbihComplete = useCallback((zikrName: string, count: number) => {
    if (count <= 0) return;
    const key = getStorageKey(planetKey, zikrName);
    setCounts((prev) => {
      const updated = { ...prev, [zikrName]: (prev[zikrName] || 0) + count };
      localStorage.setItem(key, String(updated[zikrName]));
      return updated;
    });
    queueDhikrIncrement(count, `planetary_${planetKey}_${zikrName}`);
    setOpenTasbihIndex(null);
  }, [planetKey]);

  if (!data) return null;
  if (data.zikr.length === 0) return null;
  if (showWhen === 'auspicious-only' && !isAuspicious) return null;

  const openEntry = openTasbihIndex !== null ? data.zikr[openTasbihIndex] : null;

  return (
    <div className="zikr-panel" style={{ borderColor: data.color }}>
      <button
        type="button"
        className="zikr-panel-header"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
      >
        <span className="zikr-planet-badge" style={{ background: data.color }}>
          {data.planet} {data.label}
        </span>
        <span className="zikr-panel-title">
          {context ? `${context} - ` : ''}
          {t.recommendedZikr}
        </span>
        <span className="zikr-toggle-icon">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="zikr-panel-body">
          {(language === 'fr' ? data.sectionNoteFr : data.sectionNote) && (
            <p className="zikr-section-note">{language === 'fr' ? data.sectionNoteFr : data.sectionNote}</p>
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
                  {(language === 'fr' ? entry.noteFr : entry.note) && (
                    <span className="zikr-badge">{language === 'fr' ? entry.noteFr : entry.note}</span>
                  )}
                  <span className="zikr-count" style={{ color: data.color }}>
                    {entry.count}x
                  </span>
                </div>
                <p className="zikr-benefit">{language === 'fr' && entry.benefitFr ? entry.benefitFr : entry.benefit}</p>
                <div className="zikr-tasbih-row">
                  <button
                    type="button"
                    className="zikr-tasbih-btn"
                    onClick={() => setOpenTasbihIndex(index)}
                    style={{ borderColor: data.color, color: data.color }}
                  >
                    <span>📿</span>
                    <span>{tTasbih.openTasbih}</span>
                  </button>
                  {(counts[entry.name] || 0) > 0 && (
                    <span className="zikr-tasbih-total" style={{ color: data.color }}>
                      {(counts[entry.name] || 0).toLocaleString()} {language === 'fr' ? 'total' : 'total'}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <p className="zikr-footer-note">
            {t.footerNote}
          </p>
        </div>
      )}

      {openEntry && (
        <TasbihCounter
          isOpen={openTasbihIndex !== null}
          onClose={() => setOpenTasbihIndex(null)}
          onComplete={(count) => handleTasbihComplete(openEntry.name, count)}
          arabicText={openEntry.arabicName || openEntry.name}
          transliteration={openEntry.name}
          targetCount={parseTargetCount(openEntry.count)}
          language={language}
        />
      )}
    </div>
  );
}
