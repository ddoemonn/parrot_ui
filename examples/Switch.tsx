import React, { useState } from 'react';

import Switch from '@/components/Switch';

const SwitchExample: React.FC = () => {
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
};

export default SwitchExample;
