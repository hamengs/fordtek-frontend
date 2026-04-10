import type {
  FooterApiResponse,
  FooterContent,
  MainNavigationApiResponse,
  MainNavigationContent,
  TopBarApiResponse,
  TopBarContent,
} from '../types/site-settings';
import { STRAPI_BASE_URL } from './config';

const SITE_SETTINGS_API_URL =
  `${STRAPI_BASE_URL}/api/site-setting?populate[topBar][populate][leftLinks]=*` +
  '&populate[topBar][populate][rightLinks]=*';
const MAIN_NAVIGATION_API_URL =
  `${STRAPI_BASE_URL}/api/site-setting?populate[mainNavigation][populate][navlinks]=*` +
  '&populate[mainNavigation][populate][productLinks]=*';
const FOOTER_API_URL =
  `${STRAPI_BASE_URL}/api/site-setting?populate[footer][populate][footerColumns][populate][links][populate]=*` +
  '&populate[footer][populate][socialLinks][populate]=*';

export async function getTopBarContent(topBarFallback: TopBarContent): Promise<TopBarContent> {
  const response = await fetch(SITE_SETTINGS_API_URL);

  if (!response.ok) {
    throw new Error(`Top bar request failed with status ${response.status}`);
  }

  const result: TopBarApiResponse = await response.json();
  const topBarData = result.data.topBar;

  if (!topBarData) {
    return topBarFallback;
  }

  return {
    languageText: topBarData.languageText || topBarFallback.languageText,
    languageIconText: topBarData.languageIconText || topBarFallback.languageIconText,
    isEnabled: topBarData.isEnabled ?? topBarFallback.isEnabled,
    leftLinks: topBarData.leftLinks?.length ? topBarData.leftLinks : topBarFallback.leftLinks,
    rightLinks: topBarData.rightLinks?.length ? topBarData.rightLinks : topBarFallback.rightLinks,
  };
}

export async function getMainNavigationContent(
  mainNavigationFallback: MainNavigationContent
): Promise<MainNavigationContent> {
  const response = await fetch(MAIN_NAVIGATION_API_URL);

  if (!response.ok) {
    throw new Error(`Main navigation request failed with status ${response.status}`);
  }

  const result: MainNavigationApiResponse = await response.json();
  const mainNavigationData = result.data.mainNavigation;

  if (!mainNavigationData) {
    return mainNavigationFallback;
  }

  return {
    loginText: mainNavigationData.loginText || mainNavigationFallback.loginText,
    loginLink: mainNavigationData.loginLink || mainNavigationFallback.loginLink,
    showSearch: mainNavigationData.showSearch ?? mainNavigationFallback.showSearch,
    logoAlt: mainNavigationData.logoAlt || mainNavigationFallback.logoAlt,
    navlinks: mainNavigationData.navlinks?.length ? mainNavigationData.navlinks : mainNavigationFallback.navlinks,
    productLinks: mainNavigationData.productLinks?.length
      ? mainNavigationData.productLinks
      : mainNavigationFallback.productLinks,
  };
}

export async function getFooterContent(footerFallback: FooterContent): Promise<FooterContent> {
  const response = await fetch(FOOTER_API_URL);

  if (!response.ok) {
    throw new Error(`Footer request failed with status ${response.status}`);
  }

  const result: FooterApiResponse = await response.json();
  const footerData = result.data.footer;

  if (!footerData) {
    return footerFallback;
  }

  return {
    copyrightText: footerData.copyrightText || footerFallback.copyrightText,
    phone: footerData.phone || footerFallback.phone,
    email: footerData.email || footerFallback.email,
    tagline: footerData.tagline || footerFallback.tagline,
    socialLinks: footerData.socialLinks?.length ? footerData.socialLinks : footerFallback.socialLinks,
    footerColumns: footerData.footerColumns?.length ? footerData.footerColumns : footerFallback.footerColumns,
  };
}
