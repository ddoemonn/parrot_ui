import React, { useState } from 'react';

interface CheckboxProps {
  children: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ children, checked = false, onChange, className = '' }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label className={`flex items-center space-x-2 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
      />
      <span className={`text-sm ${isChecked ? 'text-blue-600' : 'text-gray-900'}`}>{children}</span>
    </label>
  );
};

export default Checkbox;
