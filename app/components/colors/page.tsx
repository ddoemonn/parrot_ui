'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CodeBlock } from '@/components/code-block';
import { useTheme } from '@/hooks/use-theme';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { useTheme } from '@parrot-ui/react';

function App() {
  const { theme } = useTheme();

  return (
    <div style={{ color: theme.colors.primary }}>
      Themed content
    </div>
  );
}`;

const customizationCode = `// theme.config.ts
const theme = {
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    accent: '#45B7D1',
    background: '#0A0A0A',
    text: '#FFFFFF',
    muted: '#666666',
    border: '#2A2A2A',
    error: '#FF4D4D',
    success: '#4CAF50',
    warning: '#FFA726',
    info: '#29B6F6',
  },
  // ... other theme settings
};`;

const ColorSwatch = ({ color, name }: { color: string; name: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div 
        className="w-24 h-24 rounded-xl shadow-lg mb-3 transition-transform hover:scale-105 cursor-pointer"
        style={{ backgroundColor: color }}
      />
      <span className="font-medium text-sm">{name}</span>
      <span className="text-xs text-muted mt-1">{color}</span>
    </div>
  );
};

const GradientSwatch = ({ from, to, name }: { from: string; to: string; name: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div 
        className="w-full h-24 rounded-xl shadow-lg mb-3 transition-transform hover:scale-105 cursor-pointer"
        style={{ 
          background: `linear-gradient(to right, ${from}, ${to})` 
        }}
      />
      <span className="font-medium text-sm">{name}</span>
      <span className="text-xs text-muted mt-1">{from} → {to}</span>
    </div>
  );
};

export default function ColorsPage() {
  const { theme } = useTheme();

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Colors
        </h1>
        <p className="text-lg text-muted mb-8">
          A comprehensive color system for consistent and beautiful user interfaces.
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

        {/* Color Palette */}
        <section className="space-y-8 mb-12">
          <h2 className="text-2xl font-semibold text-text mb-4">Color Palette</h2>
          
          {/* Primary Colors */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Primary Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <ColorSwatch color={theme.colors.primary} name="Primary" />
              <ColorSwatch color={theme.colors.secondary} name="Secondary" />
              <ColorSwatch color={theme.colors.accent} name="Accent" />
            </div>
          </div>

          {/* System Colors */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">System Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <ColorSwatch color={theme.colors.success} name="Success" />
              <ColorSwatch color={theme.colors.error} name="Error" />
              <ColorSwatch color={theme.colors.warning} name="Warning" />
              <ColorSwatch color={theme.colors.info} name="Info" />
            </div>
          </div>

          {/* Interface Colors */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Interface Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <ColorSwatch color={theme.colors.background} name="Background" />
              <ColorSwatch color={theme.colors.text} name="Text" />
              <ColorSwatch color={theme.colors.muted} name="Muted" />
              <ColorSwatch color={theme.colors.border} name="Border" />
            </div>
          </div>

          {/* Gradients */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Gradients</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <GradientSwatch 
                from={theme.colors.primary} 
                to={theme.colors.secondary} 
                name="Primary Gradient" 
              />
              <GradientSwatch 
                from={theme.colors.secondary} 
                to={theme.colors.accent} 
                name="Secondary Gradient" 
              />
            </div>
          </div>
        </section>

        {/* Customization */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-text mb-4">Customization</h2>
          <CodeBlock code={customizationCode} language="tsx" />
        </section>

        {/* Color Variables */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text mb-4">CSS Variables</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-text">Variable</th>
                  <th className="py-4 px-6 text-text">Value</th>
                  <th className="py-4 px-6 text-text">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="py-4 px-6">--primary</td>
                  <td className="py-4 px-6">{theme.colors.primary}</td>
                  <td className="py-4 px-6">Primary brand color</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">--secondary</td>
                  <td className="py-4 px-6">{theme.colors.secondary}</td>
                  <td className="py-4 px-6">Secondary brand color</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">--accent</td>
                  <td className="py-4 px-6">{theme.colors.accent}</td>
                  <td className="py-4 px-6">Accent color for highlights</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">--background</td>
                  <td className="py-4 px-6">{theme.colors.background}</td>
                  <td className="py-4 px-6">Background color</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">--text</td>
                  <td className="py-4 px-6">{theme.colors.text}</td>
                  <td className="py-4 px-6">Main text color</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">--muted</td>
                  <td className="py-4 px-6">{theme.colors.muted}</td>
                  <td className="py-4 px-6">Muted text color</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">--border</td>
                  <td className="py-4 px-6">{theme.colors.border}</td>
                  <td className="py-4 px-6">Border color</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">--error</td>
                  <td className="py-4 px-6">{theme.colors.error}</td>
                  <td className="py-4 px-6">Error state color</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">--success</td>
                  <td className="py-4 px-6">{theme.colors.success}</td>
                  <td className="py-4 px-6">Success state color</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">--warning</td>
                  <td className="py-4 px-6">{theme.colors.warning}</td>
                  <td className="py-4 px-6">Warning state color</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">--info</td>
                  <td className="py-4 px-6">{theme.colors.info}</td>
                  <td className="py-4 px-6">Info state color</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}