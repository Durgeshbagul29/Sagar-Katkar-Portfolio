Sagar Katkar — React + Vite + Bun portfolio (Tailwind via CDN)
How to run (using Bun):
1. Install dependencies with Bun:
   bun install
2. Start dev server:
   bun run dev
3. Open http://localhost:5173

Notes:
- Tailwind is loaded via CDN in index.html (no tailwind.config.js or PostCSS).
- Theme toggle uses localStorage and Tailwind's dark: utilities.
- To build: bun run build
- To preview production build: bun run preview
