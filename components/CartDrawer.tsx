import type { Product } from '../lib/types';

type CartDrawerProps = {
  items: Product[];
  onRemove: (index: number) => void;
};

export function CartDrawer({ items, onRemove }: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="cart-panel">
      <h2>Giỏ hàng</h2>
      {items.length === 0 ? (
        <p>Chưa có sản phẩm nào trong giỏ.</p>
      ) : (
        <>
          {items.map((item, index) => (
            <div className="cart-item" key={`${item.id}-${index}`}>
              <div>
                <p>{item.name}</p>
                <p>{item.price.toLocaleString('vi-VN')} ₫</p>
              </div>
              <button type="button" onClick={() => onRemove(index)}>
                Xóa
              </button>
            </div>
          ))}
          <div className="cart-summary">Tổng: {total.toLocaleString('vi-VN')} ₫</div>
        </>
      )}
    </section>
  );
}
