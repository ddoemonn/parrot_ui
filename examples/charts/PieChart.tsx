// pages/index.tsx

import PieChart from '@/components/charts/PieChart';

const data = [
  { label: 'Category 1', value: 30, color: '#ff9999' },
  { label: 'Category 2', value: 20, color: '#66b3ff' },
  { label: 'Category 3', value: 50, color: '#99ff99' },
];

const PieChartExample: React.FC = () => {
  return (
    <PieChart
      data={data}
      width={300}
      height={300}
    />
  );
};

export default PieChartExample;
