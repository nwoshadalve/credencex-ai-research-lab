import { Mail, Phone, MapPin, Clock, LucideIcon } from 'lucide-react';

export interface ContactInfo {
  icon: LucideIcon
  title: string;
  details: string[];
  href?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface ContactConfig {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  contactInfo: ContactInfo[];
  socialLinks: SocialLink[];
  formFields: {
    firstName: { label: string; placeholder: string; required: boolean };
    lastName: { label: string; placeholder: string; required: boolean };
    email: { label: string; placeholder: string; required: boolean };
    phone: { label: string; placeholder: string; required: boolean };
    subject: { label: string; placeholder: string; required: boolean };
    message: { label: string; placeholder: string; required: boolean };
  };
  submitButton: string;
}

export const contactConfig: ContactConfig = {
  badge: 'Get in Touch',
  title: 'Contact Us',
  subtitle: 'We\'d Love to Hear From You',
  description: 'Have questions about our research, collaboration opportunities, or career openings? Our team is here to help. Reach out and let\'s start a conversation.',
  
  contactInfo: [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@credencex-ai.com', 'research@credencex-ai.com'],
      href: 'mailto:info@credencex-ai.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', 'Mon-Fri, 9AM-6PM EST'],
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Innovation Drive', 'San Francisco, CA 94102', 'United States'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday - Sunday: Closed'],
    }
  ],

  socialLinks: [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/credencex-ai',
      icon: 'linkedin'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/credencex_ai',
      icon: 'twitter'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/credencex-ai',
      icon: 'github'
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@credencex-ai',
      icon: 'youtube'
    }
  ],

  formFields: {
    firstName: {
      label: 'First Name',
      placeholder: 'John',
      required: true
    },
    lastName: {
      label: 'Last Name',
      placeholder: 'Doe',
      required: true
    },
    email: {
      label: 'Email Address',
      placeholder: 'john.doe@example.com',
      required: true
    },
    phone: {
      label: 'Phone Number',
      placeholder: '+1 (555) 000-0000',
      required: false
    },
    subject: {
      label: 'Subject',
      placeholder: 'How can we help you?',
      required: true
    },
    message: {
      label: 'Message',
      placeholder: 'Tell us more about your inquiry...',
      required: true
    }
  },

  submitButton: 'Send Message'
};
