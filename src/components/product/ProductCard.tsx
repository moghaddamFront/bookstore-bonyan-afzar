'use client';

import Image from 'next/image';
import { Product } from '@/types/Product';
import { useAppDispatch } from '@/store/store';
import { addItem } from '@/store/features/cartSlice';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    console.log('اضافه شد به سبد', product);
    dispatch(addItem(product));
  };

  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col justify-between">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-2">{product.description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-blue-600 font-bold">
          {product.price.toLocaleString()} تومان
        </span>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded transition"
        >
          افزودن به سبد
        </button>
      </div>
    </div>
  );
};
