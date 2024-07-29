import React from 'react';

import NavMenu from '@/components/NavigationMenu';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const navMenuCode = `import { useState, useEffect } from 'react';
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
      className={\`block px-4 py-2 last:pr-0 first:flex-1 first:hover:no-underline first:pl-0 \${activeTab === item.href ? 'text-blue-500' : 'text-gray-500'}\`}
      onClick={() => setActiveTab(item.href)}
    >
      {item.renderItem}
    </Link>
  );

  const renderHorizontal = (item: NavItem) => (
    <Link
      key={item.href}
      href={item.href}
      className={\`block px-2 py-3 last:pr-0 last:flex-1 first:hover:no-underline \${activeTab === item.href ? 'text-indigo-500 font-medium' : 'text-black'}\`}
      onClick={() => setActiveTab(item.href)}
    >
      {item.renderItem}
    </Link>
  );

  return (
    <nav
      className={\`\${direction === 'vertical'
        ? 'z-10 bg-white py-2 px-6 w-full flex items-center shadow-sm text-sm font-medium'
        : 'py-3 px-6 w-full flex flex-col max-h-svh'
      }\`}
    >
      {items.map(item => (direction === 'vertical' ? renderVertical(item) : renderHorizontal(item)))}
    </nav>
  );
};

export default NavMenu;
`;

const navMenuUsage = `import React from 'react';

import NavMenu from '@/components/NavigationMenu';

const navItems = [
  {
    href: '/',
    renderItem: (
      <div className="flex items-center">
        <p className="ml-2 font-semibold text-2xl mt-1 bg-gradient-to-r from-indigo-400 via-green-500 to-yellow-500 text-transparent bg-clip-text">
          ParrotUI 🦜
        </p>
      </div>
    ),
  },
  {
    href: '/examples',
    renderItem: <span className="text-blue-500 hover:underline text-lg font-semibold">Examples</span>,
  },
  {
    href: '/components/accordion',
    renderItem: <span className="text-green-500 hover:underline text-lg font-semibold">Components</span>,
  },
  {
    href: '/resources',
    renderItem: <span className="text-indigo-500 hover:underline text-lg font-semibold">Resources</span>,
  },
];

export default function NavigationMenu() {
  return (
    <div>
      <NavMenu items={navItems} />
    </div>
  );
}
`;

export default function NavMenuPage() {
  const navItems = [
    {
      href: '/',
      renderItem: (
        <div className="flex items-center">
          <p className="ml-2 font-semibold text-2xl mt-1 bg-gradient-to-r from-indigo-400 via-green-500 to-yellow-500 text-transparent bg-clip-text">
            ParrotUI 🦜
          </p>
        </div>
      ),
    },
    {
      href: '/examples',
      renderItem: <span className="text-blue-500 hover:underline text-lg font-semibold">Examples</span>,
    },
    {
      href: '/components/accordion',
      renderItem: <span className="text-green-500 hover:underline text-lg font-semibold">Components</span>,
    },
    {
      href: '/resources',
      renderItem: <span className="text-indigo-500 hover:underline text-lg font-semibold">Resources</span>,
    },
  ];

  return (
    <ComponentDetail
      usage={navMenuUsage}
      code={navMenuCode}
      component={
        <div>
          <NavMenu items={navItems} />
        </div>
      }
      name="NavMenu"
      detail="The NavMenu component displays a list of navigation links with customizable styles and directions. It can be oriented horizontally or vertically."
    />
  );
}
