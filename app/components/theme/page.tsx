'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Palette, Type, Maximize, Grid } from 'lucide-react';
import { CodeBlock } from '@/components/code-block';

const exampleCode = `// 1. Import the ThemeProvider
import { ThemeProvider } from '@parrot-ui/react';

// 2. Create your custom theme
const myTheme = {
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    // ... other colors
  },
  gradients: {
    primary: 'from-[#FF6B6B] to-[#FF8E53]',
    // ... other gradients
  },
  borderRadius: '0.5rem',
  fontFamily: 'Inter, sans-serif'
};

// 3. Wrap your app with ThemeProvider
function App() {
  return (
    <ThemeProvider initialTheme={myTheme}>
      <YourApp />
    </ThemeProvider>
  );
}`;

export default function ThemeDocs() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Theme System
        </h1>
        <p className="text-lg opacity-60 mb-8">
          A comprehensive guide to ParrotUI's theming system and customization options.
        </p>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: <Palette className="w-5 h-5" />, title: 'Colors', href: '/components/colors' },
            { icon: <Type className="w-5 h-5" />, title: 'Typography', href: '/components/typography' },
            { icon: <Maximize className="w-5 h-5" />, title: 'Spacing', href: '/components/spacing' },
            { icon: <Grid className="w-5 h-5" />, title: 'Breakpoints', href: '/components/breakpoints' }
          ].map((item) => (
            <Button
              key={item.title}
              variant="outline"
              className="h-12 flex-col space-y-2"
            >
              <a href={item.href} className='flex gap-4'>
                {item.icon}
                <span>{item.title}</span>
              </a>
            </Button>
          ))}
        </div>

        {/* Theme Configuration Example */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Theme Configuration</h2>
          <CodeBlock code={exampleCode} language="tsx" />
        </section>

        {/* Live Theme Preview */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Live Theme Preview</h2>
          <div className="grid gap-6 p-6 rounded-xl bg-black/20 backdrop-blur-xl">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Button Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Input Fields</h3>
              <div className="flex flex-wrap gap-4">
                <Input placeholder="Default input" />
                <Input placeholder="Disabled input" disabled />
              </div>
            </div>
          </div>
        </section>

        {/* Theme Structure */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Theme Structure</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6">Property</th>
                  <th className="py-4 px-6">Type</th>
                  <th className="py-4 px-6">Description</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">colors</td>
                  <td className="py-4 px-6">ThemeColors</td>
                  <td className="py-4 px-6">Color palette configuration</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">typography</td>
                  <td className="py-4 px-6">ThemeTypography</td>
                  <td className="py-4 px-6">Typography settings</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">spacing</td>
                  <td className="py-4 px-6">ThemeSpacing</td>
                  <td className="py-4 px-6">Spacing scale configuration</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">breakpoints</td>
                  <td className="py-4 px-6">ThemeBreakpoints</td>
                  <td className="py-4 px-6">Responsive breakpoints</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}