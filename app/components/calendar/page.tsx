'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from '@/components/ui/calendar';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Calendar } from '@parrot-ui/react';

function App() {
  const [date, setDate] = useState<Date>();

  return (
    <Calendar
      value={date}
      onChange={setDate}
    />
  );
}`;

const minMaxCode = `<Calendar
  value={date}
  onChange={setDate}
  minDate={new Date(2024, 0, 1)}
  maxDate={new Date(2024, 11, 31)}
/>`;

const variantsCode = `// Default variant
<Calendar variant="default" />

// Outline variant
<Calendar variant="outline" />

// Ghost variant
<Calendar variant="ghost" />`;

export default function CalendarPage() {
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
          Calendar
        </h1>
        <p className="text-lg text-muted mb-8">
          A calendar component for date selection with various customization options.
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
            <h3 className="text-lg font-medium text-text">Basic Calendar</h3>
            <div className="max-w-sm">
              <Calendar
                value={date1}
                onChange={setDate1}
              />
            </div>
          </div>

          {/* With Min/Max Dates */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">With Min/Max Dates</h3>
            <CodeBlock code={minMaxCode} language="tsx" />
            <div className="max-w-sm">
              <Calendar
                value={date2}
                onChange={setDate2}
                minDate={new Date(2024, 0, 1)}
                maxDate={new Date(2024, 11, 31)}
              />
            </div>
          </div>

          {/* Variants */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Variants</h3>
            <CodeBlock code={variantsCode} language="tsx" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Calendar
                value={date3}
                onChange={setDate3}
                variant="default"
              />
              <Calendar
                value={date3}
                onChange={setDate3}
                variant="outline"
              />
              <Calendar
                value={date3}
                onChange={setDate3}
                variant="ghost"
              />
            </div>
          </div>

          {/* Disabled */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Disabled State</h3>
            <div className="max-w-sm">
              <Calendar
                value={new Date()}
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
                  <td className="py-4 px-6">Disable the calendar</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">variant</td>
                  <td className="py-4 px-6">default | outline | ghost</td>
                  <td className="py-4 px-6">default</td>
                  <td className="py-4 px-6">Visual style variant</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">size</td>
                  <td className="py-4 px-6">sm | md | lg</td>
                  <td className="py-4 px-6">md</td>
                  <td className="py-4 px-6">Size of the calendar</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">className</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}