# VibeCoding Shop

Trang web thương mại điện tử mẫu được triển khai bằng Next.js và TypeScript.

## Nội dung
- Frontend: `Next.js` (App Router)
- API: `/api/products` trả danh sách sản phẩm mẫu
- Giỏ hàng: quản lý trạng thái cart trên client
- Database: hiện tại dùng dữ liệu giả lập, có thể tích hợp Supabase khi cần

## Cài đặt

```bash
npm install
npm run dev
```

Mở `http://localhost:3000` để xem ứng dụng.

## Triển khai lên Vercel

1. Cài Vercel CLI nếu chưa có:

```bash
npm install -g vercel
```

2. Đăng nhập Vercel:

```bash
vercel login
```

3. Triển khai lần đầu:

```bash
vercel
```

4. Triển khai môi trường production:

```bash
npm run deploy
```

**Lưu ý:** `vercel.json` đã được cấu hình sẵn cho ứng dụng Next.js.

## Kéo dài
- Thêm Supabase để lưu sản phẩm, người dùng và đơn hàng
- Tạo trang chi tiết sản phẩm và thanh toán giả lập
- Thêm authentication và dashboard quản trị
