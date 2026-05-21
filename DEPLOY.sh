#!/bin/bash
# ─────────────────────────────────────────────────────────
#  TradeHybrid Publishing Studio — One-Shot Setup
#  Run this once from the project folder in Terminal.
#  Requires: Node.js, npm, a GitHub account, a Vercel account
# ─────────────────────────────────────────────────────────
set -e

REPO_NAME="tradehybrid-publishing"
GITHUB_USER=""   # ← fill in your GitHub username

echo ""
echo "┌─────────────────────────────────────────────────┐"
echo "│   TradeHybrid Publishing Studio — Setup         │"
echo "└─────────────────────────────────────────────────┘"
echo ""

# 1. Install dependencies
echo "▸ Installing dependencies..."
npm install
echo "  ✓ Dependencies installed"

# 2. Git setup
echo "▸ Setting up git..."
git init
git branch -M main
git add -A
git commit -m "feat: TradeHybrid Publishing Studio — initial deploy" 2>/dev/null || echo "  (already committed)"
echo "  ✓ Git ready"

# 3. GitHub
echo ""
echo "▸ Pushing to GitHub..."
echo "  To create the GitHub repo, run ONE of these:"
echo ""
echo "  OPTION A — GitHub CLI (recommended):"
echo "  gh repo create $REPO_NAME --public --source=. --remote=origin --push"
echo ""
echo "  OPTION B — Manual:"
echo "  1. Go to github.com/new"
echo "  2. Name: $REPO_NAME | Public | No README"
echo "  3. Copy the SSH/HTTPS URL, then run:"
echo "     git remote add origin <YOUR_URL>"
echo "     git push -u origin main"
echo ""

# 4. Vercel
echo "▸ Deploying to Vercel..."
echo "  Run this command (installs Vercel CLI and deploys):"
echo ""
echo "  npx vercel --yes"
echo ""
echo "  This will:"
echo "  • Link to your Vercel account (browser login)"
echo "  • Deploy instantly — you'll get a live URL"
echo "  • Future pushes to main auto-deploy via git integration"
echo ""
echo "▸ After deploy, add your environment variable:"
echo "  npx vercel env add ANTHROPIC_API_KEY production"
echo "  (paste your Anthropic API key when prompted)"
echo ""
echo "──────────────────────────────────────────────────"
echo "  Done! Your publishing studio will be live at:"
echo "  https://tradehybrid-publishing.vercel.app"
echo "──────────────────────────────────────────────────"
