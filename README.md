# Amer Mysara Yousif — AI Filmmaker Portfolio

Single-page cinematic portfolio built with Vite + React + TypeScript. Deploys to GitHub Pages via GitHub Actions.

## Scripts

```bash
npm install     # install deps
npm run dev     # local dev server (http://localhost:5173)
npm run build   # production build to ./dist
npm run preview # preview the production build
```

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In **Settings → Pages**, set **Source** to *GitHub Actions*.
3. Push to `main`. The `deploy.yml` workflow builds the site with `VITE_BASE=/<repo-name>/` and publishes `dist/` to Pages.

Your site will be live at `https://<user>.github.io/<repo>/`.

### Custom domain or user/org site

If you serve the site from the root (custom domain or `<user>.github.io`), edit `.github/workflows/deploy.yml` and set `VITE_BASE: /`. For local testing against a different base: `VITE_BASE=/my-repo/ npm run build`.

## Structure

- `index.html` — root document, loads Google Fonts (Antonio, Bodoni Moda, Inter, JetBrains Mono)
- `src/index.css` — all design tokens and section layouts, ported from `design_handoff_portfolio/Portfolio.html`
- `src/App.tsx` — page composition
- `src/components/` — one component per section
- `src/hooks/` — reveal observer, custom cursor, theme toggle
- `src/data/` — project and reel content

## Design handoff

The original design reference lives in `design_handoff_portfolio/Portfolio.html`. Treat that file as the visual spec — it is not shipped.

Defaults are hardcoded per the handoff: `theme=dark`, `accent=#E8C547`, `cursor=dot`, `grain=0.1`. The design-time Tweaks panel is intentionally not ported. Theme can still be cycled by visitors via the top-right toggle (dark → light → ivory, persisted to localStorage).

## Assets still to swap

- Hero still (currently a CSS gradient placeholder)
- Work thumbnails and case-study stills
- Showreel video file
- Real testimonial quotes
- Favicon / OG image
