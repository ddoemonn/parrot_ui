'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Upload } from '@/components/ui/upload';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Upload } from '@parrot-ui/react';

function App() {
  const handleUpload = (files: File[]) => {
    console.log('Uploaded files:', files);
  };

  const handleError = (error: string) => {
    console.error('Upload error:', error);
  };

  return (
    <Upload
      accept="image/*"
      maxSize={5000000} // 5MB
      onUpload={handleUpload}
      onError={handleError}
    />
  );
}`;

const multipleCode = `<Upload
  multiple
  accept="image/*,application/pdf"
  maxSize={10000000}
  onUpload={(files) => console.log('Uploaded:', files)}
/>`;

const compactCode = `<Upload
  variant="compact"
  accept="image/*"
  preview={false}
/>`;

export default function UploadPage() {
  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Upload
        </h1>
        <p className="text-lg text-muted mb-8">
          A drag and drop file upload component with preview support.
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
            <h3 className="text-lg font-medium text-text">Basic Upload</h3>
            <Upload
              accept="image/*"
              maxSize={5000000}
              onUpload={(files) => console.log('Uploaded:', files)}
              onError={(error) => console.error('Error:', error)}
            />
          </div>

          {/* Multiple Files */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Multiple Files</h3>
            <CodeBlock code={multipleCode} language="tsx" />
            <Upload
              multiple
              accept="image/*,application/pdf"
              maxSize={10000000}
              onUpload={(files) => console.log('Uploaded:', files)}
            />
          </div>

          {/* Compact */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Compact Variant</h3>
            <CodeBlock code={compactCode} language="tsx" />
            <Upload
              variant="compact"
              accept="image/*"
              preview={false}
            />
          </div>

          {/* Disabled */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Disabled State</h3>
            <Upload
              disabled
              accept="image/*"
              preview={false}
            />
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
                  <td className="py-4 px-6">accept</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Accepted file types</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">multiple</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Allow multiple file uploads</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">maxSize</td>
                  <td className="py-4 px-6">number</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Maximum file size in bytes</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">onUpload</td>
                  <td className="py-4 px-6">(files: File[]) ={'>'} void</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Called when files are uploaded</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">onError</td>
                  <td className="py-4 px-6">(error: string) ={'>'} void</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Called when an error occurs</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">disabled</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Disable the upload component</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">variant</td>
                  <td className="py-4 px-6">default | compact</td>
                  <td className="py-4 px-6">default</td>
                  <td className="py-4 px-6">Visual style variant</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">preview</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">true</td>
                  <td className="py-4 px-6">Show image previews</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}