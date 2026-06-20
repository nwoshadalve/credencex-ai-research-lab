import { LucideIcon } from 'lucide-react';

export interface PhilosophyItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface WhatDrivesItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PhilosophyContent {
  badge: string;
  title: string;
  subtitle: string;
  philosophy: {
    title: string;
    content: string[];
  };
  whatDrivesUs: {
    title: string;
    content: string[];
  };
}

export const philosophyContent: PhilosophyContent = {
  badge: "Our Philosophy",
  title: "The Principles That Guide Us",
  subtitle: "Evidence-based research with responsible practice",
  philosophy: {
    title: "Our Philosophy",
    content: [
      "At CredenceX AI Research Lab, we believe AI should be developed with transparency, accountability, and respect for human values—especially in high-stakes settings where errors can affect well-being.",
      "We focus on methods and systems that are evaluated rigorously, documented clearly, and communicated with appropriate caution about limitations and intended use.",
      "Human-centered design guides our work: AI should support human decision-making, not replace accountable oversight. We prioritize workflows and outputs that clinicians and researchers can interpret and audit.",
      "We collaborate with researchers, clinicians, and institutions where appropriate, and share methods and findings through peer-reviewed publications and reproducible artifacts when feasible."
    ]
  },
  whatDrivesUs: {
    title: "What Drives Us",
    content: [
      "High-stakes domains such as healthcare need AI that remains reliable under real-world variability—across sites, devices, and patient populations.",
      "We are motivated by open questions in robustness, calibration, explainability, and responsible deployment—not by claims of readiness without evidence.",
      "We aim for careful methodology, honest reporting, and implementations that others can inspect, reproduce, and build on where appropriate.",
      "We support mentorship, interdisciplinary collaboration, and capacity building for researchers entering trustworthy AI work."
    ]
  }
};
