// Re-export shared types so existing imports of TermsBlock etc. keep working.
export type { DocBlock as TermsBlock, DocSubsection as TermsSubsection, DocSection as TermsSection } from './types';

export const termsConditionsConfig = {
  lastUpdated: "March 8, 2026",
  effectiveDate: "March 8, 2026",

  introduction: {
    title: "Terms of Use (CredenceX AI Research Lab)",
    description: "These Terms of Use govern your access to and use of the CredenceX AI Research Lab website. By accessing or using the Site, you agree to these Terms. If you do not agree, do not use the Site. These Terms are intended for an informational, research-lab website. The Site does not require user account registration, and we do not provide account-based services through the Site."
  },

  sections: [
    {
      title: "About CredenceX and the Site",
      blocks: [
        { type: 'paragraph', text: "CredenceX AI Research Lab is an independent, mission-driven research initiative focused on trustworthy, explainable, and deployment-aware artificial intelligence. The Site provides information about our research areas, publications, projects, news, career opportunities, and ways to contact us." },
        { type: 'paragraph', text: "CredenceX is not currently registered as a nonprofit or tax-exempt organization. For more information, see our Institutional Status & Legal Notice page." },
      ],
    },
    {
      title: "Eligibility",
      blocks: [
        { type: 'paragraph', text: "You may use the Site only if you can form a binding contract in your jurisdiction and you will use the Site in compliance with applicable laws. The Site is not directed to children under 16." },
      ],
    },
    {
      title: "Permitted use of the Site",
      blocks: [
        { type: 'paragraph', text: "Subject to these Terms, CredenceX grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Site for personal, educational, and non-commercial research purposes." },
        { type: 'bullets', items: [
          "Use the Site for unlawful, harmful, or fraudulent purposes.",
          "Interfere with or disrupt the Site, its servers, or networks.",
          "Attempt to gain unauthorized access to any part of the Site or related systems.",
          "Upload or transmit malicious code or harmful content.",
          "Systematically scrape, crawl, or harvest Site content in a manner that materially degrades performance, bypasses technical protections, or violates applicable law.",
          "Misrepresent your identity or affiliation with CredenceX.",
        ]},
        { type: 'closing', text: "We may implement technical measures to protect the Site, including rate limiting and security controls." },
      ],
    },
    {
      title: "Intellectual property and content ownership",
      blocks: [
        { type: 'paragraph', text: "Unless otherwise stated, the Site and its content—including text, graphics, logos, site design, and other materials—are owned by CredenceX or licensed to CredenceX and are protected by intellectual property laws." },
      ],
      subsections: [
        {
          title: "Publications and third-party materials",
          blocks: [
            { type: 'bullets', items: [
              "Publications listed on the Site may be subject to publisher copyright, license terms, or third-party rights.",
              "Third-party names, trademarks, and logos belong to their respective owners and are used for identification or attribution.",
            ]},
          ],
        },
        {
          title: "Academic citation",
          blocks: [
            { type: 'paragraph', text: "You may cite CredenceX research in scholarly work with appropriate attribution. Any reuse beyond fair use or applicable exceptions must comply with the relevant rights holder's terms (e.g., publisher licenses)." },
          ],
        },
      ],
    },
    {
      title: "User submissions (contact forms, emails, and messages)",
      blocks: [
        { type: 'paragraph', text: "If you submit information through the Site (e.g., contact inquiries or collaboration messages), you represent that you have the right to provide that information." },
        { type: 'paragraph', text: "Do not submit sensitive information: Do not submit sensitive personal data (e.g., medical records, national IDs, highly confidential information) through the Site. If you need to share sensitive information for a legitimate reason, request a secure channel first." },
      ],
      subsections: [
        {
          title: "Purpose-limited license",
          blocks: [
            { type: 'paragraph', text: "You grant CredenceX a limited license to use your submission solely to:" },
            { type: 'bullets', items: [
              "Respond to your inquiry.",
              "Evaluate collaboration or recruitment communications you initiate.",
              "Administer and operate the Site and communications.",
              "Maintain appropriate records consistent with our Privacy Policy.",
            ]},
          ],
        },
      ],
    },
    {
      title: "Research and medical disclaimer (high-stakes use)",
      blocks: [
        { type: 'paragraph', text: "The Site is provided for research communication and educational purposes." },
      ],
      subsections: [
        {
          title: "Disclaimers",
          blocks: [
            { type: 'bullets', items: [
              "No medical advice: The Site does not provide medical advice and is not a substitute for professional medical judgment.",
              "Not a medical device: Any models, prototypes, or tools described are for research and evaluation and are not presented as clinically validated medical devices unless explicitly stated.",
              "No reliance for diagnosis or treatment: Do not use Site content to diagnose, treat, or make clinical decisions. Consult qualified professionals for clinical matters.",
              "Performance limitations: Research results are context-dependent and may not generalize across settings, devices, populations, or data distributions. Real-world deployment requires careful validation, governance, and oversight.",
            ]},
          ],
        },
      ],
    },
    {
      title: "Links to third-party websites",
      blocks: [
        { type: 'paragraph', text: "The Site may include links to third-party websites or resources. We do not control and are not responsible for third-party content, products, or services. Your use of third-party sites is governed by their terms and policies." },
      ],
    },
    {
      title: "Privacy",
      blocks: [
        { type: 'paragraph', text: "Our collection and use of personal information through the Site is described in our Privacy Policy, which is incorporated into these Terms by reference. By using the Site, you acknowledge that you have read the Privacy Policy." },
      ],
    },
    {
      title: "Disclaimer of warranties",
      blocks: [
        { type: 'paragraph', text: 'THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, CREDENCEX DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.' },
        { type: 'paragraph', text: "We do not warrant that the Site will be uninterrupted, secure, error-free, or that content will be complete or current." },
      ],
    },
    {
      title: "Limitation of liability",
      blocks: [
        { type: 'paragraph', text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, CREDENCEX WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING FROM OR RELATED TO YOUR USE OF (OR INABILITY TO USE) THE SITE." },
        { type: 'paragraph', text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, CREDENCEX'S TOTAL LIABILITY FOR ALL CLAIMS RELATING TO THE SITE SHALL NOT EXCEED USD 100." },
        { type: 'closing', text: "Some jurisdictions do not allow certain exclusions or limitations; in such cases, the limitations apply to the extent permitted by law." },
      ],
    },
    {
      title: "Suspension and termination",
      blocks: [
        { type: 'paragraph', text: "We may suspend or terminate access to the Site (in whole or in part) at any time if we reasonably believe:" },
        { type: 'bullets', items: [
          "Your use poses a security risk.",
          "Your use violates these Terms or applicable law.",
          "Your use could harm CredenceX, other users, or third parties.",
        ]},
        { type: 'closing', text: "Because the Site does not require accounts, termination generally means restricting access (e.g., blocking abusive traffic) or limiting functionality." },
      ],
    },
    {
      title: "Changes to the Site and Terms",
      blocks: [
        { type: 'paragraph', text: 'We may modify the Site or these Terms from time to time. We will post the updated Terms on this page and update the "Last updated" date above. Your continued use of the Site after changes become effective constitutes acceptance of the updated Terms.' },
      ],
    },
    {
      title: "Governing law and venue",
      blocks: [
        { type: 'paragraph', text: "These Terms are governed by the laws of the State of California, without regard to conflict-of-law principles. Unless prohibited by applicable law, you agree that any dispute arising out of or relating to these Terms or the Site will be brought in the state or federal courts located in Los Angeles County, California, and you consent to personal jurisdiction there." },
      ],
    },
    {
      title: "Contact",
      blocks: [
        { type: 'paragraph', text: "Questions about these Terms may be sent to:" },
      ],
      subsections: [
        {
          title: "CredenceX AI Research Lab",
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
  ] as import('./types').DocSection[]
};
