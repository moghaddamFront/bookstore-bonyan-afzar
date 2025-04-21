// src/services/products.ts
import { mockProducts } from '@/__mocks__/data';
import { Product } from '@/types/Product';

export const ProductService = {
  getProducts: async (): Promise<Product[]> => {
    // شبیه‌سازی خطا برای تست Error Boundary (اختیاری)
    if (Math.random() > 0.95) {
      throw new Error('خطای تصادفی برای تست');
    }

    return new Promise((resolve) => {
      setTimeout(() => resolve(mockProducts), 1000);
    });
  },

  // اضافه کردن متد جدید برای دریافت تک محصول
  getProductById: async (id: string): Promise<Product | undefined> => {
    return mockProducts.find((p) => p.id === id);
  },
};

// // src/services/products.ts
// import axiosInstance from '@/lib/api/axiosInstance';
// import { Product } from '@/types/Product';

// // تابع برای گرفتن محصولات
// export const ProductService = {
//   getProducts: async (): Promise<Product[]> => {
//     try {
//       const response = await axiosInstance.get('/products'); // از axiosInstance استفاده می‌کنیم
//       return response.data; // فرض بر این است که داده‌های محصولات در اینجا برمی‌گردند
//     } catch (error) {
//       throw new Error('دریافت محصولات با مشکل مواجه شد');
//     }
//   },
// };
