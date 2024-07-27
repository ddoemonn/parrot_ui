import React from 'react';

import AccordionPage from './AccordionPage';
import TabsPage from './TabsPage';

interface ComponentsPageProps {
  slug: string;
}

export default function ComponentPage({ slug }: ComponentsPageProps) {
  if (slug === 'accordion') return <AccordionPage />;
  if (slug === 'tabs') return <TabsPage />;
  else return <div>Component not found</div>;
}
