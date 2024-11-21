'use client';

import React from 'react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
  dividers?: boolean;
  className?: string;
}

export function Stack({
  children,
  direction = 'vertical',
  spacing = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  dividers = false,
  className,
  ...props
}: StackProps) {
  const { theme } = useTheme();

  const getSpacing = () => {
    switch (spacing) {
      case 'none': return '0';
      case 'xs': return '0.5rem';
      case 'sm': return '1rem';
      case 'md': return '1.5rem';
      case 'lg': return '2rem';
      case 'xl': return '3rem';
      default: return '1.5rem';
    }
  };

  const stackStyles = {
    display: 'flex',
    flexDirection: direction === 'vertical' ? 'column' : 'row',
    alignItems: direction === 'vertical' 
      ? align 
      : { start: 'flex-start', center: 'center', end: 'flex-end', stretch: 'stretch' }[align],
    justifyContent: { 
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
      between: 'space-between',
      around: 'space-around'
    }[justify],
    flexWrap: wrap ? 'wrap' : 'nowrap',
    gap: getSpacing(),
  } as React.CSSProperties;

  const childrenArray = React.Children.toArray(children).filter(Boolean);

  return (
    <div 
      className={cn('stack', className)}
      style={stackStyles}
      {...props}
    >
      {childrenArray.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {dividers && index < childrenArray.length - 1 && (
            <div
              className={cn(
                'divider',
                direction === 'vertical' ? 'h-px w-full' : 'w-px h-full'
              )}
              style={{ 
                backgroundColor: theme.colors.border,
                margin: direction === 'vertical' ? `${getSpacing()} 0` : `0 ${getSpacing()}`
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}