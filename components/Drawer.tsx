// components/Drawer.tsx
import React from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <div className={`fixed inset-y-0 right-0 z-50 transition-width duration-300 ${isOpen ? 'w-80' : 'w-0'}`}>
      <div
        className={`fixed inset-0  opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-50 bg-black' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div className={`relative h-full bg-white shadow-xl p-4 overflow-hidden transition-all duration-300 ${isOpen ? 'w-80' : 'w-0'}`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          X
        </button>
        <div className={`mt-8 ${isOpen ? 'block' : 'hidden'}`}>{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
