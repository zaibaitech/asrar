import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import * as Location from 'expo-location';
import { COLORS, SPACING, RADIUS, TYPOGRAPHY } from '../../theme/istikharaTheme';
import { ElementType, ElementTheme } from '../../features/istikhara/types';

interface PlanetInfo {
  name: string;
  nameArabic: string;
  element: ElementType;
  emoji: string;
}

interface PlanetaryHour {
  planet: PlanetInfo;
  startTime: Date;
  endTime: Date;
  isCurrent: boolean;
  isDayHour: boolean;
}

interface PreciseTimingGuidanceProps {
  element: ElementType;
  theme: ElementTheme;
}

const PLANETS: Record<string, PlanetInfo> = {
  Sun: { name: 'Sun', nameArabic: 'الشمس', element: 'fire', emoji: '☀️' },
  Moon: { name: 'Moon', nameArabic: 'القمر', element: 'water', emoji: '🌙' },
  Mars: { name: 'Mars', nameArabic: 'المريخ', element: 'fire', emoji: '♂️' },
  Mercury: { name: 'Mercury', nameArabic: 'عطارد', element: 'air', emoji: '☿️' },
  Jupiter: { name: 'Jupiter', nameArabic: 'المشتري', element: 'fire', emoji: '♃' },
  Venus: { name: 'Venus', nameArabic: 'الزهرة', element: 'earth', emoji: '♀️' },
  Saturn: { name: 'Saturn', nameArabic: 'زحل', element: 'earth', emoji: '♄' },
};

// Planetary sequences by day of week (Sunday = 0)
const PLANETARY_SEQUENCES = [
  ['Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury'],
  ['Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter'],
  ['Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus'],
  ['Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn'],
  ['Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun'],
  ['Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon'],
  ['Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars'],
];

// Simple sunrise/sunset calculation (approximation)
function calculateSunTimes(date: Date, lat: number, lon: number) {
  // This is a simplified version - for production, use a library like suncalc
  // For now, using rough estimates based on latitude
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  const declination = -23.44 * Math.cos((2 * Math.PI * (dayOfYear + 10)) / 365);
  
  // Rough hour angle calculation
  const hourAngle = Math.acos(-Math.tan(lat * Math.PI / 180) * Math.tan(declination * Math.PI / 180));
  const sunriseHour = 12 - (hourAngle * 12 / Math.PI);
  const sunsetHour = 12 + (hourAngle * 12 / Math.PI);
  
  const sunrise = new Date(date);
  sunrise.setHours(Math.floor(sunriseHour), Math.round((sunriseHour % 1) * 60), 0, 0);
  
  const sunset = new Date(date);
  sunset.setHours(Math.floor(sunsetHour), Math.round((sunsetHour % 1) * 60), 0, 0);
  
  return { sunrise, sunset };
}

function calculatePlanetaryHours(date: Date, lat: number, lon: number): PlanetaryHour[] {
  const { sunrise, sunset } = calculateSunTimes(date, lat, lon);
  
  const dayDuration = sunset.getTime() - sunrise.getTime();
  const dayHourLength = dayDuration / 12;
  
  // Next sunrise
  const nextDay = new Date(date);
  nextDay.setDate(nextDay.getDate() + 1);
  const nextSunrise = calculateSunTimes(nextDay, lat, lon).sunrise;
  const nightDuration = nextSunrise.getTime() - sunset.getTime();
  const nightHourLength = nightDuration / 12;
  
  const dayOfWeek = date.getDay();
  const sequence = PLANETARY_SEQUENCES[dayOfWeek];
  
  const hours: PlanetaryHour[] = [];
  const now = Date.now();
  
  // Day hours
  for (let i = 0; i < 12; i++) {
    const startTime = new Date(sunrise.getTime() + i * dayHourLength);
    const endTime = new Date(sunrise.getTime() + (i + 1) * dayHourLength);
    hours.push({
      planet: PLANETS[sequence[i]],
      startTime,
      endTime,
      isCurrent: now >= startTime.getTime() && now < endTime.getTime(),
      isDayHour: true,
    });
  }
  
  // Night hours
  for (let i = 0; i < 12; i++) {
    const startTime = new Date(sunset.getTime() + i * nightHourLength);
    const endTime = new Date(sunset.getTime() + (i + 1) * nightHourLength);
    hours.push({
      planet: PLANETS[sequence[i + 12]],
      startTime,
      endTime,
      isCurrent: now >= startTime.getTime() && now < endTime.getTime(),
      isDayHour: false,
    });
  }
  
  return hours;
}

export default function PreciseTimingGuidance({ element, theme }: Readonly<PreciseTimingGuidanceProps>) {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [hours, setHours] = useState<PlanetaryHour[]>([]);
  const [currentHour, setCurrentHour] = useState<PlanetaryHour | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestLocation();
  }, []);

  useEffect(() => {
    if (location) {
      updateHours();
      const interval = setInterval(updateHours, 60000); // Update every minute
      return () => clearInterval(interval);
    }
  }, [location]);

  const requestLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission requise',
          'La localisation est nécessaire pour calculer les heures planétaires précises.'
        );
        // Use default location (e.g., Casablanca)
        setLocation({ latitude: 33.5731, longitude: -7.5898 });
        setLoading(false);
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });
      setLoading(false);
    } catch (error) {
      console.error('Location error:', error);
      // Use default location
      setLocation({ latitude: 33.5731, longitude: -7.5898 });
      setLoading(false);
    }
  };

  const updateHours = () => {
    if (!location) return;

    const planetaryHours = calculatePlanetaryHours(new Date(), location.latitude, location.longitude);
    setHours(planetaryHours);

    const current = planetaryHours.find((h) => h.isCurrent);
    setCurrentHour(current || null);
  };

  const getMatchingHours = () => {
    return hours.filter((h) => h.planet.element === element);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  const getCountdown = () => {
    if (!currentHour) return '';
    const remaining = currentHour.endTime.getTime() - Date.now();
    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
  };

  const matchingHours = getMatchingHours();

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>🌍 Calcul des heures planétaires...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Current Hour */}
      {currentHour && (
        <View style={[styles.card, { backgroundColor: theme.accentBg, borderColor: theme.borderColor }]}>
          <Text style={styles.cardTitle}>⏰ Heure Planétaire Actuelle</Text>
          <View style={styles.currentHourContent}>
            <Text style={styles.planetEmoji}>{currentHour.planet.emoji}</Text>
            <Text style={styles.planetName}>{currentHour.planet.name}</Text>
            <Text style={styles.planetNameArabic}>{currentHour.planet.nameArabic}</Text>
            <Text style={styles.timeRange}>
              {formatTime(currentHour.startTime)} - {formatTime(currentHour.endTime)}
            </Text>
            <Text style={styles.countdown}>⏱️ {getCountdown()}</Text>
          </View>
        </View>
      )}

      {/* Element Matching Hours */}
      <View style={[styles.card, { backgroundColor: theme.accentBg, borderColor: theme.borderColor }]}>
        <Text style={styles.cardTitle}>
          {theme.emoji} Heures Alignées avec Votre Élément ({element.toUpperCase()})
        </Text>
        {matchingHours.length > 0 ? (
          <View style={styles.hoursList}>
            {matchingHours.map((hour) => (
              <View
                key={`${hour.planet.name}-${hour.startTime.getTime()}`}
                style={[
                  styles.hourItem,
                  hour.isCurrent && { backgroundColor: theme.borderColor, borderColor: theme.textColor },
                ]}
              >
                <Text style={styles.hourEmoji}>{hour.planet.emoji}</Text>
                <View style={styles.hourInfo}>
                  <Text style={styles.hourPlanet}>{hour.planet.name}</Text>
                  <Text style={styles.hourTime}>
                    {formatTime(hour.startTime)} - {formatTime(hour.endTime)}
                  </Text>
                  <Text style={styles.hourType}>
                    {hour.isDayHour ? '☀️ Jour' : '🌙 Nuit'}
                  </Text>
                </View>
                {hour.isCurrent && (
                  <Text style={styles.currentBadge}>EN COURS</Text>
                )}
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.noHoursText}>
            Aucune heure planétaire alignée aujourd'hui
          </Text>
        )}
      </View>

      {/* Explanation */}
      <View style={[styles.card, { backgroundColor: 'rgba(0, 0, 0, 0.3)' }]}>
        <Text style={styles.cardTitle}>ℹ️ À Propos des Heures Planétaires</Text>
        <Text style={styles.explanationText}>
          Les heures planétaires divisent le jour et la nuit en 12 segments égaux, chacun
          gouverné par une planète spécifique. Les heures alignées avec votre élément sont
          particulièrement propices pour vos pratiques spirituelles.
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
  loadingText: {
    ...TYPOGRAPHY.body,
    color: COLORS.text.primary,
    textAlign: 'center',
    marginTop: SPACING.xxl,
  },
  card: {
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  cardTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text.primary,
    marginBottom: SPACING.md,
    fontWeight: '600',
  },
  currentHourContent: {
    alignItems: 'center',
  },
  planetEmoji: {
    fontSize: 48,
    marginBottom: SPACING.sm,
  },
  planetName: {
    ...TYPOGRAPHY.h2,
    color: COLORS.text.primary,
    marginBottom: SPACING.xs,
  },
  planetNameArabic: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text.secondary,
    marginBottom: SPACING.sm,
  },
  timeRange: {
    ...TYPOGRAPHY.body,
    color: COLORS.text.secondary,
    marginBottom: SPACING.xs,
  },
  countdown: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text.primary,
    fontWeight: '700',
  },
  hoursList: {
    gap: SPACING.sm,
  },
  hourItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  hourEmoji: {
    fontSize: 32,
    marginRight: SPACING.md,
  },
  hourInfo: {
    flex: 1,
  },
  hourPlanet: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text.primary,
    fontWeight: '600',
  },
  hourTime: {
    ...TYPOGRAPHY.caption,
    color: COLORS.text.secondary,
  },
  hourType: {
    ...TYPOGRAPHY.caption,
    color: COLORS.text.muted,
  },
  currentBadge: {
    ...TYPOGRAPHY.caption,
    color: COLORS.text.primary,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: RADIUS.sm,
    fontWeight: '700',
  },
  noHoursText: {
    ...TYPOGRAPHY.body,
    color: COLORS.text.muted,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  explanationText: {
    ...TYPOGRAPHY.body,
    color: COLORS.text.secondary,
    lineHeight: 22,
  },
});
