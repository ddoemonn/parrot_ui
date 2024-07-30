import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import CopyButton from './CopyButton';

interface CodeProps {
  code: string;
  copyButton?: boolean;
}
const Code: React.FC<CodeProps> = ({ code, copyButton }) => {
  return (
    <div className="relative  z-0 flex overflow-scroll w-full">
      <SyntaxHighlighter
        customStyle={{ width: '45rem', maxHeight: '30rem', borderRadius: '0.5rem' }}
        language="tsx"
        //PreTag={pre}
      >
        {code}
      </SyntaxHighlighter>

      {copyButton && (
        <div className="m-2">
          <CopyButton text={code} />
        </div>
      )}
    </div>
  );
};

export default Code;
