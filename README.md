# Fordtek Frontend

This is the Fordtek corporate website frontend built with React, Vite, TypeScript, and Tailwind CSS. The homepage layout stays in the frontend, while major homepage content is progressively fetched from Strapi with local fallback data.

## Tech Stack

- React 19
- Vite 6
- TypeScript
- Tailwind CSS 4

## Local Development

Prerequisite: Node.js 18+

1. Install dependencies:
   `npm install`
2. Start the dev server:
   `npm run dev`
3. Open:
   `http://localhost:3000`

## Available Scripts

- `npm run dev` starts the local development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs TypeScript checks
- `npm run typecheck` runs TypeScript checks
- `npm run clean` removes the `dist` folder

## Notes

- This project uses React + Vite, not Remix.
- The current folder name still contains legacy naming and can be renamed later if needed.
