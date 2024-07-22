import React from 'react';

interface HighlightProps {
  text: string;
  highlight: string;
  highlightClass?: string;
}

const Highlight: React.FC<HighlightProps> = ({ text, highlight, highlightClass }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span
            key={index}
            className={highlightClass || 'bg-yellow-200'}
          >
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default Highlight;

const blue500 = 'bg-blue-500';
