# Family Recipe Legacy

A lightweight, production-ready nostalgic food blog built with React, Vite, Tailwind, and Express.

## Stack
- React 18 + React Router DOM
- Vite
- Tailwind CSS (Fraunces + Inter)
- Express.js + compression for production serving

## Install
```bash
npm install
```

## Development
```bash
npm run dev
```
Opens at `http://localhost:5173`.

## Build
```bash
npm run build
```
Outputs static files to `/dist`.

## Production (Node server)
```bash
npm run build
npm start
```
Serves the built site with gzip compression on `PORT` (defaults to 3000).

## Deploy
- **Heroku / Railway / Render**: connect the repo. The included `Procfile` runs `node server.js`. Run `npm run build` post-install or on deploy.
- **Static hosts (Netlify, Vercel, Cloudflare Pages)**: build command `npm run build`, publish directory `dist`, with SPA fallback to `/index.html`.

## Project structure
```
src/
  assets/images/   # local recipe/kitchen images
  components/      # Navbar, Footer, Expandable, CookieConsent, PageHeader
  pages/           # Home, About, Recipes, Blog, Community, Contact, Category, Legal
  utils/analytics.js
  data.js          # recipes, blog posts, testimonials, FAQs
  App.jsx, main.jsx, index.css
public/favicon.svg
server.js, Procfile, app.json
```

## Notes
- All "Read more" / "Explore" / "Learn more" interactions expand inline on the same page (no modal, no extra route).
- All images are stored locally under `src/assets/images/`.
- Google Analytics is wired in `index.html` and `src/utils/analytics.js`.
- Cookie consent banner is included for ad compliance.
