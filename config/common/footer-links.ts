export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinks {
  company: FooterLink[];
  research: FooterLink[];
  resources: FooterLink[];
  legal: FooterLink[];
}

export const footerLinks: FooterLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Mission', href: '/about#mission' },
    { label: 'Teams', href: '/teams' },
    { label: 'Careers', href: '/careers' },
  ],
  research: [
    { label: 'Publications', href: '/publications' },
    { label: 'Projects', href: '/projects' },
    { label: 'Active Research', href: '/projects#active' },
    { label: 'Collaborations', href: '/projects#collaborations' },
  ],
  resources: [
    { label: 'Blogs', href: '/blogs' },
    { label: 'Documentation', href: '/docs' },
    { label: 'News & Updates', href: '/news' },
    { label: 'Events', href: '/events' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Ethics Guidelines', href: '/ethics' },
  ],
};

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}
