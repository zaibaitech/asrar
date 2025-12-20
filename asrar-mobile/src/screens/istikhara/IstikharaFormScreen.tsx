import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';

const { width } = Dimensions.get('window');

interface IstikharaFormScreenProps {
  readonly navigation: any;
}

// Mock name database - replace with your actual Islamic names database
const COMMON_NAMES = [
  { arabic: 'محمد', latin: 'Muhammad', gender: 'male' },
  { arabic: 'أحمد', latin: 'Ahmed', gender: 'male' },
  { arabic: 'علي', latin: 'Ali', gender: 'male' },
  { arabic: 'حسن', latin: 'Hassan', gender: 'male' },
  { arabic: 'حسين', latin: 'Hussain', gender: 'male' },
  { arabic: 'عبدالله', latin: 'Abdullah', gender: 'male' },
  { arabic: 'إبراهيم', latin: 'Ibrahim', gender: 'male' },
  { arabic: 'يوسف', latin: 'Yusuf', gender: 'male' },
  { arabic: 'فاطمة', latin: 'Fatima', gender: 'female' },
  { arabic: 'عائشة', latin: 'Aisha', gender: 'female' },
  { arabic: 'خديجة', latin: 'Khadija', gender: 'female' },
  { arabic: 'مريم', latin: 'Maryam', gender: 'female' },
  { arabic: 'زينب', latin: 'Zainab', gender: 'female' },
  { arabic: 'أمينة', latin: 'Amina', gender: 'female' },
  { arabic: 'حفصة', latin: 'Hafsa', gender: 'female' },
];

export default function IstikharaFormScreen({ navigation }: Readonly<IstikharaFormScreenProps>) {
  const [personName, setPersonName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [errors, setErrors] = useState({ personName: '', motherName: '' });
  const [isCalculating, setIsCalculating] = useState(false);
  const [showPersonSuggestions, setShowPersonSuggestions] = useState(false);
  const [showMotherSuggestions, setShowMotherSuggestions] = useState(false);
  const [showArabicKeyboard, setShowArabicKeyboard] = useState(false);
  const [activeInput, setActiveInput] = useState<'person' | 'mother' | null>(null);

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const moonRotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Entrance animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();

    // Continuous moon rotation
    Animated.loop(
      Animated.timing(moonRotation, {
        toValue: 1,
        duration: 20000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const moonRotate = moonRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const filterSuggestions = (query: string) => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return COMMON_NAMES.filter(
      (name) =>
        name.latin.toLowerCase().includes(lowerQuery) ||
        name.arabic.includes(query)
    ).slice(0, 5);
  };

  const handlePersonNameChange = (text: string) => {
    setPersonName(text);
    setShowPersonSuggestions(text.length > 0);
    if (errors.personName) {
      setErrors({ ...errors, personName: '' });
    }
  };

  const handleMotherNameChange = (text: string) => {
    setMotherName(text);
    setShowMotherSuggestions(text.length > 0);
    if (errors.motherName) {
      setErrors({ ...errors, motherName: '' });
    }
  };

  const selectPersonName = (name: typeof COMMON_NAMES[0]) => {
    setPersonName(name.latin);
    setShowPersonSuggestions(false);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const selectMotherName = (name: typeof COMMON_NAMES[0]) => {
    setMotherName(name.latin);
    setShowMotherSuggestions(false);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const validateName = (name: string): boolean => {
    const pattern = /^[\u0600-\u06FFa-zA-Z\s\-']+$/;
    return pattern.test(name);
  };

  const handleCalculate = async () => {
    setErrors({ personName: '', motherName: '' });

    let hasError = false;
    const newErrors = { personName: '', motherName: '' };

    if (!personName.trim()) {
      newErrors.personName = 'Votre nom est requis / Your name is required';
      hasError = true;
    } else if (!validateName(personName)) {
      newErrors.personName = 'Nom invalide (lettres arabes/latines uniquement)';
      hasError = true;
    }

    if (!motherName.trim()) {
      newErrors.motherName = "Nom de la mère requis / Mother's name required";
      hasError = true;
    } else if (!validateName(motherName)) {
      newErrors.motherName = 'Nom invalide (lettres arabes/latines uniquement)';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      
      // Shake animation on error
      Animated.sequence([
        Animated.timing(scaleAnim, { toValue: 1.02, duration: 50, useNativeDriver: true }),
        Animated.timing(scaleAnim, { toValue: 0.98, duration: 50, useNativeDriver: true }),
        Animated.timing(scaleAnim, { toValue: 1.01, duration: 50, useNativeDriver: true }),
        Animated.timing(scaleAnim, { toValue: 1, duration: 50, useNativeDriver: true }),
      ]).start();
      return;
    }

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    // Button press animation
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    setIsCalculating(true);

    setTimeout(() => {
      setIsCalculating(false);
      navigation.navigate('IstikharaResults', {
        personName: personName.trim(),
        motherName: motherName.trim(),
      });
    }, 600);
  };

  const toggleArabicKeyboard = () => {
    setShowArabicKeyboard(!showArabicKeyboard);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const insertArabicLetter = (letter: string) => {
    if (activeInput === 'person') {
      setPersonName(personName + letter);
    } else if (activeInput === 'mother') {
      setMotherName(motherName + letter);
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const arabicLetters = [
    'ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د',
    'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط',
    'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م',
    'ن', 'ه', 'و', 'ي', 'ء', 'ة'
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#6366f1', '#8b5cf6', '#a855f7', '#c026d3']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        {/* Header with Back Button */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Istikharah</Text>
          <View style={styles.headerRight} />
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoid}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <Animated.View
              style={[
                styles.content,
                {
                  opacity: fadeAnim,
                  transform: [{ translateY: slideAnim }],
                },
              ]}
            >
              {/* Animated Moon Icon */}
              <Animated.View
                style={[
                  styles.iconContainer,
                  { transform: [{ rotate: moonRotate }] },
                ]}
              >
                <LinearGradient
                  colors={['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.1)']}
                  style={styles.moonGlow}
                >
                  <Text style={styles.moonIcon}>🌙</Text>
                </LinearGradient>
              </Animated.View>

              {/* Title Section */}
              <View style={styles.headerSection}>
                <Text style={styles.titleArabic}>الاستخارة بالأسماء</Text>
                <Text style={styles.title}>Istikharah al-Asmā'</Text>
                <View style={styles.divider} />
                <Text style={styles.subtitle}>
                  Guidance Spirituelle par les Noms Sacrés
                </Text>
                <Text style={styles.subtitleEn}>
                  Spiritual Guidance Through Sacred Names
                </Text>
              </View>

              {/* Main Card with Enhanced Glassmorphism */}
              <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <BlurView intensity={20} tint="dark" style={styles.cardBlur}>
                  <LinearGradient
                    colors={[
                      'rgba(255, 255, 255, 0.15)',
                      'rgba(255, 255, 255, 0.05)',
                    ]}
                    style={styles.card}
                  >
                    {/* Person Name Section */}
                    <View style={styles.inputSection}>
                      <View style={styles.labelRow}>
                        <Text style={styles.label}>👤 Votre Nom / Your Name</Text>
                        <TouchableOpacity
                          onPress={toggleArabicKeyboard}
                          style={styles.keyboardToggle}
                        >
                          <Text style={styles.keyboardToggleText}>ع</Text>
                        </TouchableOpacity>
                      </View>
                      
                      <View style={styles.inputWrapper}>
                        <TextInput
                          style={[
                            styles.input,
                            errors.personName ? styles.inputError : null,
                            activeInput === 'person' && styles.inputFocused,
                          ]}
                          value={personName}
                          onChangeText={handlePersonNameChange}
                          onFocus={() => {
                            setActiveInput('person');
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                          }}
                          onBlur={() => {
                            setActiveInput(null);
                            setTimeout(() => setShowPersonSuggestions(false), 200);
                          }}
                          placeholder="أحمد / Ahmed"
                          placeholderTextColor="rgba(255, 255, 255, 0.4)"
                          autoCapitalize="words"
                          autoCorrect={false}
                        />
                        {personName.length > 0 && (
                          <TouchableOpacity
                            onPress={() => {
                              setPersonName('');
                              setShowPersonSuggestions(false);
                            }}
                            style={styles.clearButton}
                          >
                            <Text style={styles.clearButtonText}>✕</Text>
                          </TouchableOpacity>
                        )}
                      </View>

                      {/* Name Suggestions */}
                      {showPersonSuggestions && filterSuggestions(personName).length > 0 && (
                        <View style={styles.suggestionsContainer}>
                          {filterSuggestions(personName).map((name) => (
                            <TouchableOpacity
                              key={`person-${name.latin}-${name.arabic}`}
                              onPress={() => selectPersonName(name)}
                              style={styles.suggestion}
                            >
                              <Text style={styles.suggestionArabic}>{name.arabic}</Text>
                              <Text style={styles.suggestionLatin}>{name.latin}</Text>
                            </TouchableOpacity>
                          ))}
                        </View>
                      )}

                      {errors.personName ? (
                        <View style={styles.errorContainer}>
                          <Text style={styles.errorIcon}>⚠️</Text>
                          <Text style={styles.errorText}>{errors.personName}</Text>
                        </View>
                      ) : null}
                    </View>

                    {/* Mother Name Section */}
                    <View style={styles.inputSection}>
                      <Text style={styles.label}>
                        🌸 Nom de la Mère / Mother's Name
                      </Text>
                      
                      <View style={styles.inputWrapper}>
                        <TextInput
                          style={[
                            styles.input,
                            errors.motherName ? styles.inputError : null,
                            activeInput === 'mother' && styles.inputFocused,
                          ]}
                          value={motherName}
                          onChangeText={handleMotherNameChange}
                          onFocus={() => {
                            setActiveInput('mother');
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                          }}
                          onBlur={() => {
                            setActiveInput(null);
                            setTimeout(() => setShowMotherSuggestions(false), 200);
                          }}
                          placeholder="فاطمة / Fatima"
                          placeholderTextColor="rgba(255, 255, 255, 0.4)"
                          autoCapitalize="words"
                          autoCorrect={false}
                        />
                        {motherName.length > 0 && (
                          <TouchableOpacity
                            onPress={() => {
                              setMotherName('');
                              setShowMotherSuggestions(false);
                            }}
                            style={styles.clearButton}
                          >
                            <Text style={styles.clearButtonText}>✕</Text>
                          </TouchableOpacity>
                        )}
                      </View>

                      {showMotherSuggestions && filterSuggestions(motherName).length > 0 && (
                        <View style={styles.suggestionsContainer}>
                          {filterSuggestions(motherName).map((name) => (
                            <TouchableOpacity
                              key={`mother-${name.latin}-${name.arabic}`}
                              onPress={() => selectMotherName(name)}
                              style={styles.suggestion}
                            >
                              <Text style={styles.suggestionArabic}>{name.arabic}</Text>
                              <Text style={styles.suggestionLatin}>{name.latin}</Text>
                            </TouchableOpacity>
                          ))}
                        </View>
                      )}

                      {errors.motherName ? (
                        <View style={styles.errorContainer}>
                          <Text style={styles.errorIcon}>⚠️</Text>
                          <Text style={styles.errorText}>{errors.motherName}</Text>
                        </View>
                      ) : null}
                    </View>

                    {/* Arabic Keyboard */}
                    {showArabicKeyboard && (
                      <View style={styles.arabicKeyboard}>
                        <Text style={styles.keyboardTitle}>Clavier Arabe / Arabic Keyboard</Text>
                        <View style={styles.lettersGrid}>
                          {arabicLetters.map((letter) => (
                            <TouchableOpacity
                              key={letter}
                              onPress={() => insertArabicLetter(letter)}
                              style={styles.letterButton}
                            >
                              <Text style={styles.letterText}>{letter}</Text>
                            </TouchableOpacity>
                          ))}
                        </View>
                      </View>
                    )}

                    {/* Instructions */}
                    <View style={styles.infoBox}>
                      <Text style={styles.infoIcon}>💡</Text>
                      <View style={styles.infoTextContainer}>
                        <Text style={styles.infoText}>
                          Entrez les deux noms pour recevoir votre profil spirituel
                          basé sur la science ancienne des lettres (ʿIlm al-Ḥurūf).
                        </Text>
                        <Text style={styles.infoTextEn}>
                          Enter both names to receive your spiritual profile based
                          on the ancient science of letters.
                        </Text>
                      </View>
                    </View>

                    {/* Calculate Button */}
                    <TouchableOpacity
                      onPress={handleCalculate}
                      disabled={isCalculating}
                      activeOpacity={0.9}
                    >
                      <LinearGradient
                        colors={
                          isCalculating
                            ? ['#6b7280', '#9ca3af']
                            : ['#f59e0b', '#f97316', '#ec4899']
                        }
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.button}
                      >
                        <View style={styles.buttonContent}>
                          <Text style={styles.buttonIcon}>
                            {isCalculating ? '⏳' : '✨'}
                          </Text>
                          <Text style={styles.buttonText}>
                            {isCalculating
                              ? 'Calcul en cours...'
                              : 'Calculer / Calculate'}
                          </Text>
                        </View>
                      </LinearGradient>
                    </TouchableOpacity>

                    {/* Privacy Notice */}
                    <View style={styles.privacyNotice}>
                      <Text style={styles.privacyIcon}>🔒</Text>
                      <Text style={styles.privacyText}>
                        Calculs locaux uniquement • Aucune donnée envoyée
                      </Text>
                    </View>
                  </LinearGradient>
                </BlurView>
              </Animated.View>

              {/* Educational Notice */}
              <View style={styles.disclaimer}>
                <Text style={styles.disclaimerText}>
                  📚 Outil éducatif explorant les sciences islamiques traditionnelles
                </Text>
                <Text style={styles.disclaimerSubtext}>
                  Educational tool exploring traditional Islamic sciences
                </Text>
              </View>
            </Animated.View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1b4b',
  },
  gradient: {
    flex: 1,
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
  },
  content: {
    minHeight: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: '300',
    marginTop: -4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },
  headerRight: {
    width: 40,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  moonGlow: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  moonIcon: {
    fontSize: 60,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  titleArabic: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
  },
  divider: {
    width: 60,
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 2,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitleEn: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
  cardBlur: {
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 12,
  },
  card: {
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  inputSection: {
    marginBottom: 20,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
  },
  keyboardToggle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardToggleText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '700',
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#ffffff',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  inputFocused: {
    borderColor: 'rgba(251, 191, 36, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
  inputError: {
    borderColor: '#f87171',
    borderWidth: 2,
  },
  clearButton: {
    position: 'absolute',
    right: 12,
    top: 14,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  suggestionsContainer: {
    marginTop: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    overflow: 'hidden',
  },
  suggestion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  suggestionArabic: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },
  suggestionLatin: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: 'rgba(248, 113, 113, 0.15)',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(248, 113, 113, 0.3)',
  },
  errorIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  errorText: {
    fontSize: 13,
    color: '#fca5a5',
    flex: 1,
  },
  arabicKeyboard: {
    marginBottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 12,
    borderRadius: 12,
  },
  keyboardTitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 10,
    textAlign: 'center',
  },
  lettersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  letterButton: {
    width: 36,
    height: 36,
    margin: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  letterText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(59, 130, 246, 0.15)',
    padding: 14,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.3)',
  },
  infoIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoText: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 20,
    marginBottom: 6,
  },
  infoTextEn: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 18,
  },
  button: {
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 24,
    shadowColor: '#f59e0b',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    fontSize: 22,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#ffffff',
  },
  privacyNotice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  privacyIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  privacyText: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  disclaimer: {
    marginTop: 24,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  disclaimerText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginBottom: 4,
  },
  disclaimerSubtext: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
  },
});