import { 
  Info, 
  Target, 
  Users, 
  Handshake,
  FileText, 
  BookOpen,
  GraduationCap,
  Rocket, 
  FolderKanban,
  GitBranch,
  UserCircle
} from "lucide-react";

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
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Publications',
    href: '/publications',
    submenu: [
      { label: 'Research Papers', href: '/publications#research-papers', icon: <FileText size={16} /> },
      { label: 'Conference Papers', href: '/publications#conference-papers', icon: <BookOpen size={16} /> },
      { label: 'Journal Articles', href: '/publications#journal-articles', icon: <GraduationCap size={16} /> },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    submenu: [
      { label: 'Active Projects', href: '/projects#active', icon: <Rocket size={16} /> },
      { label: 'Completed Projects', href: '/projects#completed', icon: <FolderKanban size={16} /> },
      { label: 'Collaborations', href: '/projects#collaborations', icon: <GitBranch size={16} /> },
    ],
  },
  {
    label: 'Teams',
    href: '/teams',
    submenu: [
      { label: 'Research Team', href: '/teams#research', icon: <UserCircle size={16} /> },
      { label: 'Development Team', href: '/teams#development', icon: <Users size={16} /> },
    ],
  },
  {
    label: 'News',
    href: '/news',
  },
  {
    label: 'Careers',
    href: '/careers',
    highlighted: true,
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
