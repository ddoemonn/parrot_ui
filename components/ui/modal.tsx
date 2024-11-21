'use client';

import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
  header?: React.ReactNode;
  footer?: React.ReactNode;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
  header,
  footer,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  className,
}: ModalProps) {
  const { theme } = useTheme();

  const handleEscapeKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape' && closeOnEsc) {
      onClose();
    }
  }, [closeOnEsc, onClose]);

  useEffect(() => {
    if (isOpen && closeOnEsc) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => document.removeEventListener('keydown', handleEscapeKey);
    }
  }, [isOpen, closeOnEsc, handleEscapeKey]);

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    full: 'max-w-full m-4',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOnOverlayClick ? onClose : undefined}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            style={{ backgroundColor: `${theme.colors.background}80` }}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className={cn(
              'relative w-full rounded-lg shadow-lg',
              sizeClasses[size],
              className
            )}
            style={{ 
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.border,
            }}
          >
            {/* Default Header */}
            {!header && title && (
              <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: theme.colors.border }}>
                <h2 className="text-xl font-semibold" style={{ color: theme.colors.text }}>
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="w-5 h-5" style={{ color: theme.colors.text }} />
                </button>
              </div>
            )}

            {/* Custom Header */}
            {header}

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(100vh-16rem)]">
              {children}
            </div>

            {/* Footer */}
            {footer}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}