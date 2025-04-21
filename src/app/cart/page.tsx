'use client';

import { useAppDispatch, useAppSelector } from '@/store/store';
import {
  removeItem,
  decreaseQuantity,
  addItem,
  clearCart,
} from '@/store/features/cartSlice';
import Link from 'next/link';

export default function CartPage() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="container mx-auto p-6">
      <Link
        href="/checkout"
        className="text-blue-500 underline mt-4 block text-right"
      >
        ادامه به پرداخت
      </Link>
      <h1 className="text-2xl font-bold mb-4">سبد خرید</h1>
      {cartItems.length === 0 ? (
        <p>سبد خرید شما خالی است</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>{item.price.toLocaleString()} تومان</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="px-2 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(addItem(item))}
                  className="px-2 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="text-red-500 text-sm"
              >
                حذف
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-lg mt-4">
            مجموع: {totalPrice.toLocaleString()} تومان
          </div>
          <div className="text-right mt-2">
            <button
              onClick={() => dispatch(clearCart())}
              className="text-sm text-red-600 underline"
            >
              پاک‌سازی سبد خرید
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
