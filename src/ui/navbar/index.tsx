'use client';

import Link from 'next/link';

const NavbarUI = () => (
  <nav id="navbar" className="fixed top-0 inset-x-0 border-b border-gray-lightest shadow-lg bg-white z-[2]">
    <div className="container flex justify-between py-4 items-center mx-auto">
      <div className="text-3xl">
        Harisramadan
        <span className="text-primary text-5xl">Code</span>
      </div>
      <ul className="flex gap-x-8 [&>li>a]:text-primary [&>li>a:hover]:text-primary/50 [&>li>a]:text-lg">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">Profile</Link></li>
        <li><Link href="/">Articles</Link></li>
        <li><Link href="/">Portfolio test</Link></li>
        <li><Link href="/">Contact Me</Link></li>
      </ul>
    </div>
  </nav>
);

export default NavbarUI;
