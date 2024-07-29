import React from 'react';

import Highlight from '@/components/Highlight';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const highlightCode = `import React from 'react';

interface HighlightProps {
  text: string;
  highlight: string;
  highlightClass?: string;
}

const Highlight: React.FC<HighlightProps> = ({ text, highlight, highlightClass }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  const parts = text.split(new RegExp(\`(\${highlight})\`, 'gi'));

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
`;

const highlightUsage = `import React from 'react';

import Highlight from '@/components/Highlight';

export default function HighlightPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Highlight Component Example</h1>

      <Highlight
        text="Here is some text with a highlighted part"
        highlight="highlighted"
      />

      <Highlight
        text="You can also customize the highlight style: another example"
        highlight="example"
        highlightClass="bg-blue-500 font-semibold"
      />
    </div>
  );
}
`;

export default function HighlightPage() {
  return (
    <ComponentDetail
      usage={highlightUsage}
      code={highlightCode}
      component={
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Highlight Component Example</h1>

          <Highlight
            text="Here is some text with a highlighted part"
            highlight="highlighted"
          />

          <Highlight
            text="You can also customize the highlight style: another example"
            highlight="example"
            highlightClass="bg-blue-500 font-semibold"
          />
        </div>
      }
      name="Highlight"
      detail="The Highlight component allows you to highlight specific parts of a text. You can also customize the highlight style using the optional 'highlightClass' prop."
    />
  );
}
