'use client';

import { store } from '@/store';
import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NextUIProvider>
          <div>{children}</div>
        </NextUIProvider>
      </Provider>
    </QueryClientProvider>
  );
}
