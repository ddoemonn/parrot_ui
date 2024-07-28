import React from 'react';

interface AlertProps {
  variant?: 'white' | 'filled';
  color?: 'cyan' | 'red' | 'green' | 'yellow';
  title: string;
  icon: React.ReactElement;
  children: React.ReactNode;
  className?: string;
}

const baseStyles = 'p-4 flex items-start';

const colorStyles = {
  cyan: 'border-cyan-500 text-cyan-500',
  red: 'border-red-500 text-red-500',
  green: 'border-green-500 text-green-500',
  yellow: 'border-yellow-500 text-yellow-500',
};

const variantStyles = {
  white: 'bg-white text-black',
  filled: {
    cyan: 'bg-cyan-500 text-white rounded-lg',
    red: 'bg-red-500 text-white rounded-lg',
    green: 'bg-green-500 text-white rounded-lg',
    yellow: 'bg-yellow-500 text-white rounded-lg',
  },
};

const Alert: React.FC<AlertProps> = ({ variant = 'white', color = 'cyan', title, icon, children, className }) => {
  const variantStyle = variant === 'filled' ? variantStyles.filled[color] : variantStyles.white;
  const colorStyle = variant === 'filled' ? '' : colorStyles[color];

  return (
    <div className={`${baseStyles} ${className}  ${variantStyle} ${variant === 'white' && 'border-l-4'} ${colorStyle}`}>
      <div className="mr-3 p-1">{icon}</div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Alert;
