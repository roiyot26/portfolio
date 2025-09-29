# 🚀 Quick Setup Guide

This guide will help you get your portfolio website up and running in just a few steps!

## ✅ Prerequisites

Before you begin, make sure you have:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** installed

## ⚡ Quick Start (5 minutes)

### 1. Install Dependencies
```bash
# Navigate to your portfolio directory
cd portfolio

# Install all dependencies (root, frontend, backend)
npm run install:all
```

### 2. Setup Environment
```bash
# Copy the environment template
cp backend/.env.example backend/.env
```

Edit your `backend/.env` file:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portfolio
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your-super-secret-jwt-key-here-please-change-this
```

### 3. Start Development Server
```bash
# This will start both frontend and backend
npm run dev
```

### 4. Access Your Portfolio
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 🎨 Customize Your Portfolio

### Update Personal Information

1. **Hero Section** (`frontend/src/components/Hero.tsx`):
   ```tsx
   <span className="text-gradient">Your Name</span>
   <p className="text-lg sm:text-xl lg:text-2xl text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto leading-relaxed">
     Your title and brief description about yourself.
   </p>
   ```

2. **About Section** (`frontend/src/components/About.tsx`):
   - Update your bio
   - Modify skills percentages
   - Update statistics

3. **Skills Section** (`frontend/src/components/Skills.tsx`):
   - Add your technologies
   - Update skill categories
   - Modify proficiency percentages

4. **Projects Section** (`frontend/src/components/Projects.tsx`):
   - Replace placeholder projects with your actual projects
   - Update project details, URLs, and technologies

5. **Contact Section** (`frontend/src/components/Contact.tsx`):
   ```tsx
   value: 'your.email@example.com',
   href: 'mailto:your.email@example.com'
   ```

### Customize Colors and Styling

Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#your-color-50',
    500: '#your-brand-color',
    600: '#your-dark-color',
    // ... other shades
  }
}
```

## 🗄️ Optional: MongoDB Setup

### Option 1: Local MongoDB
If you have MongoDB installed locally, it should work out of the box with the default connection string.

### Option 2: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Update your `.env` file:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

## 🚀 Deployment Options

### Frontend Deployment

#### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Deploy automatically

#### Netlify
1. Push your code to GitHub
2. Connect your repo to Netlify
3. Set build command: `cd frontend && npm run build`
4. Set publish directory: `frontend-dist`

### Backend Deployment

#### Railway
1. Push your code to GitHub
2. Connect your repo to Railway
3. Set environment variables
4. Deploy automatically

#### Render
1. Push your code to GitHub
2. Create a new web service on Render
3. Connect your repo
4. Set environment variables
5. Deploy

## 📝 Admin Panel (Future)

Once deployed, you can:
1. Register an admin account using the API
2. Manage projects through the backend API
3. View contact messages from visitors
4. Update your profile information

## 🎯 Next Steps

1. **Replace Placeholder Content**: Update all the sample text with your actual information
2. **Add Your Projects**: Replace the sample projects with your real projects
3. **Upload Images**: Add your actual project images
4. **Customize Colors**: Update the color scheme to match your brand
5. **Deploy**: Choose a hosting platform and deploy your portfolio
6. **SEO**: Add meta tags and social media cards

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Kill processes using ports 3000 and 5000
npx kill-port 3000
npx kill-port 5000
```

### MongoDB Connection Issues
- Check if MongoDB is running: `brew services start mongodb-community`
- Verify your connection string in `.env`

### Build Errors
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
rm -rf frontend/node_modules frontend/package-lock.json
rm -rf backend/node_modules backend/package-lock.json
npm run install:all
```

## 🆘 Need Help?

- Check the main [README.md](./README.md) for detailed documentation
- Look at the browser console for any JavaScript errors
- Check the terminal for backend errors
- Make sure all environment variables are set correctly

## 🎉 You're Ready!

Your portfolio is now set up and ready for customization. Start by updating the content to reflect your personal brand and projects!
