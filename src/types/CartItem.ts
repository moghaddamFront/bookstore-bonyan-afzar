// src/types/CartItem.ts

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string; // اختیاری – برای نمایش در UI
}
