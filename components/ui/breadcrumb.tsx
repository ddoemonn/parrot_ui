'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

export function Breadcrumb({
  items,
  separator = <ChevronRight className="w-4 h-4 text-muted" />,
  className
}: BreadcrumbProps) {
  const { theme } = useTheme();

  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center', className)}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          const itemContent = (
            <div className="flex items-center">
              {item.icon && (
                <span className="mr-2">{item.icon}</span>
              )}
              <span
                className={cn(
                  'text-sm',
                  isLast ? 'font-semibold' : 'text-muted hover:text-white transition-colors'
                )}
                style={{ color: isLast ? theme.colors.text : undefined }}
              >
                {item.label}
              </span>
            </div>
          );

          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast ? (
                <a href={item.href} className="hover:opacity-80 transition-opacity">
                  {itemContent}
                </a>
              ) : (
                itemContent
              )}
              {!isLast && (
                <span className="ml-2">{separator}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}