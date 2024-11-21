'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Spinner } from '@/components/ui/spinner';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Spinner } from '@parrot-ui/react';

function App() {
  return <Spinner />;
}`;

const variantsCode = `// Default spinner
<Spinner variant="default" />

// Gradient spinner
<Spinner variant="gradient" />

// Dots spinner
<Spinner variant="dots" />`;

const sizesCode = `// Small spinner
<Spinner size="sm" />

// Medium spinner (default)
<Spinner size="md" />

// Large spinner
<Spinner size="lg" />

// Extra large spinner
<Spinner size="xl" />`;

export default function SpinnerPage() {
  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Spinner
        </h1>
        <p className="text-lg text-muted mb-8">
          A versatile loading spinner component with multiple variants and animations.
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
            <div className="flex items-center gap-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="flex flex-col items-center gap-2">
                <Spinner variant="default" />
                <span className="text-sm text-muted">Default</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Spinner variant="gradient" />
                <span className="text-sm text-muted">Gradient</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Spinner variant="dots" />
                <span className="text-sm text-muted">Dots</span>
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Sizes</h3>
            <CodeBlock code={sizesCode} language="tsx" />
            <div className="flex items-center gap-8 p-6 bg-white/5 rounded-lg border border-white/10">
              {['sm', 'md', 'lg', 'xl'].map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <Spinner size={size as 'sm' | 'md' | 'lg' | 'xl'} />
                  <span className="text-sm text-muted">{size}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Speeds */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Animation Speeds</h3>
            <div className="flex items-center gap-8 p-6 bg-white/5 rounded-lg border border-white/10">
              {['slow', 'normal', 'fast'].map((speed) => (
                <div key={speed} className="flex flex-col items-center gap-2">
                  <Spinner speed={speed as 'slow' | 'normal' | 'fast'} />
                  <span className="text-sm text-muted">{speed}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Colors */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Custom Colors</h3>
            <div className="flex items-center gap-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <Spinner color="#FF6B6B" />
              <Spinner color="#4ECDC4" />
              <Spinner color="#45B7D1" />
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
                  <td className="py-4 px-6">sm | md | lg | xl</td>
                  <td className="py-4 px-6">md</td>
                  <td className="py-4 px-6">Size of the spinner</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">variant</td>
                  <td className="py-4 px-6">default | gradient | dots</td>
                  <td className="py-4 px-6">default</td>
                  <td className="py-4 px-6">Visual style variant</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">color</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">theme.colors.primary</td>
                  <td className="py-4 px-6">Custom spinner color</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">speed</td>
                  <td className="py-4 px-6">slow | normal | fast</td>
                  <td className="py-4 px-6">normal</td>
                  <td className="py-4 px-6">Animation speed</td>
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