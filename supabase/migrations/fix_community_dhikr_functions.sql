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
    -- Use dhikr_logs as the source of truth (not community_dhikr aggregation table)
    -- This ensures accurate counts even if aggregation gets out of sync
    RETURN QUERY
    SELECT
        COALESCE(SUM(amount), 0)::bigint AS today_total,
        COUNT(DISTINCT fingerprint)::bigint AS today_users,
        (SELECT COALESCE(SUM(amount), 0)::bigint FROM public.dhikr_logs) AS all_time_total
    FROM public.dhikr_logs
    WHERE date = CURRENT_DATE;
END;
$$;

-- =========================================
-- 2. FIX increment_community_dhikr FUNCTION
-- =========================================
-- Simplified to only insert into dhikr_logs (source of truth)
-- Removed dependency on community_dhikr aggregation table

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
BEGIN
    -- Insert dhikr log (source of truth)
    -- RLS policies allow anon/authenticated users to insert
    INSERT INTO public.dhikr_logs (fingerprint, amount, dhikr_type)
    VALUES (p_fingerprint, p_amount, p_dhikr_type);
    
    -- Return updated stats (calculated from dhikr_logs)
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

-- SOURCE OF TRUTH:
-- - dhikr_logs table contains all raw dhikr entries (827,529+)
-- - community_dhikr table is an aggregation cache (may drift)
-- - get_community_dhikr_stats() uses dhikr_logs for accuracy
