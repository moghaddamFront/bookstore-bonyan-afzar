// somewhere in app/page.tsx
'use client';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { addItem } from '@/store/features/cartSlice';
import { Product } from '@/types/Product';

const dummyProduct: Product = {
  id: 'test-id',
  name: 'محصول تستی',
  description: 'توضیحات...',
  price: 12345,
  category: 'آزمایشی',
  imageUrl: '/image.png',
};

export default function TestPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div>
      <button
        onClick={() => dispatch(addItem(dummyProduct))}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        افزودن تستی
      </button>
      <pre>{JSON.stringify(cartItems, null, 2)}</pre>
    </div>
  );
}
