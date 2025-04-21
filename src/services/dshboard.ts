import { mockDashboardData } from '@/__mocks__/data';
import { DashboardData } from '@/types/dashboard';

export const DashboardService = {
  getDashboardData: async (): Promise<DashboardData> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockDashboardData), 1000);
    });

    // بعداً جایگزین می‌کنی با:
    // const res = await axiosInstance.get('/dashboard');
    // return res.data;
  },
};
