import { motion } from 'framer-motion'
import { Code, Palette, Zap, Users, Music } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { SectionHeader } from './SectionHeader'

export const About = () => {
  const aboutRef = useIntersectionObserver()

  const stats = [
    { number: '3+', label: 'Years Experience', icon: Zap },
    { number: '10+', label: 'teams of students led to final fullstack projects', icon: Code },
    { number: '200+', label: 'Trained 200+ students in JavaScript, React, Node.js, and web fundamentals', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Palette },
  ]


  return (
    <section id="about" ref={aboutRef} className="animate-on-scroll section-container">
      {/* Section Header */}
      <SectionHeader
        title="About"
        terminalText="About Me"
        fileName="about.js"
        codeSnippet='<div class="text-green-400 mb-1"><span class="text-blue-400">const</span> developer = <span class="text-yellow-400">{</span></div><div class="text-white ml-4">name: <span class="text-green-400">&apos;Roi Yotvat&apos;</span>,</div><div class="text-white ml-4">experience: <span class="text-yellow-400">3+</span> years,</div><div class="text-white ml-4">passion: <span class="text-green-400">&apos;Full-Stack Development&apos;</span></div><div class="text-green-400"><span class="text-yellow-400">}</span>;</div>'
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-stretch">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 flex flex-col justify-between h-full"
          >
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none text-dark-600 dark:text-dark-300">
                <p className="text-lg leading-relaxed mb-4">
                  I'm a passionate full-stack developer with a love for creating beautiful, 
                  functional applications. With over 3 years of experience in web development, 
                  I specialize in React, Node.js, and modern web technologies.
                </p>
                
                <p className="text-lg leading-relaxed mb-4">
                  My journey began with curiosity about how websites work, and it has evolved 
                  into a career dedicated to solving real-world problems through code. I believe 
                  in writing clean, maintainable code and creating user experiences that are both 
                  beautiful and intuitive.
                </p>
                
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, playing volleyball, or practicing guitar skills.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <div className="p-6 rounded-xl bg-gradient-primary text-white text-center space-y-4 w-full">
                <h3 className="text-xl font-semibold">Ready to work together?</h3>
                <p className="text-white/90">
                  Let's create something amazing that stands out from the crowd.
                </p>
                <button 
                  onClick={() => {
                    const contactSection = document.querySelector('#contact')
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="btn bg-white text-primary-600 hover:bg-white/90 px-6 py-2 rounded-lg font-semibold"
                >
                  Get In Touch
                </button>
              </div>
            </motion.div>

          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 flex flex-col justify-between h-full"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 hover:shadow-glow transition-all duration-300 group relative overflow-hidden min-h-[140px] flex flex-col justify-between"
                >
                  {/* Subtle dev-themed background pattern */}
                  <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <span className="text-xs font-mono text-dark-400">{'</>'}</span>
                  </div>
                  
                  <div className="flex-1">
                    <stat.icon className="w-8 h-8 text-primary-600 mb-3 group-hover:scale-110 transition-transform duration-200" />
                    <div className="text-4xl font-bold text-gradient mb-2 font-mono">{stat.number}</div>
                    <div className="text-base font-semibold text-dark-700 dark:text-dark-200 leading-relaxed">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* What I Do Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                {/* Coding */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800/30 hover:shadow-lg transition-all duration-300 text-center">
                    {/* Terminal-style background */}
                    <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 mx-auto mb-3 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1">Code</h4>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-mono">
                        Building apps
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Volleyball */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800/30 hover:shadow-lg transition-all duration-300 text-center">
                    {/* Sports-style background */}
                    <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <div className="w-4 h-4 border-2 border-green-500 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 mx-auto mb-3 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {/* Custom Volleyball Icon */}
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor"/>
                          <path d="M12 2c-2.76 0-5.2 1.2-6.9 3.1L12 12V2z" fill="white" opacity="0.3"/>
                          <path d="M12 12l6.9-6.9C17.2 3.2 14.76 2 12 2v10z" fill="white" opacity="0.2"/>
                          <path d="M12 12l-6.9 6.9C3.2 17.2 2 14.76 2 12h10z" fill="white" opacity="0.2"/>
                          <path d="M12 12l6.9 6.9C20.8 17.2 22 14.76 22 12H12z" fill="white" opacity="0.3"/>
                          <path d="M12 12l-6.9-6.9C3.2 6.8 2 9.24 2 12h10z" fill="white" opacity="0.1"/>
                          <path d="M12 12l6.9-6.9C20.8 6.8 22 9.24 22 12H12z" fill="white" opacity="0.1"/>
                        </svg>
                      </div>
                      <h4 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">Volleyball</h4>
                      <p className="text-xs text-green-600 dark:text-green-400 font-mono">
                        Team spirit
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Music */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800/30 hover:shadow-lg transition-all duration-300 text-center">
                    {/* Music-style background */}
                    <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <div className="flex space-x-1">
                        <div className="w-1 h-2 bg-purple-500 rounded-full"></div>
                        <div className="w-1 h-3 bg-purple-500 rounded-full"></div>
                        <div className="w-1 h-1.5 bg-purple-500 rounded-full"></div>
                        <div className="w-1 h-4 bg-purple-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 mx-auto mb-3 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Music className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-1">Music</h4>
                      <p className="text-xs text-purple-600 dark:text-purple-400 font-mono">
                        Guitar & melodies
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
    </section>
  )
}
