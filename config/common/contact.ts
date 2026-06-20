import { Mail, Phone, MapPin, Clock, LucideIcon } from 'lucide-react';
import { labEmails } from './emails';

export type ContactInquiryTypeId =
  | 'general'
  | 'research'
  | 'media'
  | 'careers'
  | 'privacy'
  | 'legal';

export interface ContactInquiryType {
  id: ContactInquiryTypeId;
  label: string;
  email: string;
  description?: string;
}

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
  sensitiveDataWarning: string;
  inquiryTypes: ContactInquiryType[];
  contactInfo: ContactInfo[];
  socialLinks: SocialLink[];
  formFields: {
    inquiryType: { label: string; placeholder: string; required: boolean };
    firstName: { label: string; placeholder: string; required: boolean };
    lastName: { label: string; placeholder: string; required: boolean };
    email: { label: string; placeholder: string; required: boolean };
    phone: { label: string; placeholder: string; required: boolean };
    subject: { label: string; placeholder: string; required: boolean };
    message: { label: string; placeholder: string; required: boolean };
  };
  submitButton: string;
}

export function getInquiryTypeById(id: ContactInquiryTypeId): ContactInquiryType | undefined {
  return contactConfig.inquiryTypes.find((type) => type.id === id);
}

export function getInquiryEmail(id: ContactInquiryTypeId): string {
  return getInquiryTypeById(id)?.email ?? labEmails.info;
}

export const contactConfig: ContactConfig = {
  badge: 'Get in Touch',
  title: 'Contact Us',
  subtitle: 'We\'d Love to Hear From You',
  description: 'Have questions about our research, collaboration opportunities, or career openings? Our team is here to help. Choose a topic below so your message reaches the right team.',
  sensitiveDataWarning:
    'Do not submit medical records, national IDs, or other sensitive personal data through this form. See our Privacy Policy for details.',

  inquiryTypes: [
    {
      id: 'general',
      label: 'General inquiry',
      email: labEmails.info,
      description: 'Questions about the lab, our research, or other topics',
    },
    {
      id: 'research',
      label: 'Research collaboration',
      email: labEmails.research,
      description: 'Partnerships, datasets, and joint research inquiries',
    },
    {
      id: 'media',
      label: 'Media / press',
      email: labEmails.info,
      description: 'Interview requests, press kits, and media coverage',
    },
    {
      id: 'careers',
      label: 'Careers',
      email: labEmails.careers,
      description: 'Internships, roles, and collaboration opportunities',
    },
    {
      id: 'privacy',
      label: 'Privacy request',
      email: labEmails.privacy,
      description: 'Data access, correction, or privacy-related inquiries',
    },
    {
      id: 'legal',
      label: 'Legal',
      email: labEmails.legal,
      description: 'Legal notices, compliance, and contractual matters',
    },
  ],

  contactInfo: [
    {
      icon: Mail,
      title: 'Email by Topic',
      details: [
        `General: ${labEmails.info}`,
        `Research: ${labEmails.research}`,
        `Media / press: ${labEmails.info}`,
        `Careers: ${labEmails.careers}`,
        `Privacy: ${labEmails.privacy}`,
        `Legal: ${labEmails.legal}`,
      ],
      href: `mailto:${labEmails.info}`
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (213) 507-6622', 'Mon-Fri, 9AM-6PM'],
      href: 'tel:+12135076622'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['691 Irolo St, Apt 711', 'Los Angeles, CA 90005', 'United States'],
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
      href: 'https://www.linkedin.com/company/credence-xai/',
      icon: 'linkedin'
    },
    {
      name: 'Twitter',
      href: 'https://x.com/CredenceXAI',
      icon: 'twitter'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/credencexai-debug',
      icon: 'github'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@CredenceXAI',
      icon: 'youtube'
    }
  ],

  formFields: {
    inquiryType: {
      label: 'What can we help you with?',
      placeholder: 'Select a topic...',
      required: true,
    },
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
