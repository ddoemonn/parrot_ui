'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Tree } from '@/components/ui/tree';
import { CodeBlock } from '@/components/code-block';
import { Folder, File, Image, Code, FileText, Settings } from 'lucide-react';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Tree } from '@parrot-ui/react';

function App() {
  const data = [
    {
      id: '1',
      label: 'Documents',
      children: [
        { id: '1.1', label: 'Report.pdf' },
        { id: '1.2', label: 'Invoice.pdf' },
      ],
    },
    {
      id: '2',
      label: 'Images',
      children: [
        { id: '2.1', label: 'photo1.jpg' },
        { id: '2.2', label: 'photo2.jpg' },
      ],
    },
  ];

  return (
    <Tree 
      data={data}
      onNodeClick={(node) => console.log('Clicked:', node)}
    />
  );
}`;

const customIconsCode = `const data = [
  {
    id: '1',
    label: 'src',
    icon: <Folder className="w-4 h-4" />,
    children: [
      {
        id: '1.1',
        label: 'components',
        icon: <Folder className="w-4 h-4" />,
        children: [
          { 
            id: '1.1.1', 
            label: 'Button.tsx',
            icon: <Code className="w-4 h-4" />
          },
        ],
      },
      {
        id: '1.2',
        label: 'assets',
        icon: <Folder className="w-4 h-4" />,
        children: [
          { 
            id: '1.2.1', 
            label: 'logo.png',
            icon: <Image className="w-4 h-4" />
          },
        ],
      },
    ],
  },
];

<Tree data={data} defaultExpanded />`;

export default function TreePage() {
  const basicData = [
    {
      id: '1',
      label: 'Documents',
      children: [
        { id: '1.1', label: 'Report.pdf' },
        { id: '1.2', label: 'Invoice.pdf' },
      ],
    },
    {
      id: '2',
      label: 'Images',
      children: [
        { id: '2.1', label: 'photo1.jpg' },
        { id: '2.2', label: 'photo2.jpg' },
      ],
    },
  ];

  const customIconsData = [
    {
      id: '1',
      label: 'src',
      icon: <Folder className="w-4 h-4" />,
      children: [
        {
          id: '1.1',
          label: 'components',
          icon: <Folder className="w-4 h-4" />,
          children: [
            { 
              id: '1.1.1', 
              label: 'Button.tsx',
              icon: <Code className="w-4 h-4" />
            },
            { 
              id: '1.1.2', 
              label: 'Input.tsx',
              icon: <Code className="w-4 h-4" />
            },
          ],
        },
        {
          id: '1.2',
          label: 'assets',
          icon: <Folder className="w-4 h-4" />,
          children: [
            { 
              id: '1.2.1', 
              label: 'logo.png',
              icon: <Image className="w-4 h-4" />
            },
            { 
              id: '1.2.2', 
              label: 'banner.jpg',
              icon: <Image className="w-4 h-4" />
            },
          ],
        },
        { 
          id: '1.3', 
          label: 'config.json',
          icon: <Settings className="w-4 h-4" />
        },
      ],
    },
    {
      id: '2',
      label: 'docs',
      icon: <Folder className="w-4 h-4" />,
      children: [
        { 
          id: '2.1', 
          label: 'README.md',
          icon: <FileText className="w-4 h-4" />
        },
        { 
          id: '2.2', 
          label: 'API.md',
          icon: <FileText className="w-4 h-4" />
        },
      ],
    },
  ];

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Tree
        </h1>
        <p className="text-lg text-muted mb-8">
          A hierarchical tree component for displaying nested data structures.
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
            <h3 className="text-lg font-medium text-text">Basic Tree</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Tree
                data={basicData}
                onNodeClick={(node) => console.log('Clicked:', node)}
              />
            </div>
          </div>

          {/* Custom Icons */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Custom Icons</h3>
            <CodeBlock code={customIconsCode} language="tsx" />
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Tree
                data={customIconsData}
                defaultExpanded
                onNodeClick={(node) => console.log('Clicked:', node)}
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
                  <td className="py-4 px-6">data</td>
                  <td className="py-4 px-6">TreeNode[]</td>
                  <td className="py-4 px-6">required</td>
                  <td className="py-4 px-6">Array of tree nodes</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">defaultExpanded</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Whether nodes are expanded by default</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">onNodeClick</td>
                  <td className="py-4 px-6">(node: TreeNode) ={'>'} void</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Called when a node is clicked</td>
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

        {/* TreeNode Interface */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text mb-4">TreeNode Interface</h2>
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
                  <td className="py-4 px-6">Unique identifier for the node</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">label</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">Display text for the node</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">icon</td>
                  <td className="py-4 px-6">ReactNode</td>
                  <td className="py-4 px-6">Optional custom icon</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">children</td>
                  <td className="py-4 px-6">TreeNode[]</td>
                  <td className="py-4 px-6">Optional child nodes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}