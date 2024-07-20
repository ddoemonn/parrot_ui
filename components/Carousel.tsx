import React from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

export default function Carousel() {
  return (
    <div className="flex items-center gap-10 justify-between w-full h-56">
      <button className="p-2 rounded-full bg-gray-200 text-gray-600">
        <ArrowLeftIcon />
      </button>
      <div className="bg-blue-200 flex-1 h-full text-center">1</div>
      <button className="p-2 rounded-full bg-gray-200 text-gray-600">
        <ArrowRightIcon />
      </button>
    </div>
  );
}
