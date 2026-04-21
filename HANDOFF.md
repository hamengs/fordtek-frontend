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
- fallback data in `src/content/homePage.ts`

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
Each section still has fallback content in `src/content/homePage.ts` for resilience:
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

---

## Update: 2026-04-16

### What changed in this round

#### Asset paths were normalized
- The user moved many site images into:
  - `src/assets/home`
- Code references were updated to use that folder instead of the old `src/assets/images/...` paths where applicable.
- Relevant files updated:
  - `src/content/homePage.ts`
  - `src/components/TopBar.tsx`
  - `src/components/Footer.tsx`
  - `src/pages/about-us/AboutUs.tsx`
  - `src/pages/about-us/OurLocations.tsx`

#### Local flag assets were added
- Country flags for the `Our Locations` page are no longer loaded from remote URLs.
- They were downloaded into:
  - `src/assets/flags`
- `OurLocations.tsx` now imports the flag images locally.

#### Our Locations page was created and expanded
- New page:
  - `src/pages/about-us/OurLocations.tsx`
- Route added:
  - `/about-us/our-locations`
- Current structure follows the document direction:
  - hero
  - overseas presence intro
  - country footprint with flag cards
  - global layout map
  - right-side detail cards

#### Our Locations map status
- A real SVG world map resource was added to the project:
  - `src/assets/home/world-map.svg`
- The map currently uses manually positioned clickable points over the SVG.
- Point positions have now been completed and confirmed by the user.
- Fallback content for the site is now maintained in:
  - `src/content/homePage.ts`
- The current point metadata now reflects the user-provided company status breakdown:
  - `Chongqing, China` = headquarters
  - `Hong Kong, China` = subsidiary
  - `United States` = subsidiary
  - `Germany` = subsidiary
  - `Vietnam` = subsidiary
  - `Seychelles` = subsidiary
  - `Uruguay` = subsidiary
  - `Brazil` = subsidiary
  - `Argentina` = office
  - `Netherlands` = planned

#### Real office photos replaced placeholder visuals
- Photos were reviewed from:
  - `C:\Users\Teresa Tu\Desktop\总部办公楼照片`
- New local assets copied into `src/assets/home`:
  - `hq-building.jpg`
  - `reception-lounge.jpg`
  - `meeting-room.jpg`
  - `rooftop-garden.jpg`
- These were used to replace placeholder imagery on:
  - `src/pages/about-us/AboutUs.tsx`
  - `src/pages/about-us/OurLocations.tsx`

#### Hero layout adjustments
- The `Our Company` and `Our Locations` hero text blocks were narrowed and given larger vertical padding to reduce collisions with the building/logo area in the photos.
- The user noted the two heroes now feel visually inconsistent in size.
- Important:
  - if continuing this area, the next step should likely be to standardize both hero sections with:
    - the same min-height
    - the same text-block width rules
    - the same vertical alignment logic

### Important current state

#### Our Locations content source
- The `Our Locations` structure and core messaging were based on:
  - `FORDTEK官网更新方案20260414.docx`
- The company-status details were further refined using user-provided images showing:
  - overseas layout
  - milestones

#### Team page next
- The user plans to start a new thread and work on team-related content next.
- Best next step:
  - build `Our Team`
- Recommended source material:
  - `C:\Users\Teresa Tu\Desktop\前员工文件\Company presentation-FORDTEK 2025.pptx`
- Relevant PPT signals already reviewed:
  - team member slides exist
  - management / market-head / HQ role content exists
  - team-building and moments slides also exist

### Files most relevant for the next thread
- `src/pages/about-us/AboutUs.tsx`
- `src/pages/about-us/OurLocations.tsx`
- `src/components/TopBar.tsx`
- `src/components/Footer.tsx`
- `src/content/homePage.ts`
- `src/App.tsx`
- `src/assets/home/world-map.svg`
- `src/assets/home/hq-building.jpg`
- `src/assets/home/reception-lounge.jpg`
- `src/assets/home/meeting-room.jpg`
- `src/assets/home/rooftop-garden.jpg`
- `src/assets/flags`
- `HANDOFF.md`

---

## Update: 2026-04-16 (Our Team)

### What changed in this round

#### Our Team page was created
- New page:
  - `src/pages/about-us/OurTeam.tsx`
- Route added:
  - `/about-us/our-team`
- The page structure now includes:
  - hero with founder portrait
  - founder profile section
  - headquarters leadership cards
  - overseas team highlights
  - team culture section

#### Team source material used
- Team direction and copy were based on:
  - `欢迎走近唯东202604.pptx`
- The main proposal Word file was locked by another process during this round, so the team-specific content was pulled from the PPT deck instead.
- Relevant PPT slides used:
  - founder
  - management
  - overseas employees
  - team philosophy

#### Local leadership portraits were added
- Local image assets were copied into:
  - `src/assets/team`
- Current portraits added:
  - `xiong-dong.png`
  - `liu-qin.jpg`
  - `tang-xiaoni.jpg`
  - `zhang-bing.jpg`
  - `zhang-guoju.jpg`

### Important current state

#### Team page copy status
- The `Our Team` page has now been revised against the proposal Word document.
- The current structure follows the document direction:
  - cover
  - management profiles
  - team introduction
  - employee distribution map
- The cover line now follows the proposal wording:
  - `Continuous Hardwork, Diligent Pursuit`

#### Next likely refinement
- Management cards still mix proposal structure with available local assets.
- If more formal bio material becomes available for headquarters managers, the next pass should refine:
  - years-of-service accuracy
  - experience wording
  - portrait coverage for overseas managers

### Files most relevant for the next thread
- `src/pages/about-us/OurTeam.tsx`
- `src/App.tsx`
- `src/assets/team`
- `HANDOFF.md`

---

## Update: 2026-04-17 (Join Us / Jobs)

### What changed in this round

#### Join Us structure was implemented
- `Join Us` now follows the proposal split:
  - `Why Choose Us`
  - `Jobs`
- New route behavior:
  - `/join-us` now redirects to `/join-us/why-choose-us`

#### Why Choose Us page was built
- File:
  - `src/pages/join-us/JoinUs.tsx`
- Current sections:
  - hero
  - team culture
  - team-building / office visuals
  - benefits
  - CTA block linking to Jobs
- Proposal-based content included:
  - philosophy of strengthening teams while enhancing services
  - insurance
  - garden office environment
  - fitness culture
  - multilingual working environment
  - global exhibitions and overseas assignments
  - great team

#### Jobs page was built
- New file:
  - `src/pages/join-us/Jobs.tsx`
- Route:
  - `/join-us/jobs`
- Current sections:
  - hero
  - external job-platform cards
  - alternate email delivery options
- Proposal-based content included:
  - external recruitment-platform jump section
  - resume delivery emails:
    - `penny.tang@fordtek.com`
    - `judy.zhu@fordtek.com`

#### App routing was updated
- File:
  - `src/App.tsx`
- New routes:
  - `/join-us/why-choose-us`
  - `/join-us/jobs`
- `/join-us` no longer renders a placeholder page directly

### Important current state

#### External hiring links
- The proposal only specifies jumping to platforms such as BOSS / Zhaopin.
- Current implementation links to the platform homepages, not Fordtek-specific listing pages yet.
- If exact hiring URLs are available later, replace those placeholders in `Jobs.tsx`.

### Files most relevant for the next thread
- `src/pages/join-us/JoinUs.tsx`
- `src/pages/join-us/Jobs.tsx`
- `src/App.tsx`
- `HANDOFF.md`

---

## Update: 2026-04-20 / 2026-04-21 (Navigation, Home News, Join Us Cleanup)

### What changed in this round

#### Top navigation was simplified
- The previous two-row header structure was reduced to a single `TopBar`.
- Product links were moved into a top-level `Products` dropdown.
- `About Us` dropdown was simplified:
  - kept `Our Company`
  - kept `Our Locations`
  - kept `Certificates`
  - removed `Our Team`
  - removed `Worldwide Warehouses`
- `News` was placed after `About Us`.
- `Join Us` became a single top-level menu item.
- Language switching was removed because the site is currently English-only.
- Social links were tested in the top bar but removed from the header; social links remain better suited for footer / contact surfaces.
- `TopBar` was visually tuned:
  - smaller, lighter header style
  - smaller logo
  - lighter menu typography
  - centered navigation treatment

#### Our Team was removed from active routing
- `src/pages/about-us/OurTeam.tsx` was deleted.
- `/about-us/our-team` now redirects to `/about-us/our-company`.
- Team portraits remain in `src/assets/team` for possible future reuse, but the active page is gone.

#### Join Us was consolidated into one long page
- The separate Jobs page was deleted:
  - `src/pages/join-us/Jobs.tsx`
- `JoinUs.tsx` now combines:
  - Why Choose Us content
  - Jobs overview
  - external job-platform placeholders
  - regional role placeholders
  - resume delivery emails
- Route behavior:
  - `/join-us` renders the consolidated page
  - `/join-us/why-choose-us` redirects to `/join-us`
  - `/join-us/jobs` redirects to `/join-us`

#### Home News was redesigned several times and currently uses a hybrid layout
- `src/components/NewsSection.tsx` now supports:
  - upper featured news section with alternating image/text layout
  - image-dominant asymmetric layout
  - only `Read more` links are clickable in featured news, not the whole block
  - lower pure-text news archive area
  - pagination controls for the text list
- Additional fallback news items were added in `src/content/homePage.ts` so pagination can be tested without CMS data.
- The lower text area now uses a flat light background, not a gradient.

#### Product Line visual style was normalized
- `src/components/ServicesSection.tsx` was adjusted to remove gradient panel backgrounds.
- Product panels now use a consistent light gray background (`#f8fafc`) to better match other pages.

#### Floating News drawer experiment was added
- `Home.tsx` now includes a desktop-only right-side floating news drawer.
- This is explicitly a preview / experiment, not necessarily final direction.
- Current behavior:
  - visible only on `xl` screens and above
  - fixed to the right side of the viewport
  - default state is collapsed
  - a small `News` handle remains visible
  - hovering or focusing the drawer slides the whole drawer open
- Current implementation detail:
  - outer drawer width: `344px`
  - collapsed transform: `translate-x-[320px]`
  - the short `News` handle is an absolutely positioned element attached to the left side of the drawer
  - the main panel and handle now move as one visual unit

### Important current state

#### Navigation state
- Current header menu is:
  - `Home`
  - `Products`
  - `About Us`
  - `News`
  - `Join Us`
  - `Contact Us`
- `Products` dropdown currently contains:
  - `Human Nutrition`
  - `Animal Health`
  - `Veterinary Drugs`
  - `Cosmetics`

#### News state
- Home now contains both:
  - the full in-page `NewsSection`
  - the experimental right-side floating news drawer
- The user may still decide to remove the floating drawer if it feels too intrusive.
- The independent `/news` page has not been built yet.

#### Known placeholders
- Social media links are still placeholder-style in footer fallback data.
- Job platform links are placeholders.
- Regional job copy is placeholder copy for layout testing.
- Extra fallback news items are placeholder content for pagination testing.

### Files most relevant for the next thread
- `src/components/TopBar.tsx`
- `src/content/homePage.ts`
- `src/pages/Home.tsx`
- `src/components/NewsSection.tsx`
- `src/components/ServicesSection.tsx`
- `src/pages/join-us/JoinUs.tsx`
- `src/App.tsx`
- `HANDOFF.md`
