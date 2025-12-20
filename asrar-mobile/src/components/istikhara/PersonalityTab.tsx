import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { PersonalityProfile, ElementTheme } from '../../features/istikhara/types';

const { width } = Dimensions.get('window');

interface PersonalityTabProps {
  personality: PersonalityProfile;
  theme: ElementTheme;
}

// Trait Strength Indicator Component
function TraitStrengthBar({ 
  strength = 85, 
  color, 
  label,
  delay = 0 
}: {
  strength?: number;
  color: string;
  label?: string;
  delay?: number;
}) {
  const widthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: strength,
      duration: 1000,
      delay,
      useNativeDriver: false,
    }).start();
  }, [strength, delay]);

  const animatedWidth = widthAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.traitBarContainer}>
      {label && <Text style={styles.traitBarLabel}>{label}</Text>}
      <View style={styles.traitBarTrack}>
        <Animated.View
          style={[
            styles.traitBarFill,
            {
              width: animatedWidth,
              backgroundColor: color,
            },
          ]}
        >
          <LinearGradient
            colors={[color, `${color}cc`, `${color}99`]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.traitBarGradient}
          />
        </Animated.View>
      </View>
      <Text style={styles.traitBarPercentage}>{strength}%</Text>
    </View>
  );
}

export default function PersonalityTab({ personality, theme }: Readonly<PersonalityTabProps>) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        }}
      >
        {/* Header Card */}
        <BlurView intensity={15} tint="dark" style={styles.headerCardBlur}>
          <LinearGradient
            colors={theme.gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.headerCard}
          >
            <Text style={styles.headerIcon}>🌟</Text>
            <Text style={styles.headerTitle}>Votre Personnalité</Text>
            <Text style={styles.headerSubtitle}>
              Profil basé sur votre élément {theme.emoji}
            </Text>
          </LinearGradient>
        </BlurView>

        {/* Core Trait Highlight */}
        {personality.fr.core_trait && (
          <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
            <View style={[styles.card, { borderColor: theme.borderColor }]}>
              <View style={styles.coreTraitHeader}>
                <LinearGradient
                  colors={['rgba(251, 191, 36, 0.3)', 'rgba(251, 191, 36, 0.1)']}
                  style={styles.coreTraitBadge}
                >
                  <Text style={styles.coreTraitIcon}>⭐</Text>
                  <Text style={styles.coreTraitLabel}>TRAIT PRINCIPAL</Text>
                </LinearGradient>
              </View>
              
              <Text style={styles.coreTraitText}>
                {personality.fr.core_trait}
              </Text>
              <Text style={styles.coreTraitTextEn}>
                {personality.en.core_trait}
              </Text>

              {/* Trait Strength Visualization */}
              <View style={styles.strengthSection}>
                <Text style={styles.strengthTitle}>Force du Trait</Text>
                <TraitStrengthBar 
                  strength={95} 
                  color={theme.primaryColor}
                  delay={200}
                />
              </View>
            </View>
          </BlurView>
        )}

        {/* Temperament */}
        <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
          <View style={[styles.card, { borderColor: theme.borderColor }]}>
            <View style={styles.cardHeader}>
              <View style={styles.iconCircle}>
                <Text style={styles.cardIcon}>🌡️</Text>
              </View>
              <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}>Tempérament</Text>
                <Text style={styles.cardSubtitle}>Votre nature fondamentale</Text>
              </View>
            </View>
            
            <View style={styles.contentBox}>
              <Text style={styles.mainText}>
                {personality.fr.temperament}
              </Text>
              <Text style={styles.subText}>
                {personality.en.temperament}
              </Text>
            </View>

            <TraitStrengthBar 
              strength={90} 
              color={theme.secondaryColor}
              label="Intensité"
              delay={300}
            />
          </View>
        </BlurView>

        {/* Communication Style */}
        {personality.fr.communication && (
          <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
            <View style={[styles.card, { borderColor: theme.borderColor }]}>
              <View style={styles.cardHeader}>
                <View style={styles.iconCircle}>
                  <Text style={styles.cardIcon}>💬</Text>
                </View>
                <View style={styles.cardTitleContainer}>
                  <Text style={styles.cardTitle}>Style de Communication</Text>
                  <Text style={styles.cardSubtitle}>Comment vous vous exprimez</Text>
                </View>
              </View>
              
              <View style={styles.contentBox}>
                <Text style={styles.mainText}>
                  {personality.fr.communication}
                </Text>
                <Text style={styles.subText}>
                  {personality.en.communication}
                </Text>
              </View>

              <TraitStrengthBar 
                strength={88} 
                color={theme.accentColor}
                label="Expression"
                delay={400}
              />
            </View>
          </BlurView>
        )}

        {/* Social Strengths & Challenges */}
        <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
          <View style={[styles.card, { borderColor: theme.borderColor }]}>
            <View style={styles.socialHeader}>
              <Text style={styles.socialHeaderIcon}>👥</Text>
              <Text style={styles.socialHeaderTitle}>Relations Sociales</Text>
            </View>

            {/* Loved By */}
            {personality.fr.social_loved && (
              <View style={styles.socialSection}>
                <View style={styles.socialBadge}>
                  <LinearGradient
                    colors={['rgba(34, 197, 94, 0.2)', 'rgba(34, 197, 94, 0.1)']}
                    style={styles.socialBadgeInner}
                  >
                    <Text style={styles.socialBadgeIcon}>💚</Text>
                    <Text style={styles.socialBadgeText}>FORCES SOCIALES</Text>
                  </LinearGradient>
                </View>
                
                <View style={styles.socialContent}>
                  <Text style={styles.mainText}>
                    {personality.fr.social_loved}
                  </Text>
                  <Text style={styles.subText}>
                    {personality.en.social_loved}
                  </Text>
                </View>

                <TraitStrengthBar 
                  strength={92} 
                  color="#22c55e"
                  label="Popularité"
                  delay={500}
                />
              </View>
            )}

            {/* Challenges */}
            {personality.fr.social_challenge && (
              <View style={[styles.socialSection, { marginTop: 20 }]}>
                <View style={styles.socialBadge}>
                  <LinearGradient
                    colors={['rgba(251, 191, 36, 0.2)', 'rgba(251, 191, 36, 0.1)']}
                    style={styles.socialBadgeInner}
                  >
                    <Text style={styles.socialBadgeIcon}>⚠️</Text>
                    <Text style={styles.socialBadgeText}>DÉFIS À SURMONTER</Text>
                  </LinearGradient>
                </View>
                
                <View style={styles.socialContent}>
                  <Text style={styles.mainText}>
                    {personality.fr.social_challenge}
                  </Text>
                  <Text style={styles.subText}>
                    {personality.en.social_challenge}
                  </Text>
                </View>

                <TraitStrengthBar 
                  strength={35} 
                  color="#fbbf24"
                  label="Défi"
                  delay={600}
                />
              </View>
            )}
          </View>
        </BlurView>

        {/* Dreams & Aspirations */}
        <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
          <View style={[styles.card, { borderColor: theme.borderColor }]}>
            <View style={styles.cardHeader}>
              <View style={styles.iconCircle}>
                <Text style={styles.cardIcon}>💭</Text>
              </View>
              <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}>Rêves & Aspirations</Text>
                <Text style={styles.cardSubtitle}>Vos visions intérieures</Text>
              </View>
            </View>
            
            <View style={styles.dreamBox}>
              <LinearGradient
                colors={[
                  'rgba(99, 102, 241, 0.15)',
                  'rgba(139, 92, 246, 0.1)',
                ]}
                style={styles.dreamBoxInner}
              >
                <Text style={styles.dreamIcon}>✨</Text>
                <Text style={styles.mainText}>
                  {personality.fr.dreams}
                </Text>
                <Text style={styles.subText}>
                  {personality.en.dreams}
                </Text>
              </LinearGradient>
            </View>
          </View>
        </BlurView>

        {/* Life Blessing */}
        {personality.fr.life_blessing && (
          <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
            <LinearGradient
              colors={[
                `${theme.primaryColor}33`,
                `${theme.secondaryColor}22`,
              ]}
              style={[styles.card, { borderColor: theme.borderColor }]}
            >
              <View style={styles.blessingHeader}>
                <Text style={styles.blessingIcon}>✨</Text>
                <Text style={styles.blessingTitle}>Bénédiction de Vie</Text>
              </View>
              
              <View style={styles.blessingQuote}>
                <View style={styles.quoteMarkTop}>
                  <Text style={styles.quoteMark}>"</Text>
                </View>
                <Text style={styles.blessingText}>
                  {personality.fr.life_blessing}
                </Text>
                <Text style={styles.blessingTextEn}>
                  {personality.en.life_blessing}
                </Text>
                <View style={styles.quoteMarkBottom}>
                  <Text style={styles.quoteMark}>"</Text>
                </View>
              </View>

              <View style={styles.blessingFooter}>
                <Text style={styles.blessingFooterText}>
                  Cette bénédiction guide votre chemin de vie
                </Text>
              </View>
            </LinearGradient>
          </BlurView>
        )}

        {/* Personality Insights Summary */}
        <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
          <View style={[styles.card, { borderColor: theme.borderColor }]}>
            <Text style={styles.summaryTitle}>📊 Résumé de Personnalité</Text>
            
            <View style={styles.insightGrid}>
              <View style={styles.insightCard}>
                <Text style={styles.insightEmoji}>🎯</Text>
                <Text style={styles.insightLabel}>Focus</Text>
                <Text style={styles.insightValue}>Élevé</Text>
              </View>
              
              <View style={styles.insightCard}>
                <Text style={styles.insightEmoji}>🤝</Text>
                <Text style={styles.insightLabel}>Social</Text>
                <Text style={styles.insightValue}>Fort</Text>
              </View>
              
              <View style={styles.insightCard}>
                <Text style={styles.insightEmoji}>💪</Text>
                <Text style={styles.insightLabel}>Résilience</Text>
                <Text style={styles.insightValue}>Excellente</Text>
              </View>
              
              <View style={styles.insightCard}>
                <Text style={styles.insightEmoji}>🌟</Text>
                <Text style={styles.insightLabel}>Potentiel</Text>
                <Text style={styles.insightValue}>Maximal</Text>
              </View>
            </View>
          </View>
        </BlurView>

        {/* Growth Recommendations */}
        <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
          <LinearGradient
            colors={[
              'rgba(34, 197, 94, 0.2)',
              'rgba(34, 197, 94, 0.1)',
            ]}
            style={[styles.card, { borderColor: 'rgba(34, 197, 94, 0.4)' }]}
          >
            <View style={styles.growthHeader}>
              <Text style={styles.growthIcon}>🌱</Text>
              <Text style={styles.growthTitle}>Pistes de Croissance</Text>
            </View>
            
            <View style={styles.recommendationList}>
              <View style={styles.recommendationItem}>
                <Text style={styles.recommendationBullet}>•</Text>
                <Text style={styles.recommendationText}>
                  Cultivez vos forces sociales naturelles
                </Text>
              </View>
              
              <View style={styles.recommendationItem}>
                <Text style={styles.recommendationBullet}>•</Text>
                <Text style={styles.recommendationText}>
                  Travaillez sur les défis identifiés avec patience
                </Text>
              </View>
              
              <View style={styles.recommendationItem}>
                <Text style={styles.recommendationBullet}>•</Text>
                <Text style={styles.recommendationText}>
                  Méditez sur votre bénédiction de vie quotidiennement
                </Text>
              </View>
              
              <View style={styles.recommendationItem}>
                <Text style={styles.recommendationBullet}>•</Text>
                <Text style={styles.recommendationText}>
                  Exprimez votre style de communication authentiquement
                </Text>
              </View>
            </View>
          </LinearGradient>
        </BlurView>

        {/* Spacer */}
        <View style={styles.bottomSpacer} />
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    padding: 16,
  },

  // Header Card
  headerCardBlur: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
  },
  headerCard: {
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  headerIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },

  // Core Trait
  coreTraitHeader: {
    marginBottom: 16,
  },
  coreTraitBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.4)',
  },
  coreTraitIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  coreTraitLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.9)',
    letterSpacing: 0.5,
  },
  coreTraitText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 28,
    marginBottom: 8,
  },
  coreTraitTextEn: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 24,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  strengthSection: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  strengthTitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 12,
    fontWeight: '600',
  },

  // Trait Strength Bar
  traitBarContainer: {
    marginTop: 8,
  },
  traitBarLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 6,
  },
  traitBarTrack: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 6,
  },
  traitBarFill: {
    height: '100%',
    borderRadius: 4,
    overflow: 'hidden',
  },
  traitBarGradient: {
    flex: 1,
  },
  traitBarPercentage: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'right',
  },

  // Cards
  cardBlur: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
  },
  card: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardIcon: {
    fontSize: 24,
  },
  cardTitleContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  contentBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  mainText: {
    fontSize: 15,
    color: '#ffffff',
    lineHeight: 24,
    marginBottom: 8,
  },
  subText: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 20,
    fontStyle: 'italic',
  },

  // Social Section
  socialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  socialHeaderIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  socialHeaderTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
  socialSection: {
    marginBottom: 8,
  },
  socialBadge: {
    marginBottom: 12,
  },
  socialBadgeInner: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  socialBadgeIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  socialBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.9)',
    letterSpacing: 0.5,
  },
  socialContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },

  // Dreams
  dreamBox: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  dreamBoxInner: {
    padding: 20,
    alignItems: 'center',
  },
  dreamIcon: {
    fontSize: 40,
    marginBottom: 16,
  },

  // Life Blessing
  blessingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  blessingIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  blessingTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
  blessingQuote: {
    position: 'relative',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  quoteMarkTop: {
    position: 'absolute',
    top: -10,
    left: 0,
  },
  quoteMarkBottom: {
    position: 'absolute',
    bottom: -10,
    right: 0,
  },
  quoteMark: {
    fontSize: 60,
    color: 'rgba(255, 255, 255, 0.15)',
    fontWeight: '700',
  },
  blessingText: {
    fontSize: 17,
    color: '#ffffff',
    lineHeight: 28,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: '500',
  },
  blessingTextEn: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 24,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  blessingFooter: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
  },
  blessingFooterText: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    fontStyle: 'italic',
  },

  // Summary Insights
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 16,
  },
  insightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  insightCard: {
    width: (width - 72) / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  insightEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  insightLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 4,
  },
  insightValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
  },

  // Growth Recommendations
  growthHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  growthIcon: {
    fontSize: 28,
    marginRight: 10,
  },
  growthTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  recommendationList: {
    gap: 12,
  },
  recommendationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  recommendationBullet: {
    fontSize: 20,
    color: 'rgba(34, 197, 94, 0.8)',
    marginRight: 10,
    marginTop: -2,
  },
  recommendationText: {
    flex: 1,
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 22,
  },

  bottomSpacer: {
    height: 40,
  },
});