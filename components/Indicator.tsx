// Indicator.tsx
import React from 'react';

interface IndicatorProps {
  status: 'success' | 'error' | 'warning' | 'info';
  text: string;
  children: React.ReactNode;
}

const Indicator: React.FC<IndicatorProps> = ({ status, text, children }) => {
  const getStatusClasses = () => {
    switch (status) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'info':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="relative inline-block">
      {children}
      <div className={`absolute -top-3 -right-3 p-1 text-white text-xs rounded-full ${getStatusClasses()} ring-2 ring-white`}>{text}</div>
    </div>
  );
};

export default Indicator;
