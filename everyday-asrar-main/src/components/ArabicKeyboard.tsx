'use client';

import React, { useState } from 'react';
import { Keyboard, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ArabicKeyboardProps {
  onKeyPress: (char: string) => void;
  onClose?: () => void;
  onBackspace?: () => void;
  onSpace?: () => void;
}

const ARABIC_KEYS = [
  // Row 1 - 10 letters (alif shown with hamza for visibility)
  ['أ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر'],
  // Row 2 - 10 letters
  ['ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف'],
  // Row 3 - 8 letters + special
  ['ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'],
  // Row 4 - Special forms (plain alif included here)
  ['ا', 'ء', 'ة', 'ى', 'ئ', 'ؤ', 'لا', 'ـ']
];

const TASHKEEL_KEYS = [
  { char: 'َ', label: 'Fatha', color: 'blue' },
  { char: 'ِ', label: 'Kasra', color: 'green' },
  { char: 'ُ', label: 'Damma', color: 'purple' },
  { char: 'ّ', label: 'Shadda', color: 'red' },
  { char: 'ْ', label: 'Sukun', color: 'gray' },
  { char: 'ً', label: 'Tanwin F', color: 'blue' },
  { char: 'ٍ', label: 'Tanwin K', color: 'green' },
  { char: 'ٌ', label: 'Tanwin D', color: 'purple' }
];

export function ArabicKeyboard({ onKeyPress, onClose, onBackspace, onSpace }: ArabicKeyboardProps) {
  const { t } = useLanguage();
  const [showTashkeel, setShowTashkeel] = useState(false);
  
  const handleBackspace = () => {
    if (onBackspace) {
      onBackspace();
    }
    // Note: No fallback to onKeyPress - backspace should only delete, not insert a character
  };

  const handleSpace = () => {
    if (onSpace) {
      onSpace();
    } else {
      onKeyPress(' '); // Insert actual space character as fallback
    }
  };
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-300 dark:border-slate-600 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-700 dark:to-purple-700">
        <div className="flex items-center gap-2 text-white">
          <Keyboard className="w-5 h-5" />
          <span className="text-sm font-semibold">لوحة المفاتيح العربية</span>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close keyboard"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        )}
      </div>
      
      <div className="p-3 space-y-2">
        {/* Main Letter Keys */}
        {ARABIC_KEYS.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1 justify-center">
            {row.map((key, keyIndex) => (
              <button
                type="button"
                key={`${rowIndex}-${keyIndex}-${key}`}
                onClick={() => onKeyPress(key)}
                className="min-w-[2.2rem] sm:min-w-[2.5rem] h-11 sm:h-12 px-1 rounded-lg font-arabic text-xl sm:text-2xl
                  bg-slate-50 dark:bg-slate-700 
                  border-2 border-slate-200 dark:border-slate-600
                  hover:bg-indigo-50 dark:hover:bg-indigo-900/30
                  active:bg-indigo-100 dark:active:bg-indigo-900/50
                  active:scale-95
                  shadow-sm hover:shadow-md
                  transition-all duration-150
                  font-bold text-slate-800 dark:text-slate-100"
              >
                {key}
              </button>
            ))}
          </div>
        ))}
        
        {/* Tashkeel Toggle & Display */}
        <div className="pt-2 border-t-2 border-slate-200 dark:border-slate-600">
          <button
            type="button"
            onClick={() => setShowTashkeel(!showTashkeel)}
            className={`w-full py-2 rounded-lg font-medium text-sm transition-all mb-2 ${
              showTashkeel
                ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border-2 border-purple-400 dark:border-purple-600'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 border-2 border-slate-300 dark:border-slate-600'
            }`}
          >
            {showTashkeel ? '✓ التشكيل (Tashkeel)' : '○ التشكيل (Tashkeel)'}
          </button>
          
          {showTashkeel && (
            <div className="grid grid-cols-4 gap-1.5 mb-2 animate-slide-down">
              {TASHKEEL_KEYS.map(({ char, label, color }) => (
                <button
                  type="button"
                  key={char}
                  onClick={() => onKeyPress(char)}
                  className={`h-14 rounded-lg font-arabic text-2xl font-bold
                    border-2 shadow-sm hover:shadow-md
                    active:scale-95 transition-all duration-150
                    ${color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-100' : ''}
                    ${color === 'green' ? 'bg-green-50 dark:bg-green-900/30 border-green-300 dark:border-green-700 text-green-700 dark:text-green-300 hover:bg-green-100' : ''}
                    ${color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-100' : ''}
                    ${color === 'red' ? 'bg-red-50 dark:bg-red-900/30 border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 hover:bg-red-100' : ''}
                    ${color === 'gray' ? 'bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100' : ''}
                  `}
                  title={label}
                >
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-2xl leading-none">{char}</span>
                    <span className="text-[0.6rem] leading-none mt-1 opacity-75">{label}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <button
            type="button"
            onClick={handleSpace}
            className="h-12 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 
              border-2 border-blue-600 dark:border-blue-400
              text-white font-bold text-sm shadow-lg hover:shadow-xl
              active:scale-95 transition-all duration-150"
          >
            <span className="text-xl">⎵</span> مسافة
          </button>
          <button
            type="button"
            onClick={handleBackspace}
            className="h-12 rounded-lg bg-red-500 hover:bg-red-600 active:bg-red-700 
              border-2 border-red-600 dark:border-red-400
              text-white font-bold text-sm shadow-lg hover:shadow-xl
              active:scale-95 transition-all duration-150"
          >
            <span className="text-xl">⌫</span> حذف
          </button>
        </div>
      </div>
      
      <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900/50 text-center border-t border-slate-200 dark:border-slate-700">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          اضغط على الحروف للكتابة • Tap letters to type
        </p>
      </div>
    </div>
  );
}
