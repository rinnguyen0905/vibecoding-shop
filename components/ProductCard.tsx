import type { Product } from '../lib/types';

type ProductCardProps = {
  product: Product;
  onAdd: (product: Product) => void;
};

export function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <article className="card">
      <p className="badge">{product.category}</p>
      <h2>{product.name}</h2>
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
