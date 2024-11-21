'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/code-block';
import { useTheme } from '@/hooks/use-theme';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Progress } from '@parrot-ui/react';

function App() {
  return (
    <Progress value={75} />
  );
}`;

const variantsCode = `// Default variant
<Progress value={75} />

// Gradient variant
<Progress 
  value={75} 
  variant="gradient" 
  gradientFrom="#FF6B6B"
  gradientTo="#4ECDC4"
/>

// Striped variant
<Progress value={75} variant="striped" />

// Indeterminate variant
<Progress variant="indeterminate" />`;

const sizesCode = `// Small size
<Progress value={75} size="sm" />

// Default (medium) size
<Progress value={75} size="md" />

// Large size
<Progress value={75} size="lg" />

// Extra large size
<Progress value={75} size="xl" />`;

export default function ProgressPage() {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(75);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress1((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Progress
        </h1>
        <p className="text-lg text-muted mb-8">
          A versatile progress indicator component with multiple variants and animations.
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
                <p className="text-sm text-muted">Default</p>
                <Progress value={75} />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted">Gradient</p>
                <Progress 
                  value={75} 
                  variant="gradient"
                  gradientFrom={theme.colors.primary}
                  gradientTo={theme.colors.secondary}
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted">Striped</p>
                <Progress value={75} variant="striped" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted">Indeterminate</p>
                <Progress variant="indeterminate" />
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Sizes</h3>
            <CodeBlock code={sizesCode} language="tsx" />
            <div className="space-y-8 p-6 bg-white/5 rounded-lg border border-white/10">
              {['sm', 'md', 'lg', 'xl'].map((size) => (
                <div key={size} className="space-y-2">
                  <p className="text-sm text-muted">Size: {size}</p>
                  <Progress 
                    value={75} 
                    size={size as 'sm' | 'md' | 'lg' | 'xl'} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Example */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Interactive Example</h3>
            <div className="space-y-4 p-6 bg-white/5 rounded-lg border border-white/10">
              <Progress 
                value={progress2}
                showValue
                variant="gradient"
                gradientFrom={theme.colors.primary}
                gradientTo={theme.colors.secondary}
              />
              <div className="flex gap-2">
                <Button
                  onClick={() => setProgress2((prev) => Math.max(0, prev - 10))}
                  variant="outline"
                >
                  Decrease
                </Button>
                <Button
                  onClick={() => setProgress2((prev) => Math.min(100, prev + 10))}
                  variant="outline"
                >
                  Increase
                </Button>
              </div>
            </div>
          </div>

          {/* Animated Progress */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Animated Progress</h3>
            <div className="space-y-4 p-6 bg-white/5 rounded-lg border border-white/10">
              <Progress 
                value={progress1}
                showValue
                variant="striped"
                animated
              />
            </div>
          </div>

          {/* Custom Colors */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Custom Colors</h3>
            <div className="space-y-4 p-6 bg-white/5 rounded-lg border border-white/10">
              <Progress 
                value={75}
                color="success"
              />
              <Progress 
                value={50}
                color="warning"
              />
              <Progress 
                value={25}
                color="error"
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
                  <td className="py-4 px-6">value</td>
                  <td className="py-4 px-6">number</td>
                  <td className="py-4 px-6">0</td>
                  <td className="py-4 px-6">Progress value (0-100)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">variant</td>
                  <td className="py-4 px-6">default | gradient | striped | indeterminate</td>
                  <td className="py-4 px-6">default</td>
                  <td className="py-4 px-6">Visual style variant</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">size</td>
                  <td className="py-4 px-6">sm | md | lg | xl</td>
                  <td className="py-4 px-6">md</td>
                  <td className="py-4 px-6">Progress bar size</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">color</td>
                  <td className="py-4 px-6">primary | success | warning | error</td>
                  <td className="py-4 px-6">primary</td>
                  <td className="py-4 px-6">Progress bar color</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">gradientFrom</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">theme.colors.primary</td>
                  <td className="py-4 px-6">Start color for gradient</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">gradientTo</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">theme.colors.secondary</td>
                  <td className="py-4 px-6">End color for gradient</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">showValue</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Show percentage value</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">animated</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Enable animations</td>
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