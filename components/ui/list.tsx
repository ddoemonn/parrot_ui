'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/use-theme';
import { Check, Circle, ChevronRight } from 'lucide-react';

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  variant?: 'unordered' | 'ordered' | 'checked' | 'arrow';
  spacing?: 'compact' | 'normal' | 'relaxed';
  marker?: React.ReactNode;
  hoverable?: boolean;
  animated?: boolean;
  children: React.ReactNode;
}

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  icon?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ icon, active, disabled, children, className, ...props }, ref) => {
    const { theme } = useTheme();

    return (
      <li
        ref={ref}
        className={cn(
          'flex items-center gap-2 py-2',
          active && 'text-primary font-medium',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      >
        {icon && (
          <span className="flex-shrink-0" style={{ color: theme.colors.primary }}>
            {icon}
          </span>
        )}
        <span className="flex-1">{children}</span>
      </li>
    );
  }
);

ListItem.displayName = 'ListItem';

const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ 
    variant = 'unordered',
    spacing = 'normal',
    marker,
    hoverable = false,
    animated = false,
    className,
    children,
    ...props
  }, ref) => {
    const { theme } = useTheme();

    const spacingClasses = {
      compact: 'space-y-1',
      normal: 'space-y-2',
      relaxed: 'space-y-4'
    };

    const defaultMarkers = {
      unordered: <Circle className="w-2 h-2" />,
      checked: <Check className="w-4 h-4" />,
      arrow: <ChevronRight className="w-4 h-4" />
    };

    const listVariant = variant === 'ordered' ? 'ol' : 'ul';
    const ListComponent = listVariant as keyof JSX.IntrinsicElements;

    const items = React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return null;

      const itemProps: any = {
        ...child.props,
        className: cn(
          hoverable && 'transition-colors duration-200 hover:bg-white/5 rounded-lg px-2',
          child.props.className
        )
      };

      if (variant !== 'ordered' && !child.props.icon) {
        itemProps.icon = marker || defaultMarkers[variant as keyof typeof defaultMarkers];
      }

      if (animated) {
        return (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {React.cloneElement(child, itemProps)}
          </motion.div>
        );
      }

      return React.cloneElement(child, itemProps);
    });

    return React.createElement(
      ListComponent,
      {
        ref,
        className: cn(
          spacingClasses[spacing],
          variant === 'ordered' && 'list-decimal pl-4',
          className
        ),
        style: { 
          '--list-marker-color': theme.colors.primary 
        } as React.CSSProperties,
        ...props
      },
      items
    );
  }
);

List.displayName = 'List';

export { List, ListItem };