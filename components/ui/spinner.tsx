'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'gradient' | 'dots';
  color?: string;
  speed?: 'slow' | 'normal' | 'fast';
}

export function Spinner({
  size = 'md',
  variant = 'default',
  color,
  speed = 'normal',
  className,
  ...props
}: SpinnerProps) {
  const { theme } = useTheme();

  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  const speeds = {
    slow: 2,
    normal: 1.5,
    fast: 1,
  };

  if (variant === 'dots') {
    return (
      <div className={cn('flex space-x-1', className)}>
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={cn(
              'rounded-full',
              size === 'sm' && 'w-1 h-1',
              size === 'md' && 'w-2 h-2',
              size === 'lg' && 'w-3 h-3',
              size === 'xl' && 'w-4 h-4'
            )}
            style={{ backgroundColor: color || theme.colors.primary }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: speeds[speed],
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(
        'border-2 rounded-full',
        sizes[size],
        variant === 'gradient' ? 'border-transparent' : '',
        className
      )}
      style={
        variant === 'gradient'
          ? {
              backgroundImage: `conic-gradient(from 0deg, ${theme.colors.primary}, ${theme.colors.secondary}, transparent)`,
            }
          : {
              borderColor: `${color || theme.colors.primary}`,
              borderTopColor: 'transparent',
            }
      }
      animate={{ rotate: 360 }}
      transition={{
        duration: speeds[speed],
        repeat: Infinity,
        ease: 'linear',
      }}
      {...(props as any)}
    />
  );
}