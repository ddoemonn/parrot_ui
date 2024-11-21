'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { CodeBlock } from '@/components/code-block';
import { Home, ChevronRight, Settings, FileText, User } from 'lucide-react';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Breadcrumb } from '@parrot-ui/react';

function App() {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Settings', href: '/settings' },
    { label: 'Profile' },
  ];

  return <Breadcrumb items={items} />;
}`;

const withIconsCode = `const items = [
  { 
    label: 'Home', 
    href: '/', 
    icon: <Home className="w-4 h-4" /> 
  },
  { 
    label: 'Settings', 
    href: '/settings', 
    icon: <Settings className="w-4 h-4" /> 
  },
  { 
    label: 'Profile', 
    icon: <User className="w-4 h-4" /> 
  },
];

<Breadcrumb items={items} />`;

const customSeparatorCode = `<Breadcrumb
  items={items}
  separator={<ChevronRight className="w-4 h-4 text-blue-400" />}
/>`;

export default function BreadcrumbPage() {
  const basicItems = [
    { label: 'Home', href: '/' },
    { label: 'Settings', href: '/settings' },
    { label: 'Profile' },
  ];

  const iconItems = [
    { label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'Settings', href: '/settings', icon: <Settings className="w-4 h-4" /> },
    { label: 'Profile', icon: <User className="w-4 h-4" /> },
  ];

  const longItems = [
    { label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'Documents', href: '/docs', icon: <FileText className="w-4 h-4" /> },
    { label: 'Settings', href: '/settings', icon: <Settings className="w-4 h-4" /> },
    { label: 'User Profile', icon: <User className="w-4 h-4" /> },
  ];

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Breadcrumb
        </h1>
        <p className="text-lg text-muted mb-8">
          A navigation component that helps users keep track of their location within the application.
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
          
          {/* Basic */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Basic Breadcrumb</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Breadcrumb items={basicItems} />
            </div>
          </div>

          {/* With Icons */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">With Icons</h3>
            <CodeBlock code={withIconsCode} language="tsx" />
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Breadcrumb items={iconItems} />
            </div>
          </div>

          {/* Custom Separator */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Custom Separator</h3>
            <CodeBlock code={customSeparatorCode} language="tsx" />
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Breadcrumb
                items={basicItems}
                separator={<ChevronRight className="w-4 h-4 text-blue-400" />}
              />
            </div>
          </div>

          {/* Long Path */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Long Path</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Breadcrumb items={longItems} />
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
                  <td className="py-4 px-6">items</td>
                  <td className="py-4 px-6">BreadcrumbItem[]</td>
                  <td className="py-4 px-6">required</td>
                  <td className="py-4 px-6">Array of breadcrumb items</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">separator</td>
                  <td className="py-4 px-6">ReactNode</td>
                  <td className="py-4 px-6"><ChevronRight /></td>
                  <td className="py-4 px-6">Custom separator element</td>
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

        {/* BreadcrumbItem Interface */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text mb-4">BreadcrumbItem Interface</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-text">Property</th>
                  <th className="py-4 px-6 text-text">Type</th>
                  <th className="py-4 px-6 text-text">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="py-4 px-6">label</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">Text to display</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">href</td>
                  <td className="py-4 px-6">string?</td>
                  <td className="py-4 px-6">Optional link URL</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">icon</td>
                  <td className="py-4 px-6">ReactNode?</td>
                  <td className="py-4 px-6">Optional icon element</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}