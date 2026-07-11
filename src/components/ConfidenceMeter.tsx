'use client';

import { AlertTriangle, CheckCircle } from 'lucide-react';

export function ConfidenceMeter({ confidence, warnings }: { confidence: number; warnings: string[] }) {
  const color = confidence >= 80 ? 'green' : confidence >= 60 ? 'yellow' : 'red';

  return (
    <div className={`rounded-lg p-3 border ${
      color === 'green' ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' :
      color === 'yellow' ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800' :
      'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
    }`}>
      <div className="flex items-center gap-2 mb-2">
        {color === 'yellow' || color === 'red' ? (
          <AlertTriangle className={`w-4 h-4 ${color === 'yellow' ? 'text-yellow-600' : 'text-red-600'}`} />
        ) : (
          <CheckCircle className="w-4 h-4 text-green-600" />
        )}
        <span className={`text-sm font-medium ${
          color === 'green' ? 'text-green-900 dark:text-green-100' :
          color === 'yellow' ? 'text-yellow-900 dark:text-yellow-100' :
          'text-red-900 dark:text-red-100'
        }`}>
          Transliteration Confidence: {confidence}%
        </span>
      </div>

      {confidence < 80 && (
        <div className={`text-xs ${
          color === 'yellow' ? 'text-yellow-800 dark:text-yellow-200' : 'text-red-800 dark:text-red-200'
        }`}>
          {warnings.length > 0 ? (
            <div>
              {warnings.map((w, i) => (
                <div key={i}>• {w}</div>
              ))}
            </div>
          ) : (
            <div>Please verify the Arabic spelling before calculating.</div>
          )}
        </div>
      )}
    </div>
  );
}
