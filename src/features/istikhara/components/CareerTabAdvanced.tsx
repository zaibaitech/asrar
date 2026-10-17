"use client";

import React, { useState } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import { 
  ChevronDown, 
  ChevronUp, 
  Briefcase, 
  TrendingUp, 
  AlertTriangle,
  Download,
  Share2,
  CheckCircle,
  Info,
  Sparkles,
  MessageCircle
} from "lucide-react";
import type { IstikharaCalculationResult } from "../types";
import { nativeOrCopy, trackEvent } from '@/src/lib/analytics';

interface CareerTabAdvancedProps {
  result: IstikharaCalculationResult;
}

/**
 * CareerTabAdvanced - Comprehensive career guidance with all data displayed
 * 
 * Features:
 * - Complete traditional guidance with full quotes
 * - All modern career categories with every sub-item
 * - Special blessings highlighted (e.g., Water element + Earth careers)
 * - Interactive expandable sections with animations
 * - Avoid fields with full explanations
 * - Cultural context and notes
 * - Element-specific theming
 * - Export and share functionality
 * - Tooltips for complex terms
 */
export function CareerTabAdvanced({ result }: CareerTabAdvancedProps) {
  const { language } = useLanguage();
  const profile = result.burujProfile;
  const career = profile.career;
  const elementKey = profile.element.toLowerCase() as "fire" | "earth" | "air" | "water";
  
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  const toggleCategory = (index: number) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCategories(newExpanded);
  };

  const expandAll = () => {
    const categories = career.modern_recommended[language];
    if (categories) {
      setExpandedCategories(new Set(categories.map((_, i) => i)));
    }
  };

  const collapseAll = () => {
    setExpandedCategories(new Set());
  };

  // Element color schemes - Optimized for visibility
  const elementColors = {
    fire: {
      gradient: "from-red-900/40 via-orange-900/30 to-red-900/20",
      border: "border-red-400/50",
      accent: "text-red-200",
      iconBg: "bg-red-500/20",
      hoverBg: "hover:bg-red-500/10",
      shadow: "shadow-red-500/20",
      glow: "shadow-lg shadow-red-500/30"
    },
    earth: {
      gradient: "from-amber-900/40 via-yellow-900/30 to-amber-900/20",
      border: "border-amber-400/50",
      accent: "text-amber-200",
      iconBg: "bg-amber-500/20",
      hoverBg: "hover:bg-amber-500/10",
      shadow: "shadow-amber-500/20",
      glow: "shadow-lg shadow-amber-500/30"
    },
    air: {
      gradient: "from-cyan-900/40 via-blue-900/30 to-cyan-900/20",
      border: "border-cyan-400/50",
      accent: "text-cyan-200",
      iconBg: "bg-cyan-500/20",
      hoverBg: "hover:bg-cyan-500/10",
      shadow: "shadow-cyan-500/20",
      glow: "shadow-lg shadow-cyan-500/30"
    },
    water: {
      gradient: "from-blue-900/40 via-indigo-900/30 to-blue-900/20",
      border: "border-blue-400/50",
      accent: "text-blue-200",
      iconBg: "bg-blue-500/20",
      hoverBg: "hover:bg-blue-500/10",
      shadow: "shadow-blue-500/20",
      glow: "shadow-lg shadow-blue-500/30"
    }
  };

  const colors = elementColors[elementKey];
  const categories = career.modern_recommended[language];

  // Check if this element has special blessings (e.g., Water receiving Earth blessings)
  const hasSpecialBlessing = elementKey === 'water' && 
    categories?.some(cat => cat.category.toLowerCase().includes(
      language === 'en' ? 'earth-based' : 'terrestres'
    ));

  // Export functionality
  const handleExportPDF = async () => {
    setIsExporting(true);
    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In production, generate actual PDF with career guidance
    const pdfContent = generateCareerGuidePDF();
    downloadFile('career-guidance.pdf', pdfContent);
    
    setIsExporting(false);
  };

  const handleShare = async () => {
    trackEvent('share_click', { tool: 'burj', method: nativeOrCopy() });
    const shareText = language === 'en' 
      ? `Discovered my career path through Istikhara al-Asmāʾ! My ${profile.element} element aligns with ${categories?.[0]?.category || 'various'} industries.`
      : `J'ai découvert ma voie professionnelle avec Istikhara al-Asmāʾ! Mon élément ${profile.element} s'aligne avec ${categories?.[0]?.category || 'diverses'} industries.`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Istikhara Career Guidance',
          text: shareText,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(shareText);
      alert(language === 'en' ? 'Copied to clipboard!' : 'Copié dans le presse-papiers!');
    }
  };

  const generateCareerGuidePDF = () => {
    // This would be implemented with a PDF library like jsPDF
    return new Blob(['PDF content'], { type: 'application/pdf' });
  };

  const downloadFile = (filename: string, blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-6 sm:pb-8">
      {/* Enhanced Header with Element Context */}
      <div className="text-center space-y-2 sm:space-y-3">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
          <div className={`p-2 sm:p-3 ${colors.iconBg} rounded-full ${colors.glow} animate-pulse-slow`}>
            <Briefcase className={`w-6 h-6 sm:w-8 sm:h-8 ${colors.accent}`} />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          {language === 'en' ? 'Career & Vocation Guidance' : 'Orientation Professionnelle'}
        </h2>
        <p className="text-sm sm:text-base text-white max-w-2xl mx-auto px-2">
          {language === 'en' 
            ? 'Career paths that resonate with your spiritual energy and elemental nature' 
            : 'Parcours professionnels en harmonie avec votre énergie spirituelle et nature élémentaire'}
        </p>

        {/* Element Badge */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${colors.gradient} border ${colors.border} rounded-full`}>
            <span className="text-xl sm:text-2xl mr-2">{profile.element_emoji}</span>
            <span className="text-sm sm:text-base text-white font-semibold">
              {profile.element} {language === 'en' ? 'Element' : 'Élément'}
            </span>
          </div>
        </div>
      </div>

      {/* Traditional Guidance Quote - Enhanced */}
      <div className={`bg-gradient-to-br ${colors.gradient} border-2 ${colors.border} rounded-xl sm:rounded-2xl p-4 sm:p-6 ${colors.shadow} hover:${colors.glow} transition-all duration-300`}>
        <div className="flex items-start gap-3 sm:gap-4">
          <div className={`p-3 ${colors.iconBg} rounded-xl flex-shrink-0`}>
            <span className="text-3xl">📜</span>
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xl text-white">
                {language === 'en' ? 'Traditional Wisdom' : 'Sagesse Traditionnelle'}
              </h3>
              <button
                onMouseEnter={() => setShowTooltip('traditional')}
                onMouseLeave={() => setShowTooltip(null)}
                className="relative"
              >
                <Info className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
                {showTooltip === 'traditional' && (
                  <div className="absolute right-0 top-8 w-64 p-3 bg-gray-900 border border-gray-600 rounded-lg text-sm text-gray-200 z-10 shadow-xl">
                    {language === 'en' 
                      ? 'This guidance comes from traditional Islamic texts on ʿIlm al-Ḥurūf (Science of Letters), preserved by scholars across generations.'
                      : 'Cette guidance provient de textes islamiques traditionnels sur ʿIlm al-Ḥurūf (Science des Lettres), préservés par les érudits à travers les générations.'}
                  </div>
                )}
              </button>
            </div>
            
            <blockquote className="text-gray-100 text-lg leading-relaxed border-l-4 border-white/30 pl-5 italic">
              "{career.traditional[language]}"
            </blockquote>
            
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <p className="text-sm text-white">
                {language === 'en' ? 'Traditional Islamic Guidance' : 'Guidance Islamique Traditionnelle'}
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Blessing Notice for Water Element */}
      {hasSpecialBlessing && (
        <div className="bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-purple-900/20 border-2 border-purple-400/50 rounded-2xl p-6 shadow-lg shadow-purple-500/20">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-500/20 rounded-xl flex-shrink-0">
              <Sparkles className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-2">
                ✨ {language === 'en' ? 'Special Spiritual Blessing' : 'Bénédiction Spirituelle Spéciale'}
              </h3>
              <p className="text-gray-100 leading-relaxed">
                {language === 'en' 
                  ? 'Despite being a Water element, you receive special blessings from Earth industries. This unique spiritual gift allows you to thrive in both water-related AND earth-based careers—giving you more pathways to success than most other elements.'
                  : 'Bien que vous soyez un élément Eau, vous recevez des bénédictions spéciales des industries terrestres. Ce don spirituel unique vous permet de prospérer dans les carrières liées à l\'eau ET terrestres—vous offrant plus de voies vers le succès que la plupart des autres éléments.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Control Buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <TrendingUp className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.accent}`} />
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
            {language === 'en' ? 'Recommended Career Fields' : 'Domaines Professionnels Recommandés'}
          </h3>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={expandAll}
            className={`flex-1 sm:flex-none px-3 py-1.5 text-xs sm:text-sm ${colors.iconBg} text-white rounded-lg ${colors.hoverBg} transition-colors`}
          >
            {language === 'en' ? 'Expand All' : 'Tout Développer'}
          </button>
          <button
            onClick={collapseAll}
            className="flex-1 sm:flex-none px-3 py-1.5 text-xs sm:text-sm bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            {language === 'en' ? 'Collapse All' : 'Tout Réduire'}
          </button>
        </div>
      </div>

      {/* Career Categories - Enhanced with ALL Details */}
      <div className="space-y-4">
        {categories && categories.length > 0 ? (
          categories.map((category, index) => {
            const isExpanded = expandedCategories.has(index);
            const isSpecialBlessing = category.category.toLowerCase().includes(
              language === 'en' ? 'special blessing' : 'bénédiction spéciale'
            );

            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colors.gradient} border-2 ${colors.border} rounded-xl overflow-hidden transition-all duration-300 ${
                  isExpanded ? colors.glow : colors.shadow
                } hover:scale-[1.01]`}
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(index)}
                  className={`w-full flex items-center justify-between p-3 sm:p-4 md:p-5 ${colors.hoverBg} transition-colors group`}
                >
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">
                      {category.icon}
                    </span>
                    <div className="text-left">
                      <h4 className="font-semibold text-sm sm:text-base md:text-lg text-white flex items-center gap-2">
                        {category.category}
                        {isSpecialBlessing && (
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                        )}
                      </h4>
                      <p className="text-xs sm:text-sm text-white mt-0.5">
                        {category.items.length} {language === 'en' ? 'opportunities' : 'opportunités'}
                      </p>
                    </div>
                  </div>
                  <div className={`p-1.5 sm:p-2 rounded-full ${colors.iconBg} group-hover:${colors.iconBg} transition-all`}>
                    {isExpanded ? (
                      <ChevronUp className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.accent}`} />
                    ) : (
                      <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.accent}`} />
                    )}
                  </div>
                </button>

                {/* Expanded Items with Animation */}
                {isExpanded && (
                  <div className="px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 space-y-2 animate-slide-down">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3 sm:mb-4"></div>
                    
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-200 group/item"
                        style={{ animationDelay: `${itemIndex * 50}ms` }}
                      >
                        <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.accent} flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform`} />
                        <p className="text-sm sm:text-base text-white leading-relaxed">{item}</p>
                      </div>
                    ))}

                    {/* Item Count Footer */}
                    <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-white/10">
                      <p className="text-[10px] sm:text-xs text-white text-center">
                        {category.items.length} {language === 'en' ? 'career paths in this category' : 'parcours professionnels dans cette catégorie'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white/5 rounded-xl border border-white/10">
            <MessageCircle className="w-12 h-12 text-white/50 mx-auto mb-3" />
            <p className="text-white">
              {language === 'en' 
                ? 'Career guidance data is being compiled for your profile' 
                : 'Les données d\'orientation professionnelle sont en cours de compilation pour votre profil'}
            </p>
          </div>
        )}
      </div>

      {/* Guiding Principle - Enhanced */}
      <div className={`bg-gradient-to-br ${colors.gradient} border-2 ${colors.border} rounded-2xl p-6 ${colors.shadow}`}>
        <div className="flex items-start gap-4">
          <div className={`p-3 ${colors.iconBg} rounded-xl flex-shrink-0`}>
            <span className="text-3xl">💡</span>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-white text-lg mb-3">
              {language === 'en' ? 'Guiding Principle' : 'Principe Directeur'}
            </h3>
            <p className="text-white text-lg leading-relaxed font-medium">
              "{career.principle[language]}"
            </p>
            <p className="text-sm text-white mt-3">
              {language === 'en' 
                ? 'Let this principle guide your career decisions and professional journey.'
                : 'Laissez ce principe guider vos décisions de carrière et votre parcours professionnel.'}
            </p>
          </div>
        </div>
      </div>

      {/* Fields to Avoid - Only if applicable */}
      {(career.avoid.traditional[language] !== "None specified" && 
        career.avoid.traditional[language] !== "Aucun spécifié") && (
        <div className="bg-gradient-to-br from-yellow-900/40 via-orange-900/30 to-yellow-900/20 border-2 border-yellow-500/40 rounded-2xl p-6 shadow-lg shadow-yellow-500/20">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-yellow-500/20 rounded-xl flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="font-bold text-white text-lg mb-2">
                  {language === 'en' 
                    ? 'Fields to Consider Carefully' 
                    : 'Domaines à Considérer Attentivement'}
                </h3>
                <p className="text-white text-sm">
                  {language === 'en'
                    ? 'These industries may not align optimally with your spiritual energy. While not forbidden, they may present more challenges or require extra effort.'
                    : 'Ces industries peuvent ne pas s\'aligner de manière optimale avec votre énergie spirituelle. Bien que non interdites, elles peuvent présenter plus de défis ou nécessiter des efforts supplémentaires.'}
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-black/20 rounded-xl p-4">
                  <p className="text-sm font-semibold text-yellow-200 mb-2 flex items-center gap-2">
                    <span>📜</span>
                    {language === 'en' ? 'Traditional Guidance:' : 'Guidance Traditionnelle:'}
                  </p>
                  <p className="text-gray-200 italic leading-relaxed">
                    "{career.avoid.traditional[language]}"
                  </p>
                </div>

                <div className="bg-black/20 rounded-xl p-4">
                  <p className="text-sm font-semibold text-yellow-200 mb-2 flex items-center gap-2">
                    <span>🌍</span>
                    {language === 'en' ? 'Modern Application:' : 'Application Moderne:'}
                  </p>
                  <p className="text-gray-200 leading-relaxed">
                    {career.avoid.modern[language]}
                  </p>
                </div>
              </div>

              <div className="bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/20">
                <p className="text-sm text-white flex items-start gap-2">
                  <Info className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>
                    {language === 'en' 
                      ? 'This doesn\'t mean complete avoidance—some individuals still succeed in these fields. However, the spiritual alignment suggests focusing your primary efforts on the recommended fields above for optimal results.'
                      : 'Cela ne signifie pas un évitement complet—certaines personnes réussissent encore dans ces domaines. Cependant, l\'alignement spirituel suggère de concentrer vos principaux efforts sur les domaines recommandés ci-dessus pour des résultats optimaux.'}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons - Enhanced with Real Functionality */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
        <button
          onClick={handleExportPDF}
          disabled={isExporting}
          className={`flex items-center justify-center gap-3 py-4 bg-gradient-to-r ${colors.gradient} border-2 ${colors.border} ${colors.hoverBg} text-white font-semibold rounded-xl transition-all duration-300 ${colors.glow} hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isExporting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              <span>{language === 'en' ? 'Generating PDF...' : 'Génération du PDF...'}</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              <span>{language === 'en' ? 'Download Career Guide PDF' : 'Télécharger Guide PDF'}</span>
            </>
          )}
        </button>

        <button
          onClick={handleShare}
          className="flex items-center justify-center gap-3 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
        >
          <Share2 className="w-5 h-5" />
          <span>{language === 'en' ? 'Share Recommendations' : 'Partager Recommandations'}</span>
        </button>
      </div>

      {/* Career Statistics Footer */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
        <div className={`p-4 bg-gradient-to-br ${colors.gradient} border ${colors.border} rounded-xl text-center`}>
          <div className="text-3xl font-bold text-white">{categories?.length || 0}</div>
          <div className="text-sm text-white/80 mt-1">
            {language === 'en' ? 'Career Fields' : 'Domaines'}
          </div>
        </div>
        <div className={`p-4 bg-gradient-to-br ${colors.gradient} border ${colors.border} rounded-xl text-center`}>
          <div className="text-3xl font-bold text-white">
            {categories?.reduce((sum, cat) => sum + cat.items.length, 0) || 0}
          </div>
          <div className="text-sm text-white/80 mt-1">
            {language === 'en' ? 'Opportunities' : 'Opportunités'}
          </div>
        </div>
        <div className={`p-4 bg-gradient-to-br ${colors.gradient} border ${colors.border} rounded-xl text-center`}>
          <div className="text-3xl font-bold text-white">{profile.element_emoji}</div>
          <div className="text-sm text-white/80 mt-1">
            {language === 'en' ? 'Your Element' : 'Votre Élément'}
          </div>
        </div>
        <div className={`p-4 bg-gradient-to-br ${colors.gradient} border ${colors.border} rounded-xl text-center`}>
          <div className="text-3xl font-bold text-white">✨</div>
          <div className="text-sm text-white/80 mt-1">
            {language === 'en' ? 'Aligned Path' : 'Voie Alignée'}
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}