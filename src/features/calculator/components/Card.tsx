import type { ReactNode } from 'react';

export function Card({
  children,
  className = '',
  padding = 'p-4',
}: {
  children: ReactNode;
  className?: string;
  padding?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/60 ${padding} shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
