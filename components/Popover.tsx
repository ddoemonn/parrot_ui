import React, { useState } from 'react';

import Button from './Button';

interface PopoverProps {
  text: string;
  children: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <Button
        label={text}
        variant="secondary"
        onClick={() => setIsVisible(!isVisible)}
      />
      <div
        className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-sm rounded shadow-lg z-10 transition-all duration-500 ${
          isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
        } w-[150px] max-w-[200px] text-center`}
      >
        {children}
      </div>
    </div>
  );
};

export default Popover;
