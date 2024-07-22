// CopyButton.tsx

import React, { useState } from 'react';

interface CopyButtonProps {
  text: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center px-4 py-2 border rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {copied ? <span className="text-sm">Copied!</span> : <span className="text-sm">Copy</span>}
    </button>
  );
};

export default CopyButton;
