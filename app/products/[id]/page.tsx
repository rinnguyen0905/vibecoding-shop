import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../lib/products';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: PageProps) {
  const product = await getProductById(params.id);
  return {
    title: product ? `${product.name} - VibeCoding Shop` : 'Sản phẩm - VibeCoding Shop',
    description: product?.description ?? 'Chi tiết sản phẩm',
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const product = await getProductById(params.id);
  if (!product) notFound();

  return (
    <main className="page-shell">
      <nav className="breadcrumb">
        <Link href="/">← Quay lại danh sách</Link>
      </nav>

      <article className="detail">
        <div className="detail-media">
          {product.image_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={product.image_url} alt={product.name} />
          ) : (
            <div className="detail-placeholder">Không có ảnh</div>
          )}
        </div>

        <div className="detail-body">
          <p className="badge">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="detail-price">
            {product.price.toLocaleString('vi-VN')} ₫
          </p>
          <p className="detail-desc">{product.description}</p>

          <dl className="detail-meta">
            <div>
              <dt>Mã sản phẩm</dt>
              <dd>{product.id}</dd>
            </div>
            <div>
              <dt>Tồn kho</dt>
              <dd>{product.stock ?? 0}</dd>
            </div>
            {product.created_at && (
              <div>
                <dt>Ngày tạo</dt>
                <dd>{new Date(product.created_at).toLocaleString('vi-VN')}</dd>
              </div>
            )}
          </dl>

          <Link href="/" className="button">
            Tiếp tục mua sắm
          </Link>
        </div>
      </article>
    </main>
  );
}
