import React, { useState } from 'react';
import { Sparkles, Flame, Droplets, Wind, Mountain, Sun, Moon, Star } from 'lucide-react';

interface MethodGuidePanelProps {
  language?: 'en' | 'fr' | 'ar';
}

export function MethodGuidePanel({ language = 'en' }: MethodGuidePanelProps) {
  const [activeMethod, setActiveMethod] = useState<'spiritual' | 'elemental' | 'planetary'>('spiritual');
  const isFrench = language === 'fr';

  const content = {
    en: {
      title: "The Three Analysis Methods Explained",
      subtitle: "Deep dive into each compatibility dimension",
      
      tabs: {
        spiritual: "Soul Connection",
        elemental: "Personality Balance",
        planetary: "Cosmic Harmony"
      },
      
      spiritual: {
        title: "Soul Connection (Spiritual Destiny)",
        subtitle: "How Your Spiritual Essences Align",
        icon: Sparkles,
        color: "purple",
        
        sections: [
          {
            heading: "What This Measures",
            text: "Soul Connection analyzes the numerical essence of your names to reveal spiritual compatibility. In Islamic numerology, each letter carries a sacred value that represents divine attributes. When we calculate your combined spiritual number, we discover how naturally your souls resonate."
          },
          {
            heading: "How It's Calculated",
            text: "We convert each letter in both names to its numerical value using the Abjad system (Alif=1, Ba=2, etc.). These are summed and reduced to a master number representing your combined spiritual destiny. The harmony between individual paths and combined path reveals compatibility."
          },
          {
            heading: "What High Compatibility Means",
            text: "Scores of 85-100 indicate exceptional spiritual alignment. You share similar life purposes, values, and spiritual orientations. You naturally support each other's growth without forcing it. Spiritual conversations flow easily. You may finish each other's sentences or sense each other's emotional states intuitively."
          },
          {
            heading: "What Moderate Compatibility Means",
            text: "Scores of 65-84 show good spiritual potential with some effort needed. Your core values align, but you may express spirituality differently. One might be more outwardly devout while the other is quietly contemplative. Understanding and respecting these differences creates beautiful balance."
          },
          {
            heading: "What Challenges Look Like",
            text: "Scores below 65 indicate different spiritual orientations or life purposes. This doesn't mean incompatibility—many successful relationships thrive here—but requires conscious effort. You may need to actively create shared spiritual practices and respect that faith looks different for each of you."
          },
          {
            heading: "Real-Life Applications",
            text: "Use this understanding to: 1) Appreciate why certain spiritual topics connect or create friction, 2) Find shared spiritual practices that honor both paths, 3) Support each other's individual spiritual journey without forcing similarity, 4) Create family spiritual traditions that blend both approaches."
          }
        ]
      },
      
      elemental: {
        title: "Personality Balance (Elemental Temperament)",
        subtitle: "Understanding Your Elemental Dance",
        icon: Flame,
        color: "orange",
        
        intro: "The four elements—Fire, Water, Air, Earth—represent fundamental personality types. Your elemental makeup determines how you approach life, relationships, and challenges.",
        
        elements: [
          {
            name: "🔥 Fire Element",
            traits: "Passionate, spontaneous, energetic, inspiring, assertive",
            strengths: "Brings excitement, courage, leadership, and motivation to relationships",
            challenges: "Can be impulsive, impatient, dominating, or burn out quickly",
            needsFrom: "Water (emotional depth), Earth (grounding stability), Air (intellectual space)"
          },
          {
            name: "💧 Water Element",
            traits: "Emotional, intuitive, nurturing, empathetic, deep",
            strengths: "Brings emotional intelligence, healing, compassion, and spiritual depth",
            challenges: "Can be overly sensitive, moody, passive-aggressive, or emotionally overwhelming",
            needsFrom: "Fire (energy boost), Earth (practical structure), Air (mental clarity)"
          },
          {
            name: "💨 Air Element",
            traits: "Intellectual, communicative, adaptable, social, innovative",
            strengths: "Brings fresh perspectives, good communication, flexibility, and social connections",
            challenges: "Can be detached, overthinking, inconsistent, or avoid emotional depth",
            needsFrom: "Water (emotional grounding), Earth (practical application), Fire (decisive action)"
          },
          {
            name: "⛰️ Earth Element",
            traits: "Practical, stable, reliable, patient, methodical",
            strengths: "Brings stability, consistency, practical solutions, and long-term planning",
            challenges: "Can be rigid, resistant to change, materialistic, or boring",
            needsFrom: "Fire (spontaneity), Water (emotional expression), Air (new ideas)"
          }
        ],
        
        compatibility: [
          {
            pair: "Fire + Fire",
            score: "Exciting but potentially explosive",
            description: "Lots of passion and energy! But two fires can burn each other out. Needs conscious cooling-down practices and taking turns leading."
          },
          {
            pair: "Fire + Water",
            score: "Challenging but transformative",
            description: "Fire can evaporate Water (overwhelm emotions). Water can extinguish Fire (dampen enthusiasm). But balanced: Water adds depth to Fire's passion, Fire brings energy to Water's intuition."
          },
          {
            pair: "Fire + Air",
            score: "Highly compatible and dynamic",
            description: "Air feeds Fire—excellent match! Air brings ideas, Fire brings execution. Both enjoy freedom and excitement. Need to ground together occasionally."
          },
          {
            pair: "Fire + Earth",
            score: "Complementary but requires work",
            description: "Fire finds Earth boring; Earth finds Fire reckless. But: Fire can inspire Earth's ambitions, Earth can channel Fire's energy productively."
          },
          {
            pair: "Water + Water",
            score: "Deeply connected but may lack direction",
            description: "Beautiful emotional intimacy and mutual understanding. Risk: getting lost in feelings without practical action. Need external grounding."
          },
          {
            pair: "Water + Air",
            score: "Growth-oriented with effort",
            description: "Air analyzes what Water feels. Can create distance or beautiful understanding. Water adds emotional intelligence to Air's ideas; Air helps Water articulate feelings."
          },
          {
            pair: "Water + Earth",
            score: "Naturally harmonious and stable",
            description: "Earth contains and channels Water beautifully. Water nourishes Earth. Both value depth and commitment. Comfortable, stable, potentially quiet partnership."
          },
          {
            pair: "Air + Air",
            score: "Intellectually stimulating but emotionally light",
            description: "Endless fascinating conversations! Shared social interests. Risk: avoiding emotional depth. Need to consciously build emotional intimacy."
          },
          {
            pair: "Air + Earth",
            score: "Balanced with mutual growth potential",
            description: "Air has ideas, Earth implements them. Earth grounds Air's abstractions. Air helps Earth adapt. Good business and life partnership potential."
          },
          {
            pair: "Earth + Earth",
            score: "Rock-solid but may lack excitement",
            description: "Ultimate stability and reliability. Shared practical values. Risk: routine becoming rut. Need to consciously inject novelty and spontaneity."
          }
        ]
      },
      
      planetary: {
        title: "Cosmic Harmony (Planetary Compatibility)",
        subtitle: "How Celestial Energies Influence Your Bond",
        icon: Star,
        color: "indigo",
        
        sections: [
          {
            heading: "Understanding Planetary Influence",
            text: "In Islamic mystical tradition, celestial bodies carry divine energies that influence human temperament. Your ruling planet—determined by your numerical vibration—affects your natural inclinations, communication style, emotional patterns, and life approach."
          },
          {
            heading: "The Seven Classical Planets",
            text: "Traditional Islamic astronomy recognized seven celestial influences: Sun (identity, vitality), Moon (emotions, intuition), Mercury (communication, intellect), Venus (love, beauty), Mars (action, courage), Jupiter (wisdom, expansion), Saturn (discipline, structure)."
          }
        ],
        
        planets: [
          {
            name: "☉ Sun",
            qualities: "Leadership, vitality, confidence, creativity, self-expression",
            inRelationships: "Sun people bring warmth, generosity, and inspiring energy. They need admiration and tend to take center stage.",
            compatibleWith: "Mars (mutual respect), Jupiter (shared optimism), Venus (appreciation)",
            challengingWith: "Saturn (dampens enthusiasm), another Sun (competing egos)"
          },
          {
            name: "☽ Moon",
            qualities: "Intuition, nurturing, emotional depth, sensitivity, adaptability",
            inRelationships: "Moon people are emotionally attuned, caring, and create safe spaces. They need emotional security and can be moody.",
            compatibleWith: "Venus (mutual gentleness), Neptune (spiritual connection), Sun (complementary)",
            challengingWith: "Mars (too aggressive), Saturn (emotionally cold)"
          },
          {
            name: "☿ Mercury",
            qualities: "Communication, intellect, curiosity, versatility, wit",
            inRelationships: "Mercury people need mental stimulation and conversation. They bring humor, ideas, and social connections.",
            compatibleWith: "Venus (charming dialogue), Jupiter (philosophical exchange), Uranus (innovative thinking)",
            challengingWith: "Saturn (restricts expression), Neptune (creates confusion)"
          },
          {
            name: "♀ Venus",
            qualities: "Love, beauty, harmony, diplomacy, appreciation",
            inRelationships: "Venus people are romantic, affectionate, and seek peace. They value aesthetics and can avoid necessary conflict.",
            compatibleWith: "Moon (emotional harmony), Mercury (pleasant communication), Jupiter (shared joy)",
            challengingWith: "Mars (too confrontational), Pluto (too intense)"
          },
          {
            name: "♂ Mars",
            qualities: "Action, courage, passion, assertiveness, competition",
            inRelationships: "Mars people are dynamic, protective, and direct. They need physical activity and can be argumentative.",
            compatibleWith: "Sun (mutual respect), Jupiter (shared enthusiasm), Venus (balancing softness)",
            challengingWith: "Saturn (frustrating restrictions), another Mars (constant conflict)"
          },
          {
            name: "♃ Jupiter",
            qualities: "Wisdom, expansion, optimism, generosity, faith",
            inRelationships: "Jupiter people are philosophical, generous, and see big pictures. They need freedom and meaning.",
            compatibleWith: "Sun (mutual warmth), Mercury (intellectual exploration), Venus (shared appreciation)",
            challengingWith: "Saturn (conflicting approaches), Neptune (lack of boundaries)"
          },
          {
            name: "♄ Saturn",
            qualities: "Discipline, responsibility, structure, patience, wisdom",
            inRelationships: "Saturn people are reliable, serious, and build lasting foundations. They need respect and can be emotionally reserved.",
            compatibleWith: "Venus (softening influence), Earth placements (shared practicality)",
            challengingWith: "Mars (frustration), Jupiter (restriction of growth), Moon (emotional distance)"
          }
        ]
      }
    },
    fr: {
      title: "Les Trois Méthodes d'Analyse Expliquées",
      subtitle: "Plongée profonde dans chaque dimension de compatibilité",
      
      tabs: {
        spiritual: "Connexion des Âmes",
        elemental: "Équilibre de Personnalité",
        planetary: "Harmonie Cosmique"
      },
      
      spiritual: {
        title: "Connexion des Âmes (Destinée Spirituelle)",
        subtitle: "Comment Vos Essences Spirituelles S'alignent",
        icon: Sparkles,
        color: "purple",
        
        sections: [
          {
            heading: "Ce Que Cela Mesure",
            text: "La Connexion des Âmes analyse l'essence numérique de vos noms pour révéler la compatibilité spirituelle. En numérologie islamique, chaque lettre porte une valeur sacrée représentant des attributs divins."
          },
          {
            heading: "Comment C'est Calculé",
            text: "Nous convertissons chaque lettre des deux noms en sa valeur numérique en utilisant le système Abjad (Alif=1, Ba=2, etc.). Celles-ci sont sommées et réduites à un nombre maître représentant votre destinée spirituelle combinée."
          },
          {
            heading: "Haute Compatibilité Signifie",
            text: "Les scores de 85-100 indiquent un alignement spirituel exceptionnel. Vous partagez des buts de vie similaires, des valeurs et des orientations spirituelles. Vous soutenez naturellement la croissance de l'autre."
          },
          {
            heading: "Compatibilité Modérée Signifie",
            text: "Les scores de 65-84 montrent un bon potentiel spirituel avec un certain effort nécessaire. Vos valeurs fondamentales s'alignent, mais vous pouvez exprimer la spiritualité différemment."
          },
          {
            heading: "Les Défis Ressemblent À",
            text: "Les scores inférieurs à 65 indiquent des orientations spirituelles différentes. Cela ne signifie pas incompatibilité—beaucoup de relations réussies prospèrent ici—mais nécessite un effort conscient."
          },
          {
            heading: "Applications Dans la Vie Réelle",
            text: "Utilisez cette compréhension pour: 1) Apprécier pourquoi certains sujets spirituels connectent ou créent des frictions, 2) Trouver des pratiques spirituelles partagées, 3) Soutenir le voyage spirituel individuel de chacun."
          }
        ]
      },
      
      elemental: {
        title: "Équilibre de Personnalité (Tempérament Élémental)",
        subtitle: "Comprendre Votre Danse Élémentale",
        icon: Flame,
        color: "orange",
        
        intro: "Les quatre éléments—Feu, Eau, Air, Terre—représentent des types de personnalité fondamentaux.",
        
        elements: [
          {
            name: "🔥 Élément Feu",
            traits: "Passionné, spontané, énergique, inspirant, assertif",
            strengths: "Apporte l'excitation, le courage, le leadership et la motivation",
            challenges: "Peut être impulsif, impatient, dominant ou s'épuiser rapidement",
            needsFrom: "Eau (profondeur émotionnelle), Terre (stabilité), Air (espace intellectuel)"
          },
          {
            name: "💧 Élément Eau",
            traits: "Émotionnel, intuitif, nourrissant, empathique, profond",
            strengths: "Apporte l'intelligence émotionnelle, la guérison, la compassion",
            challenges: "Peut être trop sensible, lunatique, passif-agressif",
            needsFrom: "Feu (boost d'énergie), Terre (structure pratique), Air (clarté mentale)"
          },
          {
            name: "💨 Élément Air",
            traits: "Intellectuel, communicatif, adaptable, social, innovant",
            strengths: "Apporte des perspectives fraîches, bonne communication, flexibilité",
            challenges: "Peut être détaché, surpensant, incohérent",
            needsFrom: "Eau (ancrage émotionnel), Terre (application pratique), Feu (action décisive)"
          },
          {
            name: "⛰️ Élément Terre",
            traits: "Pratique, stable, fiable, patient, méthodique",
            strengths: "Apporte stabilité, cohérence, solutions pratiques",
            challenges: "Peut être rigide, résistant au changement, matérialiste",
            needsFrom: "Feu (spontanéité), Eau (expression émotionnelle), Air (nouvelles idées)"
          }
        ],
        
        compatibility: [
          {
            pair: "Feu + Feu",
            score: "Excitant mais potentiellement explosif",
            description: "Beaucoup de passion et d'énergie! Mais deux feux peuvent s'épuiser mutuellement."
          },
          {
            pair: "Feu + Eau",
            score: "Difficile mais transformateur",
            description: "Le Feu peut évaporer l'Eau. L'Eau peut éteindre le Feu. Mais équilibré: L'Eau ajoute de la profondeur à la passion du Feu."
          },
          {
            pair: "Feu + Air",
            score: "Très compatible et dynamique",
            description: "L'Air nourrit le Feu—excellent match! L'Air apporte des idées, le Feu apporte l'exécution."
          },
          {
            pair: "Feu + Terre",
            score: "Complémentaire mais nécessite du travail",
            description: "Le Feu trouve la Terre ennuyeuse; la Terre trouve le Feu imprudent. Mais: Le Feu peut inspirer les ambitions de la Terre."
          },
          {
            pair: "Eau + Eau",
            score: "Profondément connecté mais peut manquer de direction",
            description: "Belle intimité émotionnelle et compréhension mutuelle. Risque: se perdre dans les sentiments."
          },
          {
            pair: "Eau + Air",
            score: "Orienté croissance avec effort",
            description: "L'Air analyse ce que l'Eau ressent. L'Eau ajoute de l'intelligence émotionnelle aux idées de l'Air."
          },
          {
            pair: "Eau + Terre",
            score: "Naturellement harmonieux et stable",
            description: "La Terre contient et canalise l'Eau magnifiquement. L'Eau nourrit la Terre."
          },
          {
            pair: "Air + Air",
            score: "Intellectuellement stimulant mais émotionnellement léger",
            description: "Conversations fascinantes sans fin! Risque: éviter la profondeur émotionnelle."
          },
          {
            pair: "Air + Terre",
            score: "Équilibré avec potentiel de croissance mutuelle",
            description: "L'Air a des idées, la Terre les met en œuvre. La Terre ancre les abstractions de l'Air."
          },
          {
            pair: "Terre + Terre",
            score: "Solide comme le roc mais peut manquer d'excitation",
            description: "Stabilité et fiabilité ultimes. Risque: la routine devient ornière."
          }
        ]
      },
      
      planetary: {
        title: "Harmonie Cosmique (Compatibilité Planétaire)",
        subtitle: "Comment les Énergies Célestes Influencent Votre Lien",
        icon: Star,
        color: "indigo",
        
        sections: [
          {
            heading: "Comprendre l'Influence Planétaire",
            text: "Dans la tradition mystique islamique, les corps célestes portent des énergies divines qui influencent le tempérament humain."
          },
          {
            heading: "Les Sept Planètes Classiques",
            text: "L'astronomie islamique traditionnelle reconnaissait sept influences célestes: Soleil (identité), Lune (émotions), Mercure (communication), Vénus (amour), Mars (action), Jupiter (sagesse), Saturne (discipline)."
          }
        ],
        
        planets: [
          {
            name: "☉ Soleil",
            qualities: "Leadership, vitalité, confiance, créativité, expression de soi",
            inRelationships: "Les personnes Soleil apportent chaleur, générosité et énergie inspirante.",
            compatibleWith: "Mars (respect mutuel), Jupiter (optimisme partagé), Vénus (appréciation)",
            challengingWith: "Saturne (freine l'enthousiasme), autre Soleil (egos concurrents)"
          },
          {
            name: "☽ Lune",
            qualities: "Intuition, nourrissement, profondeur émotionnelle, sensibilité",
            inRelationships: "Les personnes Lune sont émotionnellement à l'écoute et créent des espaces sûrs.",
            compatibleWith: "Vénus (douceur mutuelle), Neptune (connexion spirituelle), Soleil",
            challengingWith: "Mars (trop agressif), Saturne (émotionnellement froid)"
          },
          {
            name: "☿ Mercure",
            qualities: "Communication, intellect, curiosité, polyvalence, esprit",
            inRelationships: "Les personnes Mercure ont besoin de stimulation mentale et de conversation.",
            compatibleWith: "Vénus (dialogue charmant), Jupiter (échange philosophique)",
            challengingWith: "Saturne (restreint l'expression), Neptune (crée confusion)"
          },
          {
            name: "♀ Vénus",
            qualities: "Amour, beauté, harmonie, diplomatie, appréciation",
            inRelationships: "Les personnes Vénus sont romantiques, affectueuses et recherchent la paix.",
            compatibleWith: "Lune (harmonie émotionnelle), Mercure (communication agréable)",
            challengingWith: "Mars (trop conflictuel), Pluton (trop intense)"
          },
          {
            name: "♂ Mars",
            qualities: "Action, courage, passion, assertivité, compétition",
            inRelationships: "Les personnes Mars sont dynamiques, protectrices et directes.",
            compatibleWith: "Soleil (respect mutuel), Jupiter (enthousiasme partagé)",
            challengingWith: "Saturne (restrictions frustrantes), autre Mars (conflit constant)"
          },
          {
            name: "♃ Jupiter",
            qualities: "Sagesse, expansion, optimisme, générosité, foi",
            inRelationships: "Les personnes Jupiter sont philosophiques, généreuses et voient grand.",
            compatibleWith: "Soleil (chaleur mutuelle), Mercure (exploration intellectuelle)",
            challengingWith: "Saturne (approches conflictuelles), Neptune (manque de limites)"
          },
          {
            name: "♄ Saturne",
            qualities: "Discipline, responsabilité, structure, patience, sagesse",
            inRelationships: "Les personnes Saturne sont fiables, sérieuses et construisent des bases durables.",
            compatibleWith: "Vénus (influence adoucissante), placements Terre",
            challengingWith: "Mars (frustration), Jupiter (restriction de croissance)"
          }
        ]
      }
    }
  };

  const data = isFrench ? content.fr : content.en;
  const activeData = data[activeMethod];

  return (
    <div className="space-y-6 p-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">
          {data.title}
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          {data.subtitle}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200 dark:border-slate-700">
        {(['spiritual', 'elemental', 'planetary'] as const).map((method) => (
          <button
            key={method}
            onClick={() => setActiveMethod(method)}
            className={`px-6 py-3 font-semibold transition-all ${
              activeMethod === method
                ? 'border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            {data.tabs[method]}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-6">
        
        {/* Spiritual Method */}
        {activeMethod === 'spiritual' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl">
              <Sparkles className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                  {data.spiritual.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{data.spiritual.subtitle}</p>
              </div>
            </div>

            {data.spiritual.sections.map((section: any, idx: number) => (
              <div key={idx} className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-50 mb-2">
                  {section.heading}
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Elemental Method */}
        {activeMethod === 'elemental' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-950/30 rounded-xl">
              <Flame className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                  {data.elemental.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{data.elemental.subtitle}</p>
              </div>
            </div>

            <p className="text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
              {data.elemental.intro}
            </p>

            {/* Elements */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                {isFrench ? 'Les Quatre Éléments' : 'The Four Elements'}
              </h4>
              {data.elemental.elements.map((element: any, idx: number) => (
                <div key={idx} className="p-5 rounded-xl bg-white/60 dark:bg-slate-800/40">
                  <h5 className="font-bold text-lg text-slate-900 dark:text-slate-50 mb-2">
                    {element.name}
                  </h5>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-700 dark:text-slate-300">
                      <span className="font-semibold">{isFrench ? 'Traits:' : 'Traits:'}</span> {element.traits}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      <span className="font-semibold">{isFrench ? 'Forces:' : 'Strengths:'}</span> {element.strengths}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      <span className="font-semibold">{isFrench ? 'Défis:' : 'Challenges:'}</span> {element.challenges}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      <span className="font-semibold">{isFrench ? 'A besoin de:' : 'Needs from:'}</span> {element.needsFrom}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Compatibility Pairs */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                {isFrench ? 'Compatibilité des Paires' : 'Compatibility Pairs'}
              </h4>
              {data.elemental.compatibility.map((pair: any, idx: number) => (
                <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-slate-900 dark:text-slate-50">{pair.pair}</h5>
                    <span className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
                      {pair.score}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    {pair.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Planetary Method */}
        {activeMethod === 'planetary' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl">
              <Star className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                  {data.planetary.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{data.planetary.subtitle}</p>
              </div>
            </div>

            {data.planetary.sections.map((section: any, idx: number) => (
              <div key={idx} className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-50 mb-2">
                  {section.heading}
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}

            {/* Planets */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                {isFrench ? 'Les Planètes et Leurs Influences' : 'The Planets and Their Influences'}
              </h4>
              {data.planetary.planets.map((planet: any, idx: number) => (
                <div key={idx} className="p-5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-white/60 dark:bg-slate-800/40">
                  <h5 className="font-bold text-lg text-slate-900 dark:text-slate-50 mb-3">
                    {planet.name}
                  </h5>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-700 dark:text-slate-300">
                      <span className="font-semibold">{isFrench ? 'Qualités:' : 'Qualities:'}</span> {planet.qualities}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      <span className="font-semibold">{isFrench ? 'Dans les relations:' : 'In relationships:'}</span> {planet.inRelationships}
                    </p>
                    <p className="text-green-700 dark:text-green-400">
                      <span className="font-semibold">✓ {isFrench ? 'Compatible avec:' : 'Compatible with:'}</span> {planet.compatibleWith}
                    </p>
                    <p className="text-indigo-700 dark:text-indigo-400">
                      <span className="font-semibold">✗ {isFrench ? 'Difficile avec:' : 'Challenging with:'}</span> {planet.challengingWith}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
