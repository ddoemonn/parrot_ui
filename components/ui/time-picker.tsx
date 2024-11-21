'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';
import { Clock, ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TimePickerProps {
  value?: string;
  onChange?: (time: string) => void;
  format?: '12h' | '24h';
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  showSeconds?: boolean;
  minTime?: string;
  maxTime?: string;
}

export function TimePicker({
  value,
  onChange,
  format = '24h',
  disabled = false,
  placeholder = 'Select time',
  className,
  showSeconds = false,
  minTime,
  maxTime,
}: TimePickerProps) {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [period, setPeriod] = useState<'AM' | 'PM'>('AM');

  useEffect(() => {
    if (value) {
      const [time, meridian] = value.split(' ');
      const [h, m, s] = time.split(':');
      setHours(h);
      setMinutes(m);
      if (showSeconds && s) setSeconds(s);
      if (format === '12h' && meridian) setPeriod(meridian as 'AM' | 'PM');
    }
  }, [value, format, showSeconds]);

  const handleTimeChange = () => {
    let timeString = `${hours}:${minutes}`;
    if (showSeconds) timeString += `:${seconds}`;
    if (format === '12h') timeString += ` ${period}`;
    onChange?.(timeString);
  };

  const incrementValue = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    value: string,
    max: number,
    min: number = 0
  ) => {
    const current = parseInt(value);
    const next = (current + 1) % (max + 1);
    setter(next.toString().padStart(2, '0'));
    handleTimeChange();
  };

  const decrementValue = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    value: string,
    max: number,
    min: number = 0
  ) => {
    const current = parseInt(value);
    const next = current === min ? max : current - 1;
    setter(next.toString().padStart(2, '0'));
    handleTimeChange();
  };

  const TimeUnit = ({ 
    value, 
    onChange, 
    max, 
    label 
  }: { 
    value: string; 
    onChange: (type: 'inc' | 'dec') => void; 
    max: number;
    label: string;
  }) => (
    <div className="flex flex-col items-center">
      <button
        onClick={() => onChange('inc')}
        className="p-1 hover:bg-white/10 rounded-lg transition-colors"
        disabled={disabled}
      >
        <ChevronUp className="w-4 h-4" />
      </button>
      <div className="w-12 text-center py-2 font-mono">
        {value}
        <div className="text-xs text-white/60">{label}</div>
      </div>
      <button
        onClick={() => onChange('dec')}
        className="p-1 hover:bg-white/10 rounded-lg transition-colors"
        disabled={disabled}
      >
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <div className="relative">
      <div
        className={cn(
          'flex items-center gap-2 p-2 rounded-lg border cursor-pointer',
          disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary',
          className
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        style={{
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.border,
        }}
      >
        <Clock className="w-4 h-4 text-muted" />
        <span className={!value ? 'text-muted' : ''}>
          {value || placeholder}
        </span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 mt-2 p-4 rounded-lg shadow-lg border"
            style={{
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.border,
            }}
          >
            <div className="flex items-center gap-4">
              <TimeUnit
                value={hours}
                onChange={(type) => type === 'inc' 
                  ? incrementValue(setHours, hours, format === '12h' ? 12 : 23, 1)
                  : decrementValue(setHours, hours, format === '12h' ? 12 : 23, 1)
                }
                max={format === '12h' ? 12 : 23}
                label="Hours"
              />
              <div className="text-2xl">:</div>
              <TimeUnit
                value={minutes}
                onChange={(type) => type === 'inc'
                  ? incrementValue(setMinutes, minutes, 59)
                  : decrementValue(setMinutes, minutes, 59)
                }
                max={59}
                label="Minutes"
              />
              {showSeconds && (
                <>
                  <div className="text-2xl">:</div>
                  <TimeUnit
                    value={seconds}
                    onChange={(type) => type === 'inc'
                      ? incrementValue(setSeconds, seconds, 59)
                      : decrementValue(setSeconds, seconds, 59)
                    }
                    max={59}
                    label="Seconds"
                  />
                </>
              )}
              {format === '12h' && (
                <div className="flex flex-col gap-2">
                  <button
                    className={cn(
                      'px-2 py-1 rounded transition-colors',
                      period === 'AM' ? 'bg-primary text-white' : 'hover:bg-white/10'
                    )}
                    onClick={() => {
                      setPeriod('AM');
                      handleTimeChange();
                    }}
                  >
                    AM
                  </button>
                  <button
                    className={cn(
                      'px-2 py-1 rounded transition-colors',
                      period === 'PM' ? 'bg-primary text-white' : 'hover:bg-white/10'
                    )}
                    onClick={() => {
                      setPeriod('PM');
                      handleTimeChange();
                    }}
                  >
                    PM
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}