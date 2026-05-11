import { NextResponse } from 'next/server';
import { getProductById } from '../../../../lib/products';

export const dynamic = 'force-dynamic';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const product = await getProductById(params.id);
  if (!product) {
    return NextResponse.json({ error: 'Khong tim thay san pham' }, { status: 404 });
  }
  return NextResponse.json({ product });
}
