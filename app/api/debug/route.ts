import { NextResponse } from 'next/server';
import { getSupabase, isSupabaseConfigured } from '../../../lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? null;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? null;

  const info = {
    hasUrl: Boolean(url),
    hasAnonKey: Boolean(anon),
    urlPreview: url ? `${url.slice(0, 30)}...` : null,
    anonKeyLength: anon?.length ?? 0,
    isConfigured: isSupabaseConfigured(),
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV ?? null,
    queryProducts: null as null | { count: number; error: string | null },
  };

  const supabase = getSupabase();
  if (supabase) {
    const { data, error } = await supabase.from('products').select('id');
    info.queryProducts = {
      count: data?.length ?? 0,
      error: error?.message ?? null,
    };
  }

  return NextResponse.json(info);
}
