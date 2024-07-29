import Collapse from '@/components/Collapse';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const collapseCode = `import React, { useState } from 'react';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="p-4 rounded-md overflow-hidden">
      <button
        className="w-full p-4 border-2 border-black rounded-xl text-left font-semibold focus:outline-none"
        onClick={toggleCollapse}
      >
        {title}
      </button>
      <div className={\`p-4 transition-all duration-500 ease-in-out \${isOpen ? 'max-h-screen' : 'max-h-0 opacity-0 overflow-hidden'}\`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
`;

const collapseUsage = `<div className="p-4 space-y-4">
  <Collapse title="Section 1">
    <p>This is the content for section 1.</p>
  </Collapse>
</div>`;

export default function CollapsePage() {
  return (
    <ComponentDetail
      usage={collapseUsage}
      code={collapseCode}
      component={
        <div className="p-4 space-y-4">
          <Collapse title="Section 1">
            <p>This is the content for section 1.</p>
          </Collapse>
        </div>
      }
      name="Collapse"
      detail="The Collapse component is used to hide and show content based on user interaction."
    />
  );
}
