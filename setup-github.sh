#!/bin/bash
# Script to initialize git and push to GitHub repo: pharmacyguides-revamp

set -e

echo "🚀 Setting up PharmacyGuides project for GitHub..."

# Initialize git repo
echo "📦 Initializing git repository..."
git init

# Add all files (respects .gitignore)
echo "📝 Staging files..."
git add .

# First commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: PharmacyGuides LLC website revamp

- React + Vite + Tailwind CSS
- Responsive navigation with Dr. Sarah branding
- Study Guides catalog with direct Etsy links
- Industry Pivot roadmap (5-step career path)
- Mentorship intake form
- Resource library with search/filter
- SEO-optimized blog template
- Pharmacy-themed icons and visuals"

# Set branch to main
git branch -M main

echo ""
echo "✅ Git repository initialized and committed!"
echo ""
echo "Next steps:"
echo "1. Create a new private repository on GitHub:"
echo "   https://github.com/new"
echo "   Name: pharmacyguides-revamp"
echo "   Visibility: Private"
echo "   (Don't initialize with README, .gitignore, or license)"
echo ""
echo "2. After creating the repo, run:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/pharmacyguides-revamp.git"
echo "   git push -u origin main"
echo ""
echo "Or if you have GitHub CLI (gh) installed:"
echo "   gh repo create pharmacyguides-revamp --private --source=. --remote=origin --push"
