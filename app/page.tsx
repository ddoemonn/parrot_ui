'use client';

import Link from 'next/link';
import { ChevronRight, Feather, Package, Palette, Sparkles, Zap, Github } from 'lucide-react';
import { BackgroundPattern } from '@/components/background-pattern';
import { FeatureCard } from '@/components/feature-card';
import { CodeBlock } from '@/components/code-block';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <Package className="w-6 h-6 text-white" />,
    title: "Next.js First",
    description: "Built specifically for Next.js App Router, offering seamless integration and optimal performance."
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Best of Both Worlds",
    description: "Combines Mantine's flexibility with shadcn/ui's simplicity and customization approach."
  },
  {
    icon: <Palette className="w-6 h-6 text-white" />,
    title: "Theme System",
    description: "Powerful theming with CSS variables, inspired by Mantine's theme system but more streamlined."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: "Modern Design",
    description: "Beautiful, accessible components with smooth animations and modern aesthetics."
  }
];

const exampleCode = `// Install ParrotUI
npm install @parrot-ui/react

// Import and use components
import { Button } from '@parrot-ui/react'

function App() {
  return (
    <Button variant="gradient">
      Take Flight 🦜
    </Button>
  )
}`;

export default function Home() {
  return (
    <main className="text-white overflow-hidden relative min-h-screen">
      <BackgroundPattern />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6 space-x-2">
            <Feather className="w-12 h-12 text-[#FF6B6B]" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] text-transparent bg-clip-text">
              ParrotUI
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            A beautiful React component library built specifically for Next.js App Router,
            combining the best features of Mantine and shadcn/ui.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link 
              href="/components/button"
              className="px-8 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] rounded-full font-semibold hover:shadow-lg hover:shadow-[#FF6B6B]/20 transition-all duration-300 flex items-center group"
            >
              Get Started
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/manifest"
              className="px-8 py-3 bg-white/10 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>

        <div className="mt-20">
          <CodeBlock code={exampleCode} language="tsx" />
        </div>

        
      </div>
    </main>
  );
}