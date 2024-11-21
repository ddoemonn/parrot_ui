'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Mail, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/code-block';

const variants = ['primary', 'secondary', 'outline', 'ghost', 'link', 'gradient'] as const;
const sizes = ['sm', 'md', 'lg', 'xl'] as const;

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Button } from '@parrot-ui/react';

function App() {
  return (
    <div>
      {/* Basic usage */}
      <Button>Default Button</Button>
      
      {/* With variants */}
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      
      {/* With sizes */}
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      
      {/* With icons */}
      <Button leftIcon={<Mail />}>Send Email</Button>
      <Button rightIcon={<ArrowRight />}>Next</Button>
      
      {/* States */}
      <Button isLoading>Loading</Button>
      <Button isDisabled>Disabled</Button>
    </div>
  );
}`;

export default function ButtonDocs() {
  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Button
        </h1>
        <p className="text-lg text-white/60 mb-8">
          A versatile button component with multiple variants, sizes, and states.
        </p>

        {/* Installation */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Installation</h2>
          <CodeBlock code={installCode} language="bash" />
        </section>

        {/* Usage */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Usage</h2>
          <CodeBlock code={usageCode} language="tsx" />
        </section>

        {/* Basic Example */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Basic Usage</h2>
          <div className="flex flex-wrap gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <Button>Default Button</Button>
            <Button leftIcon={<Mail />}>With Icon</Button>
            <Button isLoading>Loading</Button>
          </div>
        </section>

        {/* Variants */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Variants</h2>
          <div className="flex flex-wrap gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            {variants.map((variant) => (
              <Button key={variant} variant={variant}>
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Button>
            ))}
          </div>
        </section>

        {/* Props Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white mb-4">Props</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-white">Prop</th>
                  <th className="py-4 px-6 text-white">Type</th>
                  <th className="py-4 px-6 text-white">Default</th>
                  <th className="py-4 px-6 text-white">Description</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">variant</td>
                  <td className="py-4 px-6">primary | secondary | outline | ghost | link | gradient</td>
                  <td className="py-4 px-6">primary</td>
                  <td className="py-4 px-6">The visual style of the button</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">size</td>
                  <td className="py-4 px-6">sm | md | lg | xl | icon</td>
                  <td className="py-4 px-6">md</td>
                  <td className="py-4 px-6">The size of the button</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">leftIcon</td>
                  <td className="py-4 px-6">ReactNode</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Icon to show before the button text</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">rightIcon</td>
                  <td className="py-4 px-6">ReactNode</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Icon to show after the button text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}