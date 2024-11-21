'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Timeline } from '@/components/ui/timeline';
import { CodeBlock } from '@/components/code-block';
import { CheckCircle2, Circle, Clock, Star } from 'lucide-react';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Timeline } from '@parrot-ui/react';

function App() {
  const items = [
    {
      id: '1',
      title: 'Project Started',
      description: 'Initial project setup and planning',
      date: '2024-01-01',
      status: 'complete' as 'complete',
    },
    {
      id: '2',
      title: 'Development Phase',
      description: 'Building core features',
      date: '2024-01-15',
      status: 'current' as 'current',
    },
    {
      id: '3',
      title: 'Testing',
      description: 'Quality assurance and bug fixes',
      date: '2024-02-01',
      status: 'upcoming' as 'upcoming',
    },
  ];

  return (
    <Timeline
      items={items}
      orientation="vertical"
      variant="default"
      showConnectors
    />
  );
}`;

const sampleItems = [
  {
    id: '1',
    title: 'Project Started',
    description: 'Initial project setup and planning',
    date: '2024-01-01',
    status: 'complete' as 'complete',
    icon: <CheckCircle2 className="w-4 h-4 text-white" />,
  },
  {
    id: '2',
    title: 'Development Phase',
    description: 'Building core features and functionality',
    date: '2024-01-15',
    status: 'current' as 'current',
    icon: <Star className="w-4 h-4 text-white" />,
  },
  {
    id: '3',
    title: 'Testing',
    description: 'Quality assurance and bug fixes',
    date: '2024-02-01',
    status: 'upcoming' as 'upcoming',
    icon: <Clock className="w-4 h-4 text-white" />,
  },
];

export default function TimelinePage() {
  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Timeline
        </h1>
        <p className="text-lg text-muted mb-8">
          A flexible timeline component for displaying chronological events or steps.
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
          
          {/* Vertical */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Vertical Timeline</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Timeline items={sampleItems} orientation="vertical" />
            </div>
          </div>

          {/* Horizontal */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Horizontal Timeline</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Timeline items={sampleItems} orientation="horizontal" />
            </div>
          </div>

          {/* Alternate */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Alternate Layout</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Timeline items={sampleItems} variant="alternate" />
            </div>
          </div>

          {/* Compact */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Compact Timeline</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Timeline items={sampleItems} variant="compact" />
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
                  <td className="py-4 px-6">TimelineItem[]</td>
                  <td className="py-4 px-6">required</td>
                  <td className="py-4 px-6">Array of timeline items</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">orientation</td>
                  <td className="py-4 px-6">vertical | horizontal</td>
                  <td className="py-4 px-6">vertical</td>
                  <td className="py-4 px-6">Layout orientation</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">variant</td>
                  <td className="py-4 px-6">default | alternate | compact</td>
                  <td className="py-4 px-6">default</td>
                  <td className="py-4 px-6">Timeline style variant</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">showConnectors</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">true</td>
                  <td className="py-4 px-6">Show connecting lines</td>
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

        {/* TimelineItem Interface */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text mb-4">TimelineItem Interface</h2>
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
                  <td className="py-4 px-6">id</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">Unique identifier for the item</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">title</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">Title of the timeline item</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">description</td>
                  <td className="py-4 px-6">string?</td>
                  <td className="py-4 px-6">Optional description text</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">date</td>
                  <td className="py-4 px-6">string?</td>
                  <td className="py-4 px-6">Optional date or time</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">icon</td>
                  <td className="py-4 px-6">ReactNode?</td>
                  <td className="py-4 px-6">Optional custom icon</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">status</td>
                  <td className="py-4 px-6">complete | current | upcoming</td>
                  <td className="py-4 px-6">Status of the timeline item</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}