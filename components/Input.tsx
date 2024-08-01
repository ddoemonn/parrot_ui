import React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
  return (
    <div className="mb-4 max-w-xs">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        type="text"
        className="mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        {...props}
      />
    </div>
  );
};

export default TextInput;
