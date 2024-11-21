'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/code-block';
import { X } from 'lucide-react';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Modal } from '@parrot-ui/react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Example Modal"
      >
        <p>Modal content goes here.</p>
      </Modal>
    </>
  );
}`;

const sizesCode = `// Small modal
<Modal size="sm" isOpen={isOpen} onClose={onClose}>
  Small modal content
</Modal>

// Default (medium) modal
<Modal size="md" isOpen={isOpen} onClose={onClose}>
  Medium modal content
</Modal>

// Large modal
<Modal size="lg" isOpen={isOpen} onClose={onClose}>
  Large modal content
</Modal>

// Full screen modal
<Modal size="full" isOpen={isOpen} onClose={onClose}>
  Full screen modal content
</Modal>`;

const customHeaderCode = `<Modal
  isOpen={isOpen}
  onClose={onClose}
  header={
    <div className="flex items-center justify-between p-4">
      <h2 className="text-xl font-bold">Custom Header</h2>
      <Button variant="ghost" onClick={onClose}>
        <X className="w-4 h-4" />
      </Button>
    </div>
  }
>
  Modal content
</Modal>`;

export default function ModalPage() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Modal
        </h1>
        <p className="text-lg text-muted mb-8">
          A flexible modal dialog component with animations and customizable content.
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
          
          {/* Basic Modal */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Basic Modal</h3>
            <div>
              <Button onClick={() => setIsOpen1(true)}>
                Open Basic Modal
              </Button>

              <Modal
                isOpen={isOpen1}
                onClose={() => setIsOpen1(false)}
                title="Basic Modal"
              >
                <div className="p-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    This is a basic modal with a title and close button.
                  </p>
                </div>
              </Modal>
            </div>
          </div>

          {/* Different Sizes */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Modal Sizes</h3>
            <CodeBlock code={sizesCode} language="tsx" />
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => setIsOpen2(true)}>
                Open Small Modal
              </Button>

              <Modal
                isOpen={isOpen2}
                onClose={() => setIsOpen2(false)}
                title="Small Modal"
                size="sm"
              >
                <div className="p-4">
                  <p>This is a small modal dialog.</p>
                </div>
              </Modal>
            </div>
          </div>

          {/* Custom Header */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Custom Header</h3>
            <CodeBlock code={customHeaderCode} language="tsx" />
            <div>
              <Button onClick={() => setIsOpen3(true)}>
                Open Custom Header Modal
              </Button>

              <Modal
                isOpen={isOpen3}
                onClose={() => setIsOpen3(false)}
                header={
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">
                    <h2 className="text-xl font-bold text-white">Custom Header</h2>
                    <Button variant="ghost" onClick={() => setIsOpen3(false)}>
                      <X className="w-4 h-4 text-white" />
                    </Button>
                  </div>
                }
              >
                <div className="p-4">
                  <p>Modal with a custom header component.</p>
                </div>
              </Modal>
            </div>
          </div>

          {/* With Footer Actions */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">With Footer Actions</h3>
            <div>
              <Button onClick={() => setIsOpen4(true)}>
                Open Modal with Actions
              </Button>

              <Modal
                isOpen={isOpen4}
                onClose={() => setIsOpen4(false)}
                title="Confirm Action"
                footer={
                  <div className="flex justify-end gap-2 p-4 bg-gray-50 dark:bg-gray-800">
                    <Button
                      variant="outline"
                      onClick={() => setIsOpen4(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => setIsOpen4(false)}
                    >
                      Confirm
                    </Button>
                  </div>
                }
              >
                <div className="p-4">
                  <p>Are you sure you want to perform this action?</p>
                </div>
              </Modal>
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
                  <td className="py-4 px-6">isOpen</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Controls modal visibility</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">onClose</td>
                  <td className="py-4 px-6">() ={'>'} void</td>
                  <td className="py-4 px-6">required</td>
                  <td className="py-4 px-6">Called when modal closes</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">title</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Modal title</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">size</td>
                  <td className="py-4 px-6">sm | md | lg | full</td>
                  <td className="py-4 px-6">md</td>
                  <td className="py-4 px-6">Modal size</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">header</td>
                  <td className="py-4 px-6">ReactNode</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Custom header component</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">footer</td>
                  <td className="py-4 px-6">ReactNode</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Custom footer component</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">closeOnOverlayClick</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">true</td>
                  <td className="py-4 px-6">Close when clicking overlay</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">closeOnEsc</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">true</td>
                  <td className="py-4 px-6">Close on Escape key</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}