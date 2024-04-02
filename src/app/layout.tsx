import { ToastifyProvider } from '@/lib/providers/toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/assets/styles/globals.css';
import ReactQueryClientProvider from '@/lib/providers/react-query';

export const metadata = {
  title: 'Haris Ramadan',
  description: 'Frontend Developer, Frontend Engineer, Web Profile, Programmer, Indonesia, Jakarta, Tangerang',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <html lang="en">
    <body>
      <ReactQueryClientProvider>
        <ToastifyProvider>
          {children}
        </ToastifyProvider>
      </ReactQueryClientProvider>
    </body>
  </html>
);

export default RootLayout;
