import { NextAuthProvider, ReactQueryClientProvider, ToastifyProvider } from './providers';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/styles/globals.css';

export const metadata = {
  title: 'Login',
  description: 'Login',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <html lang="en">
    <body>
      <NextAuthProvider>
        <ReactQueryClientProvider>
          <ToastifyProvider>
            {children}
          </ToastifyProvider>
        </ReactQueryClientProvider>
      </NextAuthProvider>
    </body>
  </html>
);

export default RootLayout;
