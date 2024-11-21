import { type ClassValue } from 'clsx';

export type ThemeColors = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  muted: string;
  border: string;
  error: string;
  success: string;
  warning: string;
  info: string;
};

export type ThemeGradients = {
  primary: string;
  secondary: string;
  accent: string;
};

export type ThemeConfig = {
  colors: ThemeColors;
  gradients: ThemeGradients;
  borderRadius: string;
  fontFamily: string;
};

export const defaultTheme: ThemeConfig = {
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    accent: '#45B7D1',
    background: '#0A0A0A',
    text: '#FFFFFF',
    muted: '#666666',
    border: '#2A2A2A',
    error: '#FF4D4D',
    success: '#4CAF50',
    warning: '#FFA726',
    info: '#29B6F6'
  },
  gradients: {
    primary: 'from-[#FF6B6B] to-[#FF8E53]',
    secondary: 'from-[#4ECDC4] to-[#45B7D1]',
    accent: 'from-[#A8E6CF] to-[#3EECAC]'
  },
  borderRadius: '0.5rem',
  fontFamily: 'Inter, sans-serif'
};

export const darkTheme: ThemeConfig = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    background: '#000000',
    text: '#FFFFFF',
    muted: '#888888',
    border: '#333333'
  }
};

export const lightTheme: ThemeConfig = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    background: '#FFFFFF',
    text: '#000000',
    muted: '#666666',
    border: '#E0E0E0'
  }
};