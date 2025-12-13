// =====================================================
// ASRĀR EVERYDAY - PROFILE PICTURE UPLOAD COMPONENT
// =====================================================
// Reusable component for uploading and managing profile pictures
// =====================================================

'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface ProfilePictureUploadProps {
  currentAvatarUrl: string | null;
  onFileSelect: (file: File | null) => void;
  maxSize?: number; // in bytes
}

export default function ProfilePictureUpload({
  currentAvatarUrl,
  onFileSelect,
  maxSize = 2 * 1024 * 1024, // 2MB default
}: ProfilePictureUploadProps) {
  const [preview, setPreview] = useState<string | null>(currentAvatarUrl);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      setError('Please select a JPEG, PNG, WebP, or GIF image');
      return;
    }

    // Validate file size
    if (file.size > maxSize) {
      setError(`File size must be less than ${Math.round(maxSize / 1024 / 1024)}MB`);
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Pass file to parent
    onFileSelect(file);
  };

  const handleRemove = () => {
    setPreview(null);
    setError(null);
    onFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center">
      {/* Avatar Preview */}
      <div className="relative mb-4">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-4 border-gray-300 dark:border-gray-600">
          {preview ? (
            <Image
              src={preview}
              alt="Profile preview"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500 text-5xl">
              👤
            </div>
          )}
        </div>

        {/* Remove Button */}
        {preview && (
          <button
            onClick={handleRemove}
            className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all shadow-lg flex items-center justify-center"
            title="Remove picture"
          >
            ✕
          </button>
        )}
      </div>

      {/* Upload Button */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        onChange={handleFileChange}
        className="hidden"
      />

      <button
        onClick={handleClick}
        className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
      >
        {preview ? 'Change Picture' : 'Upload Picture'}
      </button>

      {/* Error Message */}
      {error && (
        <div className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</div>
      )}

      {/* File Requirements */}
      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center">
        JPEG, PNG, WebP, or GIF. Max {Math.round(maxSize / 1024 / 1024)}MB
      </p>
    </div>
  );
}
