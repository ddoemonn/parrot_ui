import React from 'react';

interface AlertProps {
  title: string;
  icon?: React.ReactElement;
  children: React.ReactNode;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({ title, icon, children, className }) => {
  return (
    <div className={`max-w-lg p-4 flex items-start border-2 border-red-500 text-red-500 rounded-xl ${className}`}>
      <div className="mr-3 p-1">{icon}</div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Alert;
