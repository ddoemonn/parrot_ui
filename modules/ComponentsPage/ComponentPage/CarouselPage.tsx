import React from 'react';

import Carousel from '@/components/Carousel';

export default function CarouselPage() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Carousel>
        <div className="w-full flex-shrink-0 bg-blue-500 h-64   flex items-center justify-center text-white text-2xl rounded-full ">Slide 1</div>
        <div className="w-full flex-shrink-0 bg-red-500 h-64 flex items-center justify-center text-white text-2xl rounded-full">Slide 2</div>
        <div className="w-full flex-shrink-0 bg-green-500 h-64 flex items-center justify-center text-white text-2xl rounded-full">Slide 3</div>
        <div className="w-full flex-shrink-0 bg-yellow-500 h-64 flex items-center justify-center text-white text-2xl rounded-full ">Slide 4</div>
      </Carousel>
    </div>
  );
}
