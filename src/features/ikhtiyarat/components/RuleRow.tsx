'use client';

import { RuleResult } from '@/src/lib/ikhtiyarat/types';
import { UiLang, ruleStatusLabel } from '../copy';

const STATUS_COLOR: Record<RuleResult['status'], string> = {
  pass: '#94A3B8',
  fail: '#EF4444',
  bonus: '#22C55E',
  penalty: '#F59E0B',
  hardfail: '#DC2626',
};

const STATUS_ICON: Record<RuleResult['status'], string> = {
  pass: '·',
  fail: '✕',
  bonus: '+',
  penalty: '−',
  hardfail: '⛔',
};

export function RuleRow({ rule, language }: { rule: RuleResult; language: UiLang }) {
  const color = STATUS_COLOR[rule.status];
  const label = language === 'fr' ? rule.label_fr : rule.label_en;
  const detail = language === 'fr' ? rule.detail_fr : rule.detail_en;
  const statusLabel = ruleStatusLabel[rule.status][language];

  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-slate-100 dark:border-slate-800 last:border-0">
      <span
        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold"
        style={{ backgroundColor: `${color}18`, color }}
      >
        {STATUS_ICON[rule.status]}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
            {label} <span dir="rtl" lang="ar" className="font-arabic text-xs text-slate-400">{rule.label_ar}</span>
          </span>
          <span className="text-xs font-semibold whitespace-nowrap" style={{ color }}>
            {rule.points > 0 ? `+${rule.points}` : rule.points}
          </span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{detail}</p>
        <span className="text-[11px] uppercase tracking-wide" style={{ color }}>
          {statusLabel}
        </span>
      </div>
    </div>
  );
}
