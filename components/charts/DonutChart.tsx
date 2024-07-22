// components/DonutChart.tsx

import React from 'react';

interface DonutChartProps {
  data: { label: string; value: number }[];
  width?: number;
  height?: number;
  radius?: number;
  strokeWidth?: number;
  colors?: string[];
}

const DonutChart: React.FC<DonutChartProps> = ({
  data,
  width = 200,
  height = 200,
  radius = 80,
  strokeWidth = 20,
  colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'],
}) => {
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  const radiusAdjusted = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * radiusAdjusted;
  let accumulatedValue = 0;

  const segments = data.map((item, index) => {
    const startOffset = (accumulatedValue / totalValue) * circumference;
    const endOffset = ((accumulatedValue + item.value) / totalValue) * circumference;
    accumulatedValue += item.value;

    return {
      startOffset,
      endOffset,
      color: colors[index % colors.length],
    };
  });

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="rotate-90"
    >
      <circle
        cx={width / 2}
        cy={height / 2}
        r={radiusAdjusted}
        fill="none"
        stroke="#e0e0e0"
        strokeWidth={strokeWidth}
      />
      {segments.map((segment, index) => (
        <circle
          key={index}
          cx={width / 2}
          cy={height / 2}
          r={radiusAdjusted}
          fill="none"
          stroke={segment.color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${segment.endOffset - segment.startOffset} ${circumference}`}
          strokeDashoffset={segment.startOffset}
          transform={`rotate(-90 ${width / 2} ${height / 2})`}
        />
      ))}
      <text
        x={width / 2}
        y={height / 2}
        textAnchor="middle"
        dy=".3em"
        className="text-lg font-bold"
      >
        {totalValue}
      </text>
    </svg>
  );
};

export default DonutChart;
