import React from 'react';

import Dropdown from '@/components/Dropdown';

export default function DropdownPage() {
  const handleSelect = (item: string) => {
    console.log('Selected item:', item);
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <Dropdown
        items={['Option 1', 'Option 2', 'Option 3']}
        onSelect={handleSelect}
        label="Select an option"
      />
    </div>
  );
}
