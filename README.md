# Karan Gupta — Full-Stack Engineer Portfolio

A standalone, static portfolio focused on React, React Native, and full-stack product work. Its showcase images are included in this folder; the originals are from `game-dev-portfolio/assets/`. It has no build step or npm dependencies.

## Run locally

From this directory, start a local web server:

```bash
python3 -m http.server 8001
```

Then open [http://localhost:8001/](http://localhost:8001/) in a browser. Stop the server with `Ctrl+C`.

The site includes a short asset-aware intro sequence, responsive navigation, project filters, an interactive OneRoot case study with keyboard-accessible Product, System, and Decisions tabs, a subtle project-to-process scroll transition, scroll-aware section status, and reduced-motion support. Scroll effects are limited to lightweight transform animations; if JavaScript is unavailable, the case-study content remains readable and the intro stays hidden.
