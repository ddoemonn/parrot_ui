import React from 'react';

import Highlight from '@/components/Highlight';

const HighlightExample: React.FC = () => {
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
};

export default HighlightExample;
