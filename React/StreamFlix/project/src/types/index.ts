export interface Movie {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  rating: number;
}

export type Language = 'en' | 'pt';
export type Theme = 'light' | 'dark';