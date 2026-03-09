import { DocSection } from './types';

export const privacyPolicyConfig = {
  lastUpdated: "March 7, 2026",
  effectiveDate: "March 7, 2026",

  introduction: {
    description:
      "CredenceX AI Research Lab respects your privacy. This Privacy Policy explains how we collect, use, share, and protect personal information when you visit our website and when you contact or subscribe to updates from us. This Privacy Policy covers website interactions (e.g., browsing, newsletter subscription, contact inquiries). Research collaborations involving datasets, sensitive information, or project-specific governance are typically handled through separate agreements and controls. Please do not submit sensitive personal data (e.g., medical records, national IDs) through the website contact form."
  },

  sections: [
    {
      title: "Information we collect",
      blocks: [
        { type: 'paragraph', text: "We collect information in the following ways:" },
      ],
      subsections: [
        {
          title: "Information you provide to us",
          blocks: [
            { type: 'paragraph', text: "We collect information you choose to provide, such as:" },
            { type: 'bullets', items: [
              "Contact inquiries: name, email address, phone number (if provided), subject, and message content (and any information you include voluntarily).",
              "Newsletter / updates subscription: email address.",
            ]},
          ],
        },
        {
          title: "Information collected automatically (website usage and analytics)",
          blocks: [
            { type: 'paragraph', text: "When you access the website, our hosting and analytics infrastructure may process service-generated and log data, which can include IP address, device and browser information, request/response details, timestamps, referrer URLs, and diagnostic or performance-related data." },
            { type: 'paragraph', text: "We also use Vercel Web Analytics to understand aggregate site usage and improve our website. Vercel Web Analytics is designed to work without third-party cookies and identifies end users using a hash created from the incoming request. The visitor session identifier is automatically discarded after 24 hours." },
          ],
        },
        {
          title: "Information we do not intentionally request via the website",
          blocks: [
            { type: 'paragraph', text: "We do not request sensitive categories of personal data via the website. If you voluntarily include sensitive information in a message, we will treat it with appropriate care, but you should avoid sending such information through the site." },
          ],
        },
      ],
    },
    {
      title: "How we use your information",
      blocks: [
        { type: 'paragraph', text: "We use personal information for the following purposes:" },
        { type: 'bullets', items: [
          "Responding to inquiries and communicating with you.",
          "Providing updates if you subscribe (newsletters, announcements, opportunities).",
          "Operating, securing, and maintaining the website (e.g., preventing abuse, diagnosing outages, improving performance).",
          "Understanding website usage and improving website quality through privacy-oriented analytics (Vercel Web Analytics).",
          "Complying with legal obligations and protecting our rights and safety.",
        ]},
      ],
    },
    {
      title: "Legal bases (where applicable)",
      blocks: [
        { type: 'paragraph', text: "Depending on your jurisdiction, we may rely on one or more of the following bases:" },
        { type: 'bullets', items: [
          "Consent (e.g., subscribing to updates; you may unsubscribe at any time).",
          "Legitimate interests (e.g., website security, preventing abuse, performance monitoring, and aggregate analytics to improve the site).",
          "Contract / pre-contract steps (e.g., responding to collaboration inquiries you initiate).",
          "Legal obligations (e.g., responding to lawful requests).",
        ]},
      ],
    },
    {
      title: "Sharing and disclosures",
      blocks: [
        { type: 'paragraph', text: "We do not sell your personal information." },
        { type: 'paragraph', text: "We may share information in limited circumstances:" },
        { type: 'bullets', items: [
          "Service providers who help us operate the website and communications (see Section 5).",
          "Legal and safety reasons (e.g., to comply with law, enforce agreements, protect rights, investigate misuse).",
          "With your direction or consent (e.g., if you ask us to connect you with a collaborator).",
        ]},
        { type: 'closing', text: "We may also publish or share aggregated information that does not identify individuals." },
      ],
    },
    {
      title: "Service providers",
      blocks: [],
      subsections: [
        {
          title: "Website hosting and analytics: Vercel",
          blocks: [
            { type: 'paragraph', text: "Our website is hosted on Vercel, and we use Vercel Web Analytics for privacy-oriented traffic measurement and website improvement. Vercel describes its privacy practices in its published policies and analytics documentation." },
          ],
        },
        {
          title: "Email services: Namecheap",
          blocks: [
            { type: 'paragraph', text: "We use Namecheap for email services to send and receive communications (e.g., responding to inquiries and delivering updates). Namecheap describes its privacy practices in its published policies." },
          ],
        },
      ],
    },
    {
      title: "Cookies and similar technologies",
      blocks: [],
      subsections: [
        {
          title: "Essential cookies",
          blocks: [
            { type: 'paragraph', text: "We may use essential cookies (and similar local storage mechanisms) necessary for core site functionality and security." },
          ],
        },
        {
          title: "Analytics (Vercel Web Analytics)",
          blocks: [
            { type: 'paragraph', text: "We use Vercel Web Analytics, which is designed to measure traffic without third-party cookies. Instead, visitors are identified by a hash created from the incoming request, and the visitor session identifier is automatically discarded after 24 hours." },
          ],
        },
        {
          title: "No behavioral advertising",
          blocks: [
            { type: 'paragraph', text: "We do not use the website to conduct behavioral advertising based on third-party cookie tracking." },
          ],
        },
        {
          title: "Your controls",
          blocks: [
            { type: 'paragraph', text: "You can control cookies through your browser settings. Disabling certain cookies may affect site functionality." },
          ],
        },
      ],
    },
    {
      title: "Data retention",
      blocks: [
        { type: 'paragraph', text: "We retain personal information only as long as reasonably necessary for the purposes described above:" },
        { type: 'bullets', items: [
          "Contact inquiries: retained for as long as needed to respond and maintain an appropriate record of communication, then deleted or minimized.",
          "Newsletter subscriptions: retained until you unsubscribe (or we discontinue the list).",
          "Vercel Web Analytics session identifier: automatically discarded after 24 hours (per Vercel's analytics documentation).",
          "Hosting/security logs: retained as needed for operational security and troubleshooting, consistent with platform and operational practices.",
        ]},
      ],
    },
    {
      title: "Security",
      blocks: [
        { type: 'paragraph', text: "We use reasonable administrative and technical safeguards appropriate to the nature of the information we handle. No method of transmission or storage is fully secure; we cannot guarantee absolute security." },
      ],
    },
    {
      title: "International data transfers",
      blocks: [
        { type: 'paragraph', text: "Because we use service providers, your information may be processed in countries other than your country of residence. Vercel describes cross-border processing and safeguards in its published legal terms and privacy documentation." },
      ],
    },
    {
      title: "Your privacy rights",
      blocks: [
        { type: 'paragraph', text: "Depending on your location and applicable law, you may have rights such as:" },
        { type: 'bullets', items: [
          "Accessing, correcting, or deleting your personal information.",
          "Objecting to or restricting certain processing.",
          "Data portability (where applicable).",
          "Withdrawing consent (e.g., newsletter unsubscribe).",
        ]},
        { type: 'closing', text: "To exercise your rights, contact us using the details in Section 13. We may need to verify your identity before completing certain requests." },
      ],
    },
    {
      title: "Children's privacy",
      blocks: [
        { type: 'paragraph', text: "Our website is not directed to children under 16, and we do not knowingly collect personal information from children. If you believe a child has provided personal information through the website, please contact us so we can address it." },
      ],
    },
    {
      title: "Third-party links",
      blocks: [
        { type: 'paragraph', text: "Our website may include links to third-party sites. We are not responsible for their privacy practices. Please review their policies before providing personal information." },
      ],
    },
    {
      title: "Contact",
      blocks: [
        { type: 'paragraph', text: "For privacy questions or requests, contact:" },
      ],
      subsections: [
        {
          title: "Privacy Contact (CredenceX AI Research Lab)",
          blocks: [
            { type: 'bullets', items: [
              "Email: support@credencex.ai",
              "Phone: +1 (213) 507-6622",
              "Address: 691 Irolo St, Apt 711, Los Angeles, CA 90005, United States",
            ]},
          ],
        },
      ],
    },
    {
      title: "Changes to this policy",
      blocks: [
        { type: 'paragraph', text: "We may update this Privacy Policy from time to time. We will post the updated version on this page and revise the \"Last updated\" date above." },
      ],
    },
  ] as DocSection[],
};
