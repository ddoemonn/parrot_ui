// components/Drawer.tsx
import React from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  direction?: 'left' | 'right'; // Add direction prop
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children, direction = 'right' }) => {
  const drawerPosition = direction === 'right' ? 'right-0' : 'left-0';
  const drawerTranslate = direction === 'right' ? 'translate-x-full' : '-translate-x-full';

  return (
    <>
      <div
        className={`fixed z-50 overflow-auto max-h-screen inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div className={`fixed m-1 p-2 rounded-lg inset-y-0 ${drawerPosition} z-50 ${isOpen ? 'translate-x-0' : drawerTranslate} overflow-auto max-h-screen`}>
        <div
          className={`relative rounded-lg h-full bg-white shadow-xl min-w-96 overflow-auto max-h-screen p-8 pt-0 transition-transform duration-300 ${isOpen ? 'w-80' : 'w-0'}`}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-4"
          >
            X
          </button>
          <div className="mt-5 ">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
