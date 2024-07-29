import React from 'react';

import TextArea from '@/components/Textarea';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const textAreaCode = `import React, { useState, TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  rows?: number;
  resize?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({ label, rows = 4, resize = true, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="flex flex-col">
      {label && <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>}
      <textarea
        rows={rows}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={\`p-3 border rounded-lg focus:outline-none \${isFocused ? 'border-blue-500' : 'border-gray-300'} \${resize ? 'resize' : 'resize-none'} transition-colors duration-300\`}
        {...props}
      />
    </div>
  );
};

export default TextArea;
`;

const textAreaUsage = `import React from 'react';

import TextArea from '@/components/TextArea';

export default function TextAreaPage() {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <TextArea
        label="Your Message"
        placeholder="Type your message here..."
        resize={true}
        onChange={e => console.log(e.target.value)}
      />
    </div>
  );
}
`;

export default function TextAreaPage() {
  return (
    <ComponentDetail
      usage={textAreaUsage}
      code={textAreaCode}
      component={
        <TextArea
          label="Your Message"
          placeholder="Type your message here..."
          resize={true}
          onChange={e => console.log(e.target.value)}
        />
      }
      name="TextArea"
      detail="The TextArea component is a customizable multi-line text input field. It supports a label, adjustable rows, and optional resizing. The component highlights the border when focused and allows for both resizable and non-resizable variants. Ideal for user input where more space is needed than a single-line input field."
    />
  );
}
