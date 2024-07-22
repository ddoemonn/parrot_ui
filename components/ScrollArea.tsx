// ScrollArea.tsx
import React from 'react';

interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
}

const ScrollArea: React.FC<ScrollAreaProps> = ({ children, className = '', width = 'w-full', height = 'h-full' }) => {
  return <div className={`${width} ${height} overflow-auto ${className}`}>{children}</div>;
};

export default ScrollArea;
