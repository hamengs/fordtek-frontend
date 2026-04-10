export type NewsItem = {
  title: string;
  summary: string;
  slug: string;
  coverImageUrl: string;
  coverImageAlt: string;
  buttonText: string;
  publishedDate: string;
};

export type NewsContent = {
  items: NewsItem[];
};

type NewsImageAsset = {
  url: string;
  alternativeText?: string | null;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
    thumbnail?: { url: string };
  };
};

export type NewsApiResponse = {
  data: Array<{
    title: string;
    summary: string;
    slug: string;
    coverImageAlt: string;
    buttonText: string;
    publishedDate: string;
    content: string;
    coverImage?: NewsImageAsset[];
  }>;
};
