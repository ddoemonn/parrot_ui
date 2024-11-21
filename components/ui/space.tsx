'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

interface SpaceProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  direction?: 'horizontal' | 'vertical';
  className?: string;
  children?: React.ReactNode;
}

const spaceValues = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
};

export function Space({ 
  size = 'md', 
  direction = 'vertical',
  className,
  children 
}: SpaceProps) {
  const { theme } = useTheme();

  const style = {
    '--space-size': spaceValues[size],
  } as React.CSSProperties;

  if (children) {
    return (
      <div 
        className={cn(
          'flex',
          direction === 'vertical' ? 'flex-col' : 'flex-row',
          className
        )}
        style={style}
      >
        {React.Children.map(children, (child, index) => {
          if (index === React.Children.count(children) - 1) return child;
          return (
            <>
              {child}
              <div 
                style={{ 
                  [direction === 'vertical' ? 'height' : 'width']: 'var(--space-size)',
                  flexShrink: 0
                }} 
              />
            </>
          );
        })}
      </div>
    );
  }

  return (
    <div 
      className={cn(className)}
      style={{
        [direction === 'vertical' ? 'height' : 'width']: spaceValues[size],
        flexShrink: 0
      }}
    />
  );
}