// Centralized Strapi base URL so local development and deployed builds
// can point to different CMS environments without editing each API file.
export const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
