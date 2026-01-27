import { Sparkles, Zap, Shield, LucideIcon } from 'lucide-react';

export interface SubscriptionConfig {
  title: string;
  subtitle: string;
  description: string;
  inputPlaceholder: string;
  buttonText: string;
  successMessage: string;
  errorMessage: string;
  privacyText: string;
}

export interface SubscriptionBenefit {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const subscriptionContent: SubscriptionConfig = {
  title: "Stay Updated with CredenceX",
  subtitle: "Join Our Research Community",
  description: "Subscribe to receive the latest research updates, breakthrough discoveries, and exclusive insights from our AI research lab.",
  inputPlaceholder: "Enter your email address",
  buttonText: "Subscribe Now",
  successMessage: "Thank you for subscribing! Check your email to confirm.",
  errorMessage: "Please enter a valid email address.",
  privacyText: "We respect your privacy. Unsubscribe at any time."
};

export const subscriptionBenefits: SubscriptionBenefit[] = [
  {
    id: 1,
    icon: Sparkles,
    title: "Early Access",
    description: "Get first access to new research papers and findings"
  },
  {
    id: 2,
    icon: Zap,
    title: "Weekly Insights",
    description: "Receive curated AI insights and industry updates"
  },
  {
    id: 3,
    icon: Shield,
    title: "Privacy First",
    description: "Your data is secure and never shared with third parties"
  }
];
