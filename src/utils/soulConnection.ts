/**
 * Soul Connection (Spiritual-Destiny, mod-9) calculation — ported to match
 * asrar-mobile's utils/relationshipCompatibility.ts calculateSpiritualDestiny
 * exactly:
 *
 *   const sum = kabir1 + kabir2 + 7;
 *   const remainder = sum % 9 === 0 ? 9 : sum % 9; // 0 -> 9, always 1-9
 *
 * This is a SEPARATE, simpler function from the old
 * analyzeRelationshipCompatibility (4-method weighted score) — per user
 * direction, the Names-mode result is now ONLY this single 1-9 metric with
 * its archetype meaning, matching the mobile app's actual "Soul Connection"
 * screen rather than the older multi-method Harmony Index view.
 */

import { SoulConnectionResult } from '../types/compatibility';
import { getSoulConnectionSeverity } from '../constants/soulConnectionArchetypes';

export function calculateSoulNumber(kabir1: number, kabir2: number): number {
  const sum = kabir1 + kabir2 + 7;
  const remainder = sum % 9;
  return remainder === 0 ? 9 : remainder;
}

export function calculateSoulConnection(
  person1Name: string,
  person1Arabic: string,
  person1Kabir: number,
  person2Name: string,
  person2Arabic: string,
  person2Kabir: number,
): SoulConnectionResult {
  const soulNumber = calculateSoulNumber(person1Kabir, person2Kabir);

  return {
    mode: 'soul-connection',
    person1: { name: person1Name, arabicName: person1Arabic, kabir: person1Kabir },
    person2: { name: person2Name, arabicName: person2Arabic, kabir: person2Kabir },
    soulNumber,
    severity: getSoulConnectionSeverity(soulNumber),
  };
}
