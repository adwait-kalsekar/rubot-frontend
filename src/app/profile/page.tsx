'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ViewProfile from '@/components/profile/ViewProfile';

const queryClient = new QueryClient();

export default function ProfilePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <ViewProfile />
    </QueryClientProvider>
  );
}
