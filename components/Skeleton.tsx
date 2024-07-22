import React from 'react';

interface SkeletonProps {
  type?: 'avatar' | 'text';
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ type = 'text', width = '100%', height = '1rem', borderRadius = '0.25rem', className = '' }) => {
  const baseClasses = 'bg-gray-300 animate-pulse';
  const shapeClasses = type === 'avatar' ? `w-${width} h-${height} rounded-full` : `w-${width} h-${height} rounded-${borderRadius}`;

  return (
    <div
      className={`${baseClasses} ${shapeClasses} ${className}`}
      style={{ width, height, borderRadius }}
    />
  );
};

export default Skeleton;
