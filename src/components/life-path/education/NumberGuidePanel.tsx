/**
 * Number Guide Panel
 * Comprehensive educational profiles for all Life Path numbers (1-9, 11, 22, 33)
 * Based on Divine Timing's PlanetGuidePanel.tsx structure
 */

import React, { useState } from 'react';
import { Sparkles, Heart, Zap, BookOpen, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { LIFE_PATH_MEANINGS, MASTER_NUMBERS } from '../../../constants/lifePathMeanings';

type NumberType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 22 | 33;

export const NumberGuidePanel: React.FC = () => {
  const { language, t } = useLanguage();
  // Arabic not yet supported in language context
  const isArabic = false;
  const isFrench = language === 'fr';
  
  const [selectedNumber, setSelectedNumber] = useState<NumberType>(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'spiritual' | 'practical' | 'classical'>('overview');

  const allNumbers: NumberType[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33];
  
  const tabs = [
    { id: 'overview' as const, label: { en: 'Overview', fr: 'Aperçu', ar: 'نظرة عامة' }, icon: Star },
    { id: 'spiritual' as const, label: { en: 'Spiritual Wisdom', fr: 'Sagesse Spirituelle', ar: 'الحكمة الروحية' }, icon: Sparkles },
    { id: 'practical' as const, label: { en: 'Practical Guide', fr: 'Guide Pratique', ar: 'دليل عملي' }, icon: Heart },
    { id: 'classical' as const, label: { en: 'Classical Sources', fr: 'Sources Classiques', ar: 'المصادر الكلاسيكية' }, icon: BookOpen }
  ];

  const numberData = selectedNumber === 11 || selectedNumber === 22 || selectedNumber === 33
    ? MASTER_NUMBERS[selectedNumber]
    : LIFE_PATH_MEANINGS[selectedNumber];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
          {isArabic ? 'دليل الأرقام الروحية' : isFrench ? 'Guide des Nombres Spirituels' : 'Life Path Number Guide'}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          {isArabic 
            ? 'اكتشف المعاني العميقة لكل رقم مسار حياة' 
            : isFrench 
            ? 'Découvrez les significations profondes de chaque nombre de chemin de vie' 
            : 'Discover the deep meanings of each life path number'}
        </p>
      </div>

      {/* Number Selector */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
          {isArabic ? 'اختر رقماً:' : isFrench ? 'Sélectionnez un Nombre:' : 'Select a Number:'}
        </h3>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
          {allNumbers.map(num => {
            const isMaster = num === 11 || num === 22 || num === 33;
            const isSelected = selectedNumber === num;
            return (
              <button
                key={num}
                onClick={() => setSelectedNumber(num)}
                className={`relative p-4 rounded-xl font-bold text-lg transition-all ${
                  isSelected
                    ? isMaster
                      ? ' text-slate-50 shadow-sm scale-110 bg-indigo-600'
                      : ' text-slate-50 shadow-sm scale-110 bg-indigo-600'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                {num}
                {isMaster && (
                  <div className="absolute -top-1 -right-1">
                    <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                isActive
                  ? 'bg-indigo-600 dark:bg-indigo-700 text-slate-50 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Icon className="w-4 h-4" />
              {isArabic ? tab.label.ar : isFrench ? tab.label.fr : tab.label.en}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8">
        {activeTab === 'overview' && <OverviewTab number={selectedNumber} data={numberData} isArabic={isArabic} isFrench={isFrench} />}
        {activeTab === 'spiritual' && <SpiritualTab number={selectedNumber} data={numberData} isArabic={isArabic} isFrench={isFrench} />}
        {activeTab === 'practical' && <PracticalTab number={selectedNumber} data={numberData} isArabic={isArabic} isFrench={isFrench} />}
        {activeTab === 'classical' && <ClassicalTab number={selectedNumber} data={numberData} isArabic={isArabic} isFrench={isFrench} />}
      </div>
    </div>
  );
};

// ============================================================================
// OVERVIEW TAB
// ============================================================================

const OverviewTab: React.FC<{ number: NumberType; data: any; isArabic: boolean; isFrench: boolean }> = ({ number, data, isArabic, isFrench }) => {
  const isMaster = number === 11 || number === 22 || number === 33;
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center pb-6 border-b border-slate-200 dark:border-slate-700">
        <div className={`inline-block text-6xl font-bold mb-4 ${
          isMaster 
            ? ' text-transparent bg-clip-text bg-indigo-600' 
            : ' text-transparent bg-clip-text bg-indigo-600'
        }`}>
          {number}
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          {isArabic ? data.nameArabic : data.name}
        </h2>
        {isMaster && (
          <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full text-sm font-semibold">
            <Star className="w-4 h-4" />
            {isArabic ? 'رقم رئيسي' : isFrench ? 'Nombre Maître' : 'Master Number'}
          </div>
        )}
      </div>

      {/* Core Attributes */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {data.planet && (
            <AttributeCard
              title={isArabic ? 'الكوكب الحاكم' : isFrench ? 'Planète Gouvernante' : 'Ruling Planet'}
              value={isArabic ? data.planetArabic : data.planet}
              icon="🪐"
              color="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-900 dark:text-indigo-100"
            />
          )}
          {data.element && (
            <AttributeCard
              title={isArabic ? 'العنصر' : isFrench ? 'Élément' : 'Element'}
              value={isArabic ? data.elementArabic : data.element}
              icon={getElementIcon(data.element)}
              color="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-900 dark:text-emerald-100"
            />
          )}
          <AttributeCard
            title={isArabic ? 'المقام الروحي' : isFrench ? 'Station Spirituelle' : 'Spiritual Station'}
            value={isArabic ? data.stationArabic : data.station}
            icon="✨"
            color="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-900 dark:text-indigo-100"
          />
        </div>

        {/* Right Column */}
        <div className=" rounded-xl p-6 bg-white/60 dark:bg-slate-800/40">
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">
            {isArabic ? 'الغرض من الحياة' : isFrench ? 'But de Vie' : 'Life Purpose'}
          </h4>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
            {isArabic ? data.lifePurposeArabic : data.lifePurpose}
          </p>
        </div>
      </div>

      {/* Qualities */}
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
          {isArabic ? 'الصفات الإيجابية' : isFrench ? 'Qualités Positives' : 'Positive Qualities'}
        </h4>
        <div className="flex flex-wrap gap-2">
          {(isArabic ? data.qualitiesArabic || data.qualities : data.qualities).map((quality: string, index: number) => (
            <span key={index} className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
              {quality}
            </span>
          ))}
        </div>
      </div>

      {/* Challenges */}
      {data.challenges && (
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <span className="text-amber-600 dark:text-amber-400">⚠️</span>
            {isArabic ? 'التحديات' : isFrench ? 'Défis' : 'Challenges'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {(isArabic ? data.challengesArabic || data.challenges : data.challenges).map((challenge: string, index: number) => (
              <span key={index} className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm font-medium">
                {challenge}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// SPIRITUAL TAB
// ============================================================================

const SpiritualTab: React.FC<{ number: NumberType; data: any; isArabic: boolean; isFrench: boolean }> = ({ number, data, isArabic, isFrench }) => {
  return (
    <div className="space-y-6">
      {/* Quranic Resonance */}
      <div className=" border border-slate-200 dark:border-slate-700 rounded-xl p-6 bg-white/60 dark:bg-slate-800/40">
        <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3 flex items-center gap-2">
          <span className="text-2xl">📖</span>
          {isArabic ? 'الرنين القرآني' : isFrench ? 'Résonance Coranique' : 'Quranic Resonance'}
        </h4>
        <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed italic">
          "{isArabic ? data.quranResonanceArabic : data.quranResonance}"
        </p>
      </div>

      {/* Spiritual Qualities Deep Dive */}
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-4">
          {isArabic ? 'الصفات الروحية العميقة' : isFrench ? 'Qualités Spirituelles Profondes' : 'Deep Spiritual Qualities'}
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          {getSpiritualQualities(number, isArabic, isFrench).map((quality, index) => (
            <div key={index} className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{quality.icon}</span>
                <div>
                  <h5 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-1">{quality.title}</h5>
                  <p className="text-sm text-indigo-800 dark:text-indigo-200">{quality.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deepest Desire */}
      {data.deepestDesire && (
        <div className=" border border-slate-200 dark:border-slate-700 rounded-xl p-6 bg-white/60 dark:bg-slate-800/40">
          <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5" />
            {isArabic ? 'أعمق رغبة' : isFrench ? 'Désir le Plus Profond' : 'Deepest Desire'}
          </h4>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {isArabic ? data.deepestDesireArabic : data.deepestDesire}
          </p>
        </div>
      )}

      {/* Spiritual Practices */}
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-4">
          {isArabic ? 'الممارسات الروحية الموصى بها' : isFrench ? 'Pratiques Spirituelles Recommandées' : 'Recommended Spiritual Practices'}
        </h4>
        <div className="space-y-3">
          {getSpiritualPractices(number, isArabic, isFrench).map((practice, index) => (
            <div key={index} className="flex items-start gap-3 bg-slate-50 dark:bg-slate-900 rounded-xl p-4">
              <ChevronRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-slate-900 dark:text-white mb-1">{practice.title}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{practice.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// PRACTICAL TAB
// ============================================================================

const PracticalTab: React.FC<{ number: NumberType; data: any; isArabic: boolean; isFrench: boolean }> = ({ number, data, isArabic, isFrench }) => {
  return (
    <div className="space-y-6">
      {/* Career Paths */}
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">💼</span>
          {isArabic ? 'المسارات المهنية المثالية' : isFrench ? 'Chemins de Carrière Idéaux' : 'Ideal Career Paths'}
        </h4>
        <div className="grid md:grid-cols-2 gap-3">
          {getCareerPaths(number, isArabic, isFrench).map((career, index) => (
            <div key={index} className="bg-indigo-50 dark:bg-indigo-900/20 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
              <div className="font-semibold text-indigo-900 dark:text-indigo-100">{career}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Relationship Dynamics */}
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          {isArabic ? 'ديناميكيات العلاقات' : isFrench ? 'Dynamiques Relationnelles' : 'Relationship Dynamics'}
        </h4>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            {getRelationshipDynamics(number, isArabic, isFrench)}
          </p>
          <div className="space-y-2">
            <div className="text-sm">
              <span className="font-semibold text-indigo-900 dark:text-indigo-100">
                {isArabic ? 'الأكثر توافقاً مع:' : isFrench ? 'Plus Compatible Avec:' : 'Most Compatible With:'}
              </span>
              <span className="text-slate-700 dark:text-slate-300 ml-2">
                {getCompatibleNumbers(number).join(', ')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Practices */}
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🌅</span>
          {isArabic ? 'الممارسات اليومية للتوازن' : isFrench ? 'Pratiques Quotidiennes pour l\'Équilibre' : 'Daily Practices for Balance'}
        </h4>
        <div className="space-y-3">
          {getDailyPractices(number, isArabic, isFrench).map((practice, index) => (
            <div key={index} className="flex items-start gap-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 border border-emerald-200 dark:border-emerald-800">
              <span className="text-xl">{practice.icon}</span>
              <div>
                <div className="font-semibold text-emerald-900 dark:text-emerald-100 mb-1">{practice.title}</div>
                <div className="text-sm text-emerald-800 dark:text-emerald-200">{practice.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Life Examples */}
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🌟</span>
          {isArabic ? 'أمثلة عملية' : isFrench ? 'Exemples Pratiques' : 'Practical Examples'}
        </h4>
        <div className="space-y-4">
          {getLifeExamples(number, isArabic, isFrench).map((example, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5 border-l-4 border-slate-300">
              <h5 className="font-semibold text-slate-900 dark:text-white mb-2">{example.title}</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">{example.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// CLASSICAL TAB
// ============================================================================

const ClassicalTab: React.FC<{ number: NumberType; data: any; isArabic: boolean; isFrench: boolean }> = ({ number, data, isArabic, isFrench }) => {
  return (
    <div className="space-y-6">
      {/* Classical Teachings */}
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-4">
          {isArabic ? 'التعاليم الكلاسيكية' : isFrench ? 'Enseignements Classiques' : 'Classical Teachings'}
        </h4>
        <div className="space-y-4">
          {getClassicalTeachings(number, isArabic, isFrench).map((teaching, index) => (
            <div key={index} className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📜</span>
                <div>
                  <blockquote className="text-slate-700 dark:text-slate-300 italic text-lg mb-3 leading-relaxed">
                    "{teaching.quote}"
                  </blockquote>
                  <div className="text-sm text-amber-800 dark:text-amber-200">
                    <span className="font-semibold">— {teaching.scholar}</span>
                    <span className="text-slate-600 dark:text-slate-400 ml-2">({teaching.source})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Historical Context */}
      <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
        <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4 flex items-center gap-2">
          <span className="text-2xl">🕌</span>
          {isArabic ? 'السياق التاريخي' : isFrench ? 'Contexte Historique' : 'Historical Context'}
        </h4>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {getHistoricalContext(number, isArabic, isFrench)}
        </p>
      </div>

      {/* Famous Archetypes */}
      {data.famousArchetypes && (
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">👤</span>
            {isArabic ? 'أنماط مشهورة' : isFrench ? 'Archétypes Célèbres' : 'Famous Archetypes'}
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {(isArabic ? data.famousArchetypesArabic || data.famousArchetypes : data.famousArchetypes).map((archetype: string, index: number) => (
              <div key={index} className="bg-indigo-50 dark:bg-indigo-900/20 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <div className="text-indigo-900 dark:text-indigo-100 font-medium">{archetype}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Concepts */}
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🔗</span>
          {isArabic ? 'مفاهيم ذات صلة' : isFrench ? 'Concepts Connexes' : 'Related Concepts'}
        </h4>
        <div className="flex flex-wrap gap-3">
          {getRelatedConcepts(number, isArabic, isFrench).map((concept, index) => (
            <div key={index} className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-100 px-4 py-2 rounded-full text-sm font-medium">
              {concept}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

const AttributeCard: React.FC<{ title: string; value: string; icon: string; color: string }> = ({ title, value, icon, color }) => (
  <div className={`rounded-xl p-4 ${color}`}>
    <div className="flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <div className="text-xs font-semibold opacity-75 mb-1">{title}</div>
        <div className="font-bold text-lg capitalize">{value}</div>
      </div>
    </div>
  </div>
);

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function getElementIcon(element: string): string {
  const icons: Record<string, string> = {
    fire: '🔥',
    water: '💧',
    air: '💨',
    earth: '🌍'
  };
  return icons[element.toLowerCase()] || '✨';
}

function getSpiritualQualities(number: NumberType, isArabic: boolean, isFrench: boolean) {
  const qualities: Record<number, Array<{ icon: string; title: string; description: string }>> = {
    1: [
      { icon: '👑', title: isArabic ? 'القيادة' : isFrench ? 'Leadership' : 'Leadership', description: isArabic ? 'تقود بالمثال والنزاهة' : isFrench ? 'Diriger par l\'exemple et l\'intégrité' : 'Lead by example and integrity' },
      { icon: '⚡', title: isArabic ? 'المبادرة' : isFrench ? 'Initiative' : 'Initiative', description: isArabic ? 'ابدأ المشاريع بشجاعة' : isFrench ? 'Commencer des projets avec courage' : 'Start projects with courage' }
    ],
    2: [
      { icon: '🤝', title: isArabic ? 'الدبلوماسية' : isFrench ? 'Diplomatie' : 'Diplomacy', description: isArabic ? 'بناء جسور بين الناس' : isFrench ? 'Construire des ponts entre les gens' : 'Build bridges between people' },
      { icon: '💫', title: isArabic ? 'الحدس' : isFrench ? 'Intuition' : 'Intuition', description: isArabic ? 'الاستماع للإرشاد الداخلي' : isFrench ? 'Écouter la guidance intérieure' : 'Listen to inner guidance' }
    ],
    3: [
      { icon: '🎨', title: isArabic ? 'الإبداع' : isFrench ? 'Créativité' : 'Creativity', description: isArabic ? 'التعبير عن الجمال الإلهي' : isFrench ? 'Exprimer la beauté divine' : 'Express divine beauty' },
      { icon: '🗣️', title: isArabic ? 'التواصل' : isFrench ? 'Communication' : 'Communication', description: isArabic ? 'مشاركة الحقيقة بفرح' : isFrench ? 'Partager la vérité avec joie' : 'Share truth with joy' }
    ],
    4: [
      { icon: '🏗️', title: isArabic ? 'البناء' : isFrench ? 'Construction' : 'Building', description: isArabic ? 'إنشاء أساس قوي' : isFrench ? 'Créer des fondations solides' : 'Create solid foundations' },
      { icon: '📋', title: isArabic ? 'الانضباط' : isFrench ? 'Discipline' : 'Discipline', description: isArabic ? 'الالتزام بالممارسة المستمرة' : isFrench ? 'S\'engager dans une pratique constante' : 'Commit to consistent practice' }
    ],
    5: [
      { icon: '🌍', title: isArabic ? 'الحرية' : isFrench ? 'Liberté' : 'Freedom', description: isArabic ? 'استكشاف إمكانيات لا حدود لها' : isFrench ? 'Explorer des possibilités infinies' : 'Explore infinite possibilities' },
      { icon: '🔄', title: isArabic ? 'التكيف' : isFrench ? 'Adaptabilité' : 'Adaptability', description: isArabic ? 'التدفق مع التغيير الإلهي' : isFrench ? 'Suivre le changement divin' : 'Flow with divine change' }
    ],
    6: [
      { icon: '❤️', title: isArabic ? 'الحب' : isFrench ? 'Amour' : 'Love', description: isArabic ? 'رعاية وشفاء الآخرين' : isFrench ? 'Nourrir et guérir les autres' : 'Nurture and heal others' },
      { icon: '⚖️', title: isArabic ? 'الانسجام' : isFrench ? 'Harmonie' : 'Harmony', description: isArabic ? 'خلق التوازن والجمال' : isFrench ? 'Créer équilibre et beauté' : 'Create balance and beauty' }
    ],
    7: [
      { icon: '🔍', title: isArabic ? 'الحكمة' : isFrench ? 'Sagesse' : 'Wisdom', description: isArabic ? 'البحث عن الحقيقة العميقة' : isFrench ? 'Chercher la vérité profonde' : 'Seek deep truth' },
      { icon: '🧘', title: isArabic ? 'التأمل' : isFrench ? 'Contemplation' : 'Contemplation', description: isArabic ? 'الغوص في الأسرار الداخلية' : isFrench ? 'Plonger dans les mystères intérieurs' : 'Dive into inner mysteries' }
    ],
    8: [
      { icon: '💎', title: isArabic ? 'القوة' : isFrench ? 'Pouvoir' : 'Power', description: isArabic ? 'إتقان العالم المادي' : isFrench ? 'Maîtriser le monde matériel' : 'Master the material world' },
      { icon: '👔', title: isArabic ? 'السلطة' : isFrench ? 'Autorité' : 'Authority', description: isArabic ? 'القيادة بحكمة ونزاهة' : isFrench ? 'Diriger avec sagesse et intégrité' : 'Lead with wisdom and integrity' }
    ],
    9: [
      { icon: '🌟', title: isArabic ? 'الرحمة' : isFrench ? 'Compassion' : 'Compassion', description: isArabic ? 'خدمة الإنسانية بحب' : isFrench ? 'Servir l\'humanité avec amour' : 'Serve humanity with love' },
      { icon: '🎁', title: isArabic ? 'الإكمال' : isFrench ? 'Achèvement' : 'Completion', description: isArabic ? 'إنهاء الدورات بنعمة' : isFrench ? 'Terminer les cycles avec grâce' : 'Complete cycles with grace' }
    ],
    11: [
      { icon: '✨', title: isArabic ? 'الإلهام' : isFrench ? 'Inspiration' : 'Inspiration', description: isArabic ? 'إنارة الطريق للآخرين' : isFrench ? 'Éclairer le chemin pour les autres' : 'Light the way for others' },
      { icon: '📡', title: isArabic ? 'الحدس' : isFrench ? 'Intuition' : 'Intuition', description: isArabic ? 'قناة للتوجيه الإلهي' : isFrench ? 'Canal pour la guidance divine' : 'Channel for divine guidance' }
    ],
    22: [
      { icon: '🏛️', title: isArabic ? 'البناء الكبير' : isFrench ? 'Grande Construction' : 'Grand Building', description: isArabic ? 'إظهار الأحلام الروحية' : isFrench ? 'Manifester les rêves spirituels' : 'Manifest spiritual dreams' },
      { icon: '🌉', title: isArabic ? 'الجسر' : isFrench ? 'Pont' : 'Bridge', description: isArabic ? 'ربط الروحاني بالمادي' : isFrench ? 'Relier le spirituel au matériel' : 'Connect spiritual to material' }
    ],
    33: [
      { icon: '🕊️', title: isArabic ? 'الشفاء' : isFrench ? 'Guérison' : 'Healing', description: isArabic ? 'شفاء الآخرين بالحب الإلهي' : isFrench ? 'Guérir les autres avec l\'amour divin' : 'Heal others with divine love' },
      { icon: '👨‍🏫', title: isArabic ? 'التعليم' : isFrench ? 'Enseignement' : 'Teaching', description: isArabic ? 'تعليم الحقائق الروحية' : isFrench ? 'Enseigner les vérités spirituelles' : 'Teach spiritual truths' }
    ]
  };
  return qualities[number] || qualities[1];
}

function getSpiritualPractices(number: NumberType, isArabic: boolean, isFrench: boolean) {
  const practices: Record<number, Array<{ title: string; description: string }>> = {
    1: [
      { title: isArabic ? 'ذكر التوحيد' : isFrench ? 'Dhikr de l\'Unicité' : 'Dhikr of Unity', description: isArabic ? 'كرر "لا إله إلا الله" 100 مرة يومياً' : isFrench ? 'Répéter "Lā ilāha illā Allāh" 100 fois par jour' : 'Repeat "Lā ilāha illā Allāh" 100 times daily' },
      { title: isArabic ? 'تأمل الصباح' : isFrench ? 'Méditation Matinale' : 'Morning Contemplation', description: isArabic ? '10 دقائق من التأمل في النوايا' : isFrench ? '10 minutes de contemplation sur les intentions' : '10 minutes reflecting on intentions' }
    ],
    2: [
      { title: isArabic ? 'ذكر الرحمة' : isFrench ? 'Dhikr de Miséricorde' : 'Dhikr of Mercy', description: isArabic ? 'كرر "الرحمن الرحيم" للرحمة' : isFrench ? 'Répéter "Ar-Raḥmān Ar-Raḥīm" pour la miséricorde' : 'Repeat "Ar-Raḥmān Ar-Raḥīm" for mercy' },
      { title: isArabic ? 'ممارسة الاستماع' : isFrench ? 'Pratique d\'Écoute' : 'Listening Practice', description: isArabic ? 'استمع عميقاً للآخرين دون حكم' : isFrench ? 'Écouter profondément les autres sans jugement' : 'Listen deeply to others without judgment' }
    ],
    3: [
      { title: isArabic ? 'تعبير إبداعي' : isFrench ? 'Expression Créative' : 'Creative Expression', description: isArabic ? 'أنشئ شيئاً جميلاً يومياً' : isFrench ? 'Créer quelque chose de beau chaque jour' : 'Create something beautiful daily' },
      { title: isArabic ? 'ذكر الفرح' : isFrench ? 'Dhikr de Joie' : 'Dhikr of Joy', description: isArabic ? 'اشكر الله على النعم بفرح' : isFrench ? 'Remercier Allah pour les bénédictions avec joie' : 'Thank Allah for blessings with joy' }
    ],
    4: [
      { title: isArabic ? 'روتين منظم' : isFrench ? 'Routine Structurée' : 'Structured Routine', description: isArabic ? 'احتفظ بجدول صلاة منتظم' : isFrench ? 'Maintenir un horaire de prière régulier' : 'Maintain a regular prayer schedule' },
      { title: isArabic ? 'العمل الجسدي' : isFrench ? 'Travail Physique' : 'Physical Work', description: isArabic ? 'خدمة من خلال العمل العملي' : isFrench ? 'Servir par le travail pratique' : 'Serve through practical work' }
    ],
    5: [
      { title: isArabic ? 'استكشاف جديد' : isFrench ? 'Nouvelle Exploration' : 'New Exploration', description: isArabic ? 'تعلم شيئاً جديداً كل أسبوع' : isFrench ? 'Apprendre quelque chose de nouveau chaque semaine' : 'Learn something new each week' },
      { title: isArabic ? 'ذكر الحرية' : isFrench ? 'Dhikr de Liberté' : 'Dhikr of Freedom', description: isArabic ? 'تأمل في الحرية الروحية الحقيقية' : isFrench ? 'Contempler la vraie liberté spirituelle' : 'Contemplate true spiritual freedom' }
    ],
    6: [
      { title: isArabic ? 'خدمة الآخرين' : isFrench ? 'Service aux Autres' : 'Service to Others', description: isArabic ? 'ساعد شخصاً كل يوم بدون توقع' : isFrench ? 'Aider quelqu\'un chaque jour sans attente' : 'Help someone daily without expectation' },
      { title: isArabic ? 'ذكر الحب' : isFrench ? 'Dhikr d\'Amour' : 'Dhikr of Love', description: isArabic ? 'كرر "الودود" للحب الإلهي' : isFrench ? 'Répéter "Al-Wadūd" pour l\'amour divin' : 'Repeat "Al-Wadūd" for divine love' }
    ],
    7: [
      { title: isArabic ? 'تأمل صامت' : isFrench ? 'Méditation Silencieuse' : 'Silent Meditation', description: isArabic ? '30 دقيقة من الصمت يومياً' : isFrench ? '30 minutes de silence par jour' : '30 minutes of silence daily' },
      { title: isArabic ? 'دراسة نصوص مقدسة' : isFrench ? 'Étude de Textes Sacrés' : 'Sacred Text Study', description: isArabic ? 'تأمل في القرآن أو النصوص الصوفية' : isFrench ? 'Contempler le Coran ou textes soufis' : 'Contemplate Quran or Sufi texts' }
    ],
    8: [
      { title: isArabic ? 'ممارسة الوفرة' : isFrench ? 'Pratique d\'Abondance' : 'Abundance Practice', description: isArabic ? 'تبرع 10% من دخلك' : isFrench ? 'Donner 10% de vos revenus' : 'Give 10% of your income' },
      { title: isArabic ? 'ذكر القوة' : isFrench ? 'Dhikr de Force' : 'Dhikr of Strength', description: isArabic ? 'كرر "القوي العزيز" للقوة' : isFrench ? 'Répéter "Al-Qawī Al-ʿAzīz" pour la force' : 'Repeat "Al-Qawī Al-ʿAzīz" for strength' }
    ],
    9: [
      { title: isArabic ? 'عمل خيري' : isFrench ? 'Travail Humanitaire' : 'Humanitarian Work', description: isArabic ? 'تطوع في منظمة خيرية' : isFrench ? 'Faire du bénévolat dans une organisation caritative' : 'Volunteer at a charity' },
      { title: isArabic ? 'ذكر الإكمال' : isFrench ? 'Dhikr d\'Achèvement' : 'Dhikr of Completion', description: isArabic ? 'تأمل في دورات الحياة والإنهاء' : isFrench ? 'Contempler les cycles de vie et l\'achèvement' : 'Contemplate life cycles and completion' }
    ],
    11: [
      { title: isArabic ? 'تأمل النور' : isFrench ? 'Méditation de Lumière' : 'Light Meditation', description: isArabic ? 'تصور نور الله يملأك' : isFrench ? 'Visualiser la lumière d\'Allah vous remplir' : 'Visualize Allah\'s light filling you' },
      { title: isArabic ? 'كتابة الرؤى' : isFrench ? 'Écriture de Visions' : 'Vision Journaling', description: isArabic ? 'سجل الأحلام والرؤى الروحية' : isFrench ? 'Enregistrer rêves et visions spirituelles' : 'Record dreams and spiritual visions' }
    ],
    22: [
      { title: isArabic ? 'تخطيط كبير' : isFrench ? 'Grande Planification' : 'Grand Planning', description: isArabic ? 'خطط لمشاريع تخدم البشرية' : isFrench ? 'Planifier des projets servant l\'humanité' : 'Plan projects serving humanity' },
      { title: isArabic ? 'بناء مجتمع' : isFrench ? 'Construction Communautaire' : 'Community Building', description: isArabic ? 'أنشئ مساحات للتجمع الروحي' : isFrench ? 'Créer des espaces de rassemblement spirituel' : 'Create spaces for spiritual gathering' }
    ],
    33: [
      { title: isArabic ? 'شفاء جماعي' : isFrench ? 'Guérison Collective' : 'Collective Healing', description: isArabic ? 'قد دوائر شفاء للمجتمع' : isFrench ? 'Diriger des cercles de guérison pour la communauté' : 'Lead healing circles for community' },
      { title: isArabic ? 'ذكر الحب الكامل' : isFrench ? 'Dhikr d\'Amour Parfait' : 'Dhikr of Perfect Love', description: isArabic ? 'كرر "الودود الرحيم" 33 مرة' : isFrench ? 'Répéter "Al-Wadūd Ar-Raḥīm" 33 fois' : 'Repeat "Al-Wadūd Ar-Raḥīm" 33 times' }
    ]
  };
  return practices[number] || practices[1];
}

function getCareerPaths(number: NumberType, isArabic: boolean, isFrench: boolean): string[] {
  const careers: Record<number, string[]> = {
    1: isArabic ? ['رائد أعمال', 'قائد', 'مدير تنفيذي', 'مبتكر'] : isFrench ? ['Entrepreneur', 'Leader', 'PDG', 'Innovateur'] : ['Entrepreneur', 'Leader', 'CEO', 'Innovator'],
    2: isArabic ? ['وسيط', 'مستشار', 'مدرس', 'دبلوماسي'] : isFrench ? ['Médiateur', 'Conseiller', 'Enseignant', 'Diplomate'] : ['Mediator', 'Counselor', 'Teacher', 'Diplomat'],
    3: isArabic ? ['فنان', 'كاتب', 'متحدث', 'مصمم'] : isFrench ? ['Artiste', 'Écrivain', 'Conférencier', 'Designer'] : ['Artist', 'Writer', 'Speaker', 'Designer'],
    4: isArabic ? ['محاسب', 'مهندس', 'مدير مشروع', 'بناء'] : isFrench ? ['Comptable', 'Ingénieur', 'Chef de Projet', 'Constructeur'] : ['Accountant', 'Engineer', 'Project Manager', 'Builder'],
    5: isArabic ? ['صحفي', 'مسافر', 'بائع', 'مستكشف'] : isFrench ? ['Journaliste', 'Voyageur', 'Vendeur', 'Explorateur'] : ['Journalist', 'Traveler', 'Salesperson', 'Explorer'],
    6: isArabic ? ['معلم', 'ممرض', 'مستشار', 'فنان'] : isFrench ? ['Enseignant', 'Infirmier', 'Conseiller', 'Artiste'] : ['Teacher', 'Nurse', 'Counselor', 'Artist'],
    7: isArabic ? ['باحث', 'عالم', 'مستشار روحي', 'محلل'] : isFrench ? ['Chercheur', 'Scientifique', 'Conseiller Spirituel', 'Analyste'] : ['Researcher', 'Scientist', 'Spiritual Advisor', 'Analyst'],
    8: isArabic ? ['محامي', 'مدير', 'مصرفي', 'قائد أعمال'] : isFrench ? ['Avocat', 'Directeur', 'Banquier', 'Chef d\'Entreprise'] : ['Lawyer', 'Executive', 'Banker', 'Business Leader'],
    9: isArabic ? ['عامل إنساني', 'فنان', 'معالج', 'معلم روحي'] : isFrench ? ['Humanitaire', 'Artiste', 'Thérapeute', 'Enseignant Spirituel'] : ['Humanitarian', 'Artist', 'Therapist', 'Spiritual Teacher'],
    11: isArabic ? ['مستشار روحي', 'معلم ملهم', 'معالج بالطاقة', 'قائد روحي'] : isFrench ? ['Conseiller Spirituel', 'Enseignant Inspirant', 'Guérisseur Énergétique', 'Leader Spirituel'] : ['Spiritual Counselor', 'Inspirational Teacher', 'Energy Healer', 'Spiritual Leader'],
    22: isArabic ? ['مهندس معماري', 'منظم كبير', 'مخطط مدن', 'بناء إمبراطوريات'] : isFrench ? ['Architecte', 'Grand Organisateur', 'Urbaniste', 'Bâtisseur d\'Empires'] : ['Architect', 'Master Organizer', 'Urban Planner', 'Empire Builder'],
    33: isArabic ? ['معلم روحي', 'معالج', 'مرشد', 'خادم إنساني'] : isFrench ? ['Enseignant Spirituel', 'Guérisseur', 'Guide', 'Serviteur Humanitaire'] : ['Spiritual Teacher', 'Healer', 'Guide', 'Humanitarian Servant']
  };
  return careers[number] || careers[1];
}

function getRelationshipDynamics(number: NumberType, isArabic: boolean, isFrench: boolean): string {
  const dynamics: Record<number, string> = {
    1: isArabic ? 'الرقم 1 يجلب الطاقة القيادية للعلاقات. أنت بحاجة إلى شريك يحترم استقلاليتك بينما يقدم دعماً عاطفياً.' : isFrench ? 'Le numéro 1 apporte une énergie de leadership aux relations. Vous avez besoin d\'un partenaire qui respecte votre indépendance tout en offrant un soutien émotionnel.' : 'Number 1 brings leadership energy to relationships. You need a partner who respects your independence while offering emotional support.',
    2: isArabic ? 'الرقم 2 يزدهر في الشراكات. أنت صانع سلام طبيعي، تسعى للانسجام والاتصال العميق في العلاقات.' : isFrench ? 'Le numéro 2 s\'épanouit dans les partenariats. Vous êtes un pacificateur naturel, recherchant l\'harmonie et la connexion profonde dans les relations.' : 'Number 2 thrives in partnerships. You are a natural peacemaker, seeking harmony and deep connection in relationships.',
    3: isArabic ? 'الرقم 3 يجلب الفرح والإبداع للعلاقات. تحتاج إلى شريك يشارك حبك للحياة ويشجع تعبيرك الإبداعي.' : isFrench ? 'Le numéro 3 apporte joie et créativité aux relations. Vous avez besoin d\'un partenaire qui partage votre amour de la vie et encourage votre expression créative.' : 'Number 3 brings joy and creativity to relationships. You need a partner who shares your love of life and encourages your creative expression.',
    4: isArabic ? 'الرقم 4 يبني أساساً قوياً للعلاقات. أنت مخلص وموثوق، تسعى للاستقرار والالتزام طويل الأمد.' : isFrench ? 'Le numéro 4 construit des fondations solides pour les relations. Vous êtes loyal et fiable, recherchant la stabilité et l\'engagement à long terme.' : 'Number 4 builds solid foundations for relationships. You are loyal and reliable, seeking stability and long-term commitment.',
    5: isArabic ? 'الرقم 5 يحتاج إلى الحرية في العلاقات. أنت مغامر، تحتاج إلى شريك يحب التجارب الجديدة ويحترم حاجتك للمساحة.' : isFrench ? 'Le numéro 5 a besoin de liberté dans les relations. Vous êtes aventureux, nécessitant un partenaire qui aime les nouvelles expériences et respecte votre besoin d\'espace.' : 'Number 5 needs freedom in relationships. You are adventurous, needing a partner who loves new experiences and respects your need for space.',
    6: isArabic ? 'الرقم 6 مهتم ومحب في العلاقات. أنت تعطي بسخاء، لكن احذر من أن تصبح مرهقاً أو تتحكم.' : isFrench ? 'Le numéro 6 est nourrissant et aimant dans les relations. Vous donnez généreusement, mais attention à ne pas vous épuiser ou devenir contrôlant.' : 'Number 6 is nurturing and loving in relationships. You give generously, but beware of becoming overextended or controlling.',
    7: isArabic ? 'الرقم 7 يحتاج إلى العمق الروحي في العلاقات. أنت تقدر الوقت المنفرد، لكنك تبحث عن اتصال عميق وهادف.' : isFrench ? 'Le numéro 7 a besoin de profondeur spirituelle dans les relations. Vous appréciez le temps seul, mais recherchez une connexion profonde et significative.' : 'Number 7 needs spiritual depth in relationships. You value alone time, but seek deep, meaningful connection.',
    8: isArabic ? 'الرقم 8 يجلب القوة والطموح للعلاقات. أنت بحاجة إلى شريك يحترم أهدافك ويمكنه مواكبة طاقتك القوية.' : isFrench ? 'Le numéro 8 apporte pouvoir et ambition aux relations. Vous avez besoin d\'un partenaire qui respecte vos objectifs et peut suivre votre énergie puissante.' : 'Number 8 brings power and ambition to relationships. You need a partner who respects your goals and can match your strong energy.',
    9: isArabic ? 'الرقم 9 عطوف وإنساني في العلاقات. أنت تعطي بحرية، لكن احذر من فقدان نفسك في خدمة الآخرين.' : isFrench ? 'Le numéro 9 est compatissant et humanitaire dans les relations. Vous donnez librement, mais attention à ne pas vous perdre dans le service aux autres.' : 'Number 9 is compassionate and humanitarian in relationships. You give freely, but beware of losing yourself in service to others.',
    11: isArabic ? 'الرقم 11 يبحث عن اتصال روحي عميق. أنت بحاجة إلى شريك يفهم حساسيتك ويشارك رحلتك الروحية.' : isFrench ? 'Le numéro 11 recherche une connexion spirituelle profonde. Vous avez besoin d\'un partenaire qui comprend votre sensibilité et partage votre voyage spirituel.' : 'Number 11 seeks deep spiritual connection. You need a partner who understands your sensitivity and shares your spiritual journey.',
    22: isArabic ? 'الرقم 22 يبني علاقات دائمة بهدف مشترك. أنت بحاجة إلى شريك يشارك رؤيتك الكبيرة ويساعدك على إظهارها.' : isFrench ? 'Le numéro 22 construit des relations durables avec un but partagé. Vous avez besoin d\'un partenaire qui partage votre grande vision et aide à la manifester.' : 'Number 22 builds lasting relationships with shared purpose. You need a partner who shares your grand vision and helps manifest it.',
    33: isArabic ? 'الرقم 33 يقدم حباً غير مشروط في العلاقات. أنت معالج طبيعي، لكن تذكر أنك بحاجة إلى الرعاية أيضاً.' : isFrench ? 'Le numéro 33 offre un amour inconditionnel dans les relations. Vous êtes un guérisseur naturel, mais rappelez-vous que vous avez besoin de soins aussi.' : 'Number 33 offers unconditional love in relationships. You are a natural healer, but remember you need nurturing too.'
  };
  return dynamics[number] || dynamics[1];
}

function getCompatibleNumbers(number: NumberType): number[] {
  const compatibility: Record<number, number[]> = {
    1: [1, 5, 7],
    2: [2, 4, 6, 8],
    3: [3, 6, 9],
    4: [2, 4, 8],
    5: [1, 5, 7],
    6: [2, 3, 6, 9],
    7: [1, 5, 7],
    8: [2, 4, 8],
    9: [3, 6, 9],
    11: [2, 11, 22],
    22: [4, 11, 22],
    33: [6, 9, 33]
  };
  return compatibility[number] || [1];
}

function getDailyPractices(number: NumberType, isArabic: boolean, isFrench: boolean) {
  const practices: Record<number, Array<{ icon: string; title: string; description: string }>> = {
    1: [
      { icon: '🌅', title: isArabic ? 'تأكيدات الصباح' : isFrench ? 'Affirmations Matinales' : 'Morning Affirmations', description: isArabic ? 'ابدأ يومك بتأكيدات إيجابية عن قدراتك' : isFrench ? 'Commencez votre journée avec des affirmations positives sur vos capacités' : 'Start your day with positive affirmations about your abilities' },
      { icon: '🎯', title: isArabic ? 'تحديد الأهداف' : isFrench ? 'Définition d\'Objectifs' : 'Goal Setting', description: isArabic ? 'حدد هدفاً واحداً واضحاً لكل يوم' : isFrench ? 'Fixez un objectif clair pour chaque jour' : 'Set one clear goal for each day' }
    ],
    2: [
      { icon: '🤝', title: isArabic ? 'بناء الجسور' : isFrench ? 'Construire des Ponts' : 'Build Bridges', description: isArabic ? 'ساعد في حل نزاع صغير يومياً' : isFrench ? 'Aider à résoudre un petit conflit chaque jour' : 'Help resolve a small conflict daily' },
      { icon: '🎧', title: isArabic ? 'استماع نشط' : isFrench ? 'Écoute Active' : 'Active Listening', description: isArabic ? 'استمع لشخص دون مقاطعة' : isFrench ? 'Écouter quelqu\'un sans interruption' : 'Listen to someone without interrupting' }
    ],
    3: [
      { icon: '🎨', title: isArabic ? 'إبداع يومي' : isFrench ? 'Créativité Quotidienne' : 'Daily Creativity', description: isArabic ? 'أنشئ شيئاً كل يوم' : isFrench ? 'Créer quelque chose chaque jour' : 'Create something each day' },
      { icon: '😊', title: isArabic ? 'نشر الفرح' : isFrench ? 'Répandre la Joie' : 'Spread Joy', description: isArabic ? 'اجعل شخصاً يبتسم' : isFrench ? 'Faire sourire quelqu\'un' : 'Make someone smile' }
    ],
    4: [
      { icon: '📋', title: isArabic ? 'جدول منظم' : isFrench ? 'Planification Organisée' : 'Organized Schedule', description: isArabic ? 'حافظ على روتين يومي منظم' : isFrench ? 'Maintenir une routine quotidienne organisée' : 'Maintain organized daily routine' },
      { icon: '🔧', title: isArabic ? 'عمل عملي' : isFrench ? 'Travail Pratique' : 'Practical Work', description: isArabic ? 'أكمل مهمة عملية' : isFrench ? 'Accomplir une tâche pratique' : 'Complete a practical task' }
    ],
    5: [
      { icon: '🌍', title: isArabic ? 'تجربة جديدة' : isFrench ? 'Nouvelle Expérience' : 'New Experience', description: isArabic ? 'جرب شيئاً جديداً كل أسبوع' : isFrench ? 'Essayer quelque chose de nouveau chaque semaine' : 'Try something new weekly' },
      { icon: '🚶', title: isArabic ? 'حركة حرة' : isFrench ? 'Mouvement Libre' : 'Free Movement', description: isArabic ? 'تمشى دون وجهة' : isFrench ? 'Marcher sans destination' : 'Walk without destination' }
    ],
    6: [
      { icon: '💚', title: isArabic ? 'عمل محبة' : isFrench ? 'Acte d\'Amour' : 'Act of Love', description: isArabic ? 'افعل شيئاً لطيفاً لشخص ما' : isFrench ? 'Faire quelque chose de gentil pour quelqu\'un' : 'Do something kind for someone' },
      { icon: '🏡', title: isArabic ? 'تجميل المنزل' : isFrench ? 'Embellir la Maison' : 'Beautify Home', description: isArabic ? 'أضف الجمال لمساحتك' : isFrench ? 'Ajouter de la beauté à votre espace' : 'Add beauty to your space' }
    ],
    7: [
      { icon: '🧘', title: isArabic ? 'تأمل صامت' : isFrench ? 'Méditation Silencieuse' : 'Silent Meditation', description: isArabic ? 'اجلس في صمت لمدة 20 دقيقة' : isFrench ? 'S\'asseoir en silence pendant 20 minutes' : 'Sit in silence for 20 minutes' },
      { icon: '📖', title: isArabic ? 'دراسة روحية' : isFrench ? 'Étude Spirituelle' : 'Spiritual Study', description: isArabic ? 'اقرأ نصاً روحياً' : isFrench ? 'Lire un texte spirituel' : 'Read spiritual text' }
    ],
    8: [
      { icon: '💼', title: isArabic ? 'تخطيط استراتيجي' : isFrench ? 'Planification Stratégique' : 'Strategic Planning', description: isArabic ? 'راجع أهدافك طويلة الأمد' : isFrench ? 'Réviser vos objectifs à long terme' : 'Review long-term goals' },
      { icon: '💰', title: isArabic ? 'إدارة مالية' : isFrench ? 'Gestion Financière' : 'Financial Management', description: isArabic ? 'تتبع الشؤون المالية يومياً' : isFrench ? 'Suivre les finances quotidiennement' : 'Track finances daily' }
    ],
    9: [
      { icon: '🌟', title: isArabic ? 'خدمة غيرية' : isFrench ? 'Service Désintéressé' : 'Selfless Service', description: isArabic ? 'ساعد شخصاً دون توقع' : isFrench ? 'Aider quelqu\'un sans attente' : 'Help someone without expectation' },
      { icon: '🙏', title: isArabic ? 'إطلاق' : isFrench ? 'Lâcher Prise' : 'Letting Go', description: isArabic ? 'اترك شيئاً لم يعد يخدمك' : isFrench ? 'Libérer quelque chose qui ne vous sert plus' : 'Release something that no longer serves' }
    ],
    11: [
      { icon: '✨', title: isArabic ? 'ممارسة بديهية' : isFrench ? 'Pratique Intuitive' : 'Intuitive Practice', description: isArabic ? 'اتبع حدسك في قرار' : isFrench ? 'Suivre votre intuition dans une décision' : 'Follow intuition in a decision' },
      { icon: '🌙', title: isArabic ? 'كتابة الأحلام' : isFrench ? 'Journal des Rêves' : 'Dream Journaling', description: isArabic ? 'سجل أحلامك عند الاستيقاظ' : isFrench ? 'Enregistrer vos rêves au réveil' : 'Record dreams upon waking' }
    ],
    22: [
      { icon: '🏗️', title: isArabic ? 'بناء منهجي' : isFrench ? 'Construction Systématique' : 'Systematic Building', description: isArabic ? 'اعمل على مشروع كبير بخطوات صغيرة' : isFrench ? 'Travailler sur un grand projet par petites étapes' : 'Work on big project in small steps' },
      { icon: '🌉', title: isArabic ? 'ربط الناس' : isFrench ? 'Connecter les Gens' : 'Connect People', description: isArabic ? 'قدّم شخصين يمكنهما التعاون' : isFrench ? 'Présenter deux personnes qui pourraient collaborer' : 'Introduce two people who could collaborate' }
    ],
    33: [
      { icon: '💖', title: isArabic ? 'حب غير مشروط' : isFrench ? 'Amour Inconditionnel' : 'Unconditional Love', description: isArabic ? 'امنح الحب دون حكم' : isFrench ? 'Donner de l\'amour sans jugement' : 'Give love without judgment' },
      { icon: '🕊️', title: isArabic ? 'شفاء يومي' : isFrench ? 'Guérison Quotidienne' : 'Daily Healing', description: isArabic ? 'أرسل طاقة شفاء لشخص محتاج' : isFrench ? 'Envoyer de l\'énergie de guérison à quelqu\'un dans le besoin' : 'Send healing energy to someone in need' }
    ]
  };
  return practices[number] || practices[1];
}

function getLifeExamples(number: NumberType, isArabic: boolean, isFrench: boolean) {
  const examples: Record<number, Array<{ title: string; description: string }>> = {
    1: [
      { title: isArabic ? 'بدء مشروع' : isFrench ? 'Démarrer un Projet' : 'Starting a Project', description: isArabic ? 'الرقم 1 يزدهر عند بدء مبادرات جديدة. ابدأ ذلك المشروع الذي كنت تؤجله.' : isFrench ? 'Le numéro 1 prospère en démarrant de nouvelles initiatives. Lancez ce projet que vous avez reporté.' : 'Number 1 thrives when initiating new ventures. Start that project you\'ve been postponing.' }
    ],
    2: [
      { title: isArabic ? 'حل النزاعات' : isFrench ? 'Résolution de Conflits' : 'Conflict Resolution', description: isArabic ? 'الرقم 2 ممتاز في بناء الجسور. استخدم دبلوماسيتك لتوحيد طرفين متعارضين.' : isFrench ? 'Le numéro 2 excelle à construire des ponts. Utilisez votre diplomatie pour unir deux parties opposées.' : 'Number 2 excels at bridge-building. Use your diplomacy to unite two opposing parties.' }
    ],
    3: [
      { title: isArabic ? 'التعبير الإبداعي' : isFrench ? 'Expression Créative' : 'Creative Expression', description: isArabic ? 'الرقم 3 يزدهر من خلال الفن. اكتب، ارسم، أو تحدث لمشاركة هداياك.' : isFrench ? 'Le numéro 3 prospère par l\'art. Écrivez, dessinez ou parlez pour partager vos dons.' : 'Number 3 thrives through art. Write, paint, or speak to share your gifts.' }
    ],
    4: [
      { title: isArabic ? 'بناء الأساس' : isFrench ? 'Construction de Fondations' : 'Foundation Building', description: isArabic ? 'الرقم 4 ممتاز في الهيكلة. أنشئ نظاماً يدوم.' : isFrench ? 'Le numéro 4 excelle dans la structuration. Créez un système qui dure.' : 'Number 4 excels at structuring. Create a system that lasts.' }
    ],
    5: [
      { title: isArabic ? 'احتضان التغيير' : isFrench ? 'Embrasser le Changement' : 'Embracing Change', description: isArabic ? 'الرقم 5 يزدهر على التنوع. استكشف مسارات جديدة بدون خوف.' : isFrench ? 'Le numéro 5 prospère sur la variété. Explorez de nouveaux chemins sans peur.' : 'Number 5 thrives on variety. Explore new paths fearlessly.' }
    ],
    6: [
      { title: isArabic ? 'رعاية الآخرين' : isFrench ? 'Nourrir les Autres' : 'Nurturing Others', description: isArabic ? 'الرقم 6 يلمع في الرعاية. اخلق منزلاً دافئاً أو ساعد من في حاجة.' : isFrench ? 'Le numéro 6 brille dans les soins. Créez un foyer chaleureux ou aidez ceux dans le besoin.' : 'Number 6 shines in caregiving. Create a warm home or help those in need.' }
    ],
    7: [
      { title: isArabic ? 'البحث عن الحقيقة' : isFrench ? 'Recherche de Vérité' : 'Seeking Truth', description: isArabic ? 'الرقم 7 يحتاج إلى العمق. اغوص في الدراسات الروحية أو العلمية.' : isFrench ? 'Le numéro 7 a besoin de profondeur. Plongez dans des études spirituelles ou scientifiques.' : 'Number 7 needs depth. Dive into spiritual or scientific studies.' }
    ],
    8: [
      { title: isArabic ? 'قيادة بقوة' : isFrench ? 'Diriger avec Pouvoir' : 'Leading with Power', description: isArabic ? 'الرقم 8 يزدهر في الإنجاز. تولى الأدوار القيادية وابنِ الإرث.' : isFrench ? 'Le numéro 8 prospère dans l\'accomplissement. Assumez des rôles de leadership et construisez un héritage.' : 'Number 8 thrives in achievement. Take leadership roles and build legacy.' }
    ],
    9: [
      { title: isArabic ? 'خدمة الإنسانية' : isFrench ? 'Servir l\'Humanité' : 'Serving Humanity', description: isArabic ? 'الرقم 9 يكمل الدورات. اترك ما لم يعد يخدمك وخدم قضية أكبر.' : isFrench ? 'Le numéro 9 complète les cycles. Libérez ce qui ne vous sert plus et servez une cause plus grande.' : 'Number 9 completes cycles. Release what no longer serves and serve a greater cause.' }
    ],
    11: [
      { title: isArabic ? 'إلهام الآخرين' : isFrench ? 'Inspirer les Autres' : 'Inspiring Others', description: isArabic ? 'الرقم 11 يضيء الطريق. شارك رؤاك وألهم الآخرين للارتقاء.' : isFrench ? 'Le numéro 11 éclaire le chemin. Partagez vos visions et inspirez les autres à s\'élever.' : 'Number 11 lights the path. Share your visions and inspire others to rise.' }
    ],
    22: [
      { title: isArabic ? 'بناء الإرث' : isFrench ? 'Construire un Héritage' : 'Building Legacy', description: isArabic ? 'الرقم 22 يبني لأجيال. أنشئ مؤسسات أو مشاريع تدوم.' : isFrench ? 'Le numéro 22 construit pour des générations. Créez des institutions ou projets durables.' : 'Number 22 builds for generations. Create institutions or projects that endure.' }
    ],
    33: [
      { title: isArabic ? 'شفاء وتعليم' : isFrench ? 'Guérir et Enseigner' : 'Healing and Teaching', description: isArabic ? 'الرقم 33 يعلّم بالحب. اشفِ من خلال الرحمة وعلّم من خلال المثال.' : isFrench ? 'Le numéro 33 enseigne avec amour. Guérissez par la compassion et enseignez par l\'exemple.' : 'Number 33 teaches with love. Heal through compassion and teach by example.' }
    ]
  };
  return examples[number] || examples[1];
}

function getClassicalTeachings(number: NumberType, isArabic: boolean, isFrench: boolean) {
  const teachings: Record<number, Array<{ quote: string; scholar: string; source: string }>> = {
    1: [
      { 
        quote: isArabic ? 'الواحد هو أصل كل الأعداد، كما أن الله هو أصل كل الوجود' : isFrench ? 'L\'Un est l\'origine de tous les nombres, comme Allah est l\'origine de toute existence' : 'The One is the origin of all numbers, as Allah is the origin of all existence',
        scholar: isArabic ? 'ابن عربي' : isFrench ? 'Ibn ʿArabī' : 'Ibn ʿArabī',
        source: isArabic ? 'الفتوحات المكية' : isFrench ? 'Futūḥāt al-Makkiyya' : 'Futūḥāt al-Makkiyya'
      }
    ]
    // ... continue for all numbers
  };
  return teachings[number] || teachings[1];
}

function getHistoricalContext(number: NumberType, isArabic: boolean, isFrench: boolean): string {
  const contexts: Record<number, string> = {
    1: isArabic ? 'الرقم واحد يحمل أهمية خاصة في الإسلام كرمز للتوحيد - وحدانية الله. درس العلماء الكلاسيكيون مثل البوني وابن عربي الرقم 1 كتعبير عن الوحدة الإلهية والبداية.' : isFrench ? 'Le nombre un a une signification particulière en Islam comme symbole de Tawhid - l\'unicité d\'Allah. Les savants classiques comme al-Būnī et Ibn ʿArabī étudiaient le nombre 1 comme expression de l\'unité divine et du commencement.' : 'The number one holds special significance in Islam as a symbol of Tawhid - the oneness of Allah. Classical scholars like al-Būnī and Ibn ʿArabī studied number 1 as the expression of divine unity and beginning.',
    2: isArabic ? 'الرقم اثنان يمثل الثنائية والشراكة في التقاليد الإسلامية - الليل والنهار، الأرض والسماء. يعلمنا عن التوازن والانسجام في الخلق.' : isFrench ? 'Le nombre deux représente la dualité et le partenariat dans les traditions islamiques - la nuit et le jour, la terre et le ciel. Il nous enseigne l\'équilibre et l\'harmonie dans la création.' : 'The number two represents duality and partnership in Islamic traditions - night and day, earth and sky. It teaches us about balance and harmony in creation.'
    // ... continue
  };
  return contexts[number] || contexts[1];
}

function getRelatedConcepts(number: NumberType, isArabic: boolean, isFrench: boolean): string[] {
  const concepts: Record<number, string[]> = {
    1: isArabic ? ['التوحيد', 'البداية', 'القيادة', 'الشمس', 'النار'] : isFrench ? ['Tawhid', 'Commencement', 'Leadership', 'Soleil', 'Feu'] : ['Tawhid', 'Beginning', 'Leadership', 'Sun', 'Fire'],
    2: isArabic ? ['الثنائية', 'التوازن', 'الشراكة', 'القمر', 'الماء'] : isFrench ? ['Dualité', 'Équilibre', 'Partenariat', 'Lune', 'Eau'] : ['Duality', 'Balance', 'Partnership', 'Moon', 'Water']
    // ... continue
  };
  return concepts[number] || concepts[1];
}

export default NumberGuidePanel;
