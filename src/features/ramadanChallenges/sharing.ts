/**
 * Social Sharing Utilities
 * =========================
 * Helper functions for sharing progress on social media
 */

import type { Challenge, ChallengeType } from './types';

export interface ShareData {
  title: string;
  text: string;
  url: string;
}

/**
 * Convert challenge type to URL-friendly slug
 */
function getChallengeSlug(type: ChallengeType): string {
  const typeToSlug: Record<ChallengeType, string> = {
    ISTIGHFAR: 'istighfar',
    SALAWAT: 'salawat',
    DIVINE_NAME: 'divine-name',
    PROPHETIC_NAMES: 'prophetic-names',
    CUSTOM: 'custom',
  };
  return typeToSlug[type] || 'custom';
}

/**
 * Generate share text for overall progress
 */
export function generateProgressShareText(
  totalDhikr: number,
  todayDhikr: number,
  streak: number,
  challengeCount: number,
  language: 'en' | 'fr' = 'en'
): ShareData {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.asrar.app';
  
  if (language === 'fr') {
    const text = `🌟 Mon Défi Spirituel sur Asrār\n\n` +
      `✨ Total: ${totalDhikr.toLocaleString()} dhikr\n` +
      `📅 Aujourd'hui: ${todayDhikr.toLocaleString()}\n` +
      (streak > 0 ? `🔥 Série: ${streak} jours\n` : '') +
      `🎯 Défis actifs: ${challengeCount}\n\n` +
      `Rejoignez-moi dans ce parcours spirituel!`;
    
    return {
      title: 'Mon Défi Spirituel',
      text,
      url: `${baseUrl}/ramadan`,
    };
  } else {
    const text = `🌟 My Spiritual Challenge on Asrār\n\n` +
      `✨ Total: ${totalDhikr.toLocaleString()} dhikr\n` +
      `📅 Today: ${todayDhikr.toLocaleString()}\n` +
      (streak > 0 ? `🔥 Streak: ${streak} days\n` : '') +
      `🎯 Active challenges: ${challengeCount}\n\n` +
      `Join me in this spiritual journey!`;
    
    return {
      title: 'My Spiritual Challenge',
      text,
      url: `${baseUrl}/ramadan`,
    };
  }
}

/**
 * Generate share text for a specific challenge
 */
export function generateChallengeShareText(
  challenge: Challenge,
  language: 'en' | 'fr' = 'en'
): ShareData {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.asrar.app';
  const progress = challenge.totalTarget > 0 
    ? Math.round((challenge.totalProgress / challenge.totalTarget) * 100) 
    : 0;
  
  if (language === 'fr') {
    const text = `🤲 ${challenge.title}\n\n` +
      `${challenge.arabicText}\n` +
      `${challenge.transliteration}\n\n` +
      `📊 Progrès: ${challenge.totalProgress.toLocaleString()} / ${challenge.totalTarget.toLocaleString()} (${progress}%)\n` +
      (challenge.streakDays > 0 ? `🔥 Série: ${challenge.streakDays} jours\n` : '') +
      `\nRejoignez-moi dans ce défi spirituel sur Asrār!`;
    
    return {
      title: challenge.title,
      text,
      url: `${baseUrl}/ramadan?challenge=${getChallengeSlug(challenge.type)}`,
    };
  } else {
    const text = `🤲 ${challenge.title}\n\n` +
      `${challenge.arabicText}\n` +
      `${challenge.transliteration}\n\n` +
      `📊 Progress: ${challenge.totalProgress.toLocaleString()} / ${challenge.totalTarget.toLocaleString()} (${progress}%)\n` +
      (challenge.streakDays > 0 ? `🔥 Streak: ${challenge.streakDays} days\n` : '') +
      `\nJoin me in this spiritual challenge on Asrār!`;
    
    return {
      title: challenge.title,
      text,
      url: `${baseUrl}/ramadan?challenge=${getChallengeSlug(challenge.type)}`,
    };
  }
}

/**
 * Generate share text for a milestone
 */
export function generateMilestoneShareText(
  milestone: number,
  language: 'en' | 'fr' = 'en'
): ShareData {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.asrar.app';
  
  if (language === 'fr') {
    const text = `🎉 J'ai atteint ${milestone.toLocaleString()} dhikr sur Asrār!\n\n` +
      `Un jalon important dans mon parcours spirituel. 🌟\n\n` +
      `Rejoignez-moi dans ce défi!`;
    
    return {
      title: `${milestone.toLocaleString()} Dhikr Atteints!`,
      text,
      url: `${baseUrl}/ramadan`,
    };
  } else {
    const text = `🎉 I reached ${milestone.toLocaleString()} dhikr on Asrār!\n\n` +
      `A major milestone in my spiritual journey. 🌟\n\n` +
      `Join me in this challenge!`;
    
    return {
      title: `${milestone.toLocaleString()} Dhikr Reached!`,
      text,
      url: `${baseUrl}/ramadan`,
    };
  }
}

/**
 * Share via Web Share API or fallback to clipboard
 */
export async function shareContent(shareData: ShareData): Promise<{ success: boolean; method: 'native' | 'clipboard' }> {
  const fullText = `${shareData.text}\n\n${shareData.url}`;
  
  // Try native share first
  if (navigator.share) {
    try {
      await navigator.share({
        title: shareData.title,
        text: shareData.text,
        url: shareData.url,
      });
      return { success: true, method: 'native' };
    } catch (err) {
      // User cancelled or error - fall through to clipboard
      if ((err as Error).name === 'AbortError') {
        return { success: false, method: 'native' };
      }
    }
  }
  
  // Fallback to clipboard
  try {
    await navigator.clipboard.writeText(fullText);
    return { success: true, method: 'clipboard' };
  } catch (err) {
    console.error('Failed to copy to clipboard:', err);
    return { success: false, method: 'clipboard' };
  }
}

/**
 * Generate social media URLs for specific platforms
 */
export function getSocialShareUrls(shareData: ShareData) {
  const encodedText = encodeURIComponent(shareData.text);
  const encodedUrl = encodeURIComponent(shareData.url);
  
  return {
    whatsapp: `https://wa.me/?text=${encodedText}%0A%0A${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
  };
}
