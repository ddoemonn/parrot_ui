'use client';

import React from 'react';
import { Radio } from './radio';
import { cn } from '@/lib/utils';

interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export function RadioGroup({
  options,
  value,
  onChange,
  name,
  className,
  orientation = 'vertical'
}: RadioGroupProps) {
  return (
    <div className={cn(
      "flex",
      orientation === 'vertical' ? 'flex-col space-y-2' : 'flex-row space-x-4',
      className
    )}>
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          label={option.label}
          checked={value === option.value}
          onChange={() => onChange?.(option.value)}
          disabled={option.disabled}
        />
      ))}
    </div>
  );
}