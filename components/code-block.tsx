'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-12 bg-white/5 backdrop-blur-lg border-b border-white/10 flex items-center px-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF6B6B]" />
          <div className="w-3 h-3 rounded-full bg-[#4ECDC4]" />
          <div className="w-3 h-3 rounded-full bg-[#45B7D1]" />
        </div>
      </div>
      <div className="pt-12">
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          customStyle={{
            margin: 0,
            borderRadius: 0,
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
          }}
          showLineNumbers
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}