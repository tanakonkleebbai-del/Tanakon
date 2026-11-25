export interface Category {
  _id: string;
  name: string;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  description?: string;
  category?: Category | string;
  image?: string;
  stock?: number;
}
