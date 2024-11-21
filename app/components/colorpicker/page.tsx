'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ColorPicker } from '@/components/ui/color-picker';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { ColorPicker } from '@parrot-ui/react';

function App() {
  const [color, setColor] = useState('#FF6B6B');

  return (
    <ColorPicker
      value={color}
      onChange={setColor}
      showInput
      showPresets
    />
  );
}`;

const customPresetsCode = `// Custom preset colors
const presetColors = [
  '#FF0000', '#00FF00', '#0000FF',
  '#FFFF00', '#FF00FF', '#00FFFF'
];

<ColorPicker
  value={color}
  onChange={setColor}
  presetColors={presetColors}
/>`;

export default function ColorPickerPage() {
  const [color1, setColor1] = useState('#FF6B6B');
  const [color2, setColor2] = useState('#4ECDC4');
  const [color3, setColor3] = useState('#45B7D1');

  const customPresets = [
    '#FF0000', '#00FF00', '#0000FF',
    '#FFFF00', '#FF00FF', '#00FFFF',
    '#800080', '#008080', '#808000',
    '#FFA500'
  ];

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          ColorPicker
        </h1>
        <p className="text-lg text-muted mb-8">
          A customizable color picker component with preset colors and hex input.
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
            <h3 className="text-lg font-medium text-text">Basic ColorPicker</h3>
            <ColorPicker
              value={color1}
              onChange={setColor1}
            />
          </div>

          {/* Custom Presets */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Custom Presets</h3>
            <CodeBlock code={customPresetsCode} language="tsx" />
            <ColorPicker
              value={color2}
              onChange={setColor2}
              presetColors={customPresets}
            />
          </div>

          {/* Without Input */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Without Input</h3>
            <ColorPicker
              value={color3}
              onChange={setColor3}
              showInput={false}
            />
          </div>

          {/* Disabled */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Disabled State</h3>
            <ColorPicker
              value="#FF6B6B"
              disabled
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
                  <td className="py-4 px-6">value</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">#000000</td>
                  <td className="py-4 px-6">Selected color in hex format</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">onChange</td>
                  <td className="py-4 px-6">(color: string) ={'>'} void</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Called when color changes</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">presetColors</td>
                  <td className="py-4 px-6">string[]</td>
                  <td className="py-4 px-6">[...]</td>
                  <td className="py-4 px-6">Array of preset colors</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">disabled</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Whether the color picker is disabled</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">showInput</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">true</td>
                  <td className="py-4 px-6">Show hex input field</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">showPresets</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">true</td>
                  <td className="py-4 px-6">Show preset color buttons</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}