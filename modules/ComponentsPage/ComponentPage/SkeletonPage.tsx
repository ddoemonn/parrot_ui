import React from 'react';

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
