import React, { useState } from 'react';

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
