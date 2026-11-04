'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { AlertCircle, CheckCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface DisclaimerModalProps {
  onAccept: () => void;
}

export function DisclaimerModal({ onAccept }: DisclaimerModalProps) {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    setTimeout(onAccept, 300);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div 
        className={`bg-white dark:bg-slate-900 rounded-2xl shadow-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 text-white p-6 rounded-t-2xl bg-indigo-600">
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="w-8 h-8" />
            <h2 className="text-2xl font-bold">
              {isFr ? '⚠️ Avis Important' : '⚠️ Important Notice'}
            </h2>
          </div>
          <p className="text-amber-100 text-sm">
            {isFr 
              ? 'Veuillez lire attentivement avant d\'utiliser le module Divine Timing'
              : 'Please read carefully before using the Divine Timing module'}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Main Message */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/40">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <span className="text-2xl">🕌</span>
              {isFr ? 'Nature de cet outil' : 'Nature of This Tool'}
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {isFr
                ? 'Cet outil fournit une réflexion spirituelle et des conseils de timing basés sur les traditions islamiques classiques des heures planétaires (Sāʿāt al-Falakiyya / الساعات الفلكية). Il s\'agit d\'un guide pour l\'optimisation du timing spirituel et la réflexion personnelle.'
                : 'This tool provides spiritual reflection and timing guidance based on classical Islamic traditions of planetary hours (Sāʿāt al-Falakiyya / الساعات الفلكية). It is a guide for spiritual timing optimization and personal reflection.'}
            </p>
          </div>

          {/* Critical Points */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="text-2xl">📖</span>
              {isFr ? 'Points Essentiels à Comprendre' : 'Essential Points to Understand'}
            </h3>

            {/* Point 1 */}
            <div className="flex gap-3 p-4 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-200 dark:border-red-900">
              <div className="text-2xl flex-shrink-0">❌</div>
              <div>
                <div className="font-semibold text-red-900 dark:text-red-200 mb-1">
                  {isFr ? 'Ce N\'EST PAS de la divination' : 'This is NOT Divination'}
                </div>
                <div className="text-sm text-red-800 dark:text-red-300">
                  {isFr
                    ? 'Cet outil ne prédit PAS l\'avenir et ne garantit PAS de résultats. La divination (kāhana / كهانة) est interdite en Islam. Nous proposons uniquement des suggestions de timing basées sur la sagesse traditionnelle.'
                    : 'This tool does NOT predict the future or guarantee outcomes. Fortune-telling (kāhana / كهانة) is prohibited in Islam. We only offer timing suggestions based on traditional wisdom.'}
                </div>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex gap-3 p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="text-2xl flex-shrink-0">🤲</div>
              <div>
                <div className="font-semibold text-indigo-900 dark:text-indigo-200 mb-1">
                  {isFr ? 'Le libre arbitre et le Qadr' : 'Free Will and Qadr'}
                </div>
                <div className="text-sm text-indigo-800 dark:text-indigo-300">
                  {isFr
                    ? 'Votre libre arbitre (ikhtiyār / اختيار) et vos choix restent les vôtres. Tous les résultats sont déterminés par Allah seul (Qadr / قدر). Utilisez cette sagesse comme outil de réflexion, pas comme remplacement de votre jugement.'
                    : 'Your free will (ikhtiyār / اختيار) and choices remain yours. All outcomes are determined by Allah alone (Qadr / قدر). Use this wisdom as a reflection tool, not as a replacement for your judgment.'}
                </div>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex gap-3 p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="text-2xl flex-shrink-0">⚖️</div>
              <div>
                <div className="font-semibold text-indigo-900 dark:text-indigo-200 mb-1">
                  {isFr ? 'Ce n\'est pas un avis juridique islamique' : 'Not Islamic Legal Guidance'}
                </div>
                <div className="text-sm text-indigo-800 dark:text-indigo-300">
                  {isFr
                    ? 'Cet outil n\'est PAS une fatwa (فتوى) ou un avis juridique islamique. Pour des questions religieuses, consultez des savants qualifiés. Pour des décisions importantes, consultez des professionnels.'
                    : 'This tool is NOT a fatwa (فتوى) or Islamic legal ruling. For religious questions, consult qualified scholars. For important decisions, seek professional advice.'}
                </div>
              </div>
            </div>

            {/* Point 4 */}
            <div className="flex gap-3 p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-900">
              <div className="text-2xl flex-shrink-0">🌟</div>
              <div>
                <div className="font-semibold text-green-900 dark:text-green-200 mb-1">
                  {isFr ? 'Usage recommandé' : 'Recommended Use'}
                </div>
                <div className="text-sm text-green-800 dark:text-green-300">
                  {isFr
                    ? 'Utilisez cet outil pour : l\'optimisation du timing des actions, la réflexion spirituelle, la compréhension des cycles naturels, et l\'enrichissement de votre pratique spirituelle. Combinez toujours avec la prière (duʿāʾ / دعاء), la sagesse pratique (ḥikma / حكمة), et l\'ijtihad personnel.'
                    : 'Use this tool for: timing optimization of actions, spiritual reflection, understanding natural cycles, and enriching your spiritual practice. Always combine with prayer (duʿāʾ / دعاء), practical wisdom (ḥikma / حكمة), and personal effort (ijtihād).'}
                </div>
              </div>
            </div>
          </div>

          {/* Classical Sources Note */}
          <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-900">
            <h3 className="text-base font-semibold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
              <span className="text-xl">📚</span>
              {isFr ? 'Sources classiques' : 'Classical Sources'}
            </h3>
            <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
              {isFr
                ? 'Les calculs des heures planétaires sont basés sur des traditions islamiques classiques (ʿIlm al-Ḥurūf, Shams al-Maʿārif, etc.). Les connexions spirituelles avec les Noms Divins et les versets coraniques sont présentées pour la réflexion et l\'enrichissement spirituel, pas comme prescriptions obligatoires.'
                : 'Planetary hour calculations are based on classical Islamic traditions (ʿIlm al-Ḥurūf, Shams al-Maʿārif, etc.). Spiritual connections with Divine Names and Quranic verses are presented for reflection and spiritual enrichment, not as mandatory prescriptions.'}
            </p>
          </div>

          {/* Final Reminder */}
          <div className="text-center p-5 rounded-xl bg-white/60 dark:bg-slate-800/40">
            <div 
              className="text-2xl font-arabic text-slate-700 dark:text-slate-300 mb-2"
              style={{ fontFamily: 'Amiri, Scheherazade, serif' }}
            >
              إِنَّمَا الْغَيْبُ لِلَّهِ
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 italic">
              {isFr
                ? '"La connaissance de l\'invisible appartient à Allah seul"'
                : '"The knowledge of the unseen belongs to Allah alone"'}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
              {isFr ? 'Coran 10:20' : 'Quran 10:20'}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-50 dark:bg-slate-800 p-6 rounded-b-2xl border-t border-slate-200 dark:border-slate-700">
          <button
            onClick={handleAccept}
            className="w-full py-4 text-white rounded-xl font-semibold transition-all shadow-sm flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 min-h-[44px]"
          >
            <CheckCircle className="w-5 h-5" />
            <span>
              {isFr 
                ? 'J\'ai lu et je comprends - Continuer'
                : 'I have read and understand - Continue'}
            </span>
          </button>
          <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-3">
            {isFr
              ? 'En continuant, vous acceptez d\'utiliser cet outil comme guide de réflexion, pas comme source d\'autorité absolue.'
              : 'By continuing, you agree to use this tool as a guide for reflection, not as a source of absolute authority.'}
          </p>
        </div>
      </div>
    </div>
  );
}
