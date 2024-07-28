import React from 'react';

import Button from '@/components/Button';
import Tooltip from '@/components/Tooltip';

export default function TooltipPage() {
  return (
    <div className="p-10">
      <Tooltip text="This is a tooltip!">
        <Button
          label="Hover me"
          variant="secondary"
        />
      </Tooltip>
    </div>
  );
}
