'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CodeBlock } from '@/components/code-block';
import { Bot, Users, Sparkles, Github } from 'lucide-react';

const installCode = `npm install @parrot-ui/react`;

export default function ManifestPage() {
  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          ParrotUI Manifest
        </h1>
        <p className="text-lg text-muted mb-12">
          Our vision for a modern React component library that combines the best of Mantine and shadcn/ui.
        </p>

       

        {/* Rest of the manifest content remains the same */}
        {/* Core Principles */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-text">Core Principles</h2>
          <div className="prose prose-invert max-w-none">
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Next.js First:</strong> Built specifically for Next.js App Router, ensuring optimal performance and seamless integration.
              </li>
              <li>
                <strong>Best of Both Worlds:</strong> Combines Mantine's powerful features and flexibility with shadcn/ui's simplicity and copy-paste approach.
              </li>
              <li>
                <strong>Modern DX:</strong> TypeScript-first development with excellent autocompletion and type safety.
              </li>
              <li>
                <strong>Flexible Theming:</strong> CSS variables-based theme system that's powerful yet easy to customize.
              </li>
            </ul>
          </div>
        </section>

        {/* Key Features */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-text">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-lg font-semibold mb-4">Mantine-Inspired Features</h3>
              <ul className="space-y-2 text-muted">
                <li>• Powerful theme system with CSS variables</li>
                <li>• Rich set of hooks for common use cases</li>
                <li>• Flexible component APIs</li>
                <li>• Built-in dark mode support</li>
              </ul>
            </div>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-lg font-semibold mb-4">shadcn/ui-Inspired Features</h3>
              <ul className="space-y-2 text-muted">
                <li>• Copy-paste component approach</li>
                <li>• Tailwind CSS integration</li>
                <li>• Beautifully designed components</li>
                <li>• Full source code access</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-text">Installation</h2>
          <CodeBlock code={installCode} language="bash" />
          <p className="text-muted">
            ParrotUI is designed to work exclusively with Next.js App Router projects, ensuring optimal performance and integration.
          </p>
        </section>

        {/* Design Decisions */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-text">Design Decisions</h2>
          <div className="prose prose-invert max-w-none">
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Next.js Exclusivity:</strong> By focusing solely on Next.js App Router, we can provide better optimizations and integrations.
              </li>
              <li>
                <strong>CSS Variables:</strong> Using CSS variables for theming provides better performance and easier customization than CSS-in-JS.
              </li>
              <li>
                <strong>Tailwind Integration:</strong> Leveraging Tailwind CSS for utility classes while maintaining component-specific styles.
              </li>
              <li>
                <strong>Framer Motion:</strong> Using Framer Motion for smooth, performant animations that enhance user experience.
              </li>
            </ul>
          </div>
        </section>

        {/* Future Plans */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-text">Future Plans</h2>
          <div className="prose prose-invert max-w-none">
            <ul className="list-disc pl-6 space-y-4">
              <li>Expanding component library with more advanced components</li>
              <li>Adding more hooks for common use cases</li>
              <li>Improving documentation and examples</li>
              <li>Building a community around ParrotUI</li>
              <li>Creating templates and starter kits</li>
              <li>Fostering AI and human collaboration in open source</li>
            </ul>
          </div>
        </section>

         {/* AI and Contributions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-text flex items-center gap-2">
            <Bot className="w-6 h-6 text-[#FF6B6B]" />
            AI-Powered & Human-Crafted
          </h2>
          <div className="p-6 bg-gradient-to-br from-[#FF6B6B]/10 to-[#4ECDC4]/10 rounded-lg border border-white/10">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                🤖 <span className="text-[#FF6B6B] font-semibold">Yes, we use AI!</span> And we're proud of it! ParrotUI components are crafted with the help of AI, bringing you the best of both silicon and carbon-based intelligence. Think of it as having a super-powered pair programming buddy who never needs coffee breaks!
              </p>
              <p className="text-lg leading-relaxed mt-4">
                🌟 <span className="text-[#4ECDC4] font-semibold">Contributions? Bring them on!</span> Whether you're human, AI, or a particularly clever parrot, we welcome all contributions. Use AI tools, use your brain, or use both - we care about the quality and creativity of the code, not how it was written.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                💡 <span className="text-[#45B7D1] font-semibold">The future is collaborative!</span> We believe the best results come from combining human creativity with AI capabilities. Let's push the boundaries of what's possible in UI development together!
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}