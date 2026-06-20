import type { Metadata } from 'next';
import { labEmails } from '@/config/common/emails';
import { socialLinks } from '@/config/common/footer';

export const SITE_NAME = 'CredenceX AI Research Lab';
export const LEGAL_NAME = 'CredenceX Ai Research Lab LLC';
export const SITE_URL = 'https://www.credencex.ai';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logos/logo-light.png`;
export const DEFAULT_DESCRIPTION =
  'CredenceX AI Research Lab advances trustworthy, explainable, and deployment-aware artificial intelligence for medical imaging, clinical decision support, and high-stakes healthcare environments.';

const DEFAULT_KEYWORDS = [
  'CredenceX',
  'AI research lab',
  'trustworthy AI',
  'medical imaging AI',
  'clinical decision support',
  'explainable AI',
  'healthcare AI research',
];

type CreatePageMetadataParams = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: CreatePageMetadataParams): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const mergedKeywords = keywords?.length
    ? [...new Set([...keywords, ...DEFAULT_KEYWORDS])]
    : DEFAULT_KEYWORDS;

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
  };
}

export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ResearchOrganization',
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  description: DEFAULT_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '691 Irolo St, Apt 711',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    postalCode: '90005',
    addressCountry: 'US',
  },
  sameAs: socialLinks.map((link) => link.href),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: labEmails.support,
      telephone: '+1-213-507-6622',
      areaServed: 'US',
      availableLanguage: 'en',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'privacy',
      email: labEmails.privacy,
      areaServed: 'US',
      availableLanguage: 'en',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'legal',
      email: labEmails.legal,
      areaServed: 'US',
      availableLanguage: 'en',
    },
  ],
};

export function createWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: {
      '@type': 'ResearchOrganization',
      name: SITE_NAME,
      legalName: LEGAL_NAME,
      url: SITE_URL,
    },
  };
}
