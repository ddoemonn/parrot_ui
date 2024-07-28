import React from 'react';

import Card from '@/components/Card';

export default function CardPage() {
  return (
    <div>
      <Card
        title="Sample Card"
        description="This is a description of the sample card. It gives more details about the content."
        imageUrl="https://via.placeholder.com/400"
        linkUrl="#"
      />
    </div>
  );
}
