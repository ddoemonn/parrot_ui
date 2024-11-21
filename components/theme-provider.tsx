'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeConfig, defaultTheme } from '@/lib/themes';

type ThemeContextType = {
  theme: ThemeConfig;
  setTheme: (theme: ThemeConfig) => void;
  toggleColorMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  setTheme: () => {},
  toggleColorMode: () => {},
});

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({
  children,
  initialTheme = defaultTheme
}: {
  children: React.ReactNode;
  initialTheme?: ThemeConfig;
}) {
  const [theme, setTheme] = useState<ThemeConfig>(initialTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleColorMode = () => {
    setTheme(prevTheme => ({
      ...prevTheme,
      colors: {
        ...prevTheme.colors,
        background: prevTheme.colors.background === '#FFFFFF' ? '#000000' : '#FFFFFF',
        text: prevTheme.colors.text === '#000000' ? '#FFFFFF' : '#000000'
      }
    }));
  };

  const value = {
    theme,
    setTheme,
    toggleColorMode
  };

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>
      <div
        style={{
          '--primary-color': theme.colors.primary,
          '--secondary-color': theme.colors.secondary,
          '--accent-color': theme.colors.accent,
          '--background-color': theme.colors.background,
          '--text-color': theme.colors.text,
          '--muted-color': theme.colors.muted,
          '--border-color': theme.colors.border,
          '--error-color': theme.colors.error,
          '--success-color': theme.colors.success,
          '--warning-color': theme.colors.warning,
          '--info-color': theme.colors.info,
          '--border-radius': theme.borderRadius,
          '--font-family': theme.fontFamily,
        } as React.CSSProperties}
        className="transition-colors duration-200"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}