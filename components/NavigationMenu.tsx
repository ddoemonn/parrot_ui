import React, { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

interface NavMenuProps {
  items: NavItem[];
}

const NavMenu: React.FC<NavMenuProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderNavItem = (item: NavItem, index: number) => (
    <div
      key={index}
      className="relative "
    >
      <a
        href={item.href}
        className="block px-4 py-2 text-white hover:bg-gray-700 rounded-xl"
        onClick={e => {
          if (item.subItems) {
            e.preventDefault();
            handleToggle(index);
          }
        }}
      >
        {item.label}
      </a>
      {item.subItems && openIndex === index && (
        <div className="absolute left-0 mt-2 bg-gray-800 text-white rounded-xl shadow-lg">
          {item.subItems.map((subItem, subIndex) => (
            <a
              key={subIndex}
              href={subItem.href}
              className="block px-4 py-2 hover:bg-gray-600 rounded-xl"
            >
              {subItem.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav className="bg-gray-800 rounded-xl">
      <div className="container mx-auto flex space-x-4">{items.map((item, index) => renderNavItem(item, index))}</div>
    </nav>
  );
};

export default NavMenu;
