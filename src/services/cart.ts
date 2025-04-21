// // services/cart.ts
// import { CartItem } from '@/types/CartItem';

// export const CartService = {
//   getCart: async (): Promise<CartItem[]> => {
//     const response = await fetch('/api/cart');
//     if (!response.ok) throw new Error('Failed to load cart');
//     return response.json();
//   },
//   addToCart: async (item: CartItem) => {
//     return fetch('/api/cart', {
//       method: 'POST',
//       body: JSON.stringify(item),
//       headers: { 'Content-Type': 'application/json' },
//     });
//   },
//   removeFromCart: async (id: string) => {
//     return fetch(`/api/cart/${id}`, { method: 'DELETE' });
//   },
//   clearCart: async () => {
//     return fetch(`/api/cart/clear`, { method: 'POST' });
//   },
// };
