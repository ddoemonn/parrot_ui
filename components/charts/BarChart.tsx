// src/components/BarChart.tsx
import React, { useState } from 'react';

interface BarChartProps {
  data: { label: string; value: number }[];
  width?: number;
  height?: number;
  barColor?: string;
  barSpacing?: number;
  axisColor?: string;
  tooltipColor?: string;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  width = 600,
  height = 400,
  barColor = 'blue-500',
  barSpacing = 12,
  axisColor = 'gray-700',
  tooltipColor = 'blue-300',
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const maxValue = Math.max(...data.map(item => item.value));
  const barWidth = (width - (data.length - 1) * barSpacing) / data.length;

  return (
    <div
      className="relative"
      style={{ width, height }}
    >
      <svg
        className="absolute top-0 left-0"
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Draw bars */}
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * height;
          const x = index * (barWidth + barSpacing);
          const y = height - barHeight;

          return (
            <g
              key={item.label}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={`var(--${barColor})`}
              />
              {hoveredIndex === index && (
                <text
                  x={x + barWidth / 2}
                  y={y - 10}
                  textAnchor="middle"
                  fill={`var(--${tooltipColor})`}
                  fontSize="12"
                >
                  {item.value}
                </text>
              )}
            </g>
          );
        })}

        {/* Draw x-axis */}
        <line
          x1={0}
          y1={height}
          x2={width}
          y2={height}
          stroke={`var(--${axisColor})`}
          strokeWidth="2"
        />

        {/* Draw y-axis */}
        <line
          x1={0}
          y1={0}
          x2={0}
          y2={height}
          stroke={`var(--${axisColor})`}
          strokeWidth="2"
        />
      </svg>

      {/* X-axis labels */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between px-1">
        {data.map(item => (
          <div
            key={item.label}
            className="text-center text-xs"
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
