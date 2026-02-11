import {  
  FileText, 
  BookOpen,
  GraduationCap,
  Rocket, 
  FolderKanban,
  UserCircle,
  FolderOpen,
  Calendar,
  Code2,
  Home,
  Info,
  Newspaper,
  Briefcase,
  Mail
} from "lucide-react";
import { publications } from "@/config/home/publications";
import { projects } from "@/config/home/projects";
import { researchTeam } from "@/config/teams/research-team";
import { developmentTeam } from "@/config/teams/development-team";

// Calculate publication counts
const totalCount = publications.length;
const conferenceCount = publications.filter(p => p.type === 'conference').length;
const journalCount = publications.filter(p => p.type === 'journal').length;

// Calculate project counts
const totalProjects = projects.length;
const activeProjects = projects.filter(p => p.status === 'in-progress').length;
const completedProjects = projects.filter(p => p.status === 'completed').length;
const plannedProjects = projects.filter(p => p.status === 'planned').length;

// Calculate team counts
const researchTeamCount = researchTeam.length;
const developmentTeamCount = developmentTeam.length;

export interface MenuItem {
  label: string;
  href: string;
  submenu?: { label: string; href: string; icon?: React.ReactNode }[];
  icon?: React.ReactNode;
  highlighted?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home size={18} />,
  },
  {
    label: 'About',
    href: '/about',
    icon: <Info size={18} />,
  },
  {
    label: 'Publications',
    href: '/publications',
    icon: <FileText size={18} />,
    submenu: [
      { label: `Research Papers (${totalCount})`, href: '/publications?type=all', icon: <FileText size={16} /> },
      { label: `Conference Papers (${conferenceCount})`, href: '/publications?type=conference', icon: <BookOpen size={16} /> },
      { label: `Journal Articles (${journalCount})`, href: '/publications?type=journal', icon: <GraduationCap size={16} /> },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: <Rocket size={18} />,
    submenu: [
      { label: `All Projects (${totalProjects})`, href: '/projects?type=all', icon: <FolderOpen size={16} /> },
      { label: `Active Projects (${activeProjects})`, href: '/projects?type=active', icon: <Rocket size={16} /> },
      { label: `Completed Projects (${completedProjects})`, href: '/projects?type=completed', icon: <FolderKanban size={16} /> },
      { label: `Planned Projects (${plannedProjects})`, href: '/projects?type=planned', icon: <Calendar size={16} /> },
    ],
  },
  {
    label: 'Teams',
    href: '/teams',
    icon: <UserCircle size={18} />,
    submenu: [
      { label: `Research Team (${researchTeamCount})`, href: '/teams?type=research', icon: <UserCircle size={16} /> },
      { label: `Development Team (${developmentTeamCount})`, href: '/teams?type=development', icon: <Code2 size={16} /> },
    ],
  },
  {
    label: 'News',
    href: '/news',
    icon: <Newspaper size={18} />,
  },
  {
    label: 'Careers',
    href: '/careers',
    highlighted: true,
    icon: <Briefcase size={18} />,
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <Mail size={18} />,
  },
];
