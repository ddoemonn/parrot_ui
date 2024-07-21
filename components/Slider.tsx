import React, { useState } from 'react';

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
