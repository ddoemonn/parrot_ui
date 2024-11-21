'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

interface ProgressProps {
  value?: number;
  variant?: 'default' | 'gradient' | 'striped' | 'indeterminate';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'success' | 'warning' | 'error';
  gradientFrom?: string;
  gradientTo?: string;
  showValue?: boolean;
  animated?: boolean;
  className?: string;
}

export function Progress({
  value = 0,
  variant = 'default',
  size = 'md',
  color = 'primary',
  gradientFrom,
  gradientTo,
  showValue = false,
  animated = false,
  className,
}: ProgressProps) {
  const { theme } = useTheme();

  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
    xl: 'h-4',
  };

  const colors = {
    primary: theme.colors.primary,
    success: theme.colors.success,
    warning: theme.colors.warning,
    error: theme.colors.error,
  };

  const getBackgroundStyle = () => {
    if (variant === 'gradient') {
      return {
        background: `linear-gradient(to right, ${gradientFrom || theme.colors.primary}, ${gradientTo || theme.colors.secondary})`,
      };
    }

    if (variant === 'striped') {
      return {
        background: `linear-gradient(45deg, 
          ${colors[color]}88 25%, 
          ${colors[color]} 25%, 
          ${colors[color]} 50%, 
          ${colors[color]}88 50%, 
          ${colors[color]}88 75%, 
          ${colors[color]} 75%, 
          ${colors[color]})`,
        backgroundSize: '1rem 1rem',
      };
    }

    return {
      backgroundColor: colors[color],
    };
  };

  return (
    <div className="relative">
      <div
        className={cn(
          'w-full overflow-hidden rounded-full bg-white/10',
          sizes[size],
          className
        )}
      >
        {variant === 'indeterminate' ? (
          <motion.div
            className={cn(
              'h-full rounded-full',
              animated && 'animate-progress-indeterminate'
            )}
            style={getBackgroundStyle()}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ) : (
          <motion.div
            className={cn(
              'h-full rounded-full',
              animated && 'animate-progress'
            )}
            style={{
              ...getBackgroundStyle(),
              width: `${value}%`,
            }}
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
      {showValue && variant !== 'indeterminate' && (
        <div className="absolute right-0 top-0 -mt-6 text-sm">
          {value}%
        </div>
      )}
    </div>
  );
}

export type { ProgressProps };