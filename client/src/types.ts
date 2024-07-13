export interface Category {
  id: number;
  name: string;
  articles: Article[];
  articleCount: number;
  childCategories: ChildCategory[];
}

export interface Article {
  name: string;
  variantName: string;
  prices: Prices;
  images: Image[];
}

export interface ChildCategory {
  name: string;
  urlPath: string;
}

export interface Prices {
  currency: string;
  value: number;
}

export interface Image {
  path: string;
}

export interface CartItem extends Article {
  quantity: number;
}
