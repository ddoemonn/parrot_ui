import React from 'react';

import Progress from '@/components/Progress';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const progressCode = `import React from 'react';

interface ProgressProps {
  value: number;
  maxValue?: number;
  color?: string;
  height?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, maxValue = 100, color = 'bg-blue-500', height = 'h-4' }) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className={\`relative \${height} w-full bg-gray-200 rounded-full overflow-hidden\`}>
      <div
        className={\`\${color} \${height} absolute top-0 left-0 rounded-full\`}
        style={{ width: \`\${percentage}%\` }}
      />
      <span
        className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium"
        aria-hidden
      >
        {Math.round(percentage)}%
      </span>
    </div>
  );
};

export default Progress;
`;

const progressUsage = `import React from 'react';

import Progress from '@/components/Progress';

export default function ProgressPage() {
  return (
    <div className="p-4 flex flex-col justify-center gap-10 w-1/2 mx-auto">
      <Progress
        value={70}
        color="bg-green-500"
        height="h-6"
      />
      <Progress
        value={30}
        color="bg-red-500"
      />
    </div>
  );
}
`;

export default function ProgressPage() {
  return (
    <ComponentDetail
      usage={progressUsage}
      code={progressCode}
      component={
        <div className="p-4 flex flex-col justify-center gap-10 w-1/2 mx-auto">
          <Progress
            value={70}
            color="bg-green-500"
            height="h-6"
          />
          <Progress
            value={30}
            color="bg-red-500"
          />
        </div>
      }
      name="Progress"
      detail="The Progress component displays a progress bar indicating completion or progress toward a goal. The component allows customization of color, height, and value."
    />
  );
}
