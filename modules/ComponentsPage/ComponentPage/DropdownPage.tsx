// DropdownPage.tsx
import React from 'react';

import Dropdown from '@/components/Dropdown';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const dropdownCode = `import React, { useState } from 'react';

import Button from './Button';

interface DropdownProps {
  items: string[];
  onSelect: (item: string) => void;
  label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ items, onSelect, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: string) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <Button
        onClick={toggleDropdown}
        variant="secondary"
        label={label}
      />
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleSelect(item)}
                className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
`;

const dropdownUsage = `  <div className="flex justify-center items-center bg-gray-100">
      <Dropdown
        items={['Option 1', 'Option 2', 'Option 3']}
        onSelect={item => console.log('Selected item:', item)}
        label="Select an option"
      />
    </div>
`;

export default function DropdownPage() {
  const handleSelect = (item: string) => {
    console.log('Selected item:', item);
  };

  return (
    <ComponentDetail
      usage={dropdownUsage}
      code={dropdownCode}
      component={
        <div className="flex justify-center items-center bg-gray-100">
          <Dropdown
            items={['Option 1', 'Option 2', 'Option 3']}
            onSelect={handleSelect}
            label="Select an option"
            buttonStyle="bg-blue-500 text-white"
          />
        </div>
      }
      name="Dropdown"
      detail="The Dropdown component allows users to select an option from a list. It displays a button that toggles the visibility of the dropdown menu. The selected item is passed to the `onSelect` callback."
    />
  );
}
