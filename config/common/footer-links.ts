export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinks {
  company: FooterLink[];
  research: FooterLink[];
  resources: FooterLink[];
  legal: FooterLink[];
  governance: FooterLink[];
}

export const footerLinks: FooterLinks = {
  company: [
    { label: 'Our Mission', href: '/about#mission' },
    { label: 'Our Values', href: '/about#values' },
    { label: 'Teams', href: '/teams' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  research: [
    { label: 'Conference Papers', href: '/publications?type=conference' },
    { label: 'Journal Articles', href: '/publications?type=journal' },
    { label: 'Active Projects', href: '/projects?type=active' },
    { label: 'Completed Projects', href: '/projects?type=completed' },
  ],
  resources: [
    { label: 'News & Updates', href: '/news' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
  governance: [
    { label: 'Governance & Leadership',            href: '/governance' },
    { label: 'Advisory Board',                     href: '/advisory-board' },
    { label: 'Ethics Standards',                   href: '/ethics' },
    { label: 'Data Governance',                    href: '/data-governance' },
    { label: 'Open Research & Publication Policy', href: '/open-research' },
    { label: 'Institutional Status & Legal Notice', href: '/legal-notice' },
  ],
};

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}
