'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/use-theme';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  type: 'dropdown' | 'context';
}

const MenuContext = createContext<MenuContextValue | undefined>(undefined);

interface MenuProps {
  children: React.ReactNode;
  type?: 'dropdown' | 'context';
}

export function Menu({ children, type = 'dropdown' }: MenuProps) {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <MenuContext.Provider value={{ open, setOpen, type }}>
      <div className="relative inline-block">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

interface MenuTriggerProps {
  children: React.ReactNode;
}

Menu.Trigger = function MenuTrigger({ children }: MenuTriggerProps) {
  const context = useContext(MenuContext);
  if (!context) throw new Error('MenuTrigger must be used within Menu');

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    context.setOpen(!context.open);
  };

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  );
};

interface MenuContentProps {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
}

Menu.Content = function MenuContent({ children, align = 'start' }: MenuContentProps) {
  const context = useContext(MenuContext);
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  if (!context) throw new Error('MenuContent must be used within Menu');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        context.setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [context]);

  return (
    <AnimatePresence>
      {context.open && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.1 }}
          className={cn(
            "absolute z-50 min-w-[8rem] overflow-hidden rounded-lg p-1 shadow-lg",
            {
              "right-0": align === 'end',
              "left-1/2 -translate-x-1/2": align === 'center',
              "left-0": align === 'start',
            }
          )}
          style={{
            backgroundColor: theme.colors.background,
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface MenuItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'default' | 'danger';
  disabled?: boolean;
  onClick?: () => void;
}

Menu.Item = function MenuItem({ 
  children, 
  icon, 
  variant = 'default',
  disabled = false,
  onClick 
}: MenuItemProps) {
  const context = useContext(MenuContext);
  const { theme } = useTheme();

  if (!context) throw new Error('MenuItem must be used within Menu');

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
      context.setOpen(false);
    }
  };

  return (
    <button
      className={cn(
        "flex w-full items-center px-3 py-2 text-sm rounded-md gap-2",
        "transition-colors duration-150",
        {
          "opacity-50 cursor-not-allowed": disabled,
          "hover:bg-white/10": !disabled && variant === 'default',
          "text-red-500 hover:bg-red-500/10": !disabled && variant === 'danger',
        }
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </button>
  );
};

Menu.Separator = function MenuSeparator() {
  const { theme } = useTheme();
  return (
    <div 
      className="my-1 h-px" 
      style={{ backgroundColor: theme.colors.border }}
    />
  );
};

interface MenuCheckboxItemProps {
  children: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
  icon?: React.ReactNode;
}

Menu.CheckboxItem = function MenuCheckboxItem({
  children,
  checked,
  onChange,
  icon
}: MenuCheckboxItemProps) {
  const context = useContext(MenuContext);
  const { theme } = useTheme();

  if (!context) throw new Error('MenuCheckboxItem must be used within Menu');

  return (
    <button
      className="flex w-full items-center px-3 py-2 text-sm rounded-md gap-2 hover:bg-white/10"
      onClick={() => onChange(!checked)}
    >
      <div 
        className={cn(
          "w-4 h-4 border rounded flex items-center justify-center",
          checked ? "bg-primary border-primary" : "border-white/20"
        )}
      >
        {checked && <Check className="w-3 h-3 text-white" />}
      </div>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </button>
  );
};

interface MenuRadioGroupProps {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}

Menu.RadioGroup = function MenuRadioGroup({
  value,
  onChange,
  children
}: MenuRadioGroupProps) {
  return (
    <div role="radiogroup">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { 
            checked: child.props.value === value,
            onChange
          });
        }
        return child;
      })}
    </div>
  );
};

interface MenuRadioItemProps {
  value: string;
  children: React.ReactNode;
  checked?: boolean;
  onChange?: (value: string) => void;
}

Menu.RadioItem = function MenuRadioItem({
  value,
  children,
  checked,
  onChange
}: MenuRadioItemProps) {
  const { theme } = useTheme();

  return (
    <button
      className="flex w-full items-center px-3 py-2 text-sm rounded-md gap-2 hover:bg-white/10"
      onClick={() => onChange?.(value)}
    >
      <div 
        className={cn(
          "w-4 h-4 rounded-full border flex items-center justify-center",
          checked ? "border-primary" : "border-white/20"
        )}
      >
        {checked && (
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: theme.colors.primary }}
          />
        )}
      </div>
      {children}
    </button>
  );
};

interface MenuSubProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

Menu.Sub = function MenuSub({ children, defaultOpen = false }: MenuSubProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <MenuContext.Provider value={{ open, setOpen, type: 'dropdown' }}>
      {children}
    </MenuContext.Provider>
  );
};

interface MenuSubTriggerProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

Menu.SubTrigger = function MenuSubTrigger({ children, icon }: MenuSubTriggerProps) {
  const context = useContext(MenuContext);
  if (!context) throw new Error('MenuSubTrigger must be used within MenuSub');

  return (
    <button
      className="flex w-full items-center px-3 py-2 text-sm rounded-md gap-2 hover:bg-white/10"
      onClick={() => context.setOpen(!context.open)}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </button>
  );
};

Menu.SubContent = function MenuSubContent({ children }: { children: React.ReactNode }) {
  const context = useContext(MenuContext);
  const { theme } = useTheme();
  
  if (!context) throw new Error('MenuSubContent must be used within MenuSub');

  return (
    <AnimatePresence>
      {context.open && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.1 }}
          className="absolute left-full top-0 ml-1 min-w-[8rem] rounded-lg p-1 shadow-lg"
          style={{
            backgroundColor: theme.colors.background,
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export type { MenuProps, MenuItemProps, MenuCheckboxItemProps, MenuRadioGroupProps, MenuRadioItemProps };