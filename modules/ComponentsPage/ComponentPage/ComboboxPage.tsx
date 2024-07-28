import React from 'react';

import Combobox from '@/components/Combobox';

const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

export default function ComboboxPage() {
  const handleSelect = (option: string) => {
    console.log('Selected option:', option);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-64">
        <Combobox
          options={options}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
}
