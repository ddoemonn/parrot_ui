import React, { useState } from 'react';

import NumberInput from '@/components/NumberInput';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const numberInputCode = `import React from 'react';

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  errorMessage?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  placeholder = '',
  errorMessage
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className="mb-4 max-w-xs">
      <input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={\`w-20 text-center border \${errorMessage ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\`}
        min={min}
        max={max}
        step={step}
      />
      {errorMessage && <p className="mt-2 text-sm text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default NumberInput;
`;

const numberInputUsage = `import React, { useState } from 'react';

import NumberInput from '@/components/NumberInput';

export default function NumberInputPage() {
  const [value, setValue] = useState<number>(0);

  const handleValueChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="p-4">
      <NumberInput
        value={value}
        onChange={handleValueChange}
        min={0}
        max={100}
        step={5}
        placeholder="Enter number"
      />
      <p className="mt-4">Current Value: {value}</p>
    </div>
  );
}
`;

export default function NumberInputPage() {
  const [value, setValue] = useState<number>(0);

  const handleValueChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <ComponentDetail
      usage={numberInputUsage}
      code={numberInputCode}
      component={
        <div className="w-full flex flex-col items-center">
          <NumberInput
            value={value}
            onChange={handleValueChange}
            min={0}
            max={100}
            step={5}
            placeholder="Enter number"
            className="w-1/3"
          />
          <p className="mt-4">Current Value: {value}</p>
        </div>
      }
      name="NumberInput"
      detail="The NumberInput component allows users to input a number with specified min, max, and step values. It includes optional error handling with customizable error messages."
    />
  );
}
