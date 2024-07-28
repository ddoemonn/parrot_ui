import React from 'react';

import Textarea from '@/components/Textarea';

export default function TextareaPage() {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <Textarea
        label="Your Message"
        placeholder="Type your message here..."
        resize={true}
        onChange={e => console.log(e.target.value)}
      />
    </div>
  );
}
