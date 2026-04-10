// Centralized Strapi base URL so local development and deployed builds
// can point to different CMS environments without editing each API file.
const rawStrapiBaseUrl = import.meta.env.VITE_STRAPI_URL?.trim();

// HAS_STRAPI_BASE_URL tells the API layer whether it should request Strapi
// or immediately fall back to the local frontend content.
export const HAS_STRAPI_BASE_URL = Boolean(rawStrapiBaseUrl);
export const STRAPI_BASE_URL = rawStrapiBaseUrl?.replace(/\/$/, '') || '';
