import React, { useState } from 'react';

import RadioGroup from '@/components/RadioGroup';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const radioGroupCode = `import React from 'react';

interface RadioGroupProps {
  options: { value: string; label: string }[];
  name: string;
  onChange: (value: string) => void;
  value: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, name, onChange, value }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-2">
      {options.map(option => (
        <label
          key={option.value}
          className="flex items-center space-x-2"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={handleChange}
            className="h-4 w-4 border-gray-300 accent-black"
          />
          <span className="text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
`;

const radioGroupUsage = `import React, { useState } from 'react';

import RadioGroup from '@/components/RadioGroup';

export default function RadioGroupPage() {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className="p-4 w-1/2">
      <h1 className="text-lg font-bold mb-4">Select an Option</h1>
      <RadioGroup
        options={options}
        name="example"
        value={selectedValue}
        onChange={handleRadioChange}
      />
      <p className="mt-4">Selected Value: {selectedValue}</p>
    </div>
  );
}
`;

export default function RadioGroupPage() {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <ComponentDetail
      usage={radioGroupUsage}
      code={radioGroupCode}
      component={
        <div className="p-4 w-1/2">
          <h1 className="text-lg font-bold mb-4">Select an Option</h1>
          <RadioGroup
            options={options}
            name="example"
            value={selectedValue}
            onChange={handleRadioChange}
          />
          <p className="mt-4">Selected Value: {selectedValue}</p>
        </div>
      }
      name="RadioGroup"
      detail="The RadioGroup component allows users to select a single option from a list of radio buttons. Each option has a label and a value, and the component tracks the currently selected value."
    />
  );
}
