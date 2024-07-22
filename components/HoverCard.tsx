import React, { useState } from 'react';

interface HoverCardProps {
  children: React.ReactNode;
  content: React.ReactNode;
  contentWidth?: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ children, content, contentWidth = 'w-64' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
      {isHovered && (
        <div className={`absolute left-1/2 transform -translate-x-1/2 mt-2 p-4 bg-white border border-gray-300 shadow-lg rounded-lg ${contentWidth}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default HoverCard;
