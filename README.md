# Nithuvarshini Portfolio — React

A React + Vite rebuild of the portfolio, using React Router so each section
(About, Projects, Skills, Experience, Certifications, Contact) is a real route,
and each project has its own URL under `/projects/:slug`.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy to Vercel, Netlify,
GitHub Pages, or any static host.

## Structure

```
src/
  App.jsx              routes
  index.css            global styles (design system)
  components/
    Nav.jsx             top nav + mobile menu, active-link highlighting
    Footer.jsx
    ScrollToTop.jsx      scrolls to top on route change
  data/
    projects.jsx         single source of truth for all 3 projects
  pages/
    Home.jsx
    Projects.jsx
    ProjectDetail.jsx     dynamic page driven by data/projects.jsx
    Skills.jsx
    Experience.jsx
    Certifications.jsx
    Contact.jsx
```

## Notes

- The three "View GitHub" buttons currently point to the GitHub profile —
  swap in the individual repo URLs in `src/data/projects.jsx` once you have them.
- All content and styling match the original static site; this version adds
  working client-side routing, a real mobile menu, and active-link states.
