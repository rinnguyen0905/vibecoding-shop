import Link from 'next/link';
import type { Product } from '../lib/types';

type ProductCardProps = {
  product: Product;
  onAdd: (product: Product) => void;
};

export function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <article className="card">
      {product.image_url && (
        <Link href={`/products/${product.id}`} className="card-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image_url} alt={product.name} />
        </Link>
      )}
      <p className="badge">{product.category}</p>
      <h2>
        <Link href={`/products/${product.id}`} className="card-title">
          {product.name}
        </Link>
      </h2>
      <p>{product.description}</p>
      <div className="product-footer">
        <span>{product.price.toLocaleString('vi-VN')} ₫</span>
        <button className="button" type="button" onClick={() => onAdd(product)}>
          Thêm vào giỏ
        </button>
      </div>
    </article>
  );
}
