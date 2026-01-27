export interface FooterContact {
  email: string;
  phone: string;
  address: {
    line1: string;
    line2: string;
  };
}

export interface FooterBrand {
  description: string;
  logoAlt: string;
}

export const footerBrand: FooterBrand = {
  description: 'Pioneering research in high-stakes AI applications. Building intelligent systems that make a difference.',
  logoAlt: 'CredenceX AI Research Lab',
};

export const footerContact: FooterContact = {
  email: 'info@credencex-ai.com',
  phone: '+1 (234) 567-890',
  address: {
    line1: '123 AI Research Blvd',
    line2: 'Innovation District, CA 94000',
  },
};

export interface SocialLink {
  label: string;
  href: string;
  platform: 'linkedin' | 'facebook' | 'github' | 'youtube';
}

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com', platform: 'linkedin' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61586371207333', platform: 'facebook' },
  { label: 'GitHub', href: 'https://github.com', platform: 'github' },
  { label: 'YouTube', href: 'https://youtube.com', platform: 'youtube' },
];
