import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, SPACING, RADIUS, TYPOGRAPHY } from '../../theme/istikharaTheme';
import { CareerGuidance, ElementTheme } from '../../features/istikhara/types';

interface CareerGuidanceTabProps {
  readonly career: CareerGuidance;
  readonly theme: ElementTheme;
}

export default function CareerGuidanceTab({ career, theme }: Readonly<CareerGuidanceTabProps>) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Traditional Careers */}
      <View style={[styles.card, { backgroundColor: theme.accentBg, borderColor: theme.borderColor }]}>
        <Text style={styles.cardTitle}>🏛️ Carrières Traditionnelles</Text>
        <Text style={styles.bilingualText}>{career.traditional.fr}</Text>
        <Text style={styles.bilingualTextEn}>{career.traditional.en}</Text>
      </View>

      {/* Modern Recommended */}
      <View style={[styles.card, { backgroundColor: theme.accentBg, borderColor: theme.borderColor }]}>
        <Text style={styles.cardTitle}>💻 Carrières Modernes Recommandées</Text>
        {career.modern_recommended.fr.map((category) => (
          <View key={category.category} style={styles.categorySection}>
            <Text style={styles.categoryTitle}>
              {category.icon} {category.category}
            </Text>
            <View style={styles.itemsList}>
              {category.items.map((item) => (
                <Text key={item} style={styles.item}>
                  • {item}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Avoid */}
      <View style={[styles.card, { backgroundColor: 'rgba(239, 68, 68, 0.1)', borderColor: '#ef4444' }]}>
        <Text style={styles.cardTitle}>⚠️ Carrières à Éviter</Text>
        <Text style={styles.avoidItem}>{career.avoid.modern.fr}</Text>
      </View>

      {/* Career Principle */}
      {career.principle && (
        <View style={[styles.card, { backgroundColor: theme.accentBg, borderColor: theme.borderColor }]}>
          <Text style={styles.cardTitle}>💡 Principe de Carrière</Text>
          <Text style={styles.bilingualText}>
            {career.principle.fr}
          </Text>
          <Text style={styles.bilingualTextEn}>
            {career.principle.en}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  content: {
    padding: SPACING.md,
  },
  card: {
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
  },
  cardTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text.primary,
    marginBottom: SPACING.md,
    fontWeight: '600',
  },
  categorySection: {
    marginBottom: SPACING.md,
  },
  categoryTitle: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text.primary,
    fontWeight: '600',
    marginBottom: SPACING.sm,
  },
  itemsList: {
    marginLeft: SPACING.sm,
  },
  item: {
    ...TYPOGRAPHY.body,
    color: COLORS.text.secondary,
    lineHeight: 22,
    marginBottom: SPACING.xs,
  },
  avoidItem: {
    ...TYPOGRAPHY.body,
    color: '#fca5a5',
    lineHeight: 22,
    marginBottom: SPACING.xs,
  },
  bilingualText: {
    ...TYPOGRAPHY.body,
    color: COLORS.text.primary,
    lineHeight: 22,
    marginBottom: SPACING.xs,
  },
  bilingualTextEn: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text.secondary,
    lineHeight: 20,
    fontStyle: 'italic',
  },
});
