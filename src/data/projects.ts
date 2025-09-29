export interface Project {
  id: number
  title: string
  description: string
  longDescription?: string
  image: string
  images?: string[]
  technologies: string[]
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'design'
  status: 'completed' | 'in-progress' | 'planned'
  featured: boolean
  priority: number
  liveUrl?: string
  githubUrl?: string
  startDate: string
  endDate?: string
  collaborators?: string[]
  tags: string[]
  views: number
  likes: number
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, admin dashboard, and real-time inventory management.',
    longDescription: 'This comprehensive e-commerce platform provides a complete online shopping experience. Built with modern web technologies including React for the frontend, Node.js with Express for the backend, and MongoDB for data storage. The platform includes user authentication and authorization, secure payment processing via Stripe, comprehensive admin dashboard for inventory management, real-time order tracking, and responsive design for optimal user experience across all devices.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Express.js'],
    category: 'fullstack',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    startDate: '2024-01-15',
    endDate: '2024-03-20',
    featured: true,
    priority: 10,
    status: 'completed',
    tags: ['ecommerce', 'fullstack', 'react', 'node'],
    views: 1250,
    likes: 89,
    collaborators: ['Alex Johnson', 'Sarah Chen']
  },
    {
    id: 2,
    title: 'Task Management App',
    description: 'A modern task management application with drag-and-drop functionality, team collaboration features, and real-time updates.',
    longDescription: 'A comprehensive task management solution designed to streamline team productivity. Features include intuitive drag-and-drop interface for task organization, real-time collaboration capabilities, team workspaces, deadline tracking, file attachments, and priority management. Built with React and Socket.io for real-time updates.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL'],
    category: 'frontend',
    liveUrl: 'https://taskmanager-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/task-manager',
    startDate: '2024-02-01',
    endDate: '2024-04-15',
    featured: true,
    priority: 9,
    status: 'completed',
    tags: ['productivity', 'collaboration', 'real-time'],
    views: 980,
    likes: 72,
    collaborators: ['Mike Rodriguez']
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current conditions, forecasts, and interactive weather maps.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'TypeScript', 'Weather API', 'Chart.js', 'CSS3'],
    category: 'frontend',
    liveUrl: 'https://weather-dashboard-demo.com',
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    startDate: '2023-11-10',
    endDate: '2023-12-05',
    featured: false,
    priority: 6,
    status: 'completed',
    tags: ['weather', 'api', 'dashboard'],
    views: 756,
    likes: 45
  },
  {
    id: 4,
    title: 'Blog CMS',
    description: 'A content management system for blogging with markdown support, SEO optimization, and admin panel.',
    longDescription: 'A modern blog content management system built with Next.js and TypeScript. Features include markdown editing capabilities, SEO optimization tools, comprehensive admin panel for content management, tag and category organization, and responsive design.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    category: 'fullstack',
    liveUrl: 'https://blog-cms-demo.com',
    githubUrl: 'https://github.com/yourusername/blog-cms',
    startDate: '2023-09-15',
    endDate: '2023-11-30',
    featured: false,
    priority: 7,
    status: 'completed',
    tags: ['cms', 'blog', 'content'],
    views: 634,
    likes: 38
  },
  {
    id: 5,
    title: 'Mobile Banking App',
    description: 'A secure mobile banking application with biometric authentication, transaction history, and fund transfer capabilities.',
    longDescription: 'A secure mobile banking solution built with React Native. Features include biometric authentication for secure access, comprehensive transaction history, fund transfer capabilities, bill payment features, and real-time transaction notifications.',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'MongoDB', 'JWT', 'Secure APIs'],
    category: 'mobile',
    liveUrl: 'https://banking-app-demo.com',
    githubUrl: 'https://github.com/yourusername/banking-app',
    startDate: '2024-01-30',
    endDate: '2024-04-10',
    featured: true,
    priority: 8,
    status: 'completed',
    tags: ['mobile', 'banking', 'security', 'fintech'],
    views: 1180,
    likes: 95,
    collaborators: ['Emma Wilson', 'David Kim']
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing projects, skills, and personal information with smooth animations.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Vite'],
    category: 'frontend',
    liveUrl: 'https://portfolio-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/portfolio-v2',
    startDate: '2024-04-20',
    endDate: '2024-05-15',
    featured: false,
    priority: 5,
    status: 'completed',
    tags: ['portfolio', 'personal', 'design'],
    views: 520,
    likes: 28
  }
]

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured)
}

export const getProjectsByCategory = (category: string): Project[] => {
  return category === 'all' ? projects : projects.filter(project => project.category === category)
}

export const incrementProjectViews = (id: number): void => {
  const project = projects.find(p => p.id === id)
  if (project) {
    project.views++
  }
}

export const likeProject = (id: number): void => {
  const project = projects.find(p => p.id === id)
  if (project) {
    project.likes++
  }
}
