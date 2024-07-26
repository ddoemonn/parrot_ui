import React from 'react';

import Accordion from '@/components/Accordion';

export default function AccordionPage() {
  return (
    <Accordion
      items={[
        {
          title: 'Accordion 1',
          content: 'Content 1',
        },
        {
          title: 'Accordion 2',
          content: 'Content 2',
        },
        {
          title: 'Accordion 3',
          content: 'Content 3',
        },
      ]}
    />
  );
}
