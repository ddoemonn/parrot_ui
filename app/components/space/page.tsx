'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Space } from '@/components/ui/space';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Space } from '@parrot-ui/react';

function App() {
  return (
    <Space size="md">
      <div>First element</div>
      <div>Second element</div>
      <div>Third element</div>
    </Space>
  );
}`;

const sizesCode = `// Vertical spacing
<Space size="lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Space>

// Horizontal spacing
<Space direction="horizontal" size="md">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>`;

const DemoBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
    {children}
  </div>
);

export default function SpacePage() {
  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Space
        </h1>
        <p className="text-lg text-muted mb-8">
          A utility component for managing consistent spacing between elements.
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
          
          {/* Vertical Spacing */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Vertical Spacing</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Space size="md">
                <DemoBox>Item 1</DemoBox>
                <DemoBox>Item 2</DemoBox>
                <DemoBox>Item 3</DemoBox>
              </Space>
            </div>
          </div>

          {/* Horizontal Spacing */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Horizontal Spacing</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Space direction="horizontal" size="md">
                <DemoBox>Item 1</DemoBox>
                <DemoBox>Item 2</DemoBox>
                <DemoBox>Item 3</DemoBox>
              </Space>
            </div>
          </div>

          {/* Different Sizes */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Space Sizes</h3>
            <div className="space-y-8 p-6 bg-white/5 rounded-lg border border-white/10">
              {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((size) => (
                <div key={size} className="space-y-2">
                  <p className="text-sm text-muted">Size: {size}</p>
                  <Space direction="horizontal" size={size as 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'}>
                    <DemoBox>Item 1</DemoBox>
                    <DemoBox>Item 2</DemoBox>
                    <DemoBox>Item 3</DemoBox>
                  </Space>
                </div>
              ))}
            </div>
          </div>

          {/* Standalone Space */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Standalone Space</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <DemoBox>Content above</DemoBox>
              <Space size="xl" />
              <DemoBox>Content below</DemoBox>
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
                  <td className="py-4 px-6">size</td>
                  <td className="py-4 px-6">xs | sm | md | lg | xl | 2xl | 3xl | 4xl</td>
                  <td className="py-4 px-6">md</td>
                  <td className="py-4 px-6">Amount of space to add</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">direction</td>
                  <td className="py-4 px-6">vertical | horizontal</td>
                  <td className="py-4 px-6">vertical</td>
                  <td className="py-4 px-6">Direction of spacing</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">children</td>
                  <td className="py-4 px-6">ReactNode</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Elements to add space between</td>
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

        {/* Size Reference */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text mb-4">Size Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-text">Size</th>
                  <th className="py-4 px-6 text-text">Value</th>
                  <th className="py-4 px-6 text-text">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="py-4 px-6">xs</td>
                  <td className="py-4 px-6">0.25rem (4px)</td>
                  <td className="py-4 px-6">Extra small spacing</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">sm</td>
                  <td className="py-4 px-6">0.5rem (8px)</td>
                  <td className="py-4 px-6">Small spacing</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">md</td>
                  <td className="py-4 px-6">1rem (16px)</td>
                  <td className="py-4 px-6">Medium spacing</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">lg</td>
                  <td className="py-4 px-6">1.5rem (24px)</td>
                  <td className="py-4 px-6">Large spacing</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">xl</td>
                  <td className="py-4 px-6">2rem (32px)</td>
                  <td className="py-4 px-6">Extra large spacing</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">2xl</td>
                  <td className="py-4 px-6">3rem (48px)</td>
                  <td className="py-4 px-6">2x extra large spacing</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">3xl</td>
                  <td className="py-4 px-6">4rem (64px)</td>
                  <td className="py-4 px-6">3x extra large spacing</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">4xl</td>
                  <td className="py-4 px-6">6rem (96px)</td>
                  <td className="py-4 px-6">4x extra large spacing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}