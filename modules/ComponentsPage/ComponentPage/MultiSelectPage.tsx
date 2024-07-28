import React from 'react';

import MultiSelect from '@/components/MultiSelect';

export default function MultiSelectPage() {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
  ];

  const handleSelectChange = (selectedOptions: { value: string; label: string }[]) => {
    console.log('Selected options:', selectedOptions);
  };

  return (
    <div className="p-4">
      <MultiSelect
        options={options}
        onChange={handleSelectChange}
      />
    </div>
  );
}
