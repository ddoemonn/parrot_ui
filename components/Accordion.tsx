import React, { useState } from 'react';

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
        <div
          key={index}
          className="border-b-2 rounded-sm pb-2"
        >
          <div
            onClick={() => handleToggle(index)}
            onKeyDown={event => handleKeyDown(event, index)}
            role="button"
            aria-expanded={activeIndex === index}
            aria-controls={`content-${index}`}
            tabIndex={0}
            className="hover:underline cursor-pointer flex justify-between items-center w-full rounded-md px-4 py-2 text-left"
          >
            <span>{item.title}</span>
            <ArrowDownIcon
              className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </div>
          <div
            id={`content-${index}`}
            role="region"
            aria-labelledby={`title-${index}`}
            className={`rounded-xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40 ease-in' : 'max-h-0 ease-out opacity-0'}`}
          >
            <div className="p-4 pt-2 rounded-xl">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
