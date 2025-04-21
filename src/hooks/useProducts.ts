// src/hooks/useProducts.ts
import { useQuery } from '@tanstack/react-query';
import { ProductService } from '@/services/products';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: ProductService.getProducts,
    staleTime: 1000 * 60 * 5, // 5 دقیقه
    refetchOnWindowFocus: false, // پیشنهاد برای داده‌های استاتیک
  });
};
