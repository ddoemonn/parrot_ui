import React, { useState } from 'react';

interface SwitchProps {
  isOn: boolean;
  onToggle: (isOn: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ isOn, onToggle }) => {
  const [isChecked, setIsChecked] = useState(isOn);

  const handleToggle = () => {
    setIsChecked(prev => !prev);
    onToggle(!isChecked);
  };

  return (
    <div
      onClick={handleToggle}
      className={`relative inline-flex items-center cursor-pointer w-12 h-6 rounded-full ${
        isChecked ? 'bg-blue-500' : 'bg-gray-300'
      } transition-colors duration-300 ease-in-out`}
    >
      <span
        className={`block w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out ${
          isChecked ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </div>
  );
};

export default Switch;
