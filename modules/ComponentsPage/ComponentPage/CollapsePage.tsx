import React from 'react';

import Collapse from '@/components/Collapse';

export default function CollapsePage() {
  return (
    <div className="p-4 space-y-4">
      <Collapse title="Section 1">
        <p>This is the content for section 1.</p>
      </Collapse>
    </div>
  );
}
