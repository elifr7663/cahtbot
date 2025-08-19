'use client';

import { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from './ThemeRegistry';
import { Button } from '../ui/button';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full w-8 h-8 border-primary/20"
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4 text-primary" />
      ) : (
        <Sun className="h-4 w-4 text-primary" />
      )}
    </Button>
  );
} 