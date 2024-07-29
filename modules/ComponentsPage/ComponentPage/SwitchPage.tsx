import React from 'react';

import Switch from '@/components/Switch';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const switchCode = `import React, { useState } from 'react';

interface SwitchProps {
  isOn: boolean;
  onToggle: (isOn: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ isOn, onToggle }) => {
  const [isChecked, setIsChecked] = useState(isOn);

  const handleToggle = () => {
    setIsChecked(prev => !prev);
    onToggle(!isChecked);
  };

  return (
    <div
      onClick={handleToggle}
      className={\`relative inline-flex items-center cursor-pointer w-12 h-6 rounded-full \${isChecked ? 'bg-blue-500' : 'bg-gray-300'} transition-colors duration-300 ease-in-out\`}
    >
      <span
        className={\`block w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out \${isChecked ? 'translate-x-6' : 'translate-x-0'}\`}
      />
    </div>
  );
};

export default Switch;
`;

const switchUsage = `import React, { useState } from 'react';

import Switch from '@/components/Switch';

export default function SwitchPage() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleToggle = (isOn: boolean) => {
    setIsSwitchOn(isOn);
  };

  return (
    <div className="flex items-center justify-center">
      <Switch
        isOn={isSwitchOn}
        onToggle={handleToggle}
      />
    </div>
  );
}
`;

export default function SwitchPage() {
  return (
    <ComponentDetail
      usage={switchUsage}
      code={switchCode}
      component={
        <Switch
          isOn={false}
          onToggle={isOn => console.log('Switch is now', isOn ? 'ON' : 'OFF')}
        />
      }
      name="Switch"
      detail="The Switch component is a toggle switch that allows users to turn something on or off. It visually represents the current state with a sliding handle and changes color based on whether it is on or off. It provides a callback function for handling state changes."
    />
  );
}
