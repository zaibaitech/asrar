import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle } from 'react-native-svg';
import { COLORS, SPACING, RADIUS, TYPOGRAPHY } from '../../theme/istikharaTheme';
import { IstikharaCalculationResult, ElementType, ElementTheme } from '../../features/istikhara/types';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface IstikharaSummaryCardProps {
  readonly result: IstikharaCalculationResult;
  readonly element: ElementType;
  readonly theme: ElementTheme;
}

export default function IstikharaSummaryCard({
  result,
  element,
  theme,
}: Readonly<IstikharaSummaryCardProps>) {
  const progressAnim = useRef(new Animated.Value(0)).current;

  // Calculate stroke dashoffset for circular progress
  const radius = 80;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;

  // Normalized score (0-1 based on combined total, max 999)
  const normalizedScore = Math.min(result.combinedTotal / 999, 1);

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: normalizedScore,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [normalizedScore]);

  const strokeDashoffset = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  return (
    <View style={styles.container}>
      {/* Main Card */}
      <LinearGradient
        colors={theme.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        {/* Circular Progress Ring */}
        <View style={styles.circleContainer}>
          <Svg width={radius * 2 + strokeWidth * 2} height={radius * 2 + strokeWidth * 2}>
            {/* Background Circle */}
            <Circle
              cx={radius + strokeWidth}
              cy={radius + strokeWidth}
              r={radius}
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth={strokeWidth}
              fill="none"
            />
            {/* Progress Circle */}
            <AnimatedCircle
              cx={radius + strokeWidth}
              cy={radius + strokeWidth}
              r={radius}
              stroke={theme.borderColor}
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              rotation="-90"
              origin={`${radius + strokeWidth}, ${radius + strokeWidth}`}
            />
          </Svg>

          {/* Center Content */}
          <View style={styles.centerContent}>
            <Text style={styles.emoji}>{theme.emoji}</Text>
            <Text style={[styles.burujText, { color: theme.borderColor }]}>
              Buruj #{result.burujRemainder}
            </Text>
            <Text style={styles.elementText}>{element.toUpperCase()}</Text>
          </View>
        </View>

        {/* Names Section */}
        <View style={styles.namesContainer}>
          <View style={styles.nameCard}>
            <Text style={styles.nameLabel}>Votre Nom</Text>
            <Text style={styles.nameValue}>{result.personName}</Text>
            <Text style={styles.numberValue}>{result.personTotal}</Text>
          </View>

          <Text style={styles.plusSymbol}>+</Text>

          <View style={styles.nameCard}>
            <Text style={styles.nameLabel}>Nom de la Mère</Text>
            <Text style={styles.nameValue}>{result.motherName}</Text>
            <Text style={styles.numberValue}>{result.motherTotal}</Text>
          </View>
        </View>

        {/* Combined Total */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total Combiné</Text>
          <Text style={[styles.totalValue, { color: theme.borderColor }]}>
            {result.combinedTotal}
          </Text>
        </View>

        {/* Repetition Count */}
        <View style={styles.repetitionContainer}>
          <Text style={styles.repetitionLabel}>
            📿 Répétition du Nom Divin
          </Text>
          <Text style={[styles.repetitionValue, { color: theme.textColor }]}>
            {result.repetitionCount} fois
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.lg,
  },
  card: {
    borderRadius: RADIUS.xl,
    padding: SPACING.lg,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  circleContainer: {
    position: 'relative',
    marginBottom: SPACING.xl,
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
  emoji: {
    fontSize: 48,
    marginBottom: SPACING.xs,
  },
  burujText: {
    ...TYPOGRAPHY.h2,
    fontWeight: '700',
  },
  elementText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.text.secondary,
    letterSpacing: 1,
  },
  namesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: SPACING.lg,
  },
  nameCard: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  nameLabel: {
    ...TYPOGRAPHY.caption,
    color: COLORS.text.muted,
    marginBottom: SPACING.xs,
  },
  nameValue: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text.primary,
    fontWeight: '600',
    marginBottom: SPACING.xs,
  },
  numberValue: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text.primary,
    fontWeight: '700',
  },
  plusSymbol: {
    ...TYPOGRAPHY.h2,
    color: COLORS.text.secondary,
    marginHorizontal: SPACING.sm,
  },
  totalContainer: {
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  totalLabel: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text.secondary,
    marginBottom: SPACING.xs,
  },
  totalValue: {
    ...TYPOGRAPHY.h1,
    fontWeight: '700',
  },
  repetitionContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    alignItems: 'center',
  },
  repetitionLabel: {
    ...TYPOGRAPHY.caption,
    color: COLORS.text.muted,
    marginBottom: SPACING.xs,
  },
  repetitionValue: {
    ...TYPOGRAPHY.body,
    fontWeight: '600',
  },
});
