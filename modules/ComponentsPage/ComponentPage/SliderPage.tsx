import React from 'react';

import Slider from '@/components/Slider';

export default function SliderPage() {
  const handleSliderChange = (value: number) => {
    console.log('Slider value:', value);
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <Slider
        min={0}
        max={100}
        step={1}
        initialValue={50}
        onChange={handleSliderChange}
      />
    </div>
  );
}
