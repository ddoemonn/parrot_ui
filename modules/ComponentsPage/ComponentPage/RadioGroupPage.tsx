import React, { useState } from 'react';

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
