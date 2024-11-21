'use client';

import React, { useState, useCallback, createContext, useContext } from 'react';
import type { ToastProps } from '@/components/ui/toast';
import { Toast } from '@/components/ui/toast';
import { AnimatePresence, motion } from 'framer-motion';

interface ToastContextType {
  toasts: ToastProps[];
  toast: (options: Omit<ToastProps, 'id' | 'onDismiss'>) => string;
  dismiss: (id: string) => void;
  dismissAll: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const { toasts, toast, dismiss, dismissAll } = useToastProvider();

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss, dismissAll }}>
      {children}
      <div className="fixed inset-0 pointer-events-none flex flex-col items-end gap-4 p-4 z-50">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="pointer-events-auto"
            >
              <Toast {...toast} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

function useToastProvider() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = useCallback((options: Omit<ToastProps, 'id' | 'onDismiss'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastProps = {
      ...options,
      id,
      onDismiss: () => dismiss(id),
    };

    setToasts((prev) => [...prev, newToast]);

    // Auto dismiss after duration
    if (options.duration !== 0) {
      setTimeout(() => {
        dismiss(id);
      }, options.duration || 3000);
    }

    return id;
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const dismissAll = useCallback(() => {
    setToasts([]);
  }, []);

  return {
    toasts,
    toast,
    dismiss,
    dismissAll,
  };
}

export type { ToastContextType };