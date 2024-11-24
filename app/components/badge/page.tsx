'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Badge } from '@parrot-ui/react';

function App() {
  return (
    <div className="space-x-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  );
}`;

const variantsCode = `// Basic variants
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="info">Info</Badge>

// Special variants
<Badge variant="outline">Outline</Badge>
<Badge variant="ghost">Ghost</Badge>
<Badge variant="gradient">Gradient</Badge>`;

const sizesCode = `// Small size
<Badge size="sm">Small</Badge>

// Medium size (default)
<Badge size="md">Medium</Badge>

// Large size
<Badge size="lg">Large</Badge>`;

const removableCode = `const [badges, setBadges] = useState(['React', 'Vue', 'Svelte']);

return (
  <div className="space-x-2">
    {badges.map((badge) => (
      <Badge
        key={badge}
        removable
        onRemove={() => setBadges(prev => prev.filter(b => b !== badge))}
      >
        {badge}
      </Badge>
    ))}
  </div>
);`;

export default function BadgePage() {
  const [badges, setBadges] = useState(['React', 'Vue', 'Svelte']);

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Badge
        </h1>
        <p className="text-lg text-muted mb-8">
          A versatile badge component for displaying status, labels, and counts.
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
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="ghost">Ghost</Badge>
                <Badge variant="gradient">Gradient</Badge>
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Sizes</h3>
            <CodeBlock code={sizesCode} language="tsx" />
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-2">
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
              </div>
            </div>
          </div>

          {/* Removable */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Removable Badges</h3>
            <CodeBlock code={removableCode} language="tsx" />
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <Badge
                    key={badge}
                    removable
                    onRemove={() => setBadges(prev => prev.filter(b => b !== badge))}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Rounded Variants */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Rounded Variants</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="flex flex-wrap gap-2">
                <Badge rounded="default">Default</Badge>
                <Badge rounded="sm">Small Rounded</Badge>
                <Badge rounded="lg">Large Rounded</Badge>
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
                  <td className="py-4 px-6">variant</td>
                  <td className="py-4 px-6">BadgeVariant</td>
                  <td className="py-4 px-6">default</td>
                  <td className="py-4 px-6">Visual style variant</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">size</td>
                  <td className="py-4 px-6">sm | md | lg</td>
                  <td className="py-4 px-6">md</td>
                  <td className="py-4 px-6">Size of the badge</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">rounded</td>
                  <td className="py-4 px-6">default | sm | lg</td>
                  <td className="py-4 px-6">default</td>
                  <td className="py-4 px-6">Border radius style</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">removable</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Show remove button</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">onRemove</td>
                  <td className="py-4 px-6">() ={'>'} void</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Called when remove clicked</td>
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