# Portfolio — Lê Hồng Vũ

A minimal, modern personal portfolio built with [Next.js](https://nextjs.org) (App Router), TypeScript and Tailwind CSS.

## Pages

- **Home** (`/`) — hero intro, quick links and skills.
- **Experience** (`/experience`) — work history timeline.
- **Projects** (`/projects`) — personal project gallery.
- **Contact** (`/contact`) — email, social links and a contact form.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Your Content

All content lives in one file: `src/lib/data.ts`. Edit the name, bio, experiences, projects and social links there — no need to touch any page component.

Design tokens (colors, fonts) are in `src/app/globals.css`.

## Deploy to Vercel

### Option A — Dashboard (no CLI)

1. Push this repository to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Next.js — click **Deploy**. No extra config needed.

### Option B — CLI

```bash
npm i -g vercel
vercel        # first run: log in and link the project
vercel --prod # deploy to production
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint