import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { sendContactMessage, validateContactForm, ContactFormData } from '../utils/contact'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { SectionHeader } from './SectionHeader'
import { FormField } from './FormField'
import { fadeInLeft, fadeInRight, fadeInY, viewportOnce } from '../utils/animations'

export const Contact = () => {
  const contactRef = useIntersectionObserver()
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState<Partial<ContactFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    const validation = validateContactForm(formData)
    if (!validation.isValid) {
      setFormErrors(validation.errors)
      return
    }
    
    setIsSubmitting(true)
    setFormErrors({})
    
    try {
      const result = await sendContactMessage(formData)
      
      if (result.success) {
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' })
        // You could use a toast notification library instead
        alert(result.message)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (formErrors[name as keyof ContactFormData]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'roiyot261098@gmail.com',
      href: 'mailto:roiyot261098@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+972 (50) 639-8845',
      href: 'tel:+972506398845'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Israel',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/roiyot26',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/roi-yotvat-874ba9209',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <section id="contact" ref={contactRef} className="animate-on-scroll section-container bg-gradient-to-br from-primary-50 to-blue-50 dark:from-dark-900 dark:to-primary-900/20 transition-all duration-700">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          title="Contact"
          terminalText="Get In Touch"
          subtitle="Have a project in mind? Let's collaborate and create something amazing together."
          fileName="contact.js"
          codeSnippet='<div class="text-green-400 mb-1"><span class="text-blue-400">const</span> contact = <span class="text-yellow-400">{</span></div><div class="text-white ml-4">email: <span class="text-green-400">&apos;roiyot261098@gmail.com&apos;</span>,</div><div class="text-white ml-4">phone: <span class="text-green-400">&apos;+972 (50) 639-8845&apos;</span>,</div><div class="text-white ml-4">status: <span class="text-green-400">&apos;Available for projects&apos;</span></div><div class="text-green-400"><span class="text-yellow-400">}</span>;</div>'
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            {...fadeInLeft}
            viewport={viewportOnce}
            className="space-y-8 flex flex-col justify-between h-full"
          >
            <h3 className="text-2xl font-semibold mb-6">Let's connect!</h3>
            
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 hover:shadow-lg hover:border-primary-300 transition-all duration-300 group"
                >
                  <info.icon className="w-6 h-6 text-primary-600 mr-4 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <div className="text-sm text-dark-500 dark:text-dark-400">{info.label}</div>
                    <div className="font-medium text-dark-900 dark:text-white group-hover:text-primary-600 transition-colors duration-200">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-3 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-600 dark:text-dark-300 ${social.color} hover:shadow-lg transition-all duration-300 group`}
                  >
                    <social.icon size={24} className="group-hover:scale-110 transition-transform duration-200" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-primary text-white"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">Currently Available</h4>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <p className="text-white/90">
                I'm open to discussing new opportunities and exciting projects.
              </p>
            </motion.div>

          </motion.div>

          {/* Contact Form */}
          <motion.form
            {...fadeInRight}
            viewport={viewportOnce}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-dark-800 p-8 rounded-2xl border border-dark-200 dark:border-dark-700 shadow-lg h-full flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            
            <div className="flex-1 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  id="name"
                  name="name"
                  label="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  error={formErrors.name}
                  placeholder="Your full name"
                />
                <FormField
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  delay={0.1}
                />
              </div>

              <FormField
                id="subject"
                name="subject"
                label="Subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
                delay={0.2}
              />

              <FormField
                id="message"
                name="message"
                label="Message"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                required
                delay={0.3}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              {...fadeInY}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={viewportOnce}
              className="btn btn-primary w-full py-3 text-lg font-semibold rounded-xl shadow-glow hover:shadow-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Send size={20} className="mr-2" />
                  Send Message
                </div>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
