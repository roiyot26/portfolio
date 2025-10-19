import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/roiyot26', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/roi-yotvat-874ba9209', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:roiyot261098@gmail.com', label: 'Email' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-dark-200 dark:border-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RY</span>
              </div>
              <span className="text-xl font-bold text-gradient">Roi Yotvat</span>
            </div>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
              Creating beautiful, functional applications that make a difference in people's lives.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-dark-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-dark-900 dark:text-white">Services</h3>
            <ul className="space-y-3 text-dark-600 dark:text-dark-300">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
              <li>Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-dark-900 dark:text-white">Get In Touch</h3>
            <div className="space-y-3 text-dark-600 dark:text-dark-300">
              <p>Let's work together to create something amazing.</p>
              <div className="space-y-2">
                <p className="text-sm">roiyot261098@gmail.com</p>
                <p className="text-sm">
                +972 (50) 639-8845</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-200 dark:border-dark-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-dark-600 dark:text-dark-300">
              <span>&copy; {currentYear}</span>
              <span>Roi Yotvat.</span>
              <span>All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-1 text-dark-600 dark:text-dark-300">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current animate-pulse" />
              <span>and lots of coffee ☕</span>
            </div>
          </div>

          {/* Additional Links */}
          
        </div>
      </div>
    </footer>
  )
}
