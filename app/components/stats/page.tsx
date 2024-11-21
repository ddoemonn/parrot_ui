'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Stats } from '@/components/ui/stats';
import { CodeBlock } from '@/components/code-block';
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Stats } from '@parrot-ui/react';

function App() {
  const stats = [
    {
      title: 'Total Users',
      value: '24.5K',
      description: 'Active users this month',
      icon: <Users className="w-5 h-5" />,
      trend: { value: 12, direction: 'up', label: 'vs last month' }
    },
    {
      title: 'Revenue',
      value: '$45,231',
      description: 'Total revenue this month',
      icon: <DollarSign className="w-5 h-5" />,
      trend: { value: 8, direction: 'up' }
    },
    // ... more stats
  ];

  return <Stats items={stats} />;
}`;

const variantsCode = `// Default variant
<Stats items={stats} />

// Gradient variant
<Stats 
  items={stats.map(stat => ({ ...stat, variant: 'gradient' }))} 
/>

// Outline variant
<Stats 
  items={stats.map(stat => ({ ...stat, variant: 'outline' }))} 
/>`;

export default function StatsPage() {
  const basicStats = [
    {
      title: 'Total Users',
      value: '24.5K',
      description: 'Active users this month',
      icon: <Users className="w-5 h-5 text-white" />,
      trend: { value: 12, direction: 'up' as const, label: 'vs last month' }
    },
    {
      title: 'Revenue',
      value: '$45,231',
      description: 'Total revenue this month',
      icon: <DollarSign className="w-5 h-5 text-white" />,
      trend: { value: 8, direction: 'up' as const }
    },
    {
      title: 'Orders',
      value: '1,345',
      description: 'Orders this month',
      icon: <ShoppingCart className="w-5 h-5 text-white" />,
      trend: { value: 3, direction: 'down' as const }
    },
    {
      title: 'Growth',
      value: '+23%',
      description: 'Growth rate this quarter',
      icon: <TrendingUp className="w-5 h-5 text-white" />,
      trend: { value: 15, direction: 'up' as const }
    }
  ];

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Stats
        </h1>
        <p className="text-lg text-muted mb-8">
          A collection of statistics cards for displaying key metrics and data points.
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
            <h3 className="text-lg font-medium text-text">Basic Stats</h3>
            <Stats items={basicStats} />
          </div>

          {/* Variants */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Variants</h3>
            <CodeBlock code={variantsCode} language="tsx" />
            <div className="space-y-8">
              <Stats 
                items={basicStats.map(stat => ({ ...stat, variant: 'gradient' }))} 
              />
              <Stats 
                items={basicStats.map(stat => ({ ...stat, variant: 'outline' }))} 
              />
            </div>
          </div>

          {/* Different Columns */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Column Layouts</h3>
            <div className="space-y-8">
              <Stats 
                items={basicStats.slice(0, 2)} 
                columns={2}
              />
              <Stats 
                items={basicStats.slice(0, 3)} 
                columns={3}
              />
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Sizes</h3>
            <div className="space-y-8">
              <Stats 
                items={basicStats.map(stat => ({ ...stat, size: 'sm' }))} 
                columns={4}
              />
              <Stats 
                items={basicStats.map(stat => ({ ...stat, size: 'lg' }))} 
                columns={2}
              />
            </div>
          </div>
        </section>

        {/* Props */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text mb-4">Props</h2>
          
          {/* Stats Props */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Stats Props</h3>
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
                    <td className="py-4 px-6">StatProps[]</td>
                    <td className="py-4 px-6">required</td>
                    <td className="py-4 px-6">Array of stat items</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">columns</td>
                    <td className="py-4 px-6">1 | 2 | 3 | 4</td>
                    <td className="py-4 px-6">4</td>
                    <td className="py-4 px-6">Number of columns</td>
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
          </div>

          {/* Stat Props */}
          <div className="space-y-4 mt-8">
            <h3 className="text-lg font-medium text-text">Stat Props</h3>
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
                    <td className="py-4 px-6">title</td>
                    <td className="py-4 px-6">string</td>
                    <td className="py-4 px-6">required</td>
                    <td className="py-4 px-6">Stat title</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">value</td>
                    <td className="py-4 px-6">string | number</td>
                    <td className="py-4 px-6">required</td>
                    <td className="py-4 px-6">Stat value</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">description</td>
                    <td className="py-4 px-6">string</td>
                    <td className="py-4 px-6">undefined</td>
                    <td className="py-4 px-6">Additional description</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">icon</td>
                    <td className="py-4 px-6">ReactNode</td>
                    <td className="py-4 px-6">undefined</td>
                    <td className="py-4 px-6">Icon element</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">trend</td>
                    <td className="py-4 px-6">TrendProps</td>
                    <td className="py-4 px-6">undefined</td>
                    <td className="py-4 px-6">Trend indicator</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">variant</td>
                    <td className="py-4 px-6">default | gradient | outline</td>
                    <td className="py-4 px-6">default</td>
                    <td className="py-4 px-6">Visual style variant</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">size</td>
                    <td className="py-4 px-6">sm | md | lg</td>
                    <td className="py-4 px-6">md</td>
                    <td className="py-4 px-6">Size of the stat card</td>
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