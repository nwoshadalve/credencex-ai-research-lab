export interface TermsSection {
  title: string;
  content: string[];
  subsections?: {
    title: string;
    content: string[];
  }[];
}

export const termsConditionsConfig = {
  lastUpdated: "January 27, 2026",
  effectiveDate: "January 1, 2026",
  
  introduction: {
    title: "Terms of Service",
    description: "Welcome to CredenceX AI Research Lab. These Terms of Service ('Terms') govern your access to and use of our website, services, and any related content. By accessing or using our services, you agree to be bound by these Terms. Please read them carefully."
  },

  sections: [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing, browsing, or using the CredenceX AI Research Lab website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.",
        "If you do not agree to these Terms, you must not access or use our services. We reserve the right to modify these Terms at any time, and your continued use of our services constitutes acceptance of any changes."
      ]
    },
    {
      title: "Eligibility and Account Registration",
      content: [
        "Our services are intended for use by individuals and organizations engaged in research, education, and professional activities related to artificial intelligence."
      ],
      subsections: [
        {
          title: "Age Requirement",
          content: [
            "You must be at least 16 years old to use our services",
            "Users under 18 require parental or guardian consent",
            "We reserve the right to verify age and identity at any time"
          ]
        },
        {
          title: "Account Responsibilities",
          content: [
            "You are responsible for maintaining the confidentiality of your account credentials",
            "You must provide accurate, current, and complete information during registration",
            "You must promptly update your account information if it changes",
            "You are responsible for all activities that occur under your account",
            "You must notify us immediately of any unauthorized use of your account"
          ]
        },
        {
          title: "Prohibited Account Activities",
          content: [
            "Creating multiple accounts to circumvent restrictions",
            "Sharing account credentials with unauthorized persons",
            "Using another person's account without permission",
            "Registering with false or misleading information"
          ]
        }
      ]
    },
    {
      title: "Permitted Use and Restrictions",
      content: [
        "You may use our services only for lawful purposes and in accordance with these Terms."
      ],
      subsections: [
        {
          title: "Permitted Activities",
          content: [
            "Accessing and browsing our website and public content",
            "Participating in research collaborations with proper authorization",
            "Downloading publicly available research papers and publications",
            "Subscribing to newsletters and updates",
            "Submitting inquiries through official contact channels",
            "Attending public events and webinars"
          ]
        },
        {
          title: "Prohibited Activities",
          content: [
            "Violating any applicable laws or regulations",
            "Infringing on intellectual property rights of CredenceX or third parties",
            "Transmitting malicious code, viruses, or harmful software",
            "Attempting to gain unauthorized access to our systems or networks",
            "Interfering with or disrupting our services or servers",
            "Harvesting or collecting information about other users",
            "Using our services for spam, phishing, or other fraudulent activities",
            "Impersonating CredenceX, our employees, or other users",
            "Engaging in any activity that could harm our reputation or operations"
          ]
        }
      ]
    },
    {
      title: "Intellectual Property Rights",
      content: [
        "All content, materials, and intellectual property on our website and services are owned by or licensed to CredenceX AI Research Lab."
      ],
      subsections: [
        {
          title: "Our Intellectual Property",
          content: [
            "Website design, layout, graphics, and user interface",
            "CredenceX name, logos, trademarks, and branding",
            "Research papers, publications, and technical documentation",
            "Software, algorithms, and AI models developed by CredenceX",
            "Educational materials, presentations, and multimedia content",
            "All data, databases, and compilations"
          ]
        },
        {
          title: "License Grant to Users",
          content: [
            "Limited, non-exclusive, non-transferable license to access our website",
            "Right to view and download publicly available research papers for personal, non-commercial use",
            "Permission to cite our publications with proper attribution",
            "All rights not expressly granted are reserved by CredenceX"
          ]
        },
        {
          title: "User-Generated Content",
          content: [
            "You retain ownership of content you submit to us",
            "By submitting content, you grant us a worldwide, non-exclusive license to use, reproduce, and display it",
            "You represent that you have all necessary rights to submit your content",
            "You are responsible for ensuring your content does not infringe third-party rights"
          ]
        }
      ]
    },
    {
      title: "Research Collaborations and Partnerships",
      content: [
        "Collaboration opportunities are subject to separate agreements and approval processes."
      ],
      subsections: [
        {
          title: "Collaboration Terms",
          content: [
            "All research collaborations require a formal agreement",
            "Intellectual property terms will be defined in collaboration agreements",
            "Publication rights and data sharing governed by specific contracts",
            "Confidentiality and non-disclosure requirements apply",
            "Compliance with research ethics and institutional policies required"
          ]
        },
        {
          title: "Application Process",
          content: [
            "Applications are reviewed on a case-by-case basis",
            "We reserve the right to accept or decline collaboration proposals",
            "Selection criteria include scientific merit, feasibility, and alignment with our mission",
            "Approved collaborations may require additional agreements"
          ]
        }
      ]
    },
    {
      title: "Third-Party Links and Services",
      content: [
        "Our website may contain links to third-party websites, services, or resources. We do not endorse, control, or assume responsibility for any third-party content, products, or services."
      ],
      subsections: [
        {
          title: "Your Responsibility",
          content: [
            "Review terms and privacy policies of third-party websites before use",
            "We are not liable for any harm or damages from third-party services",
            "Third-party terms and conditions apply to their services",
            "Links are provided for convenience only and do not imply endorsement"
          ]
        }
      ]
    },
    {
      title: "Disclaimer of Warranties",
      content: [
        "Our services are provided 'as is' and 'as available' without warranties of any kind, either express or implied."
      ],
      subsections: [
        {
          title: "No Warranty",
          content: [
            "We do not warrant that our services will be uninterrupted, secure, or error-free",
            "We do not guarantee the accuracy, completeness, or reliability of any content",
            "We disclaim all warranties, including merchantability, fitness for a particular purpose, and non-infringement",
            "Your use of our services is at your sole risk"
          ]
        },
        {
          title: "Research Disclaimer",
          content: [
            "Research findings and publications are for informational purposes only",
            "Results may not be applicable to all situations or contexts",
            "Independent verification is recommended before relying on research outputs",
            "We are not responsible for decisions made based on our research"
          ]
        }
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, CredenceX AI Research Lab shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services."
      ],
      subsections: [
        {
          title: "Exclusions",
          content: [
            "Loss of profits, revenue, data, or business opportunities",
            "Damage to reputation or goodwill",
            "Service interruptions or data loss",
            "Errors, mistakes, or inaccuracies in content",
            "Any damages arising from third-party content or services"
          ]
        },
        {
          title: "Maximum Liability",
          content: [
            "Our total liability shall not exceed the amount you paid us in the past 12 months",
            "If you have not paid us, our liability is limited to $100 USD",
            "Some jurisdictions do not allow limitation of liability, so these limits may not apply to you"
          ]
        }
      ]
    },
    {
      title: "Indemnification",
      content: [
        "You agree to indemnify, defend, and hold harmless CredenceX AI Research Lab, its affiliates, employees, and partners from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:"
      ],
      subsections: [
        {
          title: "Indemnification Obligations",
          content: [
            "Your violation of these Terms of Service",
            "Your infringement of any third-party rights",
            "Your misuse of our services",
            "Your submission of false or misleading information",
            "Any content you submit or share through our services",
            "Your violation of any applicable laws or regulations"
          ]
        }
      ]
    },
    {
      title: "Termination and Suspension",
      content: [
        "We reserve the right to suspend or terminate your access to our services at any time, with or without notice, for any reason."
      ],
      subsections: [
        {
          title: "Grounds for Termination",
          content: [
            "Violation of these Terms of Service",
            "Fraudulent, abusive, or illegal activity",
            "Prolonged inactivity of your account",
            "Request from law enforcement or regulatory authorities",
            "Discontinuation of services or features"
          ]
        },
        {
          title: "Effect of Termination",
          content: [
            "Your right to access our services immediately ceases",
            "We may delete your account and associated data",
            "Certain provisions of these Terms survive termination",
            "You remain liable for any obligations incurred before termination"
          ]
        },
        {
          title: "Your Right to Terminate",
          content: [
            "You may terminate your account at any time by contacting us",
            "Termination does not relieve you of any obligations incurred before termination",
            "We will process your request within a reasonable timeframe"
          ]
        }
      ]
    },
    {
      title: "Governing Law and Dispute Resolution",
      content: [
        "These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law principles."
      ],
      subsections: [
        {
          title: "Jurisdiction",
          content: [
            "You agree to submit to the exclusive jurisdiction of courts located in California",
            "Any legal action must be filed within one year of the claim arising",
            "Class action lawsuits are prohibited"
          ]
        },
        {
          title: "Dispute Resolution",
          content: [
            "We encourage informal resolution of disputes by contacting us first",
            "If informal resolution fails, disputes will be resolved through binding arbitration",
            "Arbitration shall be conducted under the rules of the American Arbitration Association",
            "Each party bears its own costs unless otherwise determined by the arbitrator"
          ]
        }
      ]
    },
    {
      title: "Changes to Terms of Service",
      content: [
        "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website."
      ],
      subsections: [
        {
          title: "Notification of Changes",
          content: [
            "We will update the 'Last Updated' date at the top of this page",
            "Material changes may be communicated via email or website notice",
            "Continued use of our services after changes constitutes acceptance",
            "You are responsible for reviewing these Terms periodically"
          ]
        }
      ]
    },
    {
      title: "General Provisions",
      content: [],
      subsections: [
        {
          title: "Severability",
          content: [
            "If any provision is found invalid or unenforceable, the remaining provisions continue in effect",
            "Invalid provisions will be modified to the minimum extent necessary"
          ]
        },
        {
          title: "Waiver",
          content: [
            "Our failure to enforce any provision does not constitute a waiver",
            "Waivers must be in writing to be effective"
          ]
        },
        {
          title: "Assignment",
          content: [
            "You may not assign or transfer these Terms without our written consent",
            "We may assign these Terms without restriction",
            "Any unauthorized assignment is void"
          ]
        },
        {
          title: "Entire Agreement",
          content: [
            "These Terms constitute the entire agreement between you and CredenceX",
            "They supersede all prior agreements and understandings",
            "Additional terms may apply to specific services or features"
          ]
        }
      ]
    },
    {
      title: "Contact Information",
      content: [
        "If you have questions, concerns, or requests regarding these Terms of Service, please contact us:"
      ],
      subsections: [
        {
          title: "Legal Department",
          content: [
            "Email: legal@credencex-ai.com",
            "Phone: +1 (234) 567-890",
            "Address: 123 AI Research Blvd, Innovation District, CA 94000",
            "General Inquiries: info@credencex-ai.com"
          ]
        },
        {
          title: "Response Time",
          content: [
            "We aim to respond to all inquiries within 5-7 business days",
            "Urgent legal matters will be prioritized",
            "Complex issues may require additional time for review"
          ]
        }
      ]
    }
  ] as TermsSection[]
};
