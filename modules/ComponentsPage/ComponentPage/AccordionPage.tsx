// src/pages/AccordionPage.tsx
import React from 'react';

import Accordion from '@/components/Accordion';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const accordionCode = `import React, { useState } from 'react';
import { ArrowDownIcon } from '@radix-ui/react-icons';

type AccordionItemProps = {
  title: string;
  content: string;
  color?: string;
};

type AccordionProps = {
  items: AccordionItemProps[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle(index);
    }
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border-b-2 rounded-sm pb-2">
          <div
            onClick={() => handleToggle(index)}
            onKeyDown={event => handleKeyDown(event, index)}
            role="button"
            aria-expanded={activeIndex === index}
            aria-controls={\`content-\${index}\`}
            tabIndex={0}
            className="hover:underline cursor-pointer flex justify-between items-center w-full rounded-md px-4 py-2 text-left"
          >
            <span>{item.title}</span>
            <ArrowDownIcon
              className={\`transform transition-transform duration-300 \${activeIndex === index ? 'rotate-180' : ''}\`}
              aria-hidden="true"
            />
          </div>
          <div
            id={\`content-\${index}\`}
            role="region"
            aria-labelledby={\`title-\${index}\`}
            className={\`rounded-xl overflow-hidden transition-all duration-300 \${activeIndex === index ? 'max-h-40 ease-in' : 'max-h-0 ease-out opacity-0'}\`}
          >
            <div className="p-4 pt-2 rounded-xl">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
`;

const accordionUsage = `<Accordion
    items={[
      {
        title: 'Introduction to React',
        content:
          'React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.',
      },
      {
        title: 'Understanding Components',
        content:
          'Components are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation.',
      },
      {
        title: 'State and Props',
        content:
          'State and props are essential concepts in React. State is a local data storage that is local to the component only and cannot be passed to other components, while props are used to pass data from one component to another.',
      },
      ]}
/>
`;

export default function AccordionPage() {
  return (
    <ComponentDetail
      usage={accordionUsage}
      code={accordionCode}
      component={
        <div className="max-w-full max-h-96 lg:max-w-3xl">
          <Accordion
            items={[
              {
                title: 'Introduction to React',
                content:
                  'React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.',
              },
              {
                title: 'Understanding Components',
                content:
                  'Components are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation.',
              },
              {
                title: 'State and Props',
                content:
                  'State and props are essential concepts in React. State is a local data storage that is local to the component only and cannot be passed to other components, while props are used to pass data from one component to another.',
              },
            ]}
          />
        </div>
      }
      detail="An accordion is a vertically stacked list of interactive headings that hide or reveal content associated with the headings when clicked."
      name="Accordion"
    />
  );
}
