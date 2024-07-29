import React from 'react';

import HoverCard from '@/components/HoverCard';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const hoverCardCode = `import React, { useState } from 'react';

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
        <div className={\`absolute left-1/2 transform -translate-x-1/2 mt-2 p-4 bg-white border border-gray-300 shadow-lg rounded-lg \${contentWidth}\`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default HoverCard;
`;

const hoverCardUsage = `import React from 'react';

import HoverCard from '@/components/HoverCard';

export default function HoverCardPage() {
  return (
    <>
      <HoverCard
        contentWidth="w-48"
        content={<div>This is the hover card content with custom width!</div>}
      >
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Hover me</button>
      </HoverCard>
      <HoverCard content={<div>This is the hover card content with default width!</div>}>
        <button className="px-4 py-2 bg-green-500 text-white rounded ml-4">Hover me</button>
      </HoverCard>
    </>
  );
}
`;

export default function HoverCardPage() {
  return (
    <ComponentDetail
      usage={hoverCardUsage}
      code={hoverCardCode}
      component={
        <>
          <HoverCard
            contentWidth="w-48"
            content={<div>This is the hover card content with custom width!</div>}
          >
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Hover me</button>
          </HoverCard>
          <HoverCard content={<div>This is the hover card content with default width!</div>}>
            <button className="px-4 py-2 bg-green-500 text-white rounded ml-4">Hover me</button>
          </HoverCard>
        </>
      }
      name="HoverCard"
      detail="The HoverCard component displays additional content when hovering over its child element. You can customize the width of the content using the 'contentWidth' prop."
    />
  );
}
