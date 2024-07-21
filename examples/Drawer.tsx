// App.tsx or your main component file
import React, { useState } from 'react';

import Drawer from '@/components/Drawer';

const DrawerExample: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={toggleDrawer}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        Toggle Drawer
      </button>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <p>hey</p>
      </Drawer>
    </div>
  );
};

export default DrawerExample;
