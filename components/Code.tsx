import React from 'react';

import CopyButton from './CopyButton';

interface CodeProps {
  code: string;
  copyButton?: boolean;
  className?: string;
}

const Code: React.FC<CodeProps> = ({ code, copyButton, className }) => {
  return (
    <div className="relative z-0 inline-block">
      <pre className={`relative ${className} p-4 rounded-md max-w-full max-h-96 lg:max-w-3xl overflow-auto`}>
        {copyButton && (
          <div className="absolute right-5">
            <CopyButton text={code} />
          </div>
        )}
        <code className="inline-block  text-wrap">{code}</code>
      </pre>
    </div>
  );
};

export default Code;
