// app/checkout/page.tsx
'use client';

import { useAppSelector, useAppDispatch } from '@/store/store';
import { useSubmitOrder } from '@/hooks/useSubmitOrder';
import { clearCart } from '@/store/features/cartSlice';

export default function CheckoutPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const { mutate, isPending, isSuccess, data } = useSubmitOrder();

  const handleSubmit = () => {
    mutate(cartItems, {
      onSuccess: () => {
        dispatch(clearCart());
      },
    });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-4">بررسی و ثبت سفارش</h1>

      {isSuccess && data ? (
        <div className="bg-green-100 p-4 rounded">
          سفارش شما با موفقیت ثبت شد. کد سفارش: <strong>{data.id}</strong>
        </div>
      ) : (
        <>
          <ul className="mb-4 space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>
                  {(item.price * item.quantity).toLocaleString()} تومان
                </span>
              </li>
            ))}
          </ul>

          <div className="text-right font-bold mb-4">
            مجموع قابل پرداخت: {total.toLocaleString()} تومان
          </div>

          <button
            onClick={handleSubmit}
            disabled={isPending}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {isPending ? 'در حال ثبت سفارش...' : 'ثبت سفارش'}
          </button>
        </>
      )}
    </div>
  );
}
