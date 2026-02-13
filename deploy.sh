#!/bin/bash

echo "🚀 Starting KRONOS Deployment..."

# 1. Update vite.config.ts with base path
echo "📝 Updating vite.config.ts..."
if ! grep -q "base:" vite.config.ts; then
    sed -i '/export default defineConfig({/a\  base: "/KRONOS/",' vite.config.ts
    echo "✅ Base path added to vite.config.ts"
else
    echo "✅ Base path already exists"
fi

# 2. Install dependencies
echo "📦 Installing dependencies..."
npm install

# 3. Install gh-pages
echo "📦 Installing gh-pages..."
npm install --save-dev gh-pages

# 4. Add deploy script to package.json
echo "📝 Adding deploy script..."
npm pkg set scripts.deploy="gh-pages -d dist"

# 5. Build the project
echo "🔨 Building project..."
npm run build

# 6. Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🌐 Now go to GitHub Settings > Pages and select 'gh-pages' branch"
echo "🔗 Your site will be at: https://aryan-cloud-arch.github.io/KRONOS/"
