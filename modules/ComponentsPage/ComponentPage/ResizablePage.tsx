import React from 'react';

import Resizable from '@/components/Resizeable';

export default function ResizablePage() {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Resizable Component Example</h1>
      <Resizable
        initialWidth={300}
        initialHeight={200}
      />
    </div>
  );
}
