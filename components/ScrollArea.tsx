// ScrollArea.tsx
import React from 'react';

interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollArea: React.FC<ScrollAreaProps> = ({ children, className = '' }) => {
  return <div className={`overflow-y-scroll ${className}`}>{children}</div>;
};

export default ScrollArea;
