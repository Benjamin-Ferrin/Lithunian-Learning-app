import { Sun, Moon } from 'lucide-react';
import { getTheme, setTheme } from '@/lib/storage';
import { useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(getTheme() === 'dark');

  const toggle = () => {
    const next = dark ? 'light' : 'dark';
    setTheme(next);
    setDark(!dark);
  };

  return (
    <button
      onClick={toggle}
      className="p-2.5 rounded-xl bg-secondary text-secondary-foreground active:scale-90 transition-transform"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}