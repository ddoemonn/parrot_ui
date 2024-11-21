'use client';

import React from 'react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle2, Info, XCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  variant?: 'filled' | 'outlined' | 'light';
  icon?: React.ReactNode;
  className?: string;
}

const icons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertCircle,
  error: XCircle,
};

export function Alert({
  type = 'info',
  title,
  children,
  dismissible = false,
  onDismiss,
  variant = 'filled',
  icon,
  className,
}: AlertProps) {
  const { theme } = useTheme();

  const getTypeColor = () => {
    switch (type) {
      case 'success':
        return theme.colors.success;
      case 'warning':
        return theme.colors.warning;
      case 'error':
        return theme.colors.error;
      default:
        return theme.colors.info;
    }
  };

  const getStyles = () => {
    const color = getTypeColor();
    
    switch (variant) {
      case 'outlined':
        return {
          backgroundColor: 'transparent',
          borderColor: color,
          color: color,
        };
      case 'light':
        return {
          backgroundColor: `${color}20`,
          borderColor: 'transparent',
          color: color,
        };
      default:
        return {
          backgroundColor: color,
          borderColor: 'transparent',
          color: theme.colors.background,
        };
    }
  };



  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={cn(
          'relative flex items-start gap-3 rounded-lg border p-4',
          className
        )}
        style={getStyles()}
      >
        {icon || (
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
            {React.createElement(icons[type], {
              size: 20,
              color: getTypeColor(),
            })}
          </div>
        )}
        
        <div className="flex-1">
          {title && (
            <h5 className="mb-1 font-medium">
              {title}
            </h5>
          )}
          <div className="text-sm">
            {children}
          </div>
        </div>

        {dismissible && (
          <button
            onClick={onDismiss}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-black/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}