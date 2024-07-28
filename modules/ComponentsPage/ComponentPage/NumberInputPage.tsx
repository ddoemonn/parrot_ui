import React, { useState } from 'react';

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
