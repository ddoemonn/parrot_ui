import React, { useCallback, useState } from 'react';

import Toast from '@/components/Toast';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const toastCode = `import React, { useEffect } from 'react';

type ToastProps = {
  message: string;
  duration?: number;
  isVisible: boolean;
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <div
      className={\`fixed bottom-4 right-4 max-w-xs w-full bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg flex items-center transition-opacity duration-300 \${isVisible ? 'opacity-100' : 'opacity-0'}\`}
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
`;

const toastUsage = `import React, { useCallback, useState } from 'react';

import Toast from '@/components/Toast';

export default function ToastPage() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setToastVisible(true);
  }, []);

  const hideToast = useCallback(() => {
    setToastVisible(false);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => showToast('This is a toast message!')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Show Toast
        </button>
        <Toast
          message={toastMessage}
          isVisible={toastVisible}
          onClose={hideToast}
        />
      </header>
    </div>
  );
}
`;

export default function ToastPage() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setToastVisible(true);
  }, []);

  const hideToast = useCallback(() => {
    setToastVisible(false);
  }, []);

  return (
    <ComponentDetail
      usage={toastUsage}
      code={toastCode}
      component={
        <div className="App">
          <header className="App-header">
            <button
              onClick={() => showToast('This is a toast message!')}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Show Toast
            </button>
            <Toast
              message={toastMessage}
              isVisible={toastVisible}
              onClose={hideToast}
            />
          </header>
        </div>
      }
      name="Toast"
      detail="The Toast component displays a brief message to the user. It automatically disappears after a specified duration but can also be manually closed by clicking the close button. It is designed to appear at the bottom-right of the screen and supports both visible and hidden states with smooth transitions."
    />
  );
}
