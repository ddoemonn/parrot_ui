'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Switch } from '@/components/ui/switch';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Switch } from '@parrot-ui/react';

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      label="Enable notifications"
    />
  );
}`;

export default function SwitchPage() {
  const [enabled1, setEnabled1] = useState(false);
  const [enabled2, setEnabled2] = useState(true);
  const [enabled3, setEnabled3] = useState(false);

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Switch
        </h1>
        <p className="text-lg text-muted mb-8">
          A beautiful switch component with smooth animations and multiple sizes.
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
          
          {/* Sizes */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Sizes</h3>
            <div className="space-y-4">
              <Switch
                size="sm"
                checked={enabled1}
                onChange={setEnabled1}
                label="Small switch"
              />
              <Switch
                size="md"
                checked={enabled2}
                onChange={setEnabled2}
                label="Medium switch"
              />
              <Switch
                size="lg"
                checked={enabled3}
                onChange={setEnabled3}
                label="Large switch"
              />
            </div>
          </div>

          {/* Disabled */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Disabled State</h3>
            <div className="space-y-4">
              <Switch
                checked={true}
                label="Disabled ON"
                disabled
              />
              <Switch
                checked={false}
                label="Disabled OFF"
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
                  <td className="py-4 px-6">checked</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Whether the switch is checked</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">onChange</td>
                  <td className="py-4 px-6">(checked: boolean) ={'>'} void</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Called when the switch state changes</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">label</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Label text for the switch</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">size</td>
                  <td className="py-4 px-6">sm | md | lg</td>
                  <td className="py-4 px-6">md</td>
                  <td className="py-4 px-6">Size of the switch</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">disabled</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Whether the switch is disabled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}