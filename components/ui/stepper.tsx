'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/use-theme';

export interface StepperProps {
  steps: {
    title: string;
    description?: string;
    icon?: React.ReactNode;
  }[];
  currentStep: number;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'outlined' | 'numbered';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Stepper({
  steps,
  currentStep,
  orientation = 'horizontal',
  variant = 'default',
  size = 'md',
  className
}: StepperProps) {
  const { theme } = useTheme();

  const sizeClasses = {
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg'
  };

  const contentSizeClasses = {
    sm: 'space-y-0.5',
    md: 'space-y-1',
    lg: 'space-y-2'
  };

  const lineClasses = {
    horizontal: 'h-[2px] w-full',
    vertical: 'w-[2px] h-full'
  };

  return (
    <div
      className={cn(
        'relative',
        orientation === 'horizontal' ? 'flex' : 'flex-col space-y-8',
        className
      )}
    >
      {steps.map((step, index) => {
        const isCompleted = currentStep > index + 1;
        const isCurrent = currentStep === index + 1;
        const isLast = index === steps.length - 1;

        return (
          <div
            key={index}
            className={cn(
              'relative flex',
              orientation === 'horizontal' ? 'flex-1' : 'items-start gap-4'
            )}
          >
            <div className="flex items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={cn(
                  'rounded-full flex items-center justify-center',
                  sizeClasses[size],
                  isCompleted || isCurrent
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : variant === 'outlined'
                    ? 'border-2 border-gray-300'
                    : 'bg-gray-200 dark:bg-gray-700',
                )}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : variant === 'numbered' ? (
                  index + 1
                ) : step.icon || index + 1}
              </motion.div>

              {!isLast && (
                <div
                  className={cn(
                    'bg-gray-200 dark:bg-gray-700',
                    lineClasses[orientation],
                    (isCompleted || isCurrent) && 'bg-gradient-to-r from-primary to-secondary'
                  )}
                />
              )}
            </div>

            <div
              className={cn(
                contentSizeClasses[size],
                orientation === 'horizontal' ? 'absolute mt-14 -ml-4' : 'mt-1'
              )}
            >
              <div className="font-medium">{step.title}</div>
              {step.description && (
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {step.description}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}