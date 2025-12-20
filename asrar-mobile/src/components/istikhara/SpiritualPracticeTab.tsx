import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { SpiritualPractice, ElementTheme } from '../../features/istikhara/types';

const { width } = Dimensions.get('window');

interface SpiritualPracticeTabProps {
  readonly spiritual: SpiritualPractice;
  readonly theme: ElementTheme;
}

// Simple Dhikr Counter Component
function DhikrCounter({ 
  targetCount, 
  color 
}: { 
  targetCount: number; 
  color: string; 
}) {
  const [count, setCount] = useState(0);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    if (count < targetCount) {
      setCount(count + 1);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      
      // Bounce animation
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Completion haptic
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setCount(0);
    }
  };

  const progress = (count / targetCount) * 100;

  return (
    <View style={styles.dhikrCounterContainer}>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
        <Animated.View style={[styles.dhikrButton, { transform: [{ scale: scaleAnim }] }]}>
          <LinearGradient
            colors={[color, `${color}cc`, `${color}99`]}
            style={styles.dhikrGradient}
          >
            <Text style={styles.dhikrCount}>{count}</Text>
            <Text style={styles.dhikrTarget}>/ {targetCount}</Text>
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
      
      {/* Progress Bar */}
      <View style={styles.dhikrProgress}>
        <View style={styles.dhikrProgressTrack}>
          <View 
            style={[
              styles.dhikrProgressFill, 
              { width: `${progress}%`, backgroundColor: color }
            ]} 
          />
        </View>
        <Text style={styles.dhikrProgressText}>
          {progress.toFixed(0)}% Complete
        </Text>
      </View>

      <Text style={styles.dhikrInstruction}>
        Appuyez pour compter / Tap to count
      </Text>
    </View>
  );
}

export default function SpiritualPracticeTab({ 
  spiritual, 
  theme 
}: Readonly<SpiritualPracticeTabProps>) {
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
            <Text style={styles.headerIcon}>🕌</Text>
            <Text style={styles.headerTitle}>Pratique Spirituelle</Text>
            <Text style={styles.headerSubtitle}>
              Guidée par l'élément {theme.emoji}
            </Text>
          </LinearGradient>
        </BlurView>

        {/* Divine Names - Most Sacred */}
        {spiritual.divine_names && typeof spiritual.divine_names === 'object' && 
         !Array.isArray(spiritual.divine_names) && 'arabic' in spiritual.divine_names && (
          <BlurView intensity={15} tint="dark" style={styles.sacredCardBlur}>
            <LinearGradient
              colors={[
                'rgba(251, 191, 36, 0.2)',
                'rgba(251, 191, 36, 0.1)',
              ]}
              style={[styles.card, { borderColor: 'rgba(251, 191, 36, 0.4)' }]}
            >
              <View style={styles.sacredHeader}>
                <LinearGradient
                  colors={['rgba(251, 191, 36, 0.3)', 'rgba(251, 191, 36, 0.15)']}
                  style={styles.sacredBadge}
                >
                  <Text style={styles.sacredBadgeIcon}>✨</Text>
                  <Text style={styles.sacredBadgeText}>ASMA UL-HUSNA</Text>
                </LinearGradient>
              </View>

              <View style={styles.divineNameContainer}>
                <Text style={styles.divineNameArabic}>
                  {spiritual.divine_names.arabic}
                </Text>
                
                <Text style={styles.divineNameTranslit}>
                  {spiritual.divine_names.transliteration}
                </Text>

                <View style={styles.divider} />

                <Text style={styles.divineNameMeaning}>
                  {spiritual.divine_names.translation.fr}
                </Text>
                <Text style={styles.divineNameMeaningEn}>
                  {spiritual.divine_names.translation.en}
                </Text>
              </View>

              {/* Dhikr Counter */}
              <View style={styles.dhikrSection}>
                <Text style={styles.dhikrSectionTitle}>
                  📿 Compteur de Dhikr
                </Text>
                <DhikrCounter 
                  targetCount={
                    spiritual.divine_names.repetitions || 
                    parseInt(String(spiritual.divine_names.arabic).length) || 
                    33
                  } 
                  color="#fbbf24"
                />
              </View>

              {/* Practice Guidance */}
              <View style={styles.practiceGuidance}>
                <Text style={styles.guidanceTitle}>
                  📖 Guide de Pratique
                </Text>
                <View style={styles.guidanceSteps}>
                  <View style={styles.guidanceStep}>
                    <Text style={styles.stepNumber}>1</Text>
                    <Text style={styles.stepText}>
                      Faites vos ablutions (wudu) / Perform ablution
                    </Text>
                  </View>
                  <View style={styles.guidanceStep}>
                    <Text style={styles.stepNumber}>2</Text>
                    <Text style={styles.stepText}>
                      Trouvez un endroit calme / Find a quiet place
                    </Text>
                  </View>
                  <View style={styles.guidanceStep}>
                    <Text style={styles.stepNumber}>3</Text>
                    <Text style={styles.stepText}>
                      Récitez avec concentration / Recite with focus
                    </Text>
                  </View>
                  <View style={styles.guidanceStep}>
                    <Text style={styles.stepNumber}>4</Text>
                    <Text style={styles.stepText}>
                      Répétez le nombre recommandé / Repeat recommended count
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </BlurView>
        )}

        {/* Quranic Verse - Sacred Content */}
        {spiritual.quranic_verse && (
          <BlurView intensity={15} tint="dark" style={styles.sacredCardBlur}>
            <LinearGradient
              colors={[
                'rgba(34, 197, 94, 0.2)',
                'rgba(34, 197, 94, 0.1)',
              ]}
              style={[styles.card, { borderColor: 'rgba(34, 197, 94, 0.4)' }]}
            >
              <View style={styles.sacredHeader}>
                <LinearGradient
                  colors={['rgba(34, 197, 94, 0.3)', 'rgba(34, 197, 94, 0.15)']}
                  style={styles.sacredBadge}
                >
                  <Text style={styles.sacredBadgeIcon}>📖</Text>
                  <Text style={styles.sacredBadgeText}>VERSET CORANIQUE</Text>
                </LinearGradient>
              </View>

              {'reference' in spiritual.quranic_verse && (
                <View style={styles.referenceBox}>
                  <Text style={styles.referenceText}>
                    {spiritual.quranic_verse.reference}
                  </Text>
                </View>
              )}

              <View style={styles.quranVerseContainer}>
                <View style={styles.bismillahDecorator}>
                  <View style={styles.decoratorLine} />
                  <Text style={styles.bismillahIcon}>☪️</Text>
                  <View style={styles.decoratorLine} />
                </View>

                <Text style={styles.arabicVerse}>
                  {spiritual.quranic_verse.arabic}
                </Text>

                <View style={styles.bismillahDecorator}>
                  <View style={styles.decoratorLine} />
                </View>

                <Text style={styles.verseTranslit}>
                  {spiritual.quranic_verse.transliteration}
                </Text>

                <View style={styles.translationBox}>
                  <Text style={styles.verseTranslation}>
                    {spiritual.quranic_verse.translation.fr}
                  </Text>
                  <Text style={styles.verseTranslationEn}>
                    {spiritual.quranic_verse.translation.en}
                  </Text>
                </View>
              </View>

              <View style={styles.quranNote}>
                <Text style={styles.quranNoteIcon}>💚</Text>
                <Text style={styles.quranNoteText}>
                  Méditez sur ce verset lors de votre pratique spirituelle
                </Text>
              </View>
            </LinearGradient>
          </BlurView>
        )}

        {/* Practice Night & Zodiac Combined */}
        <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
          <View style={[styles.card, { borderColor: theme.borderColor }]}>
            <Text style={styles.sectionTitle}>🌙 Timing Spirituel</Text>

            {/* Practice Night */}
            {spiritual.practice_night && typeof spiritual.practice_night === 'object' && (
              <View style={styles.timingSection}>
                <View style={styles.timingHeader}>
                  <Text style={styles.timingIcon}>🌃</Text>
                  <Text style={styles.timingLabel}>Nuit de Pratique</Text>
                </View>
                
                {'note' in spiritual.practice_night && spiritual.practice_night.note && (
                  <View style={styles.timingContent}>
                    <Text style={styles.timingText}>
                      {spiritual.practice_night.note.fr}
                    </Text>
                    <Text style={styles.timingTextEn}>
                      {spiritual.practice_night.note.en}
                    </Text>
                  </View>
                )}
              </View>
            )}

            {/* Zodiac Sign */}
            <View style={[styles.timingSection, { marginTop: 16 }]}>
              <View style={styles.timingHeader}>
                <Text style={styles.timingIcon}>♈</Text>
                <Text style={styles.timingLabel}>Signe du Zodiaque</Text>
              </View>
              
              <View style={styles.zodiacCard}>
                {typeof spiritual.zodiac_sign === 'object' && 
                 'arabic' in spiritual.zodiac_sign && (
                  <Text style={styles.zodiacArabic}>
                    {spiritual.zodiac_sign.arabic}
                  </Text>
                )}
                <Text style={styles.zodiacName}>
                  {spiritual.zodiac_sign.fr}
                </Text>
                <Text style={styles.zodiacNameEn}>
                  {spiritual.zodiac_sign.en}
                </Text>
              </View>
            </View>
          </View>
        </BlurView>

        {/* Angel Guardian */}
        <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
          <LinearGradient
            colors={[
              'rgba(139, 92, 246, 0.2)',
              'rgba(139, 92, 246, 0.1)',
            ]}
            style={[styles.card, { borderColor: 'rgba(139, 92, 246, 0.4)' }]}
          >
            <View style={styles.celestialHeader}>
              <View style={styles.celestialIconContainer}>
                <LinearGradient
                  colors={['rgba(139, 92, 246, 0.3)', 'rgba(139, 92, 246, 0.15)']}
                  style={styles.celestialIconBg}
                >
                  <Text style={styles.celestialIcon}>👼</Text>
                </LinearGradient>
              </View>
              <View>
                <Text style={styles.celestialTitle}>Ange Gardien</Text>
                <Text style={styles.celestialSubtitle}>
                  Votre protecteur céleste
                </Text>
              </View>
            </View>

            <View style={styles.celestialContent}>
              <Text style={styles.celestialArabic}>
                {spiritual.angel.arabic}
              </Text>
              <Text style={styles.celestialTranslit}>
                {spiritual.angel.transliteration}
              </Text>
              
              {'name' in spiritual.angel && spiritual.angel.name && (
                <View style={styles.celestialMeaning}>
                  <Text style={styles.celestialMeaningText}>
                    {spiritual.angel.name.fr}
                  </Text>
                  <Text style={styles.celestialMeaningTextEn}>
                    {spiritual.angel.name.en}
                  </Text>
                </View>
              )}
            </View>

            <View style={styles.celestialFooter}>
              <Text style={styles.footerIcon}>✨</Text>
              <Text style={styles.footerText}>
                Invoquez la protection de cet ange dans vos prières
              </Text>
            </View>
          </LinearGradient>
        </BlurView>

        {/* Jinn Associated */}
        <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
          <LinearGradient
            colors={[
              'rgba(236, 72, 153, 0.2)',
              'rgba(236, 72, 153, 0.1)',
            ]}
            style={[styles.card, { borderColor: 'rgba(236, 72, 153, 0.4)' }]}
          >
            <View style={styles.celestialHeader}>
              <View style={styles.celestialIconContainer}>
                <LinearGradient
                  colors={['rgba(236, 72, 153, 0.3)', 'rgba(236, 72, 153, 0.15)']}
                  style={styles.celestialIconBg}
                >
                  <Text style={styles.celestialIcon}>🔮</Text>
                </LinearGradient>
              </View>
              <View>
                <Text style={styles.celestialTitle}>Jinn Associé</Text>
                <Text style={styles.celestialSubtitle}>
                  Entité spirituelle liée
                </Text>
              </View>
            </View>

            <View style={styles.celestialContent}>
              <Text style={styles.celestialArabic}>
                {spiritual.jinn.arabic}
              </Text>
              <Text style={styles.celestialTranslit}>
                {spiritual.jinn.transliteration}
              </Text>
              
              {'meaning' in spiritual.jinn && spiritual.jinn.meaning && (
                <View style={styles.celestialMeaning}>
                  <Text style={styles.celestialMeaningText}>
                    {spiritual.jinn.meaning.fr}
                  </Text>
                  <Text style={styles.celestialMeaningTextEn}>
                    {spiritual.jinn.meaning.en}
                  </Text>
                </View>
              )}
            </View>

            <View style={[styles.celestialFooter, { borderTopColor: 'rgba(236, 72, 153, 0.3)' }]}>
              <Text style={styles.footerIcon}>🛡️</Text>
              <Text style={styles.footerText}>
                Restez vigilant et protégé par les invocations
              </Text>
            </View>
          </LinearGradient>
        </BlurView>

        {/* Practice Schedule */}
        <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
          <View style={[styles.card, { borderColor: theme.borderColor }]}>
            <Text style={styles.sectionTitle}>📅 Horaire de Pratique</Text>
            
            <View style={styles.scheduleGrid}>
              <View style={styles.scheduleItem}>
                <Text style={styles.scheduleIcon}>🌅</Text>
                <Text style={styles.scheduleLabel}>Fajr</Text>
                <Text style={styles.scheduleTime}>À l'aube</Text>
              </View>

              <View style={styles.scheduleItem}>
                <Text style={styles.scheduleIcon}>☀️</Text>
                <Text style={styles.scheduleLabel}>Dhuhr</Text>
                <Text style={styles.scheduleTime}>Midi</Text>
              </View>

              <View style={styles.scheduleItem}>
                <Text style={styles.scheduleIcon}>🌤️</Text>
                <Text style={styles.scheduleLabel}>Asr</Text>
                <Text style={styles.scheduleTime}>Après-midi</Text>
              </View>

              <View style={styles.scheduleItem}>
                <Text style={styles.scheduleIcon}>🌆</Text>
                <Text style={styles.scheduleLabel}>Maghrib</Text>
                <Text style={styles.scheduleTime}>Coucher</Text>
              </View>

              <View style={styles.scheduleItem}>
                <Text style={styles.scheduleIcon}>🌙</Text>
                <Text style={styles.scheduleLabel}>Isha</Text>
                <Text style={styles.scheduleTime}>Nuit</Text>
              </View>
            </View>

            <View style={styles.scheduleNote}>
              <Text style={styles.scheduleNoteText}>
                💡 Pratiquez après les prières pour un impact maximal
              </Text>
            </View>
          </View>
        </BlurView>

        {/* Benefits & Wisdom */}
        <BlurView intensity={15} tint="dark" style={styles.cardBlur}>
          <LinearGradient
            colors={[
              'rgba(59, 130, 246, 0.2)',
              'rgba(59, 130, 246, 0.1)',
            ]}
            style={[styles.card, { borderColor: 'rgba(59, 130, 246, 0.4)' }]}
          >
            <View style={styles.benefitsHeader}>
              <Text style={styles.benefitsIcon}>💎</Text>
              <Text style={styles.benefitsTitle}>Bienfaits de la Pratique</Text>
            </View>

            <View style={styles.benefitsList}>
              <View style={styles.benefitItem}>
                <Text style={styles.benefitBullet}>✓</Text>
                <Text style={styles.benefitText}>
                  Renforce la connexion spirituelle / Strengthens spiritual connection
                </Text>
              </View>

              <View style={styles.benefitItem}>
                <Text style={styles.benefitBullet}>✓</Text>
                <Text style={styles.benefitText}>
                  Apporte la paix intérieure / Brings inner peace
                </Text>
              </View>

              <View style={styles.benefitItem}>
                <Text style={styles.benefitBullet}>✓</Text>
                <Text style={styles.benefitText}>
                  Purifie le cœur et l'âme / Purifies heart and soul
                </Text>
              </View>

              <View style={styles.benefitItem}>
                <Text style={styles.benefitBullet}>✓</Text>
                <Text style={styles.benefitText}>
                  Attire les bénédictions divines / Attracts divine blessings
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

  // Header
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

  // Cards
  sacredCardBlur: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
  },
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
    marginBottom: 16,
  },

  // Sacred Header
  sacredHeader: {
    marginBottom: 20,
  },
  sacredBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  sacredBadgeIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  sacredBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.9)',
    letterSpacing: 0.5,
  },

  // Divine Names
  divineNameContainer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  divineNameArabic: {
    fontSize: 36,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
  },
  divineNameTranslit: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  divider: {
    width: 60,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginVertical: 16,
    borderRadius: 1,
  },
  divineNameMeaning: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 6,
  },
  divineNameMeaningEn: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  // Dhikr Counter
  dhikrSection: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  dhikrSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
  },
  dhikrCounterContainer: {
    alignItems: 'center',
  },
  dhikrButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 16,
  },
  dhikrGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dhikrCount: {
    fontSize: 40,
    fontWeight: '700',
    color: '#ffffff',
  },
  dhikrTarget: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  dhikrProgress: {
    width: '100%',
    marginBottom: 12,
  },
  dhikrProgressTrack: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 6,
  },
  dhikrProgressFill: {
    height: '100%',
    borderRadius: 3,
  },
  dhikrProgressText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
  dhikrInstruction: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
  },

  // Practice Guidance
  practiceGuidance: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  guidanceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 16,
  },
  guidanceSteps: {
    gap: 12,
  },
  guidanceStep: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 28,
    marginRight: 12,
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 20,
  },

  // Quranic Verse
  referenceBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  referenceText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '600',
  },
  quranVerseContainer: {
    paddingVertical: 16,
  },
  bismillahDecorator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  decoratorLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  bismillahIcon: {
    fontSize: 20,
    marginHorizontal: 12,
  },
  arabicVerse: {
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'right',
    lineHeight: 40,
    marginVertical: 16,
    fontWeight: '500',
  },
  verseTranslit: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.8)',
    fontStyle: 'italic',
    marginVertical: 12,
    lineHeight: 24,
  },
  translationBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
  },
  verseTranslation: {
    fontSize: 15,
    color: '#ffffff',
    lineHeight: 24,
    marginBottom: 8,
  },
  verseTranslationEn: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 20,
    fontStyle: 'italic',
  },
  quranNote: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(34, 197, 94, 0.15)',
    padding: 12,
    borderRadius: 10,
    marginTop: 16,
  },
  quranNoteIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  quranNoteText: {
    flex: 1,
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 18,
  },

  // Timing Section
  timingSection: {
    marginBottom: 16,
  },
  timingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  timingIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  timingLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  timingContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 14,
    borderRadius: 12,
  },
  timingText: {
    fontSize: 14,
    color: '#ffffff',
    lineHeight: 22,
    marginBottom: 6,
  },
  timingTextEn: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 20,
    fontStyle: 'italic',
  },
  zodiacCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  zodiacArabic: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 8,
  },
  zodiacName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  zodiacNameEn: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    fontStyle: 'italic',
  },

  // Celestial (Angel & Jinn)
  celestialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  celestialIconContainer: {
    marginRight: 16,
  },
  celestialIconBg: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  celestialIcon: {
    fontSize: 28,
  },
  celestialTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 2,
  },
  celestialSubtitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  celestialContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  celestialArabic: {
    fontSize: 32,
    color: '#ffffff',
    marginBottom: 12,
    fontWeight: '500',
  },
  celestialTranslit: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    fontStyle: 'italic',
    marginBottom: 16,
  },
  celestialMeaning: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    width: '100%',
  },
  celestialMeaningText: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 6,
  },
  celestialMeaningTextEn: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  celestialFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(139, 92, 246, 0.3)',
  },
  footerIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  footerText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    flex: 1,
  },

  // Schedule
  scheduleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },
  scheduleItem: {
    width: (width - 76) / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  scheduleIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  scheduleLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  scheduleTime: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  scheduleNote: {
    backgroundColor: 'rgba(59, 130, 246, 0.15)',
    padding: 12,
    borderRadius: 10,
  },
  scheduleNoteText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },

  // Benefits
  benefitsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  benefitsIcon: {
    fontSize: 28,
    marginRight: 12,
  },
  benefitsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  benefitsList: {
    gap: 12,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  benefitBullet: {
    fontSize: 18,
    color: 'rgba(59, 130, 246, 0.8)',
    marginRight: 12,
    marginTop: 2,
  },
  benefitText: {
    flex: 1,
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 22,
  },

  bottomSpacer: {
    height: 40,
  },
});