"use client";

import React, { useState } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import type { IstikharaCalculationResult } from "../types";
import {
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
} from "lucide-react";
import { VideoEmbed } from "../../../components/VideoEmbed";
import {
  ZODIAC_SADAQAH,
  ZODIAC_SIGN_ORDER,
  ZODIAC_SIGN_SYMBOL,
  type SadaqahForm,
} from "../../../data/zodiacSadaqahData";

type UiLang = "en" | "fr";

interface SadaqaTabProps {
  result: IstikharaCalculationResult;
}

// Card for a single traditional sadaqah practice (title/body/optional bullets)
function TraditionFormCard({ form, language, colors }: { form: SadaqahForm; language: UiLang; colors: any }) {
  return (
    <div className="p-4 bg-white/5 rounded-lg space-y-2">
      <h5 className="font-semibold text-white">{form.title[language]}</h5>
      <p className="text-white/90 text-sm leading-relaxed">{form.body[language]}</p>
      {form.bullets && (
        <ul className="space-y-1.5 pt-1">
          {form.bullets[language].map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-white/90">
              <Check className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
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
        <div className={`p-5 bg-gradient-to-br ${colors.bgGradient} space-y-4`}>{children}</div>
      )}
    </div>
  );
}

/**
 * SadaqaTab - Traditional per-sign sadaqah (charity) recommendations,
 * keyed off the person's computed zodiac sign.
 */
export function SadaqaTab({ result }: SadaqaTabProps) {
  const { language } = useLanguage();
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "general",
    "specific",
    "video",
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

  // Traditional (Wolof/Senegalese) per-sign sadaqah practices, keyed off the
  // same burujRemainder (1-12) used for the element theme above.
  const zodiacSignId = ZODIAC_SIGN_ORDER[result.burujRemainder - 1];
  const tradition = ZODIAC_SADAQAH[zodiacSignId];

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
          <span className="text-4xl leading-none">{ZODIAC_SIGN_SYMBOL[zodiacSignId]}</span>
          <h2 className="text-3xl font-bold text-white">
            {language === "en"
              ? `Sadaqah Guidance — ${tradition.en}`
              : `Guidance Sadaqah — ${tradition.fr}`}
          </h2>
        </div>
        <p className="text-white/80 max-w-2xl mx-auto">
          {language === "en"
            ? "Traditional charity forms associated with your sign, for ongoing blessings and spiritual balance."
            : "Formes de charité traditionnelles associées à votre signe, pour des bénédictions continues et l'équilibre spirituel."}
        </p>
        <p className="text-white/50 text-xs italic">
          {language === "en"
            ? "According to the teachings of Seringe Mahdiou Niane"
            : "Selon les enseignements de Seringe Mahdiou Niane"}
        </p>
        {tradition.rulingPlanet && (
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.iconBg}`}>
            <Sparkles className={`w-4 h-4 ${colors.text}`} />
            <span className="text-sm text-white/90">{tradition.rulingPlanet[language]}</span>
          </div>
        )}
      </div>

      {tradition.generalNote && (
        <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
          <p className="text-white/90 text-sm leading-relaxed italic">{tradition.generalNote[language]}</p>
        </div>
      )}

      {tradition.generalForms && tradition.generalForms.length > 0 && (
        <ExpandableSection
          title={language === "en" ? "General Forms" : "Formes Générales"}
          icon={<Gift className={`w-5 h-5 ${colors.text}`} />}
          isExpanded={expandedSections.includes("general")}
          onToggle={() => toggleSection("general")}
          colors={colors}
        >
          {tradition.generalForms.map((form, i) => (
            <TraditionFormCard key={i} form={form} language={language} colors={colors} />
          ))}
        </ExpandableSection>
      )}

      <ExpandableSection
        title={language === "en" ? "Specific Forms" : "Formes Spécifiques"}
        icon={<Star className={`w-5 h-5 ${colors.text}`} />}
        isExpanded={expandedSections.includes("specific")}
        onToggle={() => toggleSection("specific")}
        colors={colors}
      >
        {tradition.specificForms.map((form, i) => (
          <TraditionFormCard key={i} form={form} language={language} colors={colors} />
        ))}
      </ExpandableSection>

      {tradition.timing && (
        <ExpandableSection
          title={language === "en" ? "Best Timing" : "Meilleur Moment"}
          icon={<Clock className={`w-5 h-5 ${colors.text}`} />}
          isExpanded={expandedSections.includes("timing")}
          onToggle={() => toggleSection("timing")}
          colors={colors}
        >
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
            <div className={`p-2 ${colors.iconBg} rounded-full`}>
              <Clock className={`w-4 h-4 ${colors.text}`} />
            </div>
            <p className="text-white font-semibold">{tradition.timing.day[language]}</p>
          </div>
          <p className="text-white/90 text-sm leading-relaxed">{tradition.timing.note[language]}</p>
        </ExpandableSection>
      )}

      {tradition.guidance && (
        <div className="p-5 bg-amber-900/30 border-2 border-amber-500/40 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-bold text-white">{tradition.guidance.title[language]}</h4>
              <p className="text-amber-100/90 text-sm leading-relaxed">{tradition.guidance.body[language]}</p>
            </div>
          </div>
        </div>
      )}

      {tradition.summary && tradition.summary[language].length > 0 && (
        <div className={`p-5 bg-gradient-to-br ${colors.bgGradient} border-2 ${colors.border} rounded-xl space-y-3`}>
          <div className="flex items-center gap-2">
            <Heart className={`w-5 h-5 ${colors.text}`} />
            <h4 className="font-bold text-white">{language === "en" ? "Summary" : "Résumé"}</h4>
          </div>
          <ul className="space-y-2">
            {tradition.summary[language].map((line, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-white/90">
                <Check className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          {tradition.summaryNote && (
            <p className="text-white/70 text-xs leading-relaxed pt-2 border-t border-white/10">
              {tradition.summaryNote[language]}
            </p>
          )}
        </div>
      )}

      {tradition.intention && (
        <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
          <p className="text-white/90 text-sm leading-relaxed italic">{tradition.intention[language]}</p>
        </div>
      )}

      <ExpandableSection
        title={language === "en" ? "Teaching Video (in Wolof)" : "Vidéo d'Enseignement (en Wolof)"}
        icon={<BookOpen className={`w-5 h-5 ${colors.text}`} />}
        isExpanded={expandedSections.includes("video")}
        onToggle={() => toggleSection("video")}
        colors={colors}
      >
        <VideoEmbed videoId={tradition.videoId} title={`${tradition.en} — Sadaqah`} />
        {tradition.altVideoId && (
          <VideoEmbed videoId={tradition.altVideoId} title={`${tradition.en} — Sadaqah (2)`} />
        )}
        <p className="text-white/50 text-xs italic text-center">
          {language === "en"
            ? "By Seringe Mahdiou Niane — spoken in Wolof"
            : "Par Seringe Mahdiou Niane — parlé en wolof"}
        </p>
      </ExpandableSection>

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
