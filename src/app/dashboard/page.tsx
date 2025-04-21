'use client';

import React from 'react';
import { useDashboard } from '@/hooks/useDashboard';

type StatCardProps = {
  title: string;
  value: string | number;
};

function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow text-center">
      <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
      <p className="text-xl font-bold text-gray-800">{value}</p>
    </div>
  );
}

export default function DashboardPage() {
  const { data, isLoading, isError, error } = useDashboard();

  if (isError)
    return <div className="p-6 text-red-600">خطا: {error?.message}</div>;
  if (isLoading || !data)
    return <div className="p-6 text-center">در حال بارگذاری...</div>;

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">داشبورد کاربر</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatCard title="تعداد سفارش‌ها" value={data.ordersCount} />
        <StatCard
          title="مجموع پرداخت"
          value={`${data.totalSpent.toLocaleString()} تومان`}
        />
        <StatCard title="تاریخ آخرین سفارش" value={data.lastOrderDate} />
        <StatCard title="وضعیت حساب" value={data.status} />
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">سفارش‌های اخیر</h2>
        {data.recentOrders.length === 0 ? (
          <p className="text-gray-500">هیچ سفارشی وجود ندارد</p>
        ) : (
          <ul className="space-y-3">
            {data.recentOrders.map((order) => (
              <li
                key={order.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <span>سفارش #{order.id}</span>
                <span className="text-sm text-gray-600">{order.date}</span>
                <span className="font-semibold">
                  {order.amount.toLocaleString()} تومان
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
