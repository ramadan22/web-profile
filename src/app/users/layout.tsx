import type { Metadata } from 'next';
import '@/assets/styles/globals.css';
import Sidebar from '@/ui/sidebar';

export const metadata: Metadata = {
  title: 'Users',
  description: 'Users',
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 h-screen relative">
      <div className="w-full h-full absolute inset-0 p-5 overflow-y-auto">
        {children}
      </div>
    </div>
  </div>
);

export default Layout;
