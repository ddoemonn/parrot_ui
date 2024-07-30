import React, { useState, ReactNode } from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

interface CarouselProps {
  children: ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = children.length;

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
  };

  const transformClasses = ` translate-x-[-${currentIndex * 100}%]`;

  return (
    <div className="relative overflow-hidden flex items-center  bg-white">
      <div className="bg-inherit absolute left-0 z-10 p-2 h-64 flex flex-col justify-center">
        <button
          onClick={handlePrev}
          className="border-[1px] border-slate-400 hover:bg-slate-100 p-2 rounded-full focus:outline-none"
        >
          <ArrowLeftIcon
            width={16}
            height={16}
          />
        </button>
      </div>

      <div className={`rounded-xl flex transition-transform transform duration-700 ease-in-out w-full ${transformClasses}`}>
        {children.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex justify-center w-full h-64 rounded-xl  overflow-hidden"
          >
            {child}
          </div>
        ))}
      </div>

      <div className="bg-inherit absolute right-0 z-10 p-2 h-64 flex flex-col justify-center">
        <button
          onClick={handleNext}
          className="border-[1px] border-slate-400  hover:bg-slate-100 p-2 rounded-full focus:outline-none"
        >
          <ArrowRightIcon
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

const translateX300 = 'translate-x-[-300%]';
const translateX200 = 'translate-x-[-200%]';
const translateX100 = 'translate-x-[-100%]';
const translateX0 = 'translate-x-0';
