'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pagination } from '@/components/ui/pagination';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Pagination } from '@parrot-ui/react';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  );
}`;

const variantsCode = `// Default variant
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  variant="default"
/>

// Outline variant
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  variant="outline"
/>

// Ghost variant
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  variant="ghost"
/>`;

const sizesCode = `// Small size
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  size="sm"
/>

// Medium size (default)
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  size="md"
/>

// Large size
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  size="lg"
/>`;

export default function PaginationPage() {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(1);
  const [page3, setPage3] = useState(1);
  const [page4, setPage4] = useState(1);

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Pagination
        </h1>
        <p className="text-lg text-muted mb-8">
          A flexible pagination component for navigating through multiple pages of content.
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
            <h3 className="text-lg font-medium text-text">Basic Pagination</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Pagination
                currentPage={page1}
                totalPages={10}
                onPageChange={setPage1}
              />
            </div>
          </div>

          {/* Variants */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Variants</h3>
            <CodeBlock code={variantsCode} language="tsx" />
            <div className="space-y-4 p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="space-y-4">
                <p className="text-sm text-muted">Default</p>
                <Pagination
                  currentPage={page2}
                  totalPages={10}
                  onPageChange={setPage2}
                  variant="default"
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm text-muted">Outline</p>
                <Pagination
                  currentPage={page2}
                  totalPages={10}
                  onPageChange={setPage2}
                  variant="outline"
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm text-muted">Ghost</p>
                <Pagination
                  currentPage={page2}
                  totalPages={10}
                  onPageChange={setPage2}
                  variant="ghost"
                />
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Sizes</h3>
            <CodeBlock code={sizesCode} language="tsx" />
            <div className="space-y-4 p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="space-y-4">
                <p className="text-sm text-muted">Small</p>
                <Pagination
                  currentPage={page3}
                  totalPages={10}
                  onPageChange={setPage3}
                  size="sm"
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm text-muted">Medium (default)</p>
                <Pagination
                  currentPage={page3}
                  totalPages={10}
                  onPageChange={setPage3}
                  size="md"
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm text-muted">Large</p>
                <Pagination
                  currentPage={page3}
                  totalPages={10}
                  onPageChange={setPage3}
                  size="lg"
                />
              </div>
            </div>
          </div>

          {/* With Many Pages */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">With Many Pages</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Pagination
                currentPage={page4}
                totalPages={25}
                onPageChange={setPage4}
                siblingCount={2}
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
                  <td className="py-4 px-6">currentPage</td>
                  <td className="py-4 px-6">number</td>
                  <td className="py-4 px-6">required</td>
                  <td className="py-4 px-6">Current active page</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">totalPages</td>
                  <td className="py-4 px-6">number</td>
                  <td className="py-4 px-6">required</td>
                  <td className="py-4 px-6">Total number of pages</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">onPageChange</td>
                  <td className="py-4 px-6">(page: number) ={'>'} void</td>
                  <td className="py-4 px-6">required</td>
                  <td className="py-4 px-6">Called when page changes</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">siblingCount</td>
                  <td className="py-4 px-6">number</td>
                  <td className="py-4 px-6">1</td>
                  <td className="py-4 px-6">Number of siblings on each side</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">showFirstLast</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">true</td>
                  <td className="py-4 px-6">Show first/last page buttons</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">size</td>
                  <td className="py-4 px-6">sm | md | lg</td>
                  <td className="py-4 px-6">md</td>
                  <td className="py-4 px-6">Size of pagination buttons</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">variant</td>
                  <td className="py-4 px-6">default | outline | ghost</td>
                  <td className="py-4 px-6">default</td>
                  <td className="py-4 px-6">Visual style variant</td>
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
      </motion.div>
    </div>
  );
}