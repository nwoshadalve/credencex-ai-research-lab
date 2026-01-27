export interface PolicySection {
  title: string;
  content: string[];
  subsections?: {
    title: string;
    content: string[];
  }[];
}

export const privacyPolicyConfig = {
  lastUpdated: "January 27, 2026",
  effectiveDate: "January 1, 2026",
  
  introduction: {
    title: "Privacy Policy",
    description: "At CredenceX AI Research Lab, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services."
  },

  sections: [
    {
      title: "Information We Collect",
      content: [
        "We collect information that you provide directly to us, information we obtain automatically when you use our services, and information from third-party sources."
      ],
      subsections: [
        {
          title: "Personal Information",
          content: [
            "Name, email address, phone number, and other contact details",
            "Professional information such as job title, organization, and research interests",
            "Academic credentials and publications",
            "Correspondence and communications with us"
          ]
        },
        {
          title: "Automatically Collected Information",
          content: [
            "IP address, browser type, and device information",
            "Usage data, including pages visited and time spent on our website",
            "Cookies and similar tracking technologies",
            "Referral sources and navigation patterns"
          ]
        },
        {
          title: "Research and Collaboration Data",
          content: [
            "Research proposals and project submissions",
            "Collaboration agreements and partnership information",
            "Publications and research outputs",
            "Conference and event participation data"
          ]
        }
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "We use the collected information for various purposes to provide, maintain, and improve our services."
      ],
      subsections: [
        {
          title: "Primary Uses",
          content: [
            "To process and respond to your inquiries and requests",
            "To facilitate research collaborations and partnerships",
            "To send newsletters, updates, and information about our research activities",
            "To improve our website, services, and user experience",
            "To conduct research and analysis to advance AI development",
            "To comply with legal obligations and protect our rights"
          ]
        },
        {
          title: "Communications",
          content: [
            "We may send you emails about our research updates, publications, events, and opportunities",
            "You can opt out of marketing communications at any time",
            "We will continue to send essential service-related communications"
          ]
        }
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:"
      ],
      subsections: [
        {
          title: "Authorized Disclosures",
          content: [
            "With research partners and collaborators, with your consent",
            "With service providers who assist in operating our website and services",
            "With academic institutions and research organizations for collaborative projects",
            "To comply with legal obligations, court orders, or government requests",
            "To protect our rights, privacy, safety, or property, and that of our users"
          ]
        },
        {
          title: "Aggregate Information",
          content: [
            "We may share anonymized, aggregated data for research and analysis purposes",
            "This data cannot be used to identify individual users"
          ]
        }
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
      ],
      subsections: [
        {
          title: "Security Measures",
          content: [
            "Encryption of data in transit and at rest",
            "Regular security assessments and audits",
            "Access controls and authentication mechanisms",
            "Employee training on data protection and privacy",
            "Incident response and breach notification procedures"
          ]
        },
        {
          title: "Limitations",
          content: [
            "No method of transmission over the internet is 100% secure",
            "We cannot guarantee absolute security of your information",
            "You are responsible for maintaining the confidentiality of your account credentials"
          ]
        }
      ]
    },
    {
      title: "Your Privacy Rights",
      content: [
        "You have certain rights regarding your personal information, subject to applicable laws."
      ],
      subsections: [
        {
          title: "Access and Control",
          content: [
            "Right to access your personal information we hold",
            "Right to request correction of inaccurate or incomplete data",
            "Right to request deletion of your personal information",
            "Right to object to or restrict certain processing activities",
            "Right to data portability",
            "Right to withdraw consent at any time"
          ]
        },
        {
          title: "Exercising Your Rights",
          content: [
            "Contact us at privacy@credencex-ai.com to exercise your rights",
            "We will respond to your request within 30 days",
            "Identity verification may be required for security purposes"
          ]
        }
      ]
    },
    {
      title: "Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar technologies to enhance your experience on our website."
      ],
      subsections: [
        {
          title: "Types of Cookies",
          content: [
            "Essential cookies: Required for website functionality",
            "Analytics cookies: Help us understand how you use our site",
            "Preference cookies: Remember your settings and choices",
            "Marketing cookies: Used for targeted communications (with consent)"
          ]
        },
        {
          title: "Cookie Management",
          content: [
            "You can control cookies through your browser settings",
            "Disabling certain cookies may affect website functionality",
            "Third-party cookies may be subject to their own privacy policies"
          ]
        }
      ]
    },
    {
      title: "International Data Transfers",
      content: [
        "Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers."
      ],
      subsections: [
        {
          title: "Transfer Mechanisms",
          content: [
            "Standard contractual clauses approved by regulatory authorities",
            "Adequacy decisions by relevant data protection authorities",
            "Consent where required by applicable law",
            "Other lawful transfer mechanisms as appropriate"
          ]
        }
      ]
    },
    {
      title: "Children's Privacy",
      content: [
        "Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information."
      ]
    },
    {
      title: "Third-Party Links",
      content: [
        "Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information."
      ]
    },
    {
      title: "Data Retention",
      content: [
        "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law."
      ],
      subsections: [
        {
          title: "Retention Criteria",
          content: [
            "Active user accounts: Duration of account plus statutory retention periods",
            "Research collaboration data: Duration of project plus archival requirements",
            "Marketing communications: Until you opt out or request deletion",
            "Legal compliance: As required by applicable laws and regulations"
          ]
        }
      ]
    },
    {
      title: "Changes to This Privacy Policy",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on our website and updating the 'Last Updated' date."
      ],
      subsections: [
        {
          title: "Your Acceptance",
          content: [
            "Continued use of our services after changes constitutes acceptance",
            "We encourage you to review this policy periodically",
            "Material changes may require additional consent where required by law"
          ]
        }
      ]
    },
    {
      title: "Contact Information",
      content: [
        "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:"
      ],
      subsections: [
        {
          title: "Privacy Office",
          content: [
            "Email: privacy@credencex-ai.com",
            "Phone: +1 (234) 567-890",
            "Address: 123 AI Research Blvd, Innovation District, CA 94000",
            "Data Protection Officer: dpo@credencex-ai.com"
          ]
        },
        {
          title: "Response Time",
          content: [
            "We strive to respond to all inquiries within 5 business days",
            "Complex requests may require additional time",
            "We will keep you informed of the status of your request"
          ]
        }
      ]
    }
  ] as PolicySection[]
};
