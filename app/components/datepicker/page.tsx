'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DatePicker } from '@/components/ui/date-picker';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { DatePicker } from '@parrot-ui/react';

function App() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <DatePicker
      value={date}
      onChange={setDate}
      placeholder="Select date"
    />
  );
}`;

const rangeCode = `// With min and max dates
<DatePicker
  value={date}
  onChange={setDate}
  minDate={new Date(2024, 0, 1)}
  maxDate={new Date(2024, 11, 31)}
/>`;

export default function DatePickerPage() {
  const [date1, setDate1] = useState<Date>();
  const [date2, setDate2] = useState<Date>();
  const [date3, setDate3] = useState<Date>();

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          DatePicker
        </h1>
        <p className="text-lg text-muted mb-8">
          A customizable date picker component with calendar dropdown.
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
          
          {/* Basic */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Basic DatePicker</h3>
            <div className="w-72">
              <DatePicker
                value={date1}
                onChange={setDate1}
                placeholder="Select date"
              />
            </div>
          </div>

          {/* With Range */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">With Date Range</h3>
            <CodeBlock code={rangeCode} language="tsx" />
            <div className="w-72">
              <DatePicker
                value={date2}
                onChange={setDate2}
                minDate={new Date(2024, 0, 1)}
                maxDate={new Date(2024, 11, 31)}
                placeholder="Select date in 2024"
              />
            </div>
          </div>

          {/* Disabled */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Disabled State</h3>
            <div className="w-72">
              <DatePicker
                value={date3}
                onChange={setDate3}
                disabled
                placeholder="Disabled date picker"
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
                  <td className="py-4 px-6">value</td>
                  <td className="py-4 px-6">Date</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Selected date</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">onChange</td>
                  <td className="py-4 px-6">(date: Date) ={'>'} void</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Called when date changes</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">minDate</td>
                  <td className="py-4 px-6">Date</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Minimum selectable date</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">maxDate</td>
                  <td className="py-4 px-6">Date</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Maximum selectable date</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">disabled</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Whether the date picker is disabled</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">placeholder</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">"Select date"</td>
                  <td className="py-4 px-6">Placeholder text</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">format</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">"MM/dd/yyyy"</td>
                  <td className="py-4 px-6">Date format string</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}