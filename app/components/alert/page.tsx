'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Alert } from '@/components/ui/alert';
import { CodeBlock } from '@/components/code-block';
import { Info } from 'lucide-react';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Alert } from '@parrot-ui/react';

function App() {
  return (
    <Alert type="info" title="Information">
      This is an informational alert message.
    </Alert>
  );
}`;

const variantsCode = `// Filled variant (default)
<Alert type="success">
  Operation completed successfully!
</Alert>

// Outlined variant
<Alert type="warning" variant="outlined">
  Please review your changes before continuing.
</Alert>

// Light variant
<Alert type="error" variant="light">
  An error occurred while processing your request.
</Alert>`;

const dismissibleCode = `const [show, setShow] = useState(true);

{show && (
  <Alert 
    type="info" 
    dismissible 
    onDismiss={() => setShow(false)}
  >
    This alert can be dismissed.
  </Alert>
)}`;

export default function AlertPage() {
  const [showDismissible, setShowDismissible] = useState(true);

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Alert
        </h1>
        <p className="text-lg text-muted mb-8">
          A versatile alert component for displaying messages and notifications.
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
          
          {/* Types */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Alert Types</h3>
            <div className="space-y-4">
              <Alert type="info" title="Information">
                This is an informational alert message.
              </Alert>
              <Alert type="success" title="Success">
                Operation completed successfully!
              </Alert>
              <Alert type="warning" title="Warning">
                Please review your changes before continuing.
              </Alert>
              <Alert type="error" title="Error">
                An error occurred while processing your request.
              </Alert>
            </div>
          </div>

          {/* Variants */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Variants</h3>
            <CodeBlock code={variantsCode} language="tsx" />
            <div className="space-y-4">
              <Alert type="success" variant="filled">
                Operation completed successfully!
              </Alert>
              <Alert type="warning" variant="outlined">
                Please review your changes before continuing.
              </Alert>
              <Alert type="error" variant="light">
                An error occurred while processing your request.
              </Alert>
            </div>
          </div>

          {/* Dismissible */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Dismissible Alert</h3>
            <CodeBlock code={dismissibleCode} language="tsx" />
            <div className="space-y-4">
              {showDismissible && (
                <Alert 
                  type="info" 
                  dismissible 
                  onDismiss={() => setShowDismissible(false)}
                >
                  This alert can be dismissed by clicking the close button.
                </Alert>
              )}
            </div>
          </div>

          {/* Custom Icon */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Custom Icon</h3>
            <Alert icon={<Info className="w-5 h-5" />} variant="light">
              Alert with a custom icon.
            </Alert>
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
                  <td className="py-4 px-6">type</td>
                  <td className="py-4 px-6">info | success | warning | error</td>
                  <td className="py-4 px-6">info</td>
                  <td className="py-4 px-6">Type of the alert</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">title</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Alert title</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">variant</td>
                  <td className="py-4 px-6">filled | outlined | light</td>
                  <td className="py-4 px-6">filled</td>
                  <td className="py-4 px-6">Visual style variant</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">dismissible</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Show close button</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">onDismiss</td>
                  <td className="py-4 px-6">() ={'>'} void</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Called when alert is dismissed</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">icon</td>
                  <td className="py-4 px-6">ReactNode</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Custom icon element</td>
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