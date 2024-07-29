import React from 'react';

import Indicator from '@/components/Indicator';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const indicatorCode = `import React from 'react';

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
      <div className={\`absolute -top-3 -right-3 p-1 text-white text-xs rounded-full \${getStatusClasses()} ring-2 ring-white\`}>{text}</div>
    </div>
  );
};

export default Indicator;
`;

const indicatorUsage = `import React from 'react';

import Indicator from '@/components/Indicator';

export default function IndicatorPage() {
  return (
    <div className="w-full flex justify-between">
      <Indicator
        status="success"
        text="Success"
      >
        <div className="p-4 border border-gray-300 rounded">Content 1</div>
      </Indicator>
      <Indicator
        status="error"
        text="Error"
      >
        <div className="p-4 border border-gray-300 rounded">Content 2</div>
      </Indicator>
      <Indicator
        status="warning"
        text="Warning"
      >
        <div className="p-4 border border-gray-300 rounded">Content 3</div>
      </Indicator>
      <Indicator
        status="info"
        text="Info"
      >
        <div className="p-4 border border-gray-300 rounded">Content 4</div>
      </Indicator>
    </div>
  );
}
`;

export default function IndicatorPage() {
  return (
    <ComponentDetail
      usage={indicatorUsage}
      code={indicatorCode}
      component={
        <div className="w-full flex gap-10 justify-center">
          <Indicator
            status="success"
            text="Success"
          >
            <div className="p-4 border border-gray-300 rounded">Content 1</div>
          </Indicator>
          <Indicator
            status="error"
            text="Error"
          >
            <div className="p-4 border border-gray-300 rounded">Content 2</div>
          </Indicator>
          <Indicator
            status="warning"
            text="Warning"
          >
            <div className="p-4 border border-gray-300 rounded">Content 3</div>
          </Indicator>
          <Indicator
            status="info"
            text="Info"
          >
            <div className="p-4 border border-gray-300 rounded">Content 4</div>
          </Indicator>
        </div>
      }
      name="Indicator"
      detail="The Indicator component displays a status label on the top-right corner of its child element. You can customize the status with different colors such as success, error, warning, and info."
    />
  );
}
