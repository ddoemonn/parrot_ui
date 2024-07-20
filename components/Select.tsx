import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, label, placeholder, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className={`relative ${className}`}>
      {label && <label className="block text-gray-700 text-sm font-semibold text-left mb-1">{label}</label>}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block text-sm w-full px-4 py-2 border text-left rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {selectedOption ? selectedOption.label : placeholder}
        </button>
        {isOpen && (
          <div className="absolute mt-1 w-full rounded-md shadow-lg bg-white z-10">
            <div className="py-1">
              {options.map(option => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  disabled={option.disabled}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    option.disabled ? 'text-gray-400 bg-gray-100 cursor-not-allowed' : 'text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
