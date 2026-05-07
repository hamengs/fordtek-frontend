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
- New local assets copied into `src/assets/home` at the time:
  - `reception-lounge.jpg`
  - Note: `hq-building.jpg`, `meeting-room.jpg`, and `rooftop-garden.jpg` were later removed during unused asset cleanup.
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
- `src/assets/home/reception-lounge.jpg`
- `src/assets/flags`
- `HANDOFF.md`

---

## Update: 2026-04-16 (Our Team)

### What changed in this round

#### Our Team page was created, then later removed
- New page:
  - `src/pages/about-us/OurTeam.tsx`
- Route added:
  - `/about-us/our-team`
- Note: this page and route were later removed from the active site.
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

#### Local leadership portraits were added, then later removed
- Local image assets were copied into:
  - `src/assets/team`
- Current portraits added:
  - `xiong-dong.png`
  - `liu-qin.jpg`
  - `tang-xiaoni.jpg`
  - `zhang-bing.jpg`
  - `zhang-guoju.jpg`
- Note: the `src/assets/team` portraits were later removed during unused asset cleanup.

### Important current state

#### Team page copy status
- Historical note: the `Our Team` page was revised against the proposal Word document before it was removed from the active site.
- The removed structure followed the document direction:
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
- `src/App.tsx`
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
- Team portraits were later removed from `src/assets/team` during unused asset cleanup.

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

---

## Update: 2026-04-22 (Contact, News, Products, Tailwind Source Notes)

### What changed in this round

#### Contact Us page was built, then temporarily ignored for commit
- New folder:
  - `src/pages/contact-us`
- Main file:
  - `src/pages/contact-us/ContactUs.tsx`
- Current intended route:
  - `/contact`
  - `/contact/success`
- The page follows the proposal document:
  - hero
  - inquiry form
  - contact information
  - social media
  - company address
- The form is currently frontend-only:
  - submit prevents default browser behavior
  - then routes to `/contact/success`
  - no email is sent
  - no backend or Strapi record is created
- Contact info used from the proposal:
  - Tel: `+86 23 67683887`
  - Fax: `+86 23 63026176`
  - Email: `Service@fordtek.com`
- Social media links are placeholder links until official company profile URLs are supplied.

#### News page and detail page were built
- New folder:
  - `src/pages/news`
- Main file:
  - `src/pages/news/News.tsx`
- Current intended routes:
  - `/news`
  - `/news/:slug`
- Page follows the proposal structure:
  - hero
  - category filters:
    - `All news`
    - `Exhibition news`
    - `Company dynamics`
    - `Trade news`
  - list cards with date, title, summary and `Read more`
- Since the current `news` data type does not include a real category field, the page currently uses keyword-based frontend categorization.
  - Replace this with a real Strapi `category` field later.
- News list pagination was added:
  - `NEWS_PAGE_SIZE = 5`
  - pagination appears only when there is more than one page
  - category changes reset to page 1
- Extra fallback news items were added in:
  - `src/content/homePage.ts`
  - This is for local pagination testing.
- Detail page scroll behavior was fixed:
  - opening a detail page scrolls to top
  - clicking `Back to news` restores the saved list scroll position and category/page state
  - implementation uses `sessionStorage`

#### News hero overlay issue
- The News hero originally used a Tailwind arbitrary gradient class for the overlay.
- It looked like the overlay was not being applied in browser.
- The overlay was changed to an inline `style` gradient with explicit z-index layers:
  - image: `z-0`
  - overlay: `z-10`
  - text: `z-20`
- Relevant file:
  - `src/pages/news/News.tsx`

#### Product pages were built, then temporarily ignored for commit
- New folder:
  - `src/pages/products`
- Main file:
  - `src/pages/products/ProductPage.tsx`
- Current intended route:
  - `/products/:productSlug`
- Supported product slugs:
  - `human-nutrition`
  - `animal-health`
  - `veterinary-drugs`
  - `cosmetics`
- Each page follows the proposal structure:
  - hero
  - product line advantage introduction
  - product matrix
- Important placeholder note:
  - The proposal gives high-level product matrix titles, but not the complete real product list.
  - Current product names are representative placeholders and should be replaced with the real product list later.

#### App routes were temporarily commented for ignored pages
- The user wanted to keep these folders out of the next commit:
  - `src/pages/news`
  - `src/pages/products`
  - `src/pages/contact-us`
- `.gitignore` currently ignores those directories.
- `src/App.tsx` has been partially commented to avoid importing ignored pages when committing without those folders.
- Important:
  - Do not commit routes/imports that reference ignored folders unless those folders are also committed.

#### TopBar social icons were tested
- Social media icons were added to the top bar as a design test.
- Current implementation uses:
  - `react-icons/fa6`
  - `FaFacebookF`
  - `FaLinkedinIn`
  - `FaXTwitter`
- New dependency added:
  - `react-icons`
- `package.json` and `package-lock.json` changed because of this.
- The icons were later styled as small round buttons:
  - light background
  - border
  - hover blue state
- User may still decide these are not final.

#### About Us / Our Company image mosaic was adjusted
- `src/pages/about-us/AboutUs.tsx` has a `PhotoMosaic` helper.
- The user wanted the images to feel less like a single aligned rectangle.
- Current direction:
  - grid-based, no overlap
  - small `gap-2` between images
  - deliberately uneven outer silhouette
- Important:
  - Do not use overlapping absolute-position photos for this request.
  - Desired look is non-overlapping collage pieces with breathing room.

### Important Tailwind v4 gotcha discovered

#### `.gitignore` affects Tailwind automatic source detection
- Tailwind v4 automatic source detection respects `.gitignore`.
- Because these folders were ignored:
  - `src/pages/news`
  - `src/pages/products`
  - `src/pages/contact-us`
- Tailwind did not scan them automatically.
- Symptom seen:
  - `py-3` worked
  - `py-10` worked
  - `py-5` did not work and computed padding became 0
- Root cause:
  - `.py-5` was only used inside an ignored folder, so Tailwind never generated the CSS rule.
  - `py-3` and `py-10` worked because those utilities existed elsewhere in non-ignored files.
- Fix added in:
  - `src/index.css`
- Current explicit source lines:
```css
@source "./pages/news";
@source "./pages/contact-us";
@source "./pages/products";
```
- If additional ignored folders contain Tailwind-only classes, add them with `@source` too.

### Validation status
- `npm run lint` passed after the current changes.
- `npm run build` passed after adding explicit Tailwind sources.

### Files most relevant for the next thread
- `src/pages/news/News.tsx`
- `src/pages/contact-us/ContactUs.tsx`
- `src/pages/products/ProductPage.tsx`
- `src/pages/about-us/AboutUs.tsx`
- `src/components/TopBar.tsx`
- `src/content/homePage.ts`
- `src/index.css`
- `src/App.tsx`
- `.gitignore`
- `package.json`
- `package-lock.json`

---

## Update: 2026-04-27 (Certificates, Our Locations layout)

### What changed in this round

#### Certificates page was built and revised
- Main file:
  - `src/pages/about-us/Certificates.tsx`
- Current route:
  - `/about-us/certificates`
- The page now follows the proposal direction while also reflecting the user's preference to show all available qualification assets:
  - hero
  - company qualification text introduction
  - full qualification mark display
  - separate PDF certificate file list
- Proposal text kept on the page:
  - hero subtitle: `To supply our every valuable customer with safe and high-quality products.`
  - qualification intro mentions `GMP+`, `HACCP`, `ISO9001`, `ISO22000`, `HALAL`, `FAMI-QS`, `QMS`, and `Kosher Certification`.
- Important design decision:
  - Do not mix `View certificate` buttons and `Certificate image` labels inside the same logo card grid.
  - The logo/mark grid should stay visually consistent and only show marks plus short descriptions.
  - The downloadable/viewable PDFs should live in the separate `Certificate Files` section below.
- Earlier duplicate logo display inside the first qualification intro section was removed.
  - Keep the first section as text + supporting image only.
  - Keep all logos in the lower `Certificate Display` section.

#### Certificate assets were added
- New logo/mark asset folder:
  - `src/assets/images/about-us/certificates/`
- Current assets copied in:
  - `FAMIQS.webp`
  - `FAMIQS2.webp`
  - `FSPCA.png`
  - `GMP+.jpg`
  - `HACCP.webp`
  - `HALAL.jpg`
  - `ISO.webp`
  - `QMS.png`
- New public PDF folder:
  - `public/certificates/`
- Current PDF files:
  - `fami-qs-2025.pdf`
  - `gmp-plus-2025.pdf`
  - `qms-2025.pdf`
- Note:
  - No FSPCA PDF was found in the provided source certificate folder, only the FSPCA image/logo.

#### Our Locations final section was reorganized
- Main file:
  - `src/pages/about-us/OurLocations.tsx`
- The final `Global Layout` section now uses one large shared container.
- Layout structure:
  1. section heading
  2. `Global Reach` and `Global Services` stat cards horizontally above the map
  3. map and `Selected Location` card side by side below
- User preference:
  - `Global Reach` and `Global Services` should not sit under `Selected Location`.
  - The stats should feel like a top-level part of the same final section.
  - The map and selected-location card should be on the same hierarchy.
- Alignment decision:
  - Do not shrink the map to make the vertical gap align.
  - Instead, make the top stat grid use the same desktop columns as the lower map/detail row:
    - `lg:grid-cols-[1.18fr_0.82fr]`
    - `gap-8`
  - This keeps the map generous while aligning the central gutter.

### Validation status
- `npm run lint` passed after these changes.
- `npm run build` passed after these changes.

### Files most relevant for the next thread
- `src/pages/about-us/Certificates.tsx`
- `src/pages/about-us/OurLocations.tsx`
- `src/assets/images/about-us/certificates/`
- `public/certificates/`
- `src/App.tsx`

---

## Update: 2026-05-07 (Links, Social Media, SEO Direction)

### Current stack clarification
- Despite the folder name containing `remix`, the active frontend is not Remix.
- The current stack is Vite + React + React Router + TypeScript.
- It is currently a Vite SPA, not server-side rendered.

### SPA vs SSR decision
- Current rendering model:
  - browser downloads `index.html`
  - JavaScript renders the React app
  - frontend fetches Strapi/CMS data afterward
- SSR model would instead:
  - receive a request for a route like `/products/human-nutrition`
  - fetch needed data on the server
  - return HTML that already contains page content and SEO metadata
- SSR would be stronger for SEO than the current SPA setup.
- Remix or Next.js would be reasonable SSR options.
- Decision for now:
  - do not migrate yet
  - keep the Vite SPA
  - improve SEO inside the current architecture first
- Rationale:
  - content, links, and page structure are still being refined
  - migrating now would be a medium architecture change
  - many React components could be reused later if a Remix/Next migration becomes necessary

### SEO work started
- Added baseline SEO tags in:
  - `index.html`
- Added a minimal page-level SEO helper:
  - `src/components/SEO.tsx`
- Homepage now uses the SEO helper in:
  - `src/pages/Home.tsx`
- Current SEO helper updates:
  - `document.title`
  - `meta[name="description"]`
  - `meta[property="og:title"]`
  - `meta[property="og:description"]`
  - canonical URL

### Important SEO limitation
- Because this remains a Vite SPA, dynamically updated metadata is not as robust as SSR or static generation.
- Google usually handles JavaScript-rendered pages reasonably well.
- Some crawlers and social preview bots may not process SPA metadata as reliably.
- If organic search becomes a major acquisition channel, reconsider migrating to Remix or Next.js.

### Recommended SEO next steps for current Vite SPA
1. Add page-level `SEO` usage to:
   - Home
   - four product pages
   - About / Our Company
   - Our Locations
   - Certificates
   - News list
   - each News detail page
   - Contact
   - Join Us
2. Add `public/robots.txt`.
3. Add `public/sitemap.xml`.
4. Ensure important page content is real text, not only images.
5. Keep image `alt` text meaningful.
6. Avoid broken internal links or routes that fall through to the homepage.
7. Consider Open Graph images later for better external sharing previews.

### Link cleanup completed in this round
- Removed the homepage hero CTA:
  - `Explore our Impact`
- Updated homepage product `More` links to:
  - `/products/human-nutrition`
  - `/products/animal-health`
  - `/products/veterinary-drugs`
  - `/products/cosmetics`
- Updated footer product links to the same `/products/...` routes.
- Updated footer About links:
  - `Our company` -> `/about-us/our-company`
  - `Our locations` -> `/about-us/our-locations`
  - `Certificates` -> `/about-us/certificates`
- Left these footer title links alone for now per user request:
  - `What We Do` -> `/what-we-do`
  - `Who We Are` -> `/who-we-are`
  - `How We Do It` -> `/how-we-do-it`
- Note:
  - nonexistent internal paths currently hit the `path="*"` route in `src/App.tsx` and redirect to `/`, which makes bad links look like they jump back to the homepage.

### Social media cleanup
- Company-operated external social media should currently only show LinkedIn.
- LinkedIn URL:
  - `https://www.linkedin.com/in/fordtekbiochemical/`
- Removed / suppressed:
  - Facebook
  - X / Twitter
  - YouTube
  - WeChat / WeChat Official Account
- Reason for removing WeChat:
  - the site is for external/global visitors, and WeChat is not necessary for the public English site right now.
- Relevant files:
  - `src/components/TopBar.tsx`
  - `src/components/Footer.tsx`
  - `src/content/homePage.ts`
  - `src/types/site-settings.ts`

### Validation status in this round
- `npm run typecheck` passed after link/social/SEO edits.
- `npm run build` was attempted earlier and failed due to an unrelated certificate asset issue:
  - `src/pages/about-us/Certificates.tsx` imports `../../assets/images/about-us/certificates/haccp.webp`
  - the current working tree showed certificate asset rename activity
  - do not assume the SEO/link changes caused the build failure

---

## Update: 2026-05-07 (Asset Cleanup, Page Shell, Join Us Email)

### What changed in this round

#### Desktop hero images were installed
- Desktop images were copied into:
  - `src/assets/page-heroes/`
- Current page hero assets:
  - `home-hero.png` -> Home fallback hero
  - `news-hero.png` -> News page hero
  - `certificates-hero.png` -> Certificates page hero
  - `contact-us-hero.png` -> Contact page hero
- Relevant files:
  - `src/content/homePage.ts`
  - `src/pages/news/News.tsx`
  - `src/pages/about-us/Certificates.tsx`
  - `src/pages/contact-us/ContactUs.tsx`

#### Asset folders were reorganized
- The old mixed `src/assets/home` and old `src/assets/images` structure was cleaned up.
- Current intended asset structure:
  - `src/assets/brand/` for `logo.svg` and `slogan.svg`
  - `src/assets/products/` for product line imagery
  - `src/assets/news/` for news fallback images
  - `src/assets/about/office/` for company and office photos
  - `src/assets/about/business-icons/` for About page business-unit icons
  - `src/assets/about/world-map.svg` for the locations map
  - `src/assets/certificates/` for certificate marks
  - `src/assets/page-heroes/` for page-opening hero images
  - `src/assets/flags/` for location flags
  - `src/assets/join-us/` for Join Us images
- Removed old empty or obsolete directories:
  - `src/assets/home`
  - `src/assets/images`
  - `src/assets/team`
- Removed duplicate / unused old assets, including the old duplicate `src/assets/home/home-hero.png`.
- Current code scan found no remaining references to:
  - `assets/home`
  - `assets/images`
  - `assets/team`

#### Large images were compressed
- The site is still in layout/content refinement and will later connect more deeply to Strapi, so no CMS architecture change was made here.
- Existing filenames and imports were preserved.
- Large local JPGs were resized/compressed for frontend performance:
  - `src/assets/about/office/3rdFloor.jpg`: about `22.47MB` -> about `0.51MB`
  - `src/assets/join-us/anual-meeting.jpg`: about `20.57MB` -> about `0.39MB`
  - `src/assets/about/office/reception-lounge.jpg`: about `5.91MB` -> about `0.35MB`
  - `src/assets/join-us/meeting.jpg`: about `5.14MB` -> about `0.38MB`
  - `src/assets/about/office/firstFloorEntrance.jpg`: about `4.57MB` -> about `0.63MB`
- Compressed images retain a 2400px longest side for current page design preview.

#### Common inner-page shell was added
- New files:
  - `src/components/StandardHeader.tsx`
  - `src/components/PageShell.tsx`
- `StandardHeader` owns the shared sticky header behavior for normal inner pages:
  - sticky top header
  - shadow
  - scroll-hide / scroll-show behavior via `useHeaderVisibility`
  - renders `TopBar` with `topBarFallback`
- `PageShell` owns the normal inner-page structure:
  - page root styling
  - `StandardHeader`
  - `<main>{children}</main>`
  - `Footer` with `footerFallback`
- Updated normal inner pages to use `PageShell`:
  - `src/pages/about-us/AboutUs.tsx`
  - `src/pages/about-us/OurLocations.tsx`
  - `src/pages/about-us/Certificates.tsx`
  - `src/pages/contact-us/ContactUs.tsx`
  - `src/pages/join-us/JoinUs.tsx`
  - `src/pages/news/News.tsx`
  - `src/pages/products/ProductPage.tsx`
- Important:
  - `src/pages/Home.tsx` intentionally still keeps its custom header structure because the homepage uses a special overlay header and floating scroll header.

#### Join Us resume email section was redesigned
- The user removed one hiring email, leaving only:
  - `penny.tang@fordtek.com`
- The old two-column email grid left too much empty space.
- The Resume Delivery section in `src/pages/join-us/JoinUs.tsx` was redesigned as:
  - left-side explanatory copy
  - right-side large email CTA card
  - `mailto:` link preserved

### Current known messy areas remaining
- Footer still contains title links that do not have real pages yet:
  - `/what-we-do`
  - `/who-we-are`
  - `/how-we-do-it`
- Current catch-all route redirects unknown paths to `/`, so those links can look like they jump to the homepage.
- Some page content is still hardcoded while the project is in layout/content refinement. This is intentional for now; Strapi integration will come later.
- Some text still has historical encoding artifacts in older page content, especially in location descriptions and footer copyright.
- SEO helper exists but is not yet applied consistently to all pages.

### Validation status in this round
- `npm run typecheck` passed.
- `npm run build` passed.
- `npm run clean && npm run build` passed after image compression to ensure old large hashed files were removed from `dist`.
- Dev server was restarted on:
  - `http://localhost:3000`

### Files most relevant for the next thread
- `src/components/PageShell.tsx`
- `src/components/StandardHeader.tsx`
- `src/components/TopBar.tsx`
- `src/components/Footer.tsx`
- `src/content/homePage.ts`
- `src/pages/Home.tsx`
- `src/pages/join-us/JoinUs.tsx`
- `src/pages/news/News.tsx`
- `src/pages/about-us/AboutUs.tsx`
- `src/pages/about-us/OurLocations.tsx`
- `src/pages/about-us/Certificates.tsx`
- `src/pages/contact-us/ContactUs.tsx`
- `src/pages/products/ProductPage.tsx`
- `src/assets/`
