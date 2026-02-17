/**
 * Planetary Hours Utilities
 * Extracted from asrar-mobile/services/PlanetaryHoursService.ts
 * and asrar-mobile/utils/planetary-hours.ts
 */

import SunCalc from 'suncalc';
import { 
  Planet, 
  PlanetInfo, 
  PlanetaryHour, 
  PlanetaryHourData, 
  DayOfWeek 
} from './types';
import { 
  CHALDEAN_ORDER, 
  DAY_RULERS, 
  PLANET_INFO, 
  DAY_NAMES 
} from './constants';

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get the start of the local day for a given date
 * Uses UTC date components to avoid timezone issues
 */
function startOfLocalDay(date: Date): Date {
  // Create a new date at midnight UTC for the same calendar date
  // This ensures consistent behavior regardless of server timezone
  return new Date(Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    0, 0, 0, 0
  ));
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

/**
 * Get the ruling planet for a given day of week
 */
export function getDayRuler(date: Date): Planet {
  const dayOfWeek = date.getDay();
  return DAY_RULERS[dayOfWeek];
}

/**
 * Get day of week name
 */
export function getDayOfWeek(date: Date): DayOfWeek {
  return DAY_NAMES[date.getDay()];
}

/**
 * Get planet info by planet name
 */
export function getPlanetInfo(planet: Planet): PlanetInfo {
  return PLANET_INFO[planet];
}

/**
 * Get the next planet in the Chaldean sequence
 */
function getNextPlanet(current: Planet): Planet {
  const currentIndex = CHALDEAN_ORDER.indexOf(current);
  const nextIndex = (currentIndex + 1) % CHALDEAN_ORDER.length;
  return CHALDEAN_ORDER[nextIndex];
}

/**
 * Calculate which planet rules a given hour number (0-23)
 * starting from the day ruler at hour 0
 */
function getPlanetForHour(dayRuler: Planet, hourNumber: number): Planet {
  const dayRulerIndex = CHALDEAN_ORDER.indexOf(dayRuler);
  const planetIndex = (dayRulerIndex + hourNumber) % CHALDEAN_ORDER.length;
  return CHALDEAN_ORDER[planetIndex];
}

// ============================================================================
// PLANETARY HOURS CALCULATION
// ============================================================================

/**
 * Calculate planetary hours for a given day
 * 
 * @param sunrise - Sunrise time
 * @param sunset - Sunset time  
 * @param nextSunrise - Next day's sunrise time
 * @param now - Current time
 * @returns Planetary hour data
 */
export function calculatePlanetaryHours(
  sunrise: Date,
  sunset: Date,
  nextSunrise: Date,
  now: Date = new Date()
): PlanetaryHourData {
  // Guardrail: if called with "today" sunrise/sunset but `now` is before sunrise,
  // shift the whole frame back one day
  if (now < sunrise && sunset > sunrise) {
    sunrise = addDays(sunrise, -1);
    sunset = addDays(sunset, -1);
    nextSunrise = new Date(sunrise.getTime() + 24 * 60 * 60 * 1000);
  }

  // Guardrail: ensure nextSunrise is after sunset
  if (nextSunrise.getTime() <= sunset.getTime()) {
    nextSunrise = addDays(nextSunrise, 1);
  }

  const dayRuler = getDayRuler(sunrise);
  
  // Calculate hour durations
  const dayDuration = sunset.getTime() - sunrise.getTime();
  const nightDuration = nextSunrise.getTime() - sunset.getTime();
  const dayHourDuration = dayDuration / 12;
  const nightHourDuration = nightDuration / 12;
  
  // Determine if current time is during day or night
  const isDaytime = now >= sunrise && now < sunset;
  
  // Find current hour
  let currentHourNumber: number;
  let currentStartTime: Date;
  let currentEndTime: Date;
  
  if (isDaytime) {
    // Daytime hours (0-11)
    const timeSinceSunrise = now.getTime() - sunrise.getTime();
    currentHourNumber = Math.floor(timeSinceSunrise / dayHourDuration);
    currentHourNumber = Math.min(currentHourNumber, 11);
    
    currentStartTime = new Date(sunrise.getTime() + (currentHourNumber * dayHourDuration));
    currentEndTime = new Date(sunrise.getTime() + ((currentHourNumber + 1) * dayHourDuration));
  } else {
    // Nighttime hours (12-23)
    const timeSinceSunset = now.getTime() - sunset.getTime();
    const nightHourIndex = Math.floor(timeSinceSunset / nightHourDuration);
    currentHourNumber = 12 + Math.min(nightHourIndex, 11);
    
    const nightHourOffset = currentHourNumber - 12;
    currentStartTime = new Date(sunset.getTime() + (nightHourOffset * nightHourDuration));
    currentEndTime = new Date(sunset.getTime() + ((nightHourOffset + 1) * nightHourDuration));
  }
  
  // Get planet for current hour
  const currentPlanet = getPlanetForHour(dayRuler, currentHourNumber);
  
  // Build current hour object
  const currentHour: PlanetaryHour = {
    planet: currentPlanet,
    planetInfo: getPlanetInfo(currentPlanet),
    hourNumber: currentHourNumber + 1, // 1-24 for display
    startTime: currentStartTime,
    endTime: currentEndTime,
    isDaytime,
  };
  
  // Calculate next hour
  const nextHourNumber = (currentHourNumber + 1) % 24;
  const nextPlanet = getPlanetForHour(dayRuler, nextHourNumber);
  const nextIsDaytime = nextHourNumber < 12;
  
  let nextStartTime: Date;
  let nextEndTime: Date;
  
  if (nextIsDaytime) {
    const hourOffset = nextHourNumber;
    nextStartTime = new Date(sunrise.getTime() + (hourOffset * dayHourDuration));
    nextEndTime = new Date(sunrise.getTime() + ((hourOffset + 1) * dayHourDuration));
  } else {
    const nightHourOffset = nextHourNumber - 12;
    nextStartTime = new Date(sunset.getTime() + (nightHourOffset * nightHourDuration));
    nextEndTime = new Date(sunset.getTime() + ((nightHourOffset + 1) * nightHourDuration));
  }
  
  const nextHour: PlanetaryHour = {
    planet: nextPlanet,
    planetInfo: getPlanetInfo(nextPlanet),
    hourNumber: nextHourNumber + 1,
    startTime: nextStartTime,
    endTime: nextEndTime,
    isDaytime: nextIsDaytime,
  };
  
  // Calculate after next hour
  const afterNextHourNumber = (nextHourNumber + 1) % 24;
  const afterNextPlanet = getPlanetForHour(dayRuler, afterNextHourNumber);
  const afterNextIsDaytime = afterNextHourNumber < 12;
  
  let afterNextStartTime: Date;
  let afterNextEndTime: Date;
  
  if (afterNextIsDaytime) {
    const hourOffset = afterNextHourNumber;
    afterNextStartTime = new Date(sunrise.getTime() + (hourOffset * dayHourDuration));
    afterNextEndTime = new Date(sunrise.getTime() + ((hourOffset + 1) * dayHourDuration));
  } else {
    const nightHourOffset = afterNextHourNumber - 12;
    afterNextStartTime = new Date(sunset.getTime() + (nightHourOffset * nightHourDuration));
    afterNextEndTime = new Date(sunset.getTime() + ((nightHourOffset + 1) * nightHourDuration));
  }
  
  const afterNextHour: PlanetaryHour = {
    planet: afterNextPlanet,
    planetInfo: getPlanetInfo(afterNextPlanet),
    hourNumber: afterNextHourNumber + 1,
    startTime: afterNextStartTime,
    endTime: afterNextEndTime,
    isDaytime: afterNextIsDaytime,
  };
  
  // Calculate countdown to next hour in seconds
  const countdownSeconds = Math.max(0, Math.floor((currentEndTime.getTime() - now.getTime()) / 1000));
  
  return {
    dayRulerPlanet: dayRuler,
    dayRulerInfo: getPlanetInfo(dayRuler),
    currentHour,
    nextHour,
    afterNextHour,
    countdownSeconds,
  };
}

/**
 * Get all 24 planetary hours for a given day
 * Returns array of all day (12) and night (12) planetary hours
 */
export function getAllPlanetaryHoursForDay(
  sunrise: Date,
  sunset: Date,
  nextSunrise: Date,
  now: Date = new Date()
): { hours: PlanetaryHour[]; currentHourIndex: number; dayRuler: Planet } {
  const dayRuler = getDayRuler(sunrise);
  
  // Calculate hour durations
  const dayDuration = sunset.getTime() - sunrise.getTime();
  const nightDuration = nextSunrise.getTime() - sunset.getTime();
  const dayHourDuration = dayDuration / 12;
  const nightHourDuration = nightDuration / 12;
  
  const hours: PlanetaryHour[] = [];
  let currentHourIndex = -1;
  
  // Generate all 24 hours
  for (let i = 0; i < 24; i++) {
    const isDaytime = i < 12;
    const planet = getPlanetForHour(dayRuler, i);
    
    let startTime: Date;
    let endTime: Date;
    
    if (isDaytime) {
      startTime = new Date(sunrise.getTime() + i * dayHourDuration);
      endTime = new Date(sunrise.getTime() + (i + 1) * dayHourDuration);
    } else {
      const nightIndex = i - 12;
      startTime = new Date(sunset.getTime() + nightIndex * nightHourDuration);
      endTime = new Date(sunset.getTime() + (nightIndex + 1) * nightHourDuration);
    }
    
    // Check if this is the current hour
    if (now >= startTime && now < endTime) {
      currentHourIndex = i;
    }
    
    hours.push({
      planet,
      planetInfo: getPlanetInfo(planet),
      hourNumber: i + 1,
      startTime,
      endTime,
      isDaytime,
    });
  }
  
  return { hours, currentHourIndex, dayRuler };
}

/**
 * Get all planetary hours for today using location
 */
export async function getAllPlanetaryHoursForToday(
  latitude: number,
  longitude: number,
  now: Date = new Date()
): Promise<{ hours: PlanetaryHour[]; currentHourIndex: number; dayRuler: Planet; sunrise: Date; sunset: Date } | null> {
  try {
    const todayTimes = SunCalc.getTimes(now, latitude, longitude);
    
    if (!todayTimes.sunrise || !todayTimes.sunset) {
      return null;
    }
    
    const todaySunrise = todayTimes.sunrise;
    const todaySunset = todayTimes.sunset;
    
    // Get tomorrow's sunrise for night hour calculations
    const tomorrow = addDays(now, 1);
    const tomorrowTimes = SunCalc.getTimes(tomorrow, latitude, longitude);
    const tomorrowSunrise = tomorrowTimes.sunrise || addDays(todaySunrise, 1);
    
    const result = getAllPlanetaryHoursForDay(todaySunrise, todaySunset, tomorrowSunrise, now);
    
    return {
      ...result,
      sunrise: todaySunrise,
      sunset: todaySunset,
    };
  } catch (error) {
    console.error('[Planetary Hours] Error calculating all hours:', error);
    return null;
  }
}

/**
 * Get planetary hour data for current time using location
 */
export async function getPlanetaryHourDataForNow(
  latitude: number,
  longitude: number,
  now: Date = new Date()
): Promise<PlanetaryHourData | null> {
  try {
    // SunCalc.getTimes() extracts the date from the Date object
    // Pass `now` directly - it will calculate sunrise/sunset for that day
    const todayTimes = SunCalc.getTimes(now, latitude, longitude);
    
    if (!todayTimes.sunrise || !todayTimes.sunset) {
      return null;
    }
    
    const todaySunrise = todayTimes.sunrise;
    const todaySunset = todayTimes.sunset;
    
    // If before today's sunrise, use yesterday's data
    if (now < todaySunrise) {
      const yesterday = addDays(now, -1);
      const yesterdayTimes = SunCalc.getTimes(yesterday, latitude, longitude);
      
      if (!yesterdayTimes.sunrise || !yesterdayTimes.sunset) {
        return null;
      }
      
      return calculatePlanetaryHours(
        yesterdayTimes.sunrise,
        yesterdayTimes.sunset,
        todaySunrise,
        now
      );
    }
    
    // Otherwise use today's data
    const tomorrow = addDays(now, 1);
    const tomorrowTimes = SunCalc.getTimes(tomorrow, latitude, longitude);
    const tomorrowSunrise = tomorrowTimes.sunrise || addDays(todaySunrise, 1);
    
    return calculatePlanetaryHours(
      todaySunrise,
      todaySunset,
      tomorrowSunrise,
      now
    );
  } catch (error) {
    console.error('[Planetary Hours] Error calculating:', error);
    return null;
  }
}

/**
 * Format countdown seconds as human-readable string
 */
export function formatCountdown(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  
  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m ${secs}s`;
  return `${secs}s`;
}

/**
 * Format countdown in short form (for badges)
 * Shows hours:minutes:seconds for accurate remaining time
 */
export function formatCountdownShort(seconds: number): string {
  if (seconds <= 0) return '0:00';
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}
