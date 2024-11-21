'use client';

import React from 'react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg';
  responsive?: boolean;
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  justifyItems?: 'start' | 'center' | 'end' | 'stretch';
  flow?: 'row' | 'col' | 'dense';
}

export function Grid({
  children,
  className,
  cols = 3,
  gap = 'md',
  responsive = true,
  alignItems = 'stretch',
  justifyItems = 'stretch',
  flow = 'row',
  ...props
}: GridProps) {
  const { theme } = useTheme();

  const gapClasses = {
    none: 'gap-0',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  };

  const responsiveClasses = responsive
    ? {
        1: 'grid-cols-1',
        2: 'grid-cols-1 sm:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
        5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
        6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
        12: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12'
      }
    : {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        12: 'grid-cols-12'
      };

  return (
    <div
      className={cn(
        'grid',
        responsiveClasses[cols],
        gapClasses[gap],
        `items-${alignItems}`,
        `justify-items-${justifyItems}`,
        flow === 'col' && 'grid-flow-col',
        flow === 'dense' && 'grid-flow-dense',
        className
      )}
      style={{
        '--grid-bg': theme.colors.background,
        '--grid-border': theme.colors.border,
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}