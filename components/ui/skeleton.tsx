'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

export interface SkeletonProps extends HTMLMotionProps<"div"> {
  variant?: 'default' | 'circular' | 'rounded';
  width?: string | number;
  height?: string | number;
  animated?: boolean;
}

export function Skeleton({
  variant = 'default',
  width,
  height,
  animated = true,
  className,
  ...props
}: SkeletonProps) {
  const { theme } = useTheme();

  const baseStyles = {
    backgroundColor: `${theme.colors.border}`,
    width: width || '100%',
    height: height || '1rem',
  };

  const variants = {
    default: 'rounded-md',
    circular: 'rounded-full',
    rounded: 'rounded-lg',
  };

  const animation = {
    initial: { opacity: 0.5 },
    animate: { opacity: 1 },
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut',
    },
  };

  return (
    <motion.div
      {...(animated ? animation : {})}
      className={cn(variants[variant], className)}
      style={baseStyles}
      {...props}
    />
  );
}

export function SkeletonText({
  lines = 3,
  lastLineWidth = '70%',
  spacing = 'md',
  ...props
}: {
  lines?: number;
  lastLineWidth?: string;
  spacing?: 'sm' | 'md' | 'lg';
} & Omit<SkeletonProps, 'width'>) {
  const spacingMap = {
    sm: 'space-y-1',
    md: 'space-y-2',
    lg: 'space-y-3',
  };

  return (
    <div className={spacingMap[spacing]}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          width={i === lines - 1 ? lastLineWidth : '100%'}
          {...props}
        />
      ))}
    </div>
  );
}