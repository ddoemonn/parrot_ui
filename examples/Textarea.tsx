// src/App.tsx
import React from 'react';

import Textarea from '@/components/Textarea';

const TextareaExample: React.FC = () => {
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
};

export default TextareaExample;
