// src/App.tsx
import React from 'react';

import BarChart from '@/components/charts/BarChart';

const data = [
  { label: 'Jan', value: 30 },
  { label: 'Feb', value: 45 },
  { label: 'Mar', value: 70 },
  { label: 'Apr', value: 50 },
  { label: 'May', value: 90 },
];

const App: React.FC = () => {
  return (
    <div className="p-4">
      <BarChart
        data={data}
        width={600}
        height={400}
        barColor="blue-600"
        barSpacing={12}
      />
    </div>
  );
};

export default App;
