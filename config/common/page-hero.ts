export interface PageHeroContent {
  badge?: {
    text: string;
  };
  title: string;
  subtitle?: string;
  description?: string;
  backgroundGradient?: {
    from: string;
    via: string;
    to: string;
  };
  cta?: {
    primary?: {
      text: string;
      href: string;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
}

export const pageHeroContent: Record<string, PageHeroContent> = {
  about: {
    badge: {
      text: "About Us"
    },
    title: "Pioneering the Future of Artificial Intelligence",
    subtitle: "Where Innovation Meets Responsibility",
    description: "SentinelX AI Research Lab is a leading research institution dedicated to advancing the frontiers of artificial intelligence. We focus on developing transparent, reliable, and ethical AI systems that address real-world challenges in security, healthcare, and decision support. Our multidisciplinary team combines cutting-edge research with practical applications to create AI technologies that benefit humanity.",
    backgroundGradient: {
      from: "from-blue-50",
      via: "via-indigo-50",
      to: "to-purple-50"
    },
    cta: {
      primary: {
        text: "Our Mission",
        href: "#mission"
      },
      secondary: {
        text: "Meet Our Team",
        href: "/team"
      }
    }
  },
  team: {
    badge: {
      text: "Our Team"
    },
    title: "Meet the Minds Behind SentinelX",
    subtitle: "World-Class Researchers and Innovators",
    description: "Our team comprises leading experts in artificial intelligence, machine learning, computer vision, and data science. United by a passion for innovation and a commitment to ethical AI development, we collaborate to push the boundaries of what's possible in AI research and applications.",
    backgroundGradient: {
      from: "from-cyan-50",
      via: "via-blue-50",
      to: "to-indigo-50"
    },
    cta: {
      primary: {
        text: "Join Our Team",
        href: "/careers"
      }
    }
  },
  projects: {
    badge: {
      text: "Our Projects"
    },
    title: "Transforming Research into Real-World Impact",
    subtitle: "Innovative Solutions for Complex Challenges",
    description: "Explore our portfolio of cutting-edge projects that span multimodal AI, large language models, computer vision, and trustworthy AI systems. Each project represents our commitment to advancing AI technology while maintaining the highest standards of safety, transparency, and ethical responsibility.",
    backgroundGradient: {
      from: "from-purple-50",
      via: "via-pink-50",
      to: "to-rose-50"
    },
    cta: {
      primary: {
        text: "View All Projects",
        href: "#projects"
      },
      secondary: {
        text: "Collaborate With Us",
        href: "/contact"
      }
    }
  },
  research: {
    badge: {
      text: "Research Areas"
    },
    title: "Advancing the Science of Artificial Intelligence",
    subtitle: "Fundamental Research for Tomorrow's Breakthroughs",
    description: "Our research focuses on foundational problems in AI, from developing more robust and interpretable models to ensuring AI systems are safe, fair, and aligned with human values. We publish our findings in top-tier conferences and journals, contributing to the global AI research community.",
    backgroundGradient: {
      from: "from-emerald-50",
      via: "via-teal-50",
      to: "to-cyan-50"
    },
    cta: {
      primary: {
        text: "Explore Research",
        href: "#research-areas"
      },
      secondary: {
        text: "Publications",
        href: "/publications"
      }
    }
  },
  publications: {
    badge: {
      text: "Publications"
    },
    title: "Sharing Knowledge with the World",
    subtitle: "Peer-Reviewed Research and Insights",
    description: "Browse our extensive collection of research papers, technical reports, and publications in leading AI and machine learning conferences. We believe in open science and actively contribute to the advancement of AI knowledge through rigorous research and transparent dissemination of our findings.",
    backgroundGradient: {
      from: "from-amber-50",
      via: "via-orange-50",
      to: "to-red-50"
    },
    cta: {
      primary: {
        text: "Browse Publications",
        href: "#publications"
      }
    }
  },
  careers: {
    badge: {
      text: "Careers"
    },
    title: "Join Us in Shaping the Future of AI",
    subtitle: "Opportunities for Talented Researchers and Engineers",
    description: "We're always looking for exceptional individuals who share our passion for advancing AI research and building ethical, impactful AI systems. Join our collaborative and innovative team where your work will contribute to solving some of the most challenging problems in artificial intelligence.",
    backgroundGradient: {
      from: "from-violet-50",
      via: "via-purple-50",
      to: "to-fuchsia-50"
    },
    cta: {
      primary: {
        text: "View Open Positions",
        href: "#positions"
      },
      secondary: {
        text: "Submit Application",
        href: "/apply"
      }
    }
  },
  researchPaper: {
    badge: {
      text: "Research Papers"
    },
    title: "Advancing AI Through Rigorous Research",
    subtitle: "Published Work in Leading Journals & Conferences",
    backgroundGradient: {
      from: "from-indigo-50",
      via: "via-blue-50",
      to: "to-cyan-50"
    },
    cta: {
      primary: {
        text: "Browse All Papers",
        href: "#papers"
      },
      secondary: {
        text: "Submit Collaboration",
        href: "/contact"
      }
    }
  },
  allProjects: {
    badge: {
      text: "All Projects"
    },
    title: "Transforming Research into Real-World Impact",
    subtitle: "Innovative AI Solutions Across Multiple Domains",
    backgroundGradient: {
      from: "from-purple-50",
      via: "via-pink-50",
      to: "to-rose-50"
    }
  }
};
