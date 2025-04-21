export interface DashboardData {
  ordersCount: number;
  totalSpent: number;
  lastOrderDate: string;
  status: string;
  recentOrders: {
    id: string;
    date: string;
    amount: number;
  }[];
}
