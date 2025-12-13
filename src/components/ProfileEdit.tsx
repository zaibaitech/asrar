// =====================================================
// ASRĀR EVERYDAY - PROFILE EDIT COMPONENT
// =====================================================
// Edit user profile with real-time updates
// =====================================================

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Keyboard } from 'lucide-react';
import { useProfile, useUpdateProfile, useAvatarUpload } from '../hooks/useProfile';
import {
  getCurrentLocation,
  getTimezoneFromCoordinates,
  reverseGeocode,
} from '../lib/profile';
import ProfilePictureUpload from './ProfilePictureUpload';
import { ArabicKeyboard } from './ArabicKeyboard';

interface ProfileEditProps {
  onCancel?: () => void;
}

export default function ProfileEdit({ onCancel }: ProfileEditProps = {}) {
  const router = useRouter();
  const { profile, isLoading: profileLoading } = useProfile();
  const { updateProfile, isUpdating } = useUpdateProfile();
  const { uploadAvatar, deleteAvatar, isUploading } = useAvatarUpload();

  const [formData, setFormData] = useState({
    fullName: '',
    motherName: '',
    dateOfBirth: '',
    locationName: '',
    latitude: null as number | null,
    longitude: null as number | null,
    timezone: 'UTC',
    preferredLanguage: 'en',
    avatarFile: null as File | null,
    removeAvatar: false,
  });

  const [showArabicKeyboard, setShowArabicKeyboard] = useState(false);
  const [activeInput, setActiveInput] = useState<'fullName' | 'motherName' | null>(null);
  const fullNameInputRef = useRef<HTMLInputElement>(null);
  const motherNameInputRef = useRef<HTMLInputElement>(null);

  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Initialize form with profile data
  useEffect(() => {
    if (profile) {
      setFormData({
        fullName: profile.full_name || '',
        motherName: profile.mother_name || '',
        dateOfBirth: profile.date_of_birth || '',
        locationName: profile.location_name || '',
        latitude: profile.latitude,
        longitude: profile.longitude,
        timezone: profile.timezone || 'UTC',
        preferredLanguage: profile.preferred_language || 'en',
        avatarFile: null,
        removeAvatar: false,
      });
    }
  }, [profile]);

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
    setSuccess(null);
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Handle avatar upload/deletion
    let avatarUrl = profile?.avatar_url || null;

    if (formData.removeAvatar && profile?.avatar_url) {
      const { error: deleteError } = await deleteAvatar(profile.avatar_url);
      if (deleteError) {
        setError(`Failed to delete avatar: ${deleteError.message}`);
        return;
      }
      avatarUrl = null;
    } else if (formData.avatarFile) {
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
      mother_name: formData.motherName || null,
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

    setSuccess('Profile updated successfully!');
    setTimeout(() => {
      if (onCancel) {
        onCancel();
      } else {
        router.push('/profile');
      }
    }, 1500);
  };

  const isLoading = profileLoading || isUpdating || isUploading;

  if (profileLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Profile</h1>
        <button
          onClick={() => onCancel ? onCancel() : router.push('/profile')}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all"
        >
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Profile Picture */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Profile Picture
          </h2>
          <ProfilePictureUpload
            currentAvatarUrl={
              formData.removeAvatar ? null : profile?.avatar_url || null
            }
            onFileSelect={(file) => {
              handleChange('avatarFile', file);
              handleChange('removeAvatar', false);
            }}
          />
          {profile?.avatar_url && !formData.removeAvatar && !formData.avatarFile && (
            <button
              type="button"
              onClick={() => handleChange('removeAvatar', true)}
              className="mt-4 text-sm text-red-600 dark:text-red-400 hover:underline"
            >
              Remove current picture
            </button>
          )}
        </div>

        {/* Personal Information */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Personal Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <input
                  ref={fullNameInputRef}
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  onFocus={() => setActiveInput('fullName')}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter your full name"
                  dir="auto"
                />
                <button
                  type="button"
                  onClick={() => {
                    setActiveInput('fullName');
                    setShowArabicKeyboard(!showArabicKeyboard);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  <Keyboard className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mother's Name
              </label>
              <div className="relative">
                <input
                  ref={motherNameInputRef}
                  type="text"
                  value={formData.motherName}
                  onChange={(e) => handleChange('motherName', e.target.value)}
                  onFocus={() => setActiveInput('motherName')}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter mother's name"
                  dir="auto"
                />
                <button
                  type="button"
                  onClick={() => {
                    setActiveInput('motherName');
                    setShowArabicKeyboard(!showArabicKeyboard);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  <Keyboard className="w-5 h-5" />
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Used for enhanced numerology calculations
              </p>
            </div>

            {/* Arabic Keyboard */}
            {showArabicKeyboard && (
              <ArabicKeyboard
                onKeyPress={(char) => {
                  if (activeInput === 'fullName' && fullNameInputRef.current) {
                    const input = fullNameInputRef.current;
                    const start = input.selectionStart || 0;
                    const end = input.selectionEnd || 0;
                    const currentValue = formData.fullName || '';
                    const newValue = currentValue.substring(0, start) + char + currentValue.substring(end);
                    handleChange('fullName', newValue);
                    setTimeout(() => {
                      input.focus();
                      input.setSelectionRange(start + char.length, start + char.length);
                    }, 0);
                  } else if (activeInput === 'motherName' && motherNameInputRef.current) {
                    const input = motherNameInputRef.current;
                    const start = input.selectionStart || 0;
                    const end = input.selectionEnd || 0;
                    const currentValue = formData.motherName || '';
                    const newValue = currentValue.substring(0, start) + char + currentValue.substring(end);
                    handleChange('motherName', newValue);
                    setTimeout(() => {
                      input.focus();
                      input.setSelectionRange(start + char.length, start + char.length);
                    }, 0);
                  }
                }}
                onBackspace={() => {
                  if (activeInput === 'fullName' && fullNameInputRef.current) {
                    const input = fullNameInputRef.current;
                    const start = input.selectionStart || 0;
                    const end = input.selectionEnd || 0;
                    const currentValue = formData.fullName || '';
                    if (start === end && start > 0) {
                      const newValue = currentValue.substring(0, start - 1) + currentValue.substring(end);
                      handleChange('fullName', newValue);
                      setTimeout(() => {
                        input.focus();
                        input.setSelectionRange(start - 1, start - 1);
                      }, 0);
                    } else if (start !== end) {
                      const newValue = currentValue.substring(0, start) + currentValue.substring(end);
                      handleChange('fullName', newValue);
                      setTimeout(() => {
                        input.focus();
                        input.setSelectionRange(start, start);
                      }, 0);
                    }
                  } else if (activeInput === 'motherName' && motherNameInputRef.current) {
                    const input = motherNameInputRef.current;
                    const start = input.selectionStart || 0;
                    const end = input.selectionEnd || 0;
                    const currentValue = formData.motherName || '';
                    if (start === end && start > 0) {
                      const newValue = currentValue.substring(0, start - 1) + currentValue.substring(end);
                      handleChange('motherName', newValue);
                      setTimeout(() => {
                        input.focus();
                        input.setSelectionRange(start - 1, start - 1);
                      }, 0);
                    } else if (start !== end) {
                      const newValue = currentValue.substring(0, start) + currentValue.substring(end);
                      handleChange('motherName', newValue);
                      setTimeout(() => {
                        input.focus();
                        input.setSelectionRange(start, start);
                      }, 0);
                    }
                  }
                }}
                onSpace={() => {
                  if (activeInput === 'fullName' && fullNameInputRef.current) {
                    const input = fullNameInputRef.current;
                    const start = input.selectionStart || 0;
                    const end = input.selectionEnd || 0;
                    const currentValue = formData.fullName || '';
                    const newValue = currentValue.substring(0, start) + ' ' + currentValue.substring(end);
                    handleChange('fullName', newValue);
                    setTimeout(() => {
                      input.focus();
                      input.setSelectionRange(start + 1, start + 1);
                    }, 0);
                  } else if (activeInput === 'motherName' && motherNameInputRef.current) {
                    const input = motherNameInputRef.current;
                    const start = input.selectionStart || 0;
                    const end = input.selectionEnd || 0;
                    const currentValue = formData.motherName || '';
                    const newValue = currentValue.substring(0, start) + ' ' + currentValue.substring(end);
                    handleChange('motherName', newValue);
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
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Used for Name Destiny calculations
              </p>
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

        {/* Location & Timezone */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Location & Timezone
          </h2>
          <div className="space-y-4">
            <button
              type="button"
              onClick={handleGetLocation}
              disabled={isLoadingLocation}
              className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoadingLocation ? 'Getting Location...' : '📍 Update to Current Location'}
            </button>

            {formData.locationName && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-sm font-medium text-green-800 dark:text-green-300">
                  Location: {formData.locationName}
                </p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                  Timezone: {formData.timezone}
                </p>
                {formData.latitude && formData.longitude && (
                  <p className="text-xs text-green-600 dark:text-green-400">
                    Coordinates: {formData.latitude.toFixed(4)}, {formData.longitude.toFixed(4)}
                  </p>
                )}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location Name
              </label>
              <input
                type="text"
                value={formData.locationName}
                onChange={(e) => handleChange('locationName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="City, Country"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Used for planetary hour calculations
              </p>
            </div>
          </div>
        </div>

        {/* Error/Success Messages */}
        {error && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-800 dark:text-red-300">{error}</p>
          </div>
        )}

        {success && (
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-sm text-green-800 dark:text-green-300">{success}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => onCancel ? onCancel() : router.push('/profile')}
            disabled={isLoading}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}
