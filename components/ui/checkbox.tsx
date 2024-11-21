'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  className,
}: CheckboxProps) {
  const { theme } = useTheme();

  return (
    <label className={cn(
      "inline-flex items-center space-x-2 cursor-pointer",
      disabled && "cursor-not-allowed opacity-50",
      className
    )}>
      <div className="relative">
        <motion.div
          style={{
            backgroundColor: checked ? theme.colors.primary : `${theme.colors.background}40`,
            borderColor: checked ? 'transparent' : theme.colors.border,
          }}
          className={cn(
            "w-5 h-5 rounded-md border transition-colors duration-200",
            "backdrop-blur-xl",
            !disabled && "hover:bg-opacity-90"
          )}
          whileTap={!disabled ? { scale: 0.95 } : undefined}
          onClick={() => !disabled && onChange?.(!checked)}
        >
          <AnimatePresence>
            {checked && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ color: theme.colors.text }}
              >
                <Check className="w-3.5 h-3.5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      {label && (
        <span style={{ color: theme.colors.text }} className="text-sm">
          {label}
        </span>
      )}
    </label>
  );
}