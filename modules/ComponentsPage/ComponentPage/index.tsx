import React from 'react';

import AccordionPage from './AccordionPage';

interface ComponentsPageProps {
  slug: string;
}

export default function ComponentPage({ slug }: ComponentsPageProps) {
  if (slug === 'accordion') return <AccordionPage />;
  else return <div>Component not found</div>;
}
