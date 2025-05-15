import type { LucideIcon } from 'lucide-react';

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  dataAiHint: string;
  liveLink?: string;
  repoLink?: string;
};

export type Skill = {
  name: string;
  icon: LucideIcon; // Or React.ElementType if using custom SVGs
  level?: string; // e.g., 'Advanced', 'Intermediate'
  description: string;
};

export type Testimonial = {
  author: string;
  role: string;
  text: string;
  rating: number;
  avatarUrl?: string;
  dataAiHint?: string;
};
