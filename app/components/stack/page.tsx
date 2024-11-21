'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Stack } from '@/components/ui/stack';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Stack } from '@parrot-ui/react';

function App() {
  return (
    <Stack spacing="md" direction="vertical">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  );
}`;

const horizontalCode = `<Stack direction="horizontal" spacing="md" align="center">
  <div>Left</div>
  <div>Center</div>
  <div>Right</div>
</Stack>`;

const dividersCode = `<Stack dividers spacing="lg">
  <div>Section 1</div>
  <div>Section 2</div>
  <div>Section 3</div>
</Stack>`;

const DemoBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
    {children}
  </div>
);

export default function StackPage() {
  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Stack
        </h1>
        <p className="text-lg text-muted mb-8">
          A flexible layout component for vertical and horizontal stacking with customizable spacing and alignment.
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
          
          {/* Vertical Stack */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Vertical Stack</h3>
            <Stack spacing="md">
              <DemoBox>Item 1</DemoBox>
              <DemoBox>Item 2</DemoBox>
              <DemoBox>Item 3</DemoBox>
            </Stack>
          </div>

          {/* Horizontal Stack */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Horizontal Stack</h3>
            <CodeBlock code={horizontalCode} language="tsx" />
            <Stack direction="horizontal" spacing="md" align="center">
              <DemoBox>Left</DemoBox>
              <DemoBox>Center</DemoBox>
              <DemoBox>Right</DemoBox>
            </Stack>
          </div>

          {/* With Dividers */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">With Dividers</h3>
            <CodeBlock code={dividersCode} language="tsx" />
            <Stack dividers spacing="lg">
              <DemoBox>Section 1</DemoBox>
              <DemoBox>Section 2</DemoBox>
              <DemoBox>Section 3</DemoBox>
            </Stack>
          </div>

          {/* Different Spacing */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Spacing Options</h3>
            <Stack direction="horizontal" spacing="lg" wrap>
              {['none', 'xs', 'sm', 'md', 'lg', 'xl'].map((spacing) => (
                <Stack key={spacing} spacing={spacing as 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'}>
                  <DemoBox>Spacing: {spacing}</DemoBox>
                  <DemoBox>Item 2</DemoBox>
                </Stack>
              ))}
            </Stack>
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
                  <td className="py-4 px-6">direction</td>
                  <td className="py-4 px-6">horizontal | vertical</td>
                  <td className="py-4 px-6">vertical</td>
                  <td className="py-4 px-6">Stack direction</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">spacing</td>
                  <td className="py-4 px-6">none | xs | sm | md | lg | xl</td>
                  <td className="py-4 px-6">md</td>
                  <td className="py-4 px-6">Space between items</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">align</td>
                  <td className="py-4 px-6">start | center | end | stretch</td>
                  <td className="py-4 px-6">stretch</td>
                  <td className="py-4 px-6">Cross-axis alignment</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">justify</td>
                  <td className="py-4 px-6">start | center | end | between | around</td>
                  <td className="py-4 px-6">start</td>
                  <td className="py-4 px-6">Main-axis alignment</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">wrap</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Allow items to wrap</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">dividers</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Show dividers between items</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}