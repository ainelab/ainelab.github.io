# AI-NE Lab website

Website for the **AI and Neural Engineering Laboratory (AI-NE Lab)**, Mehta Family
School of Biosciences and Biomedical Engineering (MFS-BSBE), IIT Indore.

Built with **Astro + Tailwind CSS v4**. Multi-page academic site with a dark hero
band featuring an animated brain-network video.

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
src/pages/index.astro        Home: dark hero band + research overview
src/pages/research.astro     Research areas with figures
src/pages/people.astro       PI and lab members
src/pages/publications.astro Selected recent work
src/pages/teaching.astro     Courses
src/pages/news.astro         Lab news
src/pages/join.astro         Openings (PhD, M.Tech, undergraduate)
src/layouts/Layout.astro     HTML shell, fonts, meta
src/components/Nav.astro      Sticky nav + mobile dropdown menu
src/components/Footer.astro   Shared footer
src/components/LogoMark.astro Logo mark
src/data/content.js          Research areas, publications, teaching, news, PI — edit here
src/styles/global.css        Tailwind + theme tokens (light + scoped dark hero)
public/brain-net.mp4         Hero brain-network animation
.github/workflows/deploy.yml Build + deploy to GitHub Pages
```

## Edit content

Most copy lives in `src/data/content.js` — research areas, publications, teaching,
and news. Page-specific copy (Join, People) lives inline in the respective
`src/pages/*.astro` file.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the Astro site
and publishes it to GitHub Pages.

**One-time setup:** in the repo, go to **Settings → Pages → Build and deployment →
Source → GitHub Actions**.

## Accessibility / performance notes

- Honors `prefers-reduced-motion`.
- Hero video pauses when the tab is hidden.
- Fully responsive; verified at 390 px and 1440 px.
