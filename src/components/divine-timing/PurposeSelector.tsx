'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { AccuratePlanetaryHour } from '../../types/planetary';
import { Briefcase, Heart, MessageCircle, BookOpen, DollarSign, Users } from 'lucide-react';

interface Alignment {
  quality: 'strong' | 'moderate' | 'neutral' | 'weak';
}

interface PurposeSelectorProps {
  currentHour: AccuratePlanetaryHour | null;
  alignment: Alignment | null;
  selectedPurpose: string | null;
  onSelectPurpose: (purpose: string) => void;
}

const purposes = [
  {
    id: 'work',
    icon: Briefcase,
    emoji: '💼',
    labelEn: 'Work & Projects',
    labelFr: 'Travail & Projets',
    color: '',
  },
  {
    id: 'prayer',
    icon: Heart,
    emoji: '🤲',
    labelEn: 'Prayer & Worship',
    labelFr: 'Prière & Adoration',
    color: '',
  },
  {
    id: 'conversations',
    icon: MessageCircle,
    emoji: '💬',
    labelEn: 'Conversations',
    labelFr: 'Conversations',
    color: '',
  },
  {
    id: 'learning',
    icon: BookOpen,
    emoji: '📚',
    labelEn: 'Learning',
    labelFr: 'Apprentissage',
    color: '',
  },
  {
    id: 'finance',
    icon: DollarSign,
    emoji: '💰',
    labelEn: 'Finance',
    labelFr: 'Finance',
    color: '',
  },
  {
    id: 'relationships',
    icon: Users,
    emoji: '👥',
    labelEn: 'Relationships',
    labelFr: 'Relations',
    color: '',
  },
];

export function PurposeSelector({
  currentHour,
  alignment,
  selectedPurpose,
  onSelectPurpose,
}: PurposeSelectorProps) {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';

  if (!currentHour || !alignment) {
    return null;
  }

  const getGuidanceForPurpose = (purposeId: string) => {
    const planet = currentHour.planet.name;
    const quality = alignment.quality;
    const isGoodTime = quality === 'strong' || quality === 'moderate';

    // Planet-specific guidance for each purpose
    const guidance: Record<string, Record<string, { good: { en: string; fr: string }; neutral: { en: string; fr: string }; bad: { en: string; fr: string } }>> = {
      work: {
        Sun: {
          good: { 
            en: '☀️ Excellent for leadership, decision-making, and starting important projects',
            fr: '☀️ Excellent pour le leadership, la prise de décisions et le lancement de projets importants'
          },
          neutral: {
            en: '☀️ Good for routine tasks, but avoid major decisions',
            fr: '☀️ Bon pour les tâches routinières, mais évitez les décisions majeures'
          },
          bad: {
            en: '☀️ Not ideal for work - consider rescheduling important tasks',
            fr: '☀️ Pas idéal pour le travail - envisagez de reporter les tâches importantes'
          },
        },
        Mercury: {
          good: {
            en: '☿️ Perfect for communication, writing, planning, and detailed work',
            fr: '☿️ Parfait pour la communication, l\'écriture, la planification et le travail détaillé'
          },
          neutral: {
            en: '☿️ Okay for routine communication and simple tasks',
            fr: '☿️ Acceptable pour la communication courante et les tâches simples'
          },
          bad: {
            en: '☿️ High risk of miscommunication - double-check everything',
            fr: '☿️ Risque élevé de malentendu - vérifiez tout deux fois'
          },
        },
        Jupiter: {
          good: {
            en: '♃ Great for expansion, big picture planning, and learning new skills',
            fr: '♃ Excellent pour l\'expansion, la planification globale et l\'apprentissage de nouvelles compétences'
          },
          neutral: {
            en: '♃ Good for moderate growth, but avoid overcommitting',
            fr: '♃ Bon pour une croissance modérée, mais évitez de trop vous engager'
          },
          bad: {
            en: '♃ Risk of overconfidence - be conservative in plans',
            fr: '♃ Risque de surconfiance - soyez conservateur dans vos plans'
          },
        },
        Mars: {
          good: {
            en: '♂️ Excellent for tackling challenges, physical work, and assertive action',
            fr: '♂️ Excellent pour relever des défis, le travail physique et l\'action assertive'
          },
          neutral: {
            en: '♂️ Good for moderate effort, but pace yourself',
            fr: '♂️ Bon pour un effort modéré, mais allez-y doucement'
          },
          bad: {
            en: '♂️ High conflict risk - avoid confrontations and aggressive moves',
            fr: '♂️ Risque élevé de conflit - évitez les confrontations et les mouvements agressifs'
          },
        },
        Venus: {
          good: {
            en: '♀️ Good for creative work, teamwork, and making things beautiful',
            fr: '♀️ Bon pour le travail créatif, le travail d\'équipe et embellir les choses'
          },
          neutral: {
            en: '♀️ Okay for pleasant tasks, but not for hard decisions',
            fr: '♀️ Acceptable pour les tâches agréables, mais pas pour les décisions difficiles'
          },
          bad: {
            en: '♀️ Avoid important work - focus on rest and pleasure instead',
            fr: '♀️ Évitez le travail important - concentrez-vous plutôt sur le repos et le plaisir'
          },
        },
        Saturn: {
          good: {
            en: '♄ Perfect for disciplined work, structure, and long-term commitments',
            fr: '♄ Parfait pour le travail discipliné, la structure et les engagements à long terme'
          },
          neutral: {
            en: '♄ Good for steady work, but avoid being too rigid',
            fr: '♄ Bon pour un travail constant, mais évitez d\'être trop rigide'
          },
          bad: {
            en: '♄ Energy feels heavy - take breaks and be gentle with yourself',
            fr: '♄ L\'énergie semble lourde - prenez des pauses et soyez doux avec vous-même'
          },
        },
        Moon: {
          good: {
            en: '🌙 Good for intuitive work, caring professions, and emotional intelligence',
            fr: '🌙 Bon pour le travail intuitif, les professions de soin et l\'intelligence émotionnelle'
          },
          neutral: {
            en: '🌙 Okay for routine work, but emotions may interfere',
            fr: '🌙 Acceptable pour le travail routinier, mais les émotions peuvent interférer'
          },
          bad: {
            en: '🌙 Too emotional for work - rest and reflect instead',
            fr: '🌙 Trop émotionnel pour le travail - reposez-vous et réfléchissez plutôt'
          },
        },
      },
      prayer: {
        Moon: {
          good: {
            en: '🌙 Beautiful time for deep prayer, dhikr, and spiritual connection',
            fr: '🌙 Moment magnifique pour la prière profonde, le dhikr et la connexion spirituelle'
          },
          neutral: {
            en: '🌙 Good for prayer, though distractions may arise',
            fr: '🌙 Bon pour la prière, bien que des distractions puissent survenir'
          },
          bad: {
            en: '🌙 Emotions may cloud your focus - seek simplicity',
            fr: '🌙 Les émotions peuvent troubler votre concentration - recherchez la simplicité'
          },
        },
        Jupiter: {
          good: {
            en: '♃ Excellent for studying sacred texts, seeking knowledge, and gratitude',
            fr: '♃ Excellent pour étudier les textes sacrés, rechercher la connaissance et la gratitude'
          },
          neutral: {
            en: '♃ Good for learning, but avoid spiritual pride',
            fr: '♃ Bon pour l\'apprentissage, mais évitez l\'orgueil spirituel'
          },
          bad: {
            en: '♃ Risk of spiritual arrogance - practice humility',
            fr: '♃ Risque d\'arrogance spirituelle - pratiquez l\'humilité'
          },
        },
        Venus: {
          good: {
            en: '♀️ Perfect for loving devotion, gratitude, and heart-centered prayer',
            fr: '♀️ Parfait pour la dévotion aimante, la gratitude et la prière centrée sur le cœur'
          },
          neutral: {
            en: '♀️ Good for gentle worship, but may lack depth',
            fr: '♀️ Bon pour une adoration douce, mais peut manquer de profondeur'
          },
          bad: {
            en: '♀️ Focus on beauty may distract from spiritual essence',
            fr: '♀️ L\'accent sur la beauté peut distraire de l\'essence spirituelle'
          },
        },
        Saturn: {
          good: {
            en: '♄ Excellent for disciplined practice, fasting, and serious contemplation',
            fr: '♄ Excellent pour la pratique disciplinée, le jeûne et la contemplation sérieuse'
          },
          neutral: {
            en: '♄ Good for structured prayer, but avoid rigidity',
            fr: '♄ Bon pour la prière structurée, mais évitez la rigidité'
          },
          bad: {
            en: '♄ May feel burdensome - remember divine mercy and compassion',
            fr: '♄ Peut sembler accablant - rappelez-vous de la miséricorde et compassion divine'
          },
        },
      },
      // Add more purpose guidance as needed
    };

    const planetGuidance = guidance[purposeId]?.[planet];
    if (!planetGuidance) {
      // Generic fallback
      if (isGoodTime) {
        return isFr 
          ? `✨ Moment favorable pour ${purposes.find(p => p.id === purposeId)?.labelFr || purposeId}`
          : `✨ Good time for ${purposes.find(p => p.id === purposeId)?.labelEn || purposeId}`;
      } else {
        return isFr
          ? `💫 Moment neutre - procédez avec prudence`
          : `💫 Neutral time - proceed thoughtfully`;
      }
    }

    if (quality === 'strong') {
      return isFr ? planetGuidance.good.fr : planetGuidance.good.en;
    } else if (quality === 'moderate' || quality === 'neutral') {
      return isFr ? planetGuidance.neutral.fr : planetGuidance.neutral.en;
    } else {
      return isFr ? planetGuidance.bad.fr : planetGuidance.bad.en;
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
        {isFr ? '🎯 Que souhaitez-vous faire?' : '🎯 What do you need help with?'}
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {purposes.map((purpose) => {
          const Icon = purpose.icon;
          const isSelected = selectedPurpose === purpose.id;
          
          return (
            <button
              key={purpose.id}
              onClick={() => onSelectPurpose(isSelected ? '' : purpose.id)}
              className={`relative p-4 rounded-xl border transition-all ${
                isSelected
                  ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/30 scale-105 shadow-sm'
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-amber-300 '
              }`}
            >
              <div className="text-center space-y-2">
                <div className="text-3xl">{purpose.emoji}</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {isFr ? purpose.labelFr : purpose.labelEn}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Show guidance when purpose is selected */}
      {selectedPurpose && (
        <div className="p-4 border border-amber-200 dark:border-amber-800 rounded-xl bg-white/60 dark:bg-slate-800/40">
          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
            {getGuidanceForPurpose(selectedPurpose)}
          </p>
        </div>
      )}
    </div>
  );
}
