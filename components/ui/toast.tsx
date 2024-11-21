'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/use-theme';
import { X, CheckCircle2, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  type?: ToastType;
  duration?: number;
  position?: ToastPosition;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const icons = {
  success: CheckCircle2,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const positions = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
};

export function Toast({
  id,
  title,
  description,
  type = 'info',
  duration = 3000,
  position = 'top-right',
  icon,
  dismissible = true,
  onDismiss,
}: ToastProps) {
  const { theme } = useTheme();
  const Icon = icons[type];

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onDismiss?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onDismiss]);

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          background: theme.colors.success,
          text: '#FFFFFF',
        };
      case 'error':
        return {
          background: theme.colors.error,
          text: '#FFFFFF',
        };
      case 'warning':
        return {
          background: theme.colors.warning,
          text: '#FFFFFF',
        };
      case 'info':
      default:
        return {
          background: theme.colors.info,
          text: '#FFFFFF',
        };
    }
  };

  const styles = getTypeStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: position.startsWith('top') ? -20 : 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={cn(
        'fixed min-w-[320px] max-w-[420px] rounded-lg shadow-lg p-4',
        positions[position],
        'backdrop-blur-md bg-opacity-95'
      )}
      style={{ backgroundColor: styles.background, color: styles.text }}
    >
      <div className="flex items-start gap-3">
        {(icon || <Icon />) && (
          <div className="flex-shrink-0 pt-1">
            {icon || <Icon className="w-5 h-5" />}
          </div>
        )}
        <div className="flex-1 min-w-0">
          {title && (
            <h3 className="font-semibold text-sm leading-5 mb-1">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm opacity-90">
              {description}
            </p>
          )}
        </div>
        {dismissible && (
          <button
            onClick={onDismiss}
            className="flex-shrink-0 rounded-lg p-1 transition-colors duration-200 hover:bg-white/20"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
}

export function ToastContainer({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {children}
    </AnimatePresence>
  );
}