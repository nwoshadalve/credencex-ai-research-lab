import type { Metadata } from 'next';

export const SITE_NAME = 'CredenceX AI Research Lab';
export const SITE_URL = 'https://www.credencex.ai';
export const DEFAULT_DESCRIPTION =
  'CredenceX AI Research Lab advances trustworthy, explainable, and deployment-aware artificial intelligence for medical imaging, clinical decision support, and high-stakes healthcare environments.';

type CreatePageMetadataParams = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: CreatePageMetadataParams): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: new URL(path, SITE_URL).toString(),
      siteName: SITE_NAME,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logos/logo-light.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'info@credencex.ai',
    telephone: '+1-213-507-6622',
    areaServed: 'US',
    availableLanguage: 'en',
  },
};

export function createWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
  };
}
