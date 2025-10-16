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
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'SASS']
    },
    {
      title: 'Backend Development', 
      icon: Database,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Prototyping', 'Wireframing']
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'PWA', 'Responsive Design']
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Nginx', 'Linux']
    },
    {
      title: 'Tools & Others',
      icon: GitBranch,
      color: 'text-gray-500',
      bgColor: 'bg-gray-50 dark:bg-gray-900/20',
      skills: ['Git', 'GitHub', 'VS Code', 'Jest', 'Webpack', 'REST API']
    }
  ]

  const technologies = [
    { name: 'React', percentage: 95 },
    { name: 'TypeScript', percentage: 90 },
    { name: 'Node.js', percentage: 88 },
    { name: 'MongoDB', percentage: 85 },
    { name: 'PostgreSQL', percentage: 82 },
    { name: 'AWS', percentage: 75 },
    { name: 'Docker', percentage: 70 },
    { name: 'React Native', percentage: 65 },
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
              <span className="text-sm font-mono text-dark-600 dark:text-dark-300">skills.json</span>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
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
                <div className="text-white mb-1">
                  <span className="text-yellow-400">✓</span> Frontend: React, TypeScript, Next.js
                </div>
                <div className="text-white mb-1">
                  <span className="text-yellow-400">✓</span> Backend: Node.js, Express, MongoDB
                </div>
                <div className="text-white">
                  <span className="text-yellow-400">✓</span> Tools: Git, Docker, AWS
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

        {/* Technology Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Technology Proficiency</h3>
            <p className="text-dark-600 dark:text-dark-300">
              Level of expertise with various technologies and frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  {/* Circular Progress */}
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="100"
                      strokeLinecap="round"
                      className="text-dark-200 dark:text-dark-700"
                    />
                    <motion.path
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="text-primary-600"
                      initial={{ strokeDasharray: '0 100' }}
                      whileInView={{ strokeDasharray: `${tech.percentage} ${100 - tech.percentage}` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-dark-900 dark:text-white">
                      {tech.percentage}%
                    </span>
                  </div>
                </div>
                <h4 className="font-semibold text-dark-900 dark:text-white">{tech.name}</h4>
              </motion.div>
            ))}
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