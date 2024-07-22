import React from 'react';

import HoverCard from '@/components/HoverCard';

const App: React.FC = () => {
  return (
    <>
      <HoverCard
        contentWidth="w-48"
        content={<div>This is the hover card content with custom width!</div>}
      >
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Hover me</button>
      </HoverCard>
      <HoverCard content={<div>This is the hover card content with default width!</div>}>
        <button className="px-4 py-2 bg-green-500 text-white rounded ml-4">Hover me</button>
      </HoverCard>
    </>
  );
};

export default App;
