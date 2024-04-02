'use client';

import { ToastContainer } from 'react-toastify';

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
