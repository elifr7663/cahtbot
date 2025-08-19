import { Inter, Roboto_Mono } from 'next/font/google';

// Use Inter as a replacement for Geist Sans
export const geistSans = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

// Use Roboto Mono as a replacement for Geist Mono
export const geistMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

// Tailwind theme colors for light mode
export const lightThemeColors = {
  background: '#ffffff',
  foreground: '#171717',
  card: '#ffffff',
  'card-foreground': '#171717',
  popover: '#ffffff',
  'popover-foreground': '#171717',
  primary: '#0284c7',
  'primary-foreground': '#ffffff',
  secondary: '#f3f4f6',
  'secondary-foreground': '#171717',
  muted: '#f3f4f6',
  'muted-foreground': '#6b7280',
  accent: '#f3f4f6',
  'accent-foreground': '#171717',
  destructive: '#ef4444',
  'destructive-foreground': '#ffffff',
  border: '#e5e7eb',
  input: '#e5e7eb',
  ring: '#0284c7',
};

// Tailwind theme colors for dark mode
export const darkThemeColors = {
  background: '#0a0a0a',
  foreground: '#ededed',
  card: '#171717',
  'card-foreground': '#ededed',
  popover: '#171717',
  'popover-foreground': '#ededed',
  primary: '#0ea5e9',
  'primary-foreground': '#171717',
  secondary: '#27272a',
  'secondary-foreground': '#ededed',
  muted: '#27272a',
  'muted-foreground': '#a1a1aa',
  accent: '#27272a',
  'accent-foreground': '#ededed',
  destructive: '#ef4444',
  'destructive-foreground': '#ffffff',
  border: '#27272a',
  input: '#27272a',
  ring: '#0ea5e9',
}; 