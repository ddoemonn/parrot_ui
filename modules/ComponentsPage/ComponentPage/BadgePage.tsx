import React from 'react';

import Badge from '@/components/Badge';

export default function BadgePage() {
  return (
    <div className="flex gap-10 w-full items-center mx-auto justify-center">
      <Badge
        variant="light"
        color="red"
        radius="lg"
      >
        Light Badge
      </Badge>
      <Badge
        variant="filled"
        color="blue"
        radius="md"
      >
        Filled Badge
      </Badge>
      <Badge
        variant="outline"
        color="green"
        radius="sm"
      >
        Outline Badge
      </Badge>
    </div>
  );
}
