import { useState, useEffect } from 'react';

import Link from 'next/link';

interface NavItem {
  href: string;
  renderItem?: React.ReactNode;
}

interface NavMenuProps {
  items: NavItem[];
  direction?: 'horizontal' | 'vertical';
}

const NavMenu: React.FC<NavMenuProps> = ({ items, direction = 'vertical' }) => {
  const [activeTab, setActiveTab] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      setActiveTab(currentPath);
    }
  }, []);

  const renderVertical = (item: NavItem) => (
    <Link
      key={item.href}
      href={item.href}
      className={`block px-4 py-2 last:pr-0 first:flex-1 first:hover:no-underline first:pl-0 ${activeTab === item.href ? 'text-blue-500' : 'text-gray-500'}`}
      onClick={() => setActiveTab(item.href)}
    >
      {item.renderItem}
    </Link>
  );

  const renderHorizontal = (item: NavItem) => (
    <Link
      key={item.href}
      href={item.href}
      className={`block px-2 py-3 last:pr-0 last:flex-1 first:hover:no-underline ${activeTab === item.href ? 'text-indigo-500 font-medium' : 'text-black'}`}
      onClick={() => setActiveTab(item.href)}
    >
      {item.renderItem}
    </Link>
  );

  return (
    <nav
      className={`${
        direction === 'vertical'
          ? 'z-10 bg-white py-2 px-6 w-full flex items-center shadow-sm text-sm font-medium'
          : 'py-3 px-6 w-full flex flex-col max-h-svh '
      }`}
    >
      {items.map(item => (direction === 'vertical' ? renderVertical(item) : renderHorizontal(item)))}
    </nav>
  );
};

export default NavMenu;
