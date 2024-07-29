import React from 'react';

import CopyButton from './CopyButton';

interface CodeProps {
  code: string;
  copyButton?: boolean;
  className?: string;
}

const Code: React.FC<CodeProps> = ({ code, copyButton, className }) => {
  return (
    <div className="relative  z-0 flex">
      <pre className={`relative ${className} flex-1 p-4 rounded-md max-w-full max-h-96 lg:max-w-3xl overflow-auto`}>
        <code className="inline-block  text-wrap">{code}</code>
      </pre>
      {copyButton && (
        <div className="m-2">
          <CopyButton text={code} />
        </div>
      )}
    </div>
  );
};

export default Code;
