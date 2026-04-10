/// <reference types="vite/client" />

// Extends Vite's environment variable typing so frontend code can safely
// access the optional Strapi base URL in local and deployed environments.
interface ImportMetaEnv {
  readonly VITE_STRAPI_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}
