'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Grid } from '@/components/ui/grid';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Grid } from '@parrot-ui/react';

function App() {
  return (
    <Grid cols={3} gap="md" responsive>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Grid>
  );
}`;

const responsiveCode = `// Responsive grid that adapts to screen size
<Grid cols={4} responsive>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Grid>

// Fixed columns regardless of screen size
<Grid cols={4} responsive={false}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Grid>`;

const alignmentCode = `// Align items vertically
<Grid cols={3} alignItems="center">
  <div>Centered Item</div>
  <div>Centered Item</div>
  <div>Centered Item</div>
</Grid>

// Align items horizontally
<Grid cols={3} justifyItems="center">
  <div>Centered Item</div>
  <div>Centered Item</div>
  <div>Centered Item</div>
</Grid>`;

const GridItem = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
    {children}
  </div>
);

export default function GridPage() {
  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Grid
        </h1>
        <p className="text-lg text-muted mb-8">
          A powerful and flexible grid system for creating responsive layouts.
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
          
          {/* Column Variations */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Column Variations</h3>
            <div className="space-y-8">
              {[2, 3, 4, 6].map((cols) => (
                <div key={cols} className="space-y-2">
                  <p className="text-sm text-muted">{cols} Columns</p>
                  <Grid cols={cols as 2 | 3 | 4 | 6} gap="md">
                    {Array.from({ length: cols }).map((_, i) => (
                      <GridItem key={i}>Item {i + 1}</GridItem>
                    ))}
                  </Grid>
                </div>
              ))}
            </div>
          </div>

          {/* Responsive Grid */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Responsive Grid</h3>
            <CodeBlock code={responsiveCode} language="tsx" />
            <div className="space-y-8 mt-4">
              <Grid cols={4} gap="md" responsive>
                <GridItem>Item 1</GridItem>
                <GridItem>Item 2</GridItem>
                <GridItem>Item 3</GridItem>
                <GridItem>Item 4</GridItem>
              </Grid>
            </div>
          </div>

          {/* Alignment */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Alignment</h3>
            <CodeBlock code={alignmentCode} language="tsx" />
            <div className="space-y-8 mt-4">
              <Grid cols={3} gap="md" alignItems="center" className="h-40">
                <GridItem>Short</GridItem>
                <GridItem>Medium<br/>Height</GridItem>
                <GridItem>Tall<br/>Content<br/>Here</GridItem>
              </Grid>
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
                  <td className="py-4 px-6">cols</td>
                  <td className="py-4 px-6">1 | 2 | 3 | 4 | 5 | 6 | 12</td>
                  <td className="py-4 px-6">3</td>
                  <td className="py-4 px-6">Number of grid columns</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">gap</td>
                  <td className="py-4 px-6">none | sm | md | lg</td>
                  <td className="py-4 px-6">md</td>
                  <td className="py-4 px-6">Space between grid items</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">responsive</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">true</td>
                  <td className="py-4 px-6">Enable responsive breakpoints</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">alignItems</td>
                  <td className="py-4 px-6">start | center | end | stretch</td>
                  <td className="py-4 px-6">stretch</td>
                  <td className="py-4 px-6">Vertical alignment of grid items</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">justifyItems</td>
                  <td className="py-4 px-6">start | center | end | stretch</td>
                  <td className="py-4 px-6">stretch</td>
                  <td className="py-4 px-6">Horizontal alignment of grid items</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">flow</td>
                  <td className="py-4 px-6">row | col | dense</td>
                  <td className="py-4 px-6">row</td>
                  <td className="py-4 px-6">Grid flow direction</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}