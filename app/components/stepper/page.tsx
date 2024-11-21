'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Stepper } from '@/components/ui/stepper';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/code-block';
import { Settings, User, CheckCircle } from 'lucide-react';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Stepper } from '@parrot-ui/react';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { title: 'Account', description: 'Create your account' },
    { title: 'Profile', description: 'Complete your profile' },
    { title: 'Review', description: 'Review and submit' },
  ];

  return (
    <Stepper
      steps={steps}
      currentStep={currentStep}
    />
  );
}`;

const withIconsCode = `const steps = [
  { 
    title: 'Account', 
    description: 'Create your account',
    icon: <User className="w-5 h-5" />
  },
  { 
    title: 'Settings', 
    description: 'Configure settings',
    icon: <Settings className="w-5 h-5" />
  },
  { 
    title: 'Complete', 
    description: 'Finish setup',
    icon: <CheckCircle className="w-5 h-5" />
  },
];

<Stepper steps={steps} currentStep={currentStep} />`;

export default function StepperPage() {
  const [step1, setStep1] = useState(1);
  const [step2, setStep2] = useState(1);
  const [step3, setStep3] = useState(1);

  const basicSteps = [
    { title: 'Account', description: 'Create your account' },
    { title: 'Profile', description: 'Complete your profile' },
    { title: 'Review', description: 'Review and submit' },
  ];

  const iconSteps = [
    { 
      title: 'Account', 
      description: 'Create your account',
      icon: <User className="w-5 h-5" />
    },
    { 
      title: 'Settings', 
      description: 'Configure settings',
      icon: <Settings className="w-5 h-5" />
    },
    { 
      title: 'Complete', 
      description: 'Finish setup',
      icon: <CheckCircle className="w-5 h-5" />
    },
  ];

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Stepper
        </h1>
        <p className="text-lg text-muted mb-8">
          A step-by-step progress indicator for multi-step forms and wizards.
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
            <h3 className="text-lg font-medium text-text">Basic Stepper</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Stepper
                steps={basicSteps}
                currentStep={step1}
              />
              <div className="mt-8 flex gap-2">
                <Button
                  onClick={() => setStep1(prev => Math.max(1, prev - 1))}
                  disabled={step1 === 1}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => setStep1(prev => Math.min(basicSteps.length, prev + 1))}
                  disabled={step1 === basicSteps.length}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>

          {/* With Icons */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">With Icons</h3>
            <CodeBlock code={withIconsCode} language="tsx" />
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Stepper
                steps={iconSteps}
                currentStep={step2}
              />
              <div className="mt-8 flex gap-2">
                <Button
                  onClick={() => setStep2(prev => Math.max(1, prev - 1))}
                  disabled={step2 === 1}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => setStep2(prev => Math.min(iconSteps.length, prev + 1))}
                  disabled={step2 === iconSteps.length}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>

          {/* Vertical */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Vertical Orientation</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Stepper
                steps={iconSteps}
                currentStep={step3}
                orientation="vertical"
              />
              <div className="mt-8 flex gap-2">
                <Button
                  onClick={() => setStep3(prev => Math.max(1, prev - 1))}
                  disabled={step3 === 1}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => setStep3(prev => Math.min(iconSteps.length, prev + 1))}
                  disabled={step3 === iconSteps.length}
                >
                  Next
                </Button>
              </div>
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
                  <td className="py-4 px-6">steps</td>
                  <td className="py-4 px-6">Step[]</td>
                  <td className="py-4 px-6">required</td>
                  <td className="py-4 px-6">Array of step objects</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">currentStep</td>
                  <td className="py-4 px-6">number</td>
                  <td className="py-4 px-6">required</td>
                  <td className="py-4 px-6">Current active step</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">orientation</td>
                  <td className="py-4 px-6">horizontal | vertical</td>
                  <td className="py-4 px-6">horizontal</td>
                  <td className="py-4 px-6">Stepper orientation</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">variant</td>
                  <td className="py-4 px-6">default | outlined | numbered</td>
                  <td className="py-4 px-6">default</td>
                  <td className="py-4 px-6">Visual style variant</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">size</td>
                  <td className="py-4 px-6">sm | md | lg</td>
                  <td className="py-4 px-6">md</td>
                  <td className="py-4 px-6">Size of step indicators</td>
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

        {/* Step Interface */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text mb-4">Step Interface</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-text">Property</th>
                  <th className="py-4 px-6 text-text">Type</th>
                  <th className="py-4 px-6 text-text">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="py-4 px-6">title</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">Step title</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">description</td>
                  <td className="py-4 px-6">string?</td>
                  <td className="py-4 px-6">Optional step description</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">icon</td>
                  <td className="py-4 px-6">ReactNode?</td>
                  <td className="py-4 px-6">Optional custom icon</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}