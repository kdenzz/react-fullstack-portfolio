# Karan Gupta — React / Full-Stack Engineer Portfolio

A React single-page portfolio built with Vite. Project imagery is bundled locally; the site includes responsive navigation, project filters, an interactive OneRoot case study, a stateful React playground, scroll-aware section status, and reduced-motion support.

## Requirements

- Node.js 22.12 or newer

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

Vite writes the deployable static site to `dist/`.

## Deploy to Vercel

Import `kdenzz/react-fullstack-portfolio` from GitHub. Keep the repository root as the project root; Vercel should detect Vite automatically. The build command is `npm run build`, and the output directory is `dist`. Deployments from `main` are production; other branches and pull requests can be previewed.
