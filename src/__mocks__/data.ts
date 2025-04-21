import { Product } from '@/types/Product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'محصول اول',
    price: 10000,
    description: 'توضیحات محصول اول',
    imageUrl: '/images/product1.jpg',
    category: 'لوازم خانگی', // اضافه کردن category
  },
  {
    id: '2',
    name: 'محصول دوم',
    price: 20000,
    description: 'توضیحات محصول دوم',
    imageUrl: '/images/product2.jpg',
    category: 'الکترونیک', // اضافه کردن category
  },
  {
    id: '3',
    name: 'محصول سوم',
    price: 30000,
    description: 'توضیحات محصول سوم',
    imageUrl: '/images/product3.jpg',
    category: 'مد و پوشاک', // اضافه کردن category
  },
];

// __mocks__/orders.ts

import { DashboardData } from '@/types/dashboard';

export const mockDashboardData: DashboardData = {
  ordersCount: 4,
  totalSpent: 850000,
  lastOrderDate: '2025-04-20',
  status: 'فعال',
  recentOrders: [
    { id: '101', date: '2025-04-20', amount: 250000 },
    { id: '102', date: '2025-04-18', amount: 200000 },
    { id: '103', date: '2025-04-15', amount: 300000 },
    { id: '104', date: '2025-04-10', amount: 100000 },
  ],
};
