// Frontend and API types used by the homepage services section.
export type ServiceItem = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  imageAlt: string;
  theme: 'green' | 'blue';
  overlay?: boolean;
};

export type ServicesContent = {
  items: ServiceItem[];
};

type ServiceImageAsset = {
  url: string;
  alternativeText?: string | null;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
    thumbnail?: { url: string };
  };
};

export type ServicesApiResponse = {
  data: {
    serviceSection?: {
      items?: Array<{
        title: string;
        subtitle: string;
        buttonText: string;
        buttonLink: string;
        imageAlt: string;
        theme: 'green' | 'blue';
        image?: ServiceImageAsset[];
      }>;
    };
  };
};
