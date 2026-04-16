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

---

## Update: 2026-04-15

### What changed in this round

#### Home header / hero
- Home hero was redesigned to behave more like a full-screen cover.
- The homepage now uses a two-state header system:
  - an overlay header shown when the page is near the top
  - a floating white header that appears when scrolling upward away from the top
- Header behavior is currently implemented directly in:
  - `src/pages/Home.tsx`
- Relevant components:
  - `src/components/TopBar.tsx`
  - `src/components/MainNavigation.tsx`
  - `src/components/Hero.tsx`

#### Direct URL refresh on Vercel
- Added SPA rewrite support for Vercel so direct URL access such as `/about-us` no longer 404s after deployment.
- New file:
  - `vercel.json`
- Note:
  - this requires redeploying to Vercel

#### Home services content
- Homepage `services` content was improved so each service item now owns its own long English description.
- `description` was added into the services content shape and API mapping.
- Relevant files:
  - `src/types/services.ts`
  - `src/content/homePage.ts`
  - `src/api/home.ts`
  - `src/components/ServicesSection.tsx`

#### About Us page
- `src/pages/about-us/AboutUs.tsx` is no longer a placeholder page.
- It now contains a first-pass single-page design with:
  - hero / intro
  - strengths strip
  - introduction
  - purpose
  - values
  - business units
  - global presence
  - next sections block
- The page still needs visual cleanup and content refinement.

### Important current state

#### About Us business unit icons
- The manually drawn SVG icons from `Downloads` were copied into the project and are now the active assets.
- Current files:
  - `src/assets/images/about-us/pingguo.svg`
  - `src/assets/images/about-us/yuer.svg`
  - `src/assets/images/about-us/yaoping.svg`
  - `src/assets/images/about-us/kouhong.svg`
- `AboutUs.tsx` currently imports these SVG files directly.
- Earlier experimental generated SVG icons were removed.

#### About Us business unit layout
- The current layout is still the card-style version with:
  - rounded cards
  - icon on top
  - subtitle under icon
  - `Explore` CTA
- User feedback indicates this is not the desired final direction.
- The desired direction is closer to the original old-site visual style:
  - lighter layout
  - less card-like
  - more icon-led
- Do not assume the current business unit layout is approved.

#### About Us hero and dark sections
- The About Us hero image was temporarily changed to use `hardwork.jpg` as a placeholder.
- Some originally dark sections were lightened.
- These visual choices are provisional and may be revised.

### Known issue that happened and resolution
- There was a dev-server error referencing removed SVG files such as `cosmetics.svg`.
- Root cause:
  - Vite HMR cache retained stale references after deleting experimental SVG files.
- Resolution:
  - active code now points only to the manually supplied SVG files above
  - if this happens again, restart `npm run dev`
  - if needed, delete `node_modules/.vite`

### Recommended next steps
Choose one:

1. Continue refining the homepage header
- likely targets:
  - top/bottom row proportions
  - pure white top row feel
  - product-nav spacing
  - hero text placement

2. Refine About Us visual direction
- especially:
  - business unit layout
  - icon sizing / spacing
  - hero image choice
  - final tone of values / global presence sections

3. Normalize content encoding in About Us
- there are still some text encoding artifacts in `AboutUs.tsx`
- example:
  - smart quotes around “Made in China” were previously corrupted in one version

### Files most relevant for the next thread
- `src/pages/Home.tsx`
- `src/components/TopBar.tsx`
- `src/components/MainNavigation.tsx`
- `src/components/Hero.tsx`
- `src/components/ServicesSection.tsx`
- `src/content/homePage.ts`
- `src/types/services.ts`
- `src/api/home.ts`
- `src/pages/about-us/AboutUs.tsx`
- `vercel.json`
