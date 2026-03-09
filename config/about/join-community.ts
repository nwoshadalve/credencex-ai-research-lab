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
  description: "Collaborate with dedicated researchers and developers working on trustworthy AI for real-world conditions. We welcome contributors who value rigor, transparency, and responsible innovation.",
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
