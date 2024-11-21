'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toggle } from '@/components/ui/toggle';
import { CodeBlock } from '@/components/code-block';
import { Bell, BellOff, Bold, Italic, Underline } from 'lucide-react';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Toggle } from '@parrot-ui/react';
import { Bell } from 'lucide-react';

function App() {
  const [pressed, setPressed] = useState(false);

  return (
    <Toggle 
      pressed={pressed} 
      onPressedChange={setPressed}
      aria-label="Toggle notifications"
    >
      <Bell className="h-4 w-4" />
    </Toggle>
  );
}`;

export default function TogglePage() {
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [pressed3, setPressed3] = useState(false);

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Toggle
        </h1>
        <p className="text-lg text-muted mb-8">
          A two-state button that can be either on or off.
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
            <h3 className="text-lg font-medium text-text">Basic Toggle</h3>
            <div className="flex items-center gap-4">
              <Toggle
                pressed={pressed1}
                onPressedChange={setPressed1}
                aria-label="Toggle notifications"
              >
                {pressed1 ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
              </Toggle>
            </div>
          </div>

          {/* Text and Icon */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">With Text and Icon</h3>
            <div className="flex items-center gap-4">
              <Toggle
                pressed={pressed2}
                onPressedChange={setPressed2}
                aria-label="Toggle notifications"
              >
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Toggle>
            </div>
          </div>


          {/* Disabled */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Disabled State</h3>
            <div className="flex items-center gap-4">
              <Toggle
                disabled
                pressed={false}
                aria-label="Toggle disabled"
              >
                Disabled
              </Toggle>
              <Toggle
                disabled
                pressed={true}
                aria-label="Toggle disabled pressed"
              >
                Disabled Pressed
              </Toggle>
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
                  <td className="py-4 px-6">pressed</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">The controlled pressed state of the toggle</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">onPressedChange</td>
                  <td className="py-4 px-6">(pressed: boolean) ={'>'} void</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Event handler called when the pressed state changes</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">disabled</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Whether the toggle is disabled</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">size</td>
                  <td className="py-4 px-6">sm | md | lg</td>
                  <td className="py-4 px-6">md</td>
                  <td className="py-4 px-6">The size of the toggle</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">children</td>
                  <td className="py-4 px-6">ReactNode</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">The content to display inside the toggle</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}