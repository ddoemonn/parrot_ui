'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  variant?: 'default' | 'pills' | 'underline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  orientation?: 'horizontal' | 'vertical';
  children: React.ReactNode;
  className?: string;
}

interface TabListProps {
  children: React.ReactNode;
  className?: string;
}

interface TabTriggerProps {
  value: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

interface TabContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const TabsContext = React.createContext<{
  selectedTab: string;
  setSelectedTab: (value: string) => void;
  variant: TabsProps['variant'];
  size: TabsProps['size'];
  orientation: TabsProps['orientation'];
} | null>(null);

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  variant = 'default',
  size = 'md',
  orientation = 'horizontal',
  children,
  className,
}: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(value || defaultValue || '');
  const { theme } = useTheme();

  useEffect(() => {
    if (value !== undefined) {
      setSelectedTab(value);
    }
  }, [value]);

  const handleTabChange = (newValue: string) => {
    if (!value) {
      setSelectedTab(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider
      value={{
        selectedTab,
        setSelectedTab: handleTabChange,
        variant,
        size,
        orientation,
      }}
    >
      <div
        className={cn(
          'flex',
          orientation === 'vertical' ? 'flex-row gap-4' : 'flex-col gap-2',
          className
        )}
        style={{
          '--tab-accent-color': theme.colors.primary,
          '--tab-text-color': theme.colors.text,
          '--tab-border-color': theme.colors.border,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabList({ children, className }: TabListProps) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error('TabList must be used within Tabs');

  const { orientation, variant } = context;

  return (
    <div
      className={cn(
        'flex relative',
        orientation === 'vertical' ? 'flex-col' : 'flex-row',
        variant === 'underline' && 'border-b border-border',
        variant === 'pills' && 'bg-white/5 rounded-lg p-1',
        className
      )}
      role="tablist"
    >
      {children}
    </div>
  );
}

export function TabTrigger({
  value,
  disabled,
  icon,
  children,
  className,
}: TabTriggerProps) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error('TabTrigger must be used within Tabs');

  const { selectedTab, setSelectedTab, variant, size, orientation } = context;
  const isSelected = selectedTab === value;

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  const variants = {
    default: cn(
      'relative transition-colors hover:text-primary',
      isSelected ? 'text-primary' : 'text-muted'
    ),
    pills: cn(
      'relative transition-all rounded-md',
      isSelected ? 'bg-primary text-white shadow-lg' : 'hover:bg-white/10'
    ),
    underline: cn(
      'relative transition-colors',
      isSelected && 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary',
      isSelected ? 'text-primary' : 'text-muted hover:text-primary'
    ),
    gradient: cn(
      'relative transition-all bg-clip-text',
      isSelected
        ? 'text-transparent bg-gradient-to-r from-primary to-secondary font-semibold'
        : 'hover:text-primary'
    ),
  };

  return (
    <button
      role="tab"
      aria-selected={isSelected}
      aria-controls={`panel-${value}`}
      tabIndex={isSelected ? 0 : -1}
      disabled={disabled}
      onClick={() => setSelectedTab(value)}
      className={cn(
        'flex items-center gap-2 font-medium outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed',
        sizeClasses[size || 'md'],
        variants[variant || 'default'],
        orientation === 'vertical' && 'justify-start w-full',
        className
      )}
    >
      {icon}
      {children}
    </button>
  );
}

export function TabContent({
  value,
  children,
  className,
}: TabContentProps) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error('TabContent must be used within Tabs');

  const { selectedTab } = context;
  const isSelected = selectedTab === value;

  return (
    <AnimatePresence mode="wait">
      {isSelected && (
        <motion.div
          role="tabpanel"
          id={`panel-${value}`}
          aria-labelledby={`tab-${value}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

Tabs.List = TabList;
Tabs.Trigger = TabTrigger;
Tabs.Content = TabContent;