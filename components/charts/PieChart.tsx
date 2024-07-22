import React from 'react';

interface PieChartProps {
  data: { label: string; value: number; color: string }[];
  width?: number;
  height?: number;
}

const PieChart: React.FC<PieChartProps> = ({ data, width = 200, height = 200 }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativeValue = 0;

  const calculateArc = (startAngle: number, endAngle: number) => {
    const radius = Math.min(width, height) / 2;
    const x1 = radius * Math.cos(startAngle);
    const y1 = radius * Math.sin(startAngle);
    const x2 = radius * Math.cos(endAngle);
    const y2 = radius * Math.sin(endAngle);
    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

    return `
      M ${x1} ${y1}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
      L 0 0
    `;
  };

  const arcs = data.map(item => {
    const startAngle = (cumulativeValue / total) * 2 * Math.PI;
    cumulativeValue += item.value;
    const endAngle = (cumulativeValue / total) * 2 * Math.PI;
    return {
      path: calculateArc(startAngle, endAngle),
      color: item.color,
    };
  });

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="mx-auto"
    >
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {arcs.map((arc, index) => (
          <path
            key={index}
            d={arc.path}
            fill={arc.color}
          />
        ))}
      </g>
    </svg>
  );
};

export default PieChart;
