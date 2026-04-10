export type StrapiImage = {
  url: string;
  alternativeText?: string | null;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
    thumbnail?: { url: string };
  };
};

export type HeroApiResponse = {
  data: {
    title: string;
    description: string;
    icon?: StrapiImage[];
    buttonText: string;
    buttonLink: string;
  };
};

// Frontend and API types used by the homepage hero section.
export type HeroContent = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  imageAlt: string;
};
