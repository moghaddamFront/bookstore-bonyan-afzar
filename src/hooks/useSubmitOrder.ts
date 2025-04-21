// src/hooks/useSubmitOrder.ts
import { useMutation } from '@tanstack/react-query';
import { CartItem } from '@/types/CartItem';
import { Order } from '@/types/Order';
import { OrderService } from '@/services/orders';

export const useSubmitOrder = () => {
  return useMutation<Order, Error, CartItem[]>({
    mutationFn: OrderService.submitOrder,
  });
};
