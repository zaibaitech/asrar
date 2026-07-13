import { describe, it, expect, beforeEach, vi } from 'vitest';
import type { Profile } from '../../types/profile.types';

// Minimal in-memory localStorage polyfill — the default vitest environment
// here is 'node' (no DOM globals) for fast pure-function tests across the
// repo; a full jsdom/happy-dom environment would be overkill just to
// exercise this small wrapper, so we stub the two methods it calls.
class MemoryStorage {
  private store = new Map<string, string>();
  getItem(key: string): string | null {
    return this.store.has(key) ? this.store.get(key)! : null;
  }
  setItem(key: string, value: string): void {
    this.store.set(key, value);
  }
  clear(): void {
    this.store.clear();
  }
}

// @ts-expect-error — test-only global stub, not the real Storage prototype chain
globalThis.localStorage = new MemoryStorage();
// @ts-expect-error — needed so vi.spyOn(Storage.prototype, ...) below can target something
globalThis.Storage = MemoryStorage;

const {
  DISCLAIMER_KEY,
  readLocalAck,
  writeLocalAck,
  readProfileAck,
  buildProfileAckUpdate,
} = await import('./disclaimerAck');

function makeProfile(metadata: Record<string, any> = {}): Profile {
  return {
    id: 'p1',
    user_id: 'u1',
    full_name: null,
    mother_name: null,
    date_of_birth: null,
    location_name: null,
    latitude: null,
    longitude: null,
    timezone: 'UTC',
    preferred_language: 'en',
    avatar_url: null,
    metadata,
    profile_completed: false,
    profile_completion_percentage: 0,
    created_at: '',
    updated_at: '',
    last_seen_at: null,
  };
}

describe('readLocalAck / writeLocalAck', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns false before any ack is written', () => {
    expect(readLocalAck()).toBe(false);
  });

  it('returns true after writeLocalAck', () => {
    writeLocalAck();
    expect(readLocalAck()).toBe(true);
  });

  it('degrades gracefully when localStorage.getItem throws (private mode)', () => {
    const spy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('SecurityError');
    });
    expect(() => readLocalAck()).not.toThrow();
    spy.mockRestore();
  });

  it('degrades gracefully when localStorage.setItem throws (quota exceeded)', () => {
    const spy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });
    expect(() => writeLocalAck()).not.toThrow();
    spy.mockRestore();
  });

  it('falls back to an in-memory per-session flag when localStorage is unavailable', () => {
    const getSpy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('SecurityError');
    });
    const setSpy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });
    writeLocalAck();
    expect(readLocalAck()).toBe(true);
    getSpy.mockRestore();
    setSpy.mockRestore();
  });
});

describe('readProfileAck', () => {
  it('returns false for a null profile', () => {
    expect(readProfileAck(null)).toBe(false);
  });

  it('returns false when the key is absent from metadata', () => {
    expect(readProfileAck(makeProfile())).toBe(false);
  });

  it('returns true when the key is present and true in metadata', () => {
    expect(readProfileAck(makeProfile({ [DISCLAIMER_KEY]: true }))).toBe(true);
  });
});

describe('buildProfileAckUpdate', () => {
  it('sets the ack key while preserving other existing metadata', () => {
    const profile = makeProfile({ theme: 'dark', prayer_reminders_enabled: true });
    const update = buildProfileAckUpdate(profile);
    expect(update.metadata).toEqual({
      theme: 'dark',
      prayer_reminders_enabled: true,
      [DISCLAIMER_KEY]: true,
    });
  });

  it('works when metadata was previously empty', () => {
    const update = buildProfileAckUpdate(makeProfile());
    expect(update.metadata).toEqual({ [DISCLAIMER_KEY]: true });
  });
});
