import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, SPACING, RADIUS, TYPOGRAPHY } from '../../theme/istikharaTheme';
import { BlessedDay, SadaqahPractices, ElementTheme } from '../../features/istikhara/types';

interface BlessedDayTabProps {
  readonly blessedDay: BlessedDay;
  readonly sadaqah: SadaqahPractices;
  readonly theme: ElementTheme;
}

export default function BlessedDayTab({ blessedDay, sadaqah, theme }: Readonly<BlessedDayTabProps>) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Blessed Day */}
      <View style={[styles.card, { backgroundColor: theme.accentBg, borderColor: theme.borderColor }]}>
        <Text style={styles.cardTitle}>🌙 Jour Béni</Text>
        <Text style={styles.dayText}>
          {blessedDay.day.fr} / {blessedDay.day.en}
        </Text>
        {blessedDay.day_number && (
          <Text style={styles.dayNumber}>
            Jour #{blessedDay.day_number}
          </Text>
        )}
      </View>

      {/* Best For */}
      <View style={[styles.card, { backgroundColor: theme.accentBg, borderColor: theme.borderColor }]}>
        <Text style={styles.cardTitle}>✨ Meilleur Pour</Text>
        <View style={styles.itemsList}>
          {blessedDay.best_for.fr.map((item) => (
            <Text key={item} style={styles.item}>
              • {item}
            </Text>
          ))}
        </View>
      </View>

      {/* Associated Prophet */}
      {blessedDay.associated_prophet && (
        <View style={[styles.card, { backgroundColor: theme.accentBg, borderColor: theme.borderColor }]}>
          <Text style={styles.cardTitle}>🕌 Prophète Associé</Text>
          <Text style={styles.bilingualText}>
            {blessedDay.associated_prophet.fr}
          </Text>
          <Text style={styles.bilingualTextEn}>
            {blessedDay.associated_prophet.en}
          </Text>
        </View>
      )}

      {/* Monthly Sadaqah */}
      <View style={[styles.card, { backgroundColor: theme.accentBg, borderColor: theme.borderColor }]}>
        <Text style={styles.cardTitle}>💰 Sadaqah Mensuelle</Text>
        <Text style={styles.bilingualText}>
          {sadaqah.monthly.traditional.fr}
        </Text>
        <Text style={styles.bilingualTextEn}>
          {sadaqah.monthly.traditional.en}
        </Text>
      </View>

      {/* Lifetime Sadaqah */}
      <View style={[styles.card, { backgroundColor: theme.accentBg, borderColor: theme.borderColor }]}>
        <Text style={styles.cardTitle}>🌟 Sadaqah à Vie</Text>
        <Text style={styles.bilingualText}>
          {sadaqah.lifetime.traditional.fr}
        </Text>
        <Text style={styles.bilingualTextEn}>
          {sadaqah.lifetime.traditional.en}
        </Text>
      </View>
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
    marginBottom: SPACING.sm,
    fontWeight: '600',
  },
  dayText: {
    ...TYPOGRAPHY.h2,
    color: COLORS.text.primary,
    marginBottom: SPACING.xs,
  },
  dayNumber: {
    ...TYPOGRAPHY.body,
    color: COLORS.text.secondary,
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
