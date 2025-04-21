// // hooks/useCart.ts
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { CartService } from '@/services/cart';
// import { CartItem } from '@/types/CartItem';

// export const useCart = () => {
//   const queryClient = useQueryClient();

//   const cartQuery = useQuery<CartItem[]>({
//     queryKey: ['cart'],
//     queryFn: CartService.getCart,
//   });

//   const addToCart = useMutation({
//     mutationFn: CartService.addToCart,
//     onSuccess: () => queryClient.invalidateQueries(['cart']),
//   });

//   const removeFromCart = useMutation({
//     mutationFn: CartService.removeFromCart,
//     onSuccess: () => queryClient.invalidateQueries(['cart']),
//   });

//   const clearCart = useMutation({
//     mutationFn: CartService.clearCart,
//     onSuccess: () => queryClient.invalidateQueries(['cart']),
//   });

//   return {
//     ...cartQuery,
//     addToCart,
//     removeFromCart,
//     clearCart,
//   };
// };
