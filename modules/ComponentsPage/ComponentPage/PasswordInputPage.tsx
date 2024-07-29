import React from 'react';

import PasswordInput from '@/components/PasswordInput';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const passwordInputCode = `import React, { useState } from 'react';

interface PasswordInputProps {
  placeholder?: string;
  className?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder = 'Enter password', className = '' }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  return (
    <div className={\`relative \${className}\`}>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="button"
        onClick={toggleShowPassword}
        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
      >
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default PasswordInput;
`;

const passwordInputUsage = `import React from 'react';

import PasswordInput from '@/components/PasswordInput';

export default function PasswordInputPage() {
  return (
     <div className="p-4 w-1/3">
      <PasswordInput
        placeholder="Enter your password"
        className="max-w-md"
      />
    </div>
  );
}
`;

export default function PasswordInputPage() {
  return (
    <ComponentDetail
      usage={passwordInputUsage}
      code={passwordInputCode}
      component={
        <div className="p-4 w-1/3">
          <PasswordInput
            placeholder="Enter your password"
            className="max-w-md"
          />
        </div>
      }
      name="PasswordInput"
      detail="The PasswordInput component allows users to input a password with an option to show or hide the password. It includes an input field and a button to toggle password visibility."
    />
  );
}
