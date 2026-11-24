export type ProjectCategory = 
  | 'All'
  | 'Systems & Backend'
  | 'Automation & Tools'
  | 'Product & Web';

export type ProjectStatus = 
  | 'Completed'
  | 'In Active Development'
  | 'Architecture Phase'
  | 'Experiment / Prototype'
  | 'Terminé'
  | 'En Développement Actif'
  | 'تکمیل‌شده'
  | 'در حال توسعه فعال';

export interface ProjectScreenshot {
  src: string;
  title: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Systems & Backend' | 'Automation & Tools' | 'Product & Web';
  year: string;
  status: ProjectStatus;
  featured: boolean;
  technologies: string[];
  summary: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  architectureDetails: string[];
  challenges: string[];
  lessonsLearned: string[];
  liveUrl?: string;
  liveLabel?: string;
  screenshots?: ProjectScreenshot[];
}

export type SkillProficiency = 'Actively Using' | 'Familiar With' | 'Learning' | 'Exploring';

export interface SkillItem {
  name: string;
  level: SkillProficiency;
  context?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface JourneyMilestone {
  period: string;
  title: string;
  organizationOrContext: string;
  description: string;
  tags: string[];
  type: 'education' | 'project' | 'transition' | 'exploration' | 'launch' | 'studio';
  link?: {
    label: string;
    url: string;
  };
}

export interface SocialLinks {
  github: string;
  email: string;
  linkedin: string;
  instagram: string;
  resumeUrl: string;
  location: string;
}
