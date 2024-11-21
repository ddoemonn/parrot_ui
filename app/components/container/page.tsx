'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Container } from '@parrot-ui/react';

function App() {
  return (
    <Container size="lg" padding="md" center>
      <h1>Your Content</h1>
      <p>Container helps maintain consistent width and spacing.</p>
    </Container>
  );
}`;

const sizesCode = `// Small container (max-width: 672px)
<Container size="sm">
  Small container content
</Container>

// Medium container (max-width: 896px)
<Container size="md">
  Medium container content
</Container>

// Large container (max-width: 1152px)
<Container size="lg">
  Large container content
</Container>

// Extra large container (max-width: 1280px)
<Container size="xl">
  Extra large container content
</Container>

// Full width container
<Container size="full">
  Full width content
</Container>`;

const paddingCode = `// No padding
<Container padding="none">
  Content without padding
</Container>

// Small padding (16px)
<Container padding="sm">
  Content with small padding
</Container>

// Medium padding (24px)
<Container padding="md">
  Content with medium padding
</Container>

// Large padding (32px)
<Container padding="lg">
  Content with large padding
</Container>`;

export default function ContainerPage() {
  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Container
        </h1>
        <p className="text-lg text-muted mb-8">
          A responsive container component that maintains consistent width and spacing across your application.
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
          
          {/* Sizes */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Container Sizes</h3>
            <CodeBlock code={sizesCode} language="tsx" />
            <div className="space-y-4 mt-4">
              {['sm', 'md', 'lg', 'xl', 'full'].map((size) => (
                <Container 
                  key={size} 
                  size={size as 'sm' | 'md' | 'lg' | 'xl' | 'full'}
                  className="bg-white/5 border border-white/10 rounded-lg p-4"
                >
                  <p className="text-center">Container size: {size}</p>
                </Container>
              ))}
            </div>
          </div>

          {/* Padding */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Padding Options</h3>
            <CodeBlock code={paddingCode} language="tsx" />
            <div className="space-y-4 mt-4">
              {['none', 'sm', 'md', 'lg'].map((padding) => (
                <Container 
                  key={padding} 
                  padding={padding as 'none' | 'sm' | 'md' | 'lg'}
                  className="bg-white/5 border border-white/10 rounded-lg"
                >
                  <p className="text-center py-4">Padding: {padding}</p>
                </Container>
              ))}
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
                  <td className="py-4 px-6">sm | md | lg | xl | full</td>
                  <td className="py-4 px-6">lg</td>
                  <td className="py-4 px-6">Maximum width of the container</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">padding</td>
                  <td className="py-4 px-6">none | sm | md | lg</td>
                  <td className="py-4 px-6">md</td>
                  <td className="py-4 px-6">Horizontal padding of the container</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">center</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">true</td>
                  <td className="py-4 px-6">Center align content vertically and horizontally</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">as</td>
                  <td className="py-4 px-6">keyof JSX.IntrinsicElements</td>
                  <td className="py-4 px-6">div</td>
                  <td className="py-4 px-6">HTML element to render as</td>
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