import React from 'react';

import Indicator from '@/components/Indicator';

export default function IndicatorPage() {
  return (
    <div className="w-full flex justify-between">
      <Indicator
        status="success"
        text="Success"
      >
        <div className="p-4 border border-gray-300 rounded">Content 1</div>
      </Indicator>
      <Indicator
        status="error"
        text="Error"
      >
        <div className="p-4 border border-gray-300 rounded">Content 2</div>
      </Indicator>
      <Indicator
        status="warning"
        text="Warning"
      >
        <div className="p-4 border border-gray-300 rounded">Content 3</div>
      </Indicator>
      <Indicator
        status="info"
        text="Info"
      >
        <div className="p-4 border border-gray-300 rounded">Content 4</div>
      </Indicator>
    </div>
  );
}
