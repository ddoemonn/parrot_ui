'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ToggleProps {
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Toggle({
  pressed = false,
  onPressedChange,
  disabled = false,
  className,
  children,
}: ToggleProps) {
  return (
    <motion.button
      whileTap={!disabled ? { scale: 0.95 } : undefined}
      onClick={() => !disabled && onPressedChange?.(!pressed)}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2",
        "transition-all duration-200 text-sm font-medium",
        "bg-black/20 backdrop-blur-xl border border-white/20",
        pressed && "bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] border-transparent",
        disabled && "opacity-50 cursor-not-allowed",
        !disabled && "hover:bg-white/5",
        className
      )}
    >
      {children}
    </motion.button>
  );
}