import React, { useEffect } from 'react';

import { Animation } from '@/types/globalTypes';

type ToastProps = {
  message: string;
  duration?: number;
  animation?: Animation;
  isVisible: boolean;
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, animation = 'fade-in-left', isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 max-w-xs w-full bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg flex items-center transition-opacity duration-300 ${
        isVisible ? animation : 'opacity-0'
      }`}
    >
      <span>{message}</span>
      <button
        className="ml-auto text-xl leading-none"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;
