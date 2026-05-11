'use client';

import { useEffect, useState } from 'react';
import { CartDrawer } from '../components/CartDrawer';
import { ProductCard } from '../components/ProductCard';
import type { Product } from '../lib/types';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data.products);
    };

    loadProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCartItems((current) => [...current, product]);
  };

  const removeFromCart = (index: number) => {
    setCartItems((current) => current.filter((_, idx) => idx !== index));
  };

  return (
    <main className="page-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">VibeCoding Shop</p>
          <h1>Thương mại điện tử mẫu bằng Next.js</h1>
          <p>Danh sách sản phẩm, giỏ hàng và API mẫu để bắt đầu phát triển.</p>
        </div>
        <CartDrawer items={cartItems} onRemove={removeFromCart} />
      </header>

      <section className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addToCart} />
          ))
        ) : (
          <p>Đang tải sản phẩm...</p>
        )}
      </section>
    </main>
  );
}
