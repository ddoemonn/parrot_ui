// src/pages/AccordionPage.tsx
import React from 'react';

import { InfoCircledIcon } from '@radix-ui/react-icons';

import Alert from '@/components/Alert';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const alertCode = `import React from 'react';

interface AlertProps {
  variant?: 'white' | 'filled';
  color?: 'cyan' | 'red' | 'green' | 'yellow';
  title: string;
  icon: React.ReactElement;
  children: React.ReactNode;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({ variant = 'white', color = 'cyan', title, icon, children, className }) => {
  const variantStyle = variant === 'filled' 
    ? color === 'cyan' 
      ? 'bg-cyan-500 text-white rounded-lg' 
      : color === 'red' 
      ? 'bg-red-500 text-white rounded-lg' 
      : color === 'green' 
      ? 'bg-green-500 text-white rounded-lg' 
      : 'bg-yellow-500 text-white rounded-lg'
    : 'bg-white text-black';
  const colorStyle = variant === 'filled' 
    ? '' 
    : color === 'cyan' 
      ? 'border-cyan-500 text-cyan-500' 
      : color === 'red' 
      ? 'border-red-500 text-red-500' 
      : color === 'green' 
      ? 'border-green-500 text-green-500' 
      : 'border-yellow-500 text-yellow-500';

  return (
    <div className={\`p-4 flex items-start \${className} \${variantStyle} \${variant === 'white' && 'border-l-4'} \${colorStyle}\`}>
      <div className="mr-3 p-1">{icon}</div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Alert;
`;

const alertUsage = `<Alert
    variant="white"
      color="red"
      title="Alert title"
      icon={icon}
    >
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.
</Alert>
`;

export default function AlertPage() {
  const icon = <InfoCircledIcon className="w-6 h-6" />;
  return (
    <ComponentDetail
      usage={alertUsage}
      code={alertCode}
      component={
        <div className=" lg:max-w-3xl  ">
          <Alert
            variant="white"
            color="red"
            title="Alert title"
            icon={icon}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.
          </Alert>
        </div>
      }
      detail="Displays a callout for user attention."
      name="Alert"
    />
  );
}
