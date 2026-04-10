import type { ServicesApiResponse, ServicesContent } from '../types/services';
import { STRAPI_BASE_URL } from './config';

const HOME_API_URL = `${STRAPI_BASE_URL}/api/home?populate[serviceSection][populate][items][populate]=*`;

export async function getServicesContent(servicesFallback: ServicesContent): Promise<ServicesContent> {
  const response = await fetch(HOME_API_URL);

  if (!response.ok) {
    throw new Error(`Services request failed with status ${response.status}`);
  }

  const result: ServicesApiResponse = await response.json();
  const items = result.data.serviceSection?.items;

  if (!items?.length) {
    return servicesFallback;
  }

  return {
    items: items.map((item, index) => {
      const image = item.image?.[0];
      const imagePath =
        image?.formats?.large?.url ??
        image?.formats?.medium?.url ??
        image?.url;

      return {
        title: item.title || servicesFallback.items[index]?.title || '',
        subtitle: item.subtitle || servicesFallback.items[index]?.subtitle || '',
        buttonText: item.buttonText || servicesFallback.items[index]?.buttonText || 'More',
        buttonLink: item.buttonLink || servicesFallback.items[index]?.buttonLink || '#',
        imageUrl: imagePath ? `${STRAPI_BASE_URL}${imagePath}` : servicesFallback.items[index]?.imageUrl || '',
        imageAlt: item.imageAlt || image?.alternativeText || servicesFallback.items[index]?.imageAlt || '',
        theme: item.theme || servicesFallback.items[index]?.theme || 'green',
        overlay: servicesFallback.items[index]?.overlay,
      };
    }),
  };
}
