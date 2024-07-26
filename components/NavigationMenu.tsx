import React from 'react';

interface NavItem {
  href: string;
  renderItem?: React.ReactNode;
}

interface NavMenuProps {
  items: NavItem[];
  direction?: 'horizontal' | 'vertical';
}

const NavMenu: React.FC<NavMenuProps> = ({ items, direction = 'vertical' }) => {
  const renderVertical = (item: NavItem) => (
    <>
      {item.renderItem && (
        <a
          href={item.href}
          className="block px-4 py-2 last:pr-0  first:flex-1 first:hover:no-underline first:pl-0"
        >
          {item.renderItem}
        </a>
      )}
    </>
  );

  const renderHorizontal = (item: NavItem) => (
    <>
      {item.renderItem && (
        <>
          <a
            href={item.href}
            className="block px-2 py-3 last:pr-0 last:flex-1 first:hover:no-underline"
          >
            {item.renderItem}
          </a>
        </>
      )}
    </>
  );

  return (
    <>
      {direction === 'vertical' ? (
        <nav className="z-10 bg-white py-2 px-6 w-full flex items-center  shadow-sm text-sm font-medium">{items.map(item => renderVertical(item))}</nav>
      ) : (
        <nav className="py-3 px-6 w-full flex flex-col shadow-sm max-h-svh ">{items.map(item => renderHorizontal(item))}</nav>
      )}
    </>
  );
};

export default NavMenu;
