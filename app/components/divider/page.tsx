'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Divider } from '@/components/ui/divider';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Divider } from '@parrot-ui/react';

function App() {
  return (
    <div>
      <div>Content above</div>
      <Divider />
      <div>Content below</div>
    </div>
  );
}`;

const variantsCode = `// Solid divider (default)
<Divider />

// Dashed divider
<Divider variant="dashed" />

// Dotted divider
<Divider variant="dotted" />`;

const orientationsCode = `// Horizontal divider (default)
<Divider />

// Vertical divider
<div className="h-20 flex items-center">
  <div>Left</div>
  <Divider orientation="vertical" />
  <div>Right</div>
</div>`;

const labeledCode = `<Divider label="OR" />

<Divider label={
  <span className="px-2 bg-background">
    Custom Label
  </span>
} />`;

export default function DividerPage() {
  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Divider
        </h1>
        <p className="text-lg text-muted mb-8">
          A versatile divider component for separating content with various styles and orientations.
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
            <div className="space-y-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="space-y-2">
                <p className="text-sm text-muted">Solid</p>
                <Divider />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted">Dashed</p>
                <Divider variant="dashed" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted">Dotted</p>
                <Divider variant="dotted" />
              </div>
            </div>
          </div>

          {/* Orientations */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Orientations</h3>
            <CodeBlock code={orientationsCode} language="tsx" />
            <div className="space-y-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="space-y-2">
                <p className="text-sm text-muted">Horizontal</p>
                <Divider />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted">Vertical</p>
                <div className="h-20 flex items-center gap-4">
                  <div>Left Content</div>
                  <Divider orientation="vertical" />
                  <div>Right Content</div>
                </div>
              </div>
            </div>
          </div>

          {/* With Label */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">With Label</h3>
            <CodeBlock code={labeledCode} language="tsx" />
            <div className="space-y-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <Divider label="OR" />
              <Divider 
                label={
                  <span className="px-2 bg-background rounded">
                    Custom Label
                  </span>
                }
              />
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Sizes</h3>
            <div className="space-y-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="space-y-2">
                <p className="text-sm text-muted">Thin</p>
                <Divider size="thin" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted">Medium</p>
                <Divider size="medium" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted">Thick</p>
                <Divider size="thick" />
              </div>
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
                  <td className="py-4 px-6">orientation</td>
                  <td className="py-4 px-6">horizontal | vertical</td>
                  <td className="py-4 px-6">horizontal</td>
                  <td className="py-4 px-6">Direction of the divider</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">variant</td>
                  <td className="py-4 px-6">solid | dashed | dotted</td>
                  <td className="py-4 px-6">solid</td>
                  <td className="py-4 px-6">Visual style of the divider</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">size</td>
                  <td className="py-4 px-6">thin | medium | thick</td>
                  <td className="py-4 px-6">medium</td>
                  <td className="py-4 px-6">Thickness of the divider</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">label</td>
                  <td className="py-4 px-6">ReactNode</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Optional label to display</td>
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