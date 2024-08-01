// DrawerPage.tsx
import React, { useState } from 'react';

import Drawer from '@/components/Drawer';
import Form from '@/components/Form';
import ScrollArea from '@/components/ScrollArea';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const drawerCode = `import React from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <div className={\`fixed inset-y-0 right-0 z-50 transition-width duration-300 \${isOpen ? 'w-80' : 'w-0'}\`}>
      <div
        className={\`fixed inset-0 opacity-50 transition-opacity duration-300 \${isOpen ? 'opacity-50 bg-black' : 'opacity-0 pointer-events-none'}\`}
        onClick={onClose}
      />
      <div className={\`relative h-full bg-white shadow-xl p-4 overflow-hidden transition-all duration-300 \${isOpen ? 'w-80' : 'w-0'}\`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          X
        </button>
        <div className={\`mt-8 \${isOpen ? 'block' : 'hidden'}\`}>{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
`;

const drawerUsage = `  <div className="h-screen flex items-center justify-center">
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
`;

export default function DrawerPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleFormSubmit = (data: Record<string, string>) => {
    console.log('Form data submitted:', data);
  };

  const fields = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email address' },
    { id: 'age', label: 'Age', type: 'number', placeholder: 'Enter your age' },
    {
      id: 'gender',
      label: 'Gender',
      type: 'select',
      options: ['Male', 'Female', 'Other'],
    },
    { id: 'address', label: 'Street Address', type: 'text', placeholder: 'Enter your street address' },
    { id: 'city', label: 'City', type: 'text', placeholder: 'Enter your city' },
    { id: 'state', label: 'State/Province', type: 'text', placeholder: 'Enter your state or province' },
    { id: 'zip', label: 'ZIP/Postal Code', type: 'text', placeholder: 'Enter your ZIP or postal code' },
    { id: 'country', label: 'Country', type: 'text', placeholder: 'Enter your country' },
    { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number' },
    { id: 'notes', label: 'Additional Notes', type: 'textarea', placeholder: 'Enter any additional notes or comments' },
  ];

  return (
    <ComponentDetail
      usage={drawerUsage}
      code={drawerCode}
      component={
        <div className=" flex items-center justify-center">
          <button
            onClick={toggleDrawer}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
          >
            Toggle Drawer
          </button>

          <Drawer
            isOpen={isDrawerOpen}
            onClose={toggleDrawer}
            direction="right"
          >
            <h1 className="text-xl mb-4">User Information Form</h1>
            <Form
              fields={fields}
              onSubmit={handleFormSubmit}
            />
          </Drawer>
        </div>
      }
      name="Drawer"
      detail="The Drawer component slides in from the right side of the screen. It includes an overlay and a close button. The width of the drawer is controlled based on its open state."
    />
  );
}
