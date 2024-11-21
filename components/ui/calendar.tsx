'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Calendar({
  value,
  onChange,
  minDate,
  maxDate,
  disabled = false,
  className,
  variant = 'default',
  size = 'md',
}: CalendarProps) {
  const { theme } = useTheme();
  const [currentDate, setCurrentDate] = useState(value || new Date());
  const [viewDate, setViewDate] = useState(value || new Date());

  const daysInMonth = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleDateClick = (day: number) => {
    if (disabled) return;

    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);

    if (minDate && newDate < minDate) return;
    if (maxDate && newDate > maxDate) return;

    setCurrentDate(newDate);
    onChange?.(newDate);
  };

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1));
  };

  const isCurrentDate = (day: number) => {
    return (
      currentDate.getDate() === day &&
      currentDate.getMonth() === viewDate.getMonth() &&
      currentDate.getFullYear() === viewDate.getFullYear()
    );
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === viewDate.getMonth() &&
      today.getFullYear() === viewDate.getFullYear()
    );
  };

  const isDisabled = (day: number) => {
    if (disabled) return true;

    const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;

    return false;
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const variantClasses = {
    default: 'bg-white/5 border border-white/10',
    outline: 'border border-white/20 bg-transparent',
    ghost: 'bg-transparent',
  };

  return (
    <div
      className={cn(
        'p-4 rounded-lg',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevMonth}
          disabled={disabled}
          className="p-1 rounded-md hover:bg-white/10 disabled:opacity-50"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="font-semibold">
          {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          disabled={disabled}
          className="p-1 rounded-md hover:bg-white/10 disabled:opacity-50"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-white/60 py-1"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="aspect-square" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const isSelected = isCurrentDate(day);
          const isTodayDate = isToday(day);
          const isDisabledDate = isDisabled(day);

          return (
            <motion.button
              key={day}
              whileHover={{ scale: isDisabledDate ? 1 : 1.1 }}
              whileTap={{ scale: isDisabledDate ? 1 : 0.95 }}
              onClick={() => handleDateClick(day)}
              disabled={isDisabledDate}
              className={cn(
                'aspect-square rounded-full flex items-center justify-center relative',
                isSelected && 'bg-primary text-white',
                !isSelected && isTodayDate && 'border-2 border-primary',
                !isSelected && !isTodayDate && 'hover:bg-white/10',
                isDisabledDate && 'opacity-50 cursor-not-allowed'
              )}
              style={{
                backgroundColor: isSelected ? theme.colors.primary : undefined,
                borderColor: isTodayDate ? theme.colors.primary : undefined,
              }}
            >
              {day}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}