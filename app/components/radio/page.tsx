'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RadioGroup } from '@/components/ui/radio-group';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { RadioGroup } from '@parrot-ui/react';

function App() {
  const [value, setValue] = useState('apple');

  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
  ];

  return (
    <RadioGroup
      options={options}
      value={value}
      onChange={setValue}
      name="fruits"
    />
  );
}`;

export default function RadioPage() {
  const [value1, setValue1] = useState('apple');
  const [value2, setValue2] = useState('horizontal');

  const fruitOptions = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
  ];

  const orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  const disabledOptions = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2', disabled: true },
    { label: 'Option 3', value: 'opt3' },
  ];

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Radio
        </h1>
        <p className="text-lg text-muted mb-8">
          A customizable radio group component with multiple orientations.
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
          
          {/* Vertical */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Vertical Layout</h3>
            <RadioGroup
              options={fruitOptions}
              value={value1}
              onChange={setValue1}
              name="fruits"
              orientation="vertical"
            />
          </div>

          {/* Horizontal */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Horizontal Layout</h3>
            <RadioGroup
              options={orientationOptions}
              value={value2}
              onChange={setValue2}
              name="orientation"
              orientation="horizontal"
            />
          </div>

          {/* Disabled */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Disabled Options</h3>
            <RadioGroup
              options={disabledOptions}
              value="opt1"
              name="disabled-example"
              orientation="vertical"
            />
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
                  <td className="py-4 px-6">RadioOption[]</td>
                  <td className="py-4 px-6">required</td>
                  <td className="py-4 px-6">Array of radio options</td>
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
                  <td className="py-4 px-6">name</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">required</td>
                  <td className="py-4 px-6">Name attribute for the radio group</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">orientation</td>
                  <td className="py-4 px-6">horizontal | vertical</td>
                  <td className="py-4 px-6">vertical</td>
                  <td className="py-4 px-6">Layout orientation of the radio group</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}