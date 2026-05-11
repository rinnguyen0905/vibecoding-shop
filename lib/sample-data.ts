import type { Product } from './types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Áo thun VibeCoding',
    description: 'Áo thun cotton mịn, form unisex, phù hợp phong cách hiện đại.',
    price: 249000,
    category: 'Thời trang',
  },
  {
    id: 'p2',
    name: 'Tai nghe không dây',
    description: 'Tai nghe bluetooth 5.3, chống ồn nhẹ, pin 24 giờ.',
    price: 890000,
    category: 'Điện tử',
  },
  {
    id: 'p3',
    name: 'Balo du lịch',
    description: 'Balo chống nước, nhiều ngăn, phù hợp đi học và đi công tác.',
    price: 549000,
    category: 'Phụ kiện',
  },
  {
    id: 'p4',
    name: 'Sổ tay thiết kế',
    description: 'Sổ tay bìa cứng, giấy cao cấp, dùng để ghi chú và phác thảo ý tưởng.',
    price: 129000,
    category: 'Văn phòng phẩm',
  },
];
