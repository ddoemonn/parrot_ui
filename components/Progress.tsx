import React from 'react';

interface ProgressProps {
  value: number;
  maxValue?: number;
  color?: string;
  height?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, maxValue = 100, color = 'bg-blue-500', height = 'h-4' }) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className={`relative ${height} w-full bg-gray-200 rounded-full overflow-hidden`}>
      <div
        className={`${color} ${height} absolute top-0 left-0 rounded-full`}
        style={{ width: `${percentage}%` }}
      />
      <span
        className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium"
        aria-hidden
      >
        {Math.round(percentage)}%
      </span>
    </div>
  );
};

export default Progress;

const bgGreen = 'bg-green-500';

const h6 = 'h-6';
