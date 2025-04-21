// src/app/products/page.tsx
'use client';
import { ProductCard } from '@/components/product/ProductCard';
import { useProducts } from '@/hooks/useProducts';
import Link from 'next/link';

export default function ProductsPage() {
  const { data: products, isLoading, isError, error } = useProducts();

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorDisplay error={error} />;

  return (
    <div className="container mx-auto p-6">
      <Link href="/cart" className="text-blue-500">
        رفتن به سبد خرید
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// کامپوننت‌های کمکی:
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const ErrorDisplay = ({ error }: { error: Error }) => (
  <div className="flex justify-center items-center h-screen">
    <div className="text-xl text-red-600">
      {error.message || 'خطا در دریافت داده‌ها'}
    </div>
  </div>
);
