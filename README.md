# TradeHybrid Publishing Studio

Publishing dashboard for **Jamaur Johnson** — New School New Money Ent.

Manage, publish, and market all 7 books from one place.

## Features
- **Dashboard** — All books at a glance with quick-action shortcuts
- **Book Library** — Complete metadata, keywords, descriptions, file status
- **Publishing Hub** — Step-by-step guides for Amazon KDP, Draft2Digital (40+ stores), Gumroad
- **AI Marketing Generator** — Claude-powered social posts, ad copy, email sequences

## Quick Deploy

```bash
# 1. Install
npm install

# 2. Deploy to Vercel
npx vercel --yes

# 3. Add API key (for marketing generator)
npx vercel env add ANTHROPIC_API_KEY production
```

## Environment Variables

| Variable | Purpose |
|---|---|
| `ANTHROPIC_API_KEY` | Powers the AI marketing generator |
| `D2D_API_TOKEN` | Draft2Digital auto-publish (optional) |
| `GUMROAD_ACCESS_TOKEN` | Gumroad auto-listings (optional) |

## Tech Stack
Next.js 14 · TypeScript · Tailwind CSS · Claude API · Vercel

## Books
1. Atomic Habits for Traders — Trade Hybrid
2. Trade Hybrid: Beat the Markets — Trade Hybrid
3. Trading in the Vortex: Inner Game — Trade Hybrid
4. Awakening to Source — LIV8 LLC
5. The Space In Between — LIV8 LLC
6. Synchronicity — LIV8 LLC
7. The Last Verifiable Year — LIV8 LLC
