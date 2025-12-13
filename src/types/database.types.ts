// =====================================================
// ASRĀR EVERYDAY - GENERATED DATABASE TYPES
// =====================================================
// This file contains auto-generated types from Supabase
// 
// To regenerate these types, run:
// npx supabase gen types typescript --project-id YOUR_PROJECT_ID > src/types/database.types.ts
// 
// For now, this contains manual types matching our schema
// =====================================================

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string
          full_name: string | null
          date_of_birth: string | null
          location_name: string | null
          latitude: number | null
          longitude: number | null
          timezone: string
          preferred_language: string
          avatar_url: string | null
          metadata: Json
          profile_completed: boolean
          profile_completion_percentage: number
          created_at: string
          updated_at: string
          last_seen_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          full_name?: string | null
          date_of_birth?: string | null
          location_name?: string | null
          latitude?: number | null
          longitude?: number | null
          timezone?: string
          preferred_language?: string
          avatar_url?: string | null
          metadata?: Json
          profile_completed?: boolean
          profile_completion_percentage?: number
          created_at?: string
          updated_at?: string
          last_seen_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          full_name?: string | null
          date_of_birth?: string | null
          location_name?: string | null
          latitude?: number | null
          longitude?: number | null
          timezone?: string
          preferred_language?: string
          avatar_url?: string | null
          metadata?: Json
          profile_completed?: boolean
          profile_completion_percentage?: number
          created_at?: string
          updated_at?: string
          last_seen_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      update_user_last_seen: {
        Args: {
          user_uuid: string
        }
        Returns: void
      }
      get_avatar_path: {
        Args: {
          user_uuid: string
          filename: string
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
