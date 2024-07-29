import React from 'react';

import MultiSelect from '@/components/MultiSelect';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const multiSelectCode = `import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  placeholder?: string;
  onChange: (selectedOptions: Option[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, placeholder = 'Select...', onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelectOption = (option: Option) => {
    const newSelectedOptions = selectedOptions.some(o => o.value === option.value)
      ? selectedOptions.filter(o => o.value !== option.value)
      : [...selectedOptions, option];

    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-full p-2 border border-gray-300 rounded bg-white flex items-center justify-between"
      >
        <span>{selectedOptions.length > 0 ? selectedOptions.map(o => o.label).join(', ') : placeholder}</span>
        <svg
          className={\`w-4 h-4 transition-transform duration-200 \${isOpen ? 'rotate-180' : ''}\`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
          {options.map(option => (
            <div
              key={option.value}
              onClick={() => handleSelectOption(option)}
              className={\`p-2 cursor-pointer hover:bg-gray-100 \${selectedOptions.some(o => o.value === option.value) ? 'bg-gray-200' : ''}\`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
`;

const multiSelectUsage = `import React from 'react';

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
`;

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
    <ComponentDetail
      usage={multiSelectUsage}
      code={multiSelectCode}
      component={
        <div className="p-4 w-1/4">
          <MultiSelect
            options={options}
            onChange={handleSelectChange}
            placeholder="Select Option"
          />
        </div>
      }
      name="Multi Select"
      detail="The Multi Select component allows users to select multiple options from a dropdown list. You can customize the options and handle selection changes using the 'onChange' prop."
    />
  );
}
