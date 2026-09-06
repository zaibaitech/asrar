'use client';

import { useState, type ReactNode } from 'react';
import { Info, ChevronDown } from 'lucide-react';

/**
 * Small tap-to-expand disclosure for methodology/provenance text — used
 * throughout the calculator result so every derived value can be traced
 * back to how it was actually calculated, instead of asserting it silently.
 */
export function InfoDisclosure({
  label,
  children,
  icon = 'info',
}: {
  label: string;
  children: ReactNode;
  icon?: 'info' | 'chevron';
}) {
  const [open, setOpen] = useState(false);
  const Icon = icon === 'info' ? Info : ChevronDown;

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1 text-xs font-medium text-indigo-600 dark:text-indigo-400"
      >
        <Icon size={12} aria-hidden />
        {label}
        {icon === 'chevron' && (
          <ChevronDown size={12} className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden />
        )}
      </button>
      {open && (
        <div className="mt-1.5 rounded-lg bg-slate-100 p-2.5 text-xs leading-relaxed text-slate-600 dark:bg-slate-900/60 dark:text-slate-400">
          {children}
        </div>
      )}
    </div>
  );
}

/** Bare (i) icon that toggles an explanation panel below — for inline use next to a value/title. */
export function InfoIconButton({ onClick, active }: { onClick: () => void; active?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="More information"
      className={`flex h-4 w-4 items-center justify-center rounded-full ${active ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}`}
    >
      <Info size={13} aria-hidden />
    </button>
  );
}
