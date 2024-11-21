'use client';

import React from 'react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle } from 'lucide-react';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  loading?: boolean;
  error?: string;
  success?: string;
  className?: string;
}

export interface FormFieldProps {
  label?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

export interface FormMessageProps {
  children: React.ReactNode;
  type?: 'error' | 'success';
  className?: string;
}

export function Form({ children, onSubmit, loading, error, success, className, ...props }: FormProps) {
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loading && onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('space-y-6', className)}
      {...props}
    >
      {children}
      <AnimatePresence>
        {(error || success) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4"
          >
            <FormMessage type={error ? 'error' : 'success'}>
              {error || success}
            </FormMessage>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

export function FormField({ label, error, required, className, children }: FormFieldProps) {
  const { theme } = useTheme();

  return (
    <div className={cn('space-y-2', className)}>
      {label && (
        <label className="block text-sm font-medium" style={{ color: theme.colors.text }}>
          {label}
          {required && <span className="ml-1 text-error">*</span>}
        </label>
      )}
      {children}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <FormMessage type="error">{error}</FormMessage>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FormMessage({ children, type = 'error', className }: FormMessageProps) {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        'flex items-center gap-2 text-sm rounded-lg p-2',
        type === 'error' ? 'bg-error/10' : 'bg-success/10',
        className
      )}
      style={{ color: type === 'error' ? theme.colors.error : theme.colors.success }}
    >
      {type === 'error' ? (
        <AlertCircle className="w-4 h-4 shrink-0" />
      ) : (
        <CheckCircle className="w-4 h-4 shrink-0" />
      )}
      {children}
    </div>
  );
}