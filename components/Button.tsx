import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  id?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false, className, id }) => {
  const baseClasses = 'px-4 py-2 rounded-lg focus:outline-none transition-colors duration-300';

  const disabledStyless = disabled && 'opacity-40 bg-gray-200 cursor-not-allowed';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${disabledStyless} ${className}`}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
