import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  id?: string;
}

const Button: React.FC<ButtonProps> = ({ children, disabled = false, className, id, ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-lg focus:outline-none transition-colors duration-300';

  const disabledStyless = disabled && 'opacity-40 bg-gray-200 cursor-not-allowed';

  return (
    <button
      {...props}
      className={`${baseClasses} ${disabledStyless} ${className}`}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
