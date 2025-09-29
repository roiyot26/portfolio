import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    
    const initialTheme = savedTheme ? savedTheme === 'dark' : false // Default to light mode
    setIsDarkMode(initialTheme)
    
    // Apply theme to document
    if (initialTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode, mounted])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const setDarkMode = (dark: boolean) => {
    setIsDarkMode(dark)
  }

  return {
    isDarkMode,
    toggleDarkMode,
    setDarkMode,
    mounted // This prevents hydration mismatch by not rendering until mounted
  }
}
