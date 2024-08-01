import React from 'react';

import Skeleton from '@/components/Skeleton';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const skeletonCode = `import React from 'react';

interface SkeletonProps {
  type?: 'avatar' | 'text';
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ type = 'text', width = '100%', height = '1rem', borderRadius = '0.25rem', className = '' }) => {
  const baseClasses = 'bg-gray-300 animate-pulse';
  const shapeClasses = type === 'avatar' ? \`w-\${width} h-\${height} rounded-full\` : \`w-\${width} h-\${height} rounded-\${borderRadius}\`;

  return (
    <div
      className={\`\${baseClasses} \${shapeClasses} \${className}\`}
      style={{ width, height, borderRadius }}
    />
  );
};

export default Skeleton;
`;

const skeletonUsage = `import React from 'react';

import Skeleton from '@/components/Skeleton';

export default function SkeletonPage() {
  const isLoading = true;

  return (
    <div className="flex items-center space-x-4">
      {isLoading ? (
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Skeleton
              type="avatar"
              width="3rem"
              height="3rem"
            />
            <div className="space-y-2">
              <Skeleton
                width="150px"
                height="1rem"
              />
              <Skeleton
                width="100px"
                height="0.75rem"
              />
            </div>
          </div>
          <Skeleton
            width="100%"
            height="1rem"
          />
        </div>
      ) : (
        <div>{/* Actual content goes here */}</div>
      )}
    </div>
  );
}
`;

export default function SkeletonPage() {
  return (
    <ComponentDetail
      usage={skeletonUsage}
      code={skeletonCode}
      component={
        <div className="flex items-center space-x-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Skeleton
                type="avatar"
                className="w-[3rem] h-[3rem]"
              />
              <div className="space-y-2">
                <Skeleton className="w-[150px] h-[1rem]" />
                <Skeleton className="w-[100px] h-[0.75rem]" />
              </div>
            </div>
            <Skeleton className="w-full h-[1rem]" />
          </div>
        </div>
      }
      name="Skeleton"
      detail="The Skeleton component is used to display placeholder content while data is being loaded. It supports different types such as 'avatar' for circular placeholders and 'text' for rectangular ones. You can customize its width, height, and border-radius."
    />
  );
}
