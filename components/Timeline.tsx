// src/components/Timeline.tsx
import React from 'react';

type TimelineItem = {
  date: string;
  content: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative border-l border-gray-200 dark:border-gray-700">
      {items.map((item, index) => (
        <div
          key={index}
          className="mb-10 ml-6"
        >
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-3 h-3 text-blue-600 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 00-2 0v2a1 1 0 002 0V7zm0 4a1 1 0 00-2 0v2a1 1 0 002 0v-2z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <time className="mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">{item.date}</time>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
