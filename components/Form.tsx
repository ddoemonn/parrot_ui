// src/components/DynamicForm.tsx
import React, { useState } from 'react';

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
