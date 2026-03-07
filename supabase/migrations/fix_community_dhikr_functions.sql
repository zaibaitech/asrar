-- =========================================
-- FIX COMMUNITY DHIKR FUNCTIONS
-- =========================================
-- This migration fixes the community dhikr functions that were broken
-- by the security vulnerability fixes migration.
-- Date: 2026-03-07
-- =========================================

-- =========================================
-- 1. FIX get_community_dhikr_stats FUNCTION
-- =========================================
-- The previous migration incorrectly referenced non-existent columns
-- (dhikr_name, last_updated) instead of the actual table structure

DROP FUNCTION IF EXISTS public.get_community_dhikr_stats;

CREATE FUNCTION public.get_community_dhikr_stats()
RETURNS TABLE(today_total bigint, today_users bigint, all_time_total bigint)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    RETURN QUERY
    SELECT
        COALESCE((SELECT total_count FROM public.community_dhikr WHERE date = CURRENT_DATE), 0)::bigint AS today_total,
        COALESCE((SELECT user_count FROM public.community_dhikr WHERE date = CURRENT_DATE), 0)::bigint AS today_users,
        COALESCE(SUM(total_count), 0)::bigint AS all_time_total
    FROM public.community_dhikr;
END;
$$;

-- =========================================
-- 2. FIX increment_community_dhikr FUNCTION
-- =========================================
-- Add missing search_path and fix user counting logic

CREATE OR REPLACE FUNCTION public.increment_community_dhikr(
    p_fingerprint text, 
    p_amount integer, 
    p_dhikr_type text DEFAULT 'general'
)
RETURNS TABLE(today_total bigint, today_users bigint, all_time_total bigint)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_today date := CURRENT_DATE;
    v_is_new_user boolean;
BEGIN
    -- Check if this fingerprint has already contributed today
    -- (before inserting the new log entry)
    SELECT NOT EXISTS (
        SELECT 1 FROM public.dhikr_logs 
        WHERE fingerprint = p_fingerprint 
        AND date = v_today
    ) INTO v_is_new_user;
    
    -- Insert dhikr log (date defaults to CURRENT_DATE)
    -- RLS policies allow anon/authenticated users to insert
    INSERT INTO public.dhikr_logs (fingerprint, amount, dhikr_type)
    VALUES (p_fingerprint, p_amount, p_dhikr_type);
    
    -- Update or insert community stats for today
    INSERT INTO public.community_dhikr (date, total_count, user_count, updated_at)
    VALUES (
        v_today,
        p_amount,
        CASE WHEN v_is_new_user THEN 1 ELSE 0 END,
        NOW()
    )
    ON CONFLICT (date)
    DO UPDATE SET
        total_count = public.community_dhikr.total_count + p_amount,
        user_count = public.community_dhikr.user_count + CASE WHEN v_is_new_user THEN 1 ELSE 0 END,
        updated_at = NOW();
    
    -- Return updated stats
    RETURN QUERY
    SELECT * FROM public.get_community_dhikr_stats();
END;
$$;

-- =========================================
-- VERIFICATION
-- =========================================
-- Test the functions work correctly
-- SELECT * FROM public.get_community_dhikr_stats();

-- =========================================
-- NOTES
-- =========================================
-- These functions work with the RLS policies on dhikr_logs because:
-- 1. They are SECURITY DEFINER (run with owner privileges)
-- 2. They have explicit search_path set for security
-- 3. RLS policies on dhikr_logs allow INSERT for anon/authenticated
-- 4. The function owner has permission to bypass RLS
