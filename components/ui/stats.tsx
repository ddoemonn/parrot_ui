'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

export interface StatProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    label?: string;
    direction: 'up' | 'down';
  };
  variant?: 'default' | 'gradient' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface StatsProps {
  items: StatProps[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export function Stats({ items, columns = 4, className }: StatsProps) {
  const { theme } = useTheme();

  return (
    <div className={cn(
      'grid gap-6',
      {
        'grid-cols-1': columns === 1,
        'grid-cols-1 md:grid-cols-2': columns === 2,
        'grid-cols-1 md:grid-cols-3': columns === 3,
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-4': columns === 4,
      },
      className
    )}>
      {items.map((stat, index) => (
        <Stat key={index} {...stat} />
      ))}
    </div>
  );
}

export function Stat({
  title,
  value,
  description,
  icon,
  trend,
  variant = 'default',
  size = 'md',
  className,
}: StatProps) {
  const { theme } = useTheme();

  const variants = {
    default: 'bg-white/5 border border-white/10',
    gradient: 'bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10',
    outline: 'border border-white/20 bg-transparent',
  };

  const sizes = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        'rounded-xl backdrop-blur-xl',
        variants[variant],
        sizes[size],
        className
      )}
    >
      <div className="flex items-start justify-between">
        {icon && (
          <div 
            className="p-2 rounded-lg"
            style={{ backgroundColor: `${theme.colors.primary}20` }}
          >
            {icon}
          </div>
        )}
        {trend && (
          <div className={cn(
            'flex items-center space-x-1 text-sm',
            trend.direction === 'up' ? 'text-success' : 'text-error'
          )}>
            <span>{trend.direction === 'up' ? '↑' : '↓'}</span>
            <span>{trend.value}%</span>
            {trend.label && (
              <span className="text-muted">
                {trend.label}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium text-muted">{title}</h3>
        <p className="mt-2 text-3xl font-bold">{value}</p>
        {description && (
          <p className="mt-2 text-sm text-muted">{description}</p>
        )}
      </div>
    </motion.div>
  );
}