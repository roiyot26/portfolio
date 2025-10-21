#!/bin/bash

echo "🚀 Deploying to GitHub Pages..."

# 1. Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed. Exiting."
  exit 1
fi

# 2. Clean up and create gh-pages branch
echo "🗑️ Deleting existing gh-pages branch..."
git branch -D gh-pages 2>/dev/null

echo "🌿 Creating fresh gh-pages branch..."
git checkout --orphan gh-pages

# Remove all files from the new orphan branch
git rm -rf .

# 3. Copy built files and necessary assets
echo "📦 Copying built files..."
cp -r dist/* .

# Copy public assets directly to the root of gh-pages
if [ -d "public" ]; then
  cp -r public/* .
fi

# 4. Create a minimal .gitignore for the gh-pages branch
echo "📝 Creating .gitignore..."
echo "node_modules" > .gitignore
echo "dist" >> .gitignore
echo ".env" >> .gitignore
echo ".DS_Store" >> .gitignore
echo "npm-debug.log" >> .gitignore
echo "yarn-debug.log" >> .gitignore
echo "yarn-error.log" >> .gitignore
echo ".vscode" >> .gitignore
echo "*.log" >> .gitignore
echo "deploy.sh" >> .gitignore

# 5. Commit and push
echo "💾 Committing to gh-pages..."
git add .
git commit -m "Deploy to GitHub Pages - $(date)"

echo "🚀 Pushing to GitHub Pages..."
git push origin gh-pages --force

# 6. Switch back to main branch
echo "🔄 Switching back to main..."
git checkout main

echo "✅ Deployment complete!"
echo "🌐 Your portfolio is live at: https://roiyot26.github.io/portfolio/"
