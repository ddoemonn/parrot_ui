import NavigationMenu from '@/components/NavigationMenu';
import ScrollArea from '@/components/ScrollArea';

import ComponentPage from './ComponentPage';
import { navItems } from './navItems';

interface ComponentsPageProps {
  slug?: string;
}

export default function ComponentsPage({ slug }: ComponentsPageProps) {
  return (
    <div className="flex overflow-hidden">
      <ScrollArea className=" w-1/5 shadow-lg ">
        <NavigationMenu
          items={navItems}
          direction="horizontal"
        />
      </ScrollArea>
      <ComponentPage slug={slug || 'Accordion'} />
    </div>
  );
}
