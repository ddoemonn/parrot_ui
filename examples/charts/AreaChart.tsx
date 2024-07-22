// pages/index.tsx
import React from 'react';

import AreaChart from '@/components/charts/AreaChart';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  values: [65, 59, 80, 81, 56, 55],
};

const AreaChartExample: React.FC = () => {
  return (
    <div className="w-full max-w-4xl p-4">
      <AreaChart
        data={data}
        width={800}
        height={400}
        color="#FF5722"
        backgroundColor="rgba(255, 87, 34, 0.2)"
        gridColor="#e0e0e0"
        tooltipColor="#FF5722"
      />
    </div>
  );
};

export default AreaChartExample;
