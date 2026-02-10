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
  phone: '+1 (213) 507-6622',
  address: {
    line1: '691 Irolo St, Apt 711',
    line2: 'Los Angeles, CA 90005, United States',
  },
};

export interface SocialLink {
  label: string;
  href: string;
  platform: 'linkedin' | 'facebook' | 'github' | 'youtube';
}

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/credence-xai/', platform: 'linkedin' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61586371207333', platform: 'facebook' },
  { label: 'GitHub', href: 'https://github.com/credencexai-debug', platform: 'github' },
  { label: 'YouTube', href: 'https://www.youtube.com/@CredenceXAI', platform: 'youtube' },
];