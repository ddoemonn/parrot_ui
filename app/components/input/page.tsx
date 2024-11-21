'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Mail, Lock, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Input } from '@parrot-ui/react';

function App() {
  return (
    <div>
      {/* Basic usage */}
      <Input placeholder="Basic input" />
      
      {/* With variants */}
      <Input variant="default" placeholder="Default variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="outline" placeholder="Outline variant" />
      
      {/* With sizes */}
      <Input size="sm" placeholder="Small size" />
      <Input size="lg" placeholder="Large size" />
      
      {/* With icons */}
      <Input leftIcon={<Mail />} placeholder="With left icon" />
      <Input rightIcon={<Search />} placeholder="With right icon" />
      
      {/* With states */}
      <Input error="This field is required" placeholder="Error state" />
      <Input success placeholder="Success state" />
      <Input disabled placeholder="Disabled state" />
    </div>
  );
}`;

export default function InputPage() {
  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-4">
          Input
        </h1>
        <p className="text-lg text-muted mb-8">
          A versatile input component with multiple variants, sizes, and states.
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

        {/* Basic Example */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-text mb-4">Basic Usage</h2>
          <div className="grid gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-border">
            <Input placeholder="Basic input" />
            <Input leftIcon={<Mail />} placeholder="With icon" />
            <Input type="password" leftIcon={<Lock />} placeholder="Password" />
          </div>
        </section>

        {/* Variants */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-text mb-4">Variants</h2>
          <div className="grid gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-border">
            <Input variant="default" placeholder="Default variant" />
            <Input variant="filled" placeholder="Filled variant" />
            <Input variant="outline" placeholder="Outline variant" />
            <Input variant="ghost" placeholder="Ghost variant" />
          </div>
        </section>

        {/* States */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-text mb-4">States</h2>
          <div className="grid gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-border">
            <Input error="This field is required" placeholder="Error state" />
            <Input success placeholder="Success state" />
            <Input disabled placeholder="Disabled state" />
            <Input helperText="This is a helper text" placeholder="With helper text" />
          </div>
        </section>

        {/* Props Table */}
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
                  <td className="py-4 px-6">default | filled | outline | ghost</td>
                  <td className="py-4 px-6">default</td>
                  <td className="py-4 px-6">The visual style of the input</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">size</td>
                  <td className="py-4 px-6">sm | md | lg</td>
                  <td className="py-4 px-6">md</td>
                  <td className="py-4 px-6">The size of the input</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">leftIcon</td>
                  <td className="py-4 px-6">ReactNode</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Icon to show on the left</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">rightIcon</td>
                  <td className="py-4 px-6">ReactNode</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Icon to show on the right</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}