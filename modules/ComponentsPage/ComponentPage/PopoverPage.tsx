import React from 'react';

import Popover from '@/components/Popover';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const popoverCode = `import React, { useState } from 'react';

import Button from './Button';

interface PopoverProps {
  text: string;
  children: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <Button
        label={text}
        variant="secondary"
        onClick={() => setIsVisible(!isVisible)}
      />
      <div
        className={\`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-sm rounded shadow-lg z-10 transition-all duration-500 \${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'} w-[150px] max-w-[200px] text-center\`}
      >
        {children}
      </div>
    </div>
  );
};

export default Popover;
`;

const popoverUsage = `import React from 'react';

import Popover from '@/components/Popover';

export default function PopoverPage() {
  return (
    <div className="flex items-center justify-center mt-10 ">
      <Popover text="Toggle Popover">
        <div>
          <p>This is the popover content!</p>
          <p>It can be any React node.</p>
        </div>
      </Popover>
    </div>
  );
}
`;

export default function PopoverPage() {
  return (
    <ComponentDetail
      usage={popoverUsage}
      code={popoverCode}
      component={
        <div className="flex items-center justify-center mt-10">
          <Popover text="Toggle Popover">
            <div>
              <p>This is the popover content!</p>
              <p>It can be any React node.</p>
            </div>
          </Popover>
        </div>
      }
      name="Popover"
      detail="The Popover component displays a popover with customizable content that can be shown or hidden by clicking a button. The popover is positioned above the button and fades in and out."
    />
  );
}
