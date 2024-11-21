'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  helperText?: string;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  variant?: 'default' | 'filled' | 'outline' | 'ghost';
}

export function Textarea({
  className,
  error,
  helperText,
  resize = 'vertical',
  variant = 'default',
  disabled,
  ...props
}: TextareaProps) {
  const { theme } = useTheme();

  const variantStyles = {
    default: 'bg-white/5 border border-white/10',
    filled: 'bg-white/10 border-transparent',
    outline: 'bg-transparent border border-white/20',
    ghost: 'bg-transparent border-transparent hover:bg-white/5'
  };

  return (
    <div className="space-y-2">
      <textarea
        className={cn(
          'w-full rounded-lg px-4 py-3 text-sm transition-colors duration-200',
          'placeholder:text-white/40',
          'focus:outline-none focus:ring-2 focus:ring-primary/20',
          variantStyles[variant],
          {
            'opacity-50 cursor-not-allowed': disabled,
            'border-error focus:ring-error/20': error,
            'resize-none': resize === 'none',
            'resize-y': resize === 'vertical',
            'resize-x': resize === 'horizontal',
            'resize': resize === 'both',
          },
          className
        )}
        disabled={disabled}
        style={{
          backgroundColor: variant === 'filled' ? `${theme.colors.background}40` : undefined,
        }}
        {...props}
      />
      {(error || helperText) && (
        <p className={cn(
          'text-sm',
          error ? 'text-error' : 'text-white/60'
        )}>
          {error || helperText}
        </p>
      )}
    </div>
  );
}