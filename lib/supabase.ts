import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let cached: SupabaseClient | null = null;

/**
 * Tra ve Supabase client neu da cau hinh env vars, nguoc lai tra ve null
 * de tang nang cho phep fallback ve sample data.
 */
export function getSupabase(): SupabaseClient | null {
  if (cached) return cached;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey || url.startsWith('your-')) {
    return null;
  }

  cached = createClient(url, anonKey, {
    auth: { persistSession: false },
  });
  return cached;
}

export function isSupabaseConfigured(): boolean {
  return getSupabase() !== null;
}
