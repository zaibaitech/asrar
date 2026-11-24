'use client';

import { useAbjad } from '../contexts/AbjadContext';
import { useLanguage } from '../contexts/LanguageContext';
import {
  ABJAD_SYSTEM_SELECTOR_ID,
  abjadSystemUsedCopy,
  focusAbjadSystemSelector,
} from '../lib/abjadSystemUsedCopy';

/**
 * Subtle line under an Abjad total / burj result: which letter table was used,
 * plus a link that scrolls to the existing system switch. No modal, no new UI type.
 */
export function AbjadSystemUsedNote({
  variant = 'muted',
  className = '',
}: {
  variant?: 'muted' | 'onDark';
  className?: string;
}) {
  const { system } = useAbjad();
  const { uiLanguage, t } = useLanguage();
  const { line, change } = abjadSystemUsedCopy(uiLanguage, system, {
    maghribi: t.abjadSystem.maghribi,
    mashriqi: t.abjadSystem.mashriqi,
  });

  const color =
    variant === 'onDark'
      ? 'text-xs leading-snug text-white/55'
      : 'text-xs leading-snug text-slate-500 dark:text-slate-400';
  const link =
    variant === 'onDark'
      ? 'underline underline-offset-2 text-white/70 hover:text-white'
      : 'underline underline-offset-2 hover:text-slate-700 dark:hover:text-slate-200';

  return (
    <p className={`${color} ${className}`.trim()} data-testid="abjad-system-used">
      {line}
      {' · '}
      <a
        href={`#${ABJAD_SYSTEM_SELECTOR_ID}`}
        className={link}
        onClick={(event) => {
          event.preventDefault();
          focusAbjadSystemSelector();
        }}
      >
        {change}
      </a>
    </p>
  );
}
