'use client';

import { useEffect, useState } from 'react';

const SIMPLE_MODE_KEY = 'asrar.ikhtiyarat.simpleMode';

/** In-memory fallback for the rare case localStorage itself throws (private browsing, etc). */
let memoryFallback = true;

function readStored(): boolean {
  try {
    const raw = localStorage.getItem(SIMPLE_MODE_KEY);
    return raw === null ? true : raw === 'true';
  } catch {
    return memoryFallback;
  }
}

function writeStored(value: boolean) {
  memoryFallback = value;
  try {
    localStorage.setItem(SIMPLE_MODE_KEY, String(value));
  } catch {
    // private browsing or storage disabled — memoryFallback keeps the
    // toggle usable for the rest of this session.
  }
}

/**
 * Shared Simple/Detailed rule-explanation preference for the Ikhtiyārāt
 * feature, persisted across CheckDateView and DetailSheet so the choice
 * doesn't reset when switching tabs. Defaults to Simple (true) — most
 * users have no astrology background; the technical/classical
 * terminology (Khāliya al-Sayr, muḥtaraq, orb, SCHOLAR-REVIEW) is opt-in
 * via "Detailed", not the default.
 */
export function useSimpleMode(): [boolean, (value: boolean) => void] {
  const [simple, setSimpleState] = useState(true);

  useEffect(() => {
    setSimpleState(readStored());
  }, []);

  function setSimple(value: boolean) {
    setSimpleState(value);
    writeStored(value);
  }

  return [simple, setSimple];
}
