import { Sun, Moon } from 'lucide-react';

export default function ThemeToggleIcon() {
  return (
    <>
      <Sun size={18} className="hidden text-amber-500 dark:block" />
      <Moon size={18} className="block text-indigo-600 dark:hidden" />
    </>
  );
}
