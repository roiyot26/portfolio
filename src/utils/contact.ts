export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export const sendContactMessage = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // In a real implementation, you might:
  // 1. Send to an email service like EmailJS
  // 2. Send to a serverless function
  // 3. Send to a third-party service like Formspree
  
  // For now, we'll just simulate a successful response
  // In production, you would integrate with a real email service
  
  return {
    success: true,
    message: 'Thank you for your message! I\'ll get back to you soon.'
  }
}

export const validateContactForm = (data: ContactFormData): { isValid: boolean; errors: Partial<ContactFormData> } => {
  const errors: Partial<ContactFormData> = {}
  
  if (!data.name.trim()) {
    errors.name = 'Name is required'
  }
  
  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address'
  }
  
  if (!data.subject.trim()) {
    errors.subject = 'Subject is required'
  }
  
  if (!data.message.trim()) {
    errors.message = 'Message is required'
  } else if (data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters long'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}
