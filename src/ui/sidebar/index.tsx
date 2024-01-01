'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import Button from '@/components/button';
import Icon from '@/components/icon';
import { menuItems } from '@/data/NavbarMenuItems';
import { cn } from '@/lib/classnames';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-[225px] w-max-[300px] flex flex-col border-r border-black/50 [&>ul>li]:rounded-l-lg [&>ul>li:hover]:bg-black/10 bg-gradient-to-b text-gray-light/60 from-gray-800 via-gray-800 to-black h-screen">
      <ul className="flex-1 pl-2 py-5">
        {menuItems.map((item) => (
          <li key={item.link} className={cn('w-full', pathname === item.link && 'bg-black/10 text-white')}>
            <Link href={item.link} className="text-sm flex items-center gap-x-4 py-5 px-4">
              <Icon type={item.icon} className="flex w-5" />
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="px-4 pb-4">
        <Button
          onClick={() => signOut()}
          className="w-full"
          size="sm"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
