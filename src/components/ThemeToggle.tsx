import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[1000] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-xl"
      aria-label="Toggle theme"
      style={{ transform: 'translateZ(0)' }} // Force GPU acceleration
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-accent" />
      ) : (
        <Moon className="w-5 h-5 text-accent" />
      )}
    </button>
  );
};

export default ThemeToggle;