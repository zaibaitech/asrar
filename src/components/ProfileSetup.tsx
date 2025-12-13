// =====================================================
// ASRĀR EVERYDAY - PROFILE SETUP COMPONENT
// =====================================================
// Onboarding flow for new users to set up their profile
// Can be skipped and completed later
// =====================================================

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProfile, useUpdateProfile, useAvatarUpload } from '../hooks/useProfile';
import {
  getCurrentLocation,
  getTimezoneFromCoordinates,
  reverseGeocode,
} from '../lib/profile';
import ProfilePictureUpload from './ProfilePictureUpload';

interface ProfileSetupProps {
  onComplete?: () => void;
  onSkip?: () => void;
  showSkipButton?: boolean;
}

export default function ProfileSetup({
  onComplete,
  onSkip,
  showSkipButton = true,
}: ProfileSetupProps) {
  const router = useRouter();
  const { profile } = useProfile();
  const { updateProfile, isUpdating } = useUpdateProfile();
  const { uploadAvatar, isUploading } = useAvatarUpload();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: profile?.full_name || '',
    dateOfBirth: profile?.date_of_birth || '',
    locationName: profile?.location_name || '',
    latitude: profile?.latitude || null,
    longitude: profile?.longitude || null,
    timezone: profile?.timezone || 'UTC',
    preferredLanguage: profile?.preferred_language || 'en',
    avatarFile: null as File | null,
  });

  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalSteps = 4;

  // Handle form field changes
  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  // Get user's current location
  const handleGetLocation = async () => {
    setIsLoadingLocation(true);
    setError(null);

    const { latitude, longitude, error: geoError } = await getCurrentLocation();

    if (geoError) {
      setError(geoError.message);
      setIsLoadingLocation(false);
      return;
    }

    const timezone = getTimezoneFromCoordinates();
    const { name, error: geocodeError } = await reverseGeocode(latitude, longitude);

    if (geocodeError) {
      setError('Location found, but unable to get location name');
    }

    setFormData((prev) => ({
      ...prev,
      latitude,
      longitude,
      locationName: name || `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
      timezone,
    }));

    setIsLoadingLocation(false);
  };

  // Handle next step
  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  // Handle previous step
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Handle skip
  const handleSkip = () => {
    if (onSkip) {
      onSkip();
    } else {
      router.push('/');
    }
  };

  // Submit profile
  const handleSubmit = async () => {
    setError(null);

    // Upload avatar if selected
    let avatarUrl = profile?.avatar_url || null;
    if (formData.avatarFile) {
      const { url, error: uploadError } = await uploadAvatar(formData.avatarFile);
      if (uploadError) {
        setError(`Failed to upload avatar: ${uploadError.message}`);
        return;
      }
      avatarUrl = url;
    }

    // Update profile
    const { error: updateError } = await updateProfile({
      full_name: formData.fullName || null,
      date_of_birth: formData.dateOfBirth || null,
      location_name: formData.locationName || null,
      latitude: formData.latitude,
      longitude: formData.longitude,
      timezone: formData.timezone,
      preferred_language: formData.preferredLanguage as 'en' | 'fr' | 'ar',
      avatar_url: avatarUrl,
    });

    if (updateError) {
      setError(`Failed to update profile: ${updateError.message}`);
      return;
    }

    if (onComplete) {
      onComplete();
    } else {
      router.push('/');
    }
  };

  const isLoading = isUpdating || isUploading;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Step {step} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {Math.round((step / totalSteps) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[400px]">
        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Welcome! Let's set up your profile
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              This helps us personalize your experience with Asrār Everyday
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Language
                </label>
                <select
                  value={formData.preferredLanguage}
                  onChange={(e) => handleChange('preferredLanguage', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="ar">العربية</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Birth Info */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Date of Birth
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Used for Name Destiny calculations and personalized guidance
            </p>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Birth Date
              </label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        )}

        {/* Step 3: Location */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Your Location
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Used for accurate planetary hour calculations and prayer times
            </p>

            <div className="space-y-4">
              <button
                onClick={handleGetLocation}
                disabled={isLoadingLocation}
                className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoadingLocation ? 'Getting Location...' : '📍 Use Current Location'}
              </button>

              {formData.locationName && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm font-medium text-green-800 dark:text-green-300">
                    Location: {formData.locationName}
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                    Timezone: {formData.timezone}
                  </p>
                </div>
              )}

              <div className="text-center text-gray-500 dark:text-gray-400">or</div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Enter Location Manually
                </label>
                <input
                  type="text"
                  value={formData.locationName}
                  onChange={(e) => handleChange('locationName', e.target.value)}
                  placeholder="City, Country"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Avatar */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Profile Picture (Optional)
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Add a profile picture to personalize your account
            </p>

            <ProfilePictureUpload
              currentAvatarUrl={profile?.avatar_url || null}
              onFileSelect={(file) => handleChange('avatarFile', file)}
            />
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-sm text-red-800 dark:text-red-300">{error}</p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <div className="flex gap-2">
          {step > 1 && (
            <button
              onClick={handleBack}
              disabled={isLoading}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all disabled:opacity-50"
            >
              Back
            </button>
          )}
          {showSkipButton && (
            <button
              onClick={handleSkip}
              disabled={isLoading}
              className="px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all disabled:opacity-50"
            >
              Skip for now
            </button>
          )}
        </div>

        <button
          onClick={handleNext}
          disabled={isLoading}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Saving...' : step === totalSteps ? 'Complete Setup' : 'Next'}
        </button>
      </div>
    </div>
  );
}
