import React from 'react';

import NavMenu from '@/components/NavigationMenu';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '#',
    subItems: [
      { label: 'Web Development', href: '/web-development' },
      { label: 'App Development', href: '/app-development' },
    ],
  },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const NavigationMenuExample: React.FC = () => (
  <div>
    <NavMenu items={navItems} />
  </div>
);

export default NavigationMenuExample;
