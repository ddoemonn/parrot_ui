import React, { useState } from 'react';

interface ComboboxProps {
  options: string[];
  onSelect: (option: string) => void;
}

const Combobox: React.FC<ComboboxProps> = ({ options, onSelect }) => {
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
