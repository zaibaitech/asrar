import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { calculateIstikhara } from '../../features/istikhara/calculations';
import { getElementFromBuruj, ELEMENT_THEMES, COLORS } from '../../theme/istikharaTheme';
import IstikharaSummaryCard from '../../components/istikhara/IstikharaSummaryCard';
import { saveToHistory } from '../../utils/storage';
import OverviewTab from '../../components/istikhara/OverviewTab';
import PersonalityTab from '../../components/istikhara/PersonalityTab';
import CareerGuidanceTab from '../../components/istikhara/CareerGuidanceTab';
import BlessedDayTab from '../../components/istikhara/BlessedDayTab';
import SpiritualPracticeTab from '../../components/istikhara/SpiritualPracticeTab';

const Tab = createMaterialTopTabNavigator();

interface IstikharaResultsScreenProps {
  readonly route: any;
}

export default function IstikharaResultsScreen({ route }: Readonly<IstikharaResultsScreenProps>) {
  const { personName, motherName } = route.params;
  const result = calculateIstikhara(personName, motherName);
  const element = getElementFromBuruj(result.burujRemainder);
  const theme = ELEMENT_THEMES[element];

  useEffect(() => {
    saveToHistory(result);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={theme.gradient}
        style={styles.gradient}
      >
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[1]}
        >
          {/* Summary Card */}
          <IstikharaSummaryCard
            result={result}
            element={element}
            theme={theme}
          />

          {/* Tabs */}
          <View style={styles.tabsContainer}>
            <Tab.Navigator
              screenOptions={{
                tabBarScrollEnabled: true,
                tabBarActiveTintColor: theme.borderColor,
                tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
                tabBarIndicatorStyle: {
                  backgroundColor: theme.borderColor,
                  height: 3,
                },
                tabBarStyle: {
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  elevation: 0,
                  shadowOpacity: 0,
                },
                tabBarLabelStyle: {
                  fontSize: 12,
                  fontWeight: '600',
                  textTransform: 'none',
                },
                swipeEnabled: true,
              }}
            >
              <Tab.Screen name="Overview" options={{ title: '📋 Aperçu' }}>
                {() => (
                  <OverviewTab
                    result={result}
                    element={element}
                    theme={theme}
                  />
                )}
              </Tab.Screen>
              <Tab.Screen name="Personality" options={{ title: '🌟 Personnalité' }}>
                {() => (
                  <PersonalityTab
                    personality={result.burujProfile.personality}
                    theme={theme}
                  />
                )}
              </Tab.Screen>
              <Tab.Screen name="Career" options={{ title: '💼 Carrière' }}>
                {() => (
                  <CareerGuidanceTab
                    career={result.burujProfile.career}
                    theme={theme}
                  />
                )}
              </Tab.Screen>
              <Tab.Screen name="BlessedDay" options={{ title: '🌙 Jour Béni' }}>
                {() => (
                  <BlessedDayTab
                    blessedDay={result.burujProfile.blessed_day}
                    sadaqah={result.burujProfile.sadaqah}
                    theme={theme}
                  />
                )}
              </Tab.Screen>
              <Tab.Screen name="Spiritual" options={{ title: '🕌 Spirituel' }}>
                {() => (
                  <SpiritualPracticeTab
                    spiritual={result.burujProfile.spiritual_practice}
                    theme={theme}
                  />
                )}
              </Tab.Screen>
            </Tab.Navigator>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  tabsContainer: {
    flex: 1,
    height: 600, // Fixed height for tabs
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});
