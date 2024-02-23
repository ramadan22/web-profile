import { ReactQueryClientProvider, ToastifyProvider } from './providers';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/styles/globals.css';

export const metadata = {
  title: 'Haris Ramadan',
  description: 'Frontend Developer, Frontend Engineer, Web Profile, Programmer',
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
