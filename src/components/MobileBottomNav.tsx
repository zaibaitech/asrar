'use client';

import React from 'react';
import Link from 'next/link';
import { Moon, Heart, Star, Calculator as CalculatorIcon, Compass, Menu } from 'lucide-react';

type PrimaryTab = 'planetary' | 'compatibility' | 'calculator' | 'advanced';

interface MobileBottomNavProps {
  language: 'en' | 'fr' | 'ar';
  activeTab: PrimaryTab | null;
  onSelectPlanetary: () => void;
  onOpenCompatibility: () => void;
  onSelectCalculator: () => void;
  onSelectAdvanced: () => void;
  onOpenMore: () => void;
}

/**
 * Fixed bottom tab bar for mobile — replaces the horizontally-scrolling
 * pill row, which had no way to signal it scrolled and silently truncated
 * labels ("Compatibility" -> "Compat.") once too many tabs competed for
 * one row. Every tab here keeps its full label at every width.
 */
export function MobileBottomNav({
  language,
  activeTab,
  onSelectPlanetary,
  onOpenCompatibility,
  onSelectCalculator,
  onSelectAdvanced,
  onOpenMore,
}: MobileBottomNavProps) {
  const isFrench = language === 'fr';

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-slate-200 dark:border-slate-700"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label={isFrench ? 'Navigation principale' : 'Primary navigation'}
    >
      <div className="grid grid-cols-6 items-stretch">
        <TabButton
          onClick={onSelectPlanetary}
          active={activeTab === 'planetary'}
          activeClasses="bg-gradient-to-br from-indigo-600 to-purple-600"
          activeText="text-indigo-600 dark:text-indigo-400"
          icon={<Moon className="w-5 h-5" />}
          label="ʿIlm Nujūm"
        />
        <TabButton
          onClick={onOpenCompatibility}
          active={activeTab === 'compatibility'}
          activeClasses="bg-gradient-to-br from-violet-600 to-pink-600"
          activeText="text-violet-600 dark:text-violet-400"
          icon={<Heart className="w-5 h-5" />}
          label={isFrench ? 'Compatibilité' : 'Compatibility'}
        />
        <TabLink
          href="/ikhtiyarat"
          icon={<Star className="w-5 h-5" />}
          label={isFrench ? 'Meilleures Dates' : 'Best Dates'}
        />
        <TabButton
          onClick={onSelectCalculator}
          active={activeTab === 'calculator'}
          activeClasses="bg-gradient-to-br from-indigo-600 to-blue-600"
          activeText="text-indigo-600 dark:text-indigo-400"
          icon={<CalculatorIcon className="w-5 h-5" />}
          label={isFrench ? 'Calculateur' : 'Calculator'}
        />
        <TabButton
          onClick={onSelectAdvanced}
          active={activeTab === 'advanced'}
          activeClasses="bg-gradient-to-br from-teal-600 to-cyan-600"
          activeText="text-teal-600 dark:text-teal-400"
          icon={<Compass className="w-5 h-5" />}
          label={isFrench ? 'Qui Suis-Je ?' : 'Who Am I?'}
        />
        <TabButton
          onClick={onOpenMore}
          active={false}
          activeClasses=""
          activeText=""
          icon={<Menu className="w-5 h-5" />}
          label={isFrench ? 'Plus' : 'More'}
        />
      </div>
    </nav>
  );
}

function TabButton({ onClick, active, activeClasses, activeText, icon, label }: {
  onClick: () => void;
  active: boolean;
  activeClasses: string;
  activeText: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-1 px-1 py-2.5 min-h-[58px] touch-manipulation"
      aria-current={active ? 'page' : undefined}
    >
      <span className={`flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl transition-colors ${active ? activeClasses + ' text-white' : 'text-slate-500 dark:text-slate-400'}`}>
        {icon}
      </span>
      <span className={`text-[10px] font-semibold leading-[1.15] text-center break-words ${active ? activeText : 'text-slate-500 dark:text-slate-400'}`}>
        {label}
      </span>
    </button>
  );
}

function TabLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex flex-col items-center justify-center gap-1 px-1 py-2.5 min-h-[58px] touch-manipulation">
      <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl text-slate-500 dark:text-slate-400">
        {icon}
      </span>
      <span className="text-[10px] font-semibold leading-[1.15] text-center break-words text-slate-500 dark:text-slate-400">
        {label}
      </span>
    </Link>
  );
}
