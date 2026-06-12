# SHINE Laser & Signages — Static React + Vite

A plain client-side React + Vite + TypeScript + Tailwind CSS build of the SHINE
Laser & Signages website. No SSR, no server — produces a fully static site.

## Develop

```bash
npm install
npm run dev
```

## Build (static output in `dist/`)

```bash
npm run build      # outputs dist/index.html + dist/assets/
npm run preview    # preview the production build locally
```

## Deploy

The `dist/` folder is fully static and works on:

- **Netlify** — set build command `npm run build`, publish directory `dist`
- **Vercel** — framework preset "Vite", output dir `dist`
- **Cloudflare Pages** — build command `npm run build`, output `dist`
- **GitHub Pages** — push the `dist/` contents to your Pages branch

`base: "./"` in `vite.config.ts` uses relative asset paths so it works from any
subpath (including GitHub Pages project sites).
