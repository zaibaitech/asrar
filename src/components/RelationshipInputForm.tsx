import React, { useState, useEffect } from 'react';
import { Heart, Calculator } from 'lucide-react';
import { useProfile } from '../hooks/useProfile';

interface RelationshipInputFormProps {
  onCalculate: (
    person1Name: string,
    person1Arabic: string,
    person2Name: string,
    person2Arabic: string
  ) => void;
  language?: 'en' | 'fr' | 'ar';
  isLoading?: boolean;
}

export function RelationshipInputForm({ onCalculate, language = 'en', isLoading = false }: RelationshipInputFormProps) {
  const isFrench = language === 'fr';
  const { profile } = useProfile();
  const [person1Name, setPerson1Name] = useState('');
  const [person1Arabic, setPerson1Arabic] = useState('');
  const [person2Name, setPerson2Name] = useState('');
  const [person2Arabic, setPerson2Arabic] = useState('');
  
  // Auto-fill Person 1 from profile
  useEffect(() => {
    if (profile) {
      if (!person1Arabic && profile.full_name) {
        setPerson1Arabic(profile.full_name);
      }
    }
  }, [profile]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!person1Arabic.trim() || !person2Arabic.trim()) {
      alert(isFrench 
        ? 'Veuillez entrer les noms arabes pour les deux personnes' 
        : 'Please enter Arabic names for both people');
      return;
    }
    
    onCalculate(
      person1Name || person1Arabic,
      person1Arabic,
      person2Name || person2Arabic,
      person2Arabic
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
          {isFrench ? 'Entrez Deux Noms' : 'Enter Two Names'}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {isFrench
            ? 'Calculez la compatibilité en utilisant la numérologie islamique traditionnelle'
            : 'Calculate compatibility using traditional Islamic numerology'}
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
            {isFrench ? 'Nom Arabe (Requis)' : 'Arabic Name (Required)'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={person1Arabic}
            onChange={(e) => setPerson1Arabic(e.target.value)}
            placeholder="أحمد"
            dir="rtl"
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
            {isFrench ? 'Nom Arabe (Requis)' : 'Arabic Name (Required)'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={person2Arabic}
            onChange={(e) => setPerson2Arabic(e.target.value)}
            placeholder="فاطمة"
            dir="rtl"
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
