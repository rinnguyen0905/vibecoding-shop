import { NextResponse } from 'next/server';
import { createProduct, listProducts } from '../../../lib/products';

export const dynamic = 'force-dynamic';

export async function GET() {
  const products = await listProducts();
  return NextResponse.json({ products });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ['name', 'price', 'category'] as const;
    for (const field of required) {
      if (body[field] === undefined || body[field] === null || body[field] === '') {
        return NextResponse.json(
          { error: `Thieu truong "${field}"` },
          { status: 400 }
        );
      }
    }

    const product = await createProduct({
      name: String(body.name).trim(),
      description: String(body.description ?? '').trim(),
      price: Number(body.price),
      category: String(body.category).trim(),
      image_url: body.image_url ? String(body.image_url) : null,
      stock: body.stock !== undefined ? Number(body.stock) : 0,
    });

    return NextResponse.json({ product }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Loi khong xac dinh';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
