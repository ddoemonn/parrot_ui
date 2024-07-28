import React, { useState } from 'react';

import Select from '@/components/Select';

export default function SelectPage() {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ];

  return (
    <div className="p-4">
      <Select
        options={options}
        value={selectedValue}
        onChange={handleSelectChange}
        label="Select a fruit"
        placeholder="Choose an option"
        className="max-w-48"
      />
    </div>
  );
}
