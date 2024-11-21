'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Textarea } from '@/components/ui/textarea';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Textarea } from '@parrot-ui/react';

function App() {
  return (
    <Textarea
      placeholder="Enter your message"
      rows={4}
    />
  );
}`;

const variantsCode = `// Default variant
<Textarea variant="default" placeholder="Default variant" />

// Filled variant
<Textarea variant="filled" placeholder="Filled variant" />

// Outline variant
<Textarea variant="outline" placeholder="Outline variant" />

// Ghost variant
<Textarea variant="ghost" placeholder="Ghost variant" />`;

const resizeCode = `// No resize
<Textarea resize="none" placeholder="Cannot be resized" />

// Vertical resize only
<Textarea resize="vertical" placeholder="Can be resized vertically" />

// Horizontal resize only
<Textarea resize="horizontal" placeholder="Can be resized horizontally" />

// Both directions
<Textarea resize="both" placeholder="Can be resized in both directions" />`;

export default function TextareaPage() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Textarea
        </h1>
        <p className="text-lg text-muted mb-8">
          A multi-line text input component with various styles and features.
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
          
          {/* Variants */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Variants</h3>
            <CodeBlock code={variantsCode} language="tsx" />
            <div className="grid gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
              <Textarea
                variant="default"
                placeholder="Default variant"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
              />
              <Textarea
                variant="filled"
                placeholder="Filled variant"
              />
              <Textarea
                variant="outline"
                placeholder="Outline variant"
              />
              <Textarea
                variant="ghost"
                placeholder="Ghost variant"
              />
            </div>
          </div>

          {/* Resize Options */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Resize Options</h3>
            <CodeBlock code={resizeCode} language="tsx" />
            <div className="grid gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
              <Textarea
                resize="none"
                placeholder="Cannot be resized"
                rows={3}
              />
              <Textarea
                resize="vertical"
                placeholder="Can be resized vertically"
                rows={3}
              />
              <Textarea
                resize="horizontal"
                placeholder="Can be resized horizontally"
                rows={3}
              />
              <Textarea
                resize="both"
                placeholder="Can be resized in both directions"
                rows={3}
              />
            </div>
          </div>

          {/* States */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">States</h3>
            <div className="grid gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
              <Textarea
                error="This field is required"
                placeholder="Error state"
              />
              <Textarea
                disabled
                placeholder="Disabled state"
                value="This textarea is disabled"
              />
              <Textarea
                helperText="Optional helper text"
                placeholder="With helper text"
              />
            </div>
          </div>

          {/* Auto-growing */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Auto-growing</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Textarea
                placeholder="This textarea grows with content"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                rows={3}
                className="min-h-[80px] max-h-[300px]"
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
                  <td className="py-4 px-6">variant</td>
                  <td className="py-4 px-6">default | filled | outline | ghost</td>
                  <td className="py-4 px-6">default</td>
                  <td className="py-4 px-6">Visual style variant</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">resize</td>
                  <td className="py-4 px-6">none | vertical | horizontal | both</td>
                  <td className="py-4 px-6">vertical</td>
                  <td className="py-4 px-6">Resize behavior</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">error</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Error message</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">helperText</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Helper text below textarea</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">disabled</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Whether the textarea is disabled</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">className</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Additional CSS classes</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">...props</td>
                  <td className="py-4 px-6">TextareaHTMLAttributes</td>
                  <td className="py-4 px-6">-</td>
                  <td className="py-4 px-6">Native textarea props</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}