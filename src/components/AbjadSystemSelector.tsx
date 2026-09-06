'use client';

import React from 'react';
import { useAbjad } from '../contexts/AbjadContext';
import { Globe2 } from 'lucide-react';

export function AbjadSystemSelector({ compact = false }: { compact?: boolean } = {}) {
  const { system, setSystem } = useAbjad();

  if (compact) {
    return (
      <div className="flex items-center gap-2 bg-navy-card rounded-lg p-2">
        <button
          onClick={() => setSystem('Maghribi')}
          className={`px-3 py-1 rounded text-xs font-medium transition-all ${
            system === 'Maghribi'
              ? 'bg-gold text-navy'
              : 'bg-navy text-slate-300 hover:bg-white/10'
          }`}
        >
          Maghribi
        </button>
        <button
          onClick={() => setSystem('Mashriqi')}
          className={`px-3 py-1 rounded text-xs font-medium transition-all ${
            system === 'Mashriqi'
              ? 'bg-gold text-navy'
              : 'bg-navy text-slate-300 hover:bg-white/10'
          }`}
        >
          Mashriqi
        </button>
      </div>
    );
  }

  return (
    <div className="bg-navy-card rounded-lg p-4 border border-gold/20">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <Globe2 className="w-5 h-5 text-gold" />
          <div>
            <div className="font-semibold text-slate-100">
              Abjad System
            </div>
            <div className="text-xs text-slate-400">
              Current Mode: <span className="font-medium text-gold">{system}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setSystem('Maghribi')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              system === 'Maghribi'
                ? 'bg-gold text-navy shadow-lg'
                : 'bg-navy text-slate-300 border border-white/10 hover:border-gold/40'
            }`}
          >
            Maghribi
            <div className="text-xs opacity-75">Western</div>
          </button>
          <button
            onClick={() => setSystem('Mashriqi')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              system === 'Mashriqi'
                ? 'bg-gold text-navy shadow-lg'
                : 'bg-navy text-slate-300 border border-white/10 hover:border-gold/40'
            }`}
          >
            Mashriqi
            <div className="text-xs opacity-75">Eastern</div>
          </button>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gold/20">
        <div className="text-xs text-slate-400">
          {system === 'Maghribi' ? (
            <>
              <span className="font-medium">Maghribi System:</span> Traditional North African method (ش=1000, غ=300)
            </>
          ) : (
            <>
              <span className="font-medium">Mashriqi System:</span> Standard Eastern method (ش=300, غ=1000)
            </>
          )}
        </div>
      </div>
    </div>
  );
}
