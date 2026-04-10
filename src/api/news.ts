import type { NewsApiResponse, NewsContent } from '../types/news';
import { HAS_STRAPI_BASE_URL, STRAPI_BASE_URL } from './config';

// Fetches the homepage news cards and converts Strapi entries into the
// compact NewsContent structure expected by NewsSection.
const NEWS_API_URL = `${STRAPI_BASE_URL}/api/news?populate=*&sort=publishedDate:desc`;

export async function getNewsContent(newsFallback: NewsContent): Promise<NewsContent> {
  if (!HAS_STRAPI_BASE_URL) {
    return newsFallback;
  }

  const response = await fetch(NEWS_API_URL);

  if (!response.ok) {
    throw new Error(`News request failed with status ${response.status}`);
  }

  const result: NewsApiResponse = await response.json();

  if (!result.data?.length) {
    return newsFallback;
  }

  return {
    items: result.data.map((item, index) => {
      const image = item.coverImage?.[0];
      const imagePath =
        image?.formats?.large?.url ??
        image?.formats?.medium?.url ??
        image?.url;

      return {
        title: item.title || newsFallback.items[index]?.title || '',
        summary: item.summary || newsFallback.items[index]?.summary || '',
        slug: item.slug || newsFallback.items[index]?.slug || '',
        coverImageUrl: imagePath
          ? `${STRAPI_BASE_URL}${imagePath}`
          : newsFallback.items[index]?.coverImageUrl || '',
        coverImageAlt:
          item.coverImageAlt || image?.alternativeText || newsFallback.items[index]?.coverImageAlt || '',
        buttonText: item.buttonText || newsFallback.items[index]?.buttonText || 'Read more',
        publishedDate: item.publishedDate || newsFallback.items[index]?.publishedDate || '',
      };
    }),
  };
}
