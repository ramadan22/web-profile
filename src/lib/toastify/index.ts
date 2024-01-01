import { ToastOptions, toast } from 'react-toastify';

export const messageError = (message: string, options?: ToastOptions) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    ...options,
  });
};

export const messageSuccess = (message: string) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
