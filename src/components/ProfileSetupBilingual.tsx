'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { User, Calendar, MapPin, Camera, Check, ChevronRight, Keyboard } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useProfile, useUpdateProfile, useAvatarUpload } from '../hooks/useProfile';
import type { ProfileUpdate } from '../types/profile.types';
import ProfilePictureUpload from './ProfilePictureUpload';
import { ArabicKeyboard } from './ArabicKeyboard';

interface ProfileSetupBilingualProps {
  onComplete?: () => void;
  skipEnabled?: boolean;
}

type SetupStep = 'basic' | 'birth' | 'location' | 'avatar';

export default function ProfileSetupBilingual({
  onComplete,
  skipEnabled = true
}: ProfileSetupBilingualProps) {
  const router = useRouter();
  const { t, language } = useLanguage();
  const { profile } = useProfile();
  const { updateProfile, isUpdating } = useUpdateProfile();
  const { uploadAvatar } = useAvatarUpload();

  const [currentStep, setCurrentStep] = useState<SetupStep>('basic');
  const [formData, setFormData] = useState<Partial<ProfileUpdate>>({
    full_name: '',
    mother_name: '',
    date_of_birth: undefined,
    location_name: '',
    preferred_language: language,
    avatar_url: undefined,
  });

  const [isLocating, setIsLocating] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [showArabicKeyboard, setShowArabicKeyboard] = useState(false);
  const [activeInput, setActiveInput] = useState<'full_name' | 'mother_name' | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const fullNameInputRef = useRef<HTMLInputElement>(null);
  const motherNameInputRef = useRef<HTMLInputElement>(null);

  // Initialize form with profile data
  useEffect(() => {
    if (profile && !isInitialized) {
      console.log('Loading profile data into form:', profile);
      setFormData({
        full_name: profile.full_name || '',
        mother_name: profile.mother_name || '',
        date_of_birth: profile.date_of_birth || '',
        location_name: profile.location_name || '',
        preferred_language: profile.preferred_language || language,
        avatar_url: profile.avatar_url || undefined,
      });
      setIsInitialized(true);
    } else if (!profile) {
      // Reset if no profile
      setIsInitialized(false);
    }
  }, [profile, language, isInitialized]);

  const steps: { key: SetupStep; icon: React.ReactNode; label: string }[] = [
    { key: 'basic', icon: <User className="w-5 h-5" />, label: t.profile.steps.basicInfo },
    { key: 'birth', icon: <Calendar className="w-5 h-5" />, label: t.profile.steps.birthDate },
    { key: 'location', icon: <MapPin className="w-5 h-5" />, label: t.profile.steps.location },
    { key: 'avatar', icon: <Camera className="w-5 h-5" />, label: t.profile.steps.avatar },
  ];

  const currentStepIndex = steps.findIndex(s => s.key === currentStep);
  const isLastStep = currentStep === 'avatar';

  const handleNext = async () => {
    if (isLastStep) {
      await handleComplete();
    } else {
      const nextIndex = currentStepIndex + 1;
      setCurrentStep(steps[nextIndex].key);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStep(steps[currentStepIndex - 1].key);
    }
  };

  const handleComplete = async () => {
    try {
      const updateData: Partial<ProfileUpdate> = {
        full_name: formData.full_name || null,
        mother_name: formData.mother_name || null,
        date_of_birth: formData.date_of_birth || null,
        location_name: formData.location_name || null,
        preferred_language: formData.preferred_language || language,
      };

      await updateProfile(updateData);
      
      if (onComplete) {
        onComplete();
      } else {
        router.push('/profile');
      }
    } catch (error) {
      console.error('Failed to complete setup:', error);
    }
  };

  const handleSkip = () => {
    if (onComplete) {
      onComplete();
    } else {
      router.push('/');
    }
  };

  const detectLocation = async () => {
    setIsLocating(true);
    try {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            
            // Reverse geocode using Nominatim
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
            
            const city = data.address?.city || data.address?.town || data.address?.village;
            const country = data.address?.country;
            const locationName = city && country ? `${city}, ${country}` : country || '';
            
            setFormData(prev => ({
              ...prev,
              location_name: locationName,
              latitude,
              longitude,
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            }));
            
            setIsLocating(false);
          },
          (error) => {
            console.error('Geolocation error:', error);
            setIsLocating(false);
          }
        );
      }
    } catch (error) {
      console.error('Location detection error:', error);
      setIsLocating(false);
    }
  };

  const handleAvatarUpload = async (file: File) => {
    setUploadingAvatar(true);
    try {
      const { url, error } = await uploadAvatar(file);
      if (error) {
        console.error('Avatar upload failed:', error);
      } else if (url) {
        setFormData(prev => ({ ...prev, avatar_url: url }));
      }
    } catch (error) {
      console.error('Avatar upload failed:', error);
    } finally {
      setUploadingAvatar(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {steps.map((step, index) => (
            <div
              key={step.key}
              className={`flex flex-col items-center flex-1 ${
                index < steps.length - 1 ? 'relative' : ''
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStepIndex >= index
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                }`}
              >
                {currentStepIndex > index ? (
                  <Check className="w-5 h-5" />
                ) : (
                  step.icon
                )}
              </div>
              <span className="text-xs mt-2 text-slate-600 dark:text-slate-300 text-center">
                {step.label}
              </span>
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-5 left-1/2 w-full h-0.5 ${
                    currentStepIndex > index
                      ? 'bg-indigo-600'
                      : 'bg-slate-200 dark:bg-slate-700'
                  }`}
                  style={{ width: 'calc(100% - 2.5rem)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[300px]">
        {currentStep === 'basic' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t.profile.fullName}
              </label>
              <div className="relative">
                <input
                  ref={fullNameInputRef}
                  type="text"
                  value={formData.full_name || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                  onFocus={() => setActiveInput('full_name')}
                  placeholder={t.profile.fullNamePlaceholder}
                  className="w-full px-4 py-2 pr-12 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  dir="auto"
                />
                <button
                  type="button"
                  onClick={() => {
                    setActiveInput('full_name');
                    setShowArabicKeyboard(!showArabicKeyboard);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  <Keyboard className="w-5 h-5" />
                </button>
              </div>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {t.profile.fullNameHelper}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {language === 'en' ? "Mother's Name" : "Nom de la mère"}
              </label>
              <div className="relative">
                <input
                  ref={motherNameInputRef}
                  type="text"
                  value={formData.mother_name || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, mother_name: e.target.value }))}
                  onFocus={() => setActiveInput('mother_name')}
                  placeholder={language === 'en' ? "Enter mother's name" : "Entrez le nom de la mère"}
                  className="w-full px-4 py-2 pr-12 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  dir="auto"
                />
                <button
                  type="button"
                  onClick={() => {
                    setActiveInput('mother_name');
                    setShowArabicKeyboard(!showArabicKeyboard);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  <Keyboard className="w-5 h-5" />
                </button>
              </div>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {language === 'en' ? "Used for enhanced numerology calculations" : "Utilisé pour les calculs numérologiques avancés"}
              </p>
            </div>

            {showArabicKeyboard && (
              <ArabicKeyboard
                onKeyPress={(letter) => {
                  if (activeInput === 'full_name' && fullNameInputRef.current) {
                    const input = fullNameInputRef.current;
                    const start = input.selectionStart || 0;
                    const end = input.selectionEnd || 0;
                    const currentValue = formData.full_name || '';
                    const newValue = currentValue.substring(0, start) + letter + currentValue.substring(end);
                    setFormData(prev => ({ ...prev, full_name: newValue }));
                    setTimeout(() => {
                      input.focus();
                      input.setSelectionRange(start + letter.length, start + letter.length);
                    }, 0);
                  } else if (activeInput === 'mother_name' && motherNameInputRef.current) {
                    const input = motherNameInputRef.current;
                    const start = input.selectionStart || 0;
                    const end = input.selectionEnd || 0;
                    const currentValue = formData.mother_name || '';
                    const newValue = currentValue.substring(0, start) + letter + currentValue.substring(end);
                    setFormData(prev => ({ ...prev, mother_name: newValue }));
                    setTimeout(() => {
                      input.focus();
                      input.setSelectionRange(start + letter.length, start + letter.length);
                    }, 0);
                  }
                }}
                onBackspace={() => {
                  if (activeInput === 'full_name' && fullNameInputRef.current) {
                    const input = fullNameInputRef.current;
                    const start = input.selectionStart || 0;
                    const end = input.selectionEnd || 0;
                    const currentValue = formData.full_name || '';
                    if (start === end && start > 0) {
                      const newValue = currentValue.substring(0, start - 1) + currentValue.substring(end);
                      setFormData(prev => ({ ...prev, full_name: newValue }));
                      setTimeout(() => {
                        input.focus();
                        input.setSelectionRange(start - 1, start - 1);
                      }, 0);
                    } else if (start !== end) {
                      const newValue = currentValue.substring(0, start) + currentValue.substring(end);
                      setFormData(prev => ({ ...prev, full_name: newValue }));
                      setTimeout(() => {
                        input.focus();
                        input.setSelectionRange(start, start);
                      }, 0);
                    }
                  } else if (activeInput === 'mother_name' && motherNameInputRef.current) {
                    const input = motherNameInputRef.current;
                    const start = input.selectionStart || 0;
                    const end = input.selectionEnd || 0;
                    const currentValue = formData.mother_name || '';
                    if (start === end && start > 0) {
                      const newValue = currentValue.substring(0, start - 1) + currentValue.substring(end);
                      setFormData(prev => ({ ...prev, mother_name: newValue }));
                      setTimeout(() => {
                        input.focus();
                        input.setSelectionRange(start - 1, start - 1);
                      }, 0);
                    } else if (start !== end) {
                      const newValue = currentValue.substring(0, start) + currentValue.substring(end);
                      setFormData(prev => ({ ...prev, mother_name: newValue }));
                      setTimeout(() => {
                        input.focus();
                        input.setSelectionRange(start, start);
                      }, 0);
                    }
                  }
                }}
                onSpace={() => {
                  if (activeInput === 'full_name' && fullNameInputRef.current) {
                    const input = fullNameInputRef.current;
                    const start = input.selectionStart || 0;
                    const end = input.selectionEnd || 0;
                    const currentValue = formData.full_name || '';
                    const newValue = currentValue.substring(0, start) + ' ' + currentValue.substring(end);
                    setFormData(prev => ({ ...prev, full_name: newValue }));
                    setTimeout(() => {
                      input.focus();
                      input.setSelectionRange(start + 1, start + 1);
                    }, 0);
                  } else if (activeInput === 'mother_name' && motherNameInputRef.current) {
                    const input = motherNameInputRef.current;
                    const start = input.selectionStart || 0;
                    const end = input.selectionEnd || 0;
                    const currentValue = formData.mother_name || '';
                    const newValue = currentValue.substring(0, start) + ' ' + currentValue.substring(end);
                    setFormData(prev => ({ ...prev, mother_name: newValue }));
                    setTimeout(() => {
                      input.focus();
                      input.setSelectionRange(start + 1, start + 1);
                    }, 0);
                  }
                }}
                onClose={() => setShowArabicKeyboard(false)}
              />
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t.profile.language}
              </label>
              <select
                value={formData.preferred_language || language}
                onChange={(e) => setFormData(prev => ({ ...prev, preferred_language: e.target.value as 'en' | 'fr' }))}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {t.profile.languageHelper}
              </p>
            </div>
          </div>
        )}

        {currentStep === 'birth' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t.profile.dateOfBirth}
              </label>
              <input
                type="date"
                value={formData.date_of_birth || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, date_of_birth: e.target.value }))}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {t.profile.dateOfBirthHelper}
              </p>
            </div>
          </div>
        )}

        {currentStep === 'location' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t.profile.locationName}
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.location_name || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, location_name: e.target.value }))}
                  placeholder={t.profile.locationPlaceholder}
                  className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button
                  onClick={detectLocation}
                  disabled={isLocating}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 whitespace-nowrap"
                >
                  {isLocating ? t.profile.detectingLocation : t.profile.detectLocation}
                </button>
              </div>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {t.profile.locationHelper}
              </p>
            </div>
          </div>
        )}

        {currentStep === 'avatar' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t.profile.profilePicture} <span className="text-slate-400">({t.common.optional})</span>
              </label>
              <ProfilePictureUpload
                currentAvatarUrl={formData.avatar_url || null}
                onFileSelect={(file) => {
                  if (file) handleAvatarUpload(file);
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <div>
          {currentStepIndex > 0 && (
            <button
              onClick={handleBack}
              className="px-6 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              {t.common.back}
            </button>
          )}
        </div>

        <div className="flex gap-3">
          {skipEnabled && !isLastStep && (
            <button
              onClick={handleSkip}
              className="px-6 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              {t.profile.skipForNow}
            </button>
          )}
          
          <button
            onClick={handleNext}
            disabled={isUpdating}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 flex items-center gap-2"
          >
            {isLastStep ? t.profile.completeSetup : t.common.next}
            {!isLastStep && <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
