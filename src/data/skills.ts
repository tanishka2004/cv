import type { Skill } from '@/types';
import { Cpu, Database, Code2, Palette, GitBranch, Server, Cloud, Layers, Wind, Terminal } from 'lucide-react'; // Using Layers for Next.js, Wind for Tailwind CSS

export const skillsData: Skill[] = [
  { name: 'React', icon: Cpu, description: 'Building dynamic and responsive UIs with React, leveraging its component-based architecture for scalable applications.', level: 'Advanced' },
  { name: 'Next.js', icon: Layers, description: 'Developing full-stack applications with Next.js, utilizing SSR, SSG, and API routes for optimal performance and SEO.', level: 'Advanced' },
  { name: 'Node.js', icon: Server, description: 'Creating robust and efficient backend services and APIs using Node.js and Express.js.', level: 'Intermediate' },
  { name: 'Firebase', icon: Database, description: 'Integrating Firebase for real-time databases, authentication, hosting, and cloud functions.', level: 'Intermediate' },
  { name: 'TypeScript', icon: Code2, description: 'Enhancing JavaScript projects with static typing for improved code quality, maintainability, and developer experience.', level: 'Advanced' },
  { name: 'Tailwind CSS', icon: Wind, description: 'Rapidly designing modern and custom user interfaces with the utility-first Tailwind CSS framework.', level: 'Advanced' },
  { name: 'JavaScript (ES6+)', icon: Code2, description: 'Proficient in modern JavaScript for complex frontend logic and backend development.', level: 'Expert' },
  { name: 'HTML5', icon: Code2, description: 'Crafting semantic and accessible web structures using HTML5 best practices.', level: 'Expert' },
  { name: 'CSS3', icon: Palette, description: 'Styling responsive and visually appealing web pages with advanced CSS3 techniques, including Flexbox and Grid.', level: 'Expert' },
  { name: 'Python', icon: Terminal, description: 'Utilizing Python for scripting, automation, and backend development with frameworks like Flask/Django.', level: 'Intermediate' },
  { name: 'Git & GitHub', icon: GitBranch, description: 'Expert in version control using Git and collaborating on projects via GitHub.', level: 'Advanced' },
  { name: 'Cloud (GCP, Vercel)', icon: Cloud, description: 'Deploying and managing applications on cloud platforms like Google Cloud Platform and Vercel.', level: 'Intermediate' },
];
