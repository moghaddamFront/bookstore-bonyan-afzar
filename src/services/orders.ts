// src/services/order.ts
import { CartItem } from '@/types/CartItem';
import { Order } from '@/types/Order';

export const OrderService = {
  submitOrder: async (items: CartItem[]): Promise<Order> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: String(Date.now()),
          date: new Date().toISOString(),
          items,
          amount: items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
          ),
        });
      }, 1000);
    });

    // بعداً اینو با بک‌اند جایگزین می‌کنی:
    // submitOrder: async (items: CartItem[]): Promise<Order> => {
    //     const response = await axiosInstance.post('/orders', { items });
    //     return response.data;
    //   }
  },
};
