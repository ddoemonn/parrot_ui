'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  center?: boolean;
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  size = 'lg',
  padding = 'md',
  center = true,
  as: Component = 'div',
  ...props
}: ContainerProps) {
  const { theme } = useTheme();

  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };

  const paddingClasses = {
    none: 'px-0',
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-8'
  };

  return (
    <Component
      className={cn(
        'w-full mx-auto',
        sizeClasses[size],
        paddingClasses[padding],
        center && 'flex flex-col items-center',
        className
      )}
      style={{
        '--container-bg': theme.colors.background,
        '--container-border': theme.colors.border,
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </Component>
  );
}