import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, errorMessage, ...props }) => {
  return (
    <div className="mb-4 max-w-xs">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        className={`mt-1 block w-full px-3 py-2 border ${
          errorMessage ? 'border-red-500' : 'border-gray-300'
        } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        {...props}
      />
      {errorMessage && <p className="mt-2 text-sm text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default Input;
