// store/features/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '@/types/CartItem';
import { Product } from '@/types/Product';

const initialState = {
  items: [] as CartItem[],
  loading: false,
  error: null as string | null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // افزودن محصول به سبد
    addItem: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // حذف یک آیتم خاص از سبد
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // پاک کردن کل سبد خرید
    clearCart: (state) => {
      state.items = [];
    },
    // کاهش تعداد یک آیتم خاص
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
  },
});

// خروجی اکشن‌ها و ریدوسر
export const { addItem, removeItem, clearCart, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
