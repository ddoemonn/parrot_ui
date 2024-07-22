// src/components/TextArea.tsx
import React, { useState, TextareaHTMLAttributes } from 'react';

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
        className={`p-3 border rounded-lg focus:outline-none ${
          isFocused ? 'border-blue-500' : 'border-gray-300'
        } ${resize ? 'resize' : 'resize-none'} transition-colors duration-300`}
        {...props}
      />
    </div>
  );
};

export default TextArea;
