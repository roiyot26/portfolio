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
    title: 'WEBzone Website Builder',
    description: 'A comprehensive website builder platform that allows users to create, customize, and publish websites with drag-and-drop functionality, real-time collaboration, and media integration.',
    longDescription: 'WEBzone is a dynamic platform for creating, sharing, and exploring user-generated content. It features a sophisticated website builder with drag-and-drop interface, real-time collaboration tools, customizable templates, and media management. The platform integrates various media types and interactive elements, allowing users to build portfolio sites, blogs, or business websites. Built with React.js frontend, Node.js backend, MongoDB database, and Socket.io for real-time features.',
    image: '/images/webzoneHero.png',
    images: ['/images/webzoneHero.png'],
    technologies: ['React.js', 'SCSS', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    category: 'fullstack',
    liveUrl: 'https://webzone.onrender.com/',
    githubUrl: 'https://github.com/roiyot26/WEBzone_frontend',
    startDate: '2024-08-01',
    endDate: '2024-11-15',
    featured: true,
    priority: 13,
    status: 'completed',
    tags: ['website-builder', 'fullstack', 'react', 'collaboration', 'responsive'],
    views: 2450,
    likes: 156,
    collaborators: ['Roi Yotvat']
  },
  {
    id: 7,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing my projects, skills, and professional experience. Features smooth animations, dark/light mode toggle, and interactive elements.',
    longDescription: 'A comprehensive portfolio website built with React, TypeScript, and Vite. Features include smooth Framer Motion animations, responsive design with Tailwind CSS, dark/light mode toggle, interactive project showcase, contact form, and optimized performance. The site demonstrates modern web development practices and showcases my technical skills and design capabilities.',
    image: '/images/portfolio.png',
    images: ['/images/portfolio.png'],
    technologies: ['React', 'TypeScript', 'Vite',  'Tailwind CSS',],
    category: 'frontend',
    liveUrl: '', // Will be updated when you provide the link
    githubUrl: '', // Will be updated when you provide the link
    startDate: '2024-12-01',
    endDate: '2024-12-16',
    featured: true,
    priority: 12,
    status: 'completed',
    tags: ['portfolio', 'personal', 'design', 'responsive', 'animations'],
    views: 0,
    likes: 0,
    collaborators: ['Roi Yotvat']
  },
  // {
  //   id: 2,
  //   title: 'E-Commerce Platform',
  //   description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, admin dashboard, and real-time inventory management.',
  //   longDescription: 'This comprehensive e-commerce platform provides a complete online shopping experience. Built with modern web technologies including React for the frontend, Node.js with Express for the backend, and MongoDB for data storage. The platform includes user authentication and authorization, secure payment processing via Stripe, comprehensive admin dashboard for inventory management, real-time order tracking, and responsive design for optimal user experience across all devices.',
  //   image: '/api/placeholder/600/400',
  //   technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Express.js'],
  //   category: 'fullstack',
  //   liveUrl: 'https://ecommerce-demo.vercel.app',
  //   githubUrl: 'https://github.com/roiyot26/ecommerce-platform',
  //   startDate: '2024-01-15',
  //   endDate: '2024-03-20',
  //   featured: true,
  //   priority: 10,
  //   status: 'completed',
  //   tags: ['ecommerce', 'fullstack', 'react', 'node'],
  //   views: 1250,
  //   likes: 89,
  //   collaborators: ['Alex Johnson', 'Sarah Chen']
  // },
  //   {
  //   id: 3,
  //   title: 'Task Management App',
  //   description: 'A modern task management application with drag-and-drop functionality, team collaboration features, and real-time updates.',
  //   longDescription: 'A comprehensive task management solution designed to streamline team productivity. Features include intuitive drag-and-drop interface for task organization, real-time collaboration capabilities, team workspaces, deadline tracking, file attachments, and priority management. Built with React and Socket.io for real-time updates.',
  //   image: '/api/placeholder/600/400',
  //   technologies: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL'],
  //   category: 'frontend',
  //   liveUrl: 'https://taskmanager-demo.netlify.app',
  //   githubUrl: 'https://github.com/roiyot26/task-manager',
  //   startDate: '2024-02-01',
  //   endDate: '2024-04-15',
  //   featured: true,
  //   priority: 9,
  //   status: 'completed',
  //   tags: ['productivity', 'collaboration', 'real-time'],
  //   views: 980,
  //   likes: 72,
  //   collaborators: ['Mike Rodriguez']
  // },
  // {
  //   id: 4,
  //   title: 'Weather Dashboard',
  //   description: 'A responsive weather dashboard that displays current conditions, forecasts, and interactive weather maps.',
  //   image: '/api/placeholder/600/400',
  //   technologies: ['React', 'TypeScript', 'Weather API', 'Chart.js', 'CSS3'],
  //   category: 'frontend',
  //   liveUrl: 'https://weather-dashboard-demo.com',
  //   githubUrl: 'https://github.com/roiyot26/weather-dashboard',
  //   startDate: '2023-11-10',
  //   endDate: '2023-12-05',
  //   featured: false,
  //   priority: 6,
  //   status: 'completed',
  //   tags: ['weather', 'api', 'dashboard'],
  //   views: 756,
  //   likes: 45
  // },
  // {
  //   id: 5,
  //   title: 'Blog CMS',
  //   description: 'A content management system for blogging with markdown support, SEO optimization, and admin panel.',
  //   longDescription: 'A modern blog content management system built with Next.js and TypeScript. Features include markdown editing capabilities, SEO optimization tools, comprehensive admin panel for content management, tag and category organization, and responsive design.',
  //   image: '/api/placeholder/600/400',
  //   technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
  //   category: 'fullstack',
  //   liveUrl: 'https://blog-cms-demo.com',
  //   githubUrl: 'https://github.com/roiyot26/blog-cms',
  //   startDate: '2023-09-15',
  //   endDate: '2023-11-30',
  //   featured: false,
  //   priority: 7,
  //   status: 'completed',
  //   tags: ['cms', 'blog', 'content'],
  //   views: 634,
  //   likes: 38
  // },
  // {
  //   id: 6,
  //   title: 'Mobile Banking App',
  //   description: 'A secure mobile banking application with biometric authentication, transaction history, and fund transfer capabilities.',
  //   longDescription: 'A secure mobile banking solution built with React Native. Features include biometric authentication for secure access, comprehensive transaction history, fund transfer capabilities, bill payment features, and real-time transaction notifications.',
  //   image: '/api/placeholder/600/400',
  //   technologies: ['React Native', 'TypeScript', 'Node.js', 'MongoDB', 'JWT', 'Secure APIs'],
  //   category: 'mobile',
  //   liveUrl: 'https://banking-app-demo.com',
  //   githubUrl: 'https://github.com/roiyot26/banking-app',
  //   startDate: '2024-01-30',
  //   endDate: '2024-04-10',
  //   featured: true,
  //   priority: 8,
  //   status: 'completed',
  //   tags: ['mobile', 'banking', 'security', 'fintech'],
  //   views: 1180,
  //   likes: 95,
  //   collaborators: ['Emma Wilson', 'David Kim']
  // }
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
