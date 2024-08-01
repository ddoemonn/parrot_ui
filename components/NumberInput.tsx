import React, { useState, ChangeEvent } from 'react';

import { set } from 'date-fns';

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  className?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({ value, onChange, min = 0, max = 100, step = 1, placeholder = '', className }) => {
  const [internalValue, setInternalValue] = useState<number>(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    if (isNaN(newValue)) {
      setInternalValue(min);
      onChange(min);
    }
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      setInternalValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <input
      type="number"
      value={internalValue}
      onChange={handleChange}
      placeholder={placeholder}
      className={`border-2 border-black text-center p-2 rounded-lg outline-none ${className} `}
      min={min}
      max={max}
      step={step}
    />
  );
};

export default NumberInput;
