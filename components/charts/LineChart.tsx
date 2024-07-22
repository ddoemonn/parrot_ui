// src/components/LineChart.tsx
import React from 'react';

interface LineChartProps {
  data: { x: number; y: number }[];
  width?: number;
  height?: number;
}

const LineChart: React.FC<LineChartProps> = ({ data, width = 400, height = 300 }) => {
  const maxX = Math.max(...data.map(d => d.x));
  const maxY = Math.max(...data.map(d => d.y));

  const scaleX = (x: number) => (x / maxX) * width;
  const scaleY = (y: number) => height - (y / maxY) * height;

  const pathData = data.reduce((path, point, index) => {
    const x = scaleX(point.x);
    const y = scaleY(point.y);
    return `${path} ${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }, '');

  return (
    <div className="relative">
      <svg
        width={width}
        height={height}
        className="border border-gray-300 bg-white"
      >
        <path
          d={pathData}
          stroke="blue"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx={scaleX(data[0]?.x)}
          cy={scaleY(data[0]?.y)}
          r="3"
          fill="blue"
        />
        {data.map((point, index) => (
          <circle
            key={index}
            cx={scaleX(point.x)}
            cy={scaleY(point.y)}
            r="3"
            fill="blue"
          />
        ))}
        <text
          x={scaleX(data[0]?.x)}
          y={scaleY(data[0]?.y)}
          className="text-xs text-gray-700"
        >
          {`(${data[0]?.x}, ${data[0]?.y})`}
        </text>
      </svg>
    </div>
  );
};

export default LineChart;
