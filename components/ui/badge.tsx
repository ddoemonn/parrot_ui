'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        success: 'bg-success text-white hover:bg-success/80',
        error: 'bg-error text-white hover:bg-error/80',
        warning: 'bg-warning text-white hover:bg-warning/80',
        info: 'bg-info text-white hover:bg-info/80',
        outline: 'text-foreground border border-input hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        gradient: 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-0.5 text-sm',
        lg: 'px-3 py-1 text-base',
      },
      rounded: {
        default: 'rounded-full',
        sm: 'rounded-md',
        lg: 'rounded-xl',
      },
      removable: {
        true: 'pr-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'default',
      removable: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  onRemove?: () => void;
}

function Badge({
  className,
  variant,
  size,
  rounded,
  removable,
  onRemove,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size, rounded, removable }), className)}
      {...props}
    >
      {children}
      {removable && (
        <button
          className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={onRemove}
        >
          <svg
            className="h-3 w-3 hover:opacity-75"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export { Badge, badgeVariants };