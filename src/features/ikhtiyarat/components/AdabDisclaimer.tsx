'use client';

import { useEffect, useState } from 'react';
import { ikhtiyaratCopy, disclaimerArabic, UiLang } from '../copy';
import { useAuth } from '../../../contexts/AuthContext';
import { useProfile, useUpdateProfile } from '../../../hooks/useProfile';
import { readLocalAck, writeLocalAck, readProfileAck, buildProfileAckUpdate } from '../disclaimerAck';

interface AdabDisclaimerProps {
  language: UiLang;
  /** Force the modal open regardless of ack state — used by the header's ⓘ "About/Adab" link. */
  forceOpen: boolean;
  onRequestClose: () => void;
}

export function AdabDisclaimer({ language, forceOpen, onRequestClose }: AdabDisclaimerProps) {
  const c = ikhtiyaratCopy[language];
  const { user } = useAuth();
  const { profile } = useProfile();
  const { updateProfile } = useUpdateProfile();

  // null while we haven't yet checked ack state (avoids a first-paint flash
  // of the modal before the profile-backed check resolves for logged-in users).
  const [acked, setAcked] = useState<boolean | null>(null);

  useEffect(() => {
    if (user) {
      // Profile is checked first for logged-in users, falling back to
      // localStorage — covers the case where they acked on another device
      // (profile) or on this device before signing in (localStorage).
      setAcked(readProfileAck(profile) || readLocalAck());
    } else {
      setAcked(readLocalAck());
    }
  }, [user, profile]);

  const handleAccept = () => {
    writeLocalAck();
    if (user && profile) {
      updateProfile(buildProfileAckUpdate(profile));
    }
    setAcked(true);
    onRequestClose();
  };

  const showModal = forceOpen || acked === false;

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={forceOpen ? onRequestClose : undefined} />
      <div className="relative w-full sm:max-w-lg max-h-[85vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800/50 shadow-2xl p-5 space-y-3">
        <h2 className="text-sm font-semibold text-amber-900 dark:text-amber-300">{c.disclaimerTitle}</h2>
        <p className="text-sm text-amber-800 dark:text-amber-200/90 leading-relaxed">{c.disclaimer}</p>
        <p dir="rtl" lang="ar" className="font-arabic text-sm text-amber-800 dark:text-amber-200/90 leading-relaxed text-right">
          {disclaimerArabic}
        </p>
        <button
          onClick={forceOpen && acked ? onRequestClose : handleAccept}
          className="w-full py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold transition-colors active:scale-[0.98]"
        >
          {forceOpen && acked ? c.close : c.disclaimerAccept}
        </button>
      </div>
    </div>
  );
}
