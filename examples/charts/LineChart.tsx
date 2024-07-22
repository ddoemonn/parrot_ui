// src/App.tsx
import React from 'react';

import LineChart from '@/components/charts/LineChart';

const data = [
  { x: 1, y: 10 },
  { x: 2, y: 20 },
  { x: 3, y: 15 },
  { x: 4, y: 25 },
  { x: 5, y: 30 },
];

const LineChartExample: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Line Chart Example</h1>
      <LineChart
        data={data}
        width={500}
        height={400}
      />
    </div>
  );
};

export default LineChartExample;
