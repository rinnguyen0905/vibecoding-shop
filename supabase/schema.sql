-- VibeCoding Shop - Supabase schema
-- Chay file nay trong Supabase SQL Editor (Project -> SQL Editor -> New query)

-- 1) Bang products
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null default '',
  price integer not null check (price >= 0),
  category text not null default 'Khac',
  image_url text,
  stock integer not null default 0 check (stock >= 0),
  created_at timestamptz not null default now()
);

-- 2) Index
create index if not exists products_category_idx on public.products (category);
create index if not exists products_created_at_idx on public.products (created_at desc);

-- 3) Bat Row Level Security va cho phep doc cong khai (anon)
alter table public.products enable row level security;

drop policy if exists "Public read products" on public.products;
create policy "Public read products"
  on public.products
  for select
  to anon, authenticated
  using (true);

-- (Tuy chon) Cho phep authenticated user insert/update/delete - bo comment khi can
-- create policy "Authenticated write products" on public.products
--   for all to authenticated using (true) with check (true);

-- 4) Seed du lieu mau (chi insert khi bang trong)
insert into public.products (name, description, price, category, image_url, stock)
select * from (values
  ('Ao thun VibeCoding', 'Ao thun cotton min, form unisex, phu hop phong cach hien dai.', 249000, 'Thoi trang', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600', 50),
  ('Tai nghe khong day', 'Tai nghe bluetooth 5.3, chong on nhe, pin 24 gio.', 890000, 'Dien tu', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600', 20),
  ('Balo du lich', 'Balo chong nuoc, nhieu ngan, phu hop di hoc va di cong tac.', 549000, 'Phu kien', 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600', 30),
  ('So tay thiet ke', 'So tay bia cung, giay cao cap, dung de ghi chu va phac thao y tuong.', 129000, 'Van phong pham', 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600', 100)
) as v(name, description, price, category, image_url, stock)
where not exists (select 1 from public.products);
