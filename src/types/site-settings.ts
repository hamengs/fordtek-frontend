export type NavLink = {
  label: string;
  link: string;
  children?: NavLink[];
};

export type TopBarApiResponse = {
  data: {
    topBar?: {
      languageText: string;
      languageIconText: string;
      isEnabled: boolean;
      leftLinks?: NavLink[];
      rightLinks?: NavLink[];
    };
  };
};

export type TopBarContent = {
  languageText: string;
  languageIconText: string;
  isEnabled: boolean;
  leftLinks: NavLink[];
  rightLinks: NavLink[];
};

export type MainNavLink = {
  label: string;
  link: string;
  hasDropdown?: boolean | null;
};

export type MainNavigationApiResponse = {
  data: {
    mainNavigation?: {
      loginText: string;
      loginLink: string;
      showSearch: boolean;
      logoAlt?: string | null;
      navlinks?: MainNavLink[];
      productLinks?: NavLink[];
    };
  };
};

export type MainNavigationContent = {
  loginText: string;
  loginLink: string;
  showSearch: boolean;
  logoAlt: string;
  navlinks: MainNavLink[];
  productLinks: NavLink[];
};

export type SocialLink = {
  platform: 'twitter' | 'youtube' | 'linkedin' | 'facebook' | 'instagram' | 'other';
  link: string;
};

export type FooterColumn = {
  links: NavLink[];
};

export type FooterApiResponse = {
  data: {
    footer?: {
      copyrightText: string;
      phone: string;
      email: string;
      tagline: string;
      socialLinks?: SocialLink[];
      footerColumns?: FooterColumn[];
    };
  };
};

export type FooterContent = {
  copyrightText: string;
  phone: string;
  email: string;
  tagline: string;
  socialLinks: SocialLink[];
  footerColumns: FooterColumn[];
};
