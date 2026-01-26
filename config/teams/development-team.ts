export interface DevelopmentTeamMember {
  id: number;
  name: string;
  role: string;
  position: string;
  department: string;
  email: string;
  avatar: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    portfolio?: string;
    stackoverflow?: string;
  };
}

export type DevelopmentRole = 
  | 'Lead Developer'
  | 'Senior Full Stack Developer'
  | 'Senior Frontend Developer'
  | 'Senior Backend Developer'
  | 'DevOps Engineer'
  | 'ML Engineer'
  | 'Full Stack Developer'
  | 'Frontend Developer';

export const developmentTeam: DevelopmentTeamMember[] = [
  // Lead Developer (1)
  {
    id: 1,
    name: 'Alex Thompson',
    role: 'Lead Developer',
    position: 'Engineering Lead',
    department: 'Development Team',
    email: 'a.thompson@sentinelx-ai.org',
    avatar: '/team/dev/alex-thompson.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/alex-thompson-dev',
      github: 'https://github.com/alexthompson',
      twitter: 'https://twitter.com/alex_dev',
      portfolio: 'https://alexthompson.dev'
    }
  },

  // Senior Full Stack Developer (2)
  {
    id: 2,
    name: 'Maria Garcia',
    role: 'Senior Full Stack Developer',
    position: 'Senior Full Stack Engineer',
    department: 'Development Team',
    email: 'm.garcia@sentinelx-ai.org',
    avatar: '/team/dev/maria-garcia.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/maria-garcia-fullstack',
      github: 'https://github.com/mgarcia',
      twitter: 'https://twitter.com/maria_fullstack',
      stackoverflow: 'https://stackoverflow.com/users/mgarcia'
    }
  },
  {
    id: 3,
    name: 'Daniel Park',
    role: 'Senior Full Stack Developer',
    position: 'Senior Full Stack Engineer',
    department: 'Development Team',
    email: 'd.park@sentinelx-ai.org',
    avatar: '/team/dev/daniel-park.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/daniel-park-dev',
      github: 'https://github.com/dpark',
      portfolio: 'https://danielpark.io',
      stackoverflow: 'https://stackoverflow.com/users/dpark'
    }
  },

  // Senior Frontend Developer (1)
  {
    id: 4,
    name: 'Sophie Anderson',
    role: 'Senior Frontend Developer',
    position: 'Senior Frontend Engineer',
    department: 'Development Team',
    email: 's.anderson@sentinelx-ai.org',
    avatar: '/team/dev/sophie-anderson.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sophie-anderson-frontend',
      github: 'https://github.com/sanderson',
      twitter: 'https://twitter.com/sophie_frontend',
      portfolio: 'https://sophieanderson.design'
    }
  },

  // Senior Backend Developer (1)
  {
    id: 5,
    name: 'Nathan Wright',
    role: 'Senior Backend Developer',
    position: 'Senior Backend Engineer',
    department: 'Development Team',
    email: 'n.wright@sentinelx-ai.org',
    avatar: '/team/dev/nathan-wright.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/nathan-wright-backend',
      github: 'https://github.com/nwright',
      stackoverflow: 'https://stackoverflow.com/users/nwright'
    }
  },

  // DevOps Engineer (2)
  {
    id: 6,
    name: 'Rachel Chen',
    role: 'DevOps Engineer',
    position: 'Senior DevOps Engineer',
    department: 'Development Team',
    email: 'r.chen@sentinelx-ai.org',
    avatar: '/team/dev/rachel-chen.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/rachel-chen-devops',
      github: 'https://github.com/rchen',
      twitter: 'https://twitter.com/rachel_devops'
    }
  },
  {
    id: 7,
    name: 'Omar Hassan',
    role: 'DevOps Engineer',
    position: 'DevOps Engineer',
    department: 'Development Team',
    email: 'o.hassan@sentinelx-ai.org',
    avatar: '/team/dev/omar-hassan.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/omar-hassan-devops',
      github: 'https://github.com/ohassan',
      stackoverflow: 'https://stackoverflow.com/users/ohassan'
    }
  },

  // ML Engineer (1)
  {
    id: 8,
    name: 'Jessica Liu',
    role: 'ML Engineer',
    position: 'Senior ML Engineer',
    department: 'Development Team',
    email: 'j.liu@sentinelx-ai.org',
    avatar: '/team/dev/jessica-liu.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/jessica-liu-mle',
      github: 'https://github.com/jliu',
      twitter: 'https://twitter.com/jessica_mlops'
    }
  },

  // Full Stack Developer (1)
  {
    id: 9,
    name: 'Chris Johnson',
    role: 'Full Stack Developer',
    position: 'Full Stack Engineer',
    department: 'Development Team',
    email: 'c.johnson@sentinelx-ai.org',
    avatar: '/team/dev/chris-johnson.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/chris-johnson-fullstack',
      github: 'https://github.com/cjohnson',
      portfolio: 'https://chrisjohnson.codes'
    }
  },

  // Frontend Developer (1)
  {
    id: 10,
    name: 'Emily Davis',
    role: 'Frontend Developer',
    position: 'Frontend Engineer',
    department: 'Development Team',
    email: 'e.davis@sentinelx-ai.org',
    avatar: '/team/dev/emily-davis.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/emily-davis-frontend',
      github: 'https://github.com/edavis',
      twitter: 'https://twitter.com/emily_ui',
      portfolio: 'https://emilydavis.design'
    }
  }
];

// Helper to get team members by role
export const getDevelopmentTeamByRole = (role: DevelopmentRole): DevelopmentTeamMember[] => {
  return developmentTeam.filter(member => member.role === role);
};

// Get all unique roles
export const getAllDevelopmentRoles = (): DevelopmentRole[] => {
  return Array.from(new Set(developmentTeam.map(member => member.role as DevelopmentRole)));
};
