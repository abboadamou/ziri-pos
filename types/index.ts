export interface BasketItem {
  product: Product;
  quantity: number;
}

export interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
}

export interface BasketState {
  items: BasketItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  clearBasket: () => void;
  getTotalPrice: () => number;
  getItemCount: (id: string) => number;
  getGroupedItems: () => BasketItem[];
}
