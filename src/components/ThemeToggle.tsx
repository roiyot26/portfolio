import { Sun, Moon } from 'lucide-react'
import { useDarkMode } from '../hooks/useDarkMode'

interface ThemeToggleProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const ThemeToggle = ({ size = 'md', className }: ThemeToggleProps) => {
  const { isDarkMode, toggleDarkMode, mounted } = useDarkMode()

  const sizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3'
  }

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  }

  if (!mounted) {
    // Render a placeholder to prevent layout shift
    return (
      <div className={`${sizeClasses[size]} rounded-lg bg-dark-100 dark:bg-dark-800 transition-all duration-300 ${className}`}>
        <div className="w-5 h-5 animate-pulse bg-dark-300 dark:bg-dark-600 rounded"></div>
      </div>
    )
  }

  return (
    <button
      onClick={toggleDarkMode}
      className={`${sizeClasses[size]} rounded-lg bg-dark-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all duration-300 group relative overflow-hidden ${className}`}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-blue-900 dark:to-indigo-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      
      {/* Icon container with rotation */}
      <div className={`relative transition-transform duration-500 ${isDarkMode ? 'rotate-0' : 'rotate-180'}`}>
        <div className={`transition-all duration-500 ${isDarkMode ? 'opacity-100 scale-100' : 'opacity-0 scale-75 absolute'}`}>
          <Sun 
            size={iconSizes[size]} 
            className="text-orange-500 group-hover:rotate-12 group-hover:text-orange-400 transition-all duration-300" 
          />
        </div>
        
        <div className={`transition-all duration-500 ${!isDarkMode ? 'opacity-100 scale-100' : 'opacity-0 scale-75 absolute'}`}>
          <Moon 
            size={iconSizes[size]} 
            className="text-slate-700 dark:text-slate-300 group-hover:-rotate-12 group-hover:text-slate-500 dark:group-hover:text-slate-200 transition-all duration-300" 
          />
        </div>
      </div>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div className="absolute inset-0 scale-0 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 dark:from-blue-600 dark:to-indigo-600 opacity-20 group-active:scale-100 group-active:animate-ping transition-all duration-300" />
      </div>
    </button>
  )
}
