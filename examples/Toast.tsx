import { useCallback, useState } from 'react';

import Toast from '@/components/Toast';

export default function ToastExample() {
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
