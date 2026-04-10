# Project Handoff

## Workspace
- Frontend project path:
  `C:\Users\Teresa Tu\Desktop\公司网站设级2026.4.1\remix_-fordtek---nutrition-chemicals`
- Framework:
  `React + Vite + TypeScript`

## Current Goal
- Refactor homepage from hardcoded content to Strapi-driven content, section by section.
- Keep layout and styles in frontend code.
- Move content and data into Strapi.

## Frontend Status
Homepage sections already converted or structured:

1. TopBar
2. MainNavigation
3. Hero
4. ServicesSection
5. NewsSection
6. Footer

All major sections above now have:
- `types`
- `api`
- `component`
- fallback data in `App.tsx`

## Important Files

### App composition
- `src/App.tsx`

### Components
- `src/components/TopBar.tsx`
- `src/components/MainNavigation.tsx`
- `src/components/Hero.tsx`
- `src/components/ServicesSection.tsx`
- `src/components/NewsSection.tsx`
- `src/components/Footer.tsx`

### API layer
- `src/api/hero.ts`
- `src/api/home.ts`
- `src/api/news.ts`
- `src/api/site-settings.ts`

### Types
- `src/types/hero.ts`
- `src/types/services.ts`
- `src/types/news.ts`
- `src/types/site-settings.ts`

### TS asset declarations
- `src/vite-env.d.ts`

## Strapi Models

### Single Types
1. `hero`
2. `site-setting`
3. `home`

### Collection Types
1. `news`

## Strapi Data Structures

### `hero`
Used for the hero section.

Fields:
- `title`
- `description`
- `buttonText`
- `buttonLink`
- `icon` or background image
- image alt comes from media alt or fallback

API used in frontend:
- `/api/hero?populate=*`

### `site-setting`
Contains:
- `topBar`
- `mainNavigation`
- `footer`

#### `topBar`
Fields:
- `languageText`
- `languageIconText`
- `isEnabled`
- `leftLinks`
- `rightLinks`

Each link item:
- `label`
- `link`

API used:
- `/api/site-setting?populate[topBar][populate][leftLinks]=*&populate[topBar][populate][rightLinks]=*`

#### `mainNavigation`
Fields:
- `loginText`
- `loginLink`
- `showSearch`
- `logoAlt`
- `navlinks`
- `productLinks`

`navlinks` item:
- `label`
- `link`
- `hasDropdown`

`productLinks` item:
- `label`
- `link`

API used:
- `/api/site-setting?populate[mainNavigation][populate][navlinks]=*&populate[mainNavigation][populate][productLinks]=*`

#### `footer`
Fields:
- `copyrightText`
- `phone`
- `email`
- `tagline`
- `footerColumns`
- `socialLinks`

`footerColumns`:
- `links`

`links` item:
- `label`
- `link`

`socialLinks` item:
- `platform`
- `link`

API used:
- `/api/site-setting?populate[footer][populate][footerColumns][populate][links][populate]=*&populate[footer][populate][socialLinks][populate]=*`

### `home`
Currently used for the services section.

#### `serviceSection`
Fields:
- `items`

Each item:
- `title`
- `subtitle`
- `buttonText`
- `buttonLink`
- `imageAlt`
- `theme`
- `image`

Important:
- `image` currently returns as an array, so the frontend uses `image?.[0]`

API used:
- `/api/home?populate[serviceSection][populate][items][populate]=*`

### `news` collection
Fields:
- `title`
- `summary`
- `slug`
- `coverImageAlt`
- `buttonText`
- `publishedDate`
- `content`
- `coverImage`

Important:
- `coverImage` currently returns as an array, so the frontend uses `coverImage?.[0]`
- `content` field spelling has been corrected from the earlier typo `cotent`

API used:
- `/api/news?populate=*&sort=publishedDate:desc`

## Frontend Implementation Notes

### Fallback pattern
Each section still has fallback content in `App.tsx` for resilience:
- `heroFallback`
- `topBarFallback`
- `mainNavigationFallback`
- `servicesFallback`
- `newsFallback`
- `footerFallback`

### Image handling
For Strapi media arrays:
- frontend uses the first item only
- image selection priority:
  1. `formats.large.url`
  2. `formats.medium.url`
  3. `url`

### Current known design choice
- Logo image is still a local frontend asset, not fully driven by Strapi.
- `logoAlt` comes from Strapi for navigation.
- Footer logo is also still local.

## Validation Status
- `npm run lint` passes
- `tsc --noEmit` passes

## Commands Used
Run frontend:
```bash
npm run dev
```

Type check:
```bash
npm run lint
```

## Naming Note
- The folder name still says `remix`, but the actual frontend stack is Vite + React.
- Renaming the folder is optional and will not affect runtime as long as external shortcuts, terminal paths, or editor workspace references are updated afterward.

## Suggested Next Steps
Choose one:

1. Do a homepage integration review
- Verify all sections visually
- Confirm Strapi content is showing as expected
- Check broken links, image loading, and ordering

2. Build news detail page
- Use `slug`
- Add a route or page for `/news/:slug`
- Fetch one news item by slug

3. Move logo fully into Strapi
- Optional, not required right now

4. Add About page or other internal pages

## Special Notes
- Strapi may restart or reload when changing content types or components in the builder.
- Unsaved builder changes may be lost.
- Best workflow in Strapi:
  - make small schema changes
  - save immediately
  - then continue

## If continuing in next thread
Please continue from:
- homepage CMS integration completed for main sections
- next best step: homepage integration review or news detail page
