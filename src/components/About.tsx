import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Zap, Users } from 'lucide-react'

export const About = () => {
  const aboutRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((Entry) => {
          if (Entry.isIntersecting) {
            Entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: '3+', label: 'Years Experience', icon: Zap },
    { number: '50+', label: 'Projects Completed', icon: Code },
    { number: '99%', label: 'Client Satisfaction', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Palette },
  ]

  const skills = [
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Database Design', level: 88 },
  ]

  return (
    <section id="about" ref={aboutRef} className="animate-on-scroll section-container">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3 bg-dark-100 dark:bg-dark-800 px-4 py-2 rounded-lg border border-dark-200 dark:border-dark-700">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm font-mono text-dark-600 dark:text-dark-300"><span className="text-gradient">About</span> Me</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                I'm a passionate full-stack developer with a love for creating beautiful, 
                functional applications. With over 3 years of experience in web development, 
                I specialize in React, Node.js, and modern web technologies.
              </p>
              
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                My journey began with curiosity about how websites work, and it has evolved 
                into a career dedicated to solving real-world problems through code. I believe 
                in writing clean, maintainable code and creating user experiences that are both 
                beautiful and intuitive.
              </p>
              
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Skills Progress */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items center">
                    <span className="font-medium text-dark-700 dark:text-dark-200">{skill.name}</span>
                    <span className="text-primary-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-2 bg-gradient-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 hover:shadow-glow transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Subtle dev-themed background pattern */}
                  <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <span className="text-xs font-mono text-dark-400">{'</>'}</span>
                  </div>
                  
                  <stat.icon className="w-8 h-8 text-primary-600 mb-3 group-hover:scale-110 transition-transform duration-200" />
                  <div className="text-3xl font-bold text-gradient mb-1 font-mono">{stat.number}</div>
                  <div className="text-sm text-dark-600 dark:text-dark-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-primary text-white text-center space-y-4"
            >
              <h3 className="text-xl font-semibold">Ready to work together?</h3>
              <p className="text-white/90">
                Let's create something amazing that stands out from the crowd.
              </p>
              <button className="btn bg-white text-primary-600 hover:bg-white/90 px-6 py-2 rounded-lg font-semibold">
                Get In Touch
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
