'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { CodeBlock } from '@/components/code-block';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { AspectRatio } from '@parrot-ui/react';

function App() {
  return (
    <AspectRatio ratio={16/9}>
      <img
        src="https://images.unsplash.com/photo-1615627121117-e3278bc8b1db?w=800&auto=format&fit=crop&q=60"
        alt="Sample image"
        className="object-cover w-full h-full rounded-lg"
      />
    </AspectRatio>
  );
}`;

const ratiosCode = `// 16:9 aspect ratio (default)
<AspectRatio ratio={16/9}>
  <img src="..." alt="16:9 image" />
</AspectRatio>

// Square (1:1)
<AspectRatio ratio={1}>
  <img src="..." alt="Square image" />
</AspectRatio>

// Portrait (4:5)
<AspectRatio ratio={4/5}>
  <img src="..." alt="Portrait image" />
</AspectRatio>`;

const videoCode = `<AspectRatio ratio={16/9}>
  <iframe
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="Video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="w-full h-full"
  />
</AspectRatio>`;

export default function AspectRatioPage() {
  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          AspectRatio
        </h1>
        <p className="text-lg text-muted mb-8">
          A component for maintaining consistent width-to-height ratios across different screen sizes.
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
          
          {/* Common Ratios */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Common Ratios</h3>
            <CodeBlock code={ratiosCode} language="tsx" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-muted">16:9 Widescreen</p>
                <AspectRatio ratio={16/9}>
                  <div className="w-full h-full bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                    16:9
                  </div>
                </AspectRatio>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted">1:1 Square</p>
                <AspectRatio ratio={1}>
                  <div className="w-full h-full bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                    1:1
                  </div>
                </AspectRatio>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted">4:5 Portrait</p>
                <AspectRatio ratio={4/5}>
                  <div className="w-full h-full bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                    4:5
                  </div>
                </AspectRatio>
              </div>
            </div>
          </div>

          {/* Image Example */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Image Example</h3>
            <div className="max-w-2xl">
              <AspectRatio ratio={16/9}>
                <img
                  src="https://images.unsplash.com/photo-1615627121117-e3278bc8b1db?w=800&auto=format&fit=crop&q=60"
                  alt="Sample image"
                  className="object-cover w-full h-full rounded-lg"
                />
              </AspectRatio>
            </div>
          </div>

          {/* Video Embed */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Video Embed</h3>
            <CodeBlock code={videoCode} language="tsx" />
            <div className="max-w-2xl">
              <AspectRatio ratio={16/9}>
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              </AspectRatio>
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
                  <td className="py-4 px-6">ratio</td>
                  <td className="py-4 px-6">number</td>
                  <td className="py-4 px-6">16/9</td>
                  <td className="py-4 px-6">Width-to-height ratio</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">children</td>
                  <td className="py-4 px-6">ReactNode</td>
                  <td className="py-4 px-6">required</td>
                  <td className="py-4 px-6">Content to maintain aspect ratio</td>
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

        {/* Common Ratios Reference */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text mb-4">Common Ratios Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-text">Ratio</th>
                  <th className="py-4 px-6 text-text">Value</th>
                  <th className="py-4 px-6 text-text">Common Use</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="py-4 px-6">16:9</td>
                  <td className="py-4 px-6">1.7778</td>
                  <td className="py-4 px-6">Widescreen videos, modern displays</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">4:3</td>
                  <td className="py-4 px-6">1.3333</td>
                  <td className="py-4 px-6">Traditional TV format, older displays</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">1:1</td>
                  <td className="py-4 px-6">1</td>
                  <td className="py-4 px-6">Square images, social media posts</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">4:5</td>
                  <td className="py-4 px-6">0.8</td>
                  <td className="py-4 px-6">Portrait photos, mobile displays</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">21:9</td>
                  <td className="py-4 px-6">2.3333</td>
                  <td className="py-4 px-6">Ultrawide displays, cinematic format</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}