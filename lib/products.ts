import { getSupabase } from './supabase';
import { products as sampleProducts } from './sample-data';
import type { Product } from './types';

const TABLE = 'products';

export async function listProducts(): Promise<Product[]> {
  const supabase = getSupabase();
  if (!supabase) return sampleProducts;

  const { data, error } = await supabase
    .from(TABLE)
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[products] listProducts error:', error.message);
    return sampleProducts;
  }
  return (data ?? []) as Product[];
}

export async function getProductById(id: string): Promise<Product | null> {
  const supabase = getSupabase();
  if (!supabase) {
    return sampleProducts.find((p) => p.id === id) ?? null;
  }

  const { data, error } = await supabase
    .from(TABLE)
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('[products] getProductById error:', error.message);
    return null;
  }
  return (data as Product) ?? null;
}

export async function createProduct(
  input: Omit<Product, 'id' | 'created_at'>
): Promise<Product> {
  const supabase = getSupabase();
  if (!supabase) {
    throw new Error(
      'Supabase chua duoc cau hinh. Hay set NEXT_PUBLIC_SUPABASE_URL va NEXT_PUBLIC_SUPABASE_ANON_KEY.'
    );
  }

  const { data, error } = await supabase
    .from(TABLE)
    .insert(input)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data as Product;
}
