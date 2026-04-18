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
    const today = new Date().toISOString().slice(0, 10);
    const key = getStorageKey(planetKey, zikrName);

    // Write to localStorage synchronously BEFORE dispatching the event
    // so getTotalAppDhikr reads the correct updated value
    const current = parseInt(localStorage.getItem(key) || '0', 10) || 0;
    const newTotal = current + count;
    localStorage.setItem(key, String(newTotal));

    // Track today's planetary zikr total for the banner "today" counter
    const todayKey = 'planetary_zikr_today';
    try {
      const stored = JSON.parse(localStorage.getItem(todayKey) || '{}');
      const todayCount = (stored.date === today ? (stored.count || 0) : 0) + count;
      localStorage.setItem(todayKey, JSON.stringify({ date: today, count: todayCount }));
    } catch { localStorage.setItem(todayKey, JSON.stringify({ date: today, count })); }

    setCounts((prev) => ({ ...prev, [zikrName]: newTotal }));
    queueDhikrIncrement(count, `planetary_${planetKey}_${zikrName}`);
    window.dispatchEvent(new CustomEvent('planetaryZikrUpdate', { detail: { count } }));
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
          {data.sectionNote && (
            <p className="zikr-section-note">{data.sectionNote}</p>
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
                  {entry.note && <span className="zikr-badge">{entry.note}</span>}
                  <span className="zikr-count" style={{ color: data.color }}>
                    {entry.count}x
                  </span>
                </div>
                <p className="zikr-benefit">{entry.benefit}</p>
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
                      {(counts[entry.name] || 0).toLocaleString()} total
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
