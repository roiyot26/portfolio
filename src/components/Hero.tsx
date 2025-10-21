import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" ref={heroRef} className="animate-on-scroll min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-primary-900/20 transition-all duration-700" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200 dark:bg-primary-800/30 rounded-full blur-3xl animate-pulse transition-all duration-700" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200 dark:bg-blue-800/30 rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-700" />
      </div>

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Dev Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              {/* Terminal-style container */}
              <div className="w-36 h-28 sm:w-40 sm:h-32 md:w-48 md:h-36 bg-dark-900 dark:bg-dark-800 rounded-lg border-2 border-dark-700 dark:border-dark-600 shadow-2xl overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center bg-dark-800 dark:bg-dark-700 px-2 sm:px-3 py-1.5 sm:py-2 border-b border-dark-700 dark:border-dark-600">
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-dark-400 font-mono">terminal</span>
                  </div>
                </div>
                
                {/* Terminal content */}
                <div className="p-2 sm:p-4 h-full flex flex-col justify-center">
                  <div className="text-green-400 font-mono text-xs sm:text-sm mb-1 sm:mb-2">
                    <span className="text-blue-400">$</span> whoami
                  </div>
                  <div className="text-white font-mono text-sm sm:text-lg md:text-xl font-bold">
                    <span className="text-gradient">Roi Yotvat</span>
                  </div>
                  <div className="text-green-400 font-mono text-xs sm:text-sm mt-1 sm:mt-2">
                   <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
              
              {/* Floating code elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
                {'</>'}
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
                {'{}'}
              </div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-dark-900 dark:text-white">Hi, I'm </span>
            <span className="text-gradient">Roi Yotvat</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg sm:text-xl lg:text-2xl text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Full-Stack Developer passionate about creating beautiful, 
            functional applications that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12"
          >
            <button 
              onClick={scrollToProjects}
              className="btn btn-primary px-8 py-3 text-lg font-semibold rounded-xl shadow-glow hover:shadow-none transition-all duration-300"
            >
              View My Work
            </button>
            
            <a 
              href="Roi_Yotvat_cv.pdf" 
              download="Roi_Yotvat_cv.pdf"
              className="btn btn-secondary px-8 py-3 text-lg font-semibold rounded-xl border-2 hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex items-center justify-center space-x-6 mb-8"
          >
            <a
              href="https://github.com/roiyot26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 group"
            >
              <Github size={24} />
            </a>
            
            <a
              href="https://linkedin.com/in/roi-yotvat-874ba9209"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 group"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:roiyot261098@gmail.com"
              className="p-3 rounded-full bg-dark-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 group"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            onClick={scrollToAbout}
            className="group absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
          >
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <ArrowDown size={24} className="animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
