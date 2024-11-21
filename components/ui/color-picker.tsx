'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';

export interface ColorPickerProps {
  value?: string;
  onChange?: (color: string) => void;
  presetColors?: string[];
  disabled?: boolean;
  className?: string;
  showInput?: boolean;
  showPresets?: boolean;
}

export function ColorPicker({
  value = '#000000',
  onChange,
  presetColors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#A8E6CF', '#FF8E53',
    '#F472B6', '#8B5CF6', '#3B82F6', '#2DD4BF', '#F59E0B'
  ],
  disabled = false,
  className,
  showInput = true,
  showPresets = true,
}: ColorPickerProps) {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (newValue.match(/^#[0-9A-Fa-f]{6}$/)) {
      onChange?.(newValue);
    }
  };

  const handlePresetClick = (color: string) => {
    onChange?.(color);
    setIsOpen(false);
  };

  return (
    <div 
      ref={containerRef}
      className={cn(
        'relative inline-block',
        disabled && 'opacity-50 pointer-events-none',
        className
      )}
    >
      <div
        className={cn(
          'flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors',
          isOpen ? 'border-primary' : 'border-border hover:border-primary/50'
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        style={{ borderColor: isOpen ? theme.colors.primary : undefined }}
      >
        <div 
          className="w-6 h-6 rounded-md border border-white/10"
          style={{ backgroundColor: value }}
        />
        {showInput && (
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="w-20 bg-transparent border-none outline-none text-sm"
            onClick={(e) => e.stopPropagation()}
          />
        )}
        <ChevronDown 
          className={cn(
            'w-4 h-4 text-muted transition-transform',
            isOpen && 'rotate-180'
          )}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute z-50 mt-2 p-3 rounded-lg border border-border bg-background shadow-xl"
            style={{ backgroundColor: theme.colors.background }}
          >
            {showPresets && (
              <div className="grid grid-cols-5 gap-2 mb-2">
                {presetColors.map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-md border border-white/10 relative flex items-center justify-center transition-transform hover:scale-110"
                    style={{ backgroundColor: color }}
                    onClick={() => handlePresetClick(color)}
                  >
                    {color === value && (
                      <Check className="w-4 h-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}