import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  canonicalPath?: string;
};

function setMetaAttribute(selector: string, attribute: 'content' | 'href', value: string) {
  const element = document.head.querySelector(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
}

export function SEO({ title, description, canonicalPath = '/' }: SEOProps) {
  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${canonicalPath}`;

    document.title = title;
    setMetaAttribute('meta[name="description"]', 'content', description);
    setMetaAttribute('meta[property="og:title"]', 'content', title);
    setMetaAttribute('meta[property="og:description"]', 'content', description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;
  }, [canonicalPath, description, title]);

  return null;
}
