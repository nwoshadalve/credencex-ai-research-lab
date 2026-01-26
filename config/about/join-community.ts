export interface JoinCommunityContent {
  badge: string;
  title: string;
  description: string;
  buttons: {
    careers: {
      text: string;
      href: string;
    };
    contact: {
      text: string;
      href: string;
    };
  };
}

export const joinCommunityContent: JoinCommunityContent = {
  badge: "Join Us",
  title: "Join Our Research Community",
  description: "Collaborate with leading minds, contribute to groundbreaking AI research, and help shape the future. Whether you're looking to join our team or connect with us, we welcome passionate innovators from all backgrounds.",
  buttons: {
    careers: {
      text: "View Open Positions",
      href: "/careers"
    },
    contact: {
      text: "Contact Us",
      href: "/contact"
    }
  }
};
