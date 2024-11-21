'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Select } from '@/components/ui/select';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Select } from '@parrot-ui/react';

function App() {
  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'svelte', label: 'Svelte' },
  ];

  const [value, setValue] = useState('');

  return (
    <Select
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Select framework"
    />
  );
}`;

export default function SelectPage() {
  const [value, setValue] = useState('');
  const [multiValue, setMultiValue] = useState('');

  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'angular', label: 'Angular' },
    { value: 'nextjs', label: 'Next.js' },
  ];

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Select
        </h1>
        <p className="text-lg text-muted mb-8">
          A customizable select component with search and keyboard navigation.
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
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-text mb-4">Examples</h2>
          
          {/* Basic */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Basic Select</h3>
            <div className="w-72">
              <Select
                options={options}
                value={value}
                onChange={setValue}
                placeholder="Select framework"
              />
            </div>
          </div>

          {/* Disabled */}
          <div className="space-y-4 mt-8">
            <h3 className="text-lg font-medium text-text">Disabled State</h3>
            <div className="w-72">
              <Select
                options={options}
                value={value}
                onChange={setValue}
                placeholder="Select framework"
                disabled
              />
            </div>
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
                  <td className="py-4 px-6">options</td>
                  <td className="py-4 px-6">SelectOption[]</td>
                  <td className="py-4 px-6">required</td>
                  <td className="py-4 px-6">Array of options to display</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">value</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Currently selected value</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">onChange</td>
                  <td className="py-4 px-6">(value: string) ={'>'} void</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Called when selection changes</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">placeholder</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">"Select option"</td>
                  <td className="py-4 px-6">Placeholder text</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">disabled</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Whether the select is disabled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}