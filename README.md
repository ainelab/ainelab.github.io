# AI-NE Lab website

Static website for the **AI and Neural Engineering Laboratory (AI-NE Lab)**, Mehta Family School of Biosciences and Biomedical Engineering, IIT Indore.

Hosted with GitHub Pages at **https://ainelab.github.io**.

## Structure

```
index.html          Home
research.html       Research areas, methods & approaches
team.html           People (edit placeholders)
publications.html   Publications (edit placeholders)
join.html           Opportunities for students
contact.html        Contact details & map
css/style.css       All styles
js/main.js          Nav toggle, scroll reveal, footer year
.nojekyll           Serve files as-is (skip Jekyll processing)
```

## Editing

- **Content**: plain HTML — open a page and edit the text between tags.
- **Colors/spacing**: change the CSS variables at the top of `css/style.css` (`--brand`, `--brand-2`, etc.).
- **Team / Publications**: duplicate a card / list item and fill in real data. Replace `[bracketed]` placeholders.
- **Logo**: the "NE" mark is CSS-only. To use an image, replace the `.mark` span in each page header.

## Deploy (GitHub Pages)

This is a user/organization site, so it must live in a repo named `ainelab.github.io`.

```bash
git remote add origin https://github.com/ainelab/ainelab.github.io.git
git add -A
git commit -m "Publish AI-NE Lab website"
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: Deploy from a branch → main / root**.
Site goes live at https://ainelab.github.io (allow a few minutes on first deploy).

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
