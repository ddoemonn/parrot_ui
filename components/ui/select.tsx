'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function Select({
  options,
  value,
  onChange,
  placeholder = 'Select option',
  className,
  disabled = false,
}: SelectProps) {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    options.find(opt => opt.value === value) || null
  );
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: SelectOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange?.(option.value);
  };

  return (
    <div ref={selectRef} className="relative">
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        style={{
          borderColor: theme.colors.border,
          backgroundColor: `${theme.colors.background}40`,
          color: theme.colors.text,
        }}
        className={cn(
          "w-full flex items-center justify-between px-4 py-2 rounded-xl",
          "backdrop-blur-xl border",
          "text-sm focus:outline-none",
          "transition-all duration-200",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <span style={{ color: !selectedOption ? theme.colors.muted : theme.colors.text }}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" style={{ color: theme.colors.muted }} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              backgroundColor: `${theme.colors.background}90`,
              borderColor: theme.colors.border,
            }}
            className="absolute z-50 w-full mt-2 rounded-xl backdrop-blur-xl border shadow-xl"
          >
            <div className="py-1 max-h-60 overflow-auto custom-scrollbar">
              {options.map((option) => (
                <motion.button
                  key={option.value}
                  whileHover={{ backgroundColor: `${theme.colors.primary}20` }}
                  onClick={() => handleSelect(option)}
                  style={{
                    color: theme.colors.text,
                    backgroundColor: selectedOption?.value === option.value ? `${theme.colors.primary}20` : 'transparent',
                  }}
                  className={cn(
                    "w-full px-4 py-2 text-sm text-left",
                    "transition-colors duration-150 flex items-center space-x-2"
                  )}
                >
                  <div 
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: theme.colors.muted }}
                  />
                  <span>{option.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}