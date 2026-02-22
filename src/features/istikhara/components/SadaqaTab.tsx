"use client";

import React, { useState } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import type { IstikharaCalculationResult } from "../types";
import {
  Calendar,
  Sparkles,
  Check,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Heart,
  Gift,
  Clock,
  Star,
  BookOpen,
  Users,
} from "lucide-react";

interface SadaqaTabProps {
  result: IstikharaCalculationResult;
}

// Helper component for info cards
function InfoCard({
  icon,
  label,
  value,
  colors,
}: {
  icon: string;
  label: string;
  value: string;
  colors: any;
}) {
  return (
    <div className={`p-4 bg-white/5 rounded-lg border ${colors.border}`}>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg">{icon}</span>
        <span className={`text-xs uppercase tracking-wider ${colors.text}`}>{label}</span>
      </div>
      <p className="text-white font-semibold">{value}</p>
    </div>
  );
}

// Expandable section component
function ExpandableSection({
  title,
  icon,
  isExpanded,
  onToggle,
  colors,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  colors: any;
  children: React.ReactNode;
}) {
  return (
    <div className={`border-2 ${colors.border} rounded-xl overflow-hidden`}>
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-4 bg-gradient-to-br ${colors.bgGradient} hover:bg-white/5 transition-colors`}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 ${colors.iconBg} rounded-lg`}>{icon}</div>
          <h4 className="font-bold text-white text-lg">{title}</h4>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-white" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white" />
        )}
      </button>
      {isExpanded && (
        <div className={`p-5 bg-gradient-to-br ${colors.bgGradient}`}>{children}</div>
      )}
    </div>
  );
}

/**
 * SadaqaTab - Dedicated tab for displaying Monthly and Yearly Sadaqah recommendations
 */
export function SadaqaTab({ result }: SadaqaTabProps) {
  const { language } = useLanguage();
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "monthly-traditional",
    "yearly-traditional",
  ]);

  // Get element-based colors
  const elementKey = result.burujProfile.element.toLowerCase() as
    | "fire"
    | "earth"
    | "air"
    | "water";

  const elementColors = {
    fire: {
      bgGradient: "from-red-900/40 via-orange-900/30 to-red-900/20",
      border: "border-orange-400/50",
      text: "text-orange-200",
      accent: "text-yellow-300",
      iconBg: "bg-orange-500/20",
    },
    earth: {
      bgGradient: "from-emerald-900/40 via-green-900/30 to-emerald-900/20",
      border: "border-emerald-400/50",
      text: "text-emerald-200",
      accent: "text-green-300",
      iconBg: "bg-emerald-500/20",
    },
    air: {
      bgGradient: "from-cyan-900/40 via-blue-900/30 to-cyan-900/20",
      border: "border-cyan-400/50",
      text: "text-cyan-200",
      accent: "text-blue-300",
      iconBg: "bg-cyan-500/20",
    },
    water: {
      bgGradient: "from-blue-900/40 via-indigo-900/30 to-blue-900/20",
      border: "border-blue-400/50",
      text: "text-blue-200",
      accent: "text-indigo-300",
      iconBg: "bg-blue-500/20",
    },
  };

  const colors = elementColors[elementKey];
  const monthlySadaqah = result.burujProfile.sadaqah.monthly;
  const lifetimeSadaqah = result.burujProfile.sadaqah.lifetime;

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <Heart className={`w-8 h-8 ${colors.text}`} />
          <h2 className="text-3xl font-bold text-white">
            {language === "en" ? "Sadaqah Guidance" : "Guidance Sadaqah"}
          </h2>
        </div>
        <p className="text-white/80 max-w-2xl mx-auto">
          {language === "en"
            ? "Personalized charity recommendations based on your spiritual profile for ongoing blessings and spiritual balance."
            : "Recommandations de charité personnalisées basées sur votre profil spirituel pour des bénédictions continues et l'équilibre spirituel."}
        </p>
      </div>

      {/* Monthly Sadaqah Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-3 ${colors.iconBg} rounded-full`}>
            <Calendar className={`w-6 h-6 ${colors.text}`} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">
              {language === "en" ? "Monthly Sadaqah" : "Sadaqah Mensuelle"}
            </h3>
            <p className="text-sm text-white/70">
              {language === "en"
                ? "Regular charity for spiritual maintenance"
                : "Charité régulière pour l'entretien spirituel"}
            </p>
          </div>
        </div>

        {/* Monthly Overview Card */}
        <div
          className={`bg-gradient-to-br ${colors.bgGradient} border-2 ${colors.border} rounded-xl p-6 space-y-4`}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <InfoCard
              icon="🔄"
              label={language === "en" ? "Frequency" : "Fréquence"}
              value={monthlySadaqah.frequency[language]}
              colors={colors}
            />
            {monthlySadaqah.context && (
              <InfoCard
                icon="📍"
                label={language === "en" ? "Context" : "Contexte"}
                value={monthlySadaqah.context[language]}
                colors={colors}
              />
            )}
          </div>
        </div>

        {/* Monthly Traditional Practice */}
        <ExpandableSection
          title={language === "en" ? "Traditional Practice" : "Pratique Traditionnelle"}
          icon={<BookOpen className={`w-5 h-5 ${colors.text}`} />}
          isExpanded={expandedSections.includes("monthly-traditional")}
          onToggle={() => toggleSection("monthly-traditional")}
          colors={colors}
        >
          <div className="space-y-4">
            <blockquote className="text-white font-bold italic border-l-4 border-white/20 pl-4 text-lg leading-relaxed">
              "{monthlySadaqah.traditional[language]}"
            </blockquote>

            {monthlySadaqah.purpose && (
              <div className={`p-4 bg-white/5 rounded-lg`}>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className={`w-5 h-5 ${colors.text}`} />
                  <h5 className="font-semibold text-white">
                    {language === "en" ? "Spiritual Benefits" : "Bienfaits Spirituels"}
                  </h5>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {monthlySadaqah.purpose[language]}
                </p>
              </div>
            )}

            {monthlySadaqah.avoid_note && (
              <div className="p-4 bg-yellow-900/30 border border-yellow-500/30 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="text-yellow-200 text-sm">
                    {monthlySadaqah.avoid_note[language]}
                  </p>
                </div>
              </div>
            )}
          </div>
        </ExpandableSection>

        {/* Monthly Modern Alternatives */}
        <ExpandableSection
          title={language === "en" ? "Modern Alternatives" : "Alternatives Modernes"}
          icon={<Users className={`w-5 h-5 ${colors.text}`} />}
          isExpanded={expandedSections.includes("monthly-modern")}
          onToggle={() => toggleSection("monthly-modern")}
          colors={colors}
        >
          <div className="grid md:grid-cols-2 gap-3">
            {monthlySadaqah.modern_alternatives[language].map((alt, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className={`p-2 ${colors.iconBg} rounded-lg flex-shrink-0`}>
                  <Check className={`w-5 h-5 ${colors.text}`} />
                </div>
                <p className="text-white font-semibold">{alt}</p>
              </div>
            ))}
          </div>
        </ExpandableSection>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className={`flex-1 h-px bg-gradient-to-r from-transparent ${colors.border}`} />
        <Star className={`w-6 h-6 ${colors.text}`} />
        <div className={`flex-1 h-px bg-gradient-to-l from-transparent ${colors.border}`} />
      </div>

      {/* Yearly/Lifetime Sadaqah Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-3 ${colors.iconBg} rounded-full`}>
            <Gift className={`w-6 h-6 ${colors.text}`} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">
              {language === "en" ? "Yearly / Lifetime Sadaqah" : "Sadaqah Annuelle / Vie"}
            </h3>
            <p className="text-sm text-white/70">
              {language === "en"
                ? "Major charity for significant spiritual milestones"
                : "Charité majeure pour des étapes spirituelles importantes"}
            </p>
          </div>
        </div>

        {/* Yearly Traditional Practice */}
        <ExpandableSection
          title={language === "en" ? "Traditional Practice" : "Pratique Traditionnelle"}
          icon={<BookOpen className={`w-5 h-5 ${colors.text}`} />}
          isExpanded={expandedSections.includes("yearly-traditional")}
          onToggle={() => toggleSection("yearly-traditional")}
          colors={colors}
        >
          <div className="space-y-4">
            <blockquote className="text-white font-bold italic border-l-4 border-white/20 pl-4 text-lg leading-relaxed">
              "{lifetimeSadaqah.traditional[language]}"
            </blockquote>

            {lifetimeSadaqah.significance && (
              <div className={`p-4 bg-white/5 rounded-lg`}>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className={`w-5 h-5 ${colors.text}`} />
                  <h5 className="font-semibold text-white">
                    {language === "en" ? "Spiritual Significance" : "Signification Spirituelle"}
                  </h5>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {lifetimeSadaqah.significance[language]}
                </p>
              </div>
            )}

            {lifetimeSadaqah.cultural_note && (
              <div className={`p-4 bg-white/5 rounded-lg`}>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className={`w-5 h-5 ${colors.text}`} />
                  <h5 className="font-semibold text-white">
                    {language === "en" ? "Cultural Context" : "Contexte Culturel"}
                  </h5>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {lifetimeSadaqah.cultural_note[language]}
                </p>
              </div>
            )}

            {lifetimeSadaqah.note && (
              <div className="p-4 bg-blue-900/30 border border-blue-500/30 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-blue-200 text-sm">{lifetimeSadaqah.note[language]}</p>
                </div>
              </div>
            )}

            {lifetimeSadaqah.technical_note && (
              <div className="p-4 bg-purple-900/30 border border-purple-500/30 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <p className="text-purple-200 text-sm">
                    {lifetimeSadaqah.technical_note[language]}
                  </p>
                </div>
              </div>
            )}
          </div>
        </ExpandableSection>

        {/* Components (if available) */}
        {lifetimeSadaqah.components && (
          <ExpandableSection
            title={language === "en" ? "Components" : "Composants"}
            icon={<Gift className={`w-5 h-5 ${colors.text}`} />}
            isExpanded={expandedSections.includes("yearly-components")}
            onToggle={() => toggleSection("yearly-components")}
            colors={colors}
          >
            <div className="grid md:grid-cols-2 gap-3">
              {lifetimeSadaqah.components[language].map((component, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white/5 rounded-lg"
                >
                  <div className={`p-2 ${colors.iconBg} rounded-lg flex-shrink-0`}>
                    <Check className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <p className="text-white font-semibold">{component}</p>
                </div>
              ))}
            </div>
          </ExpandableSection>
        )}

        {/* Best Timing */}
        <ExpandableSection
          title={language === "en" ? "Best Timing" : "Meilleur Moment"}
          icon={<Clock className={`w-5 h-5 ${colors.text}`} />}
          isExpanded={expandedSections.includes("yearly-timing")}
          onToggle={() => toggleSection("yearly-timing")}
          colors={colors}
        >
          <div className="space-y-3">
            {lifetimeSadaqah.best_timing[language].map((timing, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
              >
                <div className={`p-2 ${colors.iconBg} rounded-full`}>
                  <Clock className={`w-4 h-4 ${colors.text}`} />
                </div>
                <p className="text-white">{timing}</p>
              </div>
            ))}
          </div>
        </ExpandableSection>
      </div>

      {/* Action Tips */}
      <div className="p-6 bg-gradient-to-br from-yellow-900/30 to-orange-900/20 border-2 border-yellow-500/30 rounded-xl">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-white mb-3">
              {language === "en" ? "Getting Started with Sadaqah" : "Commencer avec la Sadaqah"}
            </h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-0.5">•</span>
                <span>
                  {language === "en"
                    ? "Set a monthly reminder for your regular sadaqah"
                    : "Définissez un rappel mensuel pour votre sadaqah régulière"}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-0.5">•</span>
                <span>
                  {language === "en"
                    ? "Start small and increase gradually as you establish the habit"
                    : "Commencez petit et augmentez progressivement à mesure que vous établissez l'habitude"}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-0.5">•</span>
                <span>
                  {language === "en"
                    ? "The intention (niyyah) is as important as the action itself"
                    : "L'intention (niyyah) est aussi importante que l'action elle-même"}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-0.5">•</span>
                <span>
                  {language === "en"
                    ? "Give secretly when possible, as it purifies the heart"
                    : "Donnez en secret quand c'est possible, car cela purifie le cœur"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SadaqaTab;
