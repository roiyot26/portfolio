import { motion } from 'framer-motion'
import { 
  Code2, 
  Palette, 
  Database, 
  Cloud, 
  GitBranch
} from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { SectionHeader } from './SectionHeader'
import { fadeInUp, fadeInScale, viewportOnce } from '../utils/animations'

export const Skills = () => {
  const skillsRef = useIntersectionObserver()

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
      skills: ['CSS3', 'SCSS', 'HTML5', 'Responsive Design']
    },
    {
      title: 'Full-Stack Frameworks',
      icon: Cloud,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Ruby on Rails']
    }
  ]

  const technologies = [
    { name: 'React', svg: 'React.svg', color: 'blue', bgClass: 'bg-blue-50 dark:bg-blue-900/20', borderClass: 'border-blue-200 dark:border-blue-800/30', textClass: 'text-blue-700 dark:text-blue-300', delay: 0.1 },
    { name: 'JavaScript', svg: 'JavaScript.svg', color: 'yellow', bgClass: 'bg-yellow-50 dark:bg-yellow-900/20', borderClass: 'border-yellow-200 dark:border-yellow-800/30', textClass: 'text-yellow-700 dark:text-yellow-300', delay: 0.2 },
    { name: 'TypeScript', svg: 'TypeScript.svg', color: 'blue', bgClass: 'bg-blue-50 dark:bg-blue-900/20', borderClass: 'border-blue-200 dark:border-blue-800/30', textClass: 'text-blue-700 dark:text-blue-300', delay: 0.3 },
    { name: 'Node.js', svg: 'Node.js.svg', color: 'green', bgClass: 'bg-green-50 dark:bg-green-900/20', borderClass: 'border-green-200 dark:border-green-800/30', textClass: 'text-green-700 dark:text-green-300', delay: 0.4 },
    { name: 'MongoDB', svg: 'MongoDB.svg', color: 'emerald', bgClass: 'bg-emerald-50 dark:bg-emerald-900/20', borderClass: 'border-emerald-200 dark:border-emerald-800/30', textClass: 'text-emerald-700 dark:text-emerald-300', delay: 0.5 },
    { name: 'Mongoose.js', svg: 'Mongoose.js.svg', color: 'red', bgClass: 'bg-red-50 dark:bg-red-900/20', borderClass: 'border-red-200 dark:border-red-800/30', textClass: 'text-red-700 dark:text-red-300', delay: 0.6 },
    { name: 'Express', svg: 'Express.svg', color: 'slate', bgClass: 'bg-slate-50 dark:bg-slate-700/30', borderClass: 'border-slate-200 dark:border-slate-600/50', textClass: 'text-slate-700 dark:text-slate-200', delay: 0.7 },
    { name: 'HTML', svg: 'HTML5.svg', color: 'orange', bgClass: 'bg-orange-50 dark:bg-orange-900/20', borderClass: 'border-orange-200 dark:border-orange-800/30', textClass: 'text-orange-700 dark:text-orange-300', delay: 0.8 },
    { name: 'CSS3', svg: 'CSS3.svg', color: 'blue', bgClass: 'bg-blue-50 dark:bg-blue-900/20', borderClass: 'border-blue-200 dark:border-blue-800/30', textClass: 'text-blue-700 dark:text-blue-300', delay: 0.9 },
    { name: 'SCSS', svg: 'Sass.svg', color: 'pink', bgClass: 'bg-pink-50 dark:bg-pink-900/20', borderClass: 'border-pink-200 dark:border-pink-800/30', textClass: 'text-pink-700 dark:text-pink-300', delay: 1.0 },
    { name: 'Socket.io', svg: 'Socket.io.svg', color: 'indigo', bgClass: 'bg-indigo-50 dark:bg-indigo-700/30', borderClass: 'border-indigo-200 dark:border-indigo-600/50', textClass: 'text-indigo-700 dark:text-indigo-200', delay: 1.1 },
    { name: 'Redux', svg: 'Redux.svg', color: 'purple', bgClass: 'bg-purple-50 dark:bg-purple-900/20', borderClass: 'border-purple-200 dark:border-purple-800/30', textClass: 'text-purple-700 dark:text-purple-300', delay: 1.2 },
    { name: 'Vue.js', svg: 'Vue.js.svg', color: 'green', bgClass: 'bg-green-50 dark:bg-green-900/20', borderClass: 'border-green-200 dark:border-green-800/30', textClass: 'text-green-700 dark:text-green-300', delay: 1.3 },
    { name: 'Git', svg: 'Git.svg', color: 'orange', bgClass: 'bg-orange-50 dark:bg-orange-900/20', borderClass: 'border-orange-200 dark:border-orange-800/30', textClass: 'text-orange-700 dark:text-orange-300', delay: 1.5 },
    { name: 'AWS', svg: 'AWS.svg', color: 'orange', bgClass: 'bg-orange-50 dark:bg-orange-900/20', borderClass: 'border-orange-200 dark:border-orange-800/30', textClass: 'text-orange-700 dark:text-orange-300', delay: 1.6 },
    { name: 'Ruby on Rails', svg: 'Ruby on Rails.svg', color: 'red', bgClass: 'bg-red-50 dark:bg-red-900/20', borderClass: 'border-red-200 dark:border-red-800/30', textClass: 'text-red-700 dark:text-red-300', delay: 1.7 }
  ]


  return (
    <section id="skills" ref={skillsRef} className="animate-on-scroll section-container bg-dark-50 dark:bg-dark-800/50 transition-all duration-700">
      {/* Section Header */}
      <SectionHeader
        title="Skills"
        terminalText="My Skills"
        subtitle="A comprehensive overview of my technical expertise and the tools I use to bring ideas to life."
        fileName="terminal"
        codeSnippet='<div class="text-green-400 mb-1"><span class="text-blue-400">$</span> npm run skills</div>'
      />

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={viewportOnce}
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
          {...fadeInUp}
          viewport={viewportOnce}
          className="space-y-6"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Technology Stack</h3>
            <p className="text-dark-600 dark:text-dark-300">
              Technologies and frameworks I work with
            </p>
          </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  {...fadeInScale}
                  transition={{ duration: 0.5, delay: tech.delay }}
                  viewport={viewportOnce}
                  className="group"
                >
                  <div className={`p-4 rounded-xl ${tech.bgClass} border ${tech.borderClass} hover:shadow-lg transition-all duration-300 text-center`}>
                    <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={`svg/${tech.svg}`} alt={tech.name} className="w-8 h-8" />
                    </div>
                    <h4 className={`font-semibold ${tech.textClass} text-sm`}>{tech.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
        </motion.div>        
    </section>
  )
}