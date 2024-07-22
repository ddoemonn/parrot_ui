// components/AreaChart.tsx
import React, { useState } from 'react';

interface AreaChartProps {
  data: {
    labels: string[];
    values: number[];
  };
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  gridColor?: string;
  tooltipColor?: string;
}

const AreaChart: React.FC<AreaChartProps> = ({
  data,
  width = 600,
  height = 400,
  color = '#4CAF50',
  backgroundColor = 'rgba(76, 175, 80, 0.2)',
  gridColor = '#e0e0e0',
  tooltipColor = '#ffffff',
}) => {
  const { labels, values } = data;

  // Calculate max value for scaling
  const maxValue = Math.max(...values);

  // Calculate the width of each bar
  const barWidth = width / (labels.length + 1);

  // Create points for the SVG path
  const points = values
    .map((value, index) => {
      const x = (index + 1) * barWidth;
      const y = height - (value / maxValue) * height;
      return `${x},${y}`;
    })
    .join(' ');

  // Define the path for the area chart
  const path = `M0,${height} ${points} ${width},${height} Z`;

  // Create a grid and axes
  const gridLines = Array.from({ length: 5 }, (_, i) => {
    const y = height - (i * height) / 4;
    return (
      <line
        key={i}
        x1={0}
        y1={y}
        x2={width}
        y2={y}
        stroke={gridColor}
        strokeWidth="1"
        strokeDasharray="4"
      />
    );
  });

  const xAxisLines = labels.map((_, index) => {
    const x = (index + 1) * barWidth;
    return (
      <line
        key={index}
        x1={x}
        y1={height}
        x2={x}
        y2={height - 5}
        stroke={color}
        strokeWidth="1"
      />
    );
  });

  const [tooltip, setTooltip] = useState<{ x: number; y: number; value: number } | null>(null);

  return (
    <div className="relative p-4 bg-white shadow-md rounded-lg">
      <svg
        width={width}
        height={height}
        className="w-full h-auto"
      >
        {gridLines}
        {xAxisLines}
        <path
          d={path}
          fill={backgroundColor}
          stroke={color}
          strokeWidth="2"
        />
        {tooltip && (
          <g>
            <circle
              cx={tooltip.x}
              cy={tooltip.y}
              r={5}
              fill={tooltipColor}
            />
            <text
              x={tooltip.x + 10}
              y={tooltip.y - 10}
              fill={color}
              fontSize="12"
            >
              {tooltip.value}
            </text>
          </g>
        )}
      </svg>
      {labels.map((label, index) => {
        const x = (index + 1) * barWidth;
        return (
          <div
            key={index}
            className="absolute"
            style={{ left: x - 10, top: height - 20 }}
            onMouseEnter={() => setTooltip({ x, y: height - (values[index] / maxValue) * height, value: values[index] })}
            onMouseLeave={() => setTooltip(null)}
          >
            <span className="text-xs text-gray-600">{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default AreaChart;
