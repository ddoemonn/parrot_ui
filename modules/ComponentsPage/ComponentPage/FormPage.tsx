// FormPage.tsx
import React from 'react';

import Form from '@/components/Form';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const formCode = `import React, { useState } from 'react';

interface Field {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: string[];
}

interface FormProps {
  fields: Field[];
  onSubmit: (data: Record<string, string>) => void;
}

const DynamicForm: React.FC<FormProps> = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {fields.map(field => (
        <div
          key={field.id}
          className="flex flex-col"
        >
          <label
            htmlFor={field.id}
            className="mb-2 text-sm font-medium text-gray-700"
          >
            {field.label}
          </label>
          {field.type === 'select' ? (
            <select
              id={field.id}
              name={field.id}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2"
            >
              {field.options?.map(option => (
                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              placeholder={field.placeholder}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
`;

const formUsage = `  const fields = [
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
        onSubmit={data => console.log('Form data submitted:', data)}
      />
    </div>
  );
`;

export default function FormPage() {
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
    <ComponentDetail
      usage={formUsage}
      code={formCode}
      component={
        <div className=" max-w-md mx-auto">
          <Form
            fields={fields}
            onSubmit={handleFormSubmit}
          />
        </div>
      }
      name="Form"
      detail="The Form component is a dynamic form generator based on the provided fields configuration. It supports text inputs, email inputs, number inputs, and select fields."
    />
  );
}
