import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ScrollView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import Svg, { Circle, G } from 'react-native-svg';
import * as Haptics from 'expo-haptics';
import { ElementTheme } from '../../features/istikhara/types';

const { width } = Dimensions.get('window');
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface DhikrCounterProps {
  readonly targetCount: number;
  readonly divineName: string;
  readonly theme: ElementTheme;
  readonly onComplete?: () => void;
}

type CountMode = 'manual' | 'auto';
type IntervalSpeed = 1000 | 2000 | 3000;

interface Achievement {
  milestone: number;
  label: string;
  emoji: string;
  unlocked: boolean;
}

interface Session {
  count: number;
  duration: number;
  timestamp: number;
  completed: boolean;
}

export default function DhikrCounter({
  targetCount,
  divineName,
  theme,
  onComplete,
}: Readonly<DhikrCounterProps>) {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState<CountMode>('manual');
  const [intervalSpeed, setIntervalSpeed] = useState<IntervalSpeed>(2000);
  const [isActive, setIsActive] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [totalLifetime, setTotalLifetime] = useState(0);
  const [streak, setStreak] = useState(0);

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const celebrationAnim = useRef(new Animated.Value(0)).current;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const progress = count / targetCount;
  const radius = 110;
  const strokeWidth = 14;
  const circumference = 2 * Math.PI * radius;

  // Achievement system
  const achievements: Achievement[] = [
    { milestone: Math.floor(targetCount * 0.25), label: '¼ Complete', emoji: '🌱', unlocked: count >= Math.floor(targetCount * 0.25) },
    { milestone: Math.floor(targetCount * 0.5), label: '½ Complete', emoji: '🌿', unlocked: count >= Math.floor(targetCount * 0.5) },
    { milestone: Math.floor(targetCount * 0.75), label: '¾ Complete', emoji: '🌳', unlocked: count >= Math.floor(targetCount * 0.75) },
    { milestone: targetCount, label: 'Completed!', emoji: '🌟', unlocked: count >= targetCount },
  ];

  // Progress animation
  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 300,
      useNativeDriver: false,
    }).start();

    // Milestone celebrations
    achievements.forEach((achievement) => {
      if (count === achievement.milestone && count > 0) {
        triggerCelebration();
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
    });

    // Completion
    if (count === targetCount && count > 0) {
      handleCompletion();
    }
  }, [count, targetCount]);

  // Pulse animation for manual mode
  useEffect(() => {
    if (mode === 'manual' && count < targetCount) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.05,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [mode, count]);

  // Auto mode interval
  useEffect(() => {
    if (mode === 'auto' && isActive && count < targetCount) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => {
          if (prev < targetCount) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            return prev + 1;
          }
          return prev;
        });
      }, intervalSpeed);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [mode, isActive, intervalSpeed, targetCount, count]);

  const triggerCelebration = () => {
    celebrationAnim.setValue(0);
    Animated.spring(celebrationAnim, {
      toValue: 1,
      tension: 50,
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(celebrationAnim, {
        toValue: 0,
        duration: 500,
        delay: 1000,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleCompletion = () => {
    setIsActive(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Save session
    const duration = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;
    const newSession: Session = {
      count: targetCount,
      duration,
      timestamp: Date.now(),
      completed: true,
    };
    
    setSessions([newSession, ...sessions.slice(0, 9)]); // Keep last 10
    setTotalLifetime(totalLifetime + targetCount);
    setStreak(streak + 1);

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    triggerCelebration();
    onComplete?.();
  };

  const handleManualIncrement = () => {
    if (count < targetCount) {
      setCount(count + 1);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

      // Button press animation
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 0.92,
          duration: 80,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 100,
          friction: 3,
          useNativeDriver: true,
        }),
      ]).start();

      if (!startTime) {
        setStartTime(Date.now());
      }
    }
  };

  const handleReset = () => {
    // Save incomplete session if progress made
    if (count > 0 && startTime) {
      const duration = Math.floor((Date.now() - startTime) / 1000);
      const newSession: Session = {
        count,
        duration,
        timestamp: Date.now(),
        completed: false,
      };
      setSessions([newSession, ...sessions.slice(0, 9)]);
      setTotalLifetime(totalLifetime + count);
    }

    setCount(0);
    setIsActive(false);
    setStartTime(null);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
  };

  const toggleAutoMode = () => {
    setIsActive(!isActive);
    if (!startTime && !isActive) {
      setStartTime(Date.now());
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const strokeDashoffset = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  const elapsedTime = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;
  const pace = count > 0 && elapsedTime > 0 ? (count / elapsedTime).toFixed(2) : '0.00';
  const estimatedCompletion = count > 0 && elapsedTime > 0 
    ? Math.ceil(((targetCount - count) * elapsedTime) / count)
    : 0;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  const celebrationScale = celebrationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const celebrationOpacity = celebrationAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {/* Header */}
        <BlurView intensity={15} tint="dark" style={styles.headerBlur}>
          <LinearGradient
            colors={theme.gradient}
            style={styles.header}
          >
            <Text style={styles.headerIcon}>📿</Text>
            <Text style={styles.headerTitle}>Compteur de Dhikr</Text>
            <Text style={styles.headerSubtitle}>{divineName}</Text>
          </LinearGradient>
        </BlurView>

        {/* Circular Progress */}
        <View style={styles.circleSection}>
          <View style={styles.circleContainer}>
            <Svg width={radius * 2 + strokeWidth * 2} height={radius * 2 + strokeWidth * 2}>
              <G rotation="-90" origin={`${radius + strokeWidth}, ${radius + strokeWidth}`}>
                {/* Background Circle */}
                <Circle
                  cx={radius + strokeWidth}
                  cy={radius + strokeWidth}
                  r={radius}
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth={strokeWidth}
                  fill="none"
                />
                {/* Progress Circle */}
                <AnimatedCircle
                  cx={radius + strokeWidth}
                  cy={radius + strokeWidth}
                  r={radius}
                  stroke={theme.progressColor}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </G>
            </Svg>

            {/* Center Content */}
            <View style={styles.centerContent}>
              <Text style={styles.countText}>{count}</Text>
              <Text style={styles.targetText}>/ {targetCount}</Text>
              <View style={styles.percentBadge}>
                <Text style={styles.percentText}>{Math.round(progress * 100)}%</Text>
              </View>
            </View>

            {/* Celebration Overlay */}
            <Animated.View
              style={[
                styles.celebrationOverlay,
                {
                  opacity: celebrationOpacity,
                  transform: [{ scale: celebrationScale }],
                },
              ]}
              pointerEvents="none"
            >
              <Text style={styles.celebrationEmoji}>
                {achievements.find(a => a.unlocked && a.milestone === count)?.emoji}
              </Text>
            </Animated.View>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBarTrack}>
              <Animated.View
                style={[
                  styles.progressBarFill,
                  {
                    width: progressAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0%', '100%'],
                    }),
                    backgroundColor: theme.progressColor,
                  },
                ]}
              />
            </View>
            <Text style={styles.progressBarText}>
              {count} / {targetCount} répétitions
            </Text>
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.achievementsSection}>
          <Text style={styles.sectionTitle}>🏆 Jalons</Text>
          <View style={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <View
                key={index}
                style={[
                  styles.achievementCard,
                  achievement.unlocked && styles.achievementCardUnlocked,
                ]}
              >
                <Text style={[
                  styles.achievementEmoji,
                  !achievement.unlocked && styles.achievementLocked,
                ]}>
                  {achievement.emoji}
                </Text>
                <Text style={[
                  styles.achievementLabel,
                  achievement.unlocked && styles.achievementLabelUnlocked,
                ]}>
                  {achievement.label}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Mode Toggle */}
        <View style={styles.modeSection}>
          <View style={styles.modeToggle}>
            <TouchableOpacity
              style={[styles.modeButton, mode === 'manual' && styles.modeButtonActive]}
              onPress={() => {
                setMode('manual');
                setIsActive(false);
                Haptics.selectionAsync();
              }}
            >
              <Text style={styles.modeIcon}>✋</Text>
              <Text style={[styles.modeButtonText, mode === 'manual' && styles.modeButtonTextActive]}>
                Manuel
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.modeButton, mode === 'auto' && styles.modeButtonActive]}
              onPress={() => {
                setMode('auto');
                Haptics.selectionAsync();
              }}
            >
              <Text style={styles.modeIcon}>⏱️</Text>
              <Text style={[styles.modeButtonText, mode === 'auto' && styles.modeButtonTextActive]}>
                Auto
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Auto Mode Controls */}
        {mode === 'auto' && (
          <BlurView intensity={15} tint="dark" style={styles.autoControlsBlur}>
            <View style={styles.autoControls}>
              <Text style={styles.controlLabel}>Vitesse de récitation</Text>
              <View style={styles.intervalButtons}>
                {([1000, 2000, 3000] as IntervalSpeed[]).map((speed) => (
                  <TouchableOpacity
                    key={speed}
                    style={[
                      styles.intervalButton,
                      intervalSpeed === speed && {
                        backgroundColor: theme.progressColor,
                        borderColor: theme.progressColor,
                      },
                    ]}
                    onPress={() => {
                      setIntervalSpeed(speed);
                      Haptics.selectionAsync();
                    }}
                  >
                    <Text
                      style={[
                        styles.intervalButtonText,
                        intervalSpeed === speed && styles.intervalButtonTextActive,
                      ]}
                    >
                      {speed / 1000}s
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <TouchableOpacity
                onPress={toggleAutoMode}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={isActive 
                    ? ['rgba(239, 68, 68, 0.8)', 'rgba(220, 38, 38, 0.6)']
                    : theme.gradient
                  }
                  style={styles.autoButton}
                >
                  <Text style={styles.autoButtonText}>
                    {isActive ? '⏸️ Pause' : '▶️ Démarrer'}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </BlurView>
        )}

        {/* Manual Mode Button */}
        {mode === 'manual' && (
          <TouchableOpacity
            onPress={handleManualIncrement}
            activeOpacity={0.8}
            disabled={count >= targetCount}
          >
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
              <LinearGradient
                colors={count >= targetCount 
                  ? ['rgba(34, 197, 94, 0.8)', 'rgba(21, 128, 61, 0.6)']
                  : theme.gradient
                }
                style={styles.tapButton}
              >
                <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
                  <Text style={styles.tapButtonEmoji}>
                    {count >= targetCount ? '✅' : '📿'}
                  </Text>
                </Animated.View>
                <Text style={styles.tapButtonText}>
                  {count >= targetCount ? 'Alhamdulillah!' : 'Appuyez pour compter'}
                </Text>
              </LinearGradient>
            </Animated.View>
          </TouchableOpacity>
        )}

        {/* Stats Dashboard */}
        <BlurView intensity={15} tint="dark" style={styles.statsBlur}>
          <View style={styles.statsContainer}>
            <Text style={styles.sectionTitle}>📊 Statistiques</Text>
            
            <View style={styles.statsGrid}>
              <View style={styles.statCard}>
                <Text style={styles.statIcon}>⏱️</Text>
                <Text style={styles.statValue}>{formatTime(elapsedTime)}</Text>
                <Text style={styles.statLabel}>Durée</Text>
              </View>

              <View style={styles.statCard}>
                <Text style={styles.statIcon}>⚡</Text>
                <Text style={styles.statValue}>{pace}/s</Text>
                <Text style={styles.statLabel}>Rythme</Text>
              </View>

              <View style={styles.statCard}>
                <Text style={styles.statIcon}>🎯</Text>
                <Text style={styles.statValue}>{targetCount - count}</Text>
                <Text style={styles.statLabel}>Restant</Text>
              </View>

              <View style={styles.statCard}>
                <Text style={styles.statIcon}>⏳</Text>
                <Text style={styles.statValue}>{formatTime(estimatedCompletion)}</Text>
                <Text style={styles.statLabel}>Estimé</Text>
              </View>
            </View>

            {/* Lifetime Stats */}
            {totalLifetime > 0 && (
              <View style={styles.lifetimeStats}>
                <View style={styles.lifetimeStat}>
                  <Text style={styles.lifetimeLabel}>Total à vie</Text>
                  <Text style={styles.lifetimeValue}>{totalLifetime.toLocaleString()}</Text>
                </View>
                <View style={styles.lifetimeStat}>
                  <Text style={styles.lifetimeLabel}>Série</Text>
                  <Text style={styles.lifetimeValue}>🔥 {streak}</Text>
                </View>
              </View>
            )}
          </View>
        </BlurView>

        {/* Session History */}
        {sessions.length > 0 && (
          <View style={styles.historySection}>
            <TouchableOpacity
              style={styles.historyHeader}
              onPress={() => {
                setShowHistory(!showHistory);
                Haptics.selectionAsync();
              }}
            >
              <Text style={styles.sectionTitle}>📜 Historique</Text>
              <Text style={styles.historyToggle}>
                {showHistory ? '▼' : '▶'}
              </Text>
            </TouchableOpacity>

            {showHistory && (
              <View style={styles.historyList}>
                {sessions.map((session, index) => (
                  <View key={index} style={styles.historyItem}>
                    <View style={styles.historyInfo}>
                      <Text style={styles.historyIcon}>
                        {session.completed ? '✅' : '⏸️'}
                      </Text>
                      <View style={styles.historyDetails}>
                        <Text style={styles.historyCount}>
                          {session.count} répétitions
                        </Text>
                        <Text style={styles.historyMeta}>
                          {formatTime(session.duration)} • {new Date(session.timestamp).toLocaleDateString('fr-FR')}
                        </Text>
                      </View>
                    </View>
                    <Text style={[
                      styles.historyStatus,
                      session.completed && styles.historyStatusComplete,
                    ]}>
                      {session.completed ? 'Terminé' : 'Incomplet'}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleReset}
          >
            <Text style={styles.resetButtonText}>🔄 Réinitialiser</Text>
          </TouchableOpacity>
        </View>

        {/* Spacer */}
        <View style={styles.bottomSpacer} />
      </View>
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
  headerBlur: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  headerIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },

  // Circle Progress
  circleSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  circleContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  centerContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 52,
    color: '#ffffff',
    fontWeight: '700',
  },
  targetText: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 8,
  },
  percentBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  percentText: {
    fontSize: 13,
    color: '#ffffff',
    fontWeight: '600',
  },

  // Celebration
  celebrationOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  celebrationEmoji: {
    fontSize: 80,
  },

  // Progress Bar
  progressBarContainer: {
    width: '100%',
    alignItems: 'center',
  },
  progressBarTrack: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressBarText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },

  // Achievements
  achievementsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 12,
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  achievementCard: {
    width: (width - 52) / 4,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  achievementCardUnlocked: {
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
    borderColor: 'rgba(251, 191, 36, 0.4)',
  },
  achievementEmoji: {
    fontSize: 24,
    marginBottom: 6,
  },
  achievementLocked: {
    opacity: 0.3,
  },
  achievementLabel: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
  },
  achievementLabelUnlocked: {
    color: '#ffffff',
    fontWeight: '600',
  },

  // Mode Toggle
  modeSection: {
    marginBottom: 20,
  },
  modeToggle: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 16,
    padding: 4,
  },
  modeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    gap: 6,
  },
  modeButtonActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  modeIcon: {
    fontSize: 18,
  },
  modeButtonText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  modeButtonTextActive: {
    color: '#ffffff',
    fontWeight: '600',
  },

  // Auto Controls
  autoControlsBlur: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  autoControls: {
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  controlLabel: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 10,
    textAlign: 'center',
  },
  intervalButtons: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
    justifyContent: 'center',
  },
  intervalButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  intervalButtonText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  intervalButtonTextActive: {
    color: '#ffffff',
    fontWeight: '600',
  },
  autoButton: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  autoButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },

  // Manual Tap Button
  tapButton: {
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  tapButtonEmoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  tapButtonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '700',
  },

  // Stats
  statsBlur: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  statsContainer: {
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 16,
  },
  statCard: {
    width: (width - 72) / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  statIcon: {
    fontSize: 24,
    marginBottom: 6,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  lifetimeStats: {
    flexDirection: 'row',
    gap: 12,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  lifetimeStat: {
    flex: 1,
    alignItems: 'center',
  },
  lifetimeLabel: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 4,
  },
  lifetimeValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },

  // History
  historySection: {
    marginBottom: 20,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  historyToggle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  historyList: {
    gap: 10,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  historyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  historyIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  historyDetails: {
    flex: 1,
  },
  historyCount: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 2,
  },
  historyMeta: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  historyStatus: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  historyStatusComplete: {
    color: 'rgba(34, 197, 94, 0.9)',
    fontWeight: '600',
  },

  // Actions
  actionButtons: {
    alignItems: 'center',
  },
  resetButton: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  resetButtonText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
  },

  bottomSpacer: {
    height: 40,
  },
});