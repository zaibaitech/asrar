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
import Svg, { Circle } from 'react-native-svg';
import { IstikharaCalculationResult, ElementType, ElementTheme } from '../../features/istikhara/types';

const { width } = Dimensions.get('window');
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface OverviewTabProps {
  readonly result: IstikharaCalculationResult;
  readonly element: ElementType;
  readonly theme: ElementTheme;
}

// Radial Progress Component
function RadialProgress({ 
  percentage, 
  color, 
  size = 80, 
  strokeWidth = 8,
  label,
  delay = 0
}: Readonly<{
  percentage: number;
  color: string;
  size?: number;
  strokeWidth?: number;
  label?: string;
  delay?: number;
}>) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: percentage,
      duration: 1200,
      delay,
      useNativeDriver: false,
    }).start();
  }, [percentage, delay]);

  const strokeDashoffset = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  return (
    <View style={styles.progressContainer}>
      <Svg width={size} height={size}>
        {/* Background circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
      <View style={styles.progressCenter}>
        <Text style={styles.percentageText}>{Math.round(percentage)}%</Text>
        {label && <Text style={styles.progressLabel}>{label}</Text>}
      </View>
    </View>
  );
}

export default function OverviewTab({ result, element, theme }: Readonly<OverviewTabProps>) {
  const profile = result.burujProfile;
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

  // Calculate mock percentages - replace with real data from your calculations
  const overallAlignment = 88;
  const careerMatch = 95;
  const spiritualPractice = 90;

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
        {/* Premium Summary Card */}
        <BlurView intensity={20} tint="dark" style={styles.summaryCardBlur}>
          <LinearGradient
            colors={theme.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.summaryCard}
          >
            {/* Element Badge */}
            <View style={styles.elementBadge}>
              <LinearGradient
                colors={['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.1)']}
                style={styles.elementBadgeInner}
              >
                <Text style={styles.elementEmoji}>{theme.emoji}</Text>
                <Text style={styles.elementText}>{element.toUpperCase()}</Text>
              </LinearGradient>
            </View>

            {/* Numbers Display */}
            <View style={styles.numbersSection}>
              <View style={styles.numberCard}>
                <Text style={styles.numberLabel}>Votre Nom</Text>
                <Text style={styles.numberValueArabic}>{result.personName}</Text>
                <Text style={styles.numberValue}>{result.personTotal}</Text>
              </View>
              
              <View style={styles.plusSign}>
                <Text style={styles.plusText}>+</Text>
              </View>

              <View style={styles.numberCard}>
                <Text style={styles.numberLabel}>Nom Mère</Text>
                <Text style={styles.numberValueArabic}>{result.motherName}</Text>
                <Text style={styles.numberValue}>{result.motherTotal}</Text>
              </View>
            </View>

            {/* Total Combined */}
            <View style={styles.totalSection}>
              <Text style={styles.totalLabel}>Total Combiné</Text>
              <Text style={styles.totalValue}>{result.combinedTotal}</Text>
              
              {/* Divine Name Repetition */}
              <View style={styles.repetitionBadge}>
                <Text style={styles.repetitionIcon}>🔄</Text>
                <View>
                  <Text style={styles.repetitionLabel}>Répétition du Nom Divin</Text>
                  <Text style={styles.repetitionValue}>{result.repetitionCount} fois</Text>
                </View>
              </View>
            </View>

            {/* Buruj Indicator */}
            <View style={styles.burujSection}>
              <Text style={styles.burujLabel}>Burūj / Mansion</Text>
              <View style={styles.burujBadge}>
                <Text style={styles.burujEmoji}>🌙</Text>
                <Text style={styles.burujNumber}>#{result.burujRemainder}</Text>
              </View>
              <Text style={styles.burujElement}>Élément: {element}</Text>
            </View>
          </LinearGradient>
        </BlurView>

        {/* Alignment Scores */}
        <BlurView intensity={15} tint="dark" style={styles.scoresCardBlur}>
          <View style={styles.scoresCard}>
            <Text style={styles.sectionTitle}>📊 Alignement Global</Text>
            
            <View style={styles.progressGrid}>
              <RadialProgress
                percentage={overallAlignment}
                color={theme.progressColor}
                size={100}
                strokeWidth={10}
                label="Global"
                delay={0}
              />
              <RadialProgress
                percentage={careerMatch}
                color={theme.progressColor}
                size={100}
                strokeWidth={10}
                label="Carrière"
                delay={200}
              />
              <RadialProgress
                percentage={spiritualPractice}
                color={theme.progressColor}
                size={100}
                strokeWidth={10}
                label="Spirituel"
                delay={400}
              />
            </View>
          </View>
        </BlurView>

        {/* Key Insights */}
        <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
          <View style={[styles.card, { borderColor: theme.borderColor }]}>
            <Text style={styles.sectionTitle}>💡 Aperçu</Text>
            <Text style={styles.sectionSubtitle}>Résumé rapide de votre profil</Text>
            
            <View style={styles.insightRow}>
              <Text style={styles.insightIcon}>{theme.emoji}</Text>
              <View style={styles.insightContent}>
                <Text style={styles.insightLabel}>Élément</Text>
                <Text style={styles.insightValue}>{element}</Text>
              </View>
            </View>

            {Boolean(profile.personality?.fr?.temperament) && (
              <View style={styles.insightRow}>
                <Text style={styles.insightIcon}>⭐</Text>
                <View style={styles.insightContent}>
                  <Text style={styles.insightLabel}>Tempérament</Text>
                  <Text style={styles.insightValue}>{profile.personality.fr.temperament}</Text>
                </View>
              </View>
            )}
          </View>
        </BlurView>

        {/* Power Day */}
        {profile.blessed_day && (
          <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
            <LinearGradient
              colors={[
                `${theme.progressColor}33`,
                `${theme.progressColor}22`,
              ]}
              style={[styles.card, { borderColor: theme.borderColor }]}
            >
              <View style={styles.powerDayHeader}>
                <Text style={styles.powerDayIcon}>🌟</Text>
                <View>
                  <Text style={styles.powerDayTitle}>Votre Jour de Pouvoir</Text>
                  <Text style={styles.powerDaySubtitle}>
                    Plus propice aux décisions importantes
                  </Text>
                </View>
              </View>
              
              <View style={styles.dayBadge}>
                <Text style={styles.dayName}>
                  {profile.blessed_day.day.fr}
                </Text>
                <Text style={styles.dayNameEn}>
                  {profile.blessed_day.day.en}
                </Text>
              </View>

              {profile.blessed_day.associated_prophet && (
                <View style={styles.prophetInfo}>
                  <Text style={styles.prophetLabel}>Prophète Associé:</Text>
                  <Text style={styles.prophetName}>
                    {profile.blessed_day.associated_prophet.fr}
                  </Text>
                </View>
              )}
            </LinearGradient>
          </BlurView>
        )}

        {/* Divine Name */}
        {profile.spiritual_practice?.divine_names && (
          <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
            <View style={[styles.card, { borderColor: theme.borderColor }]}>
              <Text style={styles.sectionTitle}>🤲 Votre Nom Divin</Text>
              
              <View style={styles.divineNameCard}>
                {'arabic' in profile.spiritual_practice.divine_names && (
                  <>
                    <Text style={styles.divineNameArabic}>
                      {profile.spiritual_practice.divine_names.arabic}
                    </Text>
                    <Text style={styles.divineNameTranslit}>
                      {profile.spiritual_practice.divine_names.transliteration}
                    </Text>
                    <Text style={styles.divineNameMeaning}>
                      {profile.spiritual_practice.divine_names.translation.fr}
                    </Text>
                    <Text style={styles.divineNameMeaningEn}>
                      {profile.spiritual_practice.divine_names.translation.en}
                    </Text>
                  </>
                )}
                {'note' in profile.spiritual_practice.divine_names && (
                  <Text style={styles.divineNameNote}>
                    {profile.spiritual_practice.divine_names.note.fr}
                  </Text>
                )}
              </View>

              {profile.spiritual_practice.practice_night && (
                <View style={styles.practiceNightInfo}>
                  <Text style={styles.practiceNightLabel}>
                    Meilleur pratiqué:
                  </Text>
                  <Text style={styles.practiceNightValue}>
                    {profile.spiritual_practice.practice_night.primary.fr}
                  </Text>
                </View>
              )}
            </View>
          </BlurView>
        )}

        {/* Colors */}
        <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
          <View style={[styles.card, { borderColor: theme.borderColor }]}>
            <Text style={styles.sectionTitle}>🎨 Vos Couleurs</Text>
            <Text style={styles.sectionSubtitle}>
              Couleurs alignées avec votre élément
            </Text>
            
            <View style={styles.colorGrid}>
              {profile.colors.map((color, index) => (
                <View key={color} style={styles.colorItem}>
                  <LinearGradient
                    colors={[color.toLowerCase(), `${color.toLowerCase()}cc`]}
                    style={styles.colorSwatch}
                  >
                    <View style={styles.colorSwatchInner} />
                  </LinearGradient>
                  <Text style={styles.colorName}>{color}</Text>
                </View>
              ))}
            </View>
          </View>
        </BlurView>

        {/* Life Blessing */}
        {profile.personality?.fr?.life_blessing && (
          <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
            <View style={[styles.card, { borderColor: theme.borderColor }]}>
              <Text style={styles.sectionTitle}>✨ Bénédiction de Vie</Text>
              
              <View style={styles.blessingCard}>
                <Text style={styles.blessingText}>
                  {profile.personality.fr.life_blessing}
                </Text>
                <Text style={styles.blessingTextEn}>
                  {profile.personality.en.life_blessing}
                </Text>
              </View>
            </View>
          </BlurView>
        )}

        {/* Career Principle */}
        {profile.career?.principle && (
          <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
            <View style={[styles.card, { borderColor: theme.borderColor }]}>
              <Text style={styles.sectionTitle}>💼 Principe de Carrière</Text>
              
              <View style={styles.principleCard}>
                <View style={styles.principleQuote}>
                  <Text style={styles.principleText}>
                    {profile.career.principle.fr}
                  </Text>
                  <Text style={styles.principleTextEn}>
                    {profile.career.principle.en}
                  </Text>
                </View>
              </View>
            </View>
          </BlurView>
        )}

        {/* Next Steps CTA */}
        <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
          <LinearGradient
            colors={[
              'rgba(59, 130, 246, 0.2)',
              'rgba(99, 102, 241, 0.15)',
            ]}
            style={[styles.card, { borderColor: 'rgba(59, 130, 246, 0.4)' }]}
          >
            <Text style={styles.ctaIcon}>👉</Text>
            <Text style={styles.ctaTitle}>Prochaines Étapes</Text>
            <Text style={styles.ctaText}>
              Explorez les onglets ci-dessus pour des informations approfondies
              sur votre personnalité, orientation professionnelle, jour béni et
              pratiques spirituelles.
            </Text>
            <Text style={styles.ctaTextEn}>
              Explore the tabs above for deep insights into your personality,
              career guidance, blessed day, and spiritual practices.
            </Text>
          </LinearGradient>
        </BlurView>

        {/* Spacer for bottom navigation */}
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

  // Summary Card
  summaryCardBlur: {
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  summaryCard: {
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  elementBadge: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  elementBadgeInner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  elementEmoji: {
    fontSize: 32,
    marginRight: 10,
  },
  elementText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: 1,
  },
  numbersSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  numberCard: {
    alignItems: 'center',
    flex: 1,
  },
  numberLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 6,
  },
  numberValueArabic: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
    marginBottom: 4,
  },
  numberValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
  },
  plusSign: {
    marginHorizontal: 16,
  },
  plusText: {
    fontSize: 28,
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: '300',
  },
  totalSection: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 6,
  },
  totalValue: {
    fontSize: 48,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 12,
  },
  repetitionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  repetitionIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  repetitionLabel: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  repetitionValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  burujSection: {
    alignItems: 'center',
  },
  burujLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 8,
  },
  burujBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  burujEmoji: {
    fontSize: 24,
    marginRight: 8,
  },
  burujNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
  },
  burujElement: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },

  // Scores Card
  scoresCardBlur: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
  },
  scoresCard: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  progressGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  progressContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  progressCenter: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
  progressLabel: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 2,
  },

  // General Card
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 6,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: 16,
  },

  // Insights
  insightRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  insightIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  insightContent: {
    flex: 1,
  },
  insightLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: 4,
  },
  insightValue: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
  },

  // Power Day
  powerDayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  powerDayIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  powerDayTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 2,
  },
  powerDaySubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  dayBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  dayName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  dayNameEn: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  prophetInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prophetLabel: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    marginRight: 6,
  },
  prophetName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
  },

  // Divine Name
  divineNameCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  divineNameArabic: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  divineNameTranslit: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 12,
  },
  divineNameMeaning: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginBottom: 4,
  },
  divineNameMeaningEn: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  divineNameNote: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 8,
  },
  practiceNightInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 12,
    borderRadius: 10,
  },
  practiceNightLabel: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    marginRight: 6,
  },
  practiceNightValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },

  // Colors
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  colorItem: {
    alignItems: 'center',
    width: (width - 88) / 3,
  },
  colorSwatch: {
    width: '100%',
    height: 80,
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  colorSwatchInner: {
    flex: 1,
  },
  colorName: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
    textAlign: 'center',
  },

  // Life Blessing
  blessingCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: 'rgba(251, 191, 36, 0.8)',
  },
  blessingText: {
    fontSize: 15,
    color: '#ffffff',
    lineHeight: 24,
    marginBottom: 8,
  },
  blessingTextEn: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 20,
    fontStyle: 'italic',
  },

  // Career Principle
  principleCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    padding: 16,
    borderRadius: 12,
  },
  principleQuote: {
    borderLeftWidth: 3,
    borderLeftColor: 'rgba(99, 102, 241, 0.8)',
    paddingLeft: 16,
  },
  principleText: {
    fontSize: 15,
    color: '#ffffff',
    lineHeight: 24,
    marginBottom: 8,
    fontWeight: '500',
  },
  principleTextEn: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 20,
    fontStyle: 'italic',
  },

  // CTA
  ctaIcon: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 12,
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
  },
  ctaText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 8,
  },
  ctaTextEn: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    lineHeight: 20,
    fontStyle: 'italic',
  },

  bottomSpacer: {
    height: 40,
  },
});