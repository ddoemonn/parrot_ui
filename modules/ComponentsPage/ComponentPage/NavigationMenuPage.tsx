import React from 'react';

import NavMenu from '@/components/NavigationMenu';

const navItems = [
  { href: '/', renderItem: <span>home</span> },
  { href: '/about', renderItem: <span>about</span> },
  { href: '/contact', renderItem: <span>contact</span> },
];

export default function NavigationMenu() {
  return (
    <div>
      <NavMenu items={navItems} />
    </div>
  );
}
