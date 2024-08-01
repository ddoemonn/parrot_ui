import React from 'react';

import Button from '@/components/Button';
import Tooltip from '@/components/Tooltip';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const tooltipCode = `import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="flex items-center"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      <div
        className={\`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-sm rounded shadow-lg z-10 transition-all duration-500 \${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'} w-[150px] max-w-[200px] text-center\`}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
`;

const tooltipUsage = `import React from 'react';

import Button from '@/components/Button';
import Tooltip from '@/components/Tooltip';

export default function TooltipPage() {
  return (
    <div className="p-10">
      <Tooltip text="This is a tooltip!">
        <Button
          label="Hover me"
          variant="secondary"
        />
      </Tooltip>
    </div>
  );
}
`;

export default function TooltipPage() {
  return (
    <ComponentDetail
      usage={tooltipUsage}
      code={tooltipCode}
      component={
        <div className="p-10">
          <Tooltip text="This is a tooltip!">
            <Button className="bg-yellow-300 text-indigo-700 shadow-xl">Hover me</Button>
          </Tooltip>
        </div>
      }
      name="Tooltip"
      detail="The Tooltip component displays a small popup box with additional information when the user hovers over an element. It uses state to manage visibility and provides smooth transitions for appearance and disappearance. The tooltip is positioned relative to its child element, appearing above it."
    />
  );
}
