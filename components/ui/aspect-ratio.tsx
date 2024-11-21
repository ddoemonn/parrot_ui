'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

interface AspectRatioProps {
  ratio?: number;
  children: React.ReactNode;
  className?: string;
}

export function AspectRatio({ 
  ratio = 16/9,
  children,
  className
}: AspectRatioProps) {
  const { theme } = useTheme();

  return (
    <div 
      className={cn(
        "relative w-full",
        className
      )}
      style={{ 
        paddingBottom: `${(1 / ratio) * 100}%`,
      }}
    >
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
}