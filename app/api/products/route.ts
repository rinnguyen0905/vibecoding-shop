import { NextResponse } from 'next/server';
import { products } from '../../../lib/sample-data';

export async function GET() {
  return NextResponse.json({ products });
}
