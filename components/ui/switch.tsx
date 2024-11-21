'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  className,
  size = 'md',
}: SwitchProps) {
  const { theme } = useTheme();

  const sizes = {
    sm: { track: 'w-8 h-4', thumb: 'w-3 h-3', translate: 'translate-x-4' },
    md: { track: 'w-10 h-5', thumb: 'w-4 h-4', translate: 'translate-x-5' },
    lg: { track: 'w-12 h-6', thumb: 'w-5 h-5', translate: 'translate-x-6' },
  };

  return (
    <label className={cn(
      "inline-flex items-center space-x-2",
      disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
      className
    )}>
      <div className="relative">
        <motion.div
          style={{
            backgroundColor: checked ? theme.colors.primary : `${theme.colors.background}40`,
            borderColor: theme.colors.border,
          }}
          className={cn(
            "rounded-full border transition-colors duration-200",
            "backdrop-blur-xl",
            !disabled && "hover:bg-opacity-90",
            sizes[size].track
          )}
          whileTap={!disabled ? { scale: 0.95 } : undefined}
        >
          <motion.div
            className={cn(
              "absolute top-0.5 left-0.5 rounded-full",
              "shadow-lg",
              sizes[size].thumb
            )}
            animate={{
              backgroundColor: theme.colors.text,
              x: checked ? parseInt(sizes[size].translate.split('-x-')[1]) * 4 : 0,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </motion.div>
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => !disabled && onChange?.(e.target.checked)}
          disabled={disabled}
        />
      </div>
      {label && (
        <span style={{ color: theme.colors.text }} className="text-sm">
          {label}
        </span>
      )}
    </label>
  );
}