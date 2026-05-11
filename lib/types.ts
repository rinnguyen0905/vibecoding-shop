export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url?: string | null;
  stock?: number;
  created_at?: string;
};
