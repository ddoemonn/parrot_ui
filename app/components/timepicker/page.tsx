'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TimePicker } from '@/components/ui/time-picker';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { TimePicker } from '@parrot-ui/react';

function App() {
  const [time, setTime] = useState('');

  return (
    <TimePicker
      value={time}
      onChange={setTime}
      format="24h"
    />
  );
}`;

const formatCode = `// 24-hour format
<TimePicker
  value={time}
  onChange={setTime}
  format="24h"
/>

// 12-hour format
<TimePicker
  value={time}
  onChange={setTime}
  format="12h"
/>`;

const secondsCode = `<TimePicker
  value={time}
  onChange={setTime}
  showSeconds
/>`;

export default function TimePickerPage() {
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [time3, setTime3] = useState('');
  const [time4, setTime4] = useState('');

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          TimePicker
        </h1>
        <p className="text-lg text-muted mb-8">
          A customizable time picker component with multiple formats and features.
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
            <h3 className="text-lg font-medium text-text">Basic TimePicker</h3>
            <div className="w-72">
              <TimePicker
                value={time1}
                onChange={setTime1}
              />
            </div>
          </div>

          {/* Time Formats */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Time Formats</h3>
            <CodeBlock code={formatCode} language="tsx" />
            <div className="flex gap-4">
              <div className="w-72">
                <TimePicker
                  value={time2}
                  onChange={setTime2}
                  format="24h"
                  placeholder="24-hour format"
                />
              </div>
              <div className="w-72">
                <TimePicker
                  value={time3}
                  onChange={setTime3}
                  format="12h"
                  placeholder="12-hour format"
                />
              </div>
            </div>
          </div>

          {/* With Seconds */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">With Seconds</h3>
            <CodeBlock code={secondsCode} language="tsx" />
            <div className="w-72">
              <TimePicker
                value={time4}
                onChange={setTime4}
                showSeconds
              />
            </div>
          </div>

          {/* Disabled */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Disabled State</h3>
            <div className="w-72">
              <TimePicker
                value="13:45"
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
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Selected time value</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">onChange</td>
                  <td className="py-4 px-6">(time: string) ={'>'} void</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Called when time changes</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">format</td>
                  <td className="py-4 px-6">12h | 24h</td>
                  <td className="py-4 px-6">24h</td>
                  <td className="py-4 px-6">Time format</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">showSeconds</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Show seconds input</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">disabled</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Disable the time picker</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">placeholder</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">"Select time"</td>
                  <td className="py-4 px-6">Placeholder text</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">minTime</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Minimum selectable time</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">maxTime</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Maximum selectable time</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}