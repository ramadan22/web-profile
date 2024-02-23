'use client';

import { ToastContainer } from 'react-toastify';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type Props = {
  children?: React.ReactNode;
};

export const ToastifyProvider = ({
  children,
}: Props) => (
  <>
    {children}
    <ToastContainer />
  </>
);

export const ReactQueryClientProvider = ({
  children,
}: Props) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
      {children}
    </QueryClientProvider>
  );
};
