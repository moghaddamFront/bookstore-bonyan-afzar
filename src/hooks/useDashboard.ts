import { DashboardService } from '@/services/dshboard';
import { useQuery } from '@tanstack/react-query';

export const useDashboard = () => {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: DashboardService.getDashboardData,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
