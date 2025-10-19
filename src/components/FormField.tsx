import { motion } from 'framer-motion'
import { fadeInY, viewportOnce } from '../utils/animations'

interface FormFieldProps {
  id: string
  name: string
  label: string
  type?: 'text' | 'email' | 'textarea'
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  placeholder?: string
  required?: boolean
  rows?: number
  delay?: number
}

export const FormField = ({ 
  id, 
  name, 
  label, 
  type = 'text', 
  value, 
  onChange, 
  error, 
  placeholder, 
  required = false,
  rows = 6,
  delay = 0
}: FormFieldProps) => {
  const inputClasses = `w-full px-4 py-3 border rounded-lg bg-white dark:bg-dark-900 text-dark-900 dark:text-white focus:outline-none transition-all duration-200 ${
    error 
      ? 'border-red-500 focus:ring-red-500' 
      : 'border-dark-200 dark:border-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent'
  }`

  return (
    <motion.div
      {...fadeInY}
      transition={{ duration: 0.5, delay }}
      viewport={viewportOnce}
    >
      <label htmlFor={id} className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          className={`${inputClasses} resize-vertical`}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClasses}
          placeholder={placeholder}
        />
      )}
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </motion.div>
  )
}

