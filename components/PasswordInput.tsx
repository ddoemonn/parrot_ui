import React, { useState } from 'react';

interface PasswordInputProps {
  placeholder?: string;
  className?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder = 'Enter password', className = '' }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  return (
    <div className={`relative ${className}`}>
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
