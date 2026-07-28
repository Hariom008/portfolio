# Portfolio Deployment Guide

## Quick Deployment Options

### Option 1: Netlify Drop (Easiest - 2 minutes)
1. Go to https://app.netlify.com/drop
2. Drag and drop your `index.html` file
3. Get an instant public URL like: `https://random-name-123.netlify.app`
4. You can customize the URL in Netlify settings

### Option 2: GitHub Pages (Free & Permanent)
1. Create a new repository on GitHub (e.g., `portfolio` or `hariom-dhakulkar-portfolio`)
2. Push your code:
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
3. Go to repository Settings > Pages
4. Select `main` branch and `/ (root)` folder
5. Your site will be at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Option 3: Vercel (Fast & Easy)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Get instant deployment URL

### Option 4: Surge.sh (Command Line)
1. Install: `npm install -g surge`
2. Run: `surge`
3. Follow prompts to deploy

## Recommended: Netlify Drop
For the fastest deployment, use Netlify Drop - no account needed, just drag and drop!

