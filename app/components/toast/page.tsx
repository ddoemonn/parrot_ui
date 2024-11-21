'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/code-block';

import { CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { useToast } from '@/components/ui/toast-provider';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { useToast } from '@parrot-ui/react';

function App() {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: 'Success',
      description: 'Operation completed successfully!',
      type: 'success',
      duration: 3000,
    });
  };

  return (
    <Button onClick={showToast}>
      Show Toast
    </Button>
  );
}`;

const typesCode = `// Success toast
toast({
  title: 'Success',
  description: 'Operation completed successfully!',
  type: 'success',
});

// Error toast
toast({
  title: 'Error',
  description: 'Something went wrong.',
  type: 'error',
});

// Warning toast
toast({
  title: 'Warning',
  description: 'Please review your changes.',
  type: 'warning',
});

// Info toast
toast({
  title: 'Info',
  description: 'New updates available.',
  type: 'info',
});`;

const positionCode = `toast({
  title: 'Custom Position',
  description: 'This toast appears in the bottom-right.',
  position: 'bottom-right',
});`;

export default function ToastPage() {
  const { toast } = useToast();

  const showSuccessToast = () => {
    toast({
      title: 'Success',
      description: 'Operation completed successfully!',
      type: 'success',
      icon: <CheckCircle2 className="w-5 h-5" />,
    });
  };

  const showErrorToast = () => {
    toast({
      title: 'Error',
      description: 'Something went wrong. Please try again.',
      type: 'error',
      icon: <AlertCircle className="w-5 h-5" />,
    });
  };

  const showWarningToast = () => {
    toast({
      title: 'Warning',
      description: 'Please review your changes before continuing.',
      type: 'warning',
      icon: <AlertTriangle className="w-5 h-5" />,
    });
  };

  const showInfoToast = () => {
    toast({
      title: 'Information',
      description: 'New updates are available for your application.',
      type: 'info',
      icon: <Info className="w-5 h-5" />,
    });
  };

  const showCustomToast = () => {
    toast({
      title: 'Custom Position',
      description: 'This toast appears in the bottom-right corner.',
      position: 'bottom-right',
      duration: 5000,
    });
  };

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Toast
        </h1>
        <p className="text-lg text-muted mb-8">
          A toast notification system for displaying temporary messages and alerts.
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
          
          {/* Toast Types */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Toast Types</h3>
            <CodeBlock code={typesCode} language="tsx" />
            <div className="flex flex-wrap gap-4">
              <Button onClick={showSuccessToast} variant="primary">
                Success Toast
              </Button>
              <Button onClick={showErrorToast} variant="primary">
                Error Toast
              </Button>
              <Button onClick={showWarningToast} variant="secondary">
                Warning Toast
              </Button>
              <Button onClick={showInfoToast} variant="primary">
                Info Toast
              </Button>
            </div>
          </div>

          {/* Custom Position */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Custom Position</h3>
            <CodeBlock code={positionCode} language="tsx" />
            <Button onClick={showCustomToast}>
              Show Custom Position Toast
            </Button>
          </div>
        </section>

        {/* Toast Options */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text mb-4">Toast Options</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-text">Option</th>
                  <th className="py-4 px-6 text-text">Type</th>
                  <th className="py-4 px-6 text-text">Default</th>
                  <th className="py-4 px-6 text-text">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="py-4 px-6">title</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Toast title</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">description</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Toast message</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">type</td>
                  <td className="py-4 px-6">success | error | warning | info</td>
                  <td className="py-4 px-6">info</td>
                  <td className="py-4 px-6">Toast type</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">duration</td>
                  <td className="py-4 px-6">number</td>
                  <td className="py-4 px-6">3000</td>
                  <td className="py-4 px-6">Duration in milliseconds</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">position</td>
                  <td className="py-4 px-6">top-right | top-left | bottom-right | bottom-left</td>
                  <td className="py-4 px-6">top-right</td>
                  <td className="py-4 px-6">Toast position</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">icon</td>
                  <td className="py-4 px-6">ReactNode</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Custom icon</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">dismissible</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">true</td>
                  <td className="py-4 px-6">Allow manual dismissal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* useToast Hook */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text mb-4">useToast Hook</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-text">Method</th>
                  <th className="py-4 px-6 text-text">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="py-4 px-6">toast(options)</td>
                  <td className="py-4 px-6">Show a new toast notification</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">dismiss(id)</td>
                  <td className="py-4 px-6">Dismiss a specific toast by ID</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">dismissAll()</td>
                  <td className="py-4 px-6">Dismiss all active toasts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}