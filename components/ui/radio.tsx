'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

interface RadioProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
  value: string;
  name: string;
}

export function Radio({
  checked = false,
  onChange,
  label,
  disabled = false,
  className,
  value,
  name,
}: RadioProps) {
  const { theme } = useTheme();

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
            borderColor: checked ? 'transparent' : theme.colors.border,
          }}
          className={cn(
            "w-5 h-5 rounded-full border-2 transition-colors duration-200",
            "backdrop-blur-xl",
            !disabled && "hover:bg-opacity-90"
          )}
          whileTap={!disabled ? { scale: 0.95 } : undefined}
        >
          {checked && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: theme.colors.text }}
              />
            </motion.div>
          )}
        </motion.div>
        <input
          type="radio"
          className="sr-only"
          checked={checked}
          onChange={(e) => !disabled && onChange?.(e.target.checked)}
          value={value}
          name={name}
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