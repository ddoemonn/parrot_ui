'use client';

import React from 'react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  size?: 'thin' | 'medium' | 'thick';
  label?: React.ReactNode;
  className?: string;
}

export function Divider({
  orientation = 'horizontal',
  variant = 'solid',
  size = 'medium',
  label,
  className
}: DividerProps) {
  const { theme } = useTheme();

  const sizeStyles = {
    thin: '1px',
    medium: '2px',
    thick: '4px'
  };

  const baseStyles = {
    backgroundColor: theme.colors.border,
    borderStyle: variant,
    borderColor: theme.colors.border
  };

  if (orientation === 'vertical') {
    return (
      <div
        className={cn(
          'inline-block h-full min-h-[20px] w-[1px]',
          variant !== 'solid' && 'border-l',
          variant === 'solid' && 'bg-border',
          className
        )}
        style={{
          ...baseStyles,
          width: variant === 'solid' ? sizeStyles[size] : undefined
        }}
      />
    );
  }

  if (label) {
    return (
      <div className="flex items-center gap-4">
        <div
          className={cn(
            'flex-grow h-[1px]',
            variant !== 'solid' && 'border-t',
            variant === 'solid' && 'bg-border',
            className
          )}
          style={{
            ...baseStyles,
            height: variant === 'solid' ? sizeStyles[size] : undefined
          }}
        />
        <span className="text-sm text-muted whitespace-nowrap">{label}</span>
        <div
          className={cn(
            'flex-grow h-[1px]',
            variant !== 'solid' && 'border-t',
            variant === 'solid' && 'bg-border',
            className
          )}
          style={{
            ...baseStyles,
            height: variant === 'solid' ? sizeStyles[size] : undefined
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'w-full h-[1px]',
        variant !== 'solid' && 'border-t',
        variant === 'solid' && 'bg-border',
        className
      )}
      style={{
        ...baseStyles,
        height: variant === 'solid' ? sizeStyles[size] : undefined
      }}
    />
  );
}