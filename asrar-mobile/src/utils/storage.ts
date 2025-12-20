import AsyncStorage from '@react-native-async-storage/async-storage';
import { IstikharaCalculationResult } from '../features/istikhara/types';

const STORAGE_KEYS = {
  ISTIKHARA_HISTORY: '@asrar_istikhara_history',
  DHIKR_PROGRESS: '@asrar_dhikr_progress',
  DHIKR_HISTORY: '@asrar_dhikr_history',
  USER_LOCATION: '@asrar_user_location',
};

interface DhikrProgress {
  count: number;
  targetCount: number;
  divineName: string;
  startTime: number;
  lastUpdate: number;
}

interface DhikrSession {
  id: string;
  divineName: string;
  targetCount: number;
  completedCount: number;
  startTime: number;
  endTime: number;
  duration: number; // in seconds
  pace: number; // counts per second
}

interface UserLocation {
  latitude: number;
  longitude: number;
  timestamp: number;
}

// ============================================================================
// Istikhara History
// ============================================================================

export async function saveToHistory(result: IstikharaCalculationResult): Promise<void> {
  try {
    const history = await getHistory();
    const newEntry = {
      ...result,
      timestamp: Date.now(),
    };
    
    // Keep only last 10 entries
    const updatedHistory = [newEntry, ...history].slice(0, 10);
    await AsyncStorage.setItem(STORAGE_KEYS.ISTIKHARA_HISTORY, JSON.stringify(updatedHistory));
  } catch (error) {
    console.error('Error saving to history:', error);
  }
}

export async function getHistory(): Promise<(IstikharaCalculationResult & { timestamp: number })[]> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.ISTIKHARA_HISTORY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting history:', error);
    return [];
  }
}

export async function clearHistory(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_KEYS.ISTIKHARA_HISTORY);
  } catch (error) {
    console.error('Error clearing history:', error);
  }
}

// ============================================================================
// Dhikr Progress
// ============================================================================

export async function saveDhikrProgress(progress: DhikrProgress): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.DHIKR_PROGRESS, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving dhikr progress:', error);
  }
}

export async function getDhikrProgress(): Promise<DhikrProgress | null> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.DHIKR_PROGRESS);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error getting dhikr progress:', error);
    return null;
  }
}

export async function clearDhikrProgress(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_KEYS.DHIKR_PROGRESS);
  } catch (error) {
    console.error('Error clearing dhikr progress:', error);
  }
}

// ============================================================================
// Dhikr History
// ============================================================================

export async function saveDhikrSession(session: Omit<DhikrSession, 'id'>): Promise<void> {
  try {
    const history = await getDhikrHistory();
    const newSession: DhikrSession = {
      ...session,
      id: `${Date.now()}_${Math.random().toString(36).substring(7)}`,
    };
    
    // Keep only last 20 sessions
    const updatedHistory = [newSession, ...history].slice(0, 20);
    await AsyncStorage.setItem(STORAGE_KEYS.DHIKR_HISTORY, JSON.stringify(updatedHistory));
  } catch (error) {
    console.error('Error saving dhikr session:', error);
  }
}

export async function getDhikrHistory(): Promise<DhikrSession[]> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.DHIKR_HISTORY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting dhikr history:', error);
    return [];
  }
}

export async function clearDhikrHistory(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_KEYS.DHIKR_HISTORY);
  } catch (error) {
    console.error('Error clearing dhikr history:', error);
  }
}

// ============================================================================
// User Location
// ============================================================================

export async function saveLocation(location: Omit<UserLocation, 'timestamp'>): Promise<void> {
  try {
    const data: UserLocation = {
      ...location,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(STORAGE_KEYS.USER_LOCATION, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving location:', error);
  }
}

export async function getLocation(): Promise<UserLocation | null> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_LOCATION);
    if (!data) return null;
    
    const location: UserLocation = JSON.parse(data);
    
    // Check if location is older than 24 hours
    const age = Date.now() - location.timestamp;
    const maxAge = 24 * 60 * 60 * 1000; // 24 hours
    
    if (age > maxAge) {
      // Location too old, return null
      return null;
    }
    
    return location;
  } catch (error) {
    console.error('Error getting location:', error);
    return null;
  }
}

export async function clearLocation(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_KEYS.USER_LOCATION);
  } catch (error) {
    console.error('Error clearing location:', error);
  }
}

// ============================================================================
// Clear All Data
// ============================================================================

export async function clearAllData(): Promise<void> {
  try {
    await Promise.all([
      clearHistory(),
      clearDhikrProgress(),
      clearDhikrHistory(),
      clearLocation(),
    ]);
  } catch (error) {
    console.error('Error clearing all data:', error);
  }
}
