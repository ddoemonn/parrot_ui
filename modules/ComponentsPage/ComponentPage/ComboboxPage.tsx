import React from 'react';

import Combobox from '@/components/Combobox';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const comboboxCode = `import React, { useState } from 'react';

interface ComboboxProps {
  options: string[];
  onSelect: (option: string) => void;
  placeholder?: string;
}

const Combobox: React.FC<ComboboxProps> = ({ options, onSelect, placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter(option => option.toLowerCase().includes(inputValue.toLowerCase()));

  const handleSelect = (option: string) => {
    setInputValue(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={e => setInputValue(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
      />
      {isOpen && (
        <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {option}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No options found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Combobox;
`;

const comboboxUsage = `  <div className="w-64">
      <Combobox
        options={options}
        onSelect={handleSelect}
        placeholder="Select a fruit"
      />
    </div>
`;

const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

export default function ComboboxPage() {
  const handleSelect = (option: string) => {
    console.log('Selected option:', option);
  };

  return (
    <ComponentDetail
      usage={comboboxUsage}
      code={comboboxCode}
      component={
        <div className="w-64">
          <Combobox
            options={options}
            onSelect={handleSelect}
            placeholder="Select a fruit"
          />
        </div>
      }
      name="Combobox"
      detail="The Combobox component is used to select an option from a list of options."
    />
  );
}
