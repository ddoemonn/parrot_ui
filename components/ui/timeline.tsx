'use client';

import React from 'react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';
import { Circle } from 'lucide-react';

export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  date?: string;
  icon?: React.ReactNode;
  status?: 'complete' | 'current' | 'upcoming';
}

interface TimelineProps {
  items: TimelineItem[];
  orientation?: 'vertical' | 'horizontal';
  variant?: 'default' | 'alternate' | 'compact';
  showConnectors?: boolean;
  className?: string;
}

export function Timeline({
  items,
  orientation = 'vertical',
  variant = 'default',
  showConnectors = true,
  className,
}: TimelineProps) {
  const { theme } = useTheme();

  const getStatusColor = (status?: TimelineItem['status']) => {
    switch (status) {
      case 'complete':
        return theme.colors.success;
      case 'current':
        return theme.colors.primary;
      case 'upcoming':
        return theme.colors.muted;
      default:
        return theme.colors.border;
    }
  };

  const timelineClasses = cn(
    'relative',
    orientation === 'horizontal' ? 'flex' : 'flex flex-col',
    className
  );

  const itemClasses = cn(
    'relative flex',
    orientation === 'horizontal' ? 'flex-col items-center px-4' : 'items-start',
    variant === 'compact' && 'gap-2',
    variant !== 'compact' && 'gap-4'
  );

  const renderConnector = (index: number) => {
    if (!showConnectors || index === items.length - 1) return null;

    return (
      <div
        className={cn(
          'absolute bg-border',
          orientation === 'horizontal'
            ? 'top-4 h-[2px] left-1/2 w-full'
            : 'left-4 w-[2px] top-8 h-full'
        )}
        style={{ backgroundColor: theme.colors.border }}
      />
    );
  };

  return (
    <div className={timelineClasses}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            itemClasses,
            variant === 'alternate' &&
              orientation === 'vertical' &&
              index % 2 === 1 &&
              'flex-row-reverse'
          )}
          style={{
            flex: orientation === 'horizontal' ? '1' : undefined,
          }}
        >
          <div className="relative">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center z-10 relative"
              style={{ backgroundColor: getStatusColor(item.status) }}
            >
              {item.icon || <Circle className="w-4 h-4 text-white" />}
            </div>
            {renderConnector(index)}
          </div>

          <div className={cn('flex-1', variant === 'compact' ? 'py-0' : 'py-2')}>
            <div className="flex flex-col gap-1">
              <h3 className="font-medium" style={{ color: theme.colors.text }}>
                {item.title}
              </h3>
              {item.date && (
                <span className="text-sm" style={{ color: theme.colors.muted }}>
                  {item.date}
                </span>
              )}
              {item.description && (
                <p
                  className="text-sm mt-1"
                  style={{ color: theme.colors.muted }}
                >
                  {item.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}