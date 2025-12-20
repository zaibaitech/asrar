/**
 * API Validation Helpers
 * Input validation for all API endpoints
 */

import { ApiErrorCode } from '../types/api';

// ============================================================================
// VALIDATION RESULT TYPE
// ============================================================================

export interface ValidationResult {
  isValid: boolean;
  error?: {
    code: ApiErrorCode;
    message: string;
    details?: any;
  };
}

// ============================================================================
// CONSTANTS
// ============================================================================

const MAX_NAME_LENGTH = 100;
const ARABIC_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
const LATIN_REGEX = /^[a-zA-Z\s'-]+$/;

// ============================================================================
// NAME VALIDATION
// ============================================================================

/**
 * Validate a name field
 * Accepts Arabic script or Latin transliteration
 */
export function validateName(
  name: string | undefined,
  fieldName: string = 'name',
  required: boolean = true
): ValidationResult {
  // Check if required
  if (required && (!name || name.trim().length === 0)) {
    return {
      isValid: false,
      error: {
        code: ApiErrorCode.MISSING_REQUIRED_FIELD,
        message: `${fieldName} is required`,
        details: { field: fieldName }
      }
    };
  }

  // If optional and not provided, it's valid
  if (!required && (!name || name.trim().length === 0)) {
    return { isValid: true };
  }

  const trimmedName = name!.trim();

  // Check length
  if (trimmedName.length > MAX_NAME_LENGTH) {
    return {
      isValid: false,
      error: {
        code: ApiErrorCode.NAME_TOO_LONG,
        message: `${fieldName} must be ${MAX_NAME_LENGTH} characters or less`,
        details: { 
          field: fieldName,
          maxLength: MAX_NAME_LENGTH,
          actualLength: trimmedName.length
        }
      }
    };
  }

  // Check if it's valid Arabic or Latin script
  const hasArabic = ARABIC_REGEX.test(trimmedName);
  const isLatin = LATIN_REGEX.test(trimmedName);

  if (!hasArabic && !isLatin) {
    return {
      isValid: false,
      error: {
        code: ApiErrorCode.INVALID_SCRIPT,
        message: `${fieldName} must be in Arabic script or Latin transliteration`,
        details: { field: fieldName }
      }
    };
  }

  return { isValid: true };
}

// ============================================================================
// DATE VALIDATION
// ============================================================================

/**
 * Validate ISO 8601 date string
 */
export function validateDate(
  dateString: string | undefined,
  fieldName: string = 'date',
  required: boolean = false
): ValidationResult {
  // Check if required
  if (required && !dateString) {
    return {
      isValid: false,
      error: {
        code: ApiErrorCode.MISSING_REQUIRED_FIELD,
        message: `${fieldName} is required`,
        details: { field: fieldName }
      }
    };
  }

  // If optional and not provided, it's valid
  if (!required && !dateString) {
    return { isValid: true };
  }

  // Validate ISO 8601 format
  const date = new Date(dateString!);
  if (isNaN(date.getTime())) {
    return {
      isValid: false,
      error: {
        code: ApiErrorCode.INVALID_DATE,
        message: `${fieldName} must be a valid ISO 8601 date (YYYY-MM-DD)`,
        details: { 
          field: fieldName,
          provided: dateString,
          example: '1990-03-15'
        }
      }
    };
  }

  // Check if date is reasonable (not too far in past or future)
  const year = date.getFullYear();
  if (year < 1900 || year > 2100) {
    return {
      isValid: false,
      error: {
        code: ApiErrorCode.INVALID_DATE,
        message: `${fieldName} must be between years 1900 and 2100`,
        details: { field: fieldName, year }
      }
    };
  }

  return { isValid: true };
}

// ============================================================================
// LANGUAGE VALIDATION
// ============================================================================

/**
 * Validate language code
 */
export function validateLanguage(
  language: string | undefined,
  required: boolean = false
): ValidationResult {
  const validLanguages = ['en', 'fr', 'ar'];

  if (!language) {
    if (required) {
      return {
        isValid: false,
        error: {
          code: ApiErrorCode.MISSING_REQUIRED_FIELD,
          message: 'language is required',
          details: { field: 'language', validValues: validLanguages }
        }
      };
    }
    return { isValid: true };
  }

  if (!validLanguages.includes(language)) {
    return {
      isValid: false,
      error: {
        code: ApiErrorCode.INVALID_LANGUAGE,
        message: `language must be one of: ${validLanguages.join(', ')}`,
        details: { 
          field: 'language',
          provided: language,
          validValues: validLanguages
        }
      }
    };
  }

  return { isValid: true };
}

// ============================================================================
// ABJAD SYSTEM VALIDATION
// ============================================================================

/**
 * Validate Abjad system
 */
export function validateAbjadSystem(
  system: string | undefined,
  required: boolean = false
): ValidationResult {
  const validSystems = ['maghribi', 'mashriqi'];

  if (!system) {
    if (required) {
      return {
        isValid: false,
        error: {
          code: ApiErrorCode.MISSING_REQUIRED_FIELD,
          message: 'abjadSystem is required',
          details: { field: 'abjadSystem', validValues: validSystems }
        }
      };
    }
    return { isValid: true };
  }

  if (!validSystems.includes(system)) {
    return {
      isValid: false,
      error: {
        code: ApiErrorCode.INVALID_ABJAD_SYSTEM,
        message: `abjadSystem must be one of: ${validSystems.join(', ')}`,
        details: { 
          field: 'abjadSystem',
          provided: system,
          validValues: validSystems
        }
      }
    };
  }

  return { isValid: true };
}

// ============================================================================
// COORDINATE VALIDATION
// ============================================================================

/**
 * Validate geographic coordinates
 */
export function validateCoordinates(
  latitude: number | undefined,
  longitude: number | undefined,
  required: boolean = false
): ValidationResult {
  if (required && (latitude === undefined || longitude === undefined)) {
    return {
      isValid: false,
      error: {
        code: ApiErrorCode.MISSING_REQUIRED_FIELD,
        message: 'Both latitude and longitude are required',
        details: { fields: ['latitude', 'longitude'] }
      }
    };
  }

  if (latitude === undefined && longitude === undefined) {
    return { isValid: true };
  }

  // Validate latitude (-90 to 90)
  if (latitude !== undefined && (latitude < -90 || latitude > 90)) {
    return {
      isValid: false,
      error: {
        code: ApiErrorCode.INVALID_COORDINATES,
        message: 'latitude must be between -90 and 90',
        details: { 
          field: 'latitude',
          provided: latitude,
          validRange: [-90, 90]
        }
      }
    };
  }

  // Validate longitude (-180 to 180)
  if (longitude !== undefined && (longitude < -180 || longitude > 180)) {
    return {
      isValid: false,
      error: {
        code: ApiErrorCode.INVALID_COORDINATES,
        message: 'longitude must be between -180 and 180',
        details: { 
          field: 'longitude',
          provided: longitude,
          validRange: [-180, 180]
        }
      }
    };
  }

  return { isValid: true };
}

// ============================================================================
// HELPER: COMBINE VALIDATION RESULTS
// ============================================================================

/**
 * Combine multiple validation results
 * Returns first error found, or success if all valid
 */
export function combineValidations(...results: ValidationResult[]): ValidationResult {
  for (const result of results) {
    if (!result.isValid) {
      return result;
    }
  }
  return { isValid: true };
}
