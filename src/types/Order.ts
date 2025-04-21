// src/types/Order.ts

import { CartItem } from './CartItem';

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  amount: number;
}
