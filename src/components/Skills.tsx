import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Palette, 
  Database, 
  Smartphone, 
  Cloud, 
  GitBranch,
  ShieldCheck
} from 'lucide-react'

export const Skills = () => {
  const skillsRef = useRef<HTMLElement>(null)

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      skills: ['React', 'TypeScript', 'Vue.js', 'HTML5', 'CSS3', 'SCSS']
    },
    {
      title: 'Backend Development', 
      icon: Database,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      skills: ['Node.js', 'Express', 'MongoDB', 'Mongoose.js', 'Socket.io', 'Ruby on Rails']
    },
    {
      title: 'JavaScript Ecosystem',
      icon: Code2,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      skills: ['JavaScript', 'TypeScript', 'React', 'Redux', 'Vite.js', 'Node.js']
    },
    {
      title: 'Development Tools',
      icon: GitBranch,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      skills: ['Git', 'AWS', 'Vite.js', 'Socket.io', 'Express', 'MongoDB']
    },
    {
      title: 'Styling & Design',
      icon: Palette,
      color: 'text-pink-500',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      skills: ['CSS3', 'SCSS', 'HTML5', 'React', 'Vue.js', 'Responsive Design']
    },
    {
      title: 'Full-Stack Frameworks',
      icon: Cloud,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Ruby on Rails']
    }
  ]


  return (
    <section id="skills" ref={skillsRef} className="animate-on-scroll section-container bg-dark-50 dark:bg-dark-800/50 transition-all duration-700">
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
              <span className="text-sm font-mono text-dark-600 dark:text-dark-300">My <span className="text-gradient">Skills</span></span>
            </div>
          </div>
          
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
          
          {/* Dev-themed terminal output */}
          <div className="mt-8 max-w-sm sm:max-w-lg mx-auto px-4 sm:px-0">
            <div className="bg-dark-900 dark:bg-dark-800 rounded-lg border border-dark-700 dark:border-dark-600 overflow-hidden">
              <div className="flex items-center bg-dark-800 dark:bg-dark-700 px-3 py-2 border-b border-dark-700 dark:border-dark-600">
                <div className="flex space-x-1 sm:space-x-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs text-dark-400 font-mono ml-2 sm:ml-3">terminal</span>
              </div>
              <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm">
                <div className="text-green-400 mb-1">
                  <span className="text-blue-400">$</span> npm run skills
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl ${category.bgColor} border border-dark-200 dark:border-dark-700 hover:shadow-lg transition-all duration-300 group`}
            >
              <category.icon className={`w-12 h-12 ${category.color} mb-4 group-hover:scale-110 transition-transform duration-200`} />
              <h3 className="text-xl font-semibold mb-4 text-dark-900 dark:text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white dark:bg-dark-800 text-sm font-medium text-dark-700 dark:text-dark-300 rounded-full border border-dark-200 dark:border-dark-600 font-mono hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Technology Stack</h3>
            <p className="text-dark-600 dark:text-dark-300">
              Technologies and frameworks I work with
            </p>
          </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* React */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/svg/React.svg" alt="React" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">React</h4>
              </div>
            </motion.div>

            {/* JavaScript */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-4 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/30 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/svg/JavaScript.svg" alt="JavaScript" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 text-sm">JavaScript</h4>
              </div>
            </motion.div>

            {/* TypeScript */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/svg/TypeScript.svg" alt="TypeScript" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">TypeScript</h4>
              </div>
            </motion.div>

            {/* Node.js */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/svg/Node.js.svg" alt="Node.js" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 text-sm">Node.js</h4>
              </div>
            </motion.div>

            {/* MongoDB */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/svg/MongoDB.svg" alt="MongoDB" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 text-sm">MongoDB</h4>
              </div>
            </motion.div>

            {/* Mongoose.js */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/svg/Mongoose.js.svg" alt="Mongoose.js" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-red-700 dark:text-red-300 text-sm">Mongoose.js</h4>
              </div>
            </motion.div>

            {/* Express */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800/30 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/svg/Express.svg" alt="Express" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 text-sm">Express</h4>
              </div>
            </motion.div>

            {/* HTML */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/30 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/svg/HTML5.svg" alt="HTML" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 text-sm">HTML</h4>
              </div>
            </motion.div>

            {/* CSS3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/svg/CSS3.svg" alt="CSS3" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">CSS3</h4>
              </div>
            </motion.div>

            {/* SCSS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-4 rounded-xl bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800/30 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/svg/Sass.svg" alt="SCSS" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-pink-700 dark:text-pink-300 text-sm">SCSS</h4>
              </div>
            </motion.div>

            {/* Socket.io */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/30 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/svg/Socket.io.svg" alt="Socket.io" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">Socket.io</h4>
              </div>
            </motion.div>

            {/* Redux */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800/30 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/svg/Redux.svg" alt="Redux" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Redux</h4>
              </div>
            </motion.div>

            {/* Vue.js */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/svg/Vue.js.svg" alt="Vue.js" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 text-sm">Vue.js</h4>
              </div>
            </motion.div>


            {/* Git */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/30 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/svg/Git.svg" alt="Git" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Git</h4>
              </div>
            </motion.div>

            {/* AWS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/30 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/svg/AWS.svg" alt="AWS" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 text-sm">AWS</h4>
              </div>
            </motion.div>

            {/* Ruby on Rails */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.7 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/svg/Ruby on Rails.svg" alt="Ruby on Rails" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-red-700 dark:text-red-300 text-sm">Ruby on Rails</h4>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <ShieldCheck className="w-8 h-8 text-primary-600" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Certifications & Achievements</h3>
                <p className="text-dark-600 dark:text-dark-300">
                  AWS Certified Developer, Google Cloud Professional, React Specialist
                </p>
              </div>
            </div>
            
            <button className="btn btn-primary px-6 py-2">
              View Certificates
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}