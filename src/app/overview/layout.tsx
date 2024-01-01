import type { Metadata } from 'next';
import '@/assets/styles/globals.css';
import Sidebar from '@/ui/sidebar';

export const metadata: Metadata = {
  title: 'Overview',
  description: 'Overview',
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 h-screen p-5">
      {children}
    </div>
  </div>
);

export default Layout;
