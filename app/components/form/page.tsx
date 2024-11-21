'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Form, FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Form, FormField } from '@parrot-ui/react';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    setError('');
    
    try {
      // Handle form submission
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} loading={loading} error={error}>
      <FormField label="Email" required>
        <Input type="email" placeholder="Enter your email" />
      </FormField>
      
      <FormField label="Password" required>
        <Input type="password" placeholder="Enter your password" />
      </FormField>

      <Button type="submit" loading={loading}>
        Submit
      </Button>
    </Form>
  );
}`;

const validationCode = `const [errors, setErrors] = useState({
  email: '',
  password: '',
});

const validate = (values) => {
  const newErrors = {};
  
  if (!values.email) {
    newErrors.email = 'Email is required';
  }
  
  if (!values.password) {
    newErrors.password = 'Password is required';
  }
  
  return newErrors;
};

<Form onSubmit={handleSubmit}>
  <FormField 
    label="Email" 
    required 
    error={errors.email}
  >
    <Input 
      type="email" 
      name="email"
      onChange={() => setErrors({ ...errors, email: '' })}
    />
  </FormField>
</Form>`;

export default function FormPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields');
    } else {
      setSuccess('Form submitted successfully!');
    }

    setLoading(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Form
        </h1>
        <p className="text-lg text-muted mb-8">
          A flexible form component with built-in validation and error handling.
        </p>

        {/* Installation */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-text mb-4">Installation</h2>
          <CodeBlock code={installCode} language="bash" />
        </section>

        {/* Usage */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-text mb-4">Usage</h2>
          <CodeBlock code={usageCode} language="tsx" />
        </section>

        {/* Examples */}
        <section className="space-y-8 mb-12">
          <h2 className="text-2xl font-semibold text-text mb-4">Examples</h2>
          
          {/* Basic Form */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Basic Form</h3>
            <div className="max-w-md p-6 bg-white/5 rounded-lg border border-white/10">
              <Form onSubmit={handleSubmit} loading={loading} error={error} success={success}>
                <FormField label="Email" required error={errors.email}>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </FormField>
                
                <FormField label="Password" required error={errors.password}>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                  />
                </FormField>

                <FormField label="Message" error={errors.message}>
                  <Input
                    placeholder="Optional message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                  />
                </FormField>

                <Button type="submit" isLoading={loading} className="w-full">
                  Submit
                </Button>
              </Form>
            </div>
          </div>

          {/* Form Validation */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Form Validation</h3>
            <CodeBlock code={validationCode} language="tsx" />
          </div>
        </section>

        {/* Props */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text mb-4">Props</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-text">Prop</th>
                  <th className="py-4 px-6 text-text">Type</th>
                  <th className="py-4 px-6 text-text">Default</th>
                  <th className="py-4 px-6 text-text">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="py-4 px-6">onSubmit</td>
                  <td className="py-4 px-6">(e: FormEvent) ={'>'} void</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Form submission handler</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">loading</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Loading state</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">error</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Error message</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">success</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Success message</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FormField Props */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text mb-4">FormField Props</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-text">Prop</th>
                  <th className="py-4 px-6 text-text">Type</th>
                  <th className="py-4 px-6 text-text">Default</th>
                  <th className="py-4 px-6 text-text">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="py-4 px-6">label</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Field label</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">error</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Field error message</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">required</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Whether the field is required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}