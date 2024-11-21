'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'filled' | 'outline' | 'ghost';
  inputSize?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  success?: boolean;
  label?: string;
  helperText?: string;
  clearable?: boolean;
  onClear?: () => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    variant = 'default',
    inputSize = 'md',
    leftIcon,
    rightIcon,
    error,
    success,
    label,
    helperText,
    clearable,
    onClear,
    ...props
  }, ref) => {
    const { theme } = useTheme();

    const baseStyles = "w-full rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variants = {
      default: "border border-border bg-white/5",
      filled: "bg-white/10 border-transparent",
      outline: "bg-transparent border-2 border-border",
      ghost: "bg-transparent border-transparent hover:bg-white/5",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    const states = {
      error: "border-error focus:ring-error/50",
      success: "border-success focus:ring-success/50",
    };

    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-white/80">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              baseStyles,
              variants[variant],
              sizes[inputSize],
              error && states.error,
              success && states.success,
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60">
              {rightIcon}
            </div>
          )}
        </div>
        {helperText && (
          <p className="text-sm text-white/60">{helperText}</p>
        )}
        {error && (
          <p className="text-sm text-error">{error}</p>
        )}
      </div>
    );
  }
);