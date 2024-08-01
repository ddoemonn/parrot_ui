// src/components/Timeline.tsx
import React from 'react';

import { InfoCircledIcon } from '@radix-ui/react-icons';

type TimelineItem = {
  date: string;
  content: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative border-l border-gray-200">
      {items.map((item, index) => (
        <div
          key={index}
          className="mb-10 ml-6"
        >
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
            <InfoCircledIcon className="w-4 h-4 text-blue-500" />
          </span>
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm ">
            <time className="mb-2 text-sm font-normal text-gray-400 ">{item.date}</time>
            <p className="text-sm font-normal text-gray-700 ">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
