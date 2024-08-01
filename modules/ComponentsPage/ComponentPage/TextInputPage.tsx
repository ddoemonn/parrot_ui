import React, { useState } from 'react';

import Input from '@/components/Input';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const inputCode = `import React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, errorMessage, ...props }) => {
  return (
    <div className="mb-4 max-w-xs">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        type="text"
        className={\`mt-1 block w-full px-3 py-2 border \${errorMessage ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\`}
        {...props}
      />
      {errorMessage && <p className="mt-2 text-sm text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default TextInput;
`;

const inputUsage = `import React, { useState } from 'react';

import Input from '@/components/Input';

export default function InputPage() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (newValue.length < 3) {
      setError('Input must be at least 3 characters long.');
    } else {
      setError('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Input
        label="Your Name"
        value={value}
        onChange={handleChange}
        errorMessage={error}
        placeholder="Enter your name"
      />
    </div>
  );
}
`;

export default function InputPage() {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <ComponentDetail
      usage={inputUsage}
      code={inputCode}
      component={
        <div className="max-w-md mx-auto mt-10">
          <Input
            label="Your Name"
            value={value}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
      }
      name="Text Input"
      detail="The TextInput component is a customizable text input field with optional label and error message. It supports basic text input and displays validation errors if any."
    />
  );
}
