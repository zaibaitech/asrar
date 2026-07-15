import React, { useState } from 'react';
import { Heart, Calculator } from 'lucide-react';

interface AstrologicalInputFormProps {
  onCalculate: (
    person1Name: string,
    person1Dob: string,
    person2Name: string,
    person2Dob: string
  ) => void;
  language?: 'en' | 'fr' | 'ar';
  isLoading?: boolean;
}

export function AstrologicalInputForm({ onCalculate, language = 'en', isLoading = false }: AstrologicalInputFormProps) {
  const isFrench = language === 'fr';
  const [person1Name, setPerson1Name] = useState('');
  const [person1Dob, setPerson1Dob] = useState('');
  const [person2Name, setPerson2Name] = useState('');
  const [person2Dob, setPerson2Dob] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!person1Dob || !person2Dob) {
      alert(isFrench
        ? 'Veuillez entrer la date de naissance des deux personnes'
        : 'Please enter the date of birth for both people');
      return;
    }

    onCalculate(
      person1Name || (isFrench ? 'Personne 1' : 'Person 1'),
      person1Dob,
      person2Name || (isFrench ? 'Personne 2' : 'Person 2'),
      person2Dob
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg">

      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-rose-500">
            <Heart className="w-5 h-5 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {isFrench ? 'Entrez Deux Dates de Naissance' : 'Enter Two Birth Dates'}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {isFrench
            ? "Compatibilité astrologique générale basée sur le signe solaire, lunaire et Vénus-Mars — sans heure de naissance"
            : 'General astrological compatibility from Sun sign, Moon sign, and Venus-Mars — no birth time needed'}
        </p>
      </div>

      {/* Person 1 */}
      <div className="space-y-3 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-100 dark:border-purple-900/40">
        <h4 className="font-semibold text-purple-900 dark:text-purple-300">
          {isFrench ? 'Personne 1' : 'Person 1'}
        </h4>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {isFrench ? "Nom d'Affichage (Optionnel)" : 'Display Name (Optional)'}
          </label>
          <input
            type="text"
            value={person1Name}
            onChange={(e) => setPerson1Name(e.target.value)}
            placeholder={isFrench ? 'ex: Ahmed' : 'e.g., Ahmed'}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {isFrench ? 'Date de Naissance (Requis)' : 'Date of Birth (Required)'} <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={person1Dob}
            onChange={(e) => setPerson1Dob(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Heart divider */}
      <div className="flex items-center justify-center">
        <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-rose-500 shadow-md">
          <Heart className="w-4 h-4 text-white" fill="white" />
        </div>
      </div>

      {/* Person 2 */}
      <div className="space-y-3 p-4 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-100 dark:border-rose-900/40">
        <h4 className="font-semibold text-rose-900 dark:text-rose-300">
          {isFrench ? 'Personne 2' : 'Person 2'}
        </h4>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {isFrench ? "Nom d'Affichage (Optionnel)" : 'Display Name (Optional)'}
          </label>
          <input
            type="text"
            value={person2Name}
            onChange={(e) => setPerson2Name(e.target.value)}
            placeholder={isFrench ? 'ex: Fatima' : 'e.g., Fatima'}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-rose-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {isFrench ? 'Date de Naissance (Requis)' : 'Date of Birth (Required)'} <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={person2Dob}
            onChange={(e) => setPerson2Dob(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-rose-500"
          />
        </div>
      </div>

      {/* Calculate Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-700 hover:to-rose-700 text-white font-semibold rounded-lg shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            {isFrench ? 'Calcul en cours...' : 'Calculating...'}
          </>
        ) : (
          <>
            <Calculator className="w-5 h-5" />
            {isFrench ? 'Calculer la Compatibilité' : 'Calculate Compatibility'}
          </>
        )}
      </button>

    </form>
  );
}
