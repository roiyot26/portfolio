import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  terminalText?: string
  fileName?: string
  codeSnippet?: string
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  terminalText, 
  fileName = 'terminal',
  codeSnippet 
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center space-x-4 bg-white dark:bg-dark-800 px-6 py-3 rounded-lg border border-gray-200 dark:border-dark-700 shadow-lg dark:shadow-dark-900/50">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 bg-red-500 dark:bg-red-400 rounded-full shadow-sm"></div>
            <div className="w-2.5 h-2.5 bg-yellow-500 dark:bg-yellow-400 rounded-full shadow-sm"></div>
            <div className="w-2.5 h-2.5 bg-green-500 dark:bg-green-400 rounded-full shadow-sm"></div>
          </div>
          <span className="text-xl font-mono font-semibold text-dark-800 dark:text-white">
            {terminalText ? (
              <>
                {terminalText.split(' ').map((word, index, array) => 
                  index === array.length - 1 ? (
                    <span key={index} className="text-gradient">{word}</span>
                  ) : (
                    <span key={index}>{word} </span>
                  )
                )}
              </>
            ) : (
              <span className="text-gradient">{title}</span>
            )}
          </span>
        </div>
      </div>
      
      {subtitle && (
        <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>
      )}
      
      {/* Terminal/Code snippet */}
      {(terminalText || codeSnippet) && (
        <div className="mt-8 max-w-sm sm:max-w-lg mx-auto px-4 sm:px-0">
          <div className="bg-gray-900 dark:bg-dark-900 rounded-lg border border-gray-700 dark:border-dark-700 overflow-hidden shadow-xl dark:shadow-dark-900/50">
            <div className="flex items-center bg-gray-800 dark:bg-dark-800 px-3 py-2 border-b border-gray-700 dark:border-dark-700">
              <div className="flex space-x-1.5 sm:space-x-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 dark:bg-red-400 rounded-full shadow-sm"></div>
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-500 dark:bg-yellow-400 rounded-full shadow-sm"></div>
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 dark:bg-green-400 rounded-full shadow-sm"></div>
              </div>
              <span className="text-xs text-gray-400 dark:text-dark-400 font-mono ml-3 sm:ml-4">{fileName}</span>
            </div>
            <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm bg-gray-900 dark:bg-dark-900">
              {codeSnippet ? (
                <div dangerouslySetInnerHTML={{ __html: codeSnippet }} />
              ) : (
                <div className="text-green-400 dark:text-green-400 mb-1">
                  <span className="text-blue-400 dark:text-blue-400">$</span> {terminalText}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}
