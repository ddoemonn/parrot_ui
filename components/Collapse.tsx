// Collapse.tsx
import React, { useState } from 'react';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  buttonClassName?: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, children, className, buttonClassName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className={`p-4 rounded-md overflow-hidden ${className}`}>
      <button
        className={`w-full p-4 rounded-xl text-left font-semibold  focus:outline-none ${buttonClassName}`}
        onClick={toggleCollapse}
      >
        {title}
      </button>
      <div className={`p-4 transition-all duration-500 ease-in-out max-w-sm ${isOpen ? 'max-h-screen' : ' max-h-0 opacity-0 overflow-hidden'}`}>{children}</div>
    </div>
  );
};

export default Collapse;
