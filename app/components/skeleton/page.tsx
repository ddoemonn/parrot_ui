'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Skeleton } from '@parrot-ui/react';

function App() {
  return (
    <div className="space-y-4">
      <Skeleton width={200} height={20} />
      <Skeleton width="100%" height={40} />
    </div>
  );
}`;

const variantsCode = `// Default variant
<Skeleton width={200} height={20} />

// Circular variant
<Skeleton variant="circular" width={40} height={40} />

// Rounded variant
<Skeleton variant="rounded" width={200} height={100} />`;

const textCode = `import { SkeletonText } from '@parrot-ui/react';

// Basic text skeleton
<SkeletonText lines={3} />

// Custom spacing and last line width
<SkeletonText 
  lines={4} 
  spacing="lg"
  lastLineWidth="60%"
/>`;

export default function SkeletonPage() {
  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Skeleton
        </h1>
        <p className="text-lg text-muted mb-8">
          A placeholder loading component for content that is still loading.
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
            <div className="flex flex-wrap gap-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="flex flex-col items-center gap-2">
                <Skeleton width={200} height={20} />
                <span className="text-sm text-muted">Default</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Skeleton variant="circular" width={40} height={40} />
                <span className="text-sm text-muted">Circular</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Skeleton variant="rounded" width={200} height={100} />
                <span className="text-sm text-muted">Rounded</span>
              </div>
            </div>
          </div>

          {/* Text Skeleton */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Text Skeleton</h3>
            <CodeBlock code={textCode} language="tsx" />
            <div className="grid gap-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="space-y-2">
                <p className="text-sm text-muted">Basic Text Skeleton</p>
                <SkeletonText lines={3} />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted">Custom Spacing and Width</p>
                <SkeletonText lines={4} spacing="lg" lastLineWidth="60%" />
              </div>
            </div>
          </div>

          {/* Card Example */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Card Example</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="flex gap-4">
                <Skeleton variant="circular" width={50} height={50} />
                <div className="flex-1 space-y-4">
                  <Skeleton height={20} width={200} />
                  <SkeletonText lines={2} />
                </div>
              </div>
            </div>
          </div>

          {/* Static (Non-animated) */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Static (Non-animated)</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <SkeletonText lines={3} animated={false} />
            </div>
          </div>
        </section>

        {/* Props */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text mb-4">Props</h2>
          
          {/* Skeleton Props */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Skeleton Props</h3>
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
                    <td className="py-4 px-6">default | circular | rounded</td>
                    <td className="py-4 px-6">default</td>
                    <td className="py-4 px-6">Visual style variant</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">width</td>
                    <td className="py-4 px-6">string | number</td>
                    <td className="py-4 px-6">100%</td>
                    <td className="py-4 px-6">Width of skeleton</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">height</td>
                    <td className="py-4 px-6">string | number</td>
                    <td className="py-4 px-6">1rem</td>
                    <td className="py-4 px-6">Height of skeleton</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">animated</td>
                    <td className="py-4 px-6">boolean</td>
                    <td className="py-4 px-6">true</td>
                    <td className="py-4 px-6">Enable pulse animation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SkeletonText Props */}
          <div className="space-y-4 mt-8">
            <h3 className="text-lg font-medium text-text">SkeletonText Props</h3>
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
                    <td className="py-4 px-6">lines</td>
                    <td className="py-4 px-6">number</td>
                    <td className="py-4 px-6">3</td>
                    <td className="py-4 px-6">Number of lines</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">lastLineWidth</td>
                    <td className="py-4 px-6">string</td>
                    <td className="py-4 px-6">70%</td>
                    <td className="py-4 px-6">Width of last line</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">spacing</td>
                    <td className="py-4 px-6">sm | md | lg</td>
                    <td className="py-4 px-6">md</td>
                    <td className="py-4 px-6">Space between lines</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}