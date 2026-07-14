# Portfolio — Sri Harsha Ponukumati

Personal portfolio site: a bento-grid dashboard layout built with Next.js (App Router, TypeScript) and Tailwind CSS, deployed on Vercel.

## Stack

- [Next.js](https://nextjs.org) App Router + TypeScript
- Tailwind CSS v4
- [lucide-react](https://lucide.dev) icons — pinned to `0.577.0` (the last 0.x release) because v1 removed the `Github`/`Linkedin` brand icons this site uses

## Structure

- `app/` — layout, page, global styles, favicon
- `components/` — `BentoCard` (shared card primitive), one component per tile
- `data/projects.ts`, `data/skills.ts` — all site content; edit copy here, not in components

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
