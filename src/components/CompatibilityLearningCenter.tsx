import React from 'react';
import { BookOpen, Heart, Compass, Star, Lightbulb, Users } from 'lucide-react';

interface CompatibilityLearningCenterProps {
  language?: 'en' | 'fr' | 'ar';
}

export function CompatibilityLearningCenter({ language = 'en' }: CompatibilityLearningCenterProps) {
  const isFrench = language === 'fr';
  
  const content = {
    en: {
      title: "Understanding Relationship Compatibility",
      subtitle: "Learn how Islamic numerology reveals the harmony between two souls",
      
      sections: [
        {
          icon: Heart,
          title: "What is Compatibility Analysis?",
          color: "rose",
          content: [
            {
              heading: "Ancient Wisdom for Modern Relationships",
              text: "Compatibility analysis uses the sacred science of ʿIlm al-Ḥurūf (Science of Letters) to understand how two people's energies interact. Your names carry spiritual vibrations that reveal natural harmony or areas requiring conscious effort."
            },
            {
              heading: "Why Names Matter",
              text: "In Islamic tradition, names are not random—they carry divine energy and influence your destiny. When two names come together, their combined energies create a unique relationship dynamic that can be understood and optimized."
            },
            {
              heading: "Three Sacred Dimensions",
              text: "We analyze compatibility through three complementary lenses: Soul Connection (spiritual alignment), Personality Balance (elemental harmony), and Cosmic Harmony (planetary influences). Each reveals different aspects of your relationship potential."
            }
          ]
        },
        {
          icon: Compass,
          title: "The Three Analysis Methods",
          color: "blue",
          content: [
            {
              heading: "💫 Soul Connection (Spiritual Destiny)",
              text: "Examines how your spiritual essences align. This reveals your capacity for deep understanding, shared life purpose, and spiritual growth together. High scores indicate natural soul-level resonance."
            },
            {
              heading: "🎨 Personality Balance (Elemental Temperament)",
              text: "Analyzes the interaction of your elemental natures (Fire, Water, Air, Earth). Fire brings passion, Water brings emotion, Air brings intellect, Earth brings stability. Understanding your elemental blend helps navigate daily interactions."
            },
            {
              heading: "🌟 Cosmic Harmony (Planetary Compatibility)",
              text: "Studies how your ruling planets interact. Each planet governs different energies—Mars (action), Venus (love), Mercury (communication), etc. Planetary harmony indicates ease in specific life areas."
            }
          ]
        },
        {
          icon: Star,
          title: "Understanding Your Score",
          color: "amber",
          content: [
            {
              heading: "85-100: Excellent Match 💚",
              text: "Natural harmony flows between you. Your energies complement each other beautifully. Even challenges feel manageable because you 'get' each other intuitively. This is rare and precious."
            },
            {
              heading: "75-84: Very Good 💙",
              text: "Strong compatibility with minor friction points. You have great potential together—small adjustments in communication or understanding each other's needs will create beautiful harmony."
            },
            {
              heading: "65-74: Good Match 💛",
              text: "Solid foundation with room for growth. You can build something beautiful by consciously working on understanding and compromise. Many successful relationships thrive in this range."
            },
            {
              heading: "50-64: Moderate 🧡",
              text: "Requires conscious effort and mutual understanding. Success depends on both partners' commitment to growth, communication, and respecting differences. Professional guidance may help navigate challenges."
            },
            {
              heading: "Below 50: Challenging ❤️",
              text: "Significant differences that need deep work. Not impossible, but requires exceptional maturity, patience, and often professional support. Consider whether both partners are truly committed to the journey."
            }
          ]
        },
        {
          icon: Lightbulb,
          title: "How to Use This Knowledge",
          color: "purple",
          content: [
            {
              heading: "For New Relationships",
              text: "Use compatibility insights to understand potential strengths and challenges early. High compatibility doesn't guarantee success, and low scores don't doom a relationship—but awareness helps you prepare and communicate better."
            },
            {
              heading: "For Existing Partnerships",
              text: "Discover why certain patterns exist in your relationship. Understanding your elemental and planetary dynamics can transform conflicts into opportunities for deeper connection and growth."
            },
            {
              heading: "For Marriage Decisions",
              text: "Consider compatibility as one factor among many—character, shared values, faith, life goals, and mutual respect matter deeply. Use this tool to enter with open eyes, not to make absolute judgments."
            },
            {
              heading: "Remember: Free Will Matters Most",
              text: "Compatibility analysis shows natural tendencies, not fixed destiny. Any two committed people can build a beautiful relationship through conscious effort, communication, and faith. Low compatibility means more work, not impossibility."
            }
          ]
        },
        {
          icon: Users,
          title: "Practical Relationship Wisdom",
          color: "indigo",
          content: [
            {
              heading: "Communication is Everything",
              text: "Even perfectly compatible couples need good communication. Even challenging combinations can thrive with excellent communication. Make it a daily practice to truly listen and express yourself honestly."
            },
            {
              heading: "Respect Differences",
              text: "Your elemental and planetary differences aren't problems to fix—they're complementary strengths. Fire needs Water's depth, Air needs Earth's grounding. Appreciate what your partner brings."
            },
            {
              heading: "Seek Balance Together",
              text: "If one partner is more Fire (impulsive), the other's Earth (stable) quality can create beautiful balance—if both appreciate rather than resist it. Work with your differences, not against them."
            },
            {
              heading: "Grow Spiritually Together",
              text: "High spiritual compatibility means you can support each other's faith journey. Make dhikr together, pray together, study together. Shared spiritual practice strengthens all types of compatibility."
            }
          ]
        }
      ]
    },
    fr: {
      title: "Comprendre la Compatibilité Relationnelle",
      subtitle: "Découvrez comment la numérologie islamique révèle l'harmonie entre deux âmes",
      
      sections: [
        {
          icon: Heart,
          title: "Qu'est-ce que l'Analyse de Compatibilité?",
          color: "rose",
          content: [
            {
              heading: "Sagesse Ancienne pour Relations Modernes",
              text: "L'analyse de compatibilité utilise la science sacrée d'ʿIlm al-Ḥurūf (Science des Lettres) pour comprendre comment les énergies de deux personnes interagissent. Vos noms portent des vibrations spirituelles qui révèlent l'harmonie naturelle ou les domaines nécessitant un effort conscient."
            },
            {
              heading: "Pourquoi les Noms Comptent",
              text: "Dans la tradition islamique, les noms ne sont pas aléatoires—ils portent une énergie divine et influencent votre destin. Lorsque deux noms se rejoignent, leurs énergies combinées créent une dynamique relationnelle unique qui peut être comprise et optimisée."
            },
            {
              heading: "Trois Dimensions Sacrées",
              text: "Nous analysons la compatibilité à travers trois perspectives complémentaires: Connexion des Âmes (alignement spirituel), Équilibre de Personnalité (harmonie élémentale), et Harmonie Cosmique (influences planétaires). Chacune révèle différents aspects de votre potentiel relationnel."
            }
          ]
        },
        {
          icon: Compass,
          title: "Les Trois Méthodes d'Analyse",
          color: "blue",
          content: [
            {
              heading: "💫 Connexion des Âmes (Destinée Spirituelle)",
              text: "Examine comment vos essences spirituelles s'alignent. Cela révèle votre capacité de compréhension profonde, de but de vie partagé et de croissance spirituelle ensemble. Des scores élevés indiquent une résonance naturelle au niveau de l'âme."
            },
            {
              heading: "🎨 Équilibre de Personnalité (Tempérament Élémental)",
              text: "Analyse l'interaction de vos natures élémentales (Feu, Eau, Air, Terre). Le Feu apporte la passion, l'Eau apporte l'émotion, l'Air apporte l'intellect, la Terre apporte la stabilité. Comprendre votre mélange élémental aide à naviguer les interactions quotidiennes."
            },
            {
              heading: "🌟 Harmonie Cosmique (Compatibilité Planétaire)",
              text: "Étudie comment vos planètes dirigeantes interagissent. Chaque planète gouverne différentes énergies—Mars (action), Vénus (amour), Mercure (communication), etc. L'harmonie planétaire indique la facilité dans des domaines de vie spécifiques."
            }
          ]
        },
        {
          icon: Star,
          title: "Comprendre Votre Score",
          color: "amber",
          content: [
            {
              heading: "85-100: Excellent Match 💚",
              text: "L'harmonie naturelle coule entre vous. Vos énergies se complètent magnifiquement. Même les défis semblent gérables car vous vous 'comprenez' intuitivement. C'est rare et précieux."
            },
            {
              heading: "75-84: Très Bon 💙",
              text: "Forte compatibilité avec des points de friction mineurs. Vous avez un grand potentiel ensemble—de petits ajustements dans la communication créeront une belle harmonie."
            },
            {
              heading: "65-74: Bon Match 💛",
              text: "Base solide avec place pour la croissance. Vous pouvez construire quelque chose de beau en travaillant consciemment sur la compréhension et le compromis. Beaucoup de relations réussies prospèrent dans cette gamme."
            },
            {
              heading: "50-64: Modéré 🧡",
              text: "Nécessite un effort conscient et une compréhension mutuelle. Le succès dépend de l'engagement des deux partenaires envers la croissance, la communication et le respect des différences."
            },
            {
              heading: "Moins de 50: Difficile ❤️",
              text: "Différences significatives nécessitant un travail profond. Pas impossible, mais nécessite une maturité exceptionnelle, de la patience et souvent un soutien professionnel."
            }
          ]
        },
        {
          icon: Lightbulb,
          title: "Comment Utiliser Cette Connaissance",
          color: "purple",
          content: [
            {
              heading: "Pour Nouvelles Relations",
              text: "Utilisez les insights de compatibilité pour comprendre les forces et défis potentiels tôt. Une haute compatibilité ne garantit pas le succès, et de faibles scores ne condamnent pas une relation—mais la conscience aide à préparer et mieux communiquer."
            },
            {
              heading: "Pour Partenariats Existants",
              text: "Découvrez pourquoi certains patterns existent dans votre relation. Comprendre vos dynamiques élémentales et planétaires peut transformer les conflits en opportunités de connexion plus profonde."
            },
            {
              heading: "Pour Décisions de Mariage",
              text: "Considérez la compatibilité comme un facteur parmi d'autres—le caractère, les valeurs partagées, la foi, les objectifs de vie et le respect mutuel comptent profondément."
            },
            {
              heading: "Rappelez-vous: Le Libre Arbitre Compte le Plus",
              text: "L'analyse de compatibilité montre des tendances naturelles, pas un destin fixé. Deux personnes engagées peuvent construire une belle relation à travers l'effort conscient, la communication et la foi."
            }
          ]
        },
        {
          icon: Users,
          title: "Sagesse Relationnelle Pratique",
          color: "indigo",
          content: [
            {
              heading: "La Communication est Tout",
              text: "Même les couples parfaitement compatibles ont besoin d'une bonne communication. Même les combinaisons difficiles peuvent prospérer avec une excellente communication. Faites-en une pratique quotidienne."
            },
            {
              heading: "Respectez les Différences",
              text: "Vos différences élémentales et planétaires ne sont pas des problèmes à corriger—ce sont des forces complémentaires. Le Feu a besoin de la profondeur de l'Eau, l'Air a besoin de l'ancrage de la Terre."
            },
            {
              heading: "Cherchez l'Équilibre Ensemble",
              text: "Si un partenaire est plus Feu (impulsif), la qualité Terre (stable) de l'autre peut créer un bel équilibre—si les deux apprécient plutôt que résistent."
            },
            {
              heading: "Croissez Spirituellement Ensemble",
              text: "Une haute compatibilité spirituelle signifie que vous pouvez soutenir le voyage de foi de l'autre. Faites du dhikr ensemble, priez ensemble, étudiez ensemble."
            }
          ]
        }
      ]
    }
  };

  const data = isFrench ? content.fr : content.en;

  return (
    <div className="space-y-8 p-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <BookOpen className="w-10 h-10 text-indigo-500" />
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50">
            {data.title}
          </h2>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          {data.subtitle}
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {data.sections.map((section, idx) => {
          const Icon = section.icon;
          const colorClasses = {
            rose: 'bg-indigo-50 dark:bg-indigo-950/30 border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400',
            blue: 'bg-indigo-50 dark:bg-indigo-950/30 border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400',
            amber: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400',
            purple: 'bg-indigo-50 dark:bg-indigo-950/30 border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400',
            indigo: 'bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400'
          }[section.color];

          return (
            <div key={idx} className={`p-6 rounded-xl border ${colorClasses}`}>
              <div className="flex items-center gap-3 mb-5">
                <Icon className="w-7 h-7" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                  {section.title}
                </h3>
              </div>

              <div className="space-y-5">
                {section.content.map((item, itemIdx) => (
                  <div key={itemIdx} className="space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-slate-50 text-lg">
                      {item.heading}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="p-6 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-white/60 dark:bg-slate-800/40">
        <p className="text-center text-slate-700 dark:text-slate-300 leading-relaxed">
          <span className="font-bold text-slate-900 dark:text-slate-50">
            {isFrench ? '💡 Rappelez-vous:' : '💡 Remember:'}
          </span>
          {' '}
          {isFrench 
            ? "La compatibilité est un guide, pas une sentence. Avec de l'amour, de la patience et de la foi, tout couple engagé peut créer une belle relation."
            : "Compatibility is a guide, not a sentence. With love, patience, and faith, any committed couple can create a beautiful relationship."
          }
        </p>
      </div>

    </div>
  );
}
