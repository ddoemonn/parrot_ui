import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'destructive';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', disabled = false }) => {
  const baseClasses = 'px-4 py-2 rounded-lg focus:outline-none transition-colors duration-300 focus:ring-2 focus:ring-black';

  // Define the variant styles in an object
  const variantStyles: Record<string, string> = {
    primary: 'bg-black text-white hover:opacity-80',
    secondary: 'bg-gray-200 text-black hover:opacity-80',
    destructive: 'bg-red-500 text-white hover:opacity-80',
  };

  const variantClasses = disabled ? 'opacity-40 bg-gray-200 cursor-not-allowed' : variantStyles[variant];

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
