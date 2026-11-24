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
import {
  zodiacSadaqahInWolofLabel,
  zodiacSadaqahWolofLine,
} from "../../../lib/zodiacSadaqahWolofCopy";
import { localeList, localeText } from "../../../lib/localeText";
import { sadaqahUiCopy } from "../../../lib/sadaqahUiCopy";
import { isBirthDateSadaqah } from "../sadaqahSource";
import {
  EnhancedLifetimeOfferingSection,
  EnhancedMonthlySadaqahSection,
} from "./SpiritualPracticeTab";

interface SadaqaTabProps {
  result: IstikharaCalculationResult;
}

// Card for a single traditional sadaqah practice (title/body/optional bullets)
function TraditionFormCard({ form, colors }: { form: SadaqahForm; colors: any }) {
  const { uiLanguage } = useLanguage();
  return (
    <div className="p-4 bg-white/5 rounded-lg space-y-2">
      <h5 className="font-semibold text-white">{localeText(form.title, uiLanguage)}</h5>
      {form.wolof && (
        <p className="text-xs leading-snug text-white/55">{zodiacSadaqahWolofLine(uiLanguage, form.wolof)}</p>
      )}
      <p className="text-white/90 text-sm leading-relaxed">{localeText(form.body, uiLanguage)}</p>
      {form.bullets && (
        <ul className="space-y-1.5 pt-1">
          {localeList(form.bullets, uiLanguage).map((bullet, i) => (
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
 * SadaqaTab — sadaqah for the "Who Am I?" result.
 * Date of birth keeps the existing zodiac (Niane) guidance below.
 * Name + mother's name uses the burujData monthly/lifetime guidance
 * (same source as asrar-mobile), rendered with the existing sections.
 */
export function SadaqaTab({ result }: SadaqaTabProps) {
  const { uiLanguage } = useLanguage();
  const ui = sadaqahUiCopy(uiLanguage);
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

  // Name + mother's name: monthly + lifetime guidance from burujData
  // (asrar-mobile's name-based sadaqah). Date of birth keeps the block below.
  if (!isBirthDateSadaqah(result)) {
    return (
      <div className="space-y-8">
        <EnhancedMonthlySadaqahSection result={result} colors={colors} />
        <EnhancedLifetimeOfferingSection result={result} colors={colors} />
        <div className="p-6 bg-gradient-to-br from-yellow-900/30 to-orange-900/20 border-2 border-yellow-500/30 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-white mb-3">
                {ui.gettingStartedSadaqah}
              </h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-0.5">•</span>
                  <span>
{ui.tipMonthlyReminder}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-0.5">•</span>
                  <span>
{ui.tipStartSmall}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-0.5">•</span>
                  <span>
{ui.tipIntention}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-0.5">•</span>
                  <span>
{ui.tipGiveSecretly}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            {`${ui.sadaqahGuidance} — ${localeText({ en: tradition.en, fr: tradition.fr, ar: tradition.ar, ur: tradition.ur }, uiLanguage)}`}
          </h2>
        </div>
        <p className="text-white/80 max-w-2xl mx-auto">
          {ui.dobIntro}
        </p>
        <p className="text-white/50 text-xs italic">
          {ui.accordingToNiane}
        </p>
        {tradition.rulingPlanet && (
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.iconBg}`}>
            <Sparkles className={`w-4 h-4 ${colors.text}`} />
            <span className="text-sm text-white/90">{localeText(tradition.rulingPlanet, uiLanguage)}</span>
          </div>
        )}
      </div>

      {tradition.generalNote && (
        <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
          <p className="text-white/90 text-sm leading-relaxed italic">{localeText(tradition.generalNote, uiLanguage)}</p>
        </div>
      )}

      {tradition.generalForms && tradition.generalForms.length > 0 && (
        <ExpandableSection
          title={ui.generalForms}
          icon={<Gift className={`w-5 h-5 ${colors.text}`} />}
          isExpanded={expandedSections.includes("general")}
          onToggle={() => toggleSection("general")}
          colors={colors}
        >
          {tradition.generalForms.map((form, i) => (
            <TraditionFormCard key={i} form={form} colors={colors} />
          ))}
        </ExpandableSection>
      )}

      <ExpandableSection
        title={ui.specificForms}
        icon={<Star className={`w-5 h-5 ${colors.text}`} />}
        isExpanded={expandedSections.includes("specific")}
        onToggle={() => toggleSection("specific")}
        colors={colors}
      >
        {tradition.specificForms.map((form, i) => (
          <TraditionFormCard key={i} form={form} colors={colors} />
        ))}
      </ExpandableSection>

      {tradition.timing && (
        <ExpandableSection
          title={ui.bestTiming}
          icon={<Clock className={`w-5 h-5 ${colors.text}`} />}
          isExpanded={expandedSections.includes("timing")}
          onToggle={() => toggleSection("timing")}
          colors={colors}
        >
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
            <div className={`p-2 ${colors.iconBg} rounded-full`}>
              <Clock className={`w-4 h-4 ${colors.text}`} />
            </div>
            <p className="text-white font-semibold">{localeText(tradition.timing.day, uiLanguage)}</p>
          </div>
          <p className="text-white/90 text-sm leading-relaxed">{localeText(tradition.timing.note, uiLanguage)}</p>
        </ExpandableSection>
      )}

      {tradition.guidance && (
        <div className="p-5 bg-amber-900/30 border-2 border-amber-500/40 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-bold text-white">{localeText(tradition.guidance.title, uiLanguage)}</h4>
              <p className="text-amber-100/90 text-sm leading-relaxed">{localeText(tradition.guidance.body, uiLanguage)}</p>
            </div>
          </div>
        </div>
      )}

      {tradition.summary && localeList(tradition.summary, uiLanguage).length > 0 && (
        <div className={`p-5 bg-gradient-to-br ${colors.bgGradient} border-2 ${colors.border} rounded-xl space-y-3`}>
          <div className="flex items-center gap-2">
            <Heart className={`w-5 h-5 ${colors.text}`} />
            <h4 className="font-bold text-white">{ui.summary}</h4>
          </div>
          <ul className="space-y-2">
            {localeList(tradition.summary, uiLanguage).map((line, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-white/90">
                <Check className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          {tradition.summaryNote && (
            <p className="text-white/70 text-xs leading-relaxed pt-2 border-t border-white/10">
              {localeText(tradition.summaryNote, uiLanguage)}
            </p>
          )}
        </div>
      )}

      {tradition.intention && (
        <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
          <p className="text-white/90 text-sm leading-relaxed italic">{localeText(tradition.intention, uiLanguage)}</p>
        </div>
      )}

      <ExpandableSection
        title={ui.teachingVideo}
        icon={<BookOpen className={`w-5 h-5 ${colors.text}`} />}
        isExpanded={expandedSections.includes("video")}
        onToggle={() => toggleSection("video")}
        colors={colors}
      >
        <div className="space-y-1.5">
          <VideoEmbed videoId={tradition.videoId} title={`${localeText({ en: tradition.en, fr: tradition.fr, ar: tradition.ar, ur: tradition.ur }, uiLanguage)} — Sadaqah`} />
          <p className="text-xs text-white/50">{zodiacSadaqahInWolofLabel(uiLanguage)}</p>
        </div>
        {tradition.altVideoId && (
          <div className="space-y-1.5">
            <VideoEmbed videoId={tradition.altVideoId} title={`${localeText({ en: tradition.en, fr: tradition.fr, ar: tradition.ar, ur: tradition.ur }, uiLanguage)} — Sadaqah (2)`} />
            <p className="text-xs text-white/50">{zodiacSadaqahInWolofLabel(uiLanguage)}</p>
          </div>
        )}
        <p className="text-white/50 text-xs italic text-center">
          {ui.videoAttribution}
        </p>
      </ExpandableSection>

      {/* Action Tips */}
      <div className="p-6 bg-gradient-to-br from-yellow-900/30 to-orange-900/20 border-2 border-yellow-500/30 rounded-xl">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-white mb-3">
              {ui.gettingStartedSadaqah}
            </h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-0.5">•</span>
                <span>
{ui.tipMonthlyReminder}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-0.5">•</span>
                <span>
{ui.tipStartSmall}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-0.5">•</span>
                <span>
{ui.tipIntention}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-0.5">•</span>
                <span>
{ui.tipGiveSecretly}
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
