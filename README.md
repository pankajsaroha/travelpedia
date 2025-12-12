# Travelpedia

Content-first static site starter built with Astro + Tailwind for Travelpedia.
Includes:
- Markdown-based city content in `src/content/cities`
- City pages at `/city/[slug]`
- Homepage with search and popular cities
- Theme toggle (dark/light)
- `scripts/add-city.js` to scaffold a new city markdown
- GitHub Actions CI skeleton
- Ready to deploy to Cloudflare Pages (auto-deploy on push)

Quick start:
1. npm install
2. npm run dev

Add a city:
node scripts/add-city.js manali "Manali" "Himachal Pradesh"
