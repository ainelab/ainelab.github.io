# AI-NE Lab website

Website for the **AI and Neural Engineering Laboratory (AI-NE Lab)**, Mehta Family
School of Biosciences and Biomedical Engineering, IIT Indore.

Built with **Astro + Tailwind CSS v4**, with an animated brain **connectome** in the
hero rendered in **Three.js** from real MNI-space atlas coordinates (AAL-derived).

Live at **https://ainelab.github.io** (deployed via GitHub Actions).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview
```

## Structure

```
src/pages/index.astro     Single-page site: hero · research · projects · publications · join
src/layouts/Layout.astro  HTML shell, fonts, meta
src/components …          (inline in index.astro)
src/scripts/connectome.js Three.js connectome (nodes, edges, travelling signals)
src/data/atlas.js         Region centroids in MNI space (AAL-derived)
src/data/content.js       Research areas, projects, publications, stats — edit here
src/styles/global.css     Tailwind + theme tokens
.github/workflows/deploy.yml  Build + deploy to GitHub Pages
```

## Edit content

All copy lives in `src/data/content.js` — research areas, open projects, publications,
and the hero stat tiles. The connectome layout comes from `src/data/atlas.js`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the Astro site
and publishes it to GitHub Pages.

**One-time setup:** in the repo, go to **Settings → Pages → Build and deployment →
Source → GitHub Actions**.

## Accessibility / performance notes

- Honors `prefers-reduced-motion` (connectome and reveals freeze).
- Connectome pauses when the tab is hidden.
- Fully responsive; verified at 390 px and 1440 px.
