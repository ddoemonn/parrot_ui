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

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b-2  rounded-sm pb-2"
        >
          <div className="flex justify-between items-center w-full rounded-md px-4 py-2 text-left">
            <span>{item.title}</span>
            <button
              className={`transform transition-transform duration-300 focus:outline-none ${activeIndex === index ? 'rotate-180' : ''}`}
              onClick={() => handleToggle(index)}
            >
              <ArrowDownIcon />
            </button>
          </div>
          <div
            className={`rounded-xl overflow-hidden  transition-all duration-300  ${activeIndex === index ? 'max-h-40 ease-in' : 'max-h-0 ease-out opacity-0'}`}
          >
            <div className=" p-4 pt-2 rounded-xl">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
