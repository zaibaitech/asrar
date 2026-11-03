/**
 * Life Path Learning Center
 * Educational hub teaching users about numerology in Islamic tradition
 * Based on Divine Timing LearningCenter.tsx structure
 */

import React, { useState } from 'react';
import { Book, Sparkles, Calculator, HelpCircle, Info, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

export const LearningCenterLifePath: React.FC = () => {
  const { language, t } = useLanguage();
  // Arabic not yet supported in language context
  const isArabic = false;
  const isFrench = language === 'fr';
  
  const [activeTab, setActiveTab] = useState<'intro' | 'islamic' | 'calculations' | 'faq'>('intro');

  const tabs = [
    { id: 'intro' as const, icon: Book, label: { en: 'Introduction', fr: 'Introduction', ar: 'مقدمة' } },
    { id: 'islamic' as const, icon: Sparkles, label: { en: 'Islamic Context', fr: 'Contexte Islamique', ar: 'السياق الإسلامي' } },
    { id: 'calculations' as const, icon: Calculator, label: { en: 'Calculations', fr: 'Calculs', ar: 'الحسابات' } },
    { id: 'faq' as const, icon: HelpCircle, label: { en: 'FAQ', fr: 'FAQ', ar: 'أسئلة شائعة' } }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
          {isArabic ? 'مركز التعلم: علم الأرقام' : isFrench ? 'Centre d\'Apprentissage: Numérologie' : 'Life Path Learning Center'}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          {isArabic 
            ? 'اكتشف الحكمة الروحية المشفرة في الأرقام' 
            : isFrench 
            ? 'Découvrez la sagesse spirituelle encodée dans les nombres' 
            : 'Discover the spiritual wisdom encoded in numbers'}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-700 pb-4">
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
        {activeTab === 'intro' && <IntroductionContent isArabic={isArabic} isFrench={isFrench} />}
        {activeTab === 'islamic' && <IslamicContextContent isArabic={isArabic} isFrench={isFrench} />}
        {activeTab === 'calculations' && <CalculationsContent isArabic={isArabic} isFrench={isFrench} />}
        {activeTab === 'faq' && <FAQContent isArabic={isArabic} isFrench={isFrench} />}
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-900 dark:text-amber-100">
            {isArabic
              ? 'علم الأرقام أداة للتأمل الروحي، وليس بديلاً عن التوكل على الله. استخدمه للتفكر في خلق الله وحكمته.'
              : isFrench
              ? 'La numérologie est un outil de réflexion spirituelle, non un substitut à la confiance en Allah. Utilisez-le pour contempler la création et la sagesse divine.'
              : 'Numerology is a tool for spiritual reflection, not a substitute for reliance on Allah. Use it to contemplate divine creation and wisdom.'}
          </p>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// INTRODUCTION CONTENT
// ============================================================================

const IntroductionContent: React.FC<{ isArabic: boolean; isFrench: boolean }> = ({ isArabic, isFrench }) => {
  return (
    <div className="space-y-6">
      <Section
        title={isArabic ? 'ما هي أرقام مسار الحياة؟' : isFrench ? 'Qu\'est-ce que les Nombres de Chemin de Vie?' : 'What are Life Path Numbers?'}
      >
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {isArabic
            ? 'أرقام مسار الحياة هي نظام روحي قديم يكشف عن المعنى والهدف المشفر في تاريخ ميلادك واسمك. في التقاليد الإسلامية، يُعرف هذا باسم علم الحروف (ʿIlm al-Ḥurūf) - علم الحروف والأرقام الذي يربط القيم العددية بالحقائق الروحية.'
            : isFrench
            ? 'Les nombres de chemin de vie sont un système spirituel ancien révélant la signification et le but encodés dans votre date de naissance et votre nom. Dans les traditions islamiques, cela s\'appelle ʿIlm al-Ḥurūf - la science des lettres et des nombres reliant les valeurs numériques aux vérités spirituelles.'
            : 'Life Path numbers are an ancient spiritual system revealing the meaning and purpose encoded in your birth date and name. In Islamic traditions, this is known as ʿIlm al-Ḥurūf - the science of letters and numbers connecting numerical values to spiritual truths.'}
        </p>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4 mt-4">
          <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
            {isArabic ? 'الأرقام الأساسية الأربعة:' : isFrench ? 'Les Quatre Nombres Fondamentaux:' : 'The Four Core Numbers:'}
          </h4>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
              <span><strong>{isArabic ? 'رقم مسار الحياة' : isFrench ? 'Chemin de Vie' : 'Life Path'}</strong> - {isArabic ? 'جوهرك الروحي ورسالة حياتك' : isFrench ? 'Votre essence spirituelle et mission de vie' : 'Your spiritual essence and life mission'}</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
              <span><strong>{isArabic ? 'رقم رغبة الروح' : isFrench ? 'Désir de l\'Âme' : 'Soul Urge'}</strong> - {isArabic ? 'رغباتك الأعمق وما يحققك روحياً' : isFrench ? 'Vos désirs les plus profonds et ce qui vous épanouit spirituellement' : 'Your deepest desires and what fulfills you spiritually'}</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
              <span><strong>{isArabic ? 'رقم الشخصية' : isFrench ? 'Personnalité' : 'Personality'}</strong> - {isArabic ? 'كيف يراك الآخرون والانطباع الذي تتركه' : isFrench ? 'Comment les autres vous voient et l\'impression que vous laissez' : 'How others see you and the impression you make'}</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
              <span><strong>{isArabic ? 'رقم المصير' : isFrench ? 'Destinée' : 'Destiny'}</strong> - {isArabic ? 'هدفك الأسمى وعملك في الحياة' : isFrench ? 'Votre but suprême et œuvre de vie' : 'Your higher purpose and life work'}</span>
            </li>
          </ul>
        </div>
      </Section>

      <Section
        title={isArabic ? 'الأرقام الرئيسية (11، 22، 33)' : isFrench ? 'Nombres Maîtres (11, 22, 33)' : 'Master Numbers (11, 22, 33)'}
      >
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {isArabic
            ? 'الأرقام الرئيسية هي أرقام مزدوجة (11، 22، 33) تحمل طاقة روحية متزايدة. لا يتم تقليلها إلى رقم واحد لأنها تمثل قوة مضاعفة ومسؤولية روحية أعمق.'
            : isFrench
            ? 'Les nombres maîtres sont des nombres doubles (11, 22, 33) portant une énergie spirituelle accrue. Ils ne sont pas réduits à un seul chiffre car ils représentent un pouvoir amplifié et une responsabilité spirituelle plus profonde.'
            : 'Master numbers are double-digit numbers (11, 22, 33) carrying heightened spiritual energy. They are not reduced to a single digit because they represent amplified power and deeper spiritual responsibility.'}
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <MasterNumberCard
            number={11}
            name={isArabic ? 'المنير' : isFrench ? 'L\'Illuminateur' : 'The Illuminator'}
            description={isArabic ? 'البصيرة الروحية والكشف' : isFrench ? 'Perspicacité spirituelle et dévoilement' : 'Spiritual insight and unveiling'}
          />
          <MasterNumberCard
            number={22}
            name={isArabic ? 'البناء الرئيسي' : isFrench ? 'Le Bâtisseur Maître' : 'The Master Builder'}
            description={isArabic ? 'إظهار الأحلام الروحية' : isFrench ? 'Manifestation des rêves spirituels' : 'Manifesting spiritual dreams'}
          />
          <MasterNumberCard
            number={33}
            name={isArabic ? 'المعلم الرئيسي' : isFrench ? 'Le Maître Enseignant' : 'The Master Teacher'}
            description={isArabic ? 'الحب العالمي والشفاء' : isFrench ? 'Amour universel et guérison' : 'Universal love and healing'}
          />
        </div>
      </Section>

      <Section
        title={isArabic ? 'دورات الحياة التسع' : isFrench ? 'Cycles de Vie de Neuf Ans' : 'Nine-Year Life Cycles'}
      >
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {isArabic
            ? 'تتحرك الحياة في دورات مدتها 9 سنوات، كل منها يحمل موضوعاً ودروساً فريدة. فهم دورتك الحالية يساعدك على مواءمة أفعالك مع الإيقاع الطبيعي لنموك الروحي.'
            : isFrench
            ? 'La vie se déroule en cycles de 9 ans, chacun portant un thème et des leçons uniques. Comprendre votre cycle actuel vous aide à aligner vos actions avec le rythme naturel de votre croissance spirituelle.'
            : 'Life moves in 9-year cycles, each carrying a unique theme and lessons. Understanding your current cycle helps you align your actions with the natural rhythm of your spiritual growth.'}
        </p>
        <div className="grid md:grid-cols-3 gap-3 mt-4">
          {[
            { years: '1-3', phase: isArabic ? 'التأسيس' : isFrench ? 'Fondation' : 'Foundation', color: 'bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-100' },
            { years: '4-6', phase: isArabic ? 'النمو' : isFrench ? 'Croissance' : 'Growth', color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-100' },
            { years: '7-9', phase: isArabic ? 'الإكمال' : isFrench ? 'Achèvement' : 'Completion', color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-100' }
          ].map(({ years, phase, color }) => (
            <div key={years} className={`rounded-xl p-4 ${color}`}>
              <div className="font-bold text-lg mb-1">{isArabic ? `السنوات ${years}` : isFrench ? `Années ${years}` : `Years ${years}`}</div>
              <div className="text-sm font-semibold">{phase}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

// ============================================================================
// ISLAMIC CONTEXT CONTENT
// ============================================================================

const IslamicContextContent: React.FC<{ isArabic: boolean; isFrench: boolean }> = ({ isArabic, isFrench }) => {
  return (
    <div className="space-y-6">
      <Section
        title={isArabic ? 'علم الحروف: العلم الإسلامي للحروف والأرقام' : isFrench ? 'ʿIlm al-Ḥurūf: Science Islamique des Lettres et Nombres' : 'ʿIlm al-Ḥurūf: Islamic Science of Letters and Numbers'}
      >
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {isArabic
            ? 'علم الحروف (ʿIlm al-Ḥurūf) هو علم إسلامي تقليدي يستكشف المعاني الروحية المشفرة في الحروف والأرقام العربية. يعود تاريخه إلى العصر الذهبي الإسلامي ويرتبط بعلماء عظماء مثل الإمام الغزالي وابن عربي والبوني.'
            : isFrench
            ? 'ʿIlm al-Ḥurūf est une science islamique traditionnelle explorant les significations spirituelles encodées dans les lettres et nombres arabes. Elle remonte à l\'âge d\'or islamique et est associée à de grands savants comme l\'Imam al-Ghazālī, Ibn ʿArabī et al-Būnī.'
            : 'ʿIlm al-Ḥurūf is a traditional Islamic science exploring the spiritual meanings encoded in Arabic letters and numbers. It dates back to the Islamic Golden Age and is associated with great scholars like Imam al-Ghazālī, Ibn ʿArabī, and al-Būnī.'}
        </p>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 mt-4">
          <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">
            {isArabic ? 'المبادئ الأساسية:' : isFrench ? 'Principes Fondamentaux:' : 'Core Principles:'}
          </h4>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
              <span>{isArabic ? 'كل حرف عربي له قيمة عددية (نظام الأبجد)' : isFrench ? 'Chaque lettre arabe a une valeur numérique (système Abjad)' : 'Each Arabic letter has a numerical value (Abjad system)'}</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
              <span>{isArabic ? 'الأرقام تحمل رمزية روحية وترتبط بالأسماء الإلهية' : isFrench ? 'Les nombres portent une symbolique spirituelle et sont liés aux Noms Divins' : 'Numbers carry spiritual symbolism and connect to Divine Names'}</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
              <span>{isArabic ? 'الأسماء والتواريخ تكشف عن نماذج روحية' : isFrench ? 'Les noms et dates révèlent des modèles spirituels' : 'Names and dates reveal spiritual patterns'}</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
              <span>{isArabic ? 'العناصر الأربعة (نار، ماء، هواء، أرض) تتوافق مع الأرقام' : isFrench ? 'Les quatre éléments (Feu, Eau, Air, Terre) correspondent aux nombres' : 'The four elements (Fire, Water, Air, Earth) correspond to numbers'}</span>
            </li>
          </ul>
        </div>
      </Section>

      <Section
        title={isArabic ? 'علماء تاريخيون وأعمالهم' : isFrench ? 'Savants Historiques et Leurs Œuvres' : 'Historical Scholars and Their Works'}
      >
        <div className="space-y-4">
          <ScholarCard
            name={isArabic ? 'أحمد البوني (ت. 1225م)' : isFrench ? 'Aḥmad al-Būnī (d. 1225 CE)' : 'Aḥmad al-Būnī (d. 1225 CE)'}
            work={isArabic ? 'شمس المعارف الكبرى' : isFrench ? 'Shams al-Maʿārif al-Kubrā' : 'Shams al-Maʿārif al-Kubrā'}
            contribution={isArabic ? 'العمل الأساسي في علم الحروف، استكشاف القوى الروحية للحروف والأرقام العربية' : isFrench ? 'Œuvre fondamentale sur ʿIlm al-Ḥurūf, explorant les pouvoirs spirituels des lettres et nombres arabes' : 'Foundational work on ʿIlm al-Ḥurūf, exploring spiritual powers of Arabic letters and numbers'}
          />
          <ScholarCard
            name={isArabic ? 'ابن عربي (ت. 1240م)' : isFrench ? 'Ibn ʿArabī (d. 1240 CE)' : 'Ibn ʿArabī (d. 1240 CE)'}
            work={isArabic ? 'الفتوحات المكية' : isFrench ? 'Al-Futūḥāt al-Makkiyya' : 'Al-Futūḥāt al-Makkiyya'}
            contribution={isArabic ? 'ربط علم الحروف بالمقامات الصوفية والكون' : isFrench ? 'Reliait ʿIlm al-Ḥurūf aux stations soufies et à la cosmologie' : 'Connected ʿIlm al-Ḥurūf to Sufi stations and cosmology'}
          />
          <ScholarCard
            name={isArabic ? 'الإمام الغزالي (ت. 1111م)' : isFrench ? 'Imam al-Ghazālī (d. 1111 CE)' : 'Imam al-Ghazālī (d. 1111 CE)'}
            work={isArabic ? 'إحياء علوم الدين' : isFrench ? 'Iḥyāʾ ʿUlūm al-Dīn' : 'Iḥyāʾ ʿUlūm al-Dīn'}
            contribution={isArabic ? 'ناقش التأمل في أسرار الأرقام كطريق للمعرفة الإلهية' : isFrench ? 'Discutait de la contemplation des mystères numériques comme chemin vers la connaissance divine' : 'Discussed contemplation of numerical mysteries as path to divine knowledge'}
          />
        </div>
      </Section>

      <Section
        title={isArabic ? 'الأبجد: النظام العددي العربي' : isFrench ? 'Abjad: Système Numérique Arabe' : 'Abjad: Arabic Numerical System'}
      >
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          {isArabic
            ? 'نظام الأبجد يعطي كل حرف عربي قيمة عددية. يستخدم هذا لحساب قيمة الأسماء والكلمات والتواريخ، مما يكشف عن معانيها الروحية المخفية.'
            : isFrench
            ? 'Le système Abjad attribue à chaque lettre arabe une valeur numérique. Cela est utilisé pour calculer la valeur des noms, mots et dates, révélant leurs significations spirituelles cachées.'
            : 'The Abjad system assigns each Arabic letter a numerical value. This is used to calculate the value of names, words, and dates, revealing their hidden spiritual meanings.'}
        </p>
        <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-300 dark:border-slate-700">
                <th className="text-left py-2 px-3">{isArabic ? 'الحرف' : isFrench ? 'Lettre' : 'Letter'}</th>
                <th className="text-left py-2 px-3">{isArabic ? 'القيمة' : isFrench ? 'Valeur' : 'Value'}</th>
                <th className="text-left py-2 px-3">{isArabic ? 'العنصر' : isFrench ? 'Élément' : 'Element'}</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr><td className="py-1 px-3 font-arabic text-lg">ا (Alif)</td><td className="py-1 px-3">1</td><td className="py-1 px-3">{isArabic ? '🔥 نار' : isFrench ? '🔥 Feu' : '🔥 Fire'}</td></tr>
              <tr><td className="py-1 px-3 font-arabic text-lg">ب (Bāʾ)</td><td className="py-1 px-3">2</td><td className="py-1 px-3">{isArabic ? '💧 ماء' : isFrench ? '💧 Eau' : '💧 Water'}</td></tr>
              <tr><td className="py-1 px-3 font-arabic text-lg">ج (Jīm)</td><td className="py-1 px-3">3</td><td className="py-1 px-3">{isArabic ? '🌍 أرض' : isFrench ? '🌍 Terre' : '🌍 Earth'}</td></tr>
              <tr><td className="py-1 px-3 font-arabic text-lg">د (Dāl)</td><td className="py-1 px-3">4</td><td className="py-1 px-3">{isArabic ? '💨 هواء' : isFrench ? '💨 Air' : '💨 Air'}</td></tr>
              <tr><td className="py-1 px-3 font-arabic text-lg">ه (Hāʾ)</td><td className="py-1 px-3">5</td><td className="py-1 px-3">{isArabic ? '🔥 نار' : isFrench ? '🔥 Feu' : '🔥 Fire'}</td></tr>
              <tr><td className="py-1 px-3 text-slate-500 dark:text-slate-500 text-xs" colSpan={3}>{isArabic ? '... وهكذا للأحرف الـ 28 كلها' : isFrench ? '... et ainsi de suite pour les 28 lettres' : '... and so on for all 28 letters'}</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title={isArabic ? 'المقامات الروحية والأرقام' : isFrench ? 'Stations Spirituelles et Nombres' : 'Spiritual Stations and Numbers'}
      >
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          {isArabic
            ? 'في التصوف الإسلامي، تتوافق أرقام مسار الحياة مع المقامات (المحطات الروحية) على طريق الله. كل رقم يمثل درساً ونوعية فريدة يجب تطويرها.'
            : isFrench
            ? 'Dans le soufisme islamique, les nombres de chemin de vie correspondent aux maqāmāt (stations spirituelles) sur le chemin vers Allah. Chaque nombre représente une leçon et qualité unique à développer.'
            : 'In Islamic Sufism, life path numbers correspond to maqāmāt (spiritual stations) on the path to Allah. Each number represents a unique lesson and quality to develop.'}
        </p>
        <div className="grid md:grid-cols-3 gap-3">
          {[
            { num: 1, station: isArabic ? 'التوبة' : isFrench ? 'Tawbah' : 'Tawbah', meaning: isArabic ? 'التوبة' : isFrench ? 'Repentance' : 'Repentance' },
            { num: 2, station: isArabic ? 'الورع' : isFrench ? 'Waraʿ' : 'Waraʿ', meaning: isArabic ? 'الورع' : isFrench ? 'Scrupulousness' : 'Scrupulousness' },
            { num: 3, station: isArabic ? 'الزهد' : isFrench ? 'Zuhd' : 'Zuhd', meaning: isArabic ? 'الزهد' : isFrench ? 'Ascétisme' : 'Asceticism' },
            { num: 4, station: isArabic ? 'الفقر' : isFrench ? 'Faqr' : 'Faqr', meaning: isArabic ? 'الفقر الروحي' : isFrench ? 'Pauvreté Spirituelle' : 'Spiritual Poverty' },
            { num: 5, station: isArabic ? 'الصبر' : isFrench ? 'Ṣabr' : 'Ṣabr', meaning: isArabic ? 'الصبر' : isFrench ? 'Patience' : 'Patience' },
            { num: 6, station: isArabic ? 'التوكل' : isFrench ? 'Tawakkul' : 'Tawakkul', meaning: isArabic ? 'التوكل على الله' : isFrench ? 'Confiance en Allah' : 'Trust in Allah' },
            { num: 7, station: isArabic ? 'الرضا' : isFrench ? 'Riḍā' : 'Riḍā', meaning: isArabic ? 'الرضا بالقدر' : isFrench ? 'Contentement' : 'Divine Contentment' },
            { num: 8, station: isArabic ? 'الشكر' : isFrench ? 'Shukr' : 'Shukr', meaning: isArabic ? 'الشكر' : isFrench ? 'Gratitude' : 'Gratitude' },
            { num: 9, station: isArabic ? 'المحبة' : isFrench ? 'Maḥabbah' : 'Maḥabbah', meaning: isArabic ? 'الحب الإلهي' : isFrench ? 'Amour Divin' : 'Divine Love' }
          ].map(({ num, station, meaning }) => (
            <div key={num} className=" rounded-xl p-3 border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/40">
              <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-1">{num}</div>
              <div className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">{station}</div>
              <div className="text-xs text-indigo-700 dark:text-indigo-300 mt-1">{meaning}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

// ============================================================================
// CALCULATIONS CONTENT
// ============================================================================

const CalculationsContent: React.FC<{ isArabic: boolean; isFrench: boolean }> = ({ isArabic, isFrench }) => {
  return (
    <div className="space-y-6">
      <Section
        title={isArabic ? 'كيفية حساب رقم مسار الحياة' : isFrench ? 'Comment Calculer Votre Nombre de Chemin de Vie' : 'How to Calculate Your Life Path Number'}
      >
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          {isArabic
            ? 'رقم مسار الحياة يُحسب من تاريخ ميلادك عن طريق تقليل كل مكون (يوم، شهر، سنة) إلى رقم واحد، ثم جمعهم معاً.'
            : isFrench
            ? 'Le nombre de chemin de vie se calcule à partir de votre date de naissance en réduisant chaque composant (jour, mois, année) à un seul chiffre, puis en les additionnant.'
            : 'Life Path number is calculated from your birth date by reducing each component (day, month, year) to a single digit, then adding them together.'}
        </p>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
          <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4">
            {isArabic ? 'مثال: 15 يونيو 1990' : isFrench ? 'Exemple: 15 Juin 1990' : 'Example: June 15, 1990'}
          </h4>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-3">
              <span className="font-mono bg-white dark:bg-slate-800 px-3 py-1 rounded">{isArabic ? 'اليوم' : isFrench ? 'Jour' : 'Day'}: 15</span>
              <span>→</span>
              <span>1 + 5 = 6</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono bg-white dark:bg-slate-800 px-3 py-1 rounded">{isArabic ? 'الشهر' : isFrench ? 'Mois' : 'Month'}: 6</span>
              <span>→</span>
              <span>6</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono bg-white dark:bg-slate-800 px-3 py-1 rounded">{isArabic ? 'السنة' : isFrench ? 'Année' : 'Year'}: 1990</span>
              <span>→</span>
              <span>1 + 9 + 9 + 0 = 19 → 1 + 9 = 10 → 1 + 0 = 1</span>
            </div>
            <div className="border-t border-slate-200 dark:border-slate-700 pt-3 mt-3">
              <div className="flex items-center gap-3 text-lg font-bold">
                <span>{isArabic ? 'المجموع' : isFrench ? 'Total' : 'Total'}:</span>
                <span>6 + 6 + 1 = 13 → 1 + 3 = 4</span>
              </div>
              <div className="mt-2 text-indigo-900 dark:text-indigo-100">
                <strong>{isArabic ? 'رقم مسار الحياة: 4' : isFrench ? 'Nombre de Chemin de Vie: 4' : 'Life Path Number: 4'}</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
          <p className="text-sm text-amber-900 dark:text-amber-100">
            <strong>{isArabic ? 'ملاحظة:' : isFrench ? 'Note:' : 'Note:'}</strong> {isArabic ? 'إذا واجهت 11 أو 22 أو 33 أثناء التقليل، توقف! هذه أرقام رئيسية ولا تُقلّل أكثر.' : isFrench ? 'Si vous rencontrez 11, 22 ou 33 pendant la réduction, arrêtez! Ce sont des nombres maîtres et ne doivent pas être réduits davantage.' : 'If you encounter 11, 22, or 33 during reduction, stop! These are master numbers and should not be reduced further.'}
          </p>
        </div>
      </Section>

      <Section
        title={isArabic ? 'حساب رقم رغبة الروح' : isFrench ? 'Calcul du Désir de l\'Âme' : 'Calculating Soul Urge Number'}
      >
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          {isArabic
            ? 'رقم رغبة الروح يُحسب من حروف العلة (الأحرف الصوتية) في اسمك الكامل. في اللغة العربية، تُعتبر الحركات والحروف المدّية.'
            : isFrench
            ? 'Le nombre de Désir de l\'Âme se calcule à partir des voyelles de votre nom complet. En arabe, cela inclut les ḥarakāt et les lettres d\'allongement.'
            : 'Soul Urge number is calculated from the vowels in your full name. In Arabic, this includes ḥarakāt (diacritics) and elongation letters.'}
        </p>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4">
          <p className="text-sm text-indigo-900 dark:text-indigo-100">
            {isArabic ? 'مثال: محمد (Muḥammad)' : isFrench ? 'Exemple: محمد (Muḥammad)' : 'Example: محمد (Muḥammad)'}
          </p>
          <p className="text-sm text-indigo-800 dark:text-indigo-200 mt-2">
            {isArabic ? 'حروف العلة: ُ (u) + َ (a) + َ (a) → احسب قيمها الأبجدية' : isFrench ? 'Voyelles: ُ (u) + َ (a) + َ (a) → Calculez leurs valeurs Abjad' : 'Vowels: ُ (u) + َ (a) + َ (a) → Calculate their Abjad values'}
          </p>
        </div>
      </Section>

      <Section
        title={isArabic ? 'حساب رقم الشخصية' : isFrench ? 'Calcul de la Personnalité' : 'Calculating Personality Number'}
      >
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {isArabic
            ? 'رقم الشخصية يُحسب من الحروف الساكنة (غير العلة) في اسمك. هذا يمثل الطبقة الخارجية - كيف تقدم نفسك للعالم.'
            : isFrench
            ? 'Le nombre de Personnalité se calcule à partir des consonnes de votre nom. Cela représente la couche extérieure - comment vous vous présentez au monde.'
            : 'Personality number is calculated from the consonants in your name. This represents the outer layer - how you present yourself to the world.'}
        </p>
      </Section>

      <Section
        title={isArabic ? 'حساب رقم المصير' : isFrench ? 'Calcul de la Destinée' : 'Calculating Destiny Number'}
      >
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {isArabic
            ? 'رقم المصير يُحسب من جميع الحروف في اسمك الكامل (حروف علة + ساكنة). يمثل هذا هدف حياتك الشامل والعمل الذي جئت لإنجازه.'
            : isFrench
            ? 'Le nombre de Destinée se calcule à partir de toutes les lettres de votre nom complet (voyelles + consonnes). Cela représente votre but de vie global et l\'œuvre que vous êtes venu accomplir.'
            : 'Destiny number is calculated from all letters in your full name (vowels + consonants). This represents your overall life purpose and the work you came to accomplish.'}
        </p>
      </Section>
    </div>
  );
};

// ============================================================================
// FAQ CONTENT
// ============================================================================

const FAQContent: React.FC<{ isArabic: boolean; isFrench: boolean }> = ({ isArabic, isFrench }) => {
  const faqs = [
    {
      q: isArabic ? 'هل علم الأرقام حلال في الإسلام؟' : isFrench ? 'La numérologie est-elle halal en Islam?' : 'Is numerology halal in Islam?',
      a: isArabic
        ? 'علم الحروف والأرقام له تاريخ طويل في المنح الإسلامية، درسه علماء مثل الإمام الغزالي وابن عربي. عندما يُستخدم كأداة للتأمل الروحي (لا للعرافة)، فإنه مقبول كدراسة للأنماط الإلهية في الخلق. تذكر دائماً: الله وحده يعلم الغيب، والأرقام أدوات للتفكر، وليست للتنجيم.'
        : isFrench
        ? 'ʿIlm al-Ḥurūf a une longue histoire dans l\'érudition islamique, étudié par des savants comme l\'Imam al-Ghazālī et Ibn ʿArabī. Lorsqu\'il est utilisé comme outil de réflexion spirituelle (non pour la divination), il est acceptable en tant qu\'étude des modèles divins dans la création. Rappelez-vous toujours: Seul Allah connaît l\'invisible, et les nombres sont des outils de contemplation, pas de divination.'
        : 'ʿIlm al-Ḥurūf has a long history in Islamic scholarship, studied by scholars like Imam al-Ghazālī and Ibn ʿArabī. When used as a tool for spiritual reflection (not fortune-telling), it is acceptable as a study of divine patterns in creation. Always remember: Only Allah knows the unseen, and numbers are tools for contemplation, not divination.'
    },
    {
      q: isArabic ? 'ما الفرق بين رقم مسار الحياة ورقم رغبة الروح؟' : isFrench ? 'Quelle est la différence entre Chemin de Vie et Désir de l\'Âme?' : 'What is the difference between Life Path and Soul Urge?',
      a: isArabic
        ? 'رقم مسار الحياة (من تاريخ الميلاد) يمثل رسالتك الشاملة ومسارك الروحي - ما جئت لتتعلمه وتصبحه. رقم رغبة الروح (من حروف علة الاسم) يكشف عن رغباتك الداخلية العميقة - ما يحفزك ويحققك على مستوى الروح.'
        : isFrench
        ? 'Le Chemin de Vie (de la date de naissance) représente votre mission globale et chemin spirituel - ce que vous êtes venu apprendre et devenir. Le Désir de l\'Âme (des voyelles du nom) révèle vos désirs intérieurs profonds - ce qui vous motive et vous épanouit au niveau de l\'âme.'
        : 'Life Path (from birth date) represents your overall mission and spiritual path - what you came to learn and become. Soul Urge (from name vowels) reveals your deep inner desires - what motivates and fulfills you at a soul level.'
    },
    {
      q: isArabic ? 'ماذا لو كان لدي رقم رئيسي (11، 22، 33)؟' : isFrench ? 'Que faire si j\'ai un nombre maître (11, 22, 33)?' : 'What if I have a master number (11, 22, 33)?',
      a: isArabic
        ? 'الأرقام الرئيسية تحمل طاقة روحية متزايدة ومسؤولية أكبر. إذا كان لديك رقم رئيسي، فلديك إمكانية روحية أعلى ولكن أيضاً تحديات أكبر. يمكنك العمل على مستوى الرقم المزدوج (11، 22، 33) أو مستوى الرقم الواحد المُختزل (2، 4، 6) اعتماداً على نموك الروحي.'
        : isFrench
        ? 'Les nombres maîtres portent une énergie spirituelle accrue et une plus grande responsabilité. Si vous avez un nombre maître, vous avez un potentiel spirituel plus élevé mais aussi des défis plus grands. Vous pouvez travailler au niveau du nombre double (11, 22, 33) ou au niveau du nombre réduit (2, 4, 6) selon votre croissance spirituelle.'
        : 'Master numbers carry heightened spiritual energy and greater responsibility. If you have a master number, you have higher spiritual potential but also greater challenges. You can work at the double-digit level (11, 22, 33) or the reduced single-digit level (2, 4, 6) depending on your spiritual growth.'
    },
    {
      q: isArabic ? 'ما هي الديون الكرمية (13، 14، 16، 19)؟' : isFrench ? 'Que sont les dettes karmiques (13, 14, 16, 19)?' : 'What are karmic debts (13, 14, 16, 19)?',
      a: isArabic
        ? 'الديون الكرمية هي أرقام خاصة تظهر في حساباتك تشير إلى دروس حياة مهمة يجب تعلمها. في المصطلحات الإسلامية، هذه هي الابتلاءات (الاختبارات) التي تعلمك صفات روحية مهمة مثل الصبر والتواضع والتوكل. إنها فرص للنمو، وليست عقوبات.'
        : isFrench
        ? 'Les dettes karmiques sont des nombres spéciaux apparaissant dans vos calculs indiquant des leçons de vie importantes à apprendre. En termes islamiques, ce sont des ibtilāʾāt (épreuves) qui enseignent des qualités spirituelles importantes comme la patience, l\'humilité et la confiance. Ce sont des opportunités de croissance, pas des punitions.'
        : 'Karmic debts are special numbers appearing in your calculations indicating important life lessons to be learned. In Islamic terms, these are ibtilāʾāt (trials) that teach important spiritual qualities like patience, humility, and trust. They are opportunities for growth, not punishments.'
    },
    {
      q: isArabic ? 'كيف تعمل دورة التسع سنوات؟' : isFrench ? 'Comment fonctionne le cycle de 9 ans?' : 'How does the 9-year cycle work?',
      a: isArabic
        ? 'تتحرك الحياة في دورات متكررة مدتها 9 سنوات، كل منها يحمل موضوعاً فريداً. السنوات 1-3 هي للتأسيس (بناء الأسس)، والسنوات 4-6 للنمو (التوسع)، والسنوات 7-9 للإكمال (الحصاد والإطلاق). بعد السنة التاسعة، تبدأ دورة جديدة. تُحسب سنتك الشخصية الحالية عن طريق جمع اليوم والشهر من ميلادك + السنة الحالية.'
        : isFrench
        ? 'La vie se déroule en cycles répétés de 9 ans, chacun portant un thème unique. Les années 1-3 sont pour la fondation (construire les bases), 4-6 pour la croissance (expansion), et 7-9 pour l\'achèvement (récolte et libération). Après la 9ème année, un nouveau cycle commence. Votre année personnelle actuelle est calculée en additionnant jour et mois de naissance + année actuelle.'
        : 'Life moves in repeating 9-year cycles, each carrying a unique theme. Years 1-3 are for foundation (building groundwork), 4-6 for growth (expansion), and 7-9 for completion (harvest and release). After the 9th year, a new cycle begins. Your current personal year is calculated by adding birth day and month + current year.'
    },
    {
      q: isArabic ? 'هل يمكن أن تتغير أرقامي؟' : isFrench ? 'Mes nombres peuvent-ils changer?' : 'Can my numbers change?',
      a: isArabic
        ? 'رقم مسار حياتك (من تاريخ الميلاد) لا يتغير أبداً - إنه ثابت طوال الحياة. ومع ذلك، قد تتغير أرقام اسمك إذا قمت بتغيير اسمك قانونياً أو اعتماد اسم جديد (مثل بعد الزواج أو التحول الروحي). سنتك الشخصية وشهرك يتغيران كل عام/شهر، مما يجلب موضوعات جديدة ودروساً.'
        : isFrench
        ? 'Votre nombre de Chemin de Vie (de la date de naissance) ne change jamais - il est fixe à vie. Cependant, vos nombres de nom peuvent changer si vous changez légalement de nom ou adoptez un nouveau nom (comme après le mariage ou la transformation spirituelle). Votre année et mois personnels changent chaque année/mois, apportant de nouveaux thèmes et leçons.'
        : 'Your Life Path number (from birth date) never changes - it\'s fixed for life. However, your name numbers can change if you legally change your name or adopt a new name (like after marriage or spiritual transformation). Your personal year and month change annually/monthly, bringing new themes and lessons.'
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.q} answer={faq.a} />
      ))}
    </div>
  );
};

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{title}</h3>
    {children}
  </div>
);

const MasterNumberCard: React.FC<{ number: number; name: string; description: string }> = ({ number, name, description }) => (
  <div className=" border border-amber-200 dark:border-amber-800 rounded-xl p-4 bg-white/60 dark:bg-slate-800/40">
    <div className="text-3xl font-bold text-amber-700 dark:text-amber-300 mb-2">{number}</div>
    <div className="font-semibold text-amber-900 dark:text-amber-100 mb-1">{name}</div>
    <div className="text-sm text-amber-800 dark:text-amber-200">{description}</div>
  </div>
);

const ScholarCard: React.FC<{ name: string; work: string; contribution: string }> = ({ name, work, contribution }) => (
  <div className=" border border-slate-200 dark:border-slate-700 rounded-xl p-4 bg-white/60 dark:bg-slate-800/40">
    <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-1">{name}</h4>
    <p className="text-sm text-indigo-700 dark:text-indigo-300 italic mb-2">{work}</p>
    <p className="text-sm text-slate-700 dark:text-slate-300">{contribution}</p>
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-h-[44px]"
      >
        <span className="font-semibold text-slate-900 dark:text-white text-left">{question}</span>
        <ChevronRight className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-4 bg-white dark:bg-slate-800">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default LearningCenterLifePath;
