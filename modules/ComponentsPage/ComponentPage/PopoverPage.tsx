import React from 'react';

import Popover from '@/components/Popover';

export default function PopoverPage() {
  return (
    <div className="flex items-center justify-center mt-10 bg-gray-100">
      <Popover text="Toggle Popover">
        <div>
          <p>This is the popover content!</p>
          <p>It can be any React node.</p>
        </div>
      </Popover>
    </div>
  );
}
