'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { List, ListItem } from '@/components/ui/list';
import { CodeBlock } from '@/components/code-block';
import { Star, Heart, Settings } from 'lucide-react';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { List, ListItem } from '@parrot-ui/react';

function App() {
  return (
    <List>
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
  );
}`;

const variantsCode = `// Unordered list (default)
<List variant="unordered">
  <ListItem>Unordered item 1</ListItem>
  <ListItem>Unordered item 2</ListItem>
</List>

// Ordered list
<List variant="ordered">
  <ListItem>Ordered item 1</ListItem>
  <ListItem>Ordered item 2</ListItem>
</List>

// Checked list
<List variant="checked">
  <ListItem>Checked item 1</ListItem>
  <ListItem>Checked item 2</ListItem>
</List>

// Arrow list
<List variant="arrow">
  <ListItem>Arrow item 1</ListItem>
  <ListItem>Arrow item 2</ListItem>
</List>`;

const customIconsCode = `<List>
  <ListItem icon={<Star className="w-4 h-4" />}>
    Starred item
  </ListItem>
  <ListItem icon={<Heart className="w-4 h-4" />}>
    Favorite item
  </ListItem>
  <ListItem icon={<Settings className="w-4 h-4" />}>
    Settings item
  </ListItem>
</List>`;

export default function ListPage() {
  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          List
        </h1>
        <p className="text-lg text-muted mb-8">
          A versatile list component with multiple variants and customization options.
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
            <h3 className="text-lg font-medium text-text">List Variants</h3>
            <CodeBlock code={variantsCode} language="tsx" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="space-y-2">
                <p className="text-sm text-muted">Unordered List</p>
                <List variant="unordered">
                  <ListItem>First item</ListItem>
                  <ListItem>Second item</ListItem>
                  <ListItem>Third item</ListItem>
                </List>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted">Ordered List</p>
                <List variant="ordered">
                  <ListItem>First item</ListItem>
                  <ListItem>Second item</ListItem>
                  <ListItem>Third item</ListItem>
                </List>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted">Checked List</p>
                <List variant="checked">
                  <ListItem>First item</ListItem>
                  <ListItem>Second item</ListItem>
                  <ListItem>Third item</ListItem>
                </List>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted">Arrow List</p>
                <List variant="arrow">
                  <ListItem>First item</ListItem>
                  <ListItem>Second item</ListItem>
                  <ListItem>Third item</ListItem>
                </List>
              </div>
            </div>
          </div>

          {/* Custom Icons */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Custom Icons</h3>
            <CodeBlock code={customIconsCode} language="tsx" />
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <List>
                <ListItem icon={<Star className="w-4 h-4" />}>Starred item</ListItem>
                <ListItem icon={<Heart className="w-4 h-4" />}>Favorite item</ListItem>
                <ListItem icon={<Settings className="w-4 h-4" />}>Settings item</ListItem>
              </List>
            </div>
          </div>

          {/* Interactive List */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Interactive List</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <List hoverable animated>
                <ListItem active>Active item</ListItem>
                <ListItem>Regular item</ListItem>
                <ListItem disabled>Disabled item</ListItem>
                <ListItem>Another item</ListItem>
              </List>
            </div>
          </div>

          {/* Spacing Options */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Spacing Options</h3>
            <div className="grid gap-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="space-y-2">
                <p className="text-sm text-muted">Compact</p>
                <List spacing="compact">
                  <ListItem>First item</ListItem>
                  <ListItem>Second item</ListItem>
                  <ListItem>Third item</ListItem>
                </List>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted">Relaxed</p>
                <List spacing="relaxed">
                  <ListItem>First item</ListItem>
                  <ListItem>Second item</ListItem>
                  <ListItem>Third item</ListItem>
                </List>
              </div>
            </div>
          </div>
        </section>

        {/* Props */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text mb-4">Props</h2>
          
          {/* List Props */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">List Props</h3>
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
                    <td className="py-4 px-6">unordered | ordered | checked | arrow</td>
                    <td className="py-4 px-6">unordered</td>
                    <td className="py-4 px-6">List style variant</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">spacing</td>
                    <td className="py-4 px-6">compact | normal | relaxed</td>
                    <td className="py-4 px-6">normal</td>
                    <td className="py-4 px-6">Space between items</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">marker</td>
                    <td className="py-4 px-6">ReactNode</td>
                    <td className="py-4 px-6">undefined</td>
                    <td className="py-4 px-6">Custom marker icon</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">hoverable</td>
                    <td className="py-4 px-6">boolean</td>
                    <td className="py-4 px-6">false</td>
                    <td className="py-4 px-6">Enable hover effects</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">animated</td>
                    <td className="py-4 px-6">boolean</td>
                    <td className="py-4 px-6">false</td>
                    <td className="py-4 px-6">Enable animations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ListItem Props */}
          <div className="space-y-4 mt-8">
            <h3 className="text-lg font-medium text-text">ListItem Props</h3>
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
                    <td className="py-4 px-6">icon</td>
                    <td className="py-4 px-6">ReactNode</td>
                    <td className="py-4 px-6">undefined</td>
                    <td className="py-4 px-6">Custom item icon</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">active</td>
                    <td className="py-4 px-6">boolean</td>
                    <td className="py-4 px-6">false</td>
                    <td className="py-4 px-6">Active state</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">disabled</td>
                    <td className="py-4 px-6">boolean</td>
                    <td className="py-4 px-6">false</td>
                    <td className="py-4 px-6">Disabled state</td>
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