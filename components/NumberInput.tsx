import React, { useState, ChangeEvent } from 'react';

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({ value, onChange, min = 0, max = 100, step = 1, placeholder = '' }) => {
  const [internalValue, setInternalValue] = useState<number>(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
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
      className="w-20 text-center border-none outline-none"
      min={min}
      max={max}
      step={step}
    />
  );
};

export default NumberInput;
