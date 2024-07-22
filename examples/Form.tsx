// src/App.tsx
import React from 'react';

import Form from '@/components/Form';

const FormExample: React.FC = () => {
  const handleFormSubmit = (data: Record<string, string>) => {
    console.log('Form data submitted:', data);
  };

  const fields = [
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { id: 'age', label: 'Age', type: 'number' },
    {
      id: 'gender',
      label: 'Gender',
      type: 'select',
      options: ['Male', 'Female', 'Other'],
    },
  ];

  return (
    <div className="p-4 max-w-md mx-auto">
      <Form
        fields={fields}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default FormExample;
