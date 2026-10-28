# 404® MUSEUM

**THE INTERNET IS BROKEN. WE MADE IT ART.**

An experimental, editorial-brutalist digital museum where HTTP errors become interactive artworks.

## Exhibitions

- **404 — The Missing Piece:** Click the artwork and watch it vanish.
- **403 — Access Denied:** Attempt to open a restricted door.
- **500 — Internal Chaos:** Trigger progressive server failures.
- **418 — I'm a Teapot:** Ask a teapot for coffee (it will refuse).

Each exhibit includes a technical explanation and an example HTTP response.

## Stack

React · JavaScript · Vite · React Router · CSS

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (usually http://localhost:5173).

## Quality checks

```bash
npm run lint
npm run build
```

## Deploy

Build command: `npm run build` · Output directory: `dist`.

For deployment to Vercel or Netlify, enable SPA fallback so direct links such as `/exhibition/404` load correctly. This project includes `public/_redirects` for Netlify and `vercel.json` for Vercel.

## Project structure

```text
src/
  components/Layout.jsx  # Shared header and footer
  pages/Home.jsx         # Home and gallery
  pages/Exhibit.jsx      # Four interactive installations
  pages/NotFound.jsx     # Fallback route
  data.js                # Exhibit metadata
  styles.css             # Global editorial design
  main.jsx               # Routes
```

## Design

Paper `#F1EFEA` · Ink `#111111` · Error Red `#D92D20`.

## Before publishing

Add screenshots, your preferred author credit, and a live demo URL once deployed.

Created as a creative coding portfolio project. HTTP descriptions are educational; interactive installations are artistic simulations, not actual server responses.
