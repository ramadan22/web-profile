'use client';

import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({
  children,
}: Props) => <SessionProvider>{children}</SessionProvider>;

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
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};
