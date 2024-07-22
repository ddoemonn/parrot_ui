// pages/index.tsx

import DonutChart from '@/components/charts/DonutChart';

const data = [
  { label: 'A', value: 40 },
  { label: 'B', value: 30 },
  { label: 'C', value: 20 },
  { label: 'D', value: 10 },
];

const DonutChartExample: React.FC = () => {
  return (
    <DonutChart
      data={data}
      width={300}
      height={300}
      radius={120}
      strokeWidth={30}
      colors={['#ff5733', '#33ff57', '#3357ff', '#ff33a1']}
    />
  );
};

export default DonutChartExample;
