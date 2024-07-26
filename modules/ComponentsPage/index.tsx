import NavigationMenu from '@/components/NavigationMenu';
import ScrollArea from '@/components/ScrollArea';

import { navItems } from './navItems';

export default function ComponentsPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex overflow-hidden">
      <ScrollArea className=" w-1/5 shadow-lg ">
        <NavigationMenu
          items={navItems}
          direction="horizontal"
        />
      </ScrollArea>
      {children}
    </div>
  );
}
