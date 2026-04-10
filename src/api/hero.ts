import type { HeroApiResponse, HeroContent } from '../types/hero';
import { STRAPI_BASE_URL } from './config';

const HERO_API_URL = `${STRAPI_BASE_URL}/api/hero?populate=*`;

export async function getHeroContent(heroFallback: HeroContent): Promise<HeroContent> {
  const response = await fetch(HERO_API_URL);

  if (!response.ok) {
    throw new Error(`Hero request failed with status ${response.status}`);
  }

  const result: HeroApiResponse = await response.json();
  const heroData = result.data;
  const heroImage = heroData.icon?.[0];
  const imagePath =
    heroImage?.formats?.large?.url ??
    heroImage?.formats?.medium?.url ??
    heroImage?.url;

  return {
    title: heroData.title || heroFallback.title,
    description: heroData.description || heroFallback.description,
    buttonText: heroData.buttonText || heroFallback.buttonText,
    buttonLink: heroData.buttonLink || heroFallback.buttonLink,
    imageUrl: imagePath ? `${STRAPI_BASE_URL}${imagePath}` : heroFallback.imageUrl,
    imageAlt: heroImage?.alternativeText || heroFallback.imageAlt,
  };
}
