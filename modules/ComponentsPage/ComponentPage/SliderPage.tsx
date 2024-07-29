import React from 'react';

import Slider from '@/components/Slider';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const sliderCode = `import React, { useState } from 'react';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ min, max, step = 1, initialValue = min, onChange }) => {
  const [value, setValue] = useState<number>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className=" w-full h-2 bg-gray-200 accent-black rounded-lg appearance-none cursor-pointer "
      />
      <div className="mt-4 flex justify-between w-full text-sm text-gray-600">
        <span>{value}</span>
      </div>
    </div>
  );
};

export default Slider;
`;

const sliderUsage = `import React from 'react';

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
`;

export default function SliderPage() {
  return (
    <ComponentDetail
      usage={sliderUsage}
      code={sliderCode}
      component={
        <div className="w-1/2">
          <Slider
            min={0}
            max={100}
            step={1}
            initialValue={50}
            onChange={value => console.log('Slider value:', value)}
          />
        </div>
      }
      name="Slider"
      detail="The Slider component allows users to select a value from a specified range by sliding a handle. It supports customizable minimum, maximum, and step values, as well as an initial value. The current value is displayed below the slider."
    />
  );
}
