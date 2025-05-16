
import type { Skill, SkillCategory } from '@/types';
import {
  CodeXml, Database, Code2, Palette, GitBranch, Server, Cloud, Layers, Wind, Terminal, Sigma, TableCells, GalleryThumbnails, HardDrive, MonitorSmartphone, Github, NotebookText, DraftingCompass, Blocks, Workflow, Shapes, Calculator, Chip, Network
} from 'lucide-react';

export const skillsCategorizedData: SkillCategory[] = [
  {
    categoryName: "Programming Languages",
    skills: [
      { name: 'Python', icon: CodeXml, description: 'Versatile language for web development, data analysis, and scripting.', level: 'Intermediate' },
      { name: 'C++', icon: FileCode2, description: 'High-performance language for systems programming and competitive coding.', level: 'Intermediate' },
      { name: 'JavaScript (ES6+)', icon: Code2, description: 'Essential for dynamic and interactive web development, both client and server-side.', level: 'Advanced' },
      { name: 'SQL', icon: Database, description: 'Managing and querying relational databases effectively.', level: 'Intermediate' },
      { name: 'HTML5', icon: Code2, description: 'Standard markup language for creating web pages and web applications.', level: 'Expert' },
      { name: 'CSS3', icon: Palette, description: 'Styling web content with modern techniques for responsive and engaging UIs.', level: 'Expert' },
    ]
  },
  {
    categoryName: "Frameworks & Libraries",
    skills: [
      { name: 'React.js', icon: Cpu, description: 'Building efficient, reusable UI components for single-page applications.', level: 'Advanced' },
      { name: 'Next.js', icon: Layers, description: 'Full-stack React framework for server-rendering, static site generation, and more.', level: 'Advanced' },
      { name: 'Node.js', icon: Server, description: 'JavaScript runtime for building scalable server-side applications and APIs.', level: 'Intermediate' },
      { name: 'Numpy', icon: Sigma, description: 'Fundamental package for numerical computation in Python.', level: 'Intermediate' },
      { name: 'Pandas', icon: TableCells, description: 'Powerful Python library for data manipulation and analysis.', level: 'Intermediate' },
      { name: 'Tailwind CSS', icon: Wind, description: 'Utility-first CSS framework for rapid UI development.', level: 'Advanced' },
      { name: 'Bootstrap', icon: GalleryThumbnails, description: 'Popular CSS framework for responsive, mobile-first front-end web development.', level: 'Intermediate' },
      { name: 'Arduino', icon: HardDrive, description: 'Open-source electronics platform based on easy-to-use hardware and software.', level: 'Intermediate' },
    ]
  },
  {
    categoryName: "Developer Tools",
    skills: [
      { name: 'VS Code', icon: MonitorSmartphone, description: 'Feature-rich source code editor with extensive customization options.', level: 'Expert' },
      { name: 'Git', icon: GitBranch, description: 'Distributed version control system for tracking changes and collaborating on projects.', level: 'Advanced' },
      { name: 'GitHub', icon: Github, description: 'Platform for hosting and collaborating on Git repositories.', level: 'Advanced' },
      { name: 'Jupyter Notebook', icon: NotebookText, description: 'Interactive computing environment for data science and scientific computing.', level: 'Intermediate' },
      { name: 'Canva', icon: DraftingCompass, description: 'Online design tool for creating graphics, presentations, and other visual content.', level: 'Intermediate' },
    ]
  },
  {
    categoryName: "Coursework & Concepts",
    skills: [
      { name: 'Data Structures', icon: Blocks, description: 'Understanding and implementing fundamental data organization methods.', level: 'Proficient' },
      { name: 'Algorithms', icon: Workflow, description: 'Designing and analyzing efficient problem-solving procedures.', level: 'Proficient' },
      { name: 'OOPs', icon: Shapes, description: 'Object-Oriented Programming principles for modular and reusable code.', level: 'Proficient' },
      { name: 'Discrete Mathematics', icon: Calculator, description: 'Mathematical structures that are fundamentally discrete rather than continuous.', level: 'Knowledgeable' },
      { name: 'Microcontrollers', icon: Chip, description: 'Programming and interfacing with microcontroller-based systems.', level: 'Knowledgeable' },
      { name: 'Computer System Org.', icon: Network, description: 'Understanding the basic structure and operation of digital computers.', level: 'Knowledgeable' },
    ]
  }
];

// Kept for potential future use or if other parts of the app still reference skillsData directly.
// For the main skills display, skillsCategorizedData is now primary.
export const skillsData: Skill[] = skillsCategorizedData.flatMap(category => category.skills);
