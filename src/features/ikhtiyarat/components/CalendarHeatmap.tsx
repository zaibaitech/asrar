'use client';

import { ElectionResult } from '@/src/lib/ikhtiyarat/types';
import { UiLang } from '../copy';

interface CalendarHeatmapProps {
  results: ElectionResult[];
  language: UiLang;
  onSelectDay: (result: ElectionResult) => void;
}

function groupByMonth(results: ElectionResult[]): Map<string, ElectionResult[]> {
  const map = new Map<string, ElectionResult[]>();
  for (const r of results) {
    const key = `${r.date.getUTCFullYear()}-${r.date.getUTCMonth()}`;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(r);
  }
  return map;
}

export function CalendarHeatmap({ results, language, onSelectDay }: CalendarHeatmapProps) {
  const months = groupByMonth(results);

  return (
    <div className="space-y-6">
      {Array.from(months.entries()).map(([key, days]) => {
        const first = days[0].date;
        const monthLabel = first.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
        const leadingBlanks = first.getUTCDay();

        return (
          <div key={key}>
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 capitalize">{monthLabel}</div>
            <div className="grid grid-cols-7 gap-1.5">
              {Array.from({ length: leadingBlanks }).map((_, i) => (
                <div key={`blank-${i}`} />
              ))}
              {days.map(day => (
                <button
                  key={day.date.toISOString()}
                  onClick={() => onSelectDay(day)}
                  className="aspect-square min-h-11 min-w-11 rounded-lg flex items-center justify-center text-xs font-medium transition-transform hover:scale-105 active:scale-95"
                  style={{ backgroundColor: `${day.tierInfo.color}25`, color: day.tierInfo.color, border: `1px solid ${day.tierInfo.color}50` }}
                  title={`${language === 'fr' ? day.tierInfo.labelFr : day.tierInfo.labelEn} (${day.score})`}
                >
                  {day.date.getUTCDate()}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
